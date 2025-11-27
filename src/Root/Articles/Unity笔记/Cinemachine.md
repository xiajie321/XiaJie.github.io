---
title: Unity Cinemachine 笔记
date: 2025-11-28
tags: [Unity,技术,笔记]
---
# Unity Cinemachine 笔记

## 1. 简介

Cinemachine 是 Unity 官方提供的一套强大的相机系统插件，用于创建复杂的相机行为和过渡效果。它通过 "Virtual Camera"（虚拟相机）的概念，将相机控制逻辑与具体的相机对象分离，使得开发者可以轻松创建各种专业级的相机效果。

### 1.1 核心优势

- **模块化设计**：通过组合不同的组件实现复杂相机行为
- **可视化编辑**：直观的 Inspector 面板和场景视图调试
- **平滑过渡**：内置的相机切换和混合系统
- **智能跟随**：自动处理目标跟随、旋转和碰撞
- **性能优化**：只激活当前使用的相机，减少性能开销
- **扩展性强**：支持自定义组件和扩展

## 2. 安装与设置

### 2.1 安装方式

1. **通过 Package Manager 安装**：
   - 打开 Unity Package Manager
   - 搜索 "Cinemachine"
   - 点击 "Install" 按钮

2. **通过 Asset Store 安装**：
   - 访问 Unity Asset Store
   - 搜索并下载 Cinemachine
   - 导入到项目中

### 2.2 基本设置

安装完成后，需要进行一些基本设置：

1. **创建 Cinemachine Brain**：
   - 在 Main Camera 上添加 `CinemachineBrain` 组件
   - 这个组件负责管理所有虚拟相机，并将它们的输出渲染到实际相机上

2. **配置 Default Blend**：
   - 在 CinemachineBrain 组件中设置默认的相机切换过渡效果
   - 可以选择不同的过渡类型（如 Ease In Out、Hard Cut 等）和持续时间

## 3. 核心概念

### 3.1 Virtual Camera (虚拟相机)

虚拟相机是 Cinemachine 的核心概念，它代表了一个相机视角，但本身并不是一个实际的相机对象。虚拟相机包含了相机的所有属性和行为逻辑。

- **Priority (优先级)**：决定哪个虚拟相机当前处于激活状态
- **Follow (跟随目标)**：虚拟相机跟随的游戏对象
- **Look At (观察目标)**：虚拟相机指向的游戏对象
- **Lens (镜头)**：控制视野、近裁剪面、远裁剪面等

### 3.2 Cinemachine Brain

Cinemachine Brain 是连接虚拟相机和实际相机的桥梁：

- 管理所有虚拟相机的激活状态
- 处理相机之间的过渡效果
- 将虚拟相机的输出应用到实际相机上
- 支持自定义相机混合逻辑

### 3.3 Camera Rig (相机 rig)

Camera Rig 是一组相关的虚拟相机的集合，用于实现特定的相机效果。例如，一个第三人称相机 rig 可能包含：

- 一个主跟随相机
- 一个用于瞄准的相机
- 一个用于特写的相机

## 4. 主要组件

### 4.1 CinemachineVirtualCamera

最基本的虚拟相机组件，用于创建简单的跟随和观察相机。

**主要属性**：
- **Follow**：跟随的目标对象
- **Look At**：观察的目标对象
- **Body**：控制相机位置的算法（如 Framing Transposer、Hard Lock to Target 等）
- **Aim**：控制相机旋转的算法（如 Composer、Group Composer 等）
- **Noise**：添加相机抖动效果

### 4.2 CinemachineFreeLook

用于创建第三人称自由视角相机，允许玩家通过输入控制相机围绕目标旋转。

**主要属性**：
- **m_LookAt**：观察目标
- **m_Follow**：跟随目标
- **m_Orbits**：定义相机可以移动的轨道（通常有上、中、下三个轨道）
- **m_RecenterToTargetHeading**：是否自动将相机重新对准目标前方

### 4.3 CinemachineDollyCart

用于创建沿着预设路径移动的相机，通常与 CinemachineDollyTrack 配合使用。

