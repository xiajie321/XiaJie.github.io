---
title: Unity Luban (鲁班) 笔记
date: 2025-12-05
tags: [Unity,技术,笔记,配置表,工具]
---

# Unity Luban (鲁班) 笔记

## 1. 简介

**Luban** 是目前 Unity 社区功能最强大、性能最好的游戏配置解决方案。它不仅仅是一个导表工具，更是一套完整的配置管线。

### 1.1 核心优势

*   **全能数据源**：支持 Excel (xlsx, csv), JSON, XML, Lua, YAML 等多种格式混合使用。
*   **强大的类型系统**：支持 OOP（继承、多态）、泛型、枚举、可空类型、容器（List, Map）。
*   **高性能**：生成的二进制数据加载速度极快，且内存占用小。
*   **数据校验**：支持外键引用检查（Ref），资源路径检查（Path），范围检查（Range）。
*   **多语言支持**：一键导出 C#, Java, Go, C++, Lua, TypeScript, Python 等代码。

## 2. 安装与环境

Luban 分为两部分：**生成工具**（Client）和 **运行时库**（Runtime）。

### 2.1 下载工具

1.  访问 [Luban GitHub](https://github.com/focus-creative-games/luban)。
2.  下载最新的 Release 包（包含 `Luban.ClientServer`）。
3.  解压到项目目录外的工具文件夹中。

### 2.2 安装 Runtime

1.  打开 Unity `Package Manager`。
2.  添加 Git URL: `https://github.com/focus-creative-games/luban_unity.git`。
3.  或者直接把源码放入 `Assets/Plugins/Luban`。

## 3. 使用流程详解

### 3.1 定义表结构 (Schema)

Luban 推荐使用 `__tables__.xlsx` 和 `__beans__.xlsx` 来定义表结构和数据结构。

**`__tables__.xlsx`** (定义有哪些表)

| full_name | value_type | index | comment | file |
| :--- | :--- | :--- | :--- | :--- |
| item.TbItem | Item | id | 道具表 | Item.xlsx |
| item.TbEquip | Equip | id | 装备表 | Equip.xlsx |

**`__beans__.xlsx`** (定义结构体/枚举)

| full_name | fields | comment |
| :--- | :--- | :--- |
| item.ItemType | 0:Normal, 1:Equip, 2:Mat | 道具类型枚举 |
| item.ItemInfo | int id, string name | 道具基础信息 |

### 3.2 编写数据表

**`Item.xlsx`**

| ## | id | name | desc | type | price | icon |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ##type | int | string | string | item.ItemType | int | string |
| ## | ID | 名称 | 描述 | 类型 | 价格 | 图标 |
| | 1001 | 苹果 | 回复10点血 | Normal | 50 | icon_apple |
| | 1002 | 屠龙刀 | 攻击+999 | Equip | 99999 | icon_sword |

### 3.3 生成代码和数据

你需要编写一个批处理脚本（.bat 或 .sh）来运行生成工具。

```bat
set WORKSPACE=..
set LUBAN_DLL=%WORKSPACE%\Tools\Luban\Luban.dll
set CONF_ROOT=%WORKSPACE%\Config

dotnet %LUBAN_DLL% ^
    -t client ^
    -c cs-bin ^
    -d bin ^
    --conf %CONF_ROOT%\luban.conf ^
    -x outputCodeDir=%WORKSPACE%\Assets\Scripts\Gen ^
    -x outputDataDir=%WORKSPACE%\Assets\StreamingAssets\Config
```

### 3.4 代码调用

```csharp
using System.IO;
using UnityEngine;
using cfg; // Luban 生成的命名空间

public class ConfigManager : MonoBehaviour
{
    public static Tables Tables;

    void Start()
    {
        // 初始化 Tables
        // 需要传入一个加载函数，Luban 不关心你怎么加载文件
        Tables = new Tables(LoadByteBuf);
        
        // 使用数据
        var apple = Tables.TbItem.Get(1001);
        Debug.Log($"道具: {apple.Name}, 价格: {apple.Price}");
        
        // 遍历数据
        foreach (var item in Tables.TbItem.DataList)
        {
            Debug.Log(item.Name);
        }
    }

    private ByteBuf LoadByteBuf(string file)
    {
        // 适配不同的加载方式 (Resources, AssetBundle, YooAsset)
        string path = $"{Application.streamingAssetsPath}/Config/{file}.bytes";
        return new ByteBuf(File.ReadAllBytes(path));
    }
}
```

## 4. 高级特性

### 4.1 多态 (Polymorphism)

这是 Luban 最强大的功能之一。
例如，定义一个 `Skill` 基类，和 `PassiveSkill`, `ActiveSkill` 子类。

在 Excel 中：

| ## | id | name | skill_data |
| :--- | :--- | :--- | :--- |
| ##type | int | string | Skill |
| | 1 | 火球术 | { "$type": "ActiveSkill", "damage": 100, "cost": 10 } |
| | 2 | 坚韧 | { "$type": "PassiveSkill", "defense": 50 } |

代码中会自动识别类型：

```csharp
Skill skill = Tables.TbSkill.Get(1);
if (skill is ActiveSkill activeSkill)
{
    Debug.Log($"伤害: {activeSkill.Damage}");
}
```

### 4.2 数据校验 (Validators)

在 Excel 的表头添加校验规则。

*   `ref:item.TbItem`：检查填入的 ID 是否在 Item 表中存在。
*   `path:unity`：检查填入的路径是否是 Unity 工程中的有效资源。
*   `range:1,100`：检查数值是否在 1 到 100 之间。

| id | reward_item_id |
| :--- | :--- |
| int | int#ref=item.TbItem |
| 1 | 1001 |
| 2 | 9999 (如果表中没这个ID，生成时会报错) |

### 4.3 复杂数据结构

支持直接在单元格里填 JSON 风格的数据。
例如 `List<int>` 类型，可以直接填 `1,2,3,4`。
例如 `Map<int, string>` 类型，可以填 `1:apple,2:banana`。

## 5. 常见问题与解决方案

### 5.1 生成失败

**原因**：通常是 Excel 被打开了，或者格式有误。
**解决**：关闭 Excel，检查控制台报错信息（Luban 的报错非常详细，会指出具体是哪一行哪一列）。

### 5.2 字符串编码

**问题**：中文乱码。
**解决**：确保 Excel 保存格式正确，生成的 .bytes 文件通常是 UTF-8 编码。

### 5.3 浮点数精度

**问题**：Excel 里的 0.0001 读出来不对。
**解决**：Excel 自身精度问题。建议在定义类型时明确使用 `float` 或 `double`，尽量避免使用 Excel 的自动推导。

## 6. 总结

Luban 是一个“一旦用了就回不去”的工具。它极大地提升了配置表的维护效率和程序的健壮性。

**建议**：
*   **小项目**：可以直接用 Excel 定义结构，简单快捷。
*   **大项目**：建议使用 XML 或 `__tables__.xlsx` 分离定义，规范化管理。
*   **多语言**：如果你的项目有服务器（Java/Go），Luban 能保证前后端配置定义完全一致，杜绝协议不一致的 Bug。

## 7. 参考资源

*   [Luban 官方文档](https://luban.doc.code-philosophy.com/)
*   [示例项目](https://github.com/focus-creative-games/luban_examples)
