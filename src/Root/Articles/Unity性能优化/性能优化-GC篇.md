---
title: 性能优化 GC篇
date: 2025-12-05
tags: [Unity,技术,性能优化]

---
# Unity 性能优化 - GC (垃圾回收) 篇

> 💡 **核心理念**：最好的 GC 优化就是**不产生垃圾**。

## 一、数据类型核心特性：一切的起点

在 C# 中，理解**值类型**和**引用类型**的区别是理解内存管理的第一步。

### 1.1 值类型 (Value Type)

* **本质**：直接存储数据本身。
* **存储位置**：通常在**栈 (Stack)** 上（除非它是类的一个字段）。
* **比喻**：就像你手中的**现金**。给你 100 块钱，就是真的把钱给你了。如果你花了，不影响我口袋里的钱。
* **常见类型**：`int`, `float`, `bool`, `struct` (如 `Vector3`), `enum`。

```csharp
// 值类型示例
int a = 10;
int b = a; // 复制了一份数据
b = 20;    // 修改 b 不会影响 a
// 结果：a = 10, b = 20
```

### 1.2 引用类型 (Reference Type)

* **本质**：存储数据的**内存地址**（引用）。
* **存储位置**：数据存储在**托管堆 (Managed Heap)** 上，栈上只存一个指向堆的地址。
* **比喻**：就像**电视遥控器**。我把遥控器给你（复制引用），我们控制的是同一台电视（堆上的对象）。你换台，我也跟着看新台。
* **常见类型**：`class`, `string`, `array`, `delegate`, `interface`。

```csharp
// 引用类型示例
class Player { public int hp; }

Player p1 = new Player();
p1.hp = 100;
Player p2 = p1; // 复制了引用（遥控器）
p2.hp = 50;     // 修改 p2 指向的对象
// 结果：p1.hp 也是 50，因为它们指向同一个对象
```

---

## 二、内存模型基础认知

### 2.1 内存区域划分

我们可以把内存想象成一个**大仓库**，分成了不同的区域：

#### 1. 栈 (Stack) —— "整齐的盘子堆"

* **特点**：先进后出，存取速度极快。
* **管理**：自动管理。函数调用结束，局部变量自动弹出销毁。
* **存放**：局部变量（值类型）、参数。

#### 2. 托管堆 (Managed Heap) —— "随意的杂物间"

* **特点**：空间大，但分配和回收需要时间。
* **管理**：由 **GC (垃圾回收器)** 管理。
* **存放**：引用类型的实例（对象本身）。

#### 3. 原生堆 (Native Heap)

* **特点**：Unity 底层（C++）使用的内存。
* **管理**：手动管理（需要显式释放），如 `Texture2D`, `Mesh` 等资源。

```mermaid
graph TD
    subgraph Memory [内存空间]
        Stack[栈 (Stack)<br>存取快，自动清理<br>存放：int, float, struct]
        Heap[托管堆 (Managed Heap)<br>存取慢，GC清理<br>存放：class实例, string]
    end
    Stack -->|引用| Heap
```

### 2.2 关键问题：内存碎片

**什么是内存碎片？**
想象一个停车场。车子（对象）来了又走。

* **理想情况**：车子紧挨着停。
* **碎片情况**：车子乱停，中间空出很多小车位。
* **后果**：虽然总空位够停一辆大卡车，但没有**连续**的空位，导致大卡车停不进来。

**在 Unity 中**：如果内存碎片过多，即使总内存充足，申请大块内存（如加载大贴图）时也可能失败，甚至触发强制 GC 或崩溃。

---

## 三、GC 核心原理与性能影响

### 3.1 什么是垃圾回收 (GC)？

GC (Garbage Collection) 就是 Unity 的**保洁阿姨**。
她的工作流程：

1. **标记**：暂停所有工作（Stop The World），遍历所有对象，看看哪些还在被使用（有引用），哪些没人用了（垃圾）。
2. **清除**：把没人用的对象占用的内存标记为“可用”。
3. **压缩**（Unity 的 Boehm GC 默认**不**做这一步，这也是导致碎片的原因）：移动对象，填补空隙。

### 3.2 GC 的性能开销

GC 最大的问题是 **Stop The World (STW)**。

* 当 GC 运行时，你的游戏逻辑、渲染都会**完全暂停**。
* 如果 GC 耗时 100ms，玩家就会感觉到明显的**卡顿**（掉帧）。

---

## 四、实战优化：减少 GC 触发的核心策略

**核心口号：不要在 Update 中创建新对象！**

### 4.1 编辑器配置优化：启用增量 GC (Incremental GC)

