# TuWebPro360 - EP360 Configuración del Agente

## Información del Proyecto

**Nombre:** TuWebPro360 / EP360  
**Propósito:** Sistema completo de venta de páginas web premium  
**Impulsado por:** Emprende Online  
**Propietario:** Roberto (promarket08@gmail.com)

---

## Branding

### Nombres y Apodos
- TuWebPro360
- EP360
- TuWebPro

### Colores (usar siempre)
```
Primary:    #6366F1 (Índigo vibrante)
Secondary:  #EC4899 (Rosa neón)
Accent:     #06B6D4 (Cyan eléctrico)
Accent-Green: #10B981 (Verde éxito)
Background: #0F172A (Slate oscuro)
Text:       #F8FAFC (Blanco suave)
Gradient:   from-indigo-500 via-purple-500 to-pink-500
```

### Información de Contacto
- **WhatsApp:** +56964681874
- **Email 1:** promarket08@gmail.com
- **Email 2:** tuwebpro369@gmail.com
- **Instagram:** https://www.instagram.com/tu.web.pro360/

---

## Sistema de Precios (3 Opciones)

### Opción 1: REPLICAR
- **Precio:** $99.000 - $249.000 CLP
- Diseño idéntico a la plantilla
- Textos e imágenes personalizados
- Tu branding y colores
- Animaciones premium incluidas
- 100% Responsive
- Entrega en 48-72 horas
- 3 rondas de cambios

### Opción 2: ADAPTAR (EXCLUSIVA)
- **Precio:** $249.000 - $449.000 CLP
- Diseño basado en plantilla con cambios significativos
- Layout personalizado y exclusivo
- Animaciones 3D únicas
- Certificado de Exclusividad
- 5 rondas de cambios
- Soporte 30 días
- Entrega en 5-7 días

### Opción 3: PERSONALIZAR (ÚNICA)
- **Precio:** $549.000 - $999.000 CLP
- Diseño 100% personalizado desde cero
- Código 100% tuyo
- Propiedad Intelectual incluida
- Animaciones 3D exclusivas
- Dominio .CL o .COM (1 año)
- Hosting incluido (1 año)
- 10 rondas de cambios
- Soporte prioritario 60 días
- Entrega en 10-15 días

---

## Repertorio de Plantillas

### Total Planificado: 295 Plantillas

| Categoría | Cantidad |
|-----------|----------|
| Construcción y Hogar | 175 plantillas |
| Landing Originales | 40 plantillas |
| Multi Página | 30 plantillas |
| E-Commerce | 20 plantillas |
| Premium Especiales | 30 plantillas |

### Sector Construcción (35 subsectores x 5 plantillas = 175)
1. Ventanas
2. Electricistas
3. Pintores
4. Gasfiteros
5. Constructoras
6. Arquitectos
7. Pisos y Pavimentos
8. Techumbres
9. Demoliciones
10. Jardinería
11. Piscinas
12. Aluminio y Vidrios
13. Cerrajería
14. Climatización
15. Mudanzas
16. Floors
17. Mármol
18. Puertas
19. Ferretería
20. Sistemas Solares
21. Impermeabilización
22. Acoustics
23. Pintura Industrial
24. Estructuras Metálicas
25. Albañilería
26. Carpintería
27. Decoración Interior
28. Diseño de Paisajes
29. Remodelaciones
30. Grúas y Arriendo Maquinaria
31. Materiales de Construcción
32. Pintura de Fachadas
33. Techumbres Metálicas
34. Pisos Flotantes
35. Control de Plagas

---

## Ofertas Activas

### 1. Oferta Lanzamiento
- **Descuento:** -30% OFF
- **Aplica a:** Todas las plantillas de Construcción
- **Contador regresivo:** 7 días

### 2. Plan 2x1 Especial
- **Precio:** $249.000 CLP (antes $498.000)
- Landing + Multi página
- **Disponibilidad:** 15 cupos (11 vendidos)

### 3. Plan Referidos
- **Beneficio:** $100.000 CLP
- **Condición:** Por cada 3 ventas cerradas

