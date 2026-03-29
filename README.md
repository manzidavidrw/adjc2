# ADJC Website — Vue 3 + Tailwind CSS

**Action pour le Développement des Jeunes au Congo**  
Bilingual (FR/EN) · 2-color design system · Component-based · Production-ready

---

## 🚀 Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

---

## 🎨 Design System — 2 Colors

| Role       | Color   | Hex       | Usage                              |
|------------|---------|-----------|------------------------------------|
| **Primary** | Navy   | `#0B1C3E` | Backgrounds, headings, cards       |
| **Accent**  | Red    | `#D42B2B` | CTAs, badges, highlights, icons    |
| Neutral    | White   | `#FFFFFF`  | Card backgrounds, text             |
| Neutral    | Snow    | `#F8F9FC`  | Section backgrounds                |
| Neutral    | Mist    | `#E8EDF5`  | Alternate light sections           |

---

## 📁 Project Structure

```
adjc-website/
├── index.html
├── vite.config.js
├── tailwind.config.js          ← 2-color theme, fonts, animations
├── postcss.config.js
├── package.json
├── README.md
└── src/
    ├── main.js
    ├── App.vue                 ← root, assembles all sections
    ├── style.css               ← @tailwind + global custom CSS
    ├── composables/
    │   ├── useTranslations.js  ← all FR/EN strings + shared lang ref
    │   └── useReveal.js        ← IntersectionObserver scroll-reveal
    └── components/
        ├── TheCursor.vue           custom animated cursor
        ├── TheNavbar.vue           fixed navbar + lang bar + mobile menu
        ├── HeroSection.vue         full-screen hero + stats + ticker
        ├── AboutSection.vue        story + mission/vision cards
        ├── ProgramsSection.vue     6-program grid with hover effects
        ├── ImpactSection.vue       dark stats section (8 counters)
        ├── TeamSection.vue         4 portrait team cards
        ├── TestimonialsSection.vue 3 testimonial cards (dark bg)
        ├── NewsSection.vue         3-column news grid
        ├── GallerySection.vue      asymmetric gallery grid
        ├── DonateSection.vue       impact card + donation form
        ├── ContactSection.vue      info + contact form
        └── TheFooter.vue           full footer with newsletter
```

---

## 🌐 Bilingual System

All content is in `src/composables/useTranslations.js`.  
The `lang` ref is **shared globally** — toggling FR/EN in the navbar updates every component instantly.

```js
// In any component:
import { useTranslations } from '@/composables/useTranslations.js'
const { lang, t } = useTranslations()

lang.value = 'en'        // switch to English
t('navAbout')            // → "About" or "À Propos"
```

---

## ✨ Features

- ✅ **2-color design** — Deep Navy + Vibrant Red, clean whites as neutrals
- ✅ **Bilingual** FR / EN — instant toggle, no reload
- ✅ **Custom animated cursor** — red dot + ring
- ✅ **Scroll-reveal animations** — fade-up, fade-left, fade-right with staggered delays
- ✅ **Sticky navbar** — transparent → solid on scroll
- ✅ **Animated ticker** — hero bottom bar
- ✅ **Mobile hamburger menu** — animated open/close
- ✅ **Responsive** — mobile → tablet → desktop
- ✅ **Asymmetric gallery grid** — 12-col CSS grid layout
- ✅ **Live donate amount selector**
- ✅ **Contact form** with basic validation
- ✅ **Fraunces** display font + **DM Sans** body font
