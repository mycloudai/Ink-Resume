// 打印相关功能模块

function showPrintSettings() { 
    document.getElementById('printSettings').style.display = 'block'; 
}

function hidePrintSettings() { 
    document.getElementById('printSettings').style.display = 'none'; 
}

function updatePrintStyle() {
    const titleFontSize = document.getElementById('titleFontSize').value;
    const contentFontSize = document.getElementById('contentFontSize').value;
    const scaling = document.getElementById('scaling').value;
    const pageMargin = document.getElementById('pageMargin').value;
    const lineHeight = document.getElementById('lineHeight').value;
    
    // 获取自定义样式设置
    let customStyles;
    try {
        customStyles = (typeof getCurrentCustomStyles === 'function') ? getCurrentCustomStyles() : null;
    } catch (e) {
        customStyles = null;
    }
    
    // 如果无法获取自定义样式，使用默认值
    if (!customStyles) {
        customStyles = {
            fontFamily: 'Microsoft YaHei, Arial, sans-serif',
            dividerColor: '#b8860b'
        };
    }
    
    // 调试信息：显示当前字体设置
    console.log('Print font family:', customStyles.fontFamily);
    
    
    document.getElementById('titleFontValue').textContent = titleFontSize + 'px';
    document.getElementById('contentFontValue').textContent = contentFontSize + 'px';
    document.getElementById('scalingValue').textContent = scaling + '%';
    document.getElementById('pageMarginValue').textContent = pageMargin + 'mm';
    document.getElementById('lineHeightValue').textContent = lineHeight;

    // 仅更新预览样式的CSS变量
    document.documentElement.style.setProperty('--live-title-font-size', titleFontSize + 'px');
    document.documentElement.style.setProperty('--live-content-font-size', contentFontSize + 'px');
    document.documentElement.style.setProperty('--live-line-height', lineHeight);
    document.documentElement.style.setProperty('--live-page-padding', pageMargin + 'mm');

    // 使用原始简历代码的打印样式 - 完全独立
    let printStyleTag = document.getElementById('original-print-styles');
    if (!printStyleTag) {
        printStyleTag = document.createElement('style');
        printStyleTag.id = 'original-print-styles';
        document.head.appendChild(printStyleTag);
    }

    // 原始代码的打印样式 - 修复zoom问题
    printStyleTag.innerHTML = `
        @media print {
            @page {
                size: A4;
                margin: 15mm ${pageMargin}mm;
            }
            :root {
                --custom-font-family: "${customStyles.fontFamily}" !important;
            }
            * {
                font-family: "${customStyles.fontFamily}" !important;
            }
            body {
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                font-size: ${Math.round(contentFontSize * scaling / 100)}px !important;
                font-family: "${customStyles.fontFamily}" !important;
            }
            .container {
                display: block !important;
            }
            .editor-panel {
                display: none !important;
            }
            .preview-panel {
                display: block !important;
                padding: 0 !important;
                border: none !important;
                box-shadow: none !important;
                background: white !important;
                overflow: visible !important;
            }
            .resume-preview {
                padding: 0 !important;
                box-shadow: none !important;
                page-break-inside: auto;
                min-height: auto !important;
                height: auto !important;
                width: 100% !important;
                max-width: none !important;
                background: white !important;
                font-family: "${customStyles.fontFamily}" !important;
                /* 移除zoom，使用字体缩放代替 */
            }
            .resume-preview, .resume-preview * {
                font-family: "${customStyles.fontFamily}" !important;
            }
            .page-info {
                display: none !important;
            }
            .resume-header {
                margin-bottom: 8mm !important;
                page-break-after: avoid;
                page-break-inside: avoid;
                display: flex !important;
                gap: 12mm !important;
                align-items: flex-start !important;
            }
            .resume-photo {
                flex-shrink: 0 !important;
                width: ${Math.round(120 * scaling / 100)}px !important;
                height: ${Math.round(160 * scaling / 100)}px !important;
            }
            .resume-photo img {
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                border-radius: 8px !important;
            }
            .resume-basic-info {
                flex: 1 !important;
                height: ${Math.round(160 * scaling / 100)}px !important;
            }
            #basicInfoPreview {
                height: 100% !important;
                display: flex !important;
                flex-direction: column !important;
                justify-content: space-between !important;
            }
            #basicInfoPreview > * {
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                line-height: ${lineHeight} !important;
            }
            .resume-section {
                margin-bottom: 6mm !important;
                page-break-inside: auto;
            }
            .resume-section h2 {
                font-size: ${Math.round(titleFontSize * scaling / 100)}px !important;
                padding-bottom: 2mm !important;
                margin-bottom: 4mm !important;
                page-break-after: avoid;
                page-break-inside: avoid;
                color: #3c4043 !important;
                font-weight: 700 !important;
                border-bottom: 1.5px solid ${customStyles.dividerColor} !important;
                font-family: "${customStyles.fontFamily}" !important;
            }
            #basicInfoPreview h3 {
                font-size: ${Math.round(titleFontSize * scaling / 100)}px !important;
                color: #3c4043 !important;
                font-weight: 600 !important;
                font-family: "${customStyles.fontFamily}" !important;
            }
            #basicInfoPreview p, .resume-content {
                font-size: ${Math.round(contentFontSize * scaling / 100)}px !important;
                line-height: ${lineHeight} !important;
                color: #5f6368 !important;
                font-family: "${customStyles.fontFamily}" !important;
            }
            .resume-content h1,
            .resume-content h2,
            .resume-content h3,
            .resume-content h4,
            .resume-content h5,
            .resume-content h6 {
                color: #3c4043 !important;
                margin-top: 4mm !important;
                margin-bottom: 2mm !important;
                font-weight: 600 !important;
                border-bottom: none !important;
                font-family: "${customStyles.fontFamily}" !important;
            }
            .resume-content p {
                orphans: 3;
                widows: 3;
                margin-bottom: 2mm !important;
                font-family: "${customStyles.fontFamily}" !important;
            }
            .resume-content li {
                page-break-inside: avoid;
                margin-bottom: 1mm !important;
                font-family: "${customStyles.fontFamily}" !important;
            }
            .resume-content ul {
                padding-left: 20px !important;
            }
            .resume-content ul, .resume-content ol {
                font-family: "${customStyles.fontFamily}" !important;
            }
            .non-print {
                display: none !important;
            }
        }
    `;
    
    // 更新页面指示器
    setTimeout(updatePageIndicators, 100);
}

