---
title: 性能优化-GC篇
date: 2025-12-05
tags: [Unity, 性能优化, GC]
---

# 性能优化-GC篇

在Unity开发中，垃圾回收（Garbage Collection，简称GC）是性能优化中不可忽视的一环。GC引起的卡顿（Spike）往往是造成游戏帧率不稳定的主要原因之一。本文将深入剖析GC的原理，并提供实用的优化策略。

# 一、数据类型特性

理解C#中的数据类型是理解内存管理的基础。C#的数据类型主要分为两大类：**值类型**和**引用类型**。

## 1.1 值类型 (Value Types)
*   **定义**：变量直接包含其数据。
*   **存储位置**：通常分配在**栈（Stack）**上（除非它是类的一个字段，此时随类存储在堆上）。
*   **特点**：
    *   分配和释放速度非常快。
    *   生命周期随作用域结束而结束，**不需要GC管理**。
    *   赋值时进行数据复制。
*   **常见类型**：`int`, `float`, `bool`, `struct` (如 `Vector3`, `Quaternion`), `enum`。

## 1.2 引用类型 (Reference Types)
*   **定义**：变量存储的是指向数据的**内存地址（引用）**，实际数据存储在堆上。
*   **存储位置**：实际对象分配在**托管堆（Managed Heap）**上，栈上只存储引用地址。
*   **特点**：
    *   分配需要从堆中寻找合适内存块，速度较慢。
    *   由**GC负责回收**。
    *   赋值时复制的是引用地址，多个变量可能指向同一个对象。
*   **常见类型**：`class`, `string`, `array`, `delegate`, `interface`。

```mermaid
graph TD
    subgraph Stack [栈内存 (Stack)]
        A[int a = 10]
        B[Vector3 pos]
        C[ref ptr -> Heap]
    end
    subgraph Heap [托管堆 (Managed Heap)]
        O[Class Object {Data...}]
    end
    C --> O
    style Stack fill:#f9f,stroke:#333,stroke-width:2px
    style Heap fill:#ccf,stroke:#333,stroke-width:2px
```

## 1.3 结构体 vs 类 (Struct vs Class)

*   **选择结构体 (struct) 当**：
    1.  对象较小（小于 16 字节）。
    2.  生命周期短。
    3.  不需要继承。
    4.  不需要频繁作为参数传递（避免值拷贝开销）。
*   **选择类 (class) 当**：
    1.  对象较大。
    2.  需要继承或多态。
    3.  需要在多处共享同一份数据。

# 二、内存基础概念

## 2.1 内存区域划分

在Unity应用运行过程中，内存主要被划分为三个区域：

### 1. 栈 (Stack)
*   **用途**：用于存储局部变量、参数传递和函数调用上下文。
*   **管理方式**：由CPU自动管理，先进后出（LIFO）。
*   **性能**：存取速度极快，不会产生内存碎片。
*   **GC关联**：**与GC无关**。

### 2. 托管堆 (Managed Heap)
*   **用途**：存储所有被分配的引用类型对象（如 `new GameObject()`, `string`, `List<T>`）。
*   **管理方式**：由Mono/IL2CPP虚拟机的内存管理器管理。
*   **性能**：分配速度取决于内存碎片的程度，比栈慢。
*   **GC关联**：**GC的主要工作区域**。当堆内存不足或达到阈值时，触发GC。

### 3. 原生堆 (Native Heap / Unmanaged Heap)
*   **用途**：存储Unity底层C++引擎使用的资源，如 `Texture` 数据, `Mesh` 顶点数据, `AudioClip` 等。
*   **管理方式**：需要手动管理或由Unity引擎内部管理。通常通过 `Destroy` 或 `UnloadUnusedAssets` 释放。
*   **GC关联**：GC不直接管理此区域，但C#层的封装对象（如 `Texture2D` 对象本身）在托管堆，如果C#对象被回收，可能会触发底层资源的引用计数减少。

## 2.2 核心内存问题：内存碎片

### 什么是内存碎片？

内存碎片是指内存中存在大量不连续的空闲小块内存，虽然总的空闲内存足够，但无法分配出一块足够大的连续内存空间。

**示意图：**

```text
[已占用] [空闲 10MB] [已占用] [空闲 5MB] [已占用] 
```

