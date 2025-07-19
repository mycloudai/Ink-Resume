// 本地存储管理模块
// 提供自动保存、恢复功能，不影响现有功能

// 存储键名配置
const STORAGE_KEYS = {
    AUTO_SAVE: 'ink_resume_autosave',
    SAVED_RESUMES: 'ink_resume_saved_list',
    SETTINGS: 'ink_resume_settings'
};

// 自动保存功能
class AutoSaveManager {
    constructor() {
        this.saveTimeout = null;
        this.saveDelay = 2000; // 2秒延迟保存
        this.isEnabled = true;
        this.init();
    }

    init() {
        // 页面加载时尝试恢复数据
        
        // 监听页面关闭事件，强制保存
        window.addEventListener('beforeunload', () => {
            if (this.isEnabled) {
                this.saveImmediately();
            }
        });
    }

    // 启用自动保存
    enable() {
        this.isEnabled = true;
    }

    // 禁用自动保存
    disable() {
        this.isEnabled = false;
        if (this.saveTimeout) {
            clearTimeout(this.saveTimeout);
        }
    }

    // 触发自动保存
    triggerSave() {
        if (!this.isEnabled) return;

        // 清除之前的定时器
        if (this.saveTimeout) {
            clearTimeout(this.saveTimeout);
        }

        // 设置新的定时器
        this.saveTimeout = setTimeout(() => {
            this.saveImmediately();
        }, this.saveDelay);
    }

    // 立即保存
    saveImmediately() {
        if (!this.isEnabled) return;

        try {
            // 获取当前数据（使用现有的 getCurrentSettings 函数）
            const currentData = typeof getCurrentSettings === 'function' 
                ? getCurrentSettings() 
                : this.getCurrentDataFallback();
            
            // 添加时间戳
            const dataWithTimestamp = {
                ...currentData,
                timestamp: Date.now(),
                language: currentLang || 'zh-CN'
            };

            // 保存到localStorage
            localStorage.setItem(STORAGE_KEYS.AUTO_SAVE, JSON.stringify(dataWithTimestamp));
            
            // 显示保存状态（可选）
            this.showSaveStatus('已自动保存', 'success');
            
        } catch (error) {
            console.warn('自动保存失败:', error);
            this.showSaveStatus('保存失败', 'error');
        }
    }

    // 恢复数据
    restoreData() {
        try {
            const savedData = localStorage.getItem(STORAGE_KEYS.AUTO_SAVE);
            if (!savedData) return false;

            const data = JSON.parse(savedData);
            
            // 检查数据是否有效
            if (!data.timestamp) return false;

            // 询问用户是否恢复
            const shouldRestore = this.shouldRestoreData(data);
            if (!shouldRestore) return false;

            // 恢复数据（使用现有的 applyData 函数）
            if (typeof applyData === 'function') {
                applyData(data, data.language || 'zh-CN');
            } else {
                this.applyDataFallback(data);
            }

            this.showSaveStatus('已恢复之前的编辑', 'success');
            return true;

        } catch (error) {
            console.warn('恢复数据失败:', error);
            return false;
        }
    }

    // 判断是否应该恢复数据
    shouldRestoreData(data) {
        const now = Date.now();
        const timeDiff = now - data.timestamp;
        const hoursDiff = timeDiff / (1000 * 60 * 60);

        // 如果超过24小时，不自动恢复
        if (hoursDiff > 24) {
            return false;
        }

        // 如果是刚刚保存的（5分钟内），直接恢复
        if (hoursDiff < 0.083) { // 5分钟
            return true;
        }

        // 其他情况询问用户
        const timeStr = this.formatTimeDiff(timeDiff);
        return confirm(`发现${timeStr}前的自动保存数据，是否恢复？`);
    }

