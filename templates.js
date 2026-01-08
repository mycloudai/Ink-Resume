// 简历模板系统
const ResumeTemplates = {
    // 模板元数据
    templates: {
        'classic': {
            id: 'classic',
            name: {
                'zh-CN': '经典模板',
                'en-US': 'Classic Template',
                'ja-JP': 'クラシックテンプレート',
                'ko-KR': '클래식 템플릿',
                'fr-FR': 'Modèle Classique',
                'de-DE': 'Klassische Vorlage',
                'es-ES': 'Plantilla Clásica'
            },
            description: {
                'zh-CN': '传统简洁风格，适合大多数职业',
                'en-US': 'Traditional clean style, suitable for most professions',
                'ja-JP': 'シンプルで伝統的なスタイル',
                'ko-KR': '전통적이고 간결한 스타일',
                'fr-FR': 'Style traditionnel et propre',
                'de-DE': 'Traditioneller, sauberer Stil',
                'es-ES': 'Estilo tradicional y limpio'
            },
            preview: 'templates/previews/classic.png',
            styles: {
                fontFamily: "'Microsoft YaHei', Arial, sans-serif",
                dividerColor: '#b8860b',
                titleFontSize: '22px',
                contentFontSize: '14px',
                lineHeight: '1.5',
                sectionSpacing: '20px',
                headerStyle: 'simple'
            }
        },
        'modern': {
            id: 'modern',
            name: {
                'zh-CN': '现代模板',
                'en-US': 'Modern Template',
                'ja-JP': 'モダンテンプレート',
                'ko-KR': '모던 템플릿',
                'fr-FR': 'Modèle Moderne',
                'de-DE': 'Moderne Vorlage',
                'es-ES': 'Plantilla Moderna'
            },
            description: {
                'zh-CN': '现代简约设计，适合科技行业',
                'en-US': 'Modern minimalist design, suitable for tech industry',
                'ja-JP': 'モダンでミニマルなデザイン',
                'ko-KR': '현대적이고 미니멀한 디자인',
                'fr-FR': 'Design moderne et minimaliste',
                'de-DE': 'Modernes, minimalistisches Design',
                'es-ES': 'Diseño moderno y minimalista'
            },
            preview: 'templates/previews/modern.png',
            styles: {
                fontFamily: "'Microsoft YaHei', Arial, sans-serif",
                dividerColor: '#2196F3',
                titleFontSize: '24px',
                contentFontSize: '14px',
                lineHeight: '1.6',
                sectionSpacing: '25px',
                headerStyle: 'modern',
                accentColor: '#2196F3'
            }
        },
        'elegant': {
            id: 'elegant',
            name: {
                'zh-CN': '优雅模板',
                'en-US': 'Elegant Template',
                'ja-JP': 'エレガントテンプレート',
                'ko-KR': '우아한 템플릿',
                'fr-FR': 'Modèle Élégant',
                'de-DE': 'Elegante Vorlage',
                'es-ES': 'Plantilla Elegante'
            },
            description: {
                'zh-CN': '优雅精致设计，适合创意行业',
                'en-US': 'Elegant refined design, suitable for creative industry',
                'ja-JP': 'エレガントで洗練されたデザイン',
                'ko-KR': '우아하고 세련된 디자인',
                'fr-FR': 'Design élégant et raffiné',
                'de-DE': 'Elegantes, raffiniertes Design',
                'es-ES': 'Diseño elegante y refinado'
            },
            preview: 'templates/previews/elegant.png',
            styles: {
                fontFamily: "'Microsoft YaHei', Arial, sans-serif",
                dividerColor: '#8e44ad',
                titleFontSize: '20px',
                contentFontSize: '13px',
                lineHeight: '1.7',
                sectionSpacing: '18px',
                headerStyle: 'elegant',
                accentColor: '#8e44ad'
            }
        },
        'minimal': {
            id: 'minimal',
            name: {
                'zh-CN': '极简模板',
                'en-US': 'Minimal Template',
                'ja-JP': 'ミニマルテンプレート',
                'ko-KR': '미니멀 템플릿',
                'fr-FR': 'Modèle Minimal',
                'de-DE': 'Minimale Vorlage',
                'es-ES': 'Plantilla Minimal'
            },
            description: {
                'zh-CN': '极简主义设计，突出内容',
                'en-US': 'Minimalist design, content-focused',
                'ja-JP': 'ミニマルデザイン、コンテンツ重視',
                'ko-KR': '미니멀리스트 디자인, 콘텐츠 중심',
                'fr-FR': 'Design minimaliste, axé sur le contenu',
                'de-DE': 'Minimalistisches Design, inhaltsfokussiert',
                'es-ES': 'Diseño minimalista, enfocado en contenido'
            },
            preview: 'templates/previews/minimal.png',
            styles: {
                fontFamily: "'Microsoft YaHei', Arial, sans-serif",
                dividerColor: '#333333',
                titleFontSize: '18px',
                contentFontSize: '12px',
                lineHeight: '1.4',
                sectionSpacing: '15px',
                headerStyle: 'minimal'
            }
        },
        'professional': {
            id: 'professional',
            name: {
                'zh-CN': '专业模板',
                'en-US': 'Professional Template',
                'ja-JP': 'プロフェッショナルテンプレート',
                'ko-KR': '전문가 템플릿',
                'fr-FR': 'Modèle Professionnel',
                'de-DE': 'Professionelle Vorlage',
                'es-ES': 'Plantilla Profesional'
            },
            description: {
                'zh-CN': '专业商务风格，适合管理岗位',
                'en-US': 'Professional business style, suitable for management positions',
                'ja-JP': 'プロフェッショナルなビジネススタイル',
                'ko-KR': '전문적인 비즈니스 스타일',
                'fr-FR': 'Style professionnel et business',
                'de-DE': 'Professioneller Business-Stil',
                'es-ES': 'Estilo profesional de negocios'
            },
            preview: 'templates/previews/professional.png',
            styles: {
                fontFamily: "'Microsoft YaHei', Arial, sans-serif",
                dividerColor: '#1f4e79',
                titleFontSize: '21px',
                contentFontSize: '13px',
                lineHeight: '1.5',
                sectionSpacing: '22px',
                headerStyle: 'professional',
                accentColor: '#1f4e79'
            }
        }
    },

    // 当前选中的模板
    currentTemplate: 'classic',

    // 初始化模板系统
    init() {
        this.createTemplateSelector();
        const bodyHasTemplate = document.body.className.includes('template-');
        if (!bodyHasTemplate) {
            this.loadTemplate(this.currentTemplate);
        }
    },

    // 创建模板选择器界面
    createTemplateSelector() {
        // 创建模板选择按钮
        const templateButton = document.createElement('div');
        templateButton.className = 'section template-section';
        templateButton.id = 'templateSelection';
        
        templateButton.innerHTML = `
            <div class="section-header">
                <h3 data-i18n-key="templateSelection">模板选择</h3>
            </div>
            <div class="section-content">
                <button onclick="ResumeTemplates.showTemplatePanel()" class="btn btn-purple" style="width: 100%;" data-i18n-key="chooseTemplate">
                    选择模板
                </button>
                <div class="current-template-info" id="currentTemplateInfo">
                    <small data-i18n-key="currentTemplate">当前模板：</small>
                    <span id="currentTemplateName">${this.templates[this.currentTemplate]?.name[currentLang] || 'Classic'}</span>
                </div>
            </div>
        `;

        // 插入到风格自定义面板之前
        const styleCustomization = document.getElementById('styleCustomization');
        styleCustomization.parentNode.insertBefore(templateButton, styleCustomization);
        
        // 创建左侧弹出面板
        this.createTemplatePanel();
    },

    // 创建模板面板
    createTemplatePanel() {
        const panel = document.createElement('div');
        panel.id = 'templatePanel';
        panel.className = 'template-panel';
        panel.style.display = 'none';
        
        panel.innerHTML = `
            <div class="template-panel-header">
                <h3 data-i18n-key="templateSelection">模板选择</h3>
                <button onclick="ResumeTemplates.hideTemplatePanel()" class="btn btn-dark template-close-btn">✕</button>
            </div>
            <div class="template-panel-content">
                <div class="template-grid" id="templateGrid">
                    ${this.generateTemplateOptions()}
                </div>
            </div>
        `;
        
        document.body.appendChild(panel);
        
        // 创建背景遮罩
        const overlay = document.createElement('div');
        overlay.id = 'templatePanelOverlay';
        overlay.className = 'template-panel-overlay';
        overlay.style.display = 'none';
        overlay.onclick = () => this.hideTemplatePanel();
        document.body.appendChild(overlay);
        
        // 绑定点击事件
        this.bindTemplateEvents();
    },

    // 生成模板选项HTML
    generateTemplateOptions() {
        return Object.values(this.templates).map(template => {
            const isActive = template.id === this.currentTemplate;
            const name = template.name[currentLang] || template.name['en-US'];
            const description = template.description[currentLang] || template.description['en-US'];
            
            return `
                <div class="template-option ${isActive ? 'active' : ''}" 
                     data-template-id="${template.id}"
                     title="${description}">
                    <div class="template-preview">
                        <div class="template-preview-content">
                            <div class="preview-header" style="font-family: ${template.styles.fontFamily}">
                                <h4 style="color: ${template.styles.dividerColor || template.styles.accentColor || '#333'}">
                                    ${name}
                                </h4>
                            </div>
                            <div class="preview-section" style="border-color: ${template.styles.dividerColor || template.styles.accentColor || '#333'}">
                                <div class="preview-line"></div>
                                <div class="preview-line short"></div>
                            </div>
                        </div>
                    </div>
                    <div class="template-info">
                        <h4>${name}</h4>
                        <p>${description}</p>
                    </div>
                </div>
            `;
        }).join('');
    },

    // 绑定模板选择事件
    bindTemplateEvents() {
        document.getElementById('templateGrid').addEventListener('click', (e) => {
            const templateOption = e.target.closest('.template-option');
            if (templateOption) {
                const templateId = templateOption.dataset.templateId;
                this.selectTemplate(templateId);
            }
        });
    },

    // 显示模板面板
    showTemplatePanel() {
        const panel = document.getElementById('templatePanel');
        const overlay = document.getElementById('templatePanelOverlay');
        
        if (panel && overlay) {
            overlay.style.display = 'block';
            panel.style.display = 'block';
            
            // 使用 requestAnimationFrame 确保动画正常执行
            requestAnimationFrame(() => {
                panel.style.transform = 'translateX(0)';
            });
        }
    },

    // 隐藏模板面板
    hideTemplatePanel() {
        const panel = document.getElementById('templatePanel');
        const overlay = document.getElementById('templatePanelOverlay');
        
        if (panel && overlay) {
            panel.style.transform = 'translateX(-100%)';
            
            // 等待动画完成后隐藏元素
            setTimeout(() => {
                overlay.style.display = 'none';
                panel.style.display = 'none';
            }, 300);
        }
    },

    // 选择模板
    selectTemplate(templateId) {
        if (!this.templates[templateId]) return;
        
        this.currentTemplate = templateId;
        this.loadTemplate(templateId);
        this.updateTemplateUI();
        
        // 更新当前模板显示
        this.updateCurrentTemplateDisplay();
        
        // 自动关闭面板
        this.hideTemplatePanel();
    },

    // 加载模板样式
    loadTemplate(templateId) {
        const template = this.templates[templateId];
        if (!template) return;

        const styles = template.styles;
        
        // 应用模板样式到CSS变量
        const root = document.documentElement;
        root.style.setProperty('--template-font-family', styles.fontFamily);
        root.style.setProperty('--template-divider-color', styles.dividerColor);
        root.style.setProperty('--live-title-font-size', styles.titleFontSize);
        root.style.setProperty('--live-content-font-size', styles.contentFontSize);
        root.style.setProperty('--template-line-height', styles.lineHeight);
        root.style.setProperty('--template-section-spacing', styles.sectionSpacing);
        
        if (styles.accentColor) {
            root.style.setProperty('--template-accent-color', styles.accentColor);
        }
        
        if (styles.secondaryColor) {
            root.style.setProperty('--template-secondary-color', styles.secondaryColor);
        }

        // 应用特殊样式
        this.applyTemplateSpecificStyles(templateId, styles);
        
        // 更新表单控件值
        this.updateStyleControls(styles);
        
        // 重新应用自定义样式（如果存在）
        if (typeof applyCustomStyles === 'function') {
            applyCustomStyles();
        }
        
        // 触发预览更新
        if (typeof updatePreview === 'function') {
            updatePreview();
        }
    },

    // 应用模板特定样式
    applyTemplateSpecificStyles(templateId, styles) {
        // 移除之前的模板样式类
        document.body.classList.remove(...Object.keys(this.templates).map(id => `template-${id}`));
        
        // 添加当前模板样式类
        document.body.classList.add(`template-${templateId}`);
        
        // 应用header样式
        const resumePreview = document.getElementById('resumePreview');
        if (resumePreview) {
            resumePreview.classList.remove('header-simple', 'header-modern', 'header-elegant', 'header-minimal', 'header-professional');
            if (styles.headerStyle) {
                resumePreview.classList.add(`header-${styles.headerStyle}`);
            }
        }
    },

    // 更新样式控制器
    updateStyleControls(styles) {
        // 更新字体选择器
        const fontSelector = document.getElementById('fontSelector');
        if (fontSelector) {
            // 如果是预定义字体，选中对应选项
            // 使用共享的字体映射常量
            const fontOptions = window.FONT_OPTIONS_MAP || {
                "'Microsoft YaHei', Arial, sans-serif": 0,
                "'SimSun', serif": 1,
                "'Times New Roman', serif": 2,
                "'Arial', sans-serif": 3
            };

            const optionIndex = fontOptions[styles.fontFamily];
            if (optionIndex !== undefined) {
                fontSelector.selectedIndex = optionIndex;
            }
        }

        // 更新颜色选择器
        const colorPicker = document.getElementById('dividerColorPicker');
        const colorValue = document.getElementById('dividerColorValue');
        if (colorPicker && styles.dividerColor) {
            colorPicker.value = styles.dividerColor;
            if (colorValue) {
                colorValue.textContent = styles.dividerColor;
            }
            
            // 同时更新自定义样式系统
            if (typeof updateCustomStylesFromTemplate === 'function') {
                updateCustomStylesFromTemplate(styles.fontFamily, styles.dividerColor);
            }
        }

        // 更新打印设置
        const titleFontSize = document.getElementById('titleFontSize');
        const contentFontSize = document.getElementById('contentFontSize');
        
        if (titleFontSize && styles.titleFontSize) {
            titleFontSize.value = parseInt(styles.titleFontSize);
        }
        
        if (contentFontSize && styles.contentFontSize) {
            contentFontSize.value = parseInt(styles.contentFontSize);
        }
    },

    // 更新模板选择UI
    updateTemplateUI() {
        document.querySelectorAll('.template-option').forEach(option => {
            option.classList.toggle('active', option.dataset.templateId === this.currentTemplate);
        });
    },

    // 更新当前模板显示
    updateCurrentTemplateDisplay() {
        const currentTemplateName = document.getElementById('currentTemplateName');
        if (currentTemplateName) {
            const template = this.templates[this.currentTemplate];
            const name = template?.name[currentLang] || template?.name['en-US'] || 'Classic';
            currentTemplateName.textContent = name;
        }
    },

    // 获取当前模板数据
    getCurrentTemplateData() {
        return {
            templateId: this.currentTemplate,
            templateName: this.templates[this.currentTemplate]?.name[currentLang] || 'Classic'
        };
    },

    // 从数据中恢复模板
    restoreFromData(data) {
        if (data && data.templateId && this.templates[data.templateId]) {
            this.selectTemplate(data.templateId);
        } else {
            // 如果没有模板信息或模板不存在，默认使用classic
            this.selectTemplate('classic');
        }
    },

    // 更新国际化文本
    updateI18n() {
        const templateGrid = document.getElementById('templateGrid');
        if (templateGrid) {
            templateGrid.innerHTML = this.generateTemplateOptions();
            this.bindTemplateEvents();
        }
        
        // 更新当前模板显示
        this.updateCurrentTemplateDisplay();
    }
};

// 暴露到全局
window.ResumeTemplates = ResumeTemplates;