* **原理**：把一次长时间的打扫（比如 100ms），拆分成多次短时间的打扫（比如 10次 10ms）。
* **优势**：虽然总耗时可能没变甚至略增，但单帧卡顿感消失了，游戏更流畅。
* **启用方式**：`Project Settings` -> `Player` -> `Other Settings` -> `Use Incremental GC` (勾选)。

### 4.2 代码层面优化：避坑指南

#### 4.2.1 String：隐形的内存杀手

`string` 是引用类型，且**不可变**。每次拼接都会创建新对象。

❌ **糟糕的写法**：

```csharp
void Update() {
    // 每帧都在堆上创建新的字符串对象！
    scoreText.text = "Score: " + score; 
}
```

✅ **优化方案**：

1. 使用 `StringBuilder`（适合复杂拼接）。
2. 检测值变化才更新。
3. 使用 `ZString` 等零分配库（进阶）。

```csharp
StringBuilder sb = new StringBuilder();
void Update() {
    if (score != lastScore) {
        sb.Clear();
        sb.Append("Score: ");
        sb.Append(score);
        scoreText.text = sb.ToString(); // 依然有少量 GC，但比直接拼接好
        lastScore = score;
    }
}
```

#### 4.2.2 闭包与 Lambda 表达式

匿名函数如果捕获了外部变量，会生成临时的类实例。

❌ **糟糕的写法**：

```csharp
void Start() {
    int id = 5;
    // 这里的 Lambda 捕获了局部变量 id，会产生 GC
    Action myAction = () => Debug.Log(id); 
    myAction();
}
```

#### 4.2.3 装箱 (Boxing)

把值类型转换为引用类型（如 `object` 或接口）时，会在堆上创建一个“箱子”来装这个值。

❌ **糟糕的写法**：

```csharp
int num = 10;
object obj = num; // 装箱！产生 GC
Debug.Log(string.Format("Number: {0}", num)); // Format 内部参数是 object，发生装箱
```

✅ **优化方案**：

* 使用泛型方法避免装箱。
* 重写 `ToString()`。

#### 4.2.4 LINQ

LINQ 虽然写起来爽，但很容易产生中间对象和装箱。

❌ **糟糕的写法** (在 Update 中)：

```csharp
var item = list.Where(x => x.id > 10).FirstOrDefault(); // 产生 GC
```

✅ **优化方案**：

* 在热点代码（Update）中，使用原生 `for` 或 `foreach` 循环代替 LINQ。

#### 4.2.5 协程 (Coroutine)

`yield return new WaitForSeconds(1f)` 每次都会创建一个新对象。

❌ **糟糕的写法**：

```csharp
IEnumerator MyCoroutine() {
    while(true) {
        yield return new WaitForSeconds(0.1f); // 每 0.1秒 产生垃圾
    }
}
```

✅ **优化方案**：缓存对象。

```csharp
WaitForSeconds wait = new WaitForSeconds(0.1f);
IEnumerator MyCoroutine() {
    while(true) {
        yield return wait; // 0 GC
    }
}
```

### 4.2.6 对象池 (Object Pooling)

这是解决高频创建/销毁对象（如子弹、特效）的终极方案。

* **原理**：用完对象不销毁，而是“回收”到池子里，下次要用直接“取”出来。

```csharp
// 简单的对象池概念
public class BulletPool {
    private Queue<GameObject> pool = new Queue<GameObject>();

    public GameObject Get() {
        if (pool.Count > 0) {
            GameObject obj = pool.Dequeue();
            obj.SetActive(true);
            return obj;
        }
        return Instantiate(prefab); // 池里没了才创建新的
    }

    public void Return(GameObject obj) {
        obj.SetActive(false);
        pool.Enqueue(obj);
    }
}
```

### 4.2.7 结构体数组 (Struct Arrays) 与 Native Collections

对于极致性能需求，可以使用 Unity 的 `NativeArray` 等集合，它们分配在**原生堆**上，完全不受 GC 影响。

```csharp
// 使用 NativeArray (需要引入 Unity.Collections)
NativeArray<int> nums = new NativeArray<int>(100, Allocator.Temp);
// ... 使用 nums ...
nums.Dispose(); // 必须手动释放！
```

---

## 五、总结

1. **关注高频调用**：`Update`, `FixedUpdate`, `LateUpdate` 中的代码是 GC 优化的重中之重。
2. **善用工具**：使用 Unity Profiler 的 **GC Alloc** 列来查找每一帧产生的垃圾。
3. **平衡**：不要为了 0 GC 而过度牺牲代码可读性，优先解决大头。
