---
title: 测试用
date: 2025-11-28
tags: [日常,]
---

# 测试文章：目录跳转与滚动定位

这是一个用于测试目录跳转（Anchor Scrolling）和侧边栏固定（Sticky Sidebar）效果的文章。

## 第一章：介绍

这里是介绍内容。我们希望点击右侧目录时，页面能平滑滚动到相应标题，并且标题不会被顶部导航栏遮挡。

### 1.1 背景

在单页应用（SPA）或具有固定顶部导航栏的网站中，锚点跳转通常会导致目标内容被导航栏覆盖。

### 1.2 目的

验证 CSS `scroll-padding-top` 和 `scroll-margin-top` 属性是否正确解决了遮挡问题。

## 第二章：主要内容

这里是主要内容区域。同时测试侧边栏是否随页面滚动而固定。

### 2.1 核心概念

`position: sticky` 依赖于其祖先元素不能有 `overflow: hidden`、`overflow: auto` 或 `overflow: scroll` 属性。

#### 2.1.1 细节 A

如果 `body` 或任何父容器设置了 `overflow-x: hidden`，可能会导致 `sticky` 失效。

#### 2.1.2 细节 B

我们需要确保从 `html` 到侧边栏容器的路径上，样式设置是正确的。

### 2.2 实现方法

1.  在 `html` 元素上设置 `scroll-padding-top`。
2.  在目标标题元素上设置 `scroll-margin-top`。
3.  移除干扰 `sticky` 定位的 `overflow` 属性。

## 第三章：结论

这里是结论部分。

### 3.1 总结

如果一切正常，点击目录项应精确定位，且侧边栏在滚动长内容时保持可见。

### 3.2 展望

未来可以添加更多动态效果。

## 第四章：长内容测试区域

为了测试滚动效果，这里添加一些长内容，确保页面有足够的高度来滚动。

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

(重复段落以增加长度 1)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

(重复段落以增加长度 2)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

(重复段落以增加长度 3)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

(重复段落以增加长度 4)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
