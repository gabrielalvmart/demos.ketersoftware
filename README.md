# Demos Keter Software

Sitio web de demostraciones para diferentes tipos de negocios en Costa Rica.

## 🚀 Demos Disponibles

- **Página Principal** - Directorio de demos con diseño oscuro moderno
- **Panadería** (`/panaderia`) - Sitio web para panaderías con tema naranja/marrón
- **Dentista** (`/dentista`) - Landing page para clínicas dentales con sistema de citas

## 💻 Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling moderno y responsive
- **Lucide React** - Íconos SVG
- **Cloudflare Pages** - Hosting optimizado

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build
```

## 🌐 Despliegue en Cloudflare Pages

Este proyecto está configurado para exportación estática, ideal para Cloudflare Pages:

### Opción 1: Desde el Dashboard de Cloudflare

1. Sube tu repositorio a GitHub/GitLab
2. Conecta tu repositorio en Cloudflare Pages
3. Configura:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Despliega

### Opción 2: Con Wrangler CLI

```bash
# Instalar Wrangler
npm install -g wrangler

# Build
npm run build

# Desplegar
wrangler pages deploy out --project-name=demos-ketersoftware
```

## 📁 Estructura del Proyecto

```
demos.ketersoftware/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio (directorio)
│   ├── globals.css         # Estilos globales
│   ├── panaderia/
│   │   └── page.tsx        # Demo panadería
│   └── dentista/
│       └── page.tsx        # Demo dentista
├── public/                 # Assets estáticos
├── next.config.js          # Configuración Next.js
├── tailwind.config.js      # Configuración Tailwind
└── package.json
```

## 🎨 Características

### Página Principal
- Diseño moderno con gradientes oscuros
- Grid responsive de demos
- Animaciones suaves al hover
- Sección de características
- Footer completo

### Demo Panadería
- Tema cálido naranja/marrón
- Catálogo de productos por categorías
- Sección de ventas al por mayor
- Información de contacto completa
- Horarios de atención
- Newsletter signup

### Demo Dentista
- Tema profesional azul/cyan
- Formulario de citas interactivo
- Catálogo de servicios con precios
- Lista de seguros aceptados
- Opciones de pago
- Información de emergencias

## 🌍 Localización

Todo el contenido está en **español** y adaptado para **Costa Rica**:
- Números de teléfono formato CR (+506)
- Moneda en colones (₡)
- Referencias a ubicaciones costarricenses
- Seguros y servicios locales

## 📱 Responsive Design

Todos los demos son completamente responsivos:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Navegación adaptativa
- Imágenes y grids flexibles

## 🎯 Próximas Demos

- Tienda Online
- Restaurante
- Spa & Bienestar

## 📄 Licencia

© 2026 Keter Software. Todos los derechos reservados.
