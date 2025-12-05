---
title: Unity HybridCLR (huatuo) 笔记
date: 2025-12-05
tags: [Unity,技术,笔记,热更新]
---

# Unity HybridCLR (huatuo) 笔记

## 1. 简介

**HybridCLR** (前身叫 huatuo) 是一个**革命性**的 Unity 全平台原生 C# 热更新解决方案。

### 1.1 核心优势

*   **原生 C# 体验**：完全兼容 C# 语法，支持 async/await、泛型、反射等高级特性，无需像 Lua 那样学习新语言或编写胶水代码。
*   **高性能**：基于 IL2CPP 运行时扩充，热更代码运行效率接近原生 AOT 代码，远超 Lua 和 ILRuntime。
*   **零成本迁移**：现有的 C# 项目几乎不需要修改代码即可接入热更。
*   **内存高效**：智能的元数据管理，内存占用极低。
*   **调试方便**：支持在 IDE 中直接断点调试热更代码。

### 1.2 工作原理

HybridCLR 扩展了 Unity 的 IL2CPP 虚拟机。
*   **AOT 部分**：主包代码依然编译成原生机器码（C++）。
*   **Interpreter 部分**：HybridCLR 在运行时加载热更 DLL 的 IL 指令，通过一个高效的解释器来执行。
*   **混合执行**：AOT 代码和解释器代码可以无缝互相调用，共享对象和内存。

## 2. 安装与环境配置

### 2.1 环境要求

*   Unity 版本：2020.3.x, 2021.3.x, 2022.3.x (LTS 版本最佳)
*   构建平台：支持所有 IL2CPP 平台（Android, iOS, PC, Mac, WebGL 等）
*   开发环境：Visual Studio 2019+ 或 Rider

### 2.2 安装步骤

1.  **安装 Installer**：
    *   打开 Unity `Package Manager`。
    *   点击 `+` -> `Add package from git URL`。
    *   输入：`https://gitee.com/focus-creative-games/hybridclr_unity.git`。
    *   或者下载源码放入 `Packages/com.focus-creative-games.hybridclr_unity`。

2.  **初始化 HybridCLR**：
    *   点击菜单栏 `HybridCLR` -> `Installer`。
    *   在弹出的窗口中，点击 `Install` 按钮。
    *   等待安装完成，控制台显示 `Install Success`。

3.  **配置 Player Settings**：
    *   `Scripting Backend` 必须设置为 `IL2CPP`。
    *   `Api Compatibility Level` 建议设置为 `.NET Standard 2.1` 或 `.NET 4.x`。

## 3. 项目配置与使用

### 3.1 划分程序集 (Assembly)

这是热更新的关键步骤。你需要将代码明确划分为 **AOT 程序集**（不可热更）和 **热更程序集**。

1.  **创建 Assembly Definition**：
    *   为你的游戏逻辑代码（如 `GameLogic`）创建 `.asmdef` 文件。
    *   为你的 UI 代码（如 `GameUI`）创建 `.asmdef` 文件。

2.  **配置 HybridCLR Settings**：
    *   打开 `HybridCLR` -> `Settings`。
    *   在 `Hot Update Assembly Definitions` 列表中，添加你刚才创建的 `GameLogic` 和 `GameUI`。
    *   **注意**：被添加进这里的程序集，在打包时不会被编译成 C++，而是保留为 DLL，供运行时加载。

### 3.2 代码调用流程

在 AOT（主包）入口脚本中，启动热更逻辑：

```csharp
using System.Reflection;
using UnityEngine;
using System.IO;

public class GameEntry : MonoBehaviour
{
    void Start()
    {
        // 1. 模拟下载热更 DLL (实际项目中应从服务器下载)
        // 这里假设 DLL 已经下载到了 StreamingAssets 或 PersistentDataPath
        byte[] dllBytes = LoadDll("GameLogic.dll"); 

        // 2. 加载热更程序集
        // 这一步会将 DLL 加载到 HybridCLR 的解释器中
        Assembly hotfixAssembly = Assembly.Load(dllBytes);

        // 3. 进入热更逻辑
        // 通过反射调用热更入口
        Type entryType = hotfixAssembly.GetType("GameLogic.Entry");
        entryType.GetMethod("StartGame").Invoke(null, null);
    }

    byte[] LoadDll(string dllName)
    {
        // 实现你的加载逻辑，如 AssetBundle.Load 或 File.ReadAllBytes
        string path = Path.Combine(Application.streamingAssetsPath, dllName + ".bytes");
        return File.ReadAllBytes(path);
    }
}
```

### 3.3 打包流程

