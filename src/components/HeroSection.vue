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
import launch from '../assets/launching.jpeg'
import five from '../assets/five.jpeg'
import sake from '../assets/sake.jpeg'
import hundred from '../assets/hundred.jpeg'
import participate from '../assets/participate.jpeg'
import froms from '../assets/from.jpeg'
import people from '../assets/people.jpeg'

const { t, lang } = useTranslations()
const emit = defineEmits(['navigate'])

const slides = [
  {
    id: 1,
    img: launch,
    date: '7 Nov 2025',
    author: 'ADJC',
    catFr: 'Blog',
    catEn: 'Blog',
    titleFr: "Étude sur les besoins des survivantes en RDC",
    titleEn: "Study on survivors’ unmet needs in Eastern DRC",
    excerptFr: "Une initiative à Goma pour améliorer la protection et le soutien aux survivantes.",
    excerptEn: "An initiative in Goma to improve protection and support for survivors."
  },

  {
    id: 2,
    img: five,
    date: '14 Nov 2025',
    author: 'ADJC',
    catFr: 'Formation',
    catEn: 'Training',
    titleFr: "Formation en santé sexuelle à Goma",
    titleEn: "SRHR training strengthens civil society in Goma",
    excerptFr: "Des acteurs formés au plaidoyer et au cadre légal en RDC.",
    excerptEn: "Civil society trained on advocacy and legal frameworks in DRC."
  },

  {
    id: 3,
    img: sake,
    date: '3–5 Déc 2025',
    author: 'ADJC',
    catFr: 'Formation',
    catEn: 'Training',
    titleFr: "Atelier sur les droits des personnes handicapées",
    titleEn: "Workshop on disability rights in Goma & Sake",
    excerptFr: "Sensibilisation autour de la loi et de la résolution 2475.",
    excerptEn: "Awareness on legal rights and UN Resolution 2475."
  },

  {
    id: 4,
    img: hundred,
    date: '25 Nov – 10 Déc 2025',
    author: 'ADJC',
    catFr: 'Genre & Droits',
    catEn: 'Gender & Rights',
    titleFr: "Campagne contre le cyberharcèlement",
    titleEn: "Campaign against cyber harassment in schools",
    excerptFr: "Des centaines d’élèves mobilisés au Nord et Sud-Kivu.",
    excerptEn: "Hundreds of students mobilised across Kivu provinces."
  },

  {
    id: 5,
    img: participate,
    date: '2025',
    author: 'ADJC',
    catFr: 'Protection',
    catEn: 'Protection',
    titleFr: "Conférence sur la protection de l’enfant",
    titleEn: "Child protection training conference",
    excerptFr: "Renforcement des capacités pour la sécurité des enfants.",
    excerptEn: "Strengthening skills for child safety and protection."
  }
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