此时如果需要分配一个 **12MB** 的对象，虽然总空闲有 15MB，但因为没有连续的 12MB 空间，分配会失败。

**后果**：
1.  **触发GC**：系统会尝试通过GC清理内存来腾出空间。
2.  **堆扩张**：如果GC后仍然不够，Unity会向操作系统申请更多内存，导致应用内存占用变大，容易被系统杀后台（OOM）。
3.  **分配失败**：极端情况下导致Crash。

# 三、GC核心认知

## 3.1 什么是GC

GC（Garbage Collection）是自动化内存管理机制。它的核心职责是：
1.  **根搜索 (Mark)**：从“根”对象（静态变量、栈上的局部变量等）开始遍历，标记所有可达对象。
2.  **清除 (Sweep)**：扫描整个堆，回收那些未被标记（不可达）的对象占用的内存。

Unity主要使用 **Boehm-Demers-Weiser GC** (旧版/默认，非分代，非压缩) 和 **Incremental GC** (增量式，新版)。

## 3.2 GC的性能影响

### GC为什么会导致较大的性能开销？

1.  **Stop The World (STW)**：
    当GC运行时，它通常需要暂停所有的游戏逻辑线程（除了音频等极少数线程）。这是为了防止在分析内存引用关系时，数据还在不断变化。
    *   如果GC耗时 50ms，那么游戏画面就会卡住 50ms，玩家会感觉到明显的掉帧。

2.  **遍历开销**：
    GC需要遍历托管堆上的**所有活动对象**来标记引用关系。堆上对象越多，标记过程越慢。这意味着即使你的“垃圾”很少，只要活着的对象很多，GC依然会慢。

3.  **内存整理（碎片化）**：
    标准的 Boehm GC **不会**进行内存压缩（Compacting），这意味着它只标记空闲内存，不移动对象。这也是导致内存碎片的主要原因。

# 四、GC优化策略：减少GC触发

优化的核心目标：**减少堆内存分配（Alloc），从而减少GC触发频率和单次GC的耗时。**

## 4.1 编辑器配置优化

### 启用增量GC (Incremental GC)

*   **什么是增量GC**：
    传统的GC是一次性做完所有工作（标记、清除），导致长时间的卡顿。
    增量GC将庞大的GC工作**分摊**到多个帧中执行。每一帧只做一点点GC工作，尽量不超出帧预算。
    *   *比喻*：以前是大扫除，一年搞一次，累死人；现在是每天打扫一点，保持屋子整洁。

*   **配置方法**：
    `Project Settings` -> `Player` -> `Other Settings` -> 勾选 `Use Incremental GC`。

*   **注意**：增量GC并不会减少总的GC开销，甚至可能因为写屏障（Write Barrier）稍微增加一点总开销，但它能极大地**平滑帧率**，消除峰值卡顿。

## 4.2 代码层面优化：避免频繁创建引用类型

### 4.2.1 常见高频问题场景

#### 1. String 相关问题
`string` 是不可变的引用类型。任何对字符串的拼接、修改操作都会创建新的字符串对象。

*   **问题代码**：
    ```csharp
    void Update() {
        // ❌ 每帧都会在堆上创建一个新的字符串对象！
        scoreText.text = "Score: " + score; 
    }
    ```

#### 2. 闭包问题
在匿名函数或Lambda表达式中使用外部变量时，编译器会自动生成一个类来持有这些变量，从而产生堆分配。

*   **问题代码**：
    ```csharp
    void Start() {
        int id = 100;
        // ❌ 捕获了局部变量 id，产生闭包分配
        Action action = () => { Debug.Log(id); };
        action.Invoke();
    }
    ```

#### 3. 装箱操作 (Boxing)
将值类型赋值给引用类型（如 `object` 或接口）时，需要将值类型包装成堆上的对象。这是非常隐蔽的GC来源。

*   **问题代码**：
    ```csharp
    void LogInfo(object info) { ... }

    void Update() {
        int health = 100;
        // ❌ int 被装箱为 object，产生GC Alloc
        LogInfo(health); 
        
        // ❌ string.Format 的参数也是 object，导致装箱
        Debug.Log(string.Format("Health: {0}", health));
        
        // ❌ 字典的 key 是 struct 但没有实现 IEquatable<T>，也可能导致装箱
    }
    ```

