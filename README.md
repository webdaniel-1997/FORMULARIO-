# PROYECTOTAREA3
## Formulario de Registro con Validación en Tiempo Real

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

---

## ¿Qué es esto?

Un formulario de registro que valida los datos mientras escribes. Lo hice para practicar JavaScript y diseño moderno, y la verdad es que me quedó bastante chulo con el efecto de glassmorphism y el fondo animado con partículas.

**Por qué lo hice:** Proyecto de clase para la asignatura de Lenguaje de Marcas (1º DAW). Quería hacer algo más allá de un formulario básico y aproveché para experimentar con Canvas API para la animación de fondo, que fue la parte más complicada pero también la más interesante.

---

## Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Glassmorphism, gradientes, animaciones
- **JavaScript** - Validación en tiempo real y Canvas API para el fondo
- **Google Fonts** - Outfit e Inter
- **Font Awesome 6.4** - Iconos

---

## Cómo ejecutarlo

Tienes varias opciones:

**Opción 1 - La más fácil:**
```bash
# Clona el repo
git clone https://github.com/webdaniel-1997/PROYECTOTAREA3.git

# Abre el archivo directamente en tu navegador
# (En Windows)
start src/index.html
```

**Opción 2 - Con Live Server (recomendado):**
1. Abre el proyecto en VS Code
2. Instala la extensión "Live Server"
3. Click derecho en `src/index.html` → "Open with Live Server"

**Opción 3 - Con servidor Python:**
```bash
python -m http.server 8000
# Luego abre http://localhost:8000/src
```

**Opción 4 - GitHub Pages:**
El proyecto se despliega automáticamente en: `https://webdaniel-1997.github.io/PROYECTOTAREA3/`

---

## Características

### Validación en Tiempo Real
- **Email:** Formato válido con regex
- **Contraseña:** Mínimo 5 caracteres, 1 mayúscula, 1 minúscula, 1 número
  - Checklist visual que se actualiza mientras escribes
- **Usuario:** Mínimo 3 caracteres
- **Nombre:** Campo obligatorio

### Feedback Visual
- Verde cuando el campo es válido
- Naranja cuando hay error (con animación shake)
- Azul cuando el campo tiene focus
- El botón de enviar solo se activa cuando todo está correcto

### Animación de Fondo
- Partículas conectadas formando triángulos (triangulación)
- Las partículas se alejan del cursor cuando pasas el ratón
- Efecto de "respiración" en las partículas (van cambiando de opacidad)

---

## Capturas

### Vista del Formulario
![Formulario](./assets/screenshot.jpg)

### Demo en Acción
![Demo](./assets/demo.gif)

*En el GIF se ve la validación en tiempo real, los efectos visuales y cómo funciona la animación de fondo.*

---

## Estructura del Proyecto

```
PROYECTOTAREA3/
├── src/
│   ├── index.html    # HTML del formulario
│   ├── style.css     # Estilos (glassmorphism, animaciones)
│   └── script.js     # Validación + Canvas
├── assets/
│   ├── screenshot.jpg
│   ├── demo.gif
│   └── FOTOHUB.jpg
├── .github/workflows/
│   └── deploy.yml    # Deploy automático a GitHub Pages
├── README.md
├── LICENSE           # MIT
├── CONTRIBUTING.md
├── CHANGELOG.md
└── DOCUMENTACION_PROYECTOTAREA3.md  # Documentación técnica completa
```

---

## Paleta de Colores

```css
Azul Principal:    #4F73D0
Azul Oscuro:       #1E2A47
Fondo:             #0f172a / #050510
Verde Éxito:       #4CCD8A
Naranja Error:     #FF8C6C
```

---

## Cosas Pendientes / Mejoras Futuras

- [ ] Conectar con backend (Node.js o PHP) para guardar los datos de verdad
- [ ] Campo de confirmación de contraseña
- [ ] Guardar datos en LocalStorage
- [ ] Toggle modo oscuro/claro
- [ ] Indicador de fuerza de contraseña (débil/media/fuerte)
- [ ] reCAPTCHA para evitar bots

---

## Documentación Técnica

Si quieres entender cómo funciona el código en detalle, revisa:
**[DOCUMENTACION_PROYECTOTAREA3.md](./DOCUMENTACION_PROYECTOTAREA3.md)**

Incluye explicación paso a paso de las funciones, el algoritmo de triangulación del canvas, conceptos de glassmorphism aplicados, etc.

---

## Contribuir

Si quieres contribuir o reportar algún bug, lee [CONTRIBUTING.md](./CONTRIBUTING.md) para ver las guías de estilo y el proceso.

---

## Licencia

MIT License - Puedes usar, modificar y distribuir este código libremente. Ver [LICENSE](./LICENSE) para más detalles.

---

## Autor

**Daniel Garcia Ortega**  
1º DAW - Lenguaje de Marcas  
Noviembre 2025

[![GitHub](https://img.shields.io/badge/GitHub-webdaniel--1997-181717?style=flat-square&logo=github)](https://github.com/webdaniel-1997)

---

⭐ Si te sirvió de algo, dale una estrella al repo
