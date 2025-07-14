// 多语言数据和逻辑
const i18nData = {
    // 语言配置元数据
    languages: {
        'zh-CN': {
            name: '中文',
            filename: 'index.html',
            isDefault: true
        },
        'en-US': {
            name: 'English',
            filename: 'en.html',
            isDefault: false
        },
        'ja-JP': {
            name: '日本語',
            filename: 'ja.html',
            isDefault: false
        },
        'ko-KR': {
            name: '한국어',
            filename: 'ko.html',
            isDefault: false
        },
        'fr-FR': {
            name: 'Français',
            filename: 'fr.html',
            isDefault: false
        },
        'de-DE': {
            name: 'Deutsch',
            filename: 'de.html',
            isDefault: false
        },
        'es-ES': {
            name: 'Español',
            filename: 'es.html',
            isDefault: false
        }
    },
    
    // 静态文本翻译
    staticTexts: {
        'zh-CN': {
            pagesText: '页数',
            photoUpload: '照片上传',
            selectPhoto: '选择照片',
            removePhoto: '移除照片',
            education: '教育经历',
            experience: '工作经历',
            projects: '项目经验',
            skills: '技能特长'
        },
        'en-US': {
            pagesText: 'Pages',
            photoUpload: 'Photo Upload',
            selectPhoto: 'Select Photo',
            removePhoto: 'Remove Photo',
            education: 'Education',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills'
        },
        'ja-JP': {
            pagesText: 'ページ',
            photoUpload: '写真アップロード',
            selectPhoto: '写真を選択',
            removePhoto: '写真を削除',
            education: '学歴',
            experience: '職歴',
            projects: 'プロジェクト',
            skills: 'スキル'
        },
        'ko-KR': {
            pagesText: '페이지',
            photoUpload: '사진 업로드',
            selectPhoto: '사진 선택',
            removePhoto: '사진 제거',
            education: '학력',
            experience: '경력',
            projects: '프로젝트',
            skills: '기술'
        },
        'fr-FR': {
            pagesText: 'Pages',
            photoUpload: 'Télécharger une photo',
            selectPhoto: 'Sélectionner une photo',
            removePhoto: 'Supprimer la photo',
            education: 'Formation',
            experience: 'Expérience',
            projects: 'Projets',
            skills: 'Compétences'
        },
        'de-DE': {
            pagesText: 'Seiten',
            photoUpload: 'Foto hochladen',
            selectPhoto: 'Foto auswählen',
            removePhoto: 'Foto entfernen',
            education: 'Bildung',
            experience: 'Erfahrung',
            projects: 'Projekte',
            skills: 'Fähigkeiten'
        },
        'es-ES': {
            pagesText: 'Páginas',
            photoUpload: 'Subir foto',
            selectPhoto: 'Seleccionar foto',
            removePhoto: 'Eliminar foto',
            education: 'Educación',
            experience: 'Experiencia',
            projects: 'Proyectos',
            skills: 'Habilidades'
        }
    },
    
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
            privacyNotice: '重要提示：本页面所有内容（包括照片）仅在您的本地浏览器中处理，不会上传至任何服务器，请放心使用。请使用导入导出数据功能保存您的数据，所有数据可能会在刷新页面或者切换语言后丢失。',
            // 风格自定义相关
            styleCustomization: '风格自定义',
            fontFamily: '字体选择',
            dividerColor: '分割线颜色',
            resetStyles: '恢复默认样式',
            fontDefault: '默认字体',
            fontSimSun: '宋体',
            fontTimes: 'Times New Roman',
            fontArial: 'Arial'
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
            privacyNotice: 'Important Notice: All content on this page (including photos) is processed only in your local browser and is NOT uploaded to any server. Please feel safe to use. Use the import/export function to save your data, as all data may be lost upon page refresh or language switching.',            // Style customization related
            styleCustomization: 'Style Customization',
            fontFamily: 'Font Family',
            dividerColor: 'Divider Color',
            resetStyles: 'Reset to Default',
            fontDefault: 'Default Font',
            fontSimSun: 'SimSun',
            fontTimes: 'Times New Roman',
            fontArial: 'Arial'
        },
        'ja-JP': {
            pageTitle: '履歴書テンプレートエディタ',
            printResume: '履歴書を印刷',
            exportData: 'データエクスポート',
            importData: 'データインポート',
            printSettings: '印刷設定',
            pageMargin: '左右余白 (mm)',
            scaling: '拡大率 (%)',
            titleFontSize: 'タイトルフォントサイズ (px)',
            contentFontSize: 'コンテンツフォントサイズ (px)',
            lineHeight: '行間',
            confirmPrint: '印刷実行',
            cancel: 'キャンセル',
            basicInfo: '基本情報',
            personalPhoto: '個人写真',
            photoPlaceholder: 'クリックして写真をアップロード',
            basicInfoMarkdown: '基本情報 (Markdown対応)',
            basicInfoPlaceholder: '### 田中太郎...',
            addSection: '+ セクションを追加',
            pageInfo: 'ページ',
            addSectionDialogTitle: '新しいセクションを追加',
            newSectionTitlePlaceholder: 'セクションのタイトルを入力',
            ok: 'OK',
            delete: '削除',
            dragToSort: 'ドラッグして並び替え',
            switchLangConfirm: '言語を切り替えると、現在の内容が新しい言語のデフォルトテンプレートで上書きされます。続行しますか？',
            enterSectionTitlePrompt: 'セクションのタイトルを入力してください',
            confirmDeleteSection: 'このセクションを削除してもよろしいですか？',
            exportError: 'エクスポートに失敗しました: ',
            exportSuccessFilename: '履歴書データ.yaml',
            importSuccess: 'インポートが完了しました',
            importError: 'インポートに失敗しました。ファイル形式が正しくない可能性があります。',
            privacyNotice: '重要なお知らせ：このページのすべての内容（写真を含む）はお使いのローカルブラウザでのみ処理され、サーバーには一切アップロードされません。安心してご利用ください。データを保存するにはインポート・エクスポート機能をご利用ください。ページを更新したり言語を切り替えたりすると、すべてのデータが失われる可能性があります。',
            styleCustomization: 'スタイルのカスタマイズ',
            fontFamily: 'フォント選択',
            dividerColor: '区切り線の色',
            resetStyles: 'デフォルトスタイルに戻す',
            fontDefault: 'デフォルトフォント',
            fontSimSun: 'SimSun',
            fontTimes: 'Times New Roman',
            fontArial: 'Arial'
        },
        'ko-KR': {
            pageTitle: '이력서 템플릿 에디터',
            printResume: '이력서 인쇄',
            exportData: '데이터 내보내기',
            importData: '데이터 가져오기',
            printSettings: '인쇄 설정',
            pageMargin: '좌우 여백 (mm)',
            scaling: '확대/축소 (%)',
            titleFontSize: '제목 글꼴 크기 (px)',
            contentFontSize: '내용 글꼴 크기 (px)',
            lineHeight: '줄 간격',
            confirmPrint: '인쇄 실행',
            cancel: '취소',
            basicInfo: '기본 정보',
            personalPhoto: '개인 사진',
            photoPlaceholder: '클릭하여 사진 업로드',
            basicInfoMarkdown: '기본 정보 (마크다운 지원)',
            basicInfoPlaceholder: '### 김철수...',
            addSection: '+ 섹션 추가',
            pageInfo: '페이지',
            addSectionDialogTitle: '새 섹션 추가',
            newSectionTitlePlaceholder: '섹션 제목 입력',
            ok: '확인',
            delete: '삭제',
            dragToSort: '드래그하여 정렬',
            switchLangConfirm: '언어를 변경하면 현재 내용이 새 언어의 기본 템플릿으로 덮어쓰여집니다. 계속하시겠습니까?',
            enterSectionTitlePrompt: '섹션 제목을 입력하세요',
            confirmDeleteSection: '이 섹션을 삭제하시겠습니까?',
            exportError: '내보내기 실패: ',
            exportSuccessFilename: '이력서_데이터.yaml',
            importSuccess: '가져오기 완료',
            importError: '가져오기 실패. 파일 형식이 올바르지 않을 수 있습니다.',
            privacyNotice: '중요 공지: 이 페이지의 모든 내용(사진 포함)은 사용자의 로컬 브라우저에서만 처리되며, 서버로 업로드되지 않습니다. 안심하고 사용하셔도 됩니다. 데이터를 저장하려면 내보내기/가져오기 기능을 사용하세요. 페이지를 새로 고치거나 언어를 변경하면 모든 데이터가 사라질 수 있습니다.',
            styleCustomization: '스타일 커스터마이징',
            fontFamily: '글꼴 선택',
            dividerColor: '구분선 색상',
            resetStyles: '기본 스타일로 재설정',
            fontDefault: '기본 글꼴',
            fontSimSun: 'SimSun',
            fontTimes: 'Times New Roman',
            fontArial: 'Arial'
        },
        'fr-FR': {
            pageTitle: 'Éditeur de CV',
            printResume: 'Imprimer CV',
            exportData: 'Exporter',
            importData: 'Importer',
            printSettings: 'Paramètres d\'impression',
            pageMargin: 'Marge (mm)',
            scaling: 'Échelle (%)',
            titleFontSize: 'Taille titre (px)',
            contentFontSize: 'Taille contenu (px)',
            lineHeight: 'Hauteur ligne',
            confirmPrint: 'Imprimer',
            cancel: 'Annuler',
            basicInfo: 'Infos de base',
            personalPhoto: 'Photo',
            photoPlaceholder: 'Cliquez pour photo',
            basicInfoMarkdown: 'Infos de base (Markdown)',
            basicInfoPlaceholder: '### Jean Dupont...',
            addSection: '+ Ajouter section',
            pageInfo: 'Pages',
            addSectionDialogTitle: 'Nouvelle section',
            newSectionTitlePlaceholder: 'Titre de section',
            ok: 'OK',
            delete: 'Supprimer',
            dragToSort: 'Glisser pour trier',
            switchLangConfirm: 'Changer de langue remplacera le contenu. Continuer?',
            enterSectionTitlePrompt: 'Entrez un titre',
            confirmDeleteSection: 'Supprimer cette section?',
            exportError: 'Erreur export: ',
            exportSuccessFilename: 'CV_Données.yaml',
            importSuccess: 'Import réussi',
            importError: 'Erreur import',
            privacyNotice: 'Avis important : Tout le contenu de cette page (y compris les photos) est traité uniquement dans votre navigateur local et n’est jamais envoyé à un serveur. Vous pouvez l’utiliser en toute confiance. Veuillez utiliser les fonctions d’import/export pour sauvegarder vos données. Toutes les données peuvent être perdues après un rafraîchissement ou un changement de langue.',
            styleCustomization: 'Style',
            fontFamily: 'Police',
            dividerColor: 'Couleur séparateur',
            resetStyles: 'Réinitialiser',
            fontDefault: 'Police par défaut',
            fontSimSun: 'SimSun',
            fontTimes: 'Times New Roman',
            fontArial: 'Arial'
        },
        'de-DE': {
            pageTitle: 'Lebenslauf Editor',
            printResume: 'CV drucken',
            exportData: 'Exportieren',
            importData: 'Importieren',
            printSettings: 'Druckeinstellungen',
            pageMargin: 'Rand (mm)',
            scaling: 'Skalierung (%)',
            titleFontSize: 'Titel-Größe (px)',
            contentFontSize: 'Text-Größe (px)',
            lineHeight: 'Zeilenhöhe',
            confirmPrint: 'Drucken',
            cancel: 'Abbrechen',
            basicInfo: 'Grunddaten',
            personalPhoto: 'Foto',
            photoPlaceholder: 'Foto hochladen',
            basicInfoMarkdown: 'Grunddaten (Markdown)',
            basicInfoPlaceholder: '### Max Mustermann...',
            addSection: '+ Abschnitt',
            pageInfo: 'Seiten',
            addSectionDialogTitle: 'Neuer Abschnitt',
            newSectionTitlePlaceholder: 'Abschnittstitel',
            ok: 'OK',
            delete: 'Löschen',
            dragToSort: 'Ziehen zum Sortieren',
            switchLangConfirm: 'Sprache wechseln überschreibt Inhalt. Fortfahren?',
            enterSectionTitlePrompt: 'Titel eingeben',
            confirmDeleteSection: 'Abschnitt löschen?',
            exportError: 'Export Fehler: ',
            exportSuccessFilename: 'CV_Daten.yaml',
            importSuccess: 'Import erfolgreich',
            importError: 'Import Fehler',
            privacyNotice: 'Wichtiger Hinweis: Alle Inhalte dieser Seite (einschließlich Fotos) werden ausschließlich lokal in Ihrem Browser verarbeitet und NICHT an einen Server gesendet. Sie können die Seite bedenkenlos verwenden. Bitte nutzen Sie die Export-/Importfunktion, um Ihre Daten zu speichern. Beim Aktualisieren der Seite oder Wechseln der Sprache können alle Daten verloren gehen.',
            styleCustomization: 'Stil',
            fontFamily: 'Schriftart',
            dividerColor: 'Trennlinie-Farbe',
            resetStyles: 'Zurücksetzen',
            fontDefault: 'Standard-Schrift',
            fontSimSun: 'SimSun',
            fontTimes: 'Times New Roman',
            fontArial: 'Arial'
        },
        'es-ES': {
            pageTitle: 'Editor de CV',
            printResume: 'Imprimir CV',
            exportData: 'Exportar',
            importData: 'Importar',
            printSettings: 'Configuración impresión',
            pageMargin: 'Margen (mm)',
            scaling: 'Escala (%)',
            titleFontSize: 'Tamaño título (px)',
            contentFontSize: 'Tamaño contenido (px)',
            lineHeight: 'Altura línea',
            confirmPrint: 'Imprimir',
            cancel: 'Cancelar',
            basicInfo: 'Info básica',
            personalPhoto: 'Foto',
            photoPlaceholder: 'Click para foto',
            basicInfoMarkdown: 'Info básica (Markdown)',
            basicInfoPlaceholder: '### Juan Pérez...',
            addSection: '+ Agregar sección',
            pageInfo: 'Páginas',
            addSectionDialogTitle: 'Nueva sección',
            newSectionTitlePlaceholder: 'Título sección',
            ok: 'OK',
            delete: 'Eliminar',
            dragToSort: 'Arrastrar para ordenar',
            switchLangConfirm: 'Cambiar idioma sobrescribirá contenido. ¿Continuar?',
            enterSectionTitlePrompt: 'Ingrese título',
            confirmDeleteSection: '¿Eliminar esta sección?',
            exportError: 'Error exportación: ',
            exportSuccessFilename: 'CV_Datos.yaml',
            importSuccess: 'Importación exitosa',
            importError: 'Error importación',
            privacyNotice: 'Aviso importante: Todo el contenido de esta página (incluidas las fotos) se procesa únicamente en su navegador local y NO se sube a ningún servidor. Puede usarlo con confianza. Utilice la función de importación/exportación para guardar sus datos. Todos los datos pueden perderse al actualizar la página o cambiar de idioma.',
            styleCustomization: 'Estilo',
            fontFamily: 'Fuente',
            dividerColor: 'Color divisor',
            resetStyles: 'Restablecer',
            fontDefault: 'Fuente por defecto',
            fontSimSun: 'SimSun',
            fontTimes: 'Times New Roman',
            fontArial: 'Arial'
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
        },
        'ja-JP': {
            basic_info: `### 田中太郎\n**電話：** 03-0000-0000  \n**メール：** tanaka@email.com  \n**所在地：** 東京都渋谷区  \n**GitHub：** https://github.com/tanaka`,
            sections: [
                { id: 'summary', title: '自己PR', content: '- DevOpsエンジニアとして5年の経験、クラウドネイティブ技術スタックに精通\n- DockerやKubernetesなどのコンテナ技術のエキスパート\n- CI/CDパイプラインの設計と最適化に長けている\n- 優れた問題分析・解決能力を有する' },
                { id: 'education', title: '学歴', content: '### 東京大学 | 情報工学科 | 学士 | 2015-2019\n- 主要科目：データ構造、アルゴリズム、オペレーティングシステム、コンピュータネットワーク\n- GPA: 3.8/4.0\n- 優秀卒業生として表彰' },
                { id: 'work-experience', title: '職歴', content: '### ソフトバンク | DevOpsエンジニア | 2019.07 - 現在\n- CI/CDプロセスの設計・最適化により、リリース効率を50%向上\n- Kubernetesクラスターの運用管理、サービス稼働率99.9%を維持\n- Terraformを用いたInfrastructure as Codeの管理\n- 監視・アラートシステムの構築により、システム異常の迅速な検知・対応を実現' },
                { id: 'project-experience', title: 'プロジェクト経験', content: '### マイクロサービスコンテナ化プロジェクト | テックリード | 2023.01 - 2023.08\n- モノリシックアプリケーションをマイクロサービスアーキテクチャに分割\n- Dockerコンテナによるデプロイメント、リソース使用率30%向上\n- 技術スタック：Kubernetes, Docker, Jenkins, GitLab CI\n- 成果：リリースサイクルを2週間から1日に短縮' },
                { id: 'skills-certificates', title: 'スキル・資格', content: '### スキル\n- **コンテナ技術：** Docker, Kubernetes, Helm\n- **CI/CD：** Jenkins, GitLab CI, GitHub Actions\n- **クラウドプラットフォーム：** AWS, Azure, Google Cloud\n\n### 資格\n- AWS認定DevOpsエンジニア - プロフェッショナル\n- 認定Kubernetesアドミニストレータ (CKA)' }
            ],
        },
        'ko-KR': {
            basic_info: `### 김철수\n**전화:** 010-0000-0000  \n**이메일:** kim@email.com  \n**주소:** 서울특별시 강남구  \n**GitHub:** https://github.com/kimchulsoo`,
            sections: [
                { id: 'summary', title: '자기소개', content: '- 5년간 DevOps 엔지니어 경력, 클라우드 네이티브 기술 스택에 능숙\n- Docker, Kubernetes 등 컨테이너 기술 전문\n- CI/CD 파이프라인 설계 및 최적화에 능함\n- 문제 분석 및 해결 능력 탁월' },
                { id: 'education', title: '학력', content: '### 서울대학교 | 컴퓨터공학과 | 학사 | 2015–2019\n- 주요 과목: 자료구조, 알고리즘, 운영체제, 컴퓨터 네트워크\n- GPA: 3.8/4.0\n- 우수 졸업생 수상' },
                { id: 'work-experience', title: '경력사항', content: '### 삼성SDS | DevOps 엔지니어 | 2019.07 - 현재\n- CI/CD 프로세스 설계 및 최적화, 배포 효율 50% 향상\n- Kubernetes 클러스터 운영 관리, 99.9% 가용성 유지\n- Terraform 기반 인프라 코드 관리\n- 모니터링 및 알림 시스템 구축으로 장애 조기 감지' },
                { id: 'project-experience', title: '프로젝트 경험', content: '### 마이크로서비스 컨테이너화 프로젝트 | 기술 리더 | 2023.01 - 2023.08\n- 모놀리식 앱을 마이크로서비스 아키텍처로 전환\n- Docker 기반 배포로 자원 활용도 30% 향상\n- 기술 스택: Kubernetes, Docker, Jenkins, GitLab CI\n- 결과: 배포 주기 2주 → 1일로 단축' },
                { id: 'skills-certificates', title: '기술 및 자격증', content: '### 기술\n- **컨테이너 기술:** Docker, Kubernetes, Helm\n- **CI/CD:** Jenkins, GitLab CI, GitHub Actions\n- **클라우드 플랫폼:** AWS, Azure, Google Cloud\n\n### 자격증\n- AWS 공인 DevOps Engineer – Professional\n- CKA (Certified Kubernetes Administrator)' }
            ]
        },
        'fr-FR': {
            basic_info: `### Jean Dupont\n**Téléphone :** 06 00 00 00 00  \n**Email :** jean.dupont@email.com  \n**Adresse :** Paris, France  \n**GitHub :** https://github.com/jeandupont`,
            sections: [
                { id: 'resume-summary', title: 'Résumé', content: '- 5 ans d’expérience en DevOps, maîtrise du cloud-native\n- Expert en conteneurs Docker, Kubernetes\n- Conception et optimisation de CI/CD\n- Forte capacité d’analyse et de résolution de problèmes' },
                { id: 'education', title: 'Formation', content: '### École Polytechnique | Informatique | Licence | 2015–2019\n- Cours principaux : Structures de données, Algorithmes, OS, Réseaux\n- Mention Bien\n- Diplômé d’honneur' },
                { id: 'work-experience', title: 'Expérience Professionnelle', content: '### Capgemini | Ingénieur DevOps | 2019.07 - Présent\n- Conception et optimisation de pipelines CI/CD (+50 % de rapidité)\n- Gestion de clusters Kubernetes (disponibilité 99,9 %)\n- Infrastructure as Code avec Terraform\n- Mise en place de monitoring et alerting' },
                { id: 'project-experience', title: 'Projets', content: '### Projet Microservices & Conteneurs | Tech Lead | 2023.01 - 2023.08\n- Refactorisation d’une application monolithe en microservices\n- Déploiement Docker, +30 % d’utilisation des ressources\n- Stack : Kubernetes, Docker, Jenkins, GitLab CI\n- Résultat : cycle de livraison réduit de 2 semaines à 1 jour' },
                { id: 'skills-certificates', title: 'Compétences & Certifications', content: '### Compétences\n- **Conteneurs :** Docker, Kubernetes, Helm\n- **CI/CD :** Jenkins, GitLab CI, GitHub Actions\n- **Cloud :** AWS, Azure, Google Cloud\n\n### Certifications\n- AWS Certified DevOps Engineer – Professional\n- Certified Kubernetes Administrator (CKA)' }
            ]
        },
        'de-DE': {
            basic_info: `### Max Mustermann\n**Telefon:** 0123 456789  \n**E‑Mail:** max.mustermann@email.de  \n**Adresse:** Berlin, Deutschland  \n**GitHub:** https://github.com/maxmustermann`,
            sections: [
                { id: 'resume-summary', title: 'Zusammenfassung', content: '- 5 Jahre Erfahrung als DevOps‑Ingenieur, cloud‑native Technologien\n- Experte für Docker und Kubernetes\n- CI/CD‑Pipelines designen und optimieren\n- Starke Analyse‑ und Problemlösungsfähigkeiten' },
                { id: 'education', title: 'Ausbildung', content: '### Technische Universität Berlin | Informatik | B.Sc. | 2015–2019\n- Kernfächer: Datenstrukturen, Algorithmen, Betriebssysteme, Netzwerke\n- Note : 1,5\n- Abschluss mit Auszeichnung' },
                { id: 'work-experience', title: 'Berufserfahrung', content: '### Siemens | DevOps‑Ingenieur | 2019.07 – Heute\n- Design und Optimierung von CI/CD Pipelines (+50 % Effizienz)\n- Verwaltung von Kubernetes‑Clustern (Verfügbarkeit 99,9 %)\n- Infrastructure as Code mit Terraform\n- Aufbau von Monitoring und Alerting‑Systemen' },
                { id: 'project-experience', title: 'Projekte', content: '### Microservices‑Containerisierung | Tech Lead | 2023.01 – 2023.08\n- Monolithische App in Microservices umgewandelt\n- Docker‑Deployment, +30 % Ressourcenauslastung\n- Stack: Kubernetes, Docker, Jenkins, GitLab CI\n- Ergebnis: Release‑Zyklus von 2 Wochen auf 1 Tag reduziert' },
                { id: 'skills-certificates', title: 'Fähigkeiten & Zertifikate', content: '### Fähigkeiten\n- **Container:** Docker, Kubernetes, Helm\n- **CI/CD:** Jenkins, GitLab CI, GitHub Actions\n- **Cloud:** AWS, Azure, Google Cloud\n\n### Zertifikate\n- AWS Certified DevOps Engineer – Professional\n- Certified Kubernetes Administrator (CKA)' }
            ]
        },
        'es-ES': {
            basic_info: `### Juan Pérez\n**Teléfono:** 600 00 00 00  \n**Correo:** juan.perez@email.com  \n**Ubicación:** Madrid, España  \n**GitHub:** https://github.com/juanperez`,
            sections: [
                { id: 'resume-summary', title: 'Resumen', content: '- 5 años como ingeniero DevOps, con stack cloud‑native\n- Experto en Docker y Kubernetes\n- Diseño y optimización de CI/CD\n- Alta capacidad de análisis y resolución de problemas' },
                { id: 'education', title: 'Formación', content: '### Universidad Politécnica de Madrid | Informática | Grado | 2015–2019\n- Asignaturas clave: Estructuras de datos, Algoritmos, Sistemas Operativos, Redes\n- Nota media: 8,5/10\n- Graduado con honores' },
                { id: 'work-experience', title: 'Experiencia Laboral', content: '### Telefónica | Ingeniero DevOps | 2019.07 – Presente\n- Diseñé y optimicé pipelines CI/CD (+50 % eficiencia)\n- Mantuve clústeres Kubernetes con 99,9 % de uptime\n- Infrastructure as Code con Terraform\n- Implementé monitoreo y alertas' },
                { id: 'project-experience', title: 'Proyectos', content: '### Proyecto de Microservicios y Contenedores | Tech Lead | 2023.01 – 2023.08\n- Migración de monolito a microservicios\n- Despliegue Docker, +30 % uso de recursos\n- Stack: Kubernetes, Docker, Jenkins, GitLab CI\n- Resultado: ciclo de entrega de 2 semanas a 1 día' },
                { id: 'skills-certificates', title: 'Habilidades y Certificaciones', content: '### Habilidades\n- **Contenedores:** Docker, Kubernetes, Helm\n- **CI/CD:** Jenkins, GitLab CI, GitHub Actions\n- **Cloud:** AWS, Azure, Google Cloud\n\n### Certificaciones\n- AWS Certified DevOps Engineer – Professional\n- Certified Kubernetes Administrator (CKA)' }
            ]
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

    // 如果不是首次加载，加载默认数据
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