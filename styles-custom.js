// 风格自定义功能模块

// 默认风格设置
const defaultCustomStyles = {
    fontFamily: 'Microsoft YaHei, Arial, sans-serif',
    dividerColor: '#b8860b'
};

// 当前自定义风格设置
let currentCustomStyles = { ...defaultCustomStyles };

// 初始化自定义风格功能
function initializeCustomStyles() {
    // 设置默认字体选择器
    const fontSelector = document.getElementById('fontSelector');
    if (fontSelector) {
        const fontOptions = {
            "'Microsoft YaHei', Arial, sans-serif": 0,
            "'SimSun', serif": 1,
            "'Times New Roman', serif": 2,
            "'Arial', sans-serif": 3
        };
        
        const optionIndex = fontOptions[currentCustomStyles.fontFamily];
        if (optionIndex !== undefined) {
            fontSelector.selectedIndex = optionIndex;
        } else {
            fontSelector.selectedIndex = 0; // 默认选择微软雅黑
        }
    }
    
    // 设置默认颜色
    document.getElementById('dividerColorPicker').value = currentCustomStyles.dividerColor;
    
    // 更新颜色值显示
    updateColorDisplays();
    
    // 应用初始样式
    applyCustomStyles();
}

// 更新颜色值显示
function updateColorDisplays() {
    document.getElementById('dividerColorValue').textContent = currentCustomStyles.dividerColor;
}

// 更新自定义样式
function updateCustomStyles() {
    // 获取当前设置值
    currentCustomStyles.fontFamily = document.getElementById('fontSelector').value;
    currentCustomStyles.dividerColor = document.getElementById('dividerColorPicker').value;
    
    // 更新颜色值显示
    updateColorDisplays();
    
    // 应用样式
    applyCustomStyles();
    
    // 同时更新打印样式
    if (typeof updatePrintStyle === 'function') {
        updatePrintStyle();
    }
}

// 应用自定义样式到预览
function applyCustomStyles() {
    // 更新CSS变量
    document.documentElement.style.setProperty('--custom-font-family', currentCustomStyles.fontFamily);
    document.documentElement.style.setProperty('--custom-divider-color', currentCustomStyles.dividerColor);
    
    // 为支持rgba()的模板添加RGB颜色变量
    const rgbColor = hexToRgb(currentCustomStyles.dividerColor);
    if (rgbColor) {
        document.documentElement.style.setProperty('--custom-divider-color-rgb', `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`);
    }
    
    // 更新打印样式
    updatePrintStylesWithCustomization();
    
    // 触发预览更新
    if (typeof updatePreview === 'function') {
        updatePreview();
    }
}

// 将十六进制颜色转换为RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// 从模板更新自定义样式（不触发重新应用）
function updateCustomStylesFromTemplate(fontFamily, dividerColor) {
    currentCustomStyles.fontFamily = fontFamily;
    currentCustomStyles.dividerColor = dividerColor;
    
    // 更新字体选择器
    const fontSelector = document.getElementById('fontSelector');
    if (fontSelector) {
        const fontOptions = {
            "'Microsoft YaHei', Arial, sans-serif": 0,
            "'SimSun', serif": 1,
            "'Times New Roman', serif": 2,
            "'Arial', sans-serif": 3
        };
        
        const optionIndex = fontOptions[fontFamily];
        if (optionIndex !== undefined) {
            fontSelector.selectedIndex = optionIndex;
        } else {
            fontSelector.selectedIndex = 0; // 默认选择微软雅黑
        }
    }
    
    // 更新颜色选择器
    document.getElementById('dividerColorPicker').value = dividerColor;
    updateColorDisplays();
}

// 重置为默认样式
function resetCustomStyles() {
    currentCustomStyles = { ...defaultCustomStyles };
    
    // 更新字体选择器
    const fontSelector = document.getElementById('fontSelector');
    if (fontSelector) {
        const fontOptions = {
            "'Microsoft YaHei', Arial, sans-serif": 0,
            "'SimSun', serif": 1,
            "'Times New Roman', serif": 2,
            "'Arial', sans-serif": 3
        };
        
        const optionIndex = fontOptions[currentCustomStyles.fontFamily];
        if (optionIndex !== undefined) {
            fontSelector.selectedIndex = optionIndex;
        } else {
            fontSelector.selectedIndex = 0;
        }
    }
    
    // 更新颜色选择器
    document.getElementById('dividerColorPicker').value = currentCustomStyles.dividerColor;
    
    // 更新显示和应用样式
    updateColorDisplays();
    applyCustomStyles();
    
    // 同时更新打印样式
    if (typeof updatePrintStyle === 'function') {
        updatePrintStyle();
    }
}

// 获取当前自定义样式设置
function getCurrentCustomStyles() {
    return { ...currentCustomStyles };
}

// 应用自定义样式设置
function applyCustomStylesFromData(styles) {
    if (styles) {
        currentCustomStyles = {
            fontFamily: styles.fontFamily || defaultCustomStyles.fontFamily,
            dividerColor: styles.dividerColor || defaultCustomStyles.dividerColor
        };
    } else {
        currentCustomStyles = { ...defaultCustomStyles };
    }
    
    // 更新UI控件
    document.getElementById('fontSelector').value = currentCustomStyles.fontFamily;
    document.getElementById('dividerColorPicker').value = currentCustomStyles.dividerColor;
    
    // 更新显示和应用样式
    updateColorDisplays();
    applyCustomStyles();
}

// 更新打印样式以包含自定义设置
function updatePrintStylesWithCustomization() {
    // 这个函数会在 print.js 中的 updatePrintStyle 函数中被调用
    // 为了避免重复代码，我们将在 print.js 中集成这个功能
}