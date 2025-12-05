---
title: Unity UI Toolkit 笔记
date: 2025-12-05
tags: [Unity,技术,笔记,UI]
---

# Unity UI Toolkit 笔记

## 1. 简介

**UI Toolkit** (原名 UIElements) 是 Unity 的新一代 UI 系统，旨在统一游戏运行时 UI (Runtime) 和编辑器 UI (Editor) 的开发流程。它借鉴了 Web 前端开发模式（HTML/CSS），实现了结构、样式、逻辑的分离。

### 1.1 核心优势

*   **性能卓越**：基于 GPU 渲染，自动合批，能够轻松处理成千上万个 UI 元素。
*   **结构清晰**：UXML 定义结构，USS 定义样式，C# 处理逻辑，便于团队协作。
*   **布局灵活**：采用 Flexbox 布局引擎，轻松实现响应式 UI，适配各种屏幕分辨率。
*   **所见即所得**：内置 UI Builder 可视化编辑器。

## 2. 核心概念

### 2.1 UXML (Unity XML)

类似于 HTML，用于定义 UI 的层级结构。
```xml
<ui:UXML xmlns:ui="UnityEngine.UIElements">
    <ui:VisualElement name="Container">
        <ui:Label text="Hello World" class="title" />
        <ui:Button text="Click Me" name="SubmitBtn" />
    </ui:VisualElement>
</ui:UXML>
```

### 2.2 USS (Unity Style Sheets)

类似于 CSS，用于定义 UI 的外观样式。
```css
.title {
    font-size: 24px;
    color: white;
    -unity-font-style: bold;
}

#SubmitBtn:hover {
    background-color: #4CAF50;
}
```

### 2.3 Visual Tree

UI Toolkit 的渲染树，由 `VisualElement` 节点组成。类似于 DOM 树。

## 3. 使用流程详解

### 3.1 创建 UI 文档

1.  在 Project 窗口右键 -> `Create` -> `UI Toolkit` -> `UI Document`。
2.  双击打开 **UI Builder**。
3.  从 Library 拖拽控件到 Hierarchy。
4.  在 Inspector 中设置属性。

### 3.2 运行时显示 (Runtime)

1.  在场景中创建一个空物体。
2.  添加 `UIDocument` 组件。
3.  将 UXML 文件拖给 `Source Asset`。
4.  **Panel Settings**：这是全局配置文件，控制 UI 的缩放模式（Scale With Screen Size）、参考分辨率等。

### 3.3 代码交互 (C#)

```csharp
using UnityEngine;
using UnityEngine.UIElements;

public class MyUIController : MonoBehaviour
{
    private UIDocument uiDocument;
    private Button submitBtn;
    private Label titleLabel;

    private void OnEnable()
    {
        uiDocument = GetComponent<UIDocument>();
        var root = uiDocument.rootVisualElement;

        // 1. 查找元素 (Query)
        // 按名字查找
        submitBtn = root.Q<Button>("SubmitBtn");
        // 按类型查找
        titleLabel = root.Q<Label>();
        // 按 Class 查找
        var items = root.Query<VisualElement>(className: "item").ToList();

        // 2. 绑定事件
        submitBtn.clicked += OnSubmit;
        
        // 3. 注册回调 (更底层的事件)
        submitBtn.RegisterCallback<MouseEnterEvent>(evt => 
        {
            submitBtn.AddToClassList("hover-effect");
        });
        
        submitBtn.RegisterCallback<MouseLeaveEvent>(evt => 
        {
            submitBtn.RemoveFromClassList("hover-effect");
        });
    }

    private void OnSubmit()
    {
        Debug.Log("Button Clicked!");
        titleLabel.text = "Submitted!";
    }
}
```

## 4. 常用控件与布局

### 4.1 基础控件

*   **VisualElement**：最基础的容器，类似 `div`。
*   **Label**：文本标签。
*   **Button**：按钮。
*   **TextField**：输入框。
*   **Toggle**：复选框。
*   **ScrollView**：滚动视图。
*   **ListView**：高性能列表（虚拟化渲染）。

### 4.2 Flexbox 布局

