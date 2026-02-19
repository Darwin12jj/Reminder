# TaskMaster - Aplicación de Gestión de Recordatorios

Una aplicación web moderna y completa para gestionar tareas y recordatorios con soporte multiidioma, temas personalizables, notificaciones inteligentes y animaciones fluidas.

## 🚀 Características Principales

### ✨ Gestión de Tareas
- **Crear, editar y eliminar** recordatorios con animaciones suaves
- **Prioridades** configurables (Alta, Media, Baja) con degradados visuales
- **Notas detalladas** para cada tarea
- **Fecha y hora** de vencimiento con calendario interactivo
- **Selector de hora** nativo del navegador (formato 24h)
- **Alertas recurrentes** para tareas repetitivas
- **Marcar como completado** con checkbox animado
- **Sistema de banderas** para tareas importantes

### 📋 Organización
- **Filtros inteligentes**: All, Today, Scheduled, Flagged, Completed
- **Listas personalizadas** con colores configurables
- **Listas predefinidas**: Work, Personal, Shopping
- **Búsqueda en tiempo real** por título y notas
- **Contadores dinámicos** en cada categoría

### 🎨 Personalización
- **Modo oscuro/claro** con transiciones suaves
- **6 idiomas disponibles**: Inglés, Español, Alemán, Portugués, Francés, Esperanto
- **Banderas SVG** para cada idioma
- **Degradados de prioridad** en modo claro y oscuro
- **Perfil de usuario** personalizable con foto

### 🔔 Notificaciones Inteligentes
- **Alertas del navegador** cuando llega la hora de una tarea
- **Verificación cada 10 segundos** para mayor precisión
- **Detección de tareas pendientes** dentro de 1 minuto
- **Sin duplicados** mediante sistema de tracking
- **Notificaciones persistentes** incluso con la pestaña en segundo plano

### 📱 Diseño Responsive
- **Menú hamburguesa** en móviles con animación deslizante
- **Overlay oscuro** para cerrar menú al hacer clic fuera
- **Adaptación automática** a tablets y móviles
- **Grid responsive** de tareas (1 columna en móvil)
- **Breakpoints optimizados**: 768px y 480px

### 🎬 Animaciones (Anime.js)
- **Entrada de cards**: Fade in + slide up
- **Completar tarea**: Bounce scale animation
- **Eliminar tarea**: Slide out con fade
- **Modal**: Scale up al abrir
- **Sidebar móvil**: Deslizamiento suave
- **Botones**: Hover y click animations
- **Checkbox**: Bounce al marcar

### 💾 Persistencia de Datos
- **localStorage** para guardar todas las tareas
- **Perfil de usuario** guardado localmente
- **Listas personalizadas** persistentes
- **Preferencias de idioma y tema** guardadas

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
- **React 19.2.4** - Biblioteca principal de UI
- **React Hooks** - useState, useEffect, useRef para gestión de estado

### Animaciones
- **Anime.js** - Librería de animaciones JavaScript
- **CSS3 Animations** - Keyframes y transitions
- **Cubic Bezier** - Easing functions personalizadas

### Internacionalización
- **i18next 25.8.11** - Sistema de traducción
- **react-i18next 16.5.4** - Integración con React
- **6 idiomas completos** con traducciones nativas

### UI/UX
- **Lucide React 0.575.0** - Iconos SVG modernos y ligeros
- **CSS3** - Estilos personalizados con variables
- **Flexbox & Grid** - Layout responsive
- **Media Queries** - Adaptación móvil

### Gestión de Estado
- **React Context** (implícito en i18n)
- **localStorage API** - Persistencia de datos
- **Notification API** - Alertas del navegador

### Herramientas de Desarrollo
- **Create React App** - Configuración inicial
- **npm** - Gestor de paquetes
- **ES6+** - JavaScript moderno
- **gh-pages** - Despliegue automático

## 📁 Estructura del Proyecto

```
taskmaster-app/
├── public/
│   ├── index.html
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Dashboard.js/css          # Vista principal con animaciones
│   │   ├── Sidebar.js/css            # Navegación lateral + hamburguesa
│   │   ├── TaskCard.js/css           # Tarjeta de tarea animada
│   │   ├── CreateReminderModal.js/css # Modal con animación de entrada
│   │   ├── UserSetupModal.js/css     # Configuración de perfil
│   │   ├── LanguageSwitcher.js/css   # Selector de idioma
│   │   └── ThemeSwitcher.js/css      # Selector de tema
│   ├── App.js/css                    # Componente principal
│   ├── i18n.js                       # Configuración de idiomas
│   └── index.js                      # Punto de entrada
├── SPECS.md                          # Especificaciones técnicas
└── package.json
```

