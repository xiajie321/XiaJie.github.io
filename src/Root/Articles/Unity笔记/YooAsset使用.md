---
title: Unity YooAsset 笔记
date: 2025-12-05
tags: [Unity,技术,笔记,资源管理,AssetBundle]
---

# Unity YooAsset 笔记

## 1. 简介

**YooAsset** 是一套国产的、商业级品质的 **AssetBundle 资源管理系统**。它汲取了 Addressables 的设计理念，但摒弃了其复杂的配置和黑盒机制，提供了更简单、更透明、更强大的资源管理体验。

### 1.1 核心优势

*   **零冗余构建**：自动分析依赖，杜绝资源重复打包。
*   **可视化分析**：自带强大的资源分析工具，引用关系一目了然。
*   **灵活的加载策略**：支持分包下载、边玩边下、加密解密。
*   **原生文件支持**：支持直接打包视频、音频等原生文件（Raw File），无需解压即可播放。
*   **热更友好**：完善的版本管理和补丁更新流程。

## 2. 安装与环境

### 2.1 安装

1.  打开 `Package Manager`。
2.  点击 `+` -> `Add package from git URL`。
3.  输入：`https://github.com/tuyoogame/YooAsset.git`。
4.  建议同时安装 `UniTask` 以获得更好的异步编程体验。

## 3. 使用流程详解

### 3.1 资源配置 (AssetBundle Collector)

这是 YooAsset 的核心配置界面，用于定义哪些资源需要打包。

1.  菜单栏 `YooAsset` -> `AssetBundle Collector`。
2.  **Package**：创建一个包（如 `DefaultPackage`）。
3.  **Group**：创建分组（如 `UI`, `Sound`, `Model`）。
4.  **Collector**：拖入资源文件夹。
    *   **PackRule** (打包规则)：
        *   `PackSeparately`：每个文件单独打一个包（适合 Prefab）。
        *   `PackTogether`：整个文件夹打一个包（适合 Shader, Icon）。
        *   `PackRawFile`：原生文件打包（适合 Video, Audio）。
    *   **AddressRule** (寻址规则)：
        *   `AddressByFileName`：通过文件名加载（如 "Cube"）。
        *   `AddressByPath`：通过路径加载（如 "Assets/Res/Cube.prefab"）。

### 3.2 构建资源 (AssetBundle Builder)

1.  菜单栏 `YooAsset` -> `AssetBundle Builder`。
2.  **Build Pipeline**：选择 `ScriptableBuildPipeline` (SBP)。
3.  **Build Mode**：
    *   `ForceRebuild`：强制全量构建。
    *   `IncrementalBuild`：增量构建（只打包修改过的资源）。
4.  **Encryption**：选择加密类（如果需要加密）。
5.  点击 `Build`。构建产物会生成在项目目录下的 `Bundles` 文件夹。

### 3.3 代码初始化

YooAsset 支持三种运行模式，方便开发和发布。

```csharp
using YooAsset;
using UnityEngine;
using System.Collections;

public class GameManager : MonoBehaviour
{
    IEnumerator Start()
    {
        // 1. 初始化 YooAsset
        YooAssets.Initialize();
        
        // 2. 创建资源包
        var package = YooAssets.CreatePackage("DefaultPackage");
        YooAssets.SetDefaultPackage(package);

        // 3. 选择运行模式
        InitializeParameters initParameters = null;

#if UNITY_EDITOR
        // 编辑器模拟模式：直接读取 Assets 目录，无需打包，开发最快
        var simulateMode = new EditorSimulateModeParameters();
        simulateMode.SimulateManifestFilePath = EditorSimulateModeHelper.SimulateBuild("DefaultPackage");
        initParameters = simulateMode;
#elif UNITY_STANDALONE
        // 单机模式：直接读取 StreamingAssets 里的包
        var offlineMode = new OfflinePlayModeParameters();
        initParameters = offlineMode;
#else
        // 联机模式：从服务器下载热更
        var hostMode = new HostPlayModeParameters();
        hostMode.BuildinQueryServices = new GameQueryServices(); // 内置资源查询服务
        hostMode.RemoteServices = new GameRemoteServices(); // 远端服务器地址
        initParameters = hostMode;
#endif

        yield return package.InitializeAsync(initParameters);
        
        Debug.Log("YooAsset 初始化完成");
    }
}
```

### 3.4 加载资源

