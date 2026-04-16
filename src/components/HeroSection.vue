<template>
  <section id="home" class="relative min-h-screen bg-navy-dark overflow-hidden">

    <!-- Slides — fills entire viewport, navbar overlays on top -->
    <div class="absolute inset-0">
      <div v-for="(post, i) in slides" :key="post.id" :class="['absolute inset-0 transition-all duration-700 ease-in-out',
        i === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0']">

        <!-- Real background image -->
        <div v-if="post.img" class="absolute inset-0">
          <img :src="post.img" :alt="lang === 'fr' ? post.titleFr : post.titleEn"
            class="absolute inset-0 w-full h-full object-cover object-center"
            style="filter: none; image-rendering: crisp-edges;" />
        </div>
        <div v-else class="absolute inset-0 bg-gradient-to-br from-navy-dark via-red/20 to-navy-dark">
          <!-- Default background with ADJC branding -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white/10">
              <div class="text-8xl font-display font-bold mb-4">ADJC</div>
              <div class="text-2xl font-body">Association pour les Droits des Jeunes au Congo</div>
            </div>
          </div>
        </div>
        <!-- Overlays -->
        <<div class="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent">
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
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
          <button v-if="post.id !== 'default'" @click="goToPost(post)"
            class="inline-flex items-center gap-3 bg-red hover:bg-red-dark text-white font-body font-semibold text-sm tracking-wide px-7 py-3.5 rounded-xl border-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-red-lg">
            {{ lang === 'fr' ? "Lire l'article" : 'Read article' }}
            <span
              class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[.6rem]">→</span>
          </button>
          <button v-else @click="goToBlog"
            class="inline-flex items-center gap-3 bg-red hover:bg-red-dark text-white font-body font-semibold text-sm tracking-wide px-7 py-3.5 rounded-xl border-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-red-lg">
            {{ lang === 'fr' ? "Voir nos actualités" : 'View our news' }}
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTranslations } from '@/composables/useTranslations.js'
import { useBlogPosts } from '../composables/useBlogPosts.js'

const { t, lang } = useTranslations()
const emit = defineEmits(['navigate'])
const { posts, loading, fetchPosts } = useBlogPosts()

const slides = computed(() => {
  const blogSlides = posts.value
    .filter(post => post.img) // Only show posts that have images
    .slice(0, 5)
    .map(post => ({
      id: post.id,
      img: post.img,
      date: post.date,
      author: post.author,
      catFr: post.catFr,
      catEn: post.catEn,
      titleFr: post.titleFr,
      titleEn: post.titleEn,
      excerptFr: post.excerptFr,
      excerptEn: post.excerptEn,
      readTime: post.readTime
    }))

  // If no blog posts with images, show a default slide
  if (blogSlides.length === 0) {
    return [{
      id: 'default',
      img: null, // Will use CSS background
      date: '',
      author: 'ADJC',
      catFr: 'Bienvenue',
      catEn: 'Welcome',
      titleFr: 'Association pour les Droits des Jeunes au Congo',
      titleEn: 'Association for Youth Rights in Congo',
      excerptFr: 'Découvrez nos initiatives et programmes pour l\'émancipation des jeunes congolais.',
      excerptEn: 'Discover our initiatives and programs for the empowerment of Congolese youth.',
      readTime: 0
    }]
  }

  return blogSlides
})

const activeSlide = ref(0)
let timer = null

function startAutoplay() {
  timer = setInterval(() => { activeSlide.value = (activeSlide.value + 1) % slides.value.length }, 5000)
}
function stopAutoplay() { if (timer) clearInterval(timer) }
function nextSlide() { stopAutoplay(); activeSlide.value = (activeSlide.value + 1) % slides.value.length; startAutoplay() }
function prevSlide() { stopAutoplay(); activeSlide.value = (activeSlide.value - 1 + slides.value.length) % slides.value.length; startAutoplay() }
function goToSlide(i) { stopAutoplay(); activeSlide.value = i; startAutoplay() }
function goToPost(post) { emit('navigate', 'blog-post', { postId: post.id }) }
function goToBlog() { emit('navigate', 'blognews') }

onMounted(async () => {
  await fetchPosts()
  if (slides.value.length > 0) {
    startAutoplay()
  }
})
onUnmounted(stopAutoplay)
</script>