## 🎯 Funcionalidades Detalladas

### Sistema de Notificaciones Mejorado
- Verificación cada 10 segundos (antes 60s)
- Detecta tareas dentro de 1 minuto de la hora programada
- Sistema anti-duplicados con Set
- Conversión automática de formato 24h

### Menú Hamburguesa (Móviles)
- Botón fijo en esquina superior izquierda
- Sidebar desliza desde la izquierda (80% ancho, max 320px)
- Overlay oscuro con blur
- Cierre al hacer clic fuera o en cualquier opción
- Perfil de usuario al final del menú

### Sistema de Prioridades con Degradados
- **Alta**: Gradiente rojo (modo oscuro y claro)
- **Media**: Gradiente ámbar/naranja
- **Baja**: Gradiente gris
- Opacidad ajustada según tema

### Animaciones Detalladas
- **TaskCard entrada**: translateY(20→0) + opacity(0→1), 600ms
- **Completar**: scale(1→0.95→1), 300ms
- **Eliminar**: translateX(0→-100) + fade, 400ms
- **Modal**: scale(0.9→1) + fade, 400ms
- **Sidebar móvil**: translateX(-320→0), 400ms
- **Checkbox**: scale(1→1.2→1) bounce

## 🌐 Idiomas Soportados

| Idioma | Código | Bandera |
|--------|--------|---------|
| English | EN | 🇺🇸 |
| Español | ES | 🇪🇸 |
| Deutsch | DE | 🇩🇪 |
| Português | PT | 🇵🇹 |
| Français | FR | 🇫🇷 |
| Esperanto | EO | ⭐ |

## 📦 Instalación y Uso

### Requisitos Previos
- Node.js 14+ 
- npm 6+

### Instalación
```bash
cd taskmaster-app
npm install --legacy-peer-deps
```

### Desarrollo
```bash
npm start
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción
```bash
npm run build
```
Genera la carpeta `build/` lista para desplegar.

### Despliegue a GitHub Pages
```bash
npm run deploy
```

## 📊 Métricas

- **Tamaño del build**: ~1.6 MB
- **JavaScript (gzipped)**: 87.75 KB
- **CSS (gzipped)**: 3.79 KB
- **Tiempo de carga**: < 2 segundos
- **Performance**: Optimizado para producción
- **Responsive**: 100% adaptable

## 🎨 Temas

### Modo Oscuro (Por defecto)
- Fondo: `#101622`
- Sidebar: `#0f172a`
- Tarjetas: `#1e293b`
- Texto: `#f1f5f9`

### Modo Claro
- Fondo: `#f6f6f8`
- Sidebar: `#ffffff`
- Tarjetas: `#ffffff`
- Texto: `#1e293b`

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (diseño original con sidebar lateral)
- **Tablet/Mobile**: ≤ 768px (menú hamburguesa, layout vertical)
- **Mobile pequeño**: ≤ 480px (textos y botones más compactos)

## 🔒 Privacidad

- **Sin backend**: Todos los datos se almacenan localmente
- **Sin tracking**: No se recopila información del usuario
- **Sin cookies**: Solo localStorage del navegador
- **Offline-ready**: Funciona sin conexión a internet

## 🐛 Características Técnicas

### Optimizaciones
- Lazy loading de componentes
- Memoización de cálculos pesados
- Debouncing en búsqueda
- Compresión gzip en producción
- Animaciones con GPU acceleration

### Compatibilidad
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Móviles iOS/Android

### APIs Utilizadas
- **localStorage**: Persistencia de datos
- **Notification API**: Alertas del navegador
- **FileReader API**: Carga de imágenes de perfil
- **Date API**: Manejo de fechas y horas

## 🌐 Demo en Vivo

**URL**: [https://darwin12jj.github.io/Reminder/](https://darwin12jj.github.io/Reminder/)

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨💻 Desarrollo

Desarrollado con ❤️ usando React, Anime.js y tecnologías web modernas.

---

**Versión**: 1.1.0  
**Última actualización**: Febrero 19, 2026
