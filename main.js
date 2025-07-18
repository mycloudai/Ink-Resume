// 主要应用逻辑

// 全局变量
let sections = [];
let pageIndicators = [];

// 全局配置 marked.js 解析器
marked.setOptions({
    gfm: true,       // 保留：启用GitHub风格的Markdown，能更好地处理子列表。
    breaks: false,   // 关键修改：关闭自动<br>转换，让我们能手动控制段落。
    mangle: false,
    headerIds: false
});

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    setLanguage('zh-CN', true); // 首次加载，不弹窗
    loadDefaultData('zh-CN'); // 加载默认中文数据
    
    initializeBasicInfo();
    renderSections();
    updatePreview();
    updatePrintStyle();
    
    // 初始化风格自定义功能
    if (typeof initializeCustomStyles === 'function') {
        initializeCustomStyles();
    }
    
    // 初始化本地存储功能
    if (typeof initializeStorage === 'function') {
        initializeStorage();
    }
    
    // 初始化 Markdown 聚焦编辑模式
    setupMarkdownEditMode(); // 首次加载时调用
    
    window.addEventListener('resize', updatePageIndicators);

    // Tab键支持
    const editorPanel = document.querySelector('.editor-panel');
    editorPanel.addEventListener('keydown', function(e) {
        if (e.target.tagName.toLowerCase() === 'textarea' && e.key === 'Tab') {
            e.preventDefault();
            const textarea = e.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            const tabReplacement = '    '; // 使用4个空格代替tab

            textarea.value = value.substring(0, start) + tabReplacement + value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + tabReplacement.length;
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
}); 

// 页面指示器更新
function updatePageIndicators() {
    pageIndicators.forEach(indicator => indicator.remove());
    pageIndicators = [];
    
    const resumePreview = document.getElementById('resumePreview');
    const height = resumePreview.scrollHeight;
    
    // 简化页数计算，仅用于信息显示
    const pageHeight = 297 * 3.78; // A4高度转px
    const pageCount = Math.ceil(height / pageHeight);
    
    // 仅更新页数显示，不显示分页线
    const pageInfoText = i18nData.translations[currentLang].pageInfo || 'Pages';
    document.getElementById('pageInfo').textContent = `${pageInfoText}: ${pageCount}`;
}

// 基本信息初始化
function initializeBasicInfo() {
    setupPhotoUpload();
    
    document.getElementById('basicInfo').addEventListener('input', () => {
        updatePreview();
    });
}

// 设置照片上传功能（每次语言切换后重新设置）
function setupPhotoUpload() {
    const photoPreview = document.getElementById('photoPreview');
    const photoInput = document.getElementById('photoInput');
    
    // 清除文件输入的值
    photoInput.value = '';
    
    // 移除旧的事件监听器（如果存在）
    const newPhotoPreview = photoPreview.cloneNode(true);
    photoPreview.parentNode.replaceChild(newPhotoPreview, photoPreview);
    
    const newPhotoInput = photoInput.cloneNode(true);
    photoInput.parentNode.replaceChild(newPhotoInput, photoInput);
    
    // 重新获取元素引用
    const freshPhotoPreview = document.getElementById('photoPreview');
    const freshPhotoInput = document.getElementById('photoInput');
    
    // 绑定点击事件
    freshPhotoPreview.addEventListener('click', () => {
        freshPhotoInput.click();
    });
    
    // 绑定文件选择事件
    freshPhotoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const photoPlaceholder = document.querySelector('.photo-placeholder');
                if(photoPlaceholder) photoPlaceholder.style.display = 'none';
                freshPhotoPreview.innerHTML = `<img src="${e.target.result}" alt="个人照片">`;
                updateResumePhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}

// 渲染部分
function renderSections() {
    const container = document.getElementById('dynamicSections');
    container.innerHTML = '';
    sections.forEach((section, index) => {
        const div = document.createElement('div');
        div.className = 'section';
        div.setAttribute('data-section-id', section.id);
        div.setAttribute('draggable', 'true');
        div.ondragstart = (e) => e.dataTransfer.setData('text/plain', index);
        div.ondragover = (e) => e.preventDefault();
        div.ondrop = (e) => {
            e.preventDefault();
            const draggedIndex = +e.dataTransfer.getData('text/plain');
            if (draggedIndex !== index) {
                const [moved] = sections.splice(draggedIndex, 1);
                sections.splice(index, 0, moved);
                renderSections();
                updatePreview();
                setupMarkdownEditMode(); // 每次重新渲染部分时调用
            }
        };
        
        const deleteText = i18nData.translations[currentLang].delete;
        const dragText = i18nData.translations[currentLang].dragToSort;

        div.innerHTML = `
            <div class="section-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <button title="${dragText}" style="cursor: move; padding: 4px 8px; border: none; background: #dee2e6; border-radius: 4px; font-size: 12px;">↕</button>
                    <h3 style="margin: 0;">${section.title}</h3>
                </div>
                <button class="delete-section-btn" onclick="deleteSection('${section.id}')">${deleteText}</button>
            </div>
            <div class="form-group">
                <textarea id="${section.id}">${section.content || ''}</textarea>
            </div>`;
        div.querySelector('textarea').addEventListener('input', function () {
            const s = sections.find(s => s.id === section.id);
            if (s) s.content = this.value;
            updatePreview();
        });
        container.appendChild(div);
    });
}

// 对话框管理
function showAddSectionDialog() {
    document.getElementById('dialogOverlay').style.display = 'block';
    document.getElementById('addSectionDialog').style.display = 'block';
    document.getElementById('newSectionTitle').value = '';
    document.getElementById('newSectionTitle').focus();
}

function hideAddSectionDialog() {
    document.getElementById('dialogOverlay').style.display = 'none';
    document.getElementById('addSectionDialog').style.display = 'none';
}

function addNewSection() {
    const title = document.getElementById('newSectionTitle').value.trim();
    if (!title) {
        alert(i18nData.translations[currentLang].enterSectionTitlePrompt);
        return;
    }
    sections.push({ id: 'section-' + Date.now(), title: title, content: '' });
    renderSections();
    updatePreview();
    hideAddSectionDialog();
    // 重新设置新添加的textarea的编辑模式
    setupMarkdownEditMode();
}

function deleteSection(id) {
    if (confirm(i18nData.translations[currentLang].confirmDeleteSection)) {
        sections = sections.filter(s => s.id !== id);
        renderSections();
        updatePreview();
    }
}

// 预览更新
function updatePreview() {
    // 第1部分：恢复"基本信息"的优雅布局
    const basicInfoPreview = document.getElementById('basicInfoPreview');
    basicInfoPreview.innerHTML = '';
    const basicInfoText = document.getElementById('basicInfo').value;
    const lines = basicInfoText.split('\n');

    let firstHeadingFound = false;
    lines.forEach(line => {
        // 如果是H标签开头的行，作为大标题处理
        if (!firstHeadingFound && line.trim().startsWith('#')) {
            basicInfoPreview.innerHTML += marked.parse(line);
            firstHeadingFound = true;
        } 
        // 对于非空行，作为单独的<p>段落，并保留行内多空格
        else if (line.trim() !== '') {
            const p = document.createElement('p');
            // 使用parseInline来处理粗体、链接等，同时手动替换多空格
            p.innerHTML = marked.parseInline(line.replace(/ {2,}/g, m => '&nbsp;'.repeat(m.length)));
            basicInfoPreview.appendChild(p);
        }
        // 空行会被自然忽略，从而在视觉上分隔了内容
    });

    // 第2部分：精确处理动态部分，支持子列表、空行和多空格
    const dynamicSectionsPreview = document.getElementById('dynamicSectionsPreview');
    dynamicSectionsPreview.innerHTML = '';
    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'resume-section';
        
        let processedContent = section.content || '';
        
        // 智能地保留行内多空格，同时不破坏行首的列表缩进
        const contentWithPreservedSpaces = processedContent.split('\n').map(line => {
            const match = line.match(/^(\s*)(.*)$/); // 分离行首缩进和行内容
            if (match) {
                const indentation = match[1]; // 这是Markdown的缩进，必须保留
                let content = match[2];     // 这是行的实际内容
                // 只在实际内容里替换多空格为&nbsp;
                content = content.replace(/ {2,}/g, m => '&nbsp;'.repeat(m.length));
                return indentation + content;
            }
            return line;
        }).join('\n');
        
        // 将处理好的内容交给marked解析
        const htmlContent = marked.parse(contentWithPreservedSpaces);
        
        sectionDiv.innerHTML = `
            <h2>${section.title}</h2>
            <div class="resume-content">${htmlContent}</div>`;
        dynamicSectionsPreview.appendChild(sectionDiv);
    });
    
    setTimeout(updatePageIndicators, 100);
}

