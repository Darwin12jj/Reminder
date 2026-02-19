# TaskMaster - Aplicación de Gestión de Recordatorios

Una aplicación web moderna y completa para gestionar tareas y recordatorios con soporte multiidioma, temas personalizables y notificaciones.

## 🚀 Características Principales

### ✨ Gestión de Tareas
- **Crear, editar y eliminar** recordatorios
- **Prioridades** configurables (Alta, Media, Baja)
- **Notas detalladas** para cada tarea
- **Fecha y hora** de vencimiento con calendario interactivo
- **Alertas recurrentes** para tareas repetitivas
- **Marcar como completado** con checkbox interactivo
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
- **Colores de prioridad** visuales en las tarjetas
- **Perfil de usuario** personalizable con foto

### 🔔 Notificaciones
- **Alertas del navegador** cuando llega la hora de una tarea
- **Verificación automática** cada minuto
- **Notificaciones persistentes** incluso con la pestaña en segundo plano

### 💾 Persistencia de Datos
- **localStorage** para guardar todas las tareas
- **Perfil de usuario** guardado localmente
- **Listas personalizadas** persistentes
- **Preferencias de idioma y tema** guardadas

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
- **React 18** - Biblioteca principal de UI
- **React Hooks** - useState, useEffect para gestión de estado
- **React Router** - Navegación (implícita en la estructura)

### Internacionalización
- **i18next** - Sistema de traducción
- **react-i18next** - Integración con React
- **6 idiomas completos** con traducciones nativas

### UI/UX
- **Lucide React** - Iconos SVG modernos y ligeros
- **CSS3** - Estilos personalizados con variables
- **Flexbox & Grid** - Layout responsive
- **Transiciones CSS** - Animaciones suaves

### Gestión de Estado
- **React Context** (implícito en i18n)
- **localStorage API** - Persistencia de datos
- **Notification API** - Alertas del navegador

### Herramientas de Desarrollo
- **Create React App** - Configuración inicial
- **npm** - Gestor de paquetes
- **ES6+** - JavaScript moderno

## 📁 Estructura del Proyecto

```
taskmaster-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js/css          # Vista principal
│   │   ├── Sidebar.js/css            # Navegación lateral
│   │   ├── TaskCard.js/css           # Tarjeta de tarea
│   │   ├── CreateReminderModal.js/css # Modal de creación/edición
│   │   ├── UserSetupModal.js/css     # Configuración de perfil
│   │   ├── LanguageSwitcher.js/css   # Selector de idioma
│   │   └── ThemeSwitcher.js/css      # Selector de tema
│   ├── App.js/css                    # Componente principal
│   ├── i18n.js                       # Configuración de idiomas
│   └── index.js                      # Punto de entrada
└── package.json
```

## 🎯 Funcionalidades Detalladas

### Sistema de Filtros
- **All**: Muestra todas las tareas
- **Today**: Tareas pendientes (no completadas)
- **Scheduled**: Tareas con alertas recurrentes
- **Flagged**: Tareas marcadas como importantes
- **Completed**: Tareas finalizadas con opción de eliminar

### Calendario Interactivo
- Navegación por meses con flechas
- Fechas pasadas deshabilitadas
- Selección visual de fecha
- Fecha actual resaltada

### Sistema de Prioridades
- **Alta**: Fondo rojo suave
- **Media**: Fondo naranja/ámbar
- **Baja**: Fondo gris

### Perfil de Usuario
- Configuración inicial obligatoria
- Nombre requerido
- Foto opcional con vista previa
- Iniciales automáticas si no hay foto
- Edición desde el icono de configuración

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
npm install
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

## 📊 Métricas

- **Tamaño del build**: ~1.6 MB
- **JavaScript (gzipped)**: 87.75 KB
- **CSS (gzipped)**: 3.79 KB
- **Tiempo de carga**: < 2 segundos
- **Performance**: Optimizado para producción

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

### Compatibilidad
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### APIs Utilizadas
- **localStorage**: Persistencia de datos
- **Notification API**: Alertas del navegador
- **FileReader API**: Carga de imágenes de perfil
- **Date API**: Manejo de fechas y horas

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Desarrollo

Desarrollado con ❤️ usando React y tecnologías web modernas.

---

**Versión**: 1.0.0  
**Última actualización**: Febrero 2026
