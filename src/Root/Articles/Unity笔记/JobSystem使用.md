---
title: Unity Job System 笔记
date: 2025-12-05
tags: [Unity,技术,笔记,多线程,性能优化]
---

# Unity Job System 笔记

## 1. 简介

**C# Job System** 是 Unity Data-Oriented Technology Stack (DOTS) 的核心支柱之一。它允许开发者编写安全、快速的多线程代码，充分利用现代多核 CPU 的性能。

### 1.1 核心优势

*   **安全性**：内置竞争条件检测（Race Condition Detection），防止常见的多线程 Bug。
*   **高性能**：配合 **Burst Compiler**，可以将 C# 代码编译成高度优化的原生机器码（SIMD 指令），性能提升可达 10-100 倍。
*   **无 GC**：Job System 强制使用非托管内存（Native Container），完全避免垃圾回收开销。
*   **易用性**：自动管理线程池，无需手动创建和销毁线程。

## 2. 安装与环境

Job System 是 Unity 核心模块，无需安装。但为了获得性能提升，**必须**安装 Burst Compiler 和 Collections 包。

1.  打开 `Package Manager`。
2.  安装 `Burst`。
3.  安装 `Collections` (提供了 `NativeList`, `NativeHashMap` 等高级容器)。
4.  安装 `Mathematics` (提供了 SIMD 友好的数学库，如 `float3`, `quaternion`)。

## 3. 核心概念

### 3.1 Job 类型

*   **IJob**：最基础的 Job，在一个线程上执行一项任务。
*   **IJobParallelFor**：并行 Job，将一个数组拆分成多个片段，在多个核心上同时处理。适用于处理大量同类数据（如 10000 个敌人的移动）。
*   **IJobParallelForTransform**：专门用于并行修改 Transform 的 Job（需要 `Unity.Jobs` 包）。

### 3.2 Native Container (原生容器)

Job System 运行在工作线程，无法访问托管堆上的对象（如 `List<T>`, `class`）。必须使用 Native Container，它们分配在非托管内存中。

*   **NativeArray<T>**：固定长度数组。
*   **NativeList<T>**：可变长列表。
*   **NativeHashMap<TKey, TValue>**：哈希表。
*   **NativeQueue<T>**：队列。

### 3.3 Allocator (分配器)

创建 Native Container 时必须指定分配器：
*   **Allocator.Temp**：最快。生命周期仅限一帧。**不能传给 Job**。
*   **Allocator.TempJob**：较快。生命周期 4 帧。**传给 Job 用这个**。
*   **Allocator.Persistent**：最慢。长期存在，直到手动 Dispose。

## 4. 实战示例

### 4.1 简单的 IJob

```csharp
using Unity.Jobs;
using Unity.Collections;
using Unity.Burst;
using UnityEngine;

public class SimpleJobExample : MonoBehaviour
{
    // [BurstCompile] 开启爆裂编译优化
    [BurstCompile]
    struct AddJob : IJob
    {
        public float a;
        public float b;
        // 输出结果必须用 NativeArray，即使只有一个值
        public NativeArray<float> result;

        public void Execute()
        {
            result[0] = a + b;
        }
    }

    void Start()
    {
        // 1. 创建数据
        NativeArray<float> result = new NativeArray<float>(1, Allocator.TempJob);

        // 2. 创建 Job
        AddJob job = new AddJob
        {
            a = 10,
            b = 20,
            result = result
        };

        // 3. 调度 Job
        JobHandle handle = job.Schedule();

        // 4. 等待完成
        handle.Complete();

        // 5. 获取结果
        Debug.Log("Result: " + result[0]);

        // 6. 释放内存
        result.Dispose();
    }
}
```

### 4.2 高性能并行 IJobParallelFor

场景：计算 10 万个物体的移动位置。

```csharp
using Unity.Jobs;
using Unity.Collections;
using Unity.Burst;
using Unity.Mathematics;
using UnityEngine;

public class ParallelJobExample : MonoBehaviour
{
    [BurstCompile]
    struct MoveJob : IJobParallelFor
    {
        // ReadOnly 标记可以提升性能，允许多个 Job 同时读取
        [ReadOnly] public NativeArray<float3> velocities;
        public NativeArray<float3> positions;
        public float deltaTime;

        public void Execute(int index)
        {
            // 复杂的数学运算
            positions[index] += velocities[index] * deltaTime;
        }
    }

    void Update()
    {
        int count = 100000;
        var positions = new NativeArray<float3>(count, Allocator.TempJob);
        var velocities = new NativeArray<float3>(count, Allocator.TempJob);

        // 初始化数据...

        MoveJob job = new MoveJob
        {
            positions = positions,
            velocities = velocities,
            deltaTime = Time.deltaTime
        };

        // ScheduleParallel 的第二个参数是 batchSize
        // 64 表示每个线程一次领 64 个任务，太小会导致调度开销过大
        JobHandle handle = job.Schedule(count, 64);

        // 必须在某一时刻 Complete，否则内存泄漏且报错
        handle.Complete();

        positions.Dispose();
        velocities.Dispose();
    }
}
```

## 5. 常见问题与解决方案

### 5.1 `InvalidOperationException: The NativeArray has been deallocated`

**原因**：访问了已经 Dispose 的容器，或者使用了 Temp 分配器传给 Job。
**解决**：检查 Allocator 类型，确保 Dispose 在 Complete 之后调用。

### 5.2 主线程卡顿

**原因**：在 `Schedule` 后立即调用 `Complete`。这会强制主线程等待子线程，失去了并行的意义。
**解决**：
*   **最佳实践**：在 `Update` 开始时 Schedule，在 `LateUpdate` 中 Complete。利用中间的时间差让 Job 在后台跑。

### 5.3 无法访问引用类型

**问题**：Job 里想修改 `transform.position` 或读取 `string`。
**解决**：
*   对于 Transform，使用 `IJobParallelForTransform`。
*   对于其他引用类型，必须在主线程将数据拷贝到 NativeArray 中，传给 Job 处理完后，再拷回主线程应用。

## 6. 进阶技巧

### 6.1 Job 依赖 (Dependency)

Job B 依赖 Job A 的结果。

```csharp
JobHandle handleA = jobA.Schedule();
// 将 handleA 作为依赖传给 jobB
JobHandle handleB = jobB.Schedule(handleA);
handleB.Complete(); // 等待 B 完成（隐含 A 也完成了）
```

### 6.2 Burst 调试

如果 Burst 编译失败，Job 会回退到普通 C# 模式运行，速度慢很多。
*   在编辑器菜单 `Jobs` -> `Burst` -> `Open Inspector`。
*   选中你的 Job，查看生成的汇编代码和报错信息。

## 7. 总结

Job System 是通往高性能 Unity 开发的必经之路。

*   **什么时候用？**
    *   大量重复的数学计算（如 Boids 鸟群算法）。
    *   程序化网格生成。
    *   自定义物理引擎或碰撞检测。
*   **什么时候不用？**
    *   简单的逻辑判断。
    *   深度依赖 Unity API（如物理射线检测、NavMesh）的逻辑。

## 8. 参考资源

*   [Unity Job System Manual](https://docs.unity3d.com/Manual/JobSystem.html)
*   [Burst Compiler Guide](https://docs.unity3d.com/Packages/com.unity.burst@latest/index.html)
*   [Catlike Coding - Basics / Jobs](https://catlikecoding.com/unity/tutorials/basics/jobs/)
