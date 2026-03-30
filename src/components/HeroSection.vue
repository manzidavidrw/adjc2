<template>
  <section id="home" class="relative min-h-screen bg-navy-dark overflow-hidden">

    <!-- Slides — fills entire viewport, navbar overlays on top -->
    <div class="absolute inset-0">
      <div v-for="(post, i) in slides" :key="post.id" :class="['absolute inset-0 transition-all duration-700 ease-in-out',
        i === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0']">

        <!-- Real background image -->
        <img :src="post.img" :alt="lang === 'fr' ? post.titleFr : post.titleEn"
          class="absolute inset-0 w-full h-full object-cover" />

        <!-- Overlays -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60"></div>

        <!-- Red accent line -->
        <div class="absolute left-0 top-[25%] bottom-[25%] w-[3px] bg-red"></div>

        <!-- Slide counter — sits below navbar -->
        <div class="absolute right-10 z-20 text-white/30 font-display font-bold text-sm select-none"
          style="top: calc(104px + 2rem)">
          <span class="text-white text-2xl">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="mx-1">/</span>
          <span>{{ String(slides.length).padStart(2, '0') }}</span>
        </div>

        <!-- Slide content — anchored to bottom, never reaches navbar -->
        <div class="relative h-full max-w-[1280px] mx-auto px-8 flex flex-col justify-end pb-36"
          style="padding-top: 120px">

          <!-- Category badge -->
          <div class="flex items-center gap-3 mb-5">
            <span
              class="bg-red text-white font-body font-semibold text-[.58rem] tracking-[2px] uppercase px-3 py-1.5 rounded-full">
              {{ lang === 'fr' ? post.catFr : post.catEn }}
            </span>
          </div>

          <!-- Title -->
          <h1 class="font-display font-bold text-white leading-[1.06] max-w-[820px] mb-8"
            style="font-size:clamp(2.2rem,5vw,4.2rem)">
            {{ lang === 'fr' ? post.titleFr : post.titleEn }}
          </h1>

          <!-- CTA buttons -->
          <div class="flex items-center gap-3">
            <button @click="goToPost(post)"
              class="inline-flex items-center gap-3 bg-red hover:bg-red-dark text-white font-body font-semibold text-sm tracking-wide px-7 py-3.5 rounded-xl border-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-red-lg">
              {{ lang === 'fr' ? "Lire l'article" : 'Read article' }}
              <span
                class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[.6rem]">→</span>
            </button>
            <button @click="goToBlog"
              class="inline-flex items-center gap-2 text-white/65 hover:text-white font-body font-medium text-sm px-6 py-3.5 rounded-xl border border-white/15 hover:border-white/40 bg-transparent cursor-pointer transition-all duration-300">
              {{ lang === 'fr' ? 'Tous les articles' : 'Get all stories' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Prev / Next + dots -->
    <div class="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
      <button @click="prevSlide"
        class="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red hover:border-red transition-all duration-200 cursor-pointer">
        <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
          <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
      <div class="flex items-center gap-2">
        <button v-for="(_, i) in slides" :key="i" @click="goToSlide(i)" :class="['transition-all duration-300 rounded-full border-none cursor-pointer p-0',
          i === activeSlide ? 'w-10 h-2.5 bg-red' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60']">
        </button>
      </div>
      <button @click="nextSlide"
        class="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red hover:border-red transition-all duration-200 cursor-pointer">
        <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
          <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
    </div>

    <!-- Bottom ticker -->
    <div
      class="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[.07] bg-black/30 backdrop-blur-sm py-3 ticker-track">
      <div class="ticker-inner">
        <div v-for="i in 4" :key="i" class="flex items-center">
          <div v-for="tag in t('tickers')" :key="tag + i"
            class="flex items-center gap-3 px-6 text-[.62rem] text-white/30 tracking-[1.5px] uppercase whitespace-nowrap font-body">
            <span class="w-1.5 h-1.5 rounded-full bg-red flex-shrink-0"></span>
            {{ tag }}
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTranslations } from '@/composables/useTranslations.js'

const { t, lang } = useTranslations()
const emit = defineEmits(['navigate'])

const slides = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80',
    date: '15 Mars 2026', readTime: 4,
    author: 'Jean-Pierre Kabila', role: 'Directeur Exécutif',
    catFr: 'Actualités', catEn: 'News',
    titleFr: 'Lancement du Programme National de Bourses 2026 pour 500 Jeunes',
    titleEn: '2026 National Scholarship Program Launched for 500 Youth',
    excerptFr: "L'ADJC annonce son programme le plus ambitieux à ce jour — 500 bourses distribuées dans toutes les provinces de la RDC pour l'année scolaire 2026-2027.",
    excerptEn: "ADJC announces its most ambitious program to date — 500 scholarships distributed across all provinces of the DRC for the 2026-2027 school year.",
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80',
    date: '8 Mars 2026', readTime: 3,
    author: 'Amina Kasongo', role: 'Communication',
    catFr: 'Événements', catEn: 'Events',
    titleFr: 'Forum National de la Jeunesse — Kinshasa 2026 : Un Succès Retentissant',
    titleEn: 'National Youth Forum — Kinshasa 2026: A Resounding Success',
    excerptFr: "800 jeunes leaders réunis pour deux jours d'ateliers et d'échanges intenses sur l'avenir du Congo.",
    excerptEn: "800 young leaders gathered for two days of intensive workshops and exchanges on the future of Congo.",
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1600&q=80',
    date: '10 Fév 2026', readTime: 5,
    author: 'Marie-Cé Nzuzi', role: 'Dir. Programmes',
    catFr: 'Témoignages', catEn: 'Stories',
    titleFr: "Bénédicte, de Bénéficiaire à Entrepreneuse : Son Parcours Inspirant",
    titleEn: "Bénédicte, from Beneficiary to Entrepreneur: Her Inspiring Journey",
    excerptFr: "À 24 ans, Bénédicte dirige une PME de transformation alimentaire qui emploie 12 personnes à Kinshasa.",
    excerptEn: "At 24, Bénédicte now runs a food processing SME employing 12 people in Kinshasa.",
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80',
    date: '28 Jan 2026', readTime: 6,
    author: 'Patrick Lumumba', role: 'Responsable Terrain',
    catFr: 'Blog', catEn: 'Blog',
    titleFr: 'Jeunes Médiateurs de Paix : Leçons du Terrain à Minembwe',
    titleEn: 'Young Peace Mediators: Lessons from the Field in Minembwe',
    excerptFr: "Après 18 mois de formation, nos 32 jeunes médiateurs ont résolu 47 conflits — un taux de succès de 87%.",
    excerptEn: "After 18 months of training, our 32 young mediators resolved 47 conflicts — an 87% success rate.",
  },
]

const activeSlide = ref(0)
let timer = null

function startAutoplay() {
  timer = setInterval(() => { activeSlide.value = (activeSlide.value + 1) % slides.length }, 5000)
}
function stopAutoplay() { if (timer) clearInterval(timer) }
function nextSlide() { stopAutoplay(); activeSlide.value = (activeSlide.value + 1) % slides.length; startAutoplay() }
function prevSlide() { stopAutoplay(); activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length; startAutoplay() }
function goToSlide(i) { stopAutoplay(); activeSlide.value = i; startAutoplay() }
function goToPost(post) { emit('navigate', 'blog-post', { postId: post.id }) }
function goToBlog() { emit('navigate', 'blognews') }

onMounted(startAutoplay)
onUnmounted(stopAutoplay)
</script>