UI Toolkit 使用 Flexbox 布局引擎，核心属性包括：

*   **Flex Direction**：子元素排列方向（Row/Column）。
*   **Align Items**：侧轴对齐方式（FlexStart/Center/FlexEnd）。
*   **Justify Content**：主轴对齐方式（FlexStart/Center/SpaceBetween）。
*   **Flex Grow**：剩余空间分配比例。
*   **Flex Shrink**：空间不足时的收缩比例。

## 5. 高级功能

### 5.1 ListView (列表)

ListView 是 UI Toolkit 的杀手级功能，性能极高。

```csharp
public class ListController : MonoBehaviour
{
    private ListView listView;
    private List<string> data = new List<string>();

    void Start()
    {
        // 准备数据
        for (int i = 0; i < 1000; i++) data.Add($"Item {i}");

        var root = GetComponent<UIDocument>().rootVisualElement;
        listView = root.Q<ListView>("MyList");

        // 1. 设置数据源
        listView.itemsSource = data;

        // 2. 创建 Item 的回调 (makeItem)
        listView.makeItem = () => new Label();

        // 3. 绑定数据的回调 (bindItem)
        listView.bindItem = (element, index) => 
        {
            (element as Label).text = data[index];
        };

        // 4. 设置高度
        listView.fixedItemHeight = 30;
    }
}
```

### 5.2 动画 (Transition)

UI Toolkit 支持 CSS 风格的过渡动画。

在 USS 中：
```css
.button {
    width: 100px;
    transition-property: width, background-color;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
}

.button:hover {
    width: 150px;
    background-color: red;
}
```
当鼠标悬停时，按钮会自动平滑变宽变色，无需写一行 C# 代码。

### 5.3 自定义控件

你可以继承 `VisualElement` 创建自定义控件，并暴露给 UI Builder。

```csharp
[UxmlElement]
public partial class HealthBar : VisualElement
{
    // ... 实现逻辑
}
```

## 6. 常见问题与解决方案

### 6.1 屏幕适配

**问题**：UI 在不同分辨率下大小不一致。
**解决**：
1.  在 Project Settings 中创建 `Panel Settings` 资源。
2.  设置 `Scale Mode` 为 `Scale With Screen Size`。
3.  设置 `Reference Resolution` (如 1920x1080)。
4.  将该 Panel Settings 赋值给场景中的 `UIDocument`。

### 6.2 事件穿透

**问题**：点击 UI 时，背后的 3D 物体也被点击了。
**解决**：
UI Toolkit 不使用 `EventSystem.IsPointerOverGameObject()`。
你需要手动检测鼠标是否在 UI 上：
```csharp
// 这是一个简单的扩展方法示例
public static bool IsPointerOverUI(Vector2 screenPos)
{
    // 需要结合 PanelSettings 和 Picker 逻辑实现
    // 目前官方 API 还在完善中，通常通过 PickingMode.Ignore 来控制
}
```

### 6.3 字体模糊

**问题**：文字边缘有锯齿或模糊。
**解决**：
1.  使用 TextMeshPro 字体生成 Atlas。
2.  在 Panel Settings 中启用 `Text Core` 支持（Unity 6+）。

## 7. 总结

UI Toolkit 是 Unity UI 的未来。虽然目前 UGUI 依然占据主流，但 UI Toolkit 在编辑器扩展领域已经处于统治地位，在运行时 UI 方面也随着 Unity 6 的发布变得成熟。

**建议**：
*   **编辑器工具**：无脑选 UI Toolkit。
*   **新项目**：如果团队有 Web 前端经验，强烈推荐尝试 UI Toolkit。
*   **老项目**：继续使用 UGUI，迁移成本较高。

## 8. 参考资源

*   [Unity UI Toolkit 官方文档](https://docs.unity3d.com/Manual/UIElements.html)
*   [UI Builder 手册](https://docs.unity3d.com/Manual/UIBuilder.html)
*   [Unity 6 以下版本参考](./Image/UIToolkit1.png)
*   [Unity 6 及以上版本参考](./Image/UIToolkit2.png)