**主要属性**：
- **m_Path**：相机移动的路径
- **m_Position**：相机在路径上的位置
- **m_Speed**：相机移动速度
- **m_AutoDolly**：是否自动沿着路径移动

### 4.4 CinemachineClearShot

用于管理多个虚拟相机，根据目标的位置和可见性自动选择最佳相机。

**主要属性**：
- **m_Shots**：包含的虚拟相机列表
- **m_StandbyUpdate**：待机相机的更新模式
- **m_SwitchPriority**：相机切换的优先级规则

### 4.5 CinemachineStateDrivenCamera

根据动画状态机的状态自动切换虚拟相机，用于实现动画驱动的相机切换。

**主要属性**：
- **m_AnimatedTarget**：动画目标对象
- **m_Instructions**：状态与相机的映射关系

## 5. 工作原理

### 5.1 相机激活机制

Cinemachine 使用优先级系统来决定哪个虚拟相机当前处于激活状态：

1. 所有虚拟相机根据优先级排序
2. 优先级最高的虚拟相机被激活
3. 如果多个相机优先级相同，则最近被启用的相机被激活
4. 可以通过脚本动态修改相机优先级

### 5.2 相机更新流程

每个帧，Cinemachine 执行以下更新流程：

1. **CinemachineBrain.Update()**：触发所有虚拟相机的更新
2. **虚拟相机更新**：
   - 处理 Follow 和 Look At 目标
   - 应用 Body 算法计算位置
   - 应用 Aim 算法计算旋转
   - 应用 Noise 效果
   - 处理碰撞检测
3. **相机混合**：如果有多个相机处于过渡状态，计算混合后的相机属性
4. **应用到实际相机**：将最终的相机属性应用到实际相机上

### 5.3 碰撞检测

Cinemachine 内置了强大的碰撞检测系统：

- 可以检测相机与场景中物体的碰撞
- 自动调整相机位置，避免被物体遮挡
- 支持自定义碰撞层和偏移量
- 可以设置软碰撞和硬碰撞

## 6. 常用 Body 类型

### 6.1 Framing Transposer

最常用的 Body 类型，用于创建平滑的跟随效果：

- **m_XDamping**：水平方向的阻尼
- **m_YDamping**：垂直方向的阻尼
- **m_ZDamping**：深度方向的阻尼
- **m_DeadZoneWidth**：水平死区，在这个区域内相机不会跟随目标移动
- **m_DeadZoneHeight**：垂直死区
- **m_BottomOffset**：底部偏移量，用于调整相机高度

### 6.2 Hard Lock to Target

将相机位置锁定到目标位置，没有任何平滑效果：

- 适用于需要精确跟随的场景
- 没有额外的调整参数

### 6.3 Orbital Transposer

允许相机围绕目标旋转，同时保持跟随：

- **m_XAxis**：水平旋转设置
- **m_YAxis**：垂直旋转设置
- **m_DeadZoneWidth**：水平死区
- **m_DeadZoneHeight**：垂直死区

### 6.4 Transposer

基本的跟随算法，提供简单的位置跟随：

- **m_XDamping**：水平阻尼
- **m_YDamping**：垂直阻尼
- **m_ZDamping**：深度阻尼
- **m_Offset**：相机与目标的偏移量

## 7. 常用 Aim 类型

### 7.1 Composer

智能的瞄准算法，确保目标始终在相机视野内：

- **m_ScreenX**：目标在屏幕上的 X 位置（0-1）
- **m_ScreenY**：目标在屏幕上的 Y 位置（0-1）
- **m_DeadZoneWidth**：水平死区
- **m_DeadZoneHeight**：垂直死区
- **m_TrackedObjectOffset**：目标偏移量
- **m_BiasX**：水平偏差，用于调整相机旋转速度
- **m_BiasY**：垂直偏差

### 7.2 Group Composer

用于同时瞄准多个目标，确保所有目标都在相机视野内：

