# 🌿 El Boho - Landing Page

Landing page profesional optimizada para Instagram y redes sociales.

## ✨ Características

### 🎨 Diseño
- **Mobile-First:** Optimizado para dispositivos móviles (80% tráfico Instagram)
- **Visual Impact:** Grid estilo feed de Instagram
- **Animaciones suaves:** Transiciones CSS profesionales
- **Paleta Boho:** Turquesa, coral, violeta, dorado

### ⚡ Funcionalidades
- Hero section impactante con gradientes
- Grid de productos responsive
- Sección Instagram feed integrada
- Contacto directo por WhatsApp
- Lazy loading de imágenes
- Scroll animations
- SEO optimizado
- 100% responsive

### 📱 Optimizaciones Instagram
- Link en bio perfecto
- CTA claros y directos
- Tiempos de carga ultra-rápidos
- Compartir en redes sociales
- Visual storytelling

## 🚀 Uso

### Desarrollo local
```bash
# Abrir directamente en navegador
cd /root/clawd-main/el-boho/landing
open index.html  # Mac
xdg-open index.html  # Linux
start index.html  # Windows
```

### Servidor local (recomendado)
```bash
# Python
python3 -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Luego abrir: `http://localhost:8000`

## 📂 Estructura

```
landing/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   └── main.js         # Interactividad
├── images/             # Imágenes optimizadas
└── videos/             # Videos para Reels/Stories
```

## 🎯 Personalización

### Cambiar colores
Editar variables CSS en `css/style.css`:
```css
:root {
    --primary: #2D9596;    /* Turquesa */
    --secondary: #FF6B6B;  /* Coral */
    --accent: #FFD93D;     /* Dorado */
}
```

### Añadir productos
Duplicar bloque en `index.html`:
```html
<div class="product-card">
    <div class="product-image">
        <img src="ruta/imagen.jpg" alt="Producto">
        <div class="product-overlay">
            <button class="quick-view">Ver más</button>
        </div>
    </div>
    <div class="product-info">
        <h3>Nombre Producto</h3>
        <p class="product-desc">Descripción breve</p>
        <div class="product-footer">
            <span class="price">Precio</span>
            <button class="add-cart">🛒</button>
        </div>
    </div>
</div>
```

### WhatsApp
Cambiar número en:
- `index.html` (línea ~180, ~210)
- `js/main.js` (líneas con `wa.me/34634134466`)

## 📸 Assets Necesarios

### Imágenes
- **Hero background:** 1920x1080px
- **Productos:** 800x800px (cuadrado, fondo blanco)
- **Instagram posts:** 1080x1080px
- **Formato:** JPG optimizado (<200KB cada una)

### Videos (próximamente)
- **Reels:** 1080x1920px (vertical)
- **Stories:** 1080x1920px
- **Duración:** 15-30 segundos
- **Formato:** MP4, H.264

## 🔧 Próximas mejoras

- [ ] Sistema de carrito completo
- [ ] Modal de vista rápida de productos
- [ ] Integración API Instagram real
- [ ] Pasarela de pago (Stripe/Bizum)
- [ ] Panel admin para gestión productos
- [ ] Newsletter signup
- [ ] Blog/Stories section
- [ ] Multi-idioma (ES/EN)

## 📊 SEO

Incluido:
- Meta tags optimizados
- Open Graph para compartir
- Structured data ready
- Sitemap XML (crear)
- robots.txt (crear)

## 🌐 Deployment

### GitHub Pages (gratis)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/el-boho.git
git push -u origin main
```
Activar GitHub Pages en Settings → Pages

### Netlify (gratis, recomendado)
1. Conectar repositorio GitHub
2. Deploy automático en cada push
3. HTTPS gratis
4. Custom domain

### Vercel (gratis)
Similar a Netlify, excelente para proyectos modernos

## 📱 Link en Bio Instagram

**Texto sugerido:**
```
🌿✨ Joyería artesanal hecha a mano
💎 Diseños únicos · Estilo Boho
🛒 Pedidos por WhatsApp
👇 Link en bio
```

**URL corta sugerida:**
- `elboho.es` (registrar dominio)
- O usar: `bit.ly/elboho-shop`

## 🎨 Hashtags sugeridos

```
#ElBoho #JoyeriaArtesanal #BohoStyle
#HandmadeJewelry #JoyeriaBoho #Ibiza
#ArtesaniaEspañola #BisuteriaArtesanal
#BohoChic #HippieStyle #JoyeriaUnica
```

## 💬 Soporte

WhatsApp: +34 634 13 44 66
Instagram: @elboho.artesania

---

**Creado con ❤️ para El Boho**
