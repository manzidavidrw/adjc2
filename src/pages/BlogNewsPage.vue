<template>
  <div class="blog-news-page">

    <!-- ═══ HERO CAROUSEL ═══ -->
    <section class="relative min-h-screen flex flex-col overflow-hidden pt-[104px]">

      <div class="relative flex-1">
        <div v-for="(post, i) in heroSlides" :key="post.id" :class="['absolute inset-0 transition-all duration-700 ease-in-out',
          i === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0']">

          <img :src="post.img" :alt="lang === 'fr' ? post.titleFr : post.titleEn"
            class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
          <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>

          <div class="relative h-full max-w-[1280px] mx-auto px-8 flex flex-col justify-end pb-28">
            <div class="flex items-center gap-2 mb-6">
              <button @click="$emit('navigate', 'home')"
                class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">
                {{ lang === 'fr' ? 'Accueil' : 'Home' }}
              </button>
              <span class="text-white/20 text-xs">›</span>
              <span class="text-red font-body text-xs font-semibold">
                {{ lang === 'fr' ? 'Actualités & Blog' : 'Blog & News' }}
              </span>
            </div>

            <div class="mb-4">
              <span
                class="bg-red text-white font-body font-semibold text-[.58rem] tracking-[2px] uppercase px-3 py-1.5 rounded-full">
                {{ lang === 'fr' ? post.catFr : post.catEn }}
              </span>
            </div>

            <div class="flex items-center gap-3 mb-3">
              <span class="w-8 h-[2px] bg-red flex-shrink-0"></span>
              <span class="text-white/50 font-body text-[.62rem] font-semibold tracking-[3px] uppercase">
                {{ post.date }} · {{ post.readTime }} {{ lang === 'fr' ? 'min' : 'min read' }}
              </span>
            </div>

            <h1 class="font-display font-bold text-white leading-[1.06] max-w-[720px] mb-5"
              style="font-size:clamp(2rem,4.5vw,4rem)">
              {{ lang === 'fr' ? post.titleFr : post.titleEn }}
            </h1>

            <p class="text-white/60 font-body font-light leading-[1.8] max-w-[560px] mb-8" style="font-size:.95rem">
              {{ lang === 'fr' ? post.excerptFr : post.excerptEn }}
            </p>

            <div class="flex flex-wrap items-center gap-4">
              <button @click="openPost(post)"
                class="inline-flex items-center gap-3 bg-red hover:bg-red-dark text-white font-body font-semibold text-sm tracking-wide px-7 py-3.5 rounded-xl border-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-red-lg">
                {{ lang === 'fr' ? 'Lire l\'article' : 'Read article' }}
                <span
                  class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[.6rem]">→</span>
              </button>
              <a href="#all-articles"
                class="inline-flex items-center gap-2 text-white/65 hover:text-white font-body font-medium text-sm tracking-wide px-6 py-3.5 rounded-xl border border-white/15 hover:border-white/35 bg-transparent cursor-pointer transition-all duration-300 no-underline"
                @click.prevent="scrollToArticles">
                {{ lang === 'fr' ? 'Voir tous les articles' : 'Get all stories' }} ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide controls -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button @click="prevSlide"
          class="w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red hover:border-red transition-all duration-200 cursor-pointer border-none">
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
            <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <div class="flex items-center gap-2">
          <button v-for="(_, i) in heroSlides" :key="i" @click="goToSlide(i)" :class="['transition-all duration-300 rounded-full border-none cursor-pointer',
            i === heroIndex ? 'w-8 h-2 bg-red' : 'w-2 h-2 bg-white/30 hover:bg-white/60']">
          </button>
        </div>
        <button @click="nextSlide"
          class="w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red hover:border-red transition-all duration-200 cursor-pointer border-none">
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
            <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <div class="absolute top-[120px] right-8 z-20 text-white/30 font-display font-bold text-sm">
        <span class="text-white text-lg">{{ String(heroIndex + 1).padStart(2, '0') }}</span>
        <span class="mx-1">/</span>
        <span>{{ String(heroSlides.length).padStart(2, '0') }}</span>
      </div>
    </section>

    <!-- ═══ ARTICLES GRID + SIDEBAR ═══ -->
    <section id="all-articles" class="bg-navy-mist py-12">
      <div class="max-w-[1280px] mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">

          <!-- Articles grid -->
          <div>
            <div class="flex items-center gap-3 mb-8">
              <span class="w-7 h-[2px] bg-red"></span>
              <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">
                {{ lang === 'fr' ? 'Tous les Articles' : 'All Articles' }}
              </span>
              <span class="ml-auto text-navy/40 font-body text-xs">{{ filteredPosts.length }} {{ lang === 'fr' ?
                'articles' : 'articles' }}</span>
            </div>

            <div v-if="loading" class="text-center py-16 text-navy/40 font-body text-sm">
              {{ lang === 'fr' ? 'Chargement des articles...' : 'Loading articles...' }}
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article v-for="post in filteredPosts" :key="post.id" @click="openPost(post)"
                class="bg-white rounded-2xl overflow-hidden border border-navy/[.06] hover:border-red/30 hover:-translate-y-1 hover:shadow-navy-sm transition-all duration-300 cursor-pointer group">
                <div class="relative h-48 overflow-hidden">
                  <img :src="post.img" :alt="lang === 'fr' ? post.titleFr : post.titleEn"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div class="absolute top-3 left-3">
                    <span
                      class="bg-red text-white font-body font-semibold text-[.55rem] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full">
                      {{ lang === 'fr' ? post.catFr : post.catEn }}
                    </span>
                  </div>
                  <div
                    class="absolute bottom-3 right-3 bg-black/40 text-white font-body text-[.6rem] px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {{ post.readTime }} min
                  </div>
                </div>
                <div class="p-5">
                  <p class="text-navy/35 font-body text-[.62rem] tracking-[1px] uppercase mb-2">{{ post.date }}</p>
                  <h3
                    class="font-display font-bold text-navy text-base leading-tight mb-2 group-hover:text-red transition-colors duration-200">
                    {{ lang === 'fr' ? post.titleFr : post.titleEn }}
                  </h3>
                  <p class="text-navy/55 font-body text-[.78rem] leading-[1.75] line-clamp-2 mb-4">
                    {{ lang === 'fr' ? post.excerptFr : post.excerptEn }}
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <div
                        class="w-6 h-6 rounded-full bg-navy/10 flex items-center justify-center text-xs font-bold text-navy">
                        {{ post.author.charAt(0) }}
                      </div>
                      <span class="font-body text-navy/50 text-[.65rem]">{{ post.author }}</span>
                    </div>
                    <span
                      class="text-red font-body text-[.65rem] font-semibold group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
                  </div>
                </div>
              </article>
            </div>

            <div v-if="!loading && filteredPosts.length === 0" class="text-center py-16">
              <div class="text-5xl mb-4">🔍</div>
              <p class="text-navy/40 font-body text-sm">
                {{ lang === 'fr' ? 'Aucun article dans cette catégorie.' : 'No articles in this category.' }}
              </p>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="flex flex-col gap-6">

            <div class="bg-white rounded-2xl p-5 border border-navy/[.06]">
              <h4 class="font-display font-bold text-navy text-base mb-4">
                {{ lang === 'fr' ? 'Rechercher' : 'Search' }}
              </h4>
              <div class="relative">
                <input v-model="searchQuery" type="text"
                  :placeholder="lang === 'fr' ? 'Chercher un article...' : 'Search articles...'"
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-2.5 font-body text-sm text-navy placeholder-navy/30 outline-none focus:border-red/50 transition-colors duration-200" />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-navy/30 text-sm">🔍</span>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-5 border border-navy/[.06]">
              <h4 class="font-display font-bold text-navy text-base mb-4">
                {{ lang === 'fr' ? 'Catégories' : 'Categories' }}
              </h4>
              <div class="flex flex-col gap-1">
                <button v-for="cat in categories" :key="cat.id" @click="activeCategory = cat.id"
                  :class="['flex items-center justify-between px-3 py-2.5 rounded-xl font-body text-sm transition-all duration-200 border-none cursor-pointer text-left',
                    activeCategory === cat.id ? 'bg-red text-white' : 'bg-transparent text-navy/60 hover:bg-navy/[.04] hover:text-navy']">
                  <span class="flex items-center gap-2">
                    <span>{{ cat.ico }}</span>
                    {{ lang === 'fr' ? cat.labelFr : cat.labelEn }}
                  </span>
                  <span :class="['text-[.65rem] font-semibold px-2 py-0.5 rounded-full',
                    activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-navy/[.06] text-navy/40']">
                    {{ postsByCategory(cat.id) }}
                  </span>
                </button>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-5 border border-navy/[.06]">
              <h4 class="font-display font-bold text-navy text-base mb-4">
                {{ lang === 'fr' ? 'Tags Populaires' : 'Popular Tags' }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <button v-for="tag in allTags" :key="tag" @click="searchQuery = tag"
                  class="bg-navy/[.05] hover:bg-red hover:text-white text-navy/60 font-body text-[.68rem] font-semibold px-3 py-1.5 rounded-full border-none cursor-pointer transition-all duration-200">
                  #{{ tag }}
                </button>
              </div>
            </div>

            <div class="bg-navy rounded-2xl p-5 relative overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-1 bg-red"></div>
              <div class="text-3xl mb-3">📬</div>
              <h4 class="font-display font-bold text-white text-base mb-2">Newsletter</h4>
              <p class="text-white/50 font-body text-xs leading-relaxed mb-4">
                {{ lang === 'fr'
                  ? "Recevez nos dernières actualités directement dans votre boîte mail."
                  : "Get our latest updates delivered straight to your inbox." }}
              </p>
              <input type="email" :placeholder="lang === 'fr' ? 'votre@email.com' : 'your@email.com'"
                class="w-full bg-white/[.08] border border-white/[.12] rounded-xl px-3 py-2 font-body text-xs text-white placeholder-white/30 outline-none focus:border-red/50 transition-colors duration-200 mb-3" />
              <button
                class="w-full bg-red hover:bg-red-dark text-white font-body font-semibold text-xs py-2.5 rounded-xl border-none cursor-pointer transition-colors duration-200">
                {{ lang === 'fr' ? "S'abonner" : 'Subscribe' }} →
              </button>
            </div>

          </aside>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'
import { useBlogPosts } from '../composables/useBlogPosts.js'

const emit = defineEmits(['navigate'])
const { lang } = useTranslations()
const { posts, loading, fetchPosts } = useBlogPosts()

const heroIndex = ref(0)
const searchQuery = ref('')
const activeCategory = ref('all')
const autoplayTimer = ref(null)

const heroSlides = computed(() => posts.value.slice(0, 4))

const categories = computed(() => {
  const categoryMap = new Map()
  posts.value.forEach((post) => {
    const id = post.category || 'other'
    if (!categoryMap.has(id)) {
      categoryMap.set(id, {
        id,
        ico: '📰',
        labelFr: post.catFr || post.category || 'Autre',
        labelEn: post.catEn || post.category || 'Other',
      })
    }
  })
  return [
    { id: 'all', ico: '📰', labelFr: 'Tous', labelEn: 'All' },
    ...categoryMap.values(),
  ]
})

const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    const matchesCategory =
      activeCategory.value === 'all' || post.category === activeCategory.value
    const query = searchQuery.value.trim().toLowerCase()
    if (!query) return matchesCategory

    const text = [
      post.titleFr,
      post.titleEn,
      post.excerptFr,
      post.excerptEn,
      post.author,
      post.catFr,
      post.catEn,
      ...(post.tags || []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return matchesCategory && text.includes(query)
  })
})