    // 格式化时间差
    formatTimeDiff(timeDiff) {
        const minutes = Math.floor(timeDiff / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        
        if (hours > 0) {
            return `${hours}小时${minutes % 60}分钟`;
        } else {
            return `${minutes}分钟`;
        }
    }

    // 显示保存状态
    showSaveStatus(message, type = 'success') {
        // 创建状态提示元素
        let statusEl = document.getElementById('save-status');
        if (!statusEl) {
            statusEl = document.createElement('div');
            statusEl.id = 'save-status';
            statusEl.style.cssText = `
                position: fixed;
                top: 60px;
                right: 20px;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 1001;
                transition: all 0.3s ease;
                pointer-events: none;
            `;
            document.body.appendChild(statusEl);
        }

        // 设置样式和内容
        statusEl.textContent = message;
        statusEl.className = `save-status-${type}`;
        
        const colors = {
            success: { bg: '#d4edda', color: '#155724', border: '#c3e6cb' },
            error: { bg: '#f8d7da', color: '#721c24', border: '#f5c6cb' },
            info: { bg: '#d1ecf1', color: '#0c5460', border: '#bee5eb' }
        };
        
        const color = colors[type] || colors.info;
        statusEl.style.backgroundColor = color.bg;
        statusEl.style.color = color.color;
        statusEl.style.border = `1px solid ${color.border}`;
        statusEl.style.opacity = '1';

        // 3秒后淡出
        setTimeout(() => {
            statusEl.style.opacity = '0';
        }, 3000);
    }

    // 备用数据获取方法
    getCurrentDataFallback() {
        return {
            basic_info: document.getElementById('basicInfo')?.value || '',
            photo: document.querySelector('#photoPreview img')?.src || null,
            sections: sections || [],
            print_settings: {
                title_font_size: document.getElementById('titleFontSize')?.value || 22,
                content_font_size: document.getElementById('contentFontSize')?.value || 14,
                scaling: document.getElementById('scaling')?.value || 120,
                page_margin: document.getElementById('pageMargin')?.value || 6,
                line_height: document.getElementById('lineHeight')?.value || 0.9
            }
        };
    }

    // 备用数据应用方法
    applyDataFallback(data) {
        if (data.basic_info && document.getElementById('basicInfo')) {
            document.getElementById('basicInfo').value = data.basic_info;
        }
        
        if (data.sections && typeof renderSections === 'function') {
            sections = data.sections;
            renderSections();
        }
        
        if (typeof updatePreview === 'function') {
            updatePreview();
        }
    }

    // 清除自动保存数据
    clearAutoSave() {
        localStorage.removeItem(STORAGE_KEYS.AUTO_SAVE);
        this.showSaveStatus('已清除自动保存', 'info');
    }
}

// 多简历管理功能
class ResumeManager {
    constructor() {
        this.resumes = this.loadSavedResumes();
    }

    // 加载已保存的简历列表
    loadSavedResumes() {
        try {
            const saved = localStorage.getItem(STORAGE_KEYS.SAVED_RESUMES);
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.warn('加载简历列表失败:', error);
            return [];
        }
    }

    // 保存简历列表
    saveSavedResumes() {
        try {
            localStorage.setItem(STORAGE_KEYS.SAVED_RESUMES, JSON.stringify(this.resumes));
        } catch (error) {
            console.warn('保存简历列表失败:', error);
        }
    }

    // 保存当前简历
    saveCurrentResume(name) {
        if (!name || name.trim() === '') {
            alert('请输入简历名称');
            return false;
        }

        try {
            const currentData = typeof getCurrentSettings === 'function' 
                ? getCurrentSettings() 
                : {};
            
            const resume = {
                id: Date.now(),
                name: name.trim(),
                data: currentData,
                language: currentLang || 'zh-CN',
                timestamp: Date.now()
            };

            // 检查是否存在同名简历
            const existingIndex = this.resumes.findIndex(r => r.name === resume.name);
            if (existingIndex >= 0) {
                if (!confirm(`简历"${resume.name}"已存在，是否覆盖？`)) {
                    return false;
                }
                this.resumes[existingIndex] = resume;
            } else {
                this.resumes.push(resume);
            }

            this.saveSavedResumes();
            return true;

        } catch (error) {
            console.warn('保存简历失败:', error);
            return false;
        }
    }

    // 加载指定简历
    loadResume(id) {
        const resume = this.resumes.find(r => r.id === id);
        if (!resume) {
            alert('简历不存在');
            return false;
        }

        try {
            if (typeof applyData === 'function') {
                applyData(resume.data, resume.language);
            }
            
            // 切换语言
            if (resume.language !== currentLang && typeof setLanguage === 'function') {
                setLanguage(resume.language);
            }

            return true;

        } catch (error) {
            console.warn('加载简历失败:', error);
            return false;
        }
    }

    // 删除简历
    deleteResume(id) {
        const index = this.resumes.findIndex(r => r.id === id);
        if (index >= 0) {
            this.resumes.splice(index, 1);
            this.saveSavedResumes();
            return true;
        }
        return false;
    }