function stripLinks(containerElement) {
    const links = containerElement.querySelectorAll('a');
    links.forEach(link => {
        const span = document.createElement('span');
        span.textContent = link.textContent;
        link.parentNode.replaceChild(span, link);
    });
}

function doPrint() {
    hidePrintSettings();
    
    // 强制移除旧的打印样式标签以确保重新生成
    const oldPrintStyleTag = document.getElementById('original-print-styles');
    if (oldPrintStyleTag) {
        oldPrintStyleTag.remove();
    }
    
    // 获取当前字体设置并强制更新CSS变量
    let customStyles;
    try {
        customStyles = (typeof getCurrentCustomStyles === 'function') ? getCurrentCustomStyles() : null;
    } catch (e) {
        customStyles = null;
    }
    
    if (!customStyles) {
        customStyles = {
            fontFamily: 'Microsoft YaHei, Arial, sans-serif',
            dividerColor: '#b8860b'
        };
    }
    
    // 强制更新CSS变量
    document.documentElement.style.setProperty('--custom-font-family', customStyles.fontFamily);
    console.log('Forcing CSS variable update for print:', customStyles.fontFamily);
    
    // 确保打印样式是最新的，包括自定义样式
    updatePrintStyle();
    
    // 隐藏页面信息
    const pageInfo = document.getElementById('pageInfo');
    pageInfo.style.display = 'none';
    
    stripLinks(document.getElementById('resumePreview'));
    
    // 直接修改DOM元素的字体样式作为备用方案
    const resumePreview = document.getElementById('resumePreview');
    const allElements = resumePreview.querySelectorAll('*');
    const originalStyles = [];
    
    // 保存原始样式并应用打印字体
    allElements.forEach((element, index) => {
        originalStyles[index] = element.style.fontFamily;
        element.style.setProperty('font-family', customStyles.fontFamily, 'important');
    });
    
    // 也为主容器设置字体
    const originalResumeStyle = resumePreview.style.fontFamily;
    resumePreview.style.setProperty('font-family', customStyles.fontFamily, 'important');
    
    setTimeout(() => {
        window.print();
        
        // 恢复原始样式
        allElements.forEach((element, index) => {
            if (originalStyles[index]) {
                element.style.fontFamily = originalStyles[index];
            } else {
                element.style.removeProperty('font-family');
            }
        });
        
        if (originalResumeStyle) {
            resumePreview.style.fontFamily = originalResumeStyle;
        } else {
            resumePreview.style.removeProperty('font-family');
        }
        
        // 恢复显示
        pageInfo.style.display = 'block';
        updatePreview();
    }, 100);
}