```csharp
// 同步加载
AssetHandle handle = YooAssets.LoadAssetSync<GameObject>("Cube");
GameObject go = handle.InstantiateSync();

// 异步加载
AssetHandle handleAsync = YooAssets.LoadAssetAsync<GameObject>("Cube");
yield return handleAsync;
GameObject goAsync = handleAsync.InstantiateSync();

// 场景加载
SceneHandle sceneHandle = YooAssets.LoadSceneAsync("GameScene");
yield return sceneHandle;

// 原生文件加载 (如视频)
RawFileHandle rawHandle = YooAssets.LoadRawFileAsync("Movie.mp4");
yield return rawHandle;
string filePath = rawHandle.GetRawFilePath(); // 获取本地绝对路径
videoPlayer.url = filePath;

// 资源释放
handle.Release();
```

## 4. 热更新流程

YooAsset 的热更新流程非常标准：

1.  **获取资源版本**：`package.UpdatePackageVersionAsync()`。
2.  **更新资源清单**：`package.UpdatePackageManifestAsync(version)`。
3.  **创建下载器**：`package.CreateResourceDownloader(tags)`。
4.  **下载资源**：`downloader.BeginDownload()`。
5.  **下载完成**：进入游戏。

```csharp
IEnumerator UpdatePatch()
{
    var package = YooAssets.GetPackage("DefaultPackage");
    
    // 1. 获取最新版本
    var operation = package.UpdatePackageVersionAsync();
    yield return operation;
    string version = operation.PackageVersion;
    
    // 2. 更新清单
    var manifestOp = package.UpdatePackageManifestAsync(version);
    yield return manifestOp;
    
    // 3. 创建下载器
    int downloadingMaxNum = 10;
    int failedTryAgain = 3;
    var downloader = package.CreateResourceDownloader(downloadingMaxNum, failedTryAgain);
    
    if (downloader.TotalDownloadCount == 0)
    {
        Debug.Log("没有需要下载的资源");
    }
    else
    {
        // 4. 开始下载
        downloader.BeginDownload();
        yield return downloader;
        
        if (downloader.Status == EOperationStatus.Succeed)
        {
            Debug.Log("热更完成！");
        }
    }
}
```

## 5. 常见问题与解决方案

### 5.1 Shader 丢失/变紫

**原因**：AssetBundle 中的 Shader 变体丢失，或者 Shader 没有被打进包里。
**解决**：
1.  创建一个 `ShaderVariantCollection`，收集所有用到的变体。
2.  将所有 Shader 和变体集合放入一个文件夹（如 `Assets/Shaders`）。
3.  在 Collector 中将该文件夹设为 `PackTogether`，打成一个包。
4.  游戏启动时优先加载这个 Shader 包，并调用 `ShaderVariantCollection.WarmUp()`。

### 5.2 循环依赖

**原因**：A 包引用 B 包，B 包又引用 A 包。
**解决**：YooAsset 的可视化分析工具可以检测循环依赖。通常需要将公共引用的资源提取出来单独打一个包（Shared 包）。

### 5.3 资源重复打包

**原因**：两个包都引用了一个未打包的贴图，导致贴图被分别打进了两个包。
**解决**：YooAsset 会自动检测冗余。在构建报告中查看 `Redundancy` 页面，将重复的资源显式添加到 Collector 中单独打包。

## 6. 高级技巧

### 6.1 加密 (Encryption)

实现 `IEncryptionServices` 接口，可以对 AssetBundle 进行加密。
*   **LoadOffset**：文件头偏移加密（性能最好）。
*   **XOR**：异或加密。
*   **AES**：全量加密（安全性最高，但加载慢）。

### 6.2 边玩边下

利用 `Tags` 功能。
1.  在 Collector 中给资源打标签（如 `Level1`, `Level2`）。
2.  初始化时只下载 `Level1` 的资源。
3.  玩家玩第一关时，后台静默下载 `Level2` 的资源。

## 7. 总结

YooAsset 是目前 Unity 资源管理的**最佳实践**。它解决了原生 AssetBundle 的所有痛点，又比 Addressables 更轻量、更可控。

**建议**：
*   **新项目**：直接上 YooAsset。
*   **老项目**：如果 AssetBundle 管理混乱，可以考虑迁移到 YooAsset，成本可控。

## 8. 参考资源

*   [YooAsset 官方文档](https://www.yooasset.com/)
*   [YooAsset 源码仓库](https://github.com/tuyoogame/YooAsset)
