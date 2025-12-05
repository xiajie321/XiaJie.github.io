---
title: Unity Input System 笔记
date: 2025-12-05
tags: [Unity,技术,笔记,输入系统]
---

# Unity Input System 笔记

## 1. 简介

**Input System** 是 Unity 为了解决旧版输入系统（Input Manager）的诸多痛点而推出的新一代输入框架。它基于事件驱动，支持跨平台设备自动适配，并提供了强大的动作映射（Action Map）功能。

### 1.1 核心优势

*   **设备无关性**：一套逻辑同时支持键盘、鼠标、手柄、触摸屏、VR 手柄等。
*   **事件驱动**：无需在 `Update` 中轮询，按键按下即触发回调，性能更优且逻辑更清晰。
*   **热插拔支持**：运行时插入手柄自动识别，无需重启游戏。
*   **多玩家支持**：内置分屏和多本地玩家输入管理。
*   **可视化配置**：通过 Input Actions 编辑器直观管理键位绑定。

## 2. 安装与基础设置

### 2.1 安装

1.  打开 `Window` -> `Package Manager`。
2.  在 Unity Registry 中搜索 `Input System`。
3.  点击 `Install`。
4.  **重要**：安装完成后，Unity 会提示是否启用新后端并重启编辑器，选择 `Yes`。

### 2.2 项目设置

1.  打开 `Edit` -> `Project Settings` -> `Player` -> `Other Settings`。
2.  找到 `Active Input Handling`。
    *   `Input System Package (New)`: 仅使用新系统。
    *   `Both`: 同时兼容旧系统（`Input.GetKey`）和新系统。**推荐迁移期使用此选项**。

## 3. 核心概念

### 3.1 Input Action Asset

这是一个 `.inputactions` 文件，用于集中管理所有的输入配置。
*   **Action Maps**：输入的集合，通常按游戏状态划分（如 `Player`, `UI`, `Driving`）。
*   **Actions**：具体的动作（如 `Move`, `Jump`, `Fire`）。
*   **Bindings**：动作与物理按键的绑定（如 `Jump` 绑定到 `Space` 和 `Gamepad South`）。

### 3.2 Action Type

*   **Value**：用于连续输入，如摇杆移动（Vector2）。会持续触发回调。
*   **Button**：用于单次触发，如跳跃。
*   **Pass Through**：类似于 Value，但不会消除同一帧内的多个输入源冲突。

### 3.3 Interactions

定义触发动作的模式：
*   **Press**：按下触发（默认）。
*   **Hold**：长按触发。
*   **Tap**：快速点击。
*   **SlowTap**：慢速点击。
*   **MultiTap**：双击或三击。

### 3.4 Processors

对原始输入值进行预处理：
*   **Invert**：反转数值。
*   **NormalizeVector2**：将向量归一化（防止斜向移动速度过快）。
*   **Deadzone**：设置死区（防止摇杆漂移）。

## 4. 使用流程详解

### 4.1 创建配置文件

1.  在 Project 窗口右键 -> `Create` -> `Input Actions`。命名为 `GameControls`。
2.  双击打开编辑器。
3.  创建 Map `Player`。
4.  创建 Action `Move` (Value, Vector2)。
    *   添加 `2D Vector Composite` (WASD)。
    *   添加 `Gamepad Left Stick`。
5.  创建 Action `Jump` (Button)。
    *   绑定 `Space`。
    *   绑定 `Gamepad Button South`。
6.  点击 `Save Asset`。

### 4.2 生成 C# 代码（推荐）

1.  选中 `GameControls` 文件。
2.  在 Inspector 中勾选 `Generate C# Class`。
3.  点击 `Apply`。
4.  这会生成一个同名的 C# 类，包含了所有配置的强类型访问接口。