#### 4. Action实例化（Lambda表达式）
即使不捕获变量，将方法作为委托传递时也可能产生分配。

*   **问题代码**：
    ```csharp
    void Update() {
        // ❌ 某些旧版编译器或特定情况下，每次 Update 可能会 new 一个 Action
        Func<int> func = () => 1;
    }
    ```

#### 5. LINQ 使用问题
LINQ 虽然简洁，但由于其内部大量使用委托、闭包和迭代器，极易产生大量的垃圾对象。

*   **问题代码**：
    ```csharp
    void Update() {
        // ❌ 极度危险：每帧产生大量中间对象
        var item = list.Where(x => x.Active).OrderBy(x => x.Name).First();
    }
    ```

#### 6. 协程中的内存问题
`yield return new xxx` 会创建新的等待对象。

*   **问题代码**：
    ```csharp
    IEnumerator Wait() {
        while(true) {
            // ❌ 每次循环都 new 一个新对象
            yield return new WaitForSeconds(1f);
        }
    }
    ```

#### 7. foreach 循环的潜在问题
在旧版Mono编译器（Unity 5.5以前）中，`foreach` 会导致枚举器的装箱。虽然新版Unity已修复，但在自定义集合或特定接口调用下仍需注意。如果你将 List 转换为 IEnumerable 进行 foreach，仍然会产生装箱。

### 4.2.2 问题解决办法

#### 1. 对象池工厂模式 (Object Pooling)
对于频繁创建和销毁的对象（如子弹、特效、UI条目），使用对象池进行复用。

```csharp
public class ObjectPool<T> where T : new() {
    private Stack<T> _pool = new Stack<T>();
    
    public T Get() {
        return _pool.Count > 0 ? _pool.Pop() : new T();
    }
    
    public void Return(T item) {
        _pool.Push(item);
    }
}
```

#### 2. 对象实例复用
对于集合类（List, Dictionary），避免频繁 `new`，而是使用 `Clear()`。

```csharp
// ✅ 推荐：成员变量复用
private List<int> _tempList = new List<int>(128); // 预设容量

void Update() {
    _tempList.Clear(); // 0 Alloc
    // Fill _tempList...
}
```

#### 3. 泛型避免装箱
使用泛型接口替代 `object` 参数。

```csharp
// ❌ 导致装箱
public void Compare(object a, object b) { ... }

// ✅ 避免装箱
public void Compare<T>(T a, T b) where T : IEquatable<T> { ... }
```

#### 4. 字符串优化
*   使用 `StringBuilder` 进行复杂拼接。
*   对于特定格式（如分数），使用缓存数组或 `ZString` 等零分配库。
*   使用 `string.IsNullOrEmpty` 代替 `str == ""`。
*   **字符串驻留**：对于固定的字符串，直接使用字面量。

```csharp
// ✅ StringBuilder 复用
private StringBuilder _sb = new StringBuilder();
void Update() {
    _sb.Clear();
    _sb.Append("Score: ").Append(score);
    text.text = _sb.ToString(); // 只有 ToString 产生一次分配
}
```

#### 5. 协程优化
缓存 `WaitForSeconds` 对象。

```csharp
// ✅ 缓存等待对象
private WaitForSeconds _wait = new WaitForSeconds(1f);
IEnumerator Wait() {
    while(true) {
        yield return _wait; // 0 Alloc
    }
}
```

#### 6. Native容器的应用
使用 `Unity.Collections` 中的 Native 容器（如 `NativeArray`, `NativeList`）。
*   **优点**：它们分配在**原生堆（Native Heap）**上，不参与GC扫描，彻底避免托管堆内存碎片。
*   **注意**：必须手动 `Dispose` 释放，否则会内存泄漏。

```csharp
// 需要引入 Unity.Collections
NativeArray<int> nums = new NativeArray<int>(100, Allocator.Temp);
// 使用 nums ...
nums.Dispose(); // 必须手动释放！
```

#### 7. 主动触发 GC (Advanced)
在某些场景下（如加载过场、黑屏期间），我们可以**主动调用** `System.GC.Collect()`。这虽然会卡顿，但发生在玩家无感知的时刻，可以避免在战斗激烈时触发GC。

```csharp
// 在关卡加载完毕，淡入画面之前
System.GC.Collect();