1.  **生成/编译 DLL**：
    *   点击 `HybridCLR` -> `CompileDll` -> `ActiveBuildTarget`。
    *   生成的 DLL 会在 `HybridCLRData/HotUpdateDlls` 目录下。
    *   **重要**：你需要把这些 DLL 复制到 `StreamingAssets` 或打进 AssetBundle，作为热更资源。

2.  **生成 AOT 元数据**：
    *   点击 `HybridCLR` -> `Generate` -> `All`。
    *   这一步会分析代码，生成必要的 C++ 桥接代码和元数据。

3.  **构建项目**：
    *   使用 Unity 标准的 `Build Settings` 进行打包。

## 4. 核心机制详解

### 4.1 元数据补充 (Metadata)

这是 HybridCLR 最难理解但也最重要的部分。
由于 IL2CPP 是 AOT 编译，泛型代码在编译时需要确定具体类型。如果热更代码中使用了 AOT 中未实例化的泛型（例如 AOT 里只用了 `List<int>`, 热更里用了 `List<string>`），程序会崩溃。

**解决方案**：
HybridCLR 提供了 **补充元数据** 机制。你需要加载 AOT 程序集的原始 DLL（如 `mscorlib.dll`），让解释器知道泛型的元数据。

```csharp
using HybridCLR;

public void LoadMetadata()
{
    // AOT 程序集列表 (通常是系统库和第三方库)
    string[] aotDlls = { "mscorlib.dll", "System.Core.dll", "System.dll", "UniTask.dll" };
    
    foreach (var dll in aotDlls)
    {
        byte[] dllBytes = LoadAotDll(dll); // 从 StreamingAssets 加载
        // 加载元数据
        // HomologousImageMode.SuperSet: 最安全的模式
        RuntimeApi.LoadMetadataForAOTAssembly(dllBytes, HomologousImageMode.SuperSet);
    }
}
```

### 4.2 桥接函数 (Bridge)

当解释器代码调用 AOT 代码，或者 AOT 代码回调解释器代码时，需要通过“桥接函数”进行参数转换。HybridCLR 会自动生成大部分桥接函数，但在某些极端情况下（如复杂的泛型委托），可能需要手动配置。

## 5. 常见问题与解决方案

### 5.1 `ExecutionEngineException: GetGenericVirtualMethod`

**原因**：热更代码调用了一个 AOT 泛型虚方法，但该方法在 AOT 中未被实例化。
**解决**：
1.  确保已执行 `LoadMetadataForAOTAssembly`。
2.  确保加载了包含该泛型定义的 AOT DLL。

### 5.2 代码裁剪 (Stripping)

**原因**：Unity 打包时开启了 `Managed Stripping Level`，导致未在 AOT 中显式引用的类或方法被裁剪掉，热更代码运行时找不到。
**解决**：
1.  在 `Assets` 目录下创建 `link.xml`。
2.  在其中保留需要的程序集或类型。
    ```xml
    <linker>
        <assembly fullname="System.Core" preserve="all"/>
        <assembly fullname="UniTask" preserve="all"/>
    </linker>
    ```

### 5.3 iOS 审核问题

**问题**：苹果禁止执行动态下载的可执行代码。
**解释**：HybridCLR 本质是加载数据（DLL 字节码）并解释执行，不涉及 JIT（即时编译）生成机器码，因此**符合**苹果审核规范（类似于 Lua）。目前已有大量使用 HybridCLR 的游戏过审。

## 6. 进阶技巧

### 6.1 增量更新

在实际项目中，你不需要每次都重新打整包。
1.  修改热更代码。
2.  运行 `CompileDll`。
3.  将新生成的 DLL 上传到 CDN。
4.  客户端下载新 DLL 替换旧的即可。

### 6.2 结合 YooAsset

推荐使用 YooAsset 来管理热更 DLL。
1.  将生成的 DLL 后缀改为 `.bytes`。
2.  放入 YooAsset 的资源目录。
3.  配置 YooAsset 将其打包。
4.  运行时通过 YooAsset 加载 DLL 字节流。

## 7. 总结

HybridCLR 彻底改变了 Unity 的开发生态。它让开发者可以专注于 C# 业务逻辑，而不用被热更新的各种限制所束缚。

**最佳实践建议**：
1.  **尽早接入**：项目初期就规划好 AOT 和热更程序集。
2.  **保持 AOT 纯净**：AOT 包只放引擎库、第三方插件和极少量的启动代码。
3.  **全员热更**：除了极少数性能极其敏感的底层算法，其他所有逻辑都放在热更程序集里。

## 8. 参考资源

*   [HybridCLR 官方文档](https://hybridclr.doc.code-philosophy.com/)
*   [HybridCLR 源码仓库](https://github.com/focus-creative-games/hybridclr)
*   [官方示例项目](https://github.com/focus-creative-games/hybridclr_trial)