- **m_TrackedObjects**：要跟踪的目标列表
- **m_ScreenX**：目标组在屏幕上的 X 位置
- **m_ScreenY**：目标组在屏幕上的 Y 位置
- **m_FrameWidth**：目标组的宽度占屏幕的比例
- **m_FrameHeight**：目标组的高度占屏幕的比例

### 7.3 Hard Look At

将相机直接指向目标，没有任何平滑效果：

- 适用于需要精确瞄准的场景
- 没有额外的调整参数

### 7.4 Look At With Damp

平滑地将相机指向目标：

- **m_Damping**：旋转阻尼值

## 8. 相机混合与过渡

### 8.1 基本过渡

Cinemachine 支持多种相机过渡方式：

- **Hard Cut**：立即切换，没有过渡效果
- **Ease In Out**：平滑的淡入淡出效果
- **Custom**：自定义过渡曲线
- **Cubic**：三次方曲线过渡，更自然的加速减速

### 8.2 混合空间

对于更复杂的相机过渡，可以使用 Cinemachine Mixing Camera：

- 支持同时混合多个虚拟相机
- 可以通过脚本动态调整每个相机的权重
- 适用于创建复杂的相机切换效果，如第三人称到第一人称的平滑过渡

### 8.3 自定义过渡

可以通过实现 `ICinemachineBlendListCamera` 接口来创建自定义的相机过渡效果：

```csharp
public class CustomBlend : MonoBehaviour, ICinemachineBlendListCamera
{
    // 实现自定义混合逻辑
}
```

## 9. 高级功能

### 9.1 相机抖动（Noise）

Cinemachine 内置了强大的相机抖动系统：

- 支持多种预设抖动效果（如爆炸、地震、脚步声等）
- 可以自定义抖动曲线
- 支持 3D 抖动（位置和旋转）
- 可以通过脚本动态触发和控制抖动

### 9.2 程序化相机路径

使用 Cinemachine Dolly Track 可以创建程序化的相机路径：

- 支持贝塞尔曲线和样条曲线
- 可以在运行时动态修改路径
- 支持路径约束和自动对齐

### 9.3 相机碰撞和规避

Cinemachine 提供了智能的碰撞检测和规避系统：

- **Obstacle Culling**：自动检测并避免相机被物体遮挡
- **Soft Zone**：在碰撞前提前调整相机位置
- **Hard Zone**：碰撞时强制调整相机位置
- 支持自定义碰撞层和偏移量

### 9.4 多相机协同工作

可以通过以下方式实现多个相机的协同工作：

- **CinemachineClearShot**：自动选择最佳相机
- **CinemachineStateDrivenCamera**：根据动画状态切换相机
- **脚本控制**：通过代码动态切换相机优先级

## 10. 性能优化

### 10.1 相机激活优化

- 只启用当前需要的虚拟相机
- 使用 CinemachineBrain.m_UpdateMethod 控制更新频率
- 对于不活跃的相机，设置较低的更新频率

### 10.2 碰撞检测优化

- 减少碰撞检测的频率
- 使用简化的碰撞体进行相机碰撞检测
- 合理设置碰撞层，只检测相关物体

### 10.3 脚本优化

- 避免在相机更新中执行复杂的计算
- 使用缓存减少重复计算
- 考虑使用 Job System 处理复杂的相机逻辑

## 11. 使用场景与最佳实践

### 11.1 第三人称相机

**设置步骤**：
1. 创建 CinemachineFreeLook 相机
2. 设置 Follow 和 Look At 目标
3. 调整轨道参数，设置合适的相机距离和高度
4. 配置碰撞检测，避免相机被物体遮挡
5. 添加适当的 Noise 效果，增强沉浸感

**最佳实践**：
- 为不同的游戏状态（如步行、跑步、战斗）创建不同的相机配置
- 使用 Dead Zone 避免相机过度敏感
- 调整阻尼参数，获得平滑的跟随效果

### 11.2 第一人称相机

**设置步骤**：
1. 创建 CinemachineVirtualCamera
2. 将 Follow 和 Look At 设置为玩家角色
3. 使用 Hard Lock to Target Body 类型
4. 使用 Composer Aim 类型，调整目标位置
5. 添加适当的 Noise 效果，模拟呼吸和脚步声

