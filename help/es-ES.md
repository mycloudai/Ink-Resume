# Guía de usuario de Ink Resume

## Introducción
Ink Resume es un editor de currículum en línea basado en Markdown que admite vista previa en tiempo real, cambio de idioma múltiple y salida de impresión profesional.

## Características principales

### 1. Cambio de idioma
- Admite 7 idiomas: chino, inglés, japonés, coreano, francés, alemán, español
- Haga clic en los botones de idioma en la parte superior para cambiar
- Carga automáticamente las plantillas de idioma correspondientes después del cambio

### 2. Edición de información básica
#### Foto personal
- Haga clic en el área de foto para subir una foto personal
- Admite formatos de imagen comunes (JPG, PNG, etc.)
- Las fotos se redimensionan automáticamente en la vista previa

#### Información básica
- Edite información personal usando sintaxis Markdown
- Admite encabezados, texto en negrita, enlaces y otros formatos
- Ejemplo de formato:
  ```markdown
  ### Juan Pérez
  **Teléfono:** +34-91-123-45-67  
  **Email:** juan.perez@example.com  
  **Dirección:** Madrid, España
  ```

### 3. Gestión de secciones del currículum
#### Agregar nuevas secciones
- Haga clic en el botón "+ Agregar nueva sección"
- Ingrese el título de la sección (ej. "Experiencia laboral", "Educación")
- Cada sección admite edición Markdown

#### Edición del contenido de secciones
**Modo de edición normal:**
- Escriba directamente en el cuadro de texto
- Admite sangría con tecla Tab (4 espacios)

**Modo de edición enfocada:**
- Haga clic en el botón 📝 en la esquina superior derecha del cuadro de texto
- O haga doble clic en el cuadro de texto para entrar a la edición enfocada
- Panel de edición grande se desliza desde la izquierda
- Admite guardado automático (retraso de 1 segundo)
- Presione ESC o haga clic en "Salir de edición enfocada" para salir

#### Reordenamiento de secciones
- Haga clic en el botón ↕ junto al título de la sección
- Arrastre a la posición objetivo para reordenar

#### Eliminación de secciones
- Haga clic en el botón "Eliminar" en la esquina superior derecha de la sección
- Confirme para eliminar esa sección

### 4. Soporte de sintaxis Markdown
Admite sintaxis Markdown completa:

#### Encabezados
```markdown
# Encabezado nivel 1
## Encabezado nivel 2
### Encabezado nivel 3
```

#### Formato de texto
```markdown
**Texto en negrita**
*Texto en cursiva*
```

#### Listas
```markdown
- Elemento de lista no ordenada 1
- Elemento de lista no ordenada 2
  - Sub-elemento de lista
  - Sub-elemento de lista

1. Elemento de lista ordenada 1
2. Elemento de lista ordenada 2
```

#### Enlaces
```markdown
[Texto del enlace](https://example.com)
```

### 5. Personalización de estilo
#### Selección de fuente
- Fuente predeterminada: Microsoft YaHei + Arial
- SimSun: Adecuada para documentos oficiales
- Times New Roman: Fuente inglesa clásica
- Arial: Fuente moderna sin serifa

