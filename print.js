// 打印相关功能模块

function showPrintSettings() { 
    const sidebar = document.getElementById('printSettingsSidebar');
    const overlay = document.getElementById('printSidebarOverlay');
    
    overlay.style.display = 'block';
    sidebar.style.display = 'block';
    
    // 使用requestAnimationFrame确保display设置生效后再改变transform
    requestAnimationFrame(() => {
        sidebar.style.transform = 'translateX(0)';
    });
}

function hidePrintSettings() { 
    const sidebar = document.getElementById('printSettingsSidebar');
    const overlay = document.getElementById('printSidebarOverlay');
    
    sidebar.style.transform = 'translateX(100%)';
    
    // 等待动画完成后隐藏
    setTimeout(() => {
        overlay.style.display = 'none';
        sidebar.style.display = 'none';
    }, 300);
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
    
    
    // 计算缩放后的字体大小
    const scaledTitleFontSize = Math.round(titleFontSize * scaling / 100);
    const scaledContentFontSize = Math.round(contentFontSize * scaling / 100);

    document.getElementById('titleFontValue').textContent = titleFontSize + 'px';
    document.getElementById('contentFontValue').textContent = contentFontSize + 'px';
    document.getElementById('scalingValue').textContent = scaling + '%';
    document.getElementById('pageMarginValue').textContent = pageMargin + 'mm';
    document.getElementById('lineHeightValue').textContent = lineHeight;

    // 更新预览样式的CSS变量（应用缩放到字体，但不影响照片）
    document.documentElement.style.setProperty('--live-title-font-size', scaledTitleFontSize + 'px');
    document.documentElement.style.setProperty('--live-content-font-size', scaledContentFontSize + 'px');
    document.documentElement.style.setProperty('--live-line-height', lineHeight);
    document.documentElement.style.setProperty('--live-page-padding', pageMargin + 'mm');

    // 使用原始简历代码的打印样式 - 完全独立
    let printStyleTag = document.getElementById('original-print-styles');
    if (!printStyleTag) {
        printStyleTag = document.createElement('style');
        printStyleTag.id = 'original-print-styles';
        document.head.appendChild(printStyleTag);
    }

    // 最简化的打印样式 - 只做必要的事情
    printStyleTag.innerHTML = `
        @media print {
            @page {
                size: A4;
                margin: ${pageMargin}mm;
            }

            /* 强制所有元素背景透明 */
            * {
                background: none !important;
                background-color: transparent !important;
                background-image: none !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            /* 移除所有背景 - 让浏览器使用默认白色 */
            html, body {
                background: none !important;
                background-color: transparent !important;
                background-image: none !important;
                margin: 0 !important;
                padding: 0 !important;
            }

            /* 移除所有容器的背景和装饰效果 */
            .container, .preview-panel {
                background: none !important;
                background-color: transparent !important;
                background-image: none !important;
                border-radius: 0 !important;
                box-shadow: none !important;
                border: none !important;
                backdrop-filter: none !important;
            }

            /* 不要强制移除简历内容的背景 - 这会破坏模板样式 */

            /* 隐藏编辑面板，只显示预览 */
            .editor-panel {
                display: none !important;
            }

            .container {
                display: block !important;
                background: none !important;
            }

            .preview-panel {
                width: 100% !important;
                padding: 0 !important;
                border: none !important;
                background: none !important;
            }

            .resume-preview {
                width: 100% !important;
                max-width: none !important;
                padding: 0 !important;
                font-family: "${customStyles.fontFamily}" !important;
                font-size: ${Math.round(contentFontSize * scaling / 100)}px !important;
                /* 移除所有装饰效果，让背景透明 */
                background: none !important;
                background-color: transparent !important;
                background-image: none !important;
                border-radius: 0 !important;
                box-shadow: none !important;
                border: none !important;
                backdrop-filter: none !important;
                /* 确保内容可见 */
                color: inherit !important;
                visibility: visible !important;
                opacity: 1 !important;
            }
            
            /* 确保所有简历内容都可见 */
            .resume-preview * {
                visibility: visible !important;
                opacity: 1 !important;
            }
            
            /* 隐藏不需要打印的元素 */
            .lang-switcher,
            .non-print,
            .page-info,
            #save-status {
                display: none !important;
            }
            
            /* 基本布局 */
            .resume-header {
                display: flex !important;
                gap: 12mm !important;
                margin-bottom: 8mm !important;
            }
            
            .resume-photo {
                width: 120px !important;
                height: 160px !important;
                flex-shrink: 0 !important;
            }
            
            .resume-basic-info {
                flex: 1 !important;
            }
            
            .resume-section {
                margin-bottom: 6mm !important;
            }
            
            .resume-section h2 {
                font-size: ${Math.round(titleFontSize * scaling / 100)}px !important;
                font-weight: 700 !important;
                margin-bottom: 4mm !important;
            }
            
            .resume-content {
                line-height: ${lineHeight} !important;
            }
            
            /* 重新启用模板需要的背景样式 */
            .template-modern .resume-section h2 {
                background: var(--custom-divider-color, #2196F3) !important;
                background-color: var(--custom-divider-color, #2196F3) !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            
            .template-modern .resume-header {
                background: rgba(var(--custom-divider-color-rgb, 33, 150, 243), 0.1) !important;
                border-left: 4px solid var(--custom-divider-color, #2196F3) !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            
            .template-professional .resume-section h2 {
                background: var(--custom-divider-color, #1f4e79) !important;
                background-color: var(--custom-divider-color, #1f4e79) !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            
            .template-professional .resume-header {
                background: rgba(var(--custom-divider-color-rgb, 31, 78, 121), 0.05) !important;
                border-left: 5px solid var(--custom-divider-color, #1f4e79) !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            
            
            .template-modern .resume-content::before {
                background: var(--custom-divider-color, #2196F3) !important;
                background-color: var(--custom-divider-color, #2196F3) !important;
            }
            
            .template-elegant .resume-section h2::after {
                background: var(--custom-divider-color, #8e44ad) !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            
            .template-elegant .resume-header {
                border-color: var(--custom-divider-color, #8e44ad) !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
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
        
        // 恢复原始样式 - 但保持用户选择的字体
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
        
        // 重新应用自定义字体样式
        document.documentElement.style.setProperty('--custom-font-family', customStyles.fontFamily);
        
        // 恢复显示
        pageInfo.style.display = 'block';
        
        // 重新应用自定义样式以确保字体正确
        if (typeof applyCustomStyles === 'function') {
            applyCustomStyles();
        } else {
            updatePreview();
        }
    }, 100);
}