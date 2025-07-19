[中文](./README.md) | [Multi-language Guide](./MULTILANG.md)
---
# A free resume generator. Build your resume online!
---
# Ink-Resume 

[![Language](https://img.shields.io/badge/language-HTML%2BCSS%2BJS-orange)](https://shields.io/)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
[![Deployment](https://img.shields.io/badge/deployment-GitHub%20Pages-brightgreen)](https://www.mycloudai.org/Ink-Resume/)

A concise and efficient online resume editor. It uses Markdown syntax, allowing you to create professional, beautiful, and print-friendly resumes with simple text markup. It supports real-time preview, multi-language switching, and rich custom printing options. Built with a template system architecture for easy maintenance and language expansion.

## ✨ Features

*   **Template System**: Built-in multiple professional templates (Classic, Modern, Elegant, etc.), switch with one click to instantly change the overall appearance of your resume. Templates affect fonts, colors, layouts, etc., and can be perfectly combined with custom styles.
*   **Real-time Preview**: Type on the left, and instantly see the rendered resume on the right.
*   **Markdown Support**: Use simple and intuitive Markdown syntax (e.g., `###` for headings, `-` for lists) to format your resume content.
*   **Focus Edit Mode**: Provides a dedicated focus edit mode for each text input area, supporting:
    *   Entering by clicking the "📝" button next to the textarea or by double-clicking the textarea.
    *   A full-screen immersive editing experience.
    *   Automatic content saving with status prompts.
    *   `Ctrl+S` for quick saving.
    *   `ESC` key to quickly exit edit mode.
    *   The edit mode title dynamically displays the name of the current section being edited.
*   **Rich Print Settings**: Before printing, you can freely adjust page margins, overall scaling, title/content font sizes, and line height to achieve the best A4 print layout.
*   **Multi-language Support**: Built-in support for 7 languages with UI and default templates, switchable with a single click.
    - 🇨🇳 Chinese (zh-CN) - `index.html`
    - 🇺🇸 English - `en.html`  
    - 🇯🇵 Japanese - `ja.html`
    - 🇰🇷 Korean - `ko.html`
    - 🇫🇷 French - `fr.html`
    - 🇩🇪 German - `de.html`
    - 🇪🇸 Spanish - `es.html`
*   **Data Import/Export**: Export your resume content to a `.yaml` file for backup, or restore from a file, making migration and version control easy. The latest version supports including language settings in the exported data, and will automatically switch to the corresponding language upon import.
*   **Auto-save & Cache Management**: Edited content is automatically saved to the browser's local cache, so data is not lost upon page refresh. A "Clear Cache" function is provided to clear all locally stored data.
*   **Drag & Drop Sorting**: Freely reorder sections like "Education" and "Work Experience" by dragging and dropping.
*   **Style Customization**: Supports font selection (SimSun, Arial, etc.) and divider color customization with perfect print font adaptation.
*   **Tab Key Support**: Pressing the `Tab` key in a text input area will automatically insert 4 spaces instead of changing focus, facilitating Markdown formatting.
*   **Technical Support Button & Issue Templates**: A "Technical Support" button is provided at the top of the page, linking directly to the GitHub Issues page with pre-set templates for Bug Reports, Feature Requests, etc., making it easy for users to submit issues and suggestions.
*   **Privacy Protection**: All content (including photos) is processed only in your local browser and is NOT uploaded to any server. Please feel safe to use.

## Resume sample
![en-sample](./sample/en.png)

## 💻 How to Use

### 🌐 Online Use (Recommended)

Access the online version directly: **https://www.mycloudai.org/Ink-Resume/**

- Chinese version: `index.html` (default)
- English version: `en.html`
- Japanese version: `ja.html`
- Korean version: `ko.html`
- French version: `fr.html`
- German version: `de.html`
- Spanish version: `es.html`

### 💽 Local Use

1. Download this project
2. Find the corresponding language HTML file in the directory:
   - `index.html` - Chinese version
   - `en.html` - English version
   - `ja.html` - Japanese version
   - `ko.html` - Korean version
   - `fr.html` - French version
   - `de.html` - German version
   - `es.html` - Spanish version
3. Simply open it with your browser (Chrome or Firefox recommended)

**No local server or dependencies required!**

### 🔧 Development and Build

If you want to modify templates or add new languages:

```bash
# Install Node.js dependencies (optional)
npm install

# After modifying template.html and i18n.js, rebuild
npm run build

# Or run directly
node build.js
```

## 🛠️ Tech Stack

*   **Core**: HTML, CSS, Vanilla JavaScript
*   **Build Tools**: Node.js (only for building multi-language versions)
*   **Deployment**: GitHub Actions + GitHub Pages
*   **Third-party Libraries**:
    *   [Marked.js](https://marked.js.org/): For parsing Markdown into HTML in real-time
    *   [js-yaml](https://github.com/nodeca/js-yaml): For handling `.yaml` data import and export

## 🌍 Multi-language Architecture

The project uses a template system to support multiple languages:

- `template.html` - Single HTML template
- `i18n.js` - Language configuration and translations
- `build.js` - Automated build script
- GitHub Actions for automated deployment

**Adding a new language takes only 3 steps**:
1. Add language configuration in `i18n.js`
2. Add corresponding translation content
3. Run `npm run build`

For detailed instructions, see: [Multi-language Guide](./MULTILANG.md)

## 📄 License

This project is licensed under the MIT License.
