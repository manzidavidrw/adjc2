<template>
  <div class="what-we-do-page">

    <!-- ═══ HERO ═══ -->
    <section class="relative bg-navy-dark min-h-[52vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>
      <div
        class="absolute right-0 bottom-0 font-display font-bold text-white/[.025] leading-none select-none pointer-events-none"
        style="font-size: 26vw">05</div>

      <div class="relative max-w-[1280px] mx-auto px-8 pb-16 w-full">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-6">
          <button @click="$emit('navigate', 'home')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">
            {{ lang === 'fr' ? 'Accueil' : 'Home' }}
          </button>
          <span class="text-white/20 text-xs">›</span>
          <span class="text-red font-body text-xs font-semibold">
            {{ lang === 'fr' ? 'Ce Que Nous Faisons' : 'What We Do' }}
          </span>
        </div>

        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-[2px] bg-red flex-shrink-0"></span>
          <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">
            {{ lang === 'fr' ? 'Nos 5 Programmes' : 'Our 5 Programs' }}
          </span>
        </div>

        <h1 class="font-display font-bold text-white leading-[1.06]" style="font-size: clamp(2.8rem, 5vw, 4.5rem)">
          {{ lang === 'fr' ? 'Ce Que Nous ' : 'What We ' }}
          <em class="not-italic text-red">{{ lang === 'fr' ? 'Faisons' : 'Do' }}</em>
        </h1>

        <p class="text-white/50 font-body font-light mt-4 max-w-[640px] leading-[1.85]" style="font-size: .95rem">
          {{ lang === 'fr'
            ? `Cinq programmes intégrés et communautaires pour autonomiser les jeunes congolais et créer un changement
          durable et positif.`
            : `Five integrated, community-based programs to empower Congolese youth and create lasting, positive change.`
          }}
        </p>

        <!-- Program quick-nav pills -->
        <div class="flex flex-wrap gap-3 mt-8">
          <button v-for="(prog, i) in programs" :key="prog.slug" @click="activeProgramIndex = i; scrollToProgram(i)"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs font-semibold tracking-wide border-none cursor-pointer transition-all duration-200',
              activeProgramIndex === i
                ? 'bg-red text-white'
                : 'bg-white/[.08] text-white/60 hover:bg-white/[.15] hover:text-white border border-white/[.1]'
            ]">
            <span>{{ prog.ico }}</span>
            {{ lang === 'fr' ? prog.shortFr : prog.shortEn }}
          </button>
        </div>
      </div>
    </section>

    <!-- ═══ PROGRAMS — one section per program ═══ -->
    <div v-for="(prog, pi) in programs" :key="prog.slug" :id="prog.slug" :ref="el => setProgRef(el, pi)">
      <!-- Program header band -->
      <div :class="['py-10 relative overflow-hidden', pi % 2 === 0 ? 'bg-white' : 'bg-navy-mist']">
        <div class="max-w-[1280px] mx-auto px-8">

          <!-- Program title row -->
          <div class="flex flex-wrap items-center gap-6 mb-8 reveal">
            <div class="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center flex-shrink-0">
              <span class="font-display font-bold text-white text-2xl">0{{ pi + 1 }}</span>
            </div>
            <div>
              <div class="flex items-center gap-3 mb-2">
                <span class="w-6 h-[2px] bg-red flex-shrink-0"></span>
                <span class="text-red font-body text-[.62rem] font-semibold tracking-[3px] uppercase">
                  {{ lang === 'fr' ? 'Programme' : 'Program' }} {{ pi + 1 }}
                </span>
              </div>
              <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size: clamp(1.8rem, 3vw, 2.6rem)">
                {{ lang === 'fr' ? prog.titleFr : prog.titleEn }}
              </h2>
            </div>
            <div class="ml-auto text-4xl hidden lg:block">{{ prog.ico }}</div>
          </div>

          <!-- Intro: stat card + description -->
          <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start mb-8">
            <!-- Left card: icon + program name only -->
            <div class="reveal-left">
              <div class="bg-navy rounded-2xl p-8 text-center relative overflow-hidden">
                <div class="absolute top-0 left-0 right-0 h-1 bg-red"></div>
                <div class="text-6xl mb-5">{{ prog.ico }}</div>
                <p class="font-display font-bold text-white text-xl leading-snug">
                  {{ lang === 'fr' ? prog.shortFr : prog.shortEn }}
                </p>
              </div>
            </div>

            <!-- Description + section heading -->
            <div class="reveal-right">
              <p class="text-navy/65 font-body font-light leading-[1.9] text-[.95rem] mb-6">
                {{ lang === 'fr' ? prog.descFr : prog.descEn }}
              </p>
              <div class="flex items-center gap-3">
                <div class="w-8 h-[2px] bg-red"></div>
                <span class="text-navy font-display font-semibold text-lg">
                  {{ lang === 'fr' ? "Domaines Clés d'Intervention" : 'Key Focus Areas' }}
                </span>
              </div>
            </div>
          </div>

          <!-- Sub-program picture cards — horizontal scroll with nav buttons -->
          <div class="relative">
            <!-- Back button -->
            <button @click="scrollCarousel(pi, -1)"
              class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full bg-white border border-navy/[.1] shadow-md flex items-center justify-center text-navy hover:bg-red hover:text-white hover:border-red transition-all duration-200 cursor-pointer"
              :aria-label="lang === 'fr' ? 'Précédent' : 'Previous'">
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>

            <!-- Scroll track -->
            <div :ref="el => carouselRefs[pi] = el" class="flex gap-4 overflow-x-auto sub-program-scroll px-1">
              <button v-for="(area, ai) in (lang === 'fr' ? prog.areasFr : prog.areasEn)" :key="area.slug"
                @click="navigateToArea(area.slug)" :class="[
                  'reveal text-left rounded-2xl overflow-hidden border border-navy/[.07]',
                  'hover:border-red/40 hover:shadow-navy-sm flex-shrink-0',
                  'transition-all duration-300 group cursor-pointer bg-white',
                  'd' + (ai + 1)
                ]" style="width: 260px"
                :aria-label="lang === 'fr' ? `Lire plus sur : ${area.title}` : `Read more about: ${area.title}`">

                <!-- Picture top -->
                <div class="relative h-40 overflow-hidden bg-navy/10">
                  <img :src="getAreaPhoto(area.slug)" :alt="area.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
                  <div
                    class="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm shadow-sm">
                    {{ area.ico }}
                  </div>

                </div>

                <!-- Text bottom -->
                <div class="p-4 flex flex-col gap-2">
                  <h4 class="font-display font-bold text-navy text-sm leading-tight">
                    {{ area.title }}
                  </h4>
                  <p class="font-body text-navy/55 text-[.74rem] leading-[1.65] line-clamp-3">{{ area.desc }}</p>
                  <div
                    class="mt-1 flex items-center gap-1.5 text-red/60 group-hover:text-red transition-colors duration-200">
                    <span class="font-body text-[.65rem] font-semibold tracking-wide uppercase">
                      {{ lang === 'fr' ? 'Lire la suite' : 'Read more' }}
                    </span>
                    <span class="text-xs transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </button>
            </div>

            <!-- Forward button -->
            <button @click="scrollCarousel(pi, 1)"
              class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full bg-white border border-navy/[.1] shadow-md flex items-center justify-center text-navy hover:bg-red hover:text-white hover:border-red transition-all duration-200 cursor-pointer"
              :aria-label="lang === 'fr' ? 'Suivant' : 'Next'">
              <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Gradient divider between programs -->
      <div v-if="pi < programs.length - 1" class="h-[3px] bg-gradient-to-r from-red via-navy to-red"></div>
    </div>

    <!-- ═══ CTA BAND ═══ -->
    <section class="bg-navy py-24 relative overflow-hidden">
      <div class="absolute inset-0 grid-lines opacity-40"></div>
      <div
        class="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red/[.06] blur-3xl pointer-events-none">
      </div>
      <div class="relative max-w-[1280px] mx-auto px-8 text-center">
        <div class="flex items-center justify-center gap-3 mb-5">
          <span class="w-7 h-[2px] bg-red"></span>
          <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">
            {{ lang === 'fr' ? 'Rejoignez-Nous' : 'Join Us' }}
          </span>
          <span class="w-7 h-[2px] bg-red"></span>
        </div>
        <h2 class="font-display font-bold text-white leading-[1.1] mb-5" style="font-size: clamp(2rem, 3.5vw, 3rem)">
          {{ lang === 'fr' ? 'Soutenez Nos Programmes' : 'Support Our Programs' }}
        </h2>
        <p class="text-white/45 font-body font-light text-sm leading-relaxed max-w-[560px] mx-auto mb-10">
          {{ lang === 'fr'
            ? `Chaque contribution aide un jeune congolais à accéder à l'éducation, à la santé, à la paix et à un avenir
          digne.`
            : `Every contribution helps a Congolese young person access education, health, peace and a dignified future.`
          }}
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <button @click="$emit('navigate', 'donate')"
            class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-8 py-4 rounded-xl border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-red-lg">
            {{ lang === 'fr' ? 'Faire un Don' : 'Donate Now' }} →
          </button>
          <button @click="$emit('navigate', 'contact')"
            class="bg-white/[.07] border border-white/[.15] hover:bg-white/[.15] text-white font-body font-semibold text-sm px-8 py-4 rounded-xl cursor-pointer transition-all duration-200">
            {{ lang === 'fr' ? 'Devenir Partenaire' : 'Become a Partner' }}
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'
import { useReveal } from '../composables/useReveal.js'
import { programs } from '../data/programData.js'
import sexual from '../assets/sexual.jpg'
import gbv from '../assets/GBV.jpg'
import equality from '../assets/equality.jpg'
import community from '../assets/community.jpg'
import economic from '../assets/economic.jpg'
import protection from '../assets/protection.jpg'
import interp from '../assets/interp.jpg'
import education from '../assets/education.jpg'
import sewing from '../assets/sewing.jpg'
import skills from '../assets/skills.jpeg'

