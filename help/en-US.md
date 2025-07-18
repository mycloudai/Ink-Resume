# Ink Resume User Guide

## Introduction
Ink Resume is a Markdown-based online resume editor that supports real-time preview, multi-language switching, and professional print output.

## Main Features

### 1. Language Switching
- Supports 7 languages: Chinese, English, Japanese, Korean, French, German, Spanish
- Click the language buttons at the top to switch
- Automatically loads corresponding language templates after switching

### 2. Basic Information Editing
#### Personal Photo
- Click the photo area to upload a personal photo
- Supports common image formats (JPG, PNG, etc.)
- Photos are automatically resized in the preview

#### Basic Information
- Edit personal information using Markdown syntax
- Supports headings, bold text, links, and other formats
- Example format:
  ```markdown
  ### John Doe
  **Phone:** +1-555-0000  
  **Email:** john.doe@example.com  
  **Address:** New York, NY
  ```

### 3. Resume Section Management
#### Adding New Sections
- Click the "+ Add New Section" button
- Enter section title (e.g., "Work Experience", "Education")
- Each section supports Markdown editing

#### Editing Section Content
**Normal Editing Mode:**
- Type directly in the text box
- Supports Tab key indentation (4 spaces)

**Focus Editing Mode:**
- Click the 📝 button in the top-right corner of the text box
- Or double-click the text box to enter focus editing
- Large editor panel slides in from the left
- Supports auto-save (1-second delay)
- Press ESC or click "Exit Focus Edit" to exit

#### Section Reordering
- Click the ↕ button next to the section title
- Drag to the target position to reorder

#### Deleting Sections
- Click the "Delete" button in the top-right corner of the section
- Confirm to delete the section

### 4. Markdown Syntax Support
Supports full Markdown syntax:

#### Headings
```markdown
# Level 1 Heading
## Level 2 Heading
### Level 3 Heading
```

#### Text Formatting
```markdown
**Bold text**
*Italic text*
```

#### Lists
```markdown
- Unordered list item 1
- Unordered list item 2
  - Sub-list item
  - Sub-list item

1. Ordered list item 1
2. Ordered list item 2
```

#### Links
```markdown
[Link text](https://example.com)
```

### 5. Style Customization
#### Font Selection
- Default font: Microsoft YaHei + Arial
- SimSun: Suitable for formal documents
- Times New Roman: Classic English font
- Arial: Modern sans-serif font

#### Divider Color
- Use color picker to customize divider color
- Real-time color preview
- Default is golden yellow (#b8860b)

#### Reset Styles
- Click "Reset Styles" to restore all defaults

### 6. Print Settings
Click the "👇Print Resume👆" button on the right to enter print settings:

#### Page Settings
- **Left/Right Margins**: Adjustable 1-25mm
- **Overall Scaling**: Adjustable 50%-150%
- Recommended 120% scaling for best results

#### Font Settings
- **Title Font Size**: Adjustable 12-28px
- **Content Font Size**: Adjustable 8-20px
- **Line Height**: Adjustable 0.2-1.5

#### Print Notice
When printing, in the system print dialog:
- Select "Save as PDF"
- Uncheck "Headers and footers" in "More settings"

### 7. Data Management
#### Export Data
- Click "Export Data" button
- Downloads YAML format data file
- Contains all resume content and settings

#### Import Data
- Click "Import Data" button
- Select previously exported YAML file
- Automatically restores all content and settings

#### Clear Cache
- Click "Clear Cache" button
- Clears locally stored browser data
- Use with caution: will clear all non-exported content

### 8. Real-time Preview
- Right preview area displays resume in real-time
- Automatically calculates and displays page count
- Preview matches print output

## Usage Tips

### 1. Content Organization Suggestions
- **Basic Info**: Name, contact information, professional summary
- **Work Experience**: Reverse chronological order, highlight key achievements
- **Education**: Degrees, majors, relevant coursework
- **Project Experience**: Important project descriptions and tech stacks
- **Skills**: Professional skills, languages, certifications

### 2. Markdown Format Suggestions
```markdown
## Work Experience

### Senior Software Engineer | ABC Company | 2020.01 - Present
- Responsible for core product architecture design and development
- Led a team of 5 to deliver important projects
- Tech stack: React, Node.js, MongoDB

### Software Engineer | XYZ Company | 2018.06 - 2019.12
- Participated in development and maintenance of multiple web applications
- Optimized system performance, improved response speed by 30%
```

### 3. Multi-space Alignment
Use multiple spaces for alignment where needed:
```markdown
**Name:**     John Doe
**Phone:**    +1-555-0000
**Email:**    john.doe@example.com
```

### 4. Data Backup Recommendations
- Export data regularly for backup
- Export current version before important changes
- Maintain multiple versions of resume files

## Keyboard Shortcuts

- **Tab**: Insert 4-space indentation in text boxes
- **Ctrl+S**: Manual save in focus editing mode
- **ESC**: Exit focus editing mode

## Privacy Protection

- All data is processed locally in the browser only
- No personal information is uploaded to servers
- Can be used completely offline

## Frequently Asked Questions

### Q: How to create a multi-page resume?
A: Content automatically paginated, page count shown in top-right. Recommend keeping within 2 pages.

### Q: Why does print output differ from preview?
A: Check print settings, ensure using recommended scaling and margins.

### Q: How to save the resume?
A: Use "Export Data" to save YAML file, use "Import Data" to restore next time.

### Q: What image formats are supported?
A: Supports JPG, PNG, GIF and other common formats. JPG format recommended.

### Q: How to share resume with others?
A: Recommend exporting as PDF for sharing, or export data file for others to import.

## Technical Support

For issues, please visit the [GitHub project page](https://github.com/mycloudai/Ink-Resume) to submit an Issue.