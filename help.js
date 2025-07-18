// 帮助系统功能

// 打开帮助模态框
function openHelpModal() {
    const modal = document.getElementById('helpModal');
    const content = document.getElementById('helpContent');
    
    // 显示模态框
    modal.style.display = 'block';
    
    // 显示加载状态
    content.innerHTML = `<div style="text-align: center; padding: 40px; color: #666;">${i18nData.translations[currentLang].helpLoading}</div>`;
    
    // 获取当前语言的help文件路径
    const helpFile = i18nData.languages[currentLang].helpFile;
    
    // 加载markdown内容
    loadHelpContent(helpFile);
    
    // 阻止body滚动
    document.body.style.overflow = 'hidden';
}

// 关闭帮助模态框
function closeHelpModal() {
    const modal = document.getElementById('helpModal');
    modal.style.display = 'none';
    
    // 恢复body滚动
    document.body.style.overflow = 'auto';
}

// 加载帮助内容
function loadHelpContent(helpFile) {
    const content = document.getElementById('helpContent');
    
    if (!window.ALL_HELP_CONTENTS || !window.getCurrentHelpContent) {
        console.error('No compiled help content found');
        return;
    }
    
    // 获取当前语言的帮助内容
    const markdownText = getCurrentHelpContent();
    
    // 使用marked.js渲染markdown
    const htmlContent = marked.parse(markdownText);
    
    // 应用帮助内容样式并插入HTML
    content.innerHTML = `
        <div class="help-content">
            ${htmlContent}
        </div>
    `;
}


// 点击模态框外部关闭
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('helpModal');
    const modalContent = document.getElementById('helpModalContent');
    
    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeHelpModal();
        }
    });
    
    // 阻止点击模态框内容时关闭
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeHelpModal();
        }
    });
});