// 照片处理
function updateResumePhoto(src) {
    const resumePhoto = document.getElementById('resumePhoto');
    if (src) {
        resumePhoto.style.display = 'block';
        resumePhoto.innerHTML = `<img src="${src}" alt="个人照片">`;
    } else {
        resumePhoto.style.display = 'none';
        resumePhoto.innerHTML = '';
    }
}

function getPhotoData() {
    const img = document.querySelector('#photoPreview img');
    return img ? img.src : null;
}

// 数据管理
function getCurrentSettings() {
    return {
        basic_info: document.getElementById('basicInfo').value,
        photo: getPhotoData(),
        sections: sections,
        print_settings: {
            title_font_size: document.getElementById('titleFontSize').value,
            content_font_size: document.getElementById('contentFontSize').value,
            scaling: document.getElementById('scaling').value,
            page_margin: document.getElementById('pageMargin').value,
            line_height: document.getElementById('lineHeight').value
        },
        custom_styles: typeof getCurrentCustomStyles === 'function' ? getCurrentCustomStyles() : null
    };
}

function exportData() {
    try {
        const data = getCurrentSettings();
        const yamlString = jsyaml.dump(data, { indent: 2, lineWidth: -1, noRefs: true });
        const blob = new Blob([yamlString], { type: 'text/yaml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = i18nData.translations[currentLang].exportSuccessFilename;
        a.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        alert(i18nData.translations[currentLang].exportError + error.message);
    }
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = jsyaml.load(e.target.result);
            applyData(data);
            alert(i18nData.translations[currentLang].importSuccess);
        } catch (err) {
            alert(i18nData.translations[currentLang].importError);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function applyData(data, lang = 'zh-CN') {
    const defaultContent = i18nData.defaultContent[lang] || i18nData.defaultContent['zh-CN'];

    document.getElementById('basicInfo').value = data.basic_info || defaultContent.basic_info;
    const photoSrc = data.photo || null;
    updateResumePhoto(photoSrc);
    const photoPreview = document.getElementById('photoPreview');
    const photoPlaceholderText = i18nData.translations[currentLang].photoPlaceholder;
    photoPreview.innerHTML = photoSrc ? `<img src="${photoSrc}" alt="photo">` : `<div class="photo-placeholder">${photoPlaceholderText}</div>`;
    
    sections = Array.isArray(data.sections) ? data.sections : defaultContent.sections;
    
    const ps = data.print_settings || i18nData.defaultSettings;
    document.getElementById('titleFontSize').value = ps.title_font_size;
    document.getElementById('contentFontSize').value = ps.content_font_size;
    document.getElementById('scaling').value = ps.scaling;
    document.getElementById('pageMargin').value = ps.page_margin;
    document.getElementById('lineHeight').value = ps.line_height;

    renderSections();
    updatePreview();
    updatePrintStyle();
    setupMarkdownEditMode(); // 导入数据后调用
    
    // 应用自定义样式设置（如果存在）
    if (typeof applyCustomStylesFromData === 'function') {
        applyCustomStylesFromData(data.custom_styles);
    }
    
    // 重新设置照片上传功能，确保语言切换后仍能正常工作
    setupPhotoUpload();
}

// Markdown 聚焦编辑功能
let currentEditingTextarea = null;
let autoSaveTimer = null;
let autoSaveDelay = 1000; // 1秒延迟自动保存

function enterMarkdownEditMode(textareaElement) {
    currentEditingTextarea = textareaElement;
    const overlay = document.getElementById('markdownEditOverlay');
    const panel = document.getElementById('markdownEditPanel');
    const focusEditor = document.getElementById('markdownFocusEditor');
    const editTitle = panel.querySelector('h2[data-i18n-key="editMode"]');
    
    // 获取当前编辑块的名称
    let blockName = i18nData.translations[currentLang].contentEdit || '内容编辑';
    
    // 如果是基本信息textarea
    if (textareaElement.id === 'basicInfo') {
        blockName = i18nData.translations[currentLang].basicInfo || i18nData.translations[currentLang].contentEdit || '基本信息';
    } else {
        // 如果是section textarea，找到对应的section标题
        const sectionDiv = textareaElement.closest('.section');
        if (sectionDiv) {
            const titleElement = sectionDiv.querySelector('h3');
            if (titleElement) {
                blockName = titleElement.textContent || i18nData.translations[currentLang].contentEdit || '内容编辑';
            }
        }
    }
    
    // 更新编辑模式标题
    editTitle.textContent = blockName;
    
    // 复制当前内容到聚焦编辑器
    focusEditor.value = textareaElement.value;
    
    // 显示编辑模式
    overlay.style.display = 'block';
    
    // 使用 requestAnimationFrame 确保动画正常执行
    requestAnimationFrame(() => {
        panel.style.transform = 'translateX(0)';
        // 稍微延迟聚焦，确保动画开始
        setTimeout(() => {
            focusEditor.focus();
        }, 100);
    });
    
    // 添加键盘快捷键支持
    focusEditor.addEventListener('keydown', handleMarkdownEditKeydown);
    
    // 添加自动保存功能
    focusEditor.addEventListener('input', handleAutoSave);
}

// 自动保存处理函数
function handleAutoSave() {
    // 清除之前的计时器
    if (autoSaveTimer) {
        clearTimeout(autoSaveTimer);
    }
    
    // 设置新的计时器
    autoSaveTimer = setTimeout(() => {
        autoSaveContent();
    }, autoSaveDelay);
}

// 执行自动保存
function autoSaveContent() {
    if (!currentEditingTextarea) return;
    
    const focusEditor = document.getElementById('markdownFocusEditor');
    const autoSaveStatus = document.getElementById('autoSaveStatus');
    
    // 保存内容到原始textarea
    currentEditingTextarea.value = focusEditor.value;
    
    // 触发输入事件以更新预览
    const event = new Event('input', { bubbles: true });
    currentEditingTextarea.dispatchEvent(event);
    
    // 显示自动保存状态
    autoSaveStatus.textContent = i18nData.translations[currentLang].autoSaving || '自动保存中...';
    autoSaveStatus.style.opacity = '1';
    
    // 2秒后隐藏状态
    setTimeout(() => {
        autoSaveStatus.style.opacity = '0';
    }, 2000);
}

// 兼容旧函数名，自动保存并退出
function saveAndExitMarkdownEdit() {
    exitMarkdownEditMode();
}

// 退出聚焦编辑模式（由于有自动保存，只需要退出）
function exitMarkdownEditMode() {
    if (!currentEditingTextarea) return;
    
    const focusEditor = document.getElementById('markdownFocusEditor');
    const overlay = document.getElementById('markdownEditOverlay');
    const panel = document.getElementById('markdownEditPanel');
    
    // 清除自动保存计时器
    if (autoSaveTimer) {
        clearTimeout(autoSaveTimer);
        autoSaveTimer = null;
    }
    
    // 最后一次保存
    autoSaveContent();
    
    // 隐藏编辑模式
    panel.style.transform = 'translateX(-100%)';
    
    // 等待动画完成后隐藏元素
    setTimeout(() => {
        overlay.style.display = 'none';
        currentEditingTextarea = null;
        
        // 移除事件监听器
        focusEditor.removeEventListener('keydown', handleMarkdownEditKeydown);
        focusEditor.removeEventListener('input', handleAutoSave);
    }, 400);
}

function handleMarkdownEditKeydown(event) {
    // Ctrl+S 快速保存（现在只是触发自动保存）
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        autoSaveContent();
    }
    
    // ESC 退出编辑模式
    if (event.key === 'Escape') {
        event.preventDefault();
        exitMarkdownEditMode();
    }
}

// 为所有 textarea 添加聚焦编辑功能
function setupMarkdownEditMode() {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        // 跳过已经处理过的textarea
        if (textarea.parentNode.classList.contains('textarea-wrapper')) {
            return;
        }
        
        // 创建包装容器
        const wrapper = document.createElement('div');
        wrapper.className = 'textarea-wrapper';
        
        // 将textarea包装在容器中
        textarea.parentNode.insertBefore(wrapper, textarea);
        wrapper.appendChild(textarea);
        
        // 创建聚焦编辑按钮
        const focusBtn = document.createElement('button');
        focusBtn.className = 'focus-edit-btn';
        focusBtn.innerHTML = '📝';
        focusBtn.type = 'button';
        focusBtn.title = i18nData.translations[currentLang].focusEdit || '聚焦编辑'; // 添加提示文本
        
        // 绑定点击事件
        focusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            enterMarkdownEditMode(textarea);
        });
        
        wrapper.appendChild(focusBtn);
        
        // 保留双击事件作为备选
        textarea.removeEventListener('dblclick', handleTextareaDoubleClick);
        textarea.addEventListener('dblclick', handleTextareaDoubleClick);
    });
}

function handleTextareaDoubleClick(event) {
    // 防止事件冒泡
    event.preventDefault();
    event.stopPropagation();
    
    enterMarkdownEditMode(this);
}