# 多语言系统说明 | Multi-language System Guide

## 概述 | Overview

本项目使用模板系统自动生成多语言版本的HTML文件，避免了代码重复，便于维护和扩展。

This project uses a template system to automatically generate multi-language HTML files, avoiding code duplication and making maintenance and expansion easier.

## 文件结构 | File Structure

```
├── template.html          # HTML模板文件 | HTML template file
├── i18n.js               # 语言配置和翻译 | Language config and translations
├── build.js              # 构建脚本 | Build script
├── package.json          # 项目配置 | Project config
├── index.html            # 生成的中文版本 | Generated Chinese version
├── en.html               # 生成的英文版本 | Generated English version
└── .github/workflows/    # GitHub Actions配置 | GitHub Actions config
    └── static.yml
```

## 如何添加新语言 | How to Add a New Language

### 1. 在 i18n.js 中添加语言配置

在 `i18nData.languages` 中添加新语言：

```javascript
languages: {
    'zh-CN': { name: '中文', filename: 'index.html', isDefault: true },
    'en-US': { name: 'English', filename: 'en.html', isDefault: false },
    'ja-JP': { name: '日本語', filename: 'ja.html', isDefault: false }, // 新增日语
    'fr-FR': { name: 'Français', filename: 'fr.html', isDefault: false }  // 新增法语
},
```

**注意**：语言切换器按钮会根据这个配置自动生成，无需手动修改HTML！

### 2. 添加静态文本翻译

在 `i18nData.staticTexts` 中添加对应翻译：

```javascript
staticTexts: {
    'zh-CN': { /* 现有中文翻译 */ },
    'en-US': { /* 现有英文翻译 */ },
    'ja-JP': {
        pagesText: 'ページ',
        photoUpload: '写真アップロード',
        selectPhoto: '写真を選択',
        removePhoto: '写真を削除',
        education: '学歴',
        experience: '職歴',
        projects: 'プロジェクト',
        skills: 'スキル'
    }
},
```

### 3. 添加UI翻译

在 `i18nData.translations` 中添加UI元素翻译：

```javascript
translations: {
    'zh-CN': { /* 现有中文翻译 */ },
    'en-US': { /* 现有英文翻译 */ },
    'ja-JP': {
        pageTitle: '履歴書テンプレートエディタ',
        printResume: '履歴書を印刷',
        exportData: 'データエクスポート',
        // ... 其他翻译项
    }
},
```

### 4. 添加默认内容

在 `i18nData.defaultContent` 中添加默认简历内容：

```javascript
defaultContent: {
    'zh-CN': { /* 现有中文内容 */ },
    'en-US': { /* 现有英文内容 */ },
    'ja-JP': {
        basic_info: `### 田中太郎\n**電話：** 03-0000-0000  \n**メール：** tanaka@email.com`,
        sections: [
            { id: 'education', title: '学歴', content: '### 東京大学...' },
            // ... 其他部分
        ]
    }
}
```

### 5. 运行构建

```bash
npm run build
```

或者

```bash
node build.js
```

## 自动化部署 | Automated Deployment

项目配置了GitHub Actions，当代码推送到main分支时会自动：

1. 运行构建脚本生成HTML文件
2. 部署到GitHub Pages

The project is configured with GitHub Actions to automatically:

1. Run the build script to generate HTML files
2. Deploy to GitHub Pages

when code is pushed to the main branch.

## 本地开发 | Local Development

### 安装依赖

```bash
npm install  # 虽然没有依赖，但会创建package-lock.json
```

### 构建文件

```bash
npm run build
```

### 预览

直接在浏览器中打开生成的HTML文件：
- `index.html` - 中文版本
- `en.html` - 英文版本
- `ja.html` - 日语版本（如果已添加）

## 注意事项 | Notes

1. **不要直接编辑生成的HTML文件**：所有修改都应该在 `template.html` 和 `i18n.js` 中进行
2. **保持URL路径一致**：新语言的filename应该遵循简洁明了的命名规则
3. **测试所有语言**：添加新语言后，确保所有功能在各语言版本中都正常工作
4. **翻译完整性**：确保新语言包含所有必要的翻译项

---

**Do not edit generated HTML files directly**: All modifications should be made in `template.html` and `i18n.js`

**Maintain consistent URL paths**: New language filenames should follow clear and concise naming conventions

**Test all languages**: After adding a new language, ensure all features work properly in all language versions

**Translation completeness**: Ensure new languages contain all necessary translation items