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
    // 设置默认值
    document.getElementById('fontSelector').value = currentCustomStyles.fontFamily;
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
    
    // 更新预览区域的字体
    const resumePreview = document.getElementById('resumePreview');
    if (resumePreview) {
        resumePreview.style.fontFamily = currentCustomStyles.fontFamily;
    }
    
    // 更新分割线颜色
    const sectionHeaders = document.querySelectorAll('.resume-section h2');
    sectionHeaders.forEach(header => {
        header.style.borderBottomColor = currentCustomStyles.dividerColor;
    });
    
    // 更新打印样式
    updatePrintStylesWithCustomization();
}

// 重置为默认样式
function resetCustomStyles() {
    currentCustomStyles = { ...defaultCustomStyles };
    
    // 更新UI控件
    document.getElementById('fontSelector').value = currentCustomStyles.fontFamily;
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