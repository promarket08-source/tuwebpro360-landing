# EP360 - Configuración del Agente

## Información del Proyecto

**Nombre:** EP360 - TuWebPro360  
**Propósito:** Landing page animada para venta de páginas web premium  
**Impulsado por:** Emprende Online  
**Propietario:** Roberto (promarket08@gmail.com)

---

## Branding

### Nombres y Apodos
- EP360
- TuWebPro360
- TuWebPro

### Colores (usar siempre)
```
Primary:    #6366F1 (Índigo vibrante)
Secondary:  #EC4899 (Rosa neón)
Accent:     #06B6D4 (Cyan eléctrico)
Background: #0F172A (Slate oscuro)
Text:       #F8FAFC (Blanco suave)
Gradient:   from-indigo-500 via-purple-500 to-pink-500
```

### Información de Contacto
- **WhatsApp:** +56964681874
- **Email 1:** promarket08@gmail.com
- **Email 2:** tuwebpro369@gmail.com
- **Instagram:** https://www.instagram.com/tu.web.pro360/

### Slogan
"TuWebPro360 - Páginas Web Premium"

---

## Oferta de Servicios

### Opción 1: Web Igual
- **Precio:** $297 USD
- Landing idéntica al template
- Cambiamos textos e imágenes
- Tu branding y colores
- Animaciones premium incluidas
- 100% Responsive
- Entrega en 48-72 horas

### Opción 2: Web a Tu Medida
- **Precio:** $597 USD
- 100% Personalizada
- Diseño único para tu marca
- Dominio .CL o .COM (1 año)
- Hosting incluido (1 año)
- Animaciones premium exclusivas
- Código 100% tuyo para siempre
- Soporte prioritario 30 días

---

## Estilo de Diseño

### Tono de Comunicación
- Profesional pero accesible
- Neuroventas y neuromarketing
- Enfoque en resultados y conversiones
- Lenguaje de urgencia positiva
- Historias de éxito con números

### Elementos Visuales
- Dark mode con gradientes neón
- Animaciones suaves en todas partes
- Iconos: Font Awesome
- Imágenes: Unsplash, Pexels (premium)
- Efectos: partículas, glow, parallax

### Tipografía
- Headlines: Space Grotesk
- Body: Inter
- Usar Google Fonts

---

## Estructura de la Landing

1. **Navbar** - Logo animado + menú
2. **Hero** - Partículas + título animado + CTAs
3. **Problema** - Dolor del cliente
4. **Solución** - Beneficios EP360
5. **Portafolio** - Bento Grid con ejemplos
6. **Servicios** - 2 opciones de precio
7. **Proceso** - 3 pasos simples
8. **Testimonios** - 5 reseñas (clientes falsos premium)
9. **Formulario** - Nombre + WhatsApp + Mensaje
10. **Footer** - Contacto + redes

---

## Testimonios de Clientes

| Nombre | Negocio | Ubicación |
|--------|---------|-----------|
| Carlos Mendoza | Restaurante Café Artesanal | Santiago |
| María Fernández | Boutique Chic | Viña del Mar |
| Andrés Vega | Consultora Legal Vega & Asociados | Santiago |
| Patricia Ruiz | Centro Estético Bella Vita | Providencia |
| Diego Torres | Agencia Digital Growth | Santiago |

---

## Flujo de Leads

```
Cliente llena formulario → 
Webhook n8n (localhost:5678/webhook/ep360-lead) → 
Email a promarket08@gmail.com → 
Roberto contacta por WhatsApp → 
Cierre de venta
```

---

## Workflows n8n

### Lead Capture
- Trigger: Webhook POST
- Validación de datos
- Envío de email con formato HTML premium
- Notificación opcional (Slack)

---

## Librerías y Recursos

### CSS
- Google Fonts (Inter, Space Grotesk)
- Font Awesome 6.5
- Animate.css
- CSS custom (variables, gradientes, glows)

### JavaScript
- Particles.js (fondo animado)
- Typed.js (efecto typewriter)
- Vanilla JS (animaciones custom)

### Imágenes
- Unsplash (premium)
- Pexels (alternativa)
- SVG personalizado para logo

---

## Inspiración de Diseño

### Recursos Visuales
- Aceternity UI
- Magic UI
- Tailwind UI
- Godly.website
- Dribbble

### Landing Pages Premium
- SaaS landing page examples
- Dark mode con gradientes
- Animaciones de scroll
- Bento grid layouts

---

## Comandos Rápidos del Agente

### Crear nueva landing para cliente
1. Copiar estructura de ep360-tuwebpro
2. Personalizar textos, colores, imágenes
3. Ajustar precios y servicios
4. Deploy en GitHub Pages

### Actualizar landing existente
1. Editar archivos HTML/CSS/JS
2. Commit y push a GitHub
3. GitHub Pages actualiza automáticamente

### Agregar nuevo testimonio
1. Añadir card en sección testimonios
2. Usar imagen de Unsplash
3. Inventar nombre y negocio plausible

---

## Notas Importantes

- Siempre mencionar "Impulsado por Emprende Online"
- Incluir botón de WhatsApp en todas las páginas
- Usar formulario para capturar leads
- Animaciones pero sin sacrificar performance
- Mobile-first responsive design

---

## Checklist de Calidad

- [ ] Logo EP360 visible y animado
- [ ] Hero con partículas y título animado
- [ ] Todas las secciones con animaciones
- [ ] WhatsApp flotante funcional
- [ ] Formulario envía a n8n
- [ ] 5 testimonios con fotos
- [ ] Precios correctos ($297 y $597)
- [ ] Contactos actualizados
- [ ] Instagram link correcto
- [ ] SEO meta tags
- [ ] 100% responsive
- [ ] GitHub Pages deployado

---

## Configuración Local

### Para desarrollar
```bash
# Abrir en navegador
start index.html

# O usar Live Server (VS Code)
```

### Para n8n local
```bash
# URL de webhook
http://localhost:5678/webhook/ep360-lead

# Para exponer a producción
ngrok http 5678
```

---

**Última actualización:** Abril 2026