---

## Métodos de Pago
- Mercado Pago
- Transferencia bancaria
- Webpay (Tarjetas crédito/débito)
- PayPal

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
- Iconos: Font Awesome 6.5
- Imágenes: Unsplash, Pexels (premium)
- Efectos: partículas, glow, parallax, 3D

### Tipografía
- Headlines: Space Grotesk
- Body: Inter
- Accent: Orbitron (para números y badges)

---

## Estructura de la Landing

1. **Navbar** - Logo animado + menú + WhatsApp
2. **Hero** - Partículas + typewriter + búsqueda + stats
3. **Social Proof** - Números de clientes por sector
4. **Ofertas** - 3 cards con contadores y ofertas
5. **Catálogo** - Grid de plantillas con filtros
6. **Sector Construcción** - 35 subsectores con buscador
7. **Precios** - 3 planes con características
8. **Métodos de Pago** - Logos de procesadores
9. **Testimonios** - 3 reseñas de clientes
10. **Contacto** - Formulario + info WhatsApp/Email/Instagram
11. **Footer** - Links + contacto + redes
12. **WhatsApp Float** - Botón flotante siempre visible

---

## Testimonios de Clientes

| Nombre | Negocio | Ubicación |
|--------|---------|-----------|
| Carlos Mendoza | Restaurante Café Artesanal | Santiago |
| Andrés Vega | Constructora Vega & Asociados | Providencia |
| María Fernández | Boutique Chic | Viña del Mar |

---

## Flujo de Leads

```
Cliente completa formulario → 
Webhook n8n (localhost:5678/webhook/ep360-lead) → 
Email a promarket08@gmail.com → 
Roberto contacta por WhatsApp → 
Cierre de venta
```

---

## Workflows n8n

### Lead Capture
- Trigger: Webhook POST
- Campos: nombre, whatsapp, email, negocio, mensaje
- Validación de datos
- Envío de email con formato HTML premium

---

## Librerías y Recursos

### CSS
- Google Fonts (Inter, Space Grotesk, Orbitron)
- Font Awesome 6.5
- Animate.css 4.1.1
- Tailwind CSS 2.2.19 (CDN)
- CSS custom (variables, gradientes, glows)

### JavaScript
- Particles.js 2.0.0 (fondo animado)
- Vanilla JS (todas las animaciones custom)

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

### Ver landing en navegador
```bash
start index.html
```

### Para n8n local
```bash
# URL de webhook
http://localhost:5678/webhook/ep360-lead

# Para exponer a producción
ngrok http 5678
```

---

## Notas Importantes

- Siempre mencionar "Impulsado por Emprende Online"
- Incluir botón de WhatsApp en todas las páginas
- Usar formulario para capturar leads
- Animaciones pero sin sacrificar performance
- Mobile-first responsive design
- Todos los precios en CLP

---

## Checklist de Calidad

- [x] Logo EP360 visible y animado
- [x] Hero con partículas y typewriter
- [x] Búsqueda inteligente funcional
- [x] Filtros de catálogo operativos
- [x] Sector Construcción con 35 subsectores
- [x] 3 opciones de precio con CLP
- [x] Ofertas con contadores regresivos
- [x] Métodos de pago listados
- [x] WhatsApp flotante funcional
- [x] Formulario envía a n8n
- [x] 3 testimonios con fotos
- [x] Contactos actualizados
- [x] Instagram link correcto
- [x] SEO meta tags
- [x] 100% responsive
- [ ] GitHub Pages deployado

---

## Archivos del Proyecto

```
ep360-tuwebpro/
├── index.html          # Landing principal completa
├── css/
│   └── styles.css      # Estilos premium
├── js/
│   └── animations.js   # Animaciones y funcionalidad
├── assets/
│   └── logo-ep360.svg  # Logo animado
├── workflow-n8n.json  # Workflow para n8n
├── AGENTS.md           # Este archivo
└── README.md           # Documentación
```

---

**Última actualización:** Abril 2026
