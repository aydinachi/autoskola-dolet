# auto škola Dolet - Deployment Guide

## 🚀 Aplikacija je spremna za deployment!

### Lokalno testiranje
```bash
npm run dev
```
Aplikacija će biti dostupna na http://localhost:3000

### Build za produkciju
```bash
npm run build
npm run start
```

## 🌐 Deployment opcije

### 1. Vercel (Preporučeno)
1. Push-ajte kod na GitHub
2. Idite na [vercel.com](https://vercel.com)
3. Povežite GitHub repo
4. Vercel će automatski deploy-ovati aplikaciju

### 2. Netlify
1. Push-ajte kod na GitHub
2. Idite na [netlify.com](https://netlify.com)
3. Povežite GitHub repo
4. Postavite build command: `npm run build`
5. Postavite publish directory: `.next`

### 3. Statički hosting
1. Pokrenite `npm run build`
2. Upload-ajte `.next` direktorij na vaš hosting
3. Postavite server da servira Next.js aplikaciju

## 📁 Struktura aplikacije

- **Glavna stranica** (`/`) - Informacije o AutoŠkoli Dolet
- **Online učenje** (`/online-ucenje`) - Kviz funkcionalnost
- **Bordo tema** - Profesionalni dizajn
- **Bosanski jezik** - Potpuna lokalizacija

## 🎯 Funkcionalnosti

### Glavna stranica
- Hero sekcija sa informacijama o autoškoli
- Usluge (Teorijska obuka, Praktična vožnja, itd.)
- Testimonials polaznika
- FAQ sekcija
- Footer sa kontakt informacijama

### Online učenje
- Interaktivni kviz sa 5 pitanja
- Objašnjenja za svako pitanje
- Rezultati sa procenatom uspješnosti
- Responzivni dizajn

## 🔧 Tehnologije

- **Next.js 13.5.4** - React framework
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS
- **Framer Motion** - Animacije
- **Responzivni dizajn** - Mobile-first

## 📱 Responzivnost

Aplikacija je potpuno responzivna i optimizovana za:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Dizajn

- **Bordo tema** (#8B0000, #A52A2A)
- **Tamna pozadina** (#070606)
- **Profesionalni izgled** za autoškolu
- **Smooth animacije** i tranzicije

## ✅ Deployment checklist

- [x] Build uspješan
- [x] Sve stranice rade
- [x] Kviz funkcionalnost
- [x] Responzivni dizajn
- [x] SEO optimizacija
- [x] Meta podaci
- [x] Bosanski jezik
- [x] Bordo tema

## 🚀 Aplikacija je spremna za produkciju!
