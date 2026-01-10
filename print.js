// 打印相关功能模块

// ===== 打印结束后，强制恢复编辑与交互状态 =====
window.addEventListener('afterprint', () => {
    // 清除浏览器残留焦点
    document.activeElement?.blur();

    // 强制恢复指针事件（Chrome / Edge 必须）
    document.body.style.pointerEvents = 'auto';

    // 解锁编辑状态（如果存在）
    if (typeof isEditing !== 'undefined') {
        isEditing = false;
    }

    // 强制重置聚焦编辑面板的状态（关键修复）
    const markdownOverlay = document.getElementById('markdownEditOverlay');
    const markdownPanel = document.getElementById('markdownEditPanel');
    if (markdownOverlay) {
        markdownOverlay.style.display = 'none';
        markdownOverlay.style.pointerEvents = 'auto';
        markdownOverlay.style.visibility = 'visible';
        markdownOverlay.style.opacity = '1';
    }
    if (markdownPanel) {
        markdownPanel.style.transform = 'translateX(-100%)';
        markdownPanel.style.pointerEvents = 'auto';
        markdownPanel.style.visibility = 'visible';
        markdownPanel.style.opacity = '1';
    }

    // 重置所有 textarea 和按钮的 pointer-events
    setTimeout(() => {
        const allTextareas = document.querySelectorAll('textarea');
        allTextareas.forEach(textarea => {
            textarea.style.pointerEvents = 'auto';
            const wrapper = textarea.parentNode;
            if (wrapper && wrapper.classList.contains('textarea-wrapper')) {
                wrapper.style.pointerEvents = 'auto';
                const focusBtn = wrapper.querySelector('.focus-edit-btn');
                if (focusBtn) {
                    focusBtn.style.pointerEvents = 'auto';
                }
            }
        });

        // 确保编辑器面板也恢复 pointer-events
        const editorPanel = document.querySelector('.editor-panel');
        if (editorPanel) {
            editorPanel.style.pointerEvents = 'auto';
        }
    }, 50);
});


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
                font-family: var(--custom-font-family) !important;
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
            
            /* 打印时移除链接样式，但不修改DOM */
            a {
                color: inherit !important;
                text-decoration: none !important;
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

function doPrint() {
    hidePrintSettings();

    // 不需要强制移除和重新生成打印样式，因为updatePrintStyle()已经在设置变化时调用了
    // 只在打印样式不存在时才生成
    const existingPrintStyleTag = document.getElementById('original-print-styles');
    if (!existingPrintStyleTag) {
        updatePrintStyle();
    }

    // 隐藏页面信息
    const pageInfo = document.getElementById('pageInfo');
    const originalDisplay = pageInfo.style.display;
    pageInfo.style.display = 'none';

    // 隐藏浏览器扩展元素（如聊天机器人插件）
    const extensionElements = hideExtensionElements();

    // 不再修改DOM结构，完全依赖CSS
    // 链接样式已经在打印CSS中处理

    setTimeout(() => {
        window.print();

        // 打印完成后恢复显示
        pageInfo.style.display = originalDisplay;

        // 恢复浏览器扩展元素的显示
        restoreExtensionElements(extensionElements);
    }, 100);
}

// 隐藏浏览器扩展元素
function hideExtensionElements() {
    const hiddenElements = [];

    // 查找所有可能是浏览器扩展的元素
    const selectors = [
        // 高z-index的固定定位元素
        'body > *[style*="position: fixed"][style*="z-index"]',
        'body > *[style*="position:fixed"][style*="z-index"]',
        // 常见的扩展元素特征
        '[id*="chatbot"]',
        '[id*="chat-bot"]',
        '[id*="extension"]',
        '[class*="chatbot"]',
        '[class*="chat-bot"]',
        '[class*="chrome-extension"]',
        // iframe扩展元素
        'iframe[src*="chrome-extension"]',
        'iframe[src*="chatbot"]'
    ];

    selectors.forEach(selector => {
        try {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                // 确保不是简历内容的一部分
                if (!el.closest('.resume-preview') && !el.closest('.editor-panel')) {
                    const originalDisplay = el.style.display;
                    const originalVisibility = el.style.visibility;
                    el.style.display = 'none';
                    el.style.visibility = 'hidden';
                    hiddenElements.push({
                        element: el,
                        display: originalDisplay,
                        visibility: originalVisibility
                    });
                }
            });
        } catch (e) {
            // 忽略选择器错误
            console.warn('Extension element selector error:', selector, e);
        }
    });

    // 额外处理：隐藏所有高z-index的body直接子元素
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
        try {
            const zIndex = parseInt(window.getComputedStyle(el).zIndex);
            const position = window.getComputedStyle(el).position;

            // 如果是高z-index且固定定位的元素（且不是我们的内容）
            if (zIndex > 1000 && position === 'fixed' &&
                !el.closest('.resume-preview') &&
                !el.closest('.editor-panel') &&
                !el.id.includes('print') &&
                !el.id.includes('dialog')) {

                const originalDisplay = el.style.display;
                const originalVisibility = el.style.visibility;
                el.style.display = 'none';
                el.style.visibility = 'hidden';
                hiddenElements.push({
                    element: el,
                    display: originalDisplay,
                    visibility: originalVisibility
                });
            }
        } catch (e) {
            // 忽略样式读取错误
        }
    });

    console.log(`Hidden ${hiddenElements.length} extension elements for printing`);
    return hiddenElements;
}

// 恢复浏览器扩展元素的显示
function restoreExtensionElements(hiddenElements) {
    hiddenElements.forEach(item => {
        item.element.style.display = item.display;
        item.element.style.visibility = item.visibility;
    });
    console.log(`Restored ${hiddenElements.length} extension elements after printing`);
}
