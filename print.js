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
            body {
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                font-size: ${Math.round(contentFontSize * scaling / 100)}px !important;
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
                /* 移除zoom，使用字体缩放代替 */
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
                border-bottom: 1.5px solid #b8860b !important;
            }
            #basicInfoPreview h3 {
                font-size: ${Math.round(titleFontSize * scaling / 100)}px !important;
                color: #3c4043 !important;
                font-weight: 600 !important;
            }
            #basicInfoPreview p, .resume-content {
                font-size: ${Math.round(contentFontSize * scaling / 100)}px !important;
                line-height: ${lineHeight} !important;
                color: #5f6368 !important;
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
            }
            .resume-content p {
                orphans: 3;
                widows: 3;
                margin-bottom: 2mm !important;
            }
            .resume-content li {
                page-break-inside: avoid;
                margin-bottom: 1mm !important;
            }
            .resume-content ul {
                padding-left: 20px !important;
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
    
    // 隐藏页面信息
    const pageInfo = document.getElementById('pageInfo');
    pageInfo.style.display = 'none';
    
    stripLinks(document.getElementById('resumePreview'));
    
    setTimeout(() => {
        window.print();
        
        // 恢复显示
        pageInfo.style.display = 'block';
        updatePreview();
    }, 100);
}