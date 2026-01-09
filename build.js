#!/usr/bin/env node

/**
 * 多语言HTML构建脚本
 * 根据i18n.js中的配置，从template.html生成不同语言版本的HTML文件
 */

const fs = require('fs');
const path = require('path');

// 读取i18n.js文件并解析
function loadI18nData() {
    try {
        // 使用require()替代eval()，更安全
        // 清除require缓存以确保每次都读取最新内容
        delete require.cache[require.resolve('./i18n.js')];
        const { i18nData } = require('./i18n.js');
        return i18nData;
    } catch (error) {
        console.error('Failed to load i18n data:', error);
        console.error('Make sure i18n.js has proper CommonJS export');
        process.exit(1);
    }
}

// 读取模板文件
function loadTemplate() {
    try {
        return fs.readFileSync('template.html', 'utf8');
    } catch (error) {
        console.error('Failed to load template.html:', error);
        process.exit(1);
    }
}

// 生成语言切换器HTML
function generateLanguageSwitcher(languages, currentLang) {
    return Object.entries(languages).map(([langCode, config]) => {
        const isActive = langCode === currentLang;
        const activeClass = isActive ? ' class="active"' : '';
        return `                <button data-lang="${langCode}" onclick="setLanguage('${langCode}')"${activeClass}>${config.name}</button>`;
    }).join('\n');
}

// 替换模板中的占位符
function processTemplate(template, langCode, i18nData) {
    const languages = i18nData.languages;
    const staticTexts = i18nData.staticTexts[langCode] || {};
    const translations = i18nData.translations[langCode] || {};
    
    // 基本替换 - 完全保持原有HTML结构
    let result = template
        .replace(/{{LANG}}/g, langCode)
        .replace(/{{PAGE_TITLE}}/g, translations.pageTitle || 'Resume Editor')
        .replace(/{{PAGES_TEXT}}/g, staticTexts.pagesText || 'Pages')
        .replace(/{{PRINT_RESUME}}/g, translations.printResume || 'Print Resume')
        .replace(/{{EXPORT_DATA}}/g, translations.exportData || 'Export Data')
        .replace(/{{IMPORT_DATA}}/g, translations.importData || 'Import Data')
        .replace(/{{CLEAR_CACHE}}/g, translations.clearCache || 'Clear Cache')
        .replace(/{{STYLE_CUSTOMIZATION}}/g, translations.styleCustomization || 'Style Customization')
        .replace(/{{FONT_FAMILY}}/g, translations.fontFamily || 'Font Family')
        .replace(/{{FONT_DEFAULT}}/g, translations.fontDefault || 'Default Font')
        .replace(/{{FONT_SIMSUN}}/g, translations.fontSimSun || 'SimSun')
        .replace(/{{DIVIDER_COLOR}}/g, translations.dividerColor || 'Divider Color')
        .replace(/{{RESET_STYLES}}/g, translations.resetStyles || 'Reset Styles')
        .replace(/{{PRINT_SETTINGS}}/g, translations.printSettings || 'Print Settings')
        .replace(/{{PAGE_MARGIN}}/g, translations.pageMargin || 'Page Margin (mm)')
        .replace(/{{OVERALL_SCALING}}/g, translations.scaling || 'Scaling (%)')
        .replace(/{{TITLE_FONT_SIZE}}/g, translations.titleFontSize || 'Title Font Size (px)')
        .replace(/{{CONTENT_FONT_SIZE}}/g, translations.contentFontSize || 'Content Font Size (px)')
        .replace(/{{LINE_HEIGHT}}/g, translations.lineHeight || 'Line Height')
        .replace(/{{CONFIRM_PRINT}}/g, translations.confirmPrint || 'Confirm Print')
        .replace(/{{CANCEL}}/g, translations.cancel || 'Cancel')
        .replace(/{{BASIC_INFO}}/g, translations.basicInfo || 'Basic Info')
        .replace(/{{PERSONAL_PHOTO}}/g, translations.personalPhoto || 'Personal Photo')
        .replace(/{{PHOTO_PLACEHOLDER}}/g, translations.photoPlaceholder || 'Click to upload photo')
        .replace(/{{BASIC_INFO_MARKDOWN}}/g, translations.basicInfoMarkdown || 'Basic Info (Markdown)')
        .replace(/{{BASIC_INFO_PLACEHOLDER}}/g, translations.basicInfoPlaceholder || '### Your Name...')
        .replace(/{{ADD_SECTION}}/g, translations.addSection || '+ Add Section')
        .replace(/{{ADD_SECTION_DIALOG_TITLE}}/g, translations.addSectionDialogTitle || 'Add New Section')
        .replace(/{{NEW_SECTION_TITLE_PLACEHOLDER}}/g, translations.newSectionTitlePlaceholder || 'Enter section title')
        .replace(/{{OK}}/g, translations.ok || 'OK')
        .replace(/{{HELP}}/g, translations.help || 'Help')
        .replace(/{{TECH_SUPPORT}}/g, translations.techSupport || 'Technical Support')
        .replace(/{{HELP_TITLE}}/g, translations.helpTitle || 'Help')
        .replace(/{{HELP_LOADING}}/g, translations.helpLoading || 'Loading help content...')
        .replace(/{{EDIT_MODE}}/g, translations.editMode || 'Edit Mode')
        .replace(/{{EXIT_FOCUS_EDIT}}/g, translations.exitFocusEdit || 'Exit Focus Edit')
        .replace(/{{MARKDOWN_TIP}}/g, translations.markdownTip || '💡 Markdown syntax supported • Auto-save • ESC to exit')
        .replace(/{{PRINT_NOTICE}}/g, translations.printNotice || 'Print notice');
    
    // 加载并嵌入所有语言的帮助内容
    result = embedAllHelpContent(result, languages);
    
    // 生成动态语言切换器
    const languageButtons = generateLanguageSwitcher(languages, langCode);
    result = result.replace(/{{LANGUAGE_BUTTONS}}/g, languageButtons);
    
    return result;
}

