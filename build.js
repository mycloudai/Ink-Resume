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
        // 读取i18n.js文件内容
        let i18nContent = fs.readFileSync('i18n.js', 'utf8');
        
        // 找到i18nData对象的开始和结束位置
        const startMatch = i18nContent.match(/const i18nData = \{/);
        if (!startMatch) {
            throw new Error('Could not find i18nData declaration');
        }
        
        const startPos = startMatch.index + 'const i18nData = '.length;
        let braceCount = 0;
        let endPos = startPos;
        
        // 找到匹配的闭合大括号
        for (let i = startPos; i < i18nContent.length; i++) {
            const char = i18nContent[i];
            if (char === '{') braceCount++;
            else if (char === '}') {
                braceCount--;
                if (braceCount === 0) {
                    endPos = i + 1;
                    break;
                }
            }
        }
        
        // 提取对象内容
        const objectContent = i18nContent.substring(startPos, endPos);
        
        // 创建安全的执行环境
        const i18nData = eval('(' + objectContent + ')');
        return i18nData;
    } catch (error) {
        console.error('Failed to load i18n data:', error);
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
        .replace(/{{OK}}/g, translations.ok || 'OK');
    
    // 生成动态语言切换器
    const languageButtons = generateLanguageSwitcher(languages, langCode);
    result = result.replace(/{{LANGUAGE_BUTTONS}}/g, languageButtons);
    
    return result;
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