// ── Props / emits ────────────────────────────────────────────────────────────
const props = defineProps({
  section: { type: String, default: null },
})
const emit = defineEmits(['navigate'])

// ── Composables ───────────────────────────────────────────────────────────────
const { lang } = useTranslations()
useReveal()

// ── State ────────────────────────────────────────────────────────────────────
const activeProgramIndex = ref(null)
const progRefs = ref([])
const carouselRefs = ref([])

function setProgRef(el, i) {
  if (el) progRefs.value[i] = el
}

/** Scroll a carousel left (-1) or right (1) by one card width */
function scrollCarousel(i, dir) {
  const el = carouselRefs.value[i]
  if (!el) return
  el.scrollBy({ left: dir * 280, behavior: 'smooth' })
}

// ── Scroll helpers ────────────────────────────────────────────────────────────
const NAVBAR_HEIGHT = 96

/** Scroll by program index — used by hero pills */
function scrollToProgram(i) {
  const el = progRefs.value[i]
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

/** Scroll by program slug — used by navbar and section prop */
function scrollToSlug(slug) {
  const idx = programs.findIndex(p => p.slug === slug)
  if (idx !== -1) {
    scrollToProgram(idx)
    activeProgramIndex.value = idx
    return
  }
  // Fallback: direct getElementById
  const el = document.getElementById(slug)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

// ── Lifecycle ────────────────────────────────────────────────────────────────
onMounted(() => {
  if (props.section) {
    setTimeout(() => scrollToSlug(props.section), 120)
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

// If already on page and section changes (navbar click while on whatwedo)
watch(() => props.section, (slug) => {
  if (slug) scrollToSlug(slug)
})

/**
 * Navigates to the dedicated sub-program article page.
 */
function navigateToArea(slug) {
  emit('navigate', 'sub-program', { slug })
}

// ── Photo map: one representative image per sub-program slug ─────────────────
const AREA_PHOTOS = {
  'srhr-education-adolescents': sexual,
  'srhr-menstrual-health': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=75',
  'srhr-gbv-prevention': gbv,
  'srhr-health-services': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=75',
  'srhr-gender-equality': equality,
  'srhr-community-engagement': community,
  'enterprise-training': interp,
  'enterprise-talent': sewing,
  'enterprise-startup': skills,
  'enterprise-financial-literacy': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=75',
  'enterprise-markets': 'https://images.unsplash.com/photo-1519995451813-39e29e054914?w=600&q=75',
  'enterprise-inclusion': economic,
  'peace-participation': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=75',
  'peace-conflict-prevention': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=75',
  'peace-civic-education': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=75',
  'peace-extremism-prevention': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=75',
  'peace-social-cohesion': 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=75',
  'peace-leadership': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=75',
  'climate-education': education,
  'climate-adaptation': 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=75',
  'climate-natural-resources': 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=75',
  'climate-green-skills': 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=75',
  'climate-reforestation': protection,
  'climate-advocacy': 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=75',
  'research-participatory': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=75',
  'research-evidence-advocacy': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75',
  'research-learning': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=75',
  'research-monitoring': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75',
  'research-transformative': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=75',
  'research-amplify-voices': 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=75',
}
const FALLBACK_PHOTO = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=75'

function getAreaPhoto(slug) {
  return AREA_PHOTOS[slug] ?? FALLBACK_PHOTO
}
</script>

<style scoped>
/* Hide scrollbar on the sub-program horizontal scroll */
.sub-program-scroll {
  scrollbar-width: none;
}

.sub-program-scroll::-webkit-scrollbar {
  display: none;
}
</style>