#### Color del separador
- Use el selector de color para personalizar el color del separador
- Vista previa de color en tiempo real
- Predeterminado es amarillo dorado (#b8860b)

#### Restablecer estilos
- Haga clic en "Restablecer estilos" para restaurar todos los valores predeterminados

### 6. Configuración de impresión
Haga clic en el botón "👇Imprimir currículum👆" a la derecha para entrar a la configuración de impresión:

#### Configuración de página
- **Márgenes izquierdo/derecho**: Ajustable 1-25mm
- **Escalado general**: Ajustable 50%-150%
- Se recomienda escalado del 120% para mejores resultados

#### Configuración de fuente
- **Tamaño de fuente del título**: Ajustable 12-28px
- **Tamaño de fuente del contenido**: Ajustable 8-20px
- **Altura de línea**: Ajustable 0.2-1.5

#### Aviso de impresión
Al imprimir, en el diálogo de impresión del sistema:
- Seleccione "Guardar como PDF"
- Desmarque "Encabezados y pies de página" en "Más configuraciones"

### 7. Gestión de datos
#### Exportar datos
- Haga clic en el botón "Exportar datos"
- Descarga archivo de datos en formato YAML
- Contiene todo el contenido del currículum y configuraciones

#### Importar datos
- Haga clic en el botón "Importar datos"
- Seleccione el archivo YAML exportado previamente
- Restaura automáticamente todo el contenido y configuraciones

#### Limpiar caché
- Haga clic en el botón "Limpiar caché"
- Borra datos almacenados localmente en el navegador
- Use con precaución: borrará todo el contenido no exportado

### 8. Vista previa en tiempo real
- El área de vista previa derecha muestra el currículum en tiempo real
- Calcula automáticamente y muestra el número de páginas
- La vista previa coincide con la salida de impresión

## Consejos de uso

### 1. Sugerencias de organización de contenido
- **Información básica**: Nombre, información de contacto, resumen profesional
- **Experiencia laboral**: Orden cronológico inverso, destacar logros clave
- **Educación**: Títulos, especialidades, cursos relevantes
- **Experiencia en proyectos**: Descripciones de proyectos importantes y stacks tecnológicos
- **Habilidades**: Habilidades profesionales, idiomas, certificaciones

### 2. Sugerencias de formato Markdown
```markdown
## Experiencia laboral

### Ingeniero de software senior | Empresa ABC | 2020.01 - Presente
- Responsable del diseño de arquitectura y desarrollo de productos centrales
- Dirigió un equipo de 5 personas para entregar proyectos importantes
- Stack tecnológico: React, Node.js, MongoDB

### Ingeniero de software | Empresa XYZ | 2018.06 - 2019.12
- Participó en el desarrollo y mantenimiento de múltiples aplicaciones web
- Optimizó el rendimiento del sistema, mejoró la velocidad de respuesta en un 30%
```

### 3. Alineación con múltiples espacios
Use múltiples espacios para alineación donde sea necesario:
```markdown
**Nombre:**    Juan Pérez
**Teléfono:**  +34-91-123-45-67
**Email:**     juan.perez@example.com
```

### 4. Recomendaciones de respaldo de datos
- Exporte datos regularmente para respaldo
- Exporte la versión actual antes de cambios importantes
- Mantenga múltiples versiones de archivos de currículum

## Atajos de teclado

- **Tab**: Insertar sangría de 4 espacios en cuadros de texto
- **Ctrl+S**: Guardado manual en modo de edición enfocada
- **ESC**: Salir del modo de edición enfocada

## Protección de privacidad

- Todos los datos se procesan localmente solo en el navegador
- No se sube información personal a servidores
- Se puede usar completamente sin conexión

## Preguntas frecuentes

### P: ¿Cómo crear un currículum de múltiples páginas?
R: El contenido se pagina automáticamente, el número de páginas se muestra en la esquina superior derecha. Se recomienda mantenerlo dentro de 2 páginas.

### P: ¿Por qué la salida de impresión difiere de la vista previa?
R: Verifique la configuración de impresión, asegúrese de usar el escalado y márgenes recomendados.

### P: ¿Cómo guardar el currículum?
R: Use "Exportar datos" para guardar archivo YAML, use "Importar datos" para restaurar la próxima vez.

### P: ¿Qué formatos de imagen se admiten?
R: Admite JPG, PNG, GIF y otros formatos comunes. Se recomienda formato JPG.

### P: ¿Cómo compartir el currículum con otros?
R: Se recomienda exportar como PDF para compartir, o exportar archivo de datos para que otros importen.

## Soporte técnico

Para problemas, visite la [página del proyecto GitHub](https://github.com/mycloudai/Ink-Resume) para enviar un Issue.