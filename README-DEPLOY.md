# Tapago Landing Page - Guía de Deploy

## ✅ Cambios Realizados

### 1. Logo
- ✅ Logo SVG integrado en header y footer
- ✅ Ubicación: `/public/logo.svg`

### 2. Links Funcionales
- ✅ WhatsApp: https://wa.me/5493518676992 (con mensaje pre-cargado)
- ✅ Email: info@tapagopay.net
- ✅ Términos y Condiciones: /terminos
- ✅ Política de Privacidad: /privacidad

### 3. Redes Sociales (en footer)
- ✅ Instagram: #instagram (cambiar después)
- ✅ Twitter/X: #twitter (cambiar después)
- ✅ TikTok: #tiktok (cambiar después)

### 4. CTAs
- ✅ "Todo listo para usar Tapago" → Muestra alerta "Próximamente"
- ✅ Cuando tengas el link de onboarding, se cambia fácilmente

### 5. Contenido
- ✅ Eliminado: "No es una cueva. Es una fintech en serio."
- ✅ Términos y Condiciones completos
- ✅ Política de Privacidad completa (compliance Argentina)

## 📋 Próximos Pasos para Deploy

### PASO 1: Subir a Vercel

1. Ve a https://vercel.com
2. Login con tu cuenta (ya la tienes)
3. Click en "Add New" → "Project"
4. Click en "Upload" o "Import"
5. Sube esta carpeta completa
6. Vercel detectará que es Next.js automáticamente
7. Click en "Deploy"
8. Espera 2-3 minutos

### PASO 2: Configurar Dominio tapagopay.net

Una vez deployado:

1. En Vercel, ve a tu proyecto → "Settings" → "Domains"
2. Click en "Add Domain"
3. Ingresa: `tapagopay.net`
4. Vercel te dará records DNS para agregar

### PASO 3: Configurar DNS en Hosting24

1. Login en Hosting24
2. Ve a tu dominio tapagopay.net
3. Busca "DNS Settings" o "Name Servers"
4. Agrega los records que Vercel te dio:
   - Tipo A: apunta a la IP de Vercel
   - CNAME para www: apunta a Vercel
5. Guarda cambios
6. Espera 10-60 minutos (propagación DNS)

## 🔧 Cambios Futuros Fáciles

### Cambiar el Link de Onboarding

Cuando tengas el link real de onboarding, edita 3 archivos:

**1. Header** (`components/tapago/header.tsx`)
Busca esta línea (aprox línea 63):
```tsx
onClick={() => alert('Próximamente - Acceso anticipado disponible')}
```
Reemplaza con:
```tsx
onClick={() => window.open('TU_LINK_AQUI', '_blank')}
```

**2. Hero** (`components/tapago/hero.tsx`)
Busca esta línea (aprox línea 112):
```tsx
onClick={() => alert('Próximamente - Acceso anticipado disponible')}
```
Reemplaza con:
```tsx
onClick={() => window.open('TU_LINK_AQUI', '_blank')}
```

**3. Final CTA** (`components/tapago/final-cta.tsx`)
Busca esta línea (aprox línea 47):
```tsx
onClick={() => alert('Próximamente - Acceso anticipado disponible')}
```
Reemplaza con:
```tsx
onClick={() => window.open('TU_LINK_AQUI', '_blank')}
```

Luego en Vercel:
1. Ve a tu proyecto
2. Tab "Deployments"
3. Click en los 3 puntos del deployment activo
4. "Redeploy"
5. Listo en 2-3 minutos

### Cambiar Links de Redes Sociales

**Footer** (`components/tapago/footer.tsx`)

Busca:
```tsx
href="#instagram"
href="#twitter"
href="#tiktok"
```

Reemplaza con tus URLs reales:
```tsx
href="https://instagram.com/tuperfil"
href="https://twitter.com/tuperfil"
href="https://tiktok.com/@tuperfil"
```

## 🆘 Troubleshooting

### Si el deploy falla en Vercel:
- Verifica que subiste TODA la carpeta (no solo algunos archivos)
- Asegúrate de que `package.json` esté incluido

### Si el dominio no funciona:
- Espera al menos 1 hora para propagación DNS
- Verifica que los records DNS estén correctos en Hosting24
- Usa https://dnschecker.org para verificar propagación

### Si necesitas ayuda:
- Email: (ponte en contacto conmigo)
- WhatsApp: (tu número)

## ✅ Checklist Pre-Launch

- [ ] Deploy exitoso en Vercel
- [ ] Dominio tapagopay.net configurado
- [ ] Probado en mobile
- [ ] Probado en desktop
- [ ] Todos los links funcionan
- [ ] WhatsApp abre correctamente
- [ ] Términos y Privacidad se ven bien

---

**Creado con ❤️ por Claude**
**Fecha: Febrero 2025**