    // 获取简历列表
    getResumeList() {
        return this.resumes.map(r => ({
            id: r.id,
            name: r.name,
            language: r.language,
            timestamp: r.timestamp
        }));
    }
}

// 全局实例
let autoSaveManager = null;
let resumeManager = null;

// 初始化存储功能
function initializeStorage() {
    // 创建管理器实例
    autoSaveManager = new AutoSaveManager();
    resumeManager = new ResumeManager();

    // 页面加载时尝试恢复数据
    const restored = autoSaveManager.restoreData();

    // 监听输入变化，触发自动保存
    document.addEventListener('input', (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
            autoSaveManager.triggerSave();
        }
    });

    // 监听其他可能的变化
    document.addEventListener('change', (e) => {
        autoSaveManager.triggerSave();
    });

    // 添加控制按钮到界面（可选）
    addStorageControls();

    return restored;
}

// 添加存储控制按钮
function addStorageControls() {
    // 这个函数在下一步UI优化中实现
    // 现在只提供基础的存储功能
}

// 清理本地缓存的全局函数
function clearLocalCache() {
    // 获取当前语言的确认消息
    const confirmMessage = currentLang && i18nData.translations[currentLang] 
        ? i18nData.translations[currentLang].clearCacheConfirm 
        : '确定要清理所有本地缓存数据吗？这将删除自动保存的内容。';
    
    const successMessage = currentLang && i18nData.translations[currentLang] 
        ? i18nData.translations[currentLang].clearCacheSuccess 
        : '缓存已清理';

    if (confirm(confirmMessage)) {
        try {
            // 记录清理前的状态
            console.log('清理前的localStorage内容:', localStorage.length);
            
            // 清理所有相关的localStorage数据
            const keysToRemove = [];
            
            // 收集所有相关的键
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('ink_resume_')) {
                    keysToRemove.push(key);
                }
            }
            
            // 添加已知的键
            keysToRemove.push(STORAGE_KEYS.AUTO_SAVE);
            keysToRemove.push(STORAGE_KEYS.SAVED_RESUMES);
            keysToRemove.push(STORAGE_KEYS.SETTINGS);
            
            // 去重并删除
            const uniqueKeys = [...new Set(keysToRemove)];
            console.log('准备删除的键:', uniqueKeys);
            
            uniqueKeys.forEach(key => {
                localStorage.removeItem(key);
                console.log('已删除键:', key);
            });
            
            // 禁用自动保存管理器 - 永久禁用，防止立即重新保存
            if (autoSaveManager) {
                autoSaveManager.disable();
            }
            
            // 重置简历管理器
            if (resumeManager) {
                resumeManager.resumes = [];
            }
            
            // 清理表单内容，防止input事件重新触发保存
            const basicInfoTextarea = document.getElementById('basicInfo');
            if (basicInfoTextarea) {
                basicInfoTextarea.value = '';
            }
            
            // 清理照片
            const photoPreview = document.getElementById('photoPreview');
            if (photoPreview) {
                photoPreview.innerHTML = '<div class="photo-placeholder">点击上传照片</div>';
            }
            
            // 清理简历照片
            const resumePhoto = document.getElementById('resumePhoto');
            if (resumePhoto) {
                resumePhoto.style.display = 'none';
                resumePhoto.innerHTML = '';
            }
            
            // 清理所有动态sections
            if (typeof sections !== 'undefined') {
                sections.length = 0; // 清空sections数组
            }
            
            // 重新渲染sections
            if (typeof renderSections === 'function') {
                renderSections();
            }
            
            // 更新预览
            if (typeof updatePreview === 'function') {
                updatePreview();
            }
            
            // 验证清理结果
            const remainingKeys = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('ink_resume_')) {
                    remainingKeys.push(key);
                }
            }
            
            console.log('清理后剩余的相关键:', remainingKeys);
            console.log('清理后的localStorage内容:', localStorage.length);
            
            // 显示成功消息并自动刷新
            if (autoSaveManager) {
                autoSaveManager.showSaveStatus(successMessage, 'success');
                // 1.5秒后刷新页面
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            } else {
                alert(successMessage);
                // 刷新页面
                window.location.reload();
            }
            
        } catch (error) {
            console.warn('清理缓存失败:', error);
            alert('清理缓存失败: ' + error.message);
        }
    }
}

// 导出供外部使用的函数
window.AutoSaveManager = AutoSaveManager;
window.ResumeManager = ResumeManager;
window.initializeStorage = initializeStorage;
window.autoSaveManager = autoSaveManager;
window.resumeManager = resumeManager;
window.clearLocalCache = clearLocalCache;