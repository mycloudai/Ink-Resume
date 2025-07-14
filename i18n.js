// 多语言数据和逻辑
const i18nData = {
    translations: {
        'zh-CN': {
            pageTitle: '简历模板编辑器',
            printResume: '打印简历',
            exportData: '导出数据',
            importData: '导入数据',
            printSettings: '打印设置',
            pageMargin: '左右页边距 (mm)',
            scaling: '缩放 (%)',
            titleFontSize: '标题字体大小 (px)',
            contentFontSize: '内容字体大小 (px)',
            lineHeight: '行距',
            confirmPrint: '确认打印',
            cancel: '取消',
            basicInfo: '基本信息',
            personalPhoto: '个人照片',
            photoPlaceholder: '点击上传照片',
            basicInfoMarkdown: '基本信息 (支持Markdown)',
            basicInfoPlaceholder: '### 张三...',
            addSection: '+ 添加新部分',
            pageInfo: '页数',
            addSectionDialogTitle: '添加新部分',
            newSectionTitlePlaceholder: '输入部分标题',
            ok: '确定',
            delete: '删除',
            dragToSort: '拖动此处排序',
            // 提示信息
            switchLangConfirm: '切换语言将会使用新语言的默认模板覆盖当前内容，确定要切换吗？',
            enterSectionTitlePrompt: '请输入部分标题',
            confirmDeleteSection: '确定要删除这个部分吗？',
            exportError: '导出失败: ',
            exportSuccessFilename: '简历数据.yaml',
            importSuccess: '导入成功',
            importError: '导入失败，文件格式可能不正确。',
            privacyNotice: '重要提示：本页面所有内容（包括照片）仅在您的本地浏览器中处理，不会上传至任何服务器，请放心使用。请使用导入导出数据功能保存您的数据，所有数据可能会在刷新页面后丢失。'
        },
        'en-US': {
            pageTitle: 'Resume Template Editor',
            printResume: 'Print Resume',
            exportData: 'Export Data',
            importData: 'Import Data',
            printSettings: 'Print Settings',
            pageMargin: 'Page Margin (mm)',
            scaling: 'Scaling (%)',
            titleFontSize: 'Title Font Size (px)',
            contentFontSize: 'Content Font Size (px)',
            lineHeight: 'Line Height',
            confirmPrint: 'Confirm & Print',
            cancel: 'Cancel',
            basicInfo: 'Basic Information',
            personalPhoto: 'Personal Photo',
            photoPlaceholder: 'Click to upload photo',
            basicInfoMarkdown: 'Basic Information (Markdown Supported)',
            basicInfoPlaceholder: '### John Doe...',
            addSection: '+ Add New Section',
            pageInfo: 'Pages',
            addSectionDialogTitle: 'Add New Section',
            newSectionTitlePlaceholder: 'Enter section title',
            ok: 'OK',
            delete: 'Delete',
            dragToSort: 'Drag to sort',
            // Alerts and Prompts
            switchLangConfirm: 'Switching languages will overwrite current content with the new language\'s default template. Are you sure?',
            enterSectionTitlePrompt: 'Please enter a section title',
            confirmDeleteSection: 'Are you sure you want to delete this section?',
            exportError: 'Export failed: ',
            exportSuccessFilename: 'Resume_Data.yaml',
            importSuccess: 'Import successful',
            importError: 'Import failed. The file format might be incorrect.',
            privacyNotice: 'Important Notice: All content on this page (including photos) is processed locally in your browser and will NOT be uploaded to any server. Feel free to use it. Pls use "Export/Import" feature to save your data in time, all the data may lose after refreshing this page.'
        }
    },
    defaultContent: {
        'zh-CN': {
            basic_info: `### 张三\n**电话：** 138-0000-0000  \n**邮箱：** zhangsan@email.com  \n**地址：** 北京市朝阳区  \n**GitHub：** https://github.com/zhangsan`,
            sections: [
                { id: 'self-evaluation', title: '自我评价', content: '- 具有5年DevOps经验，熟悉云原生技术栈\n- 精通Docker、Kubernetes等容器技术\n- 擅长CI/CD流程设计和优化\n- 具备良好的问题分析和解决能力' },
                { id: 'education', title: '教育背景', content: '### 北京大学 | 计算机科学与技术 | 本科 | 2015-2019\n- 主修课程：数据结构、算法、操作系统、计算机网络\n- GPA: 3.8/4.0\n- 获得优秀毕业生称号' },
                { id: 'work-experience', title: '工作经历', content: '### 阿里巴巴 | DevOps工程师 | 2019.07 - 至今\n- 负责公司CI/CD流程的设计和优化，提升发布效率50%\n- 维护Kubernetes集群，保障服务稳定运行，可用性达99.9%\n- 使用Terraform进行基础设施即代码管理\n- 搭建监控告警系统，及时发现和处理系统异常' },
                { id: 'project-experience', title: '项目经历', content: '### 微服务容器化项目 | 技术负责人 | 2023.01 - 2023.08\n- 将传统单体应用拆分为微服务架构\n- 使用Docker容器化部署，提升资源利用率30%\n- 技术栈：Kubernetes, Docker, Jenkins, GitLab CI\n- 项目成果：缩短发布周期从2周到1天' },
                { id: 'skills-certificates', title: '证书及技能', content: '### 技能\n- **容器技术：** Docker, Kubernetes, Helm\n- **CI/CD：** Jenkins, GitLab CI, GitHub Actions\n- **云平台：** AWS, Azure, 阿里云\n\n### 证书\n- AWS Certified DevOps Engineer – Professional\n- Certified Kubernetes Administrator (CKA)' }
            ],
        },
        'en-US': {
            basic_info: `### John Doe\n**Phone:** 138-0000-0000  \n**Email:** john.doe@email.com  \n**Location:** New York, NY  \n**GitHub:** https://github.com/johndoe`,
            sections: [
                { id: 'summary', title: 'Summary', content: '- 5 years of experience in DevOps, proficient in cloud-native technology stack\n- Expert in container technologies like Docker and Kubernetes\n- Skilled in CI/CD pipeline design and optimization\n- Strong problem analysis and solving abilities' },
                { id: 'education', title: 'Education', content: '### Stanford University | Computer Science | B.S. | 2015-2019\n- Major Courses: Data Structures, Algorithms, Operating Systems, Computer Networks\n- GPA: 3.8/4.0\n- Awarded title of Outstanding Graduate' },
                { id: 'work-experience', title: 'Work Experience', content: '### Google | DevOps Engineer | 2019.07 - Present\n- Designed and optimized CI/CD processes, improving release efficiency by 50%\n- Maintained Kubernetes clusters, ensuring service stability with 99.9% uptime\n- Managed infrastructure as code using Terraform\n- Built monitoring and alerting systems to promptly detect and handle system anomalies' },
                { id: 'project-experience', title: 'Project Experience', content: '### Microservice Containerization Project | Tech Lead | 2023.01 - 2023.08\n- Refactored a monolithic application into a microservices architecture\n- Deployed using Docker containers, increasing resource utilization by 30%\n- Tech Stack: Kubernetes, Docker, Jenkins, GitLab CI\n- Achievement: Reduced release cycle from 2 weeks to 1 day' },
                { id: 'skills-certificates', title: 'Skills & Certificates', content: '### Skills\n- **Container Tech:** Docker, Kubernetes, Helm\n- **CI/CD:** Jenkins, GitLab CI, GitHub Actions\n- **Cloud Platforms:** AWS, Azure, Google Cloud\n\n### Certificates\n- AWS Certified DevOps Engineer – Professional\n- Certified Kubernetes Administrator (CKA)' }
            ],
        }
    },
    defaultSettings: {
        title_font_size: 20,
        content_font_size: 13,
        scaling: 110,
        page_margin: 6,
        line_height: 0.9
    }
};

let currentLang = 'zh-CN'; // 默认语言

function setLanguage(lang, isInitialLoad = false) {
    if (!i18nData.translations[lang]) return;

    // 如果不是首次加载，且切换了语言，则提示用户
    if (!isInitialLoad && lang !== currentLang) {
        if (!confirm(i18nData.translations[lang].switchLangConfirm)) {
            return; // 用户取消
        }
    }
    
    currentLang = lang;
    document.documentElement.lang = lang;

    // 更新所有静态UI文本
    document.querySelectorAll('[data-i18n-key]').forEach(el => {
        const key = el.getAttribute('data-i18n-key');
        const translation = i18nData.translations[lang][key];
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // 更新语言切换按钮的激活状态
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // 如果不是首次加载，或首次加载时，加载默认数据
    if (!isInitialLoad) {
         loadDefaultData(lang);
    }
}

function loadDefaultData(lang) {
    const dataToLoad = {
        basic_info: i18nData.defaultContent[lang].basic_info,
        photo: null,
        sections: i18nData.defaultContent[lang].sections,
        print_settings: i18nData.defaultSettings
    };
    applyData(dataToLoad, lang);
}