// 读取指定语言的帮助内容
function loadHelpContentForLang(langCode, languages) {
    const helpFile = languages[langCode].helpFile;
    
    if (!fs.existsSync(helpFile)) {
        console.error(`Help file ${helpFile} not found for ${langCode}`);
        process.exit(1);
    }
    
    try {
        return fs.readFileSync(helpFile, 'utf8');
    } catch (error) {
        console.error(`Failed to read help file ${helpFile}:`, error.message);
        process.exit(1);
    }
}

// 将所有语言的帮助内容嵌入HTML
function embedAllHelpContent(html, languages) {
    let allHelpContents = {};
    
    // 读取所有语言的帮助内容
    for (const [langCode, langConfig] of Object.entries(languages)) {
        const helpContent = loadHelpContentForLang(langCode, languages);
        // 转义markdown内容中的特殊字符，准备嵌入JavaScript
        const escapedContent = helpContent
            .replace(/\\/g, '\\\\')
            .replace(/`/g, '\\`')
            .replace(/\${/g, '\\${');
        
        allHelpContents[langCode] = escapedContent;
    }
    
    // 生成嵌入所有帮助内容的脚本
    let scriptContent = '\n    <script>\n        // 编译时嵌入的所有语言帮助内容\n        window.ALL_HELP_CONTENTS = {\n';
    
    for (const [langCode, content] of Object.entries(allHelpContents)) {
        scriptContent += `            '${langCode}': \`${content}\`,\n`;
    }
    
    scriptContent += `        };\n        \n        // 获取当前语言的帮助内容\n        function getCurrentHelpContent() {\n            return window.ALL_HELP_CONTENTS[window.currentLang] || window.ALL_HELP_CONTENTS['zh-CN'];\n        }\n    </script>`;
    
    // 在help.js脚本后插入
    return html.replace('<script src="help.js"></script>', '<script src="help.js"></script>' + scriptContent);
}

// 主构建函数
function build() {
    console.log('Starting multi-language HTML build...');
    
    const i18nData = loadI18nData();
    const template = loadTemplate();
    
    // 为每种语言生成HTML文件
    Object.entries(i18nData.languages).forEach(([langCode, config]) => {
        console.log(`Building ${config.filename} for ${config.name} (${langCode})...`);
        
        const processedHtml = processTemplate(template, langCode, i18nData);
        
        // 写入文件
        fs.writeFileSync(config.filename, processedHtml, 'utf8');
        console.log(`✓ Generated ${config.filename}`);
    });
    
    console.log('✅ Multi-language HTML build completed!');
    console.log('\n📝 To add a new language:');
    console.log('1. Add language config to i18nData.languages in i18n.js');
    console.log('2. Add translations to i18nData.staticTexts and i18nData.translations');
    console.log('3. Run: node build.js');
}

// 运行构建
if (require.main === module) {
    build();
}

module.exports = { build };