const allTags = computed(() => [
  ...new Set(posts.value.flatMap((post) => post.tags || [])),
])

function postsByCategory(categoryId) {
  if (categoryId === 'all') return posts.value.length
  return posts.value.filter((post) => post.category === categoryId).length
}

function openPost(post) {
  emit('navigate', 'blog-post', { postId: post.id })
}

function scrollToArticles() {
  document.getElementById('all-articles')?.scrollIntoView({ behavior: 'smooth' })
}

function goToSlide(index) {
  heroIndex.value = index
}

function prevSlide() {
  stopAutoplay()
  heroIndex.value = heroSlides.value.length
    ? (heroIndex.value - 1 + heroSlides.value.length) % heroSlides.value.length
    : 0
  startAutoplay()
}

function nextSlide() {
  stopAutoplay()
  heroIndex.value = heroSlides.value.length
    ? (heroIndex.value + 1) % heroSlides.value.length
    : 0
  startAutoplay()
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer.value = setInterval(() => {
    heroIndex.value = heroSlides.value.length
      ? (heroIndex.value + 1) % heroSlides.value.length
      : 0
  }, 8000)
}

function stopAutoplay() {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value)
    autoplayTimer.value = null
  }
}

onMounted(async () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  await fetchPosts()
  startAutoplay()
})
onUnmounted(() => stopAutoplay())
</script>