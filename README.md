[English](./README.en.md)

# 墨客简历 (Ink-Resume)

[![语言](https://img.shields.io/badge/language-HTML%2BCSS%2BJS-orange)](https://shields.io/)
[![许可证](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

一个简洁、高效的在线简历编辑器。它使用 Markdown 语法，允许你通过简单的文本标记来创建专业、美观且适合打印的简历。支持实时预览、多语言切换和丰富的自定义打印选项。

## ✨ 主要功能

*   **实时预览**：在编辑器左侧输入，右侧即时看到最终简历的渲染效果。
*   **Markdown 支持**：使用简单直观的 Markdown 语法（如 `###` 创建标题，`-` 创建列表）来格式化你的简历内容。
*   **丰富的打印设置**：在打印前，可以自由调整页边距、整体缩放、标题及正文字体大小和行距，以达到最佳的 A4 打印效果。
*   **多语言支持**：内置中文和英文两套界面语言及默认模板，一键切换。
*   **数据导入/导出**：可以将你的简历内容导出为 `.yaml` 文件进行备份，或从备份文件中恢复，方便迁移和版本管理。
*   **模块拖拽排序**：通过拖放自由调整“教育背景”、“工作经历”等各个模块的顺序。
*   **单文件部署**：所有代码都在一个 `index.html` 文件中，无需构建，无需服务器，开箱即用。

## 💻 如何使用

本项目最大的优点就是简单易用，无需任何复杂的环境配置。

1.  下载本项目。
2.  在文件目录中找到 `index.html` 文件。
3.  直接用你的浏览器（推荐使用 Chrome 或 Firefox）打开该文件即可开始使用。

> 或者直接使用本项目提供的GitHubPage访问。https://www.mycloudai.org/Ink-Resume/

**是的，就这么简单！无需本地服务器，无需安装任何依赖。**

## 🛠️ 技术栈

*   **核心**: HTML, CSS, 原生 JavaScript (Vanilla JS)
*   **第三方库**:
    *   [Marked.js](https://marked.js.org/): 用于将 Markdown 文本实时解析为 HTML。
    *   [js-yaml](https://github.com/nodeca/js-yaml): 用于处理 `.yaml` 格式的数据导入和导出。

## 📄 许可证

该项目采用 MIT 许可证。
