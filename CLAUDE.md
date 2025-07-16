# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ink-Resume is a multilingual resume template editor built with vanilla HTML, CSS, and JavaScript. It's a client-side application that allows users to create professional resumes using Markdown syntax with real-time preview and multiple language support.

## Key Development Commands

### Building the Project
```bash
npm run build
# or
node build.js
```

### Development
```bash
npm run dev
# Builds and shows info about generated files
```

### Testing
Open any generated HTML file (index.html, en.html, etc.) directly in a browser - no server required.

## Architecture

### Multi-language Build System
- **Template-based**: Single `template.html` generates all language versions
- **Build Process**: `build.js` reads `i18n.js` and `template.html` to generate language-specific HTML files
- **Language Configuration**: All translations and metadata in `i18n.js`
- **Generated Files**: Each language gets its own HTML file (index.html for Chinese, en.html for English, etc.)

### Core Components
- **`template.html`**: Single HTML template with `{{PLACEHOLDER}}` tokens
- **`i18n.js`**: Contains all language configurations, translations, and default content
- **`build.js`**: Build script that processes template and generates language-specific files
- **`main.js`**: Core application logic for resume editing
- **`print.js`**: Print functionality and page management
- **`styles-custom.js`**: Style customization features
- **`styles.css`**: Main stylesheet

### Key Features
- **Client-side only**: No server required, works offline
- **Real-time preview**: Markdown input with live HTML preview
- **Print optimization**: Custom print settings and page break handling
- **Data persistence**: Import/export functionality using YAML format
- **Drag & drop**: Section reordering capability
- **Photo upload**: Client-side image handling

## Adding New Languages

1. Add language configuration to `i18nData.languages` in `i18n.js`
2. Add translations to `i18nData.staticTexts` and `i18nData.translations`
3. Add default content to `i18nData.defaultContent`
4. Run `npm run build` to generate new HTML file

## File Structure
- Generated HTML files are built from template, not edited directly
- All customization happens in `i18n.js` and `template.html`
- JavaScript modules are loaded via script tags in the template
- Uses CDN for external dependencies (marked.js, js-yaml)

## Key Technical Details
- Uses `marked.js` for Markdown parsing
- Uses `js-yaml` for data import/export
- CSS uses `@media print` for print-specific styles
- Page counting and indicators handled by JavaScript
- All data processing is client-side for privacy