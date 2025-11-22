<div align="center">

# 📱 PROYECTOTAREA3
## Formulario de Registro Moderno

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

<p>
  <img src="https://img.shields.io/badge/Status-Completed-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Version-1.0-blue?style=flat-square" alt="Version">
  <img src="https://img.shields.io/badge/License-Educational-orange?style=flat-square" alt="License">
</p>

### 🎨 Formulario web interactivo con validación en tiempo real
### ✨ Diseño glassmorphism y animaciones Canvas

[📸 Ver Demo](#-capturas-del-proyecto) • [📖 Documentación](./DOCUMENTACION_PROYECTOTAREA3.md) • [🚀 Instalación](#-instalación-y-uso)

---

</div>

## 📋 Descripción

> **Proyecto web profesional** que implementa un formulario de registro con tecnologías modernas y diseño premium.

Formulario de registro interactivo desarrollado con tecnologías web puras (HTML, CSS, JavaScript) que incluye validación en tiempo real, efectos visuales modernos con glassmorphism y una animación de fondo dinámica creada con Canvas API.

### ✨ Características Principales

<table>
<tr>
<td width="50%">

#### 🎯 Funcionalidades
- ✅ Validación en tiempo real
- ✅ Feedback visual inmediato  
- ✅ Checklist de contraseña
- ✅ Animación de fondo interactiva
- ✅ Efectos glassmorphism
- ✅ Transiciones suaves

</td>
<td width="50%">

#### 🎨 Diseño
- 🎨 Glassmorphism moderno
- 🌈 Gradientes personalizados
- ✨ Floating labels
- 🔵 Efectos de glow
- 🎭 Animación shake en errores
- 📱 Responsive design

</td>
</tr>
</table>

---

## 🛡️ Validación de Campos

<div align="center">

| Campo | Regla de Validación | Estado Visual |
|:---:|:---|:---:|
| 📧 **Email** | Formato válido (regex) | 🟢 / 🔴 |
| 🔒 **Contraseña** | • 5+ caracteres<br>• 1 Mayúscula<br>• 1 Minúscula<br>• 1 Número | ✅ Checklist |
| 👤 **Usuario** | Mínimo 3 caracteres | 🟢 / 🔴 |
| 📝 **Nombre** | Campo obligatorio | 🟢 / 🔴 |

</div>

### 🎨 Feedback Visual

```
🟢 Verde    → Campo válido
🔴 Naranja  → Campo inválido  
🔵 Azul     → Focus activo
✅ Check    → Requisito cumplido
❌ Error    → Mensaje de error
```

---

## 📁 Estructura del Proyecto

```
PROYECTOTAREA3/
├── assets/                             # Imágenes y recursos
│   ├── screenshot.jpg                  # Captura del formulario
│   ├── demo.gif                        # GIF animado de demostración
│   └── FOTOHUB.jpg                     # Imagen original
├── index.html                          # Estructura HTML
├── style.css                           # Estilos (418 líneas)
├── script.js                           # Validación + Canvas (281 líneas)
├── README.md                           # Este archivo
├── DOCUMENTACION_PROYECTOTAREA3.md     # Documentación técnica completa
└── .gitignore                          # Archivos ignorados por Git
```

---

## 💻 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Glassmorphism, gradientes, animaciones
- **JavaScript ES6+**: Validación y Canvas API

### Librerías Externas
- **Google Fonts**: Outfit + Inter
- **Font Awesome 6.4**: Iconos

### Técnicas Avanzadas
- Canvas API para animaciones
- CSS Variables (Custom Properties)
- Event Listeners
- Real-time validation
- DOM Manipulation

---

## 🎨 Paleta de Colores

```css
Azul Principal:    #4F73D0
Azul Oscuro:       #1E2A47
Fondo:             #0f172a / #050510
Verde Éxito:       #4CCD8A
Naranja Error:     #FF8C6C
```

---

## 🚀 Instalación y Uso

### Clonar el Repositorio

```bash
git clone https://github.com/webdaniel-1997/PROYECTOTAREA3.git
cd PROYECTOTAREA3
```

### Ejecutar Localmente

**Opción 1**: Abrir directamente
```bash
# Abre index.html en tu navegador
start index.html
```

**Opción 2**: Con Live Server (VS Code)
1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

**Opción 3**: Con Python
```bash
python -m http.server 8000
# Abre http://localhost:8000
```

---

## 📸 CAPTURAS DEL PROYECTO

### 🖼️ Vista del Formulario

![Formulario de Registro](./assets/screenshot.jpg)

*Interfaz del formulario con diseño glassmorphism, fondo animado con partículas triangulares y campos con floating labels.*

---

### 🎬 Demostración Interactiva

<p align="center">
  <img src="./assets/demo.gif" width="100%" alt="Demo del Formulario">
</p>

*GIF mostrando la validación en tiempo real, efectos visuales (glow, shake), animación de fondo interactiva con el mouse y envío de solicitud con feedback de éxito.*

---

## 📖 Documentación Completa

Para entender en detalle cómo funciona el código:

📄 **[DOCUMENTACION_PROYECTOTAREA3.md](./DOCUMENTACION_PROYECTOTAREA3.md)**

Incluye:
- Análisis completo del código HTML, CSS y JavaScript
- Explicación de cada función paso a paso
- Algoritmo de triangulación del canvas
- Conceptos de glassmorphism aplicados
- Tablas de validaciones detalladas

---

## 🎓 Conceptos Aplicados

### HTML
- Estructura semántica moderna
- Floating labels pattern
- Inputs con validación HTML5

### CSS
- **Flexbox**: Layout centrado
- **Glassmorphism**: Efecto vidrio con backdrop-filter
- **Gradient Borders**: Usando pseudo-elementos
- **Transitions**: Animaciones suaves
- **CSS Variables**: Paleta centralizada
- **@keyframes**: Animaciones personalizadas

### JavaScript
- **DOM Manipulation**: getElementById, querySelector
- **Event Listeners**: input, click, mousemove
- **Regex Validation**: Email pattern
- **Canvas API**: Animación de partículas
- **Algoritmo de triangulación**: Triple bucle optimizado
- **Interacción mouse**: Cálculo de distancias y fuerzas

---

## 📊 Rendimiento

- **Tamaño total**: ~23.5 KB (sin CDN)
- **FPS del canvas**: 60 FPS constantes
- **Tiempo de carga**: < 1 segundo
- **Partículas activas**: 55
- **Complejidad triangulación**: O(n³)

---

## 🔧 Mejoras Futuras

- [ ] Integración con backend (Node.js, PHP)
- [ ] LocalStorage para persistencia
- [ ] reCAPTCHA para seguridad
- [ ] Confirmación de contraseña
- [ ] Modo oscuro/claro toggle
- [ ] Animaciones de entrada (fade-in)
- [ ] Barra de progreso del formulario
- [ ] Indicador de fuerza de contraseña
- [ ] Tooltips informativos
- [ ] Soporte multi-idioma

---

## 📱 Responsive Design

El diseño se adapta a diferentes tamaños de pantalla:

- ✅ Desktop (> 768px)
- ✅ Tablet (768px - 480px)
- ✅ Mobile (< 480px)

---

## 👤 Autor

**Daniel Garcia Ortega**
- **DNI**: 76667976Y
- **Curso**: 1º DAW - Lenguaje de Marcas
- **Usuario GitHub**: [@webdaniel-1997](https://github.com/webdaniel-1997)
- **Fecha**: Noviembre 2025

---

## 📄 Licencia

Este proyecto es de uso educativo para el curso de Desarrollo de Aplicaciones Web.

---

<div align="center">

**Desarrollado con 💙 para el curso de DAW**

⭐ Si este proyecto te fue útil, ¡dale una estrella!

</div>