**最佳实践**：
- 限制相机的垂直旋转范围，避免过度旋转
- 添加轻微的相机抖动，增强真实感
- 实现武器瞄准模式，切换到不同的相机配置

### 11.3 过场动画相机

**设置步骤**：
1. 创建 CinemachineDollyTrack 和 CinemachineDollyCart
2. 设计相机路径，设置关键帧
3. 配置相机的 Aim 和 Body 参数
4. 添加适当的 Noise 和过渡效果
5. 使用脚本控制相机的移动和切换

**最佳实践**：
- 预计算相机路径，避免运行时计算
- 使用缓动曲线，获得平滑的动画效果
- 确保相机运动与游戏节奏匹配

## 12. 脚本编程

### 12.1 基本相机控制

```csharp
using Cinemachine;

// 获取虚拟相机组件
CinemachineVirtualCamera vcam = GetComponent<CinemachineVirtualCamera>();

// 修改相机优先级
vcam.Priority = 10;

// 修改跟随目标
vcam.Follow = newTarget;

// 修改观察目标
vcam.LookAt = newLookAtTarget;

// 启用/禁用相机
vcam.enabled = true;
```

### 12.2 动态调整相机参数

```csharp
// 获取 Body 组件
CinemachineFramingTransposer transposer = vcam.GetCinemachineComponent<CinemachineFramingTransposer>();

// 修改阻尼参数
if (transposer != null)
{
    transposer.m_XDamping = 0.5f;
    transposer.m_YDamping = 0.5f;
}

// 获取 Aim 组件
CinemachineComposer composer = vcam.GetCinemachineComponent<CinemachineComposer>();

// 修改目标位置
if (composer != null)
{
    composer.m_ScreenX = 0.5f;
    composer.m_ScreenY = 0.3f;
}
```

### 12.3 触发相机抖动

```csharp
// 获取 Noise 组件
CinemachineBasicMultiChannelPerlin noise = vcam.GetCinemachineComponent<CinemachineBasicMultiChannelPerlin>();

// 触发抖动
if (noise != null)
{
    noise.m_AmplitudeGain = 1.0f; // 设置抖动幅度
    noise.m_FrequencyGain = 1.0f; // 设置抖动频率
    
    // 一段时间后停止抖动
    StartCoroutine(StopNoiseAfterDelay(noise, 1.0f));
}

private IEnumerator StopNoiseAfterDelay(CinemachineBasicMultiChannelPerlin noise, float delay)
{
    yield return new WaitForSeconds(delay);
    noise.m_AmplitudeGain = 0.0f;
    noise.m_FrequencyGain = 0.0f;
}
```

### 12.4 监听相机切换事件

```csharp
using Cinemachine;

private CinemachineBrain cinemachineBrain;

void Start()
{
    cinemachineBrain = Camera.main.GetComponent<CinemachineBrain>();
    cinemachineBrain.m_CameraActivatedEvent.AddListener(OnCameraActivated);
}

void OnCameraActivated(ICinemachineCamera activatedCamera, ICinemachineCamera previousCamera)
{
    Debug.Log("相机切换: " + previousCamera.Name + " -> " + activatedCamera.Name);
    // 处理相机切换逻辑
}
```

## 13. 常见问题与解决方案

### 13.1 相机抖动或不稳定

**问题**：相机在跟随目标时出现抖动或不稳定的情况。

**解决方案**：
- 增加阻尼参数（XDamping、YDamping、ZDamping）
- 确保目标对象的移动是平滑的，没有突然的位置变化
- 检查是否有多个相机同时影响同一个目标
- 调整碰撞检测的 Soft Zone 和 Hard Zone 参数

### 13.2 相机穿过物体

**问题**：相机在移动时穿过场景中的物体。

**解决方案**：
- 启用碰撞检测（Obstacle Culling）
- 调整碰撞检测的距离和偏移量
- 确保场景中的物体有合适的碰撞体
- 调整相机的 Near Clip Plane 参数

### 13.3 相机切换不流畅

**问题**：相机之间的切换过渡不流畅或有明显的跳跃。

**解决方案**：
- 调整过渡效果的持续时间和曲线
- 确保切换前后的相机有相似的视野和位置
- 使用混合空间（Mixing Camera）实现更平滑的过渡
- 检查是否有脚本在相机切换时修改了相机参数

### 13.4 性能问题

**问题**：使用 Cinemachine 后游戏性能下降。

**解决方案**：
- 减少活跃的虚拟相机数量
- 降低碰撞检测的频率
- 调整相机的更新频率
- 优化脚本中的相机控制逻辑
- 考虑使用 LOD 系统减少远处物体的渲染负担

## 14. 扩展与自定义

### 14.1 创建自定义 Body 组件

```csharp
using Cinemachine;

[AddComponentMenu("Cinemachine/Custom/CustomBody")]
public class CustomBody : CinemachineComponentBase
{
    // 自定义 Body 逻辑
    public override void OnTransitionFromCamera(ICinemachineCamera fromCam, Vector3 worldUp, float deltaTime)
    {
        // 处理相机切换
    }
    
    public override void MutateCameraState(ref CameraState curState, float deltaTime)
    {
        // 修改相机状态
    }
    
    public override bool IsValid
    {
        get { return FollowTarget != null; }
    }
    
    public override CinemachineCore.Stage Stage
    {
        get { return CinemachineCore.Stage.Body; }
    }
}
```

### 14.2 创建自定义 Aim 组件

```csharp
using Cinemachine;

[AddComponentMenu("Cinemachine/Custom/CustomAim")]
public class CustomAim : CinemachineComponentBase
{
    // 自定义 Aim 逻辑
    public override void MutateCameraState(ref CameraState curState, float deltaTime)
    {
        // 修改相机旋转
    }
    
    public override bool IsValid
    {
        get { return LookAtTarget != null; }
    }
    
    public override CinemachineCore.Stage Stage
    {
        get { return CinemachineCore.Stage.Aim; }
    }
}
```

## 15. 版本兼容性与迁移

### 15.1 Unity 版本支持

- Cinemachine 2.x：支持 Unity 2018.4 及以上版本
- Cinemachine 3.x：支持 Unity 2019.4 及以上版本
- 最新版本：支持 Unity 2021.3 LTS 及以上版本

### 15.2 迁移指南

从旧版本迁移到新版本时，需要注意以下几点：

- 检查 API 变更，更新自定义脚本
- 重新配置相机参数，确保兼容性
- 测试相机行为，确保没有回归问题
- 参考 Unity 官方迁移文档

## 16. 总结与展望

Cinemachine 是 Unity 中功能强大的相机系统，它提供了一套完整的工具和组件，用于创建各种复杂的相机效果。通过深入理解其核心概念和工作原理，开发者可以充分利用 Cinemachine 的优势，创建出专业级的相机系统。

随着 Unity 技术的不断发展，Cinemachine 也在持续更新和改进。未来，我们可以期待更多新功能的加入，如更好的 AI 相机、更强大的程序化相机路径生成、以及更深入的物理模拟集成等。

对于游戏开发者来说，掌握 Cinemachine 是提升游戏视觉质量和沉浸感的重要途径。通过不断学习和实践，开发者可以创造出更加引人入胜的游戏体验。

## 17. 参考资源

- [Unity Cinemachine 官方文档](https://docs.unity3d.com/Packages/com.unity.cinemachine@latest/index.html)
- [Cinemachine 教程和示例项目](https://unity.com/learn/tutorials/topics/animation/cinemachine)
- [Cinemachine API 参考](https://docs.unity3d.com/Packages/com.unity.cinemachine@latest/api/index.html)
- [Unity 论坛 Cinemachine 板块](https://forum.unity.com/forums/cinemachine.136/)
- [Cinemachine GitHub 仓库](https://github.com/Unity-Technologies/Cinemachine)

