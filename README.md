# EP360 - TuWebPro360

🚀 **TuWebPro360 - Páginas Web Premium**

Landing page animada para EP360, impulsada por Emprende Online.

---

## 🌟 Características

- ✅ Landing completamente animada
- ✅ Diseño premium dark mode con gradientes neón
- ✅ 100% Responsive (móvil + desktop)
- ✅ Optimizada para conversiones
- ✅ Neuroventas y neuromarketing
- ✅ Particles.js background
- ✅ Typed.js para títulos animados
- ✅ Carousel de testimonios
- ✅ Formulario de contacto
- ✅ WhatsApp flotante
- ✅ SEO optimizado

---

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Primary | `#6366F1` | Botones, títulos |
| Secondary | `#EC4899` | Acentos, highlights |
| Accent | `#06B6D4` | Cyan, iconos |
| Background | `#0F172A` | Fondo oscuro |
| Text | `#F8FAFC` | Texto principal |

---

## 📁 Estructura del Proyecto

```
ep360-tuwebpro/
├── index.html              # Landing completa
├── css/
│   └── styles.css         # Estilos premium
├── js/
│   └── animations.js      # Animaciones
├── assets/
│   └── logo-ep360.svg     # Logo animado
├── workflow-n8n.json      # Workflow para n8n
├── README.md              # Este archivo
└── AGENTS.md             # Config del agente
```

---

## 🚀 Despliegue

### GitHub Pages

1. Sube este proyecto a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona "Deploy from a branch"
4. Selecciona la rama `main` y la carpeta `/ (root)`
5. Guarda y espera 2-5 minutos

Tu sitio estará disponible en: `https://tu-usuario.github.io/ep360-tuwebpro`

---

## ⚙️ Configuración n8n (Opcional)

### Importar Workflow

1. Abre n8n en `http://localhost:5678`
2. Ve a Settings > Import from File
3. Selecciona `workflow-n8n.json`
4. Activa el workflow

### Configurar Email

1. En el nodo "Enviar Email", configura tus credenciales SMTP
2. O usa servicios como Gmail, SendGrid, Mailgun

### Webhook URL

El formulario envía datos a: `http://localhost:5678/webhook/ep360-lead`

**Nota:** Para producción, usa un servicio como Ngrok para exponer tu n8n local:
```bash
ngrok http 5678
```

---

## 📧 Formulario de Contacto

El formulario captura:
- Nombre
- WhatsApp
- Mensaje

Y los envía vía webhook a n8n para procesarlos.

---

## 🔗 Contacto

- **WhatsApp:** +56 9 6468 1874
- **Email:** promarket08@gmail.com
- **Email 2:** tuwebpro369@gmail.com
- **Instagram:** [@tu.web.pro360](https://www.instagram.com/tu.web.pro360/)

---

## 📜 Licencia

© 2026 EP360 - TuWebPro360. Todos los derechos reservados.

**Impulsado por Emprende Online**

---

## 🎯 Tips para Personalización

### Cambiar textos
Edita directamente en `index.html`

### Cambiar imágenes
Reemplaza los URLs de Unsplash/Pexels con tus propias imágenes

### Cambiar precios
Busca `$297` y `$597` en `index.html`

### Cambiar WhatsApp
Busca `56964681874` y reemplázalo con tu número

### Cambiar colores
Edita las variables CSS en `styles.css`:

```css
:root {
    --primary: #6366F1;
    --secondary: #EC4899;
    --accent: #06B6D4;
}
```

---

Hecho con ❤️ en Chile 🇨🇱