### 4.3 代码实现

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    private GameControls controls;
    private Vector2 moveInput;

    private void Awake()
    {
        controls = new GameControls();

        // 绑定 Move 事件
        // ctx.ReadValue<Vector2>() 读取当前的输入值
        controls.Player.Move.performed += ctx => moveInput = ctx.ReadValue<Vector2>();
        // 当松开按键时，值归零
        controls.Player.Move.canceled += ctx => moveInput = Vector2.zero;

        // 绑定 Jump 事件
        controls.Player.Jump.performed += ctx => Jump();
    }

    private void OnEnable()
    {
        // 必须手动启用
        controls.Player.Enable();
    }

    private void OnDisable()
    {
        controls.Player.Disable();
    }

    private void Update()
    {
        // 处理移动逻辑
        transform.Translate(moveInput * Time.deltaTime * 5f);
    }

    private void Jump()
    {
        Debug.Log("跳跃！");
    }
}
```

### 4.4 使用 PlayerInput 组件（偷懒法）

如果你不想写太多代码，可以使用 `PlayerInput` 组件。
1.  给物体挂载 `Player Input` 组件。
2.  将 `.inputactions` 文件拖进去。
3.  选择 `Behavior`：
    *   **Send Messages**：通过 `SendMessage` 调用 `OnMove`, `OnJump` 等方法。
    *   **Invoke Unity Events**：在 Inspector 中拖拽绑定事件。
    *   **CSharp Events**：通过代码订阅 `onActionTriggered`。

## 5. 常见问题与解决方案

### 5.1 UI 无法点击

**问题**：启用 Input System 后，UGUI 的按钮没反应。
**原因**：旧的 `StandaloneInputModule` 依赖旧输入系统。
**解决**：
1.  找到场景中的 `EventSystem` 物体。
2.  点击 Inspector 上的 `Replace with InputSystemUIInputModule` 按钮。

### 5.2 摇杆漂移

**问题**：手柄摇杆没动，角色却在缓慢移动。
**解决**：
1.  在 Input Actions 编辑器中，选中 Stick 绑定。
2.  添加 `Processor` -> `Deadzone`。
3.  设置合适的 `Min` 值（通常 0.125）。

### 5.3 组合键（如 Ctrl+C）

**实现**：
1.  创建一个 Action。
2.  添加 Binding 时选择 `Button with One Modifier`。
3.  `Modifier` 设为 Ctrl，`Button` 设为 C。

### 5.4 屏幕触控模拟摇杆

**实现**：
1.  在 Canvas 上创建 UI 图片作为摇杆。
2.  添加 `On-Screen Stick` 组件。
3.  将其 `Control Path` 绑定到 Input System 的 `Gamepad/LeftStick`。
4.  这样触摸 UI 就会发送手柄信号，无需修改逻辑代码。

## 6. 高级技巧

### 6.1 运行时改键 (Rebinding)

Input System 内置了强大的改键功能。

```csharp
public void StartRebinding()
{
    controls.Player.Jump.Disable();
    
    var rebindOperation = controls.Player.Jump.PerformInteractiveRebinding()
        // 排除鼠标移动
        .WithControlsExcluding("Mouse")
        .OnMatchWaitForAnother(0.1f)
        .OnComplete(operation => 
        {
            Debug.Log($"新按键: {operation.selectedControl.displayName}");
            operation.Dispose();
            controls.Player.Jump.Enable();
        })
        .Start();
}
```

### 6.2 震动反馈 (Haptics)

```csharp
if (Gamepad.current != null)
{
    // 低频马达 0.5，高频马达 0.5，持续 1 秒
    Gamepad.current.SetMotorSpeeds(0.5f, 0.5f);
    // 记得在合适的时候停止
    // Gamepad.current.ResetHaptics();
}
```

## 7. 总结

Input System 虽然入门门槛比旧系统稍高，但其带来的架构优势是巨大的。特别是对于需要跨平台发布或支持手柄的游戏，它是必选项。

**建议**：
*   小项目或原型：可以用 `Keyboard.current.spaceKey.wasPressedThisFrame` 这种直接调用的方式。
*   正式项目：务必使用 `Input Action Asset` + 生成 C# 类的方式，以保证可维护性。

## 8. 参考资源

*   [Unity Input System 官方文档](https://docs.unity3d.com/Packages/com.unity.inputsystem@latest/index.html)
*   [Input System 示例项目 (GitHub)](https://github.com/Unity-Technologies/InputSystem)
