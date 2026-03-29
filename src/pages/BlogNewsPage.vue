<template>
  <div class="blog-news-page">

    <!-- ═══ HERO CAROUSEL ═══ -->
    <section class="relative min-h-screen flex flex-col overflow-hidden pt-[104px]">

      <!-- Slides -->
      <div class="relative flex-1">
        <div v-for="(post, i) in heroSlides" :key="post.id" :class="['absolute inset-0 transition-all duration-700 ease-in-out',
          i === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0']">

          <!-- Background image -->
          <img :src="post.img" :alt="lang === 'fr' ? post.titleFr : post.titleEn"
            class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>

          <!-- Red accent -->
          <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>

          <!-- Content -->
          <div class="relative h-full max-w-[1280px] mx-auto px-8 flex flex-col justify-end pb-28">

            <!-- Breadcrumb -->
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

            <!-- Category badge -->
            <div class="mb-4">
              <span
                class="bg-red text-white font-body font-semibold text-[.58rem] tracking-[2px] uppercase px-3 py-1.5 rounded-full">
                {{ lang === 'fr' ? post.catFr : post.catEn }}
              </span>
            </div>

            <!-- Slide label -->
            <div class="flex items-center gap-3 mb-3">
              <span class="w-8 h-[2px] bg-red flex-shrink-0"></span>
              <span class="text-white/50 font-body text-[.62rem] font-semibold tracking-[3px] uppercase">
                {{ post.date }} · {{ post.readTime }} {{ lang === 'fr' ? 'min' : 'min read' }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="font-display font-bold text-white leading-[1.06] max-w-[720px] mb-5"
              style="font-size:clamp(2rem,4.5vw,4rem)">
              {{ lang === 'fr' ? post.titleFr : post.titleEn }}
            </h1>

            <!-- Excerpt -->
            <p class="text-white/60 font-body font-light leading-[1.8] max-w-[560px] mb-8" style="font-size:.95rem">
              {{ lang === 'fr' ? post.excerptFr : post.excerptEn }}
            </p>

            <!-- Buttons row -->
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

      <!-- ── Slide controls ── -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <!-- Prev -->
        <button @click="prevSlide"
          class="w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red hover:border-red transition-all duration-200 cursor-pointer border-none">
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
            <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>

        <!-- Dots -->
        <div class="flex items-center gap-2">
          <button v-for="(_, i) in heroSlides" :key="i" @click="goToSlide(i)" :class="['transition-all duration-300 rounded-full border-none cursor-pointer',
            i === heroIndex
              ? 'w-8 h-2 bg-red'
              : 'w-2 h-2 bg-white/30 hover:bg-white/60']">
          </button>
        </div>

        <!-- Next -->
        <button @click="nextSlide"
          class="w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red hover:border-red transition-all duration-200 cursor-pointer border-none">
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
            <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <!-- Slide counter -->
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

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article v-for="post in filteredPosts" :key="post.id" @click="openPost(post)"
                class="bg-white rounded-2xl overflow-hidden border border-navy/[.06] hover:border-red/30 hover:-translate-y-1 hover:shadow-navy-sm transition-all duration-300 cursor-pointer group">
                <!-- Card image -->
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

                <!-- Card body -->
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

            <!-- Empty state -->
            <div v-if="filteredPosts.length === 0" class="text-center py-16">
              <div class="text-5xl mb-4">🔍</div>
              <p class="text-navy/40 font-body text-sm">
                {{ lang === 'fr' ? 'Aucun article dans cette catégorie.' : 'No articles in this category.' }}
              </p>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="flex flex-col gap-6">

            <!-- Search -->
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

            <!-- Categories -->
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

            <!-- Popular tags -->
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

            <!-- Newsletter CTA -->
            <div class="bg-navy rounded-2xl p-5 relative overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-1 bg-red"></div>
              <div class="text-3xl mb-3">📬</div>
              <h4 class="font-display font-bold text-white text-base mb-2">
                {{ lang === 'fr' ? 'Newsletter' : 'Newsletter' }}
              </h4>
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

const emit = defineEmits(['navigate'])
const { lang } = useTranslations()

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  startAutoplay()
})
onUnmounted(() => stopAutoplay())

// ── State ─────────────────────────────────────────────────────────────────────
const activeCategory = ref('all')
const searchQuery = ref('')

// ── Hero carousel ─────────────────────────────────────────────────────────────
const heroIndex = ref(0)
let autoplayTimer = null

function startAutoplay() {
  autoplayTimer = setInterval(() => {
    heroIndex.value = (heroIndex.value + 1) % 4
  }, 5000)
}
function stopAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer)
}
function nextSlide() {
  stopAutoplay()
  heroIndex.value = (heroIndex.value + 1) % 4
  startAutoplay()
}
function prevSlide() {
  stopAutoplay()
  heroIndex.value = (heroIndex.value - 1 + 4) % 4
  startAutoplay()
}
function goToSlide(i) {
  stopAutoplay()
  heroIndex.value = i
  startAutoplay()
}
function scrollToArticles() {
  const el = document.getElementById('all-articles')
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 96
  window.scrollTo({ top, behavior: 'smooth' })
}

function openPost(post) {
  emit('navigate', 'blog-post', { postId: post.id })
}

// ── Categories ────────────────────────────────────────────────────────────────
const categories = [
  { id: 'all', ico: '📋', labelFr: 'Tous', labelEn: 'All' },
  { id: 'news', ico: '📢', labelFr: 'Actualités', labelEn: 'News' },
  { id: 'blog', ico: '✍️', labelFr: 'Blog', labelEn: 'Blog' },
  { id: 'stories', ico: '🌟', labelFr: 'Témoignages', labelEn: 'Stories' },
  { id: 'programs', ico: '🚀', labelFr: 'Programmes', labelEn: 'Programs' },
  { id: 'events', ico: '📅', labelFr: 'Événements', labelEn: 'Events' },
]

function postsByCategory(id) {
  if (id === 'all') return posts.length
  return posts.filter(p => p.category === id).length
}

// ── Posts data ────────────────────────────────────────────────────────────────
const posts = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    category: 'news',
    emoji: '🌱',
    bg: 'linear-gradient(135deg,#1A3A0A,#2E6012)',
    date: '15 Mars 2026',
    readTime: 4,
    author: 'Jean-Pierre Kabila',
    role: 'Directeur Exécutif',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    catFr: 'Actualités', catEn: 'News',
    titleFr: 'Lancement du Programme National de Bourses 2026 pour 500 Jeunes',
    titleEn: '2026 National Scholarship Program Launched for 500 Youth',
    excerptFr: "L'ADJC annonce son programme le plus ambitieux à ce jour — 500 bourses distribuées dans toutes les provinces de la RDC pour l'année scolaire 2026-2027.",
    excerptEn: "ADJC announces its most ambitious program to date — 500 scholarships distributed across all provinces of the DRC for the 2026-2027 school year.",
    tags: ['bourses', 'éducation', 'RDC', 'jeunesse'],
    bodyFr: `<p>C'est avec une immense fierté que l'ADJC annonce le lancement de son Programme National de Bourses 2026. Cette initiative sans précédent permettra à <strong>500 jeunes congolais</strong> d'accéder à une éducation de qualité, indépendamment de leur situation économique.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Critères de sélection</h3>
<p>Les candidats seront évalués sur la base de leur excellence académique, leur engagement communautaire et leur situation socio-économique. Les dossiers sont ouverts jusqu'au 30 avril 2026.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Impact attendu</h3>
<p>Ce programme s'inscrit dans notre vision à long terme d'un Congo où chaque jeune talentueux, quelle que soit son origine, peut réaliser son plein potentiel. Avec 500 bénéficiaires directs et un effet multiplicateur sur leurs familles et communautés, nous estimons toucher plus de 2 500 personnes.</p>`,
    bodyEn: `<p>It is with immense pride that ADJC announces the launch of its 2026 National Scholarship Program. This unprecedented initiative will give <strong>500 young Congolese</strong> access to quality education, regardless of their economic situation.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Selection criteria</h3>
<p>Candidates will be assessed on academic excellence, community engagement, and socio-economic circumstances. Applications are open until April 30, 2026.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Expected impact</h3>
<p>This programme aligns with our long-term vision of a Congo where every talented young person, regardless of background, can reach their full potential. With 500 direct beneficiaries and a multiplier effect on their families and communities, we expect to reach over 2,500 people.</p>`,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    category: 'events',
    emoji: '🎤',
    bg: 'linear-gradient(135deg,#A81E1E,#D42B2B)',
    date: '8 Mars 2026',
    readTime: 3,
    author: 'Amina Kasongo',
    role: 'Communication',
    authorAvatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&q=80',
    catFr: 'Événements', catEn: 'Events',
    titleFr: 'Forum National de la Jeunesse — Kinshasa 2026 : Un Succès Retentissant',
    titleEn: 'National Youth Forum — Kinshasa 2026: A Resounding Success',
    excerptFr: "800 jeunes leaders réunis pour deux jours d'ateliers et d'échanges intenses sur l'avenir du Congo. Un moment historique pour la jeunesse congolaise.",
    excerptEn: "800 young leaders gathered for two days of intensive workshops and exchanges on the future of Congo. A historic moment for Congolese youth.",
    tags: ['forum', 'leadership', 'Kinshasa', 'jeunesse'],
    bodyFr: `<p>Le Forum National de la Jeunesse 2026 a réuni <strong>800 jeunes leaders</strong> venus des quatre coins de la République Démocratique du Congo. Pendant deux jours intenses, participants et intervenants ont débattu des grands enjeux qui façonneront l'avenir du pays.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Temps forts de l'événement</h3>
<p>Parmi les moments marquants : une table ronde sur la participation des jeunes dans les processus de paix, un atelier pratique sur l'entrepreneuriat numérique, et une session de plaidoyer devant des représentants du gouvernement.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Déclaration finale</h3>
<p>Le forum s'est conclu par l'adoption d'une déclaration commune appelant à une plus grande inclusion des jeunes dans les décisions politiques locales et nationales.</p>`,
    bodyEn: `<p>The 2026 National Youth Forum brought together <strong>800 young leaders</strong> from every corner of the Democratic Republic of Congo. Over two intense days, participants and speakers debated the major issues that will shape the country's future.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Event highlights</h3>
<p>Key moments included a roundtable on youth participation in peace processes, a practical workshop on digital entrepreneurship, and an advocacy session before government representatives.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Final declaration</h3>
<p>The forum concluded with the adoption of a joint declaration calling for greater inclusion of young people in local and national political decisions.</p>`,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80',
    category: 'news',
    emoji: '🤝',
    bg: 'linear-gradient(135deg,#1A3A0A,#2E6012)',
    date: '22 Fév 2026',
    readTime: 3,
    author: 'Jean-Pierre Kabila',
    role: 'Directeur Exécutif',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    catFr: 'Actualités', catEn: 'News',
    titleFr: 'Nouveau Partenariat avec l\'Union Européenne pour l\'Emploi Jeune',
    titleEn: 'New EU Partnership for Youth Employment',
    excerptFr: "Un financement sur 3 ans signé avec l'UE pour accélérer la création d'emplois durables pour les jeunes en RDC. Un tournant majeur pour nos programmes d'entrepreneuriat.",
    excerptEn: "A 3-year funding agreement signed with the EU to accelerate the creation of sustainable jobs for youth in the DRC. A major turning point for our entrepreneurship programmes.",
    tags: ['partenariat', 'UE', 'emploi', 'entrepreneuriat'],
    bodyFr: `<p>L'ADJC a officiellement signé un accord de partenariat avec la délégation de l'Union Européenne en RDC. Ce financement triennal représente un investissement de <strong>2,4 millions d'euros</strong> dans l'entrepreneuriat jeune et la création d'emplois durables.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Objectifs du programme</h3>
<p>Sur trois ans, ce partenariat permettra de former 1 200 jeunes entrepreneurs, de financer 300 start-ups et coopératives, et de créer un accès au marché pour les jeunes producteurs ruraux.</p>`,
    bodyEn: `<p>ADJC officially signed a partnership agreement with the EU Delegation in the DRC. This three-year funding represents an investment of <strong>€2.4 million</strong> in youth entrepreneurship and sustainable job creation.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Programme objectives</h3>
<p>Over three years, this partnership will train 1,200 young entrepreneurs, fund 300 start-ups and cooperatives, and create market access for young rural producers.</p>`,
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1200&q=80',
    category: 'stories',
    emoji: '💪',
    bg: 'linear-gradient(135deg,#234D0E,#1A3A0A)',
    date: '10 Fév 2026',
    readTime: 5,
    author: 'Marie-Cé Nzuzi',
    role: 'Dir. Programmes',
    authorAvatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=80&q=80',
    catFr: 'Témoignages', catEn: 'Stories',
    titleFr: 'Bénédicte, de Bénéficiaire à Entrepreneuse : Son Parcours Inspirant',
    titleEn: 'Bénédicte, from Beneficiary to Entrepreneur: Her Inspiring Journey',
    excerptFr: "À 24 ans, Bénédicte dirige aujourd'hui une PME de transformation alimentaire à Kinshasa qui emploie 12 personnes. Tout a commencé avec une bourse ADJC en 2022.",
    excerptEn: "At 24, Bénédicte now runs a food processing SME in Kinshasa employing 12 people. It all started with an ADJC scholarship in 2022.",
    tags: ['témoignage', 'entrepreneuriat', 'femmes', 'Kinshasa'],
    bodyFr: `<p>En 2022, Bénédicte Mukendi était une étudiante brillante mais sans ressources, contrainte d'interrompre ses études faute de moyens. Aujourd'hui, à 24 ans, elle dirige <strong>Saveurs du Congo</strong>, une PME de transformation alimentaire qui emploie 12 personnes à Kinshasa.</p>
<p>"Quand j'ai reçu ma bourse ADJC, c'était bien plus qu'une aide financière. C'était la confirmation que quelqu'un croyait en moi," confie-t-elle.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">De la bourse à l'entrepreneuriat</h3>
<p>Après ses études en gestion, Bénédicte a intégré le programme d'entrepreneuriat de l'ADJC. Avec un micro-financement de 2 500$, elle a lancé sa première ligne de produits dérivés du manioc, aujourd'hui distribuée dans 3 supermarchés de la capitale.</p>`,
    bodyEn: `<p>In 2022, Bénédicte Mukendi was a brilliant but financially struggling student, forced to interrupt her studies. Today, at 24, she runs <strong>Saveurs du Congo</strong>, a food processing SME employing 12 people in Kinshasa.</p>
<p>"When I received my ADJC scholarship, it was much more than financial support. It was confirmation that someone believed in me," she says.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">From scholarship to entrepreneurship</h3>
<p>After studying business management, Bénédicte joined ADJC's entrepreneurship programme. With a $2,500 micro-grant, she launched her first line of cassava-based products, now distributed in 3 Kinshasa supermarkets.</p>`,
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80',
    category: 'blog',
    emoji: '☮️',
    bg: 'linear-gradient(135deg,#0A2A3A,#0E3D52)',
    date: '28 Jan 2026',
    readTime: 6,
    author: 'Patrick Lumumba',
    role: 'Responsable Terrain',
    authorAvatar: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=80&q=80',
    catFr: 'Blog', catEn: 'Blog',
    titleFr: 'Jeunes Médiateurs de Paix : Leçons du Terrain à Minembwe',
    titleEn: 'Young Peace Mediators: Lessons from the Field in Minembwe',
    excerptFr: "Après 18 mois de formation, nos jeunes médiateurs de paix ont résolu 47 conflits communautaires à Minembwe. Voici ce que nous avons appris.",
    excerptEn: "After 18 months of training, our young peace mediators have resolved 47 community conflicts in Minembwe. Here's what we learned.",
    tags: ['paix', 'Minembwe', 'médiation', 'terrain'],
    bodyFr: `<p>Le territoire de Minembwe, au Sud-Kivu, est l'un des contextes les plus complexes dans lesquels nous intervenons. Depuis 2024, notre programme de médiation communautaire a formé <strong>32 jeunes médiateurs</strong> — hommes et femmes — issus de différentes communautés ethniques.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Ce que nous avons appris</h3>
<p>La clé du succès réside dans la légitimité des médiateurs auprès de leurs communautés. Les jeunes qui réussissent le mieux sont ceux qui combinent une formation technique solide avec une profonde connaissance des dynamiques locales et un respect sincère pour les anciens.</p>
<p>Sur 47 conflits traités, 41 ont abouti à une résolution durable — un taux de succès de 87% qui dépasse largement nos attentes initiales.</p>`,
    bodyEn: `<p>The Minembwe territory in South Kivu is one of the most complex contexts in which we operate. Since 2024, our community mediation programme has trained <strong>32 young mediators</strong> — men and women — from different ethnic communities.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">What we learned</h3>
<p>The key to success lies in the legitimacy of mediators within their communities. The young people who succeed best are those who combine solid technical training with deep knowledge of local dynamics and genuine respect for elders.</p>
<p>Of 47 conflicts handled, 41 resulted in a lasting resolution — an 87% success rate that far exceeds our initial expectations.</p>`,
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=80',
    category: 'programs',
    emoji: '🌿',
    bg: 'linear-gradient(135deg,#1A3A0A,#2E5010)',
    date: '15 Jan 2026',
    readTime: 4,
    author: 'Marie-Cé Nzuzi',
    role: 'Dir. Programmes',
    authorAvatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=80&q=80',
    catFr: 'Programmes', catEn: 'Programs',
    titleFr: '5 000 Arbres Plantés : Notre Bilan Environnemental 2025',
    titleEn: '5,000 Trees Planted: Our 2025 Environmental Report',
    excerptFr: "En 2025, nos jeunes ambassadeurs climatiques ont planté 5 000 arbres dans 8 communautés rurales. Un bilan environnemental qui dépasse tous nos objectifs.",
    excerptEn: "In 2025, our young climate ambassadors planted 5,000 trees across 8 rural communities. An environmental report that exceeds all our targets.",
    tags: ['climat', 'arbres', 'environnement', '2025'],
    bodyFr: `<p>L'année 2025 a marqué un tournant dans notre programme de résilience climatique. Grâce à l'engagement de <strong>180 jeunes ambassadeurs climatiques</strong>, l'ADJC a planté 5 000 arbres dans 8 communautés rurales du territoire de Minembwe.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Espèces plantées</h3>
<p>Notre approche agroforestière privilégie les espèces locales : eucalyptus, moringa, caféier arabica et bananier. Ce choix garantit non seulement la survie des plants mais aussi des bénéfices économiques directs pour les communautés.</p>`,
    bodyEn: `<p>The year 2025 marked a turning point in our climate resilience programme. Thanks to the commitment of <strong>180 young climate ambassadors</strong>, ADJC planted 5,000 trees across 8 rural communities in the Minembwe territory.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Species planted</h3>
<p>Our agroforestry approach favours local species: eucalyptus, moringa, arabica coffee and banana trees. This choice ensures not only plant survival but also direct economic benefits for communities.</p>`,
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
    category: 'blog',
    emoji: '🔬',
    bg: 'linear-gradient(135deg,#2A1A3A,#3D0E52)',
    date: '5 Jan 2026',
    readTime: 7,
    author: 'Jean-Pierre Kabila',
    role: 'Directeur Exécutif',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    catFr: 'Blog', catEn: 'Blog',
    titleFr: 'Le Modèle UPG : Comment Nous Mesurons Notre Impact',
    titleEn: 'The UPG Model: How We Measure Our Impact',
    excerptFr: "Notre modèle Unité-Participation-Gouvernance est au cœur de toutes nos interventions. Voici comment il nous permet de mesurer un changement réel et durable.",
    excerptEn: "Our Unity-Participation-Governance model is at the heart of all our interventions. Here's how it lets us measure real, lasting change.",
    tags: ['UPG', 'impact', 'recherche', 'méthodologie'],
    bodyFr: `<p>Depuis la fondation de l'ADJC en 2010, nous avons développé et affiné notre propre cadre d'évaluation de l'impact : le <strong>Modèle UPG</strong> (Unité – Participation – Gouvernance). Ce modèle reconnaît que le changement durable ne peut advenir que lorsque trois conditions sont réunies.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Les trois piliers</h3>
<p><strong>Unité :</strong> Les communautés doivent être unies autour d'objectifs communs. Nous mesurons cela par des indicateurs de cohésion sociale et de réduction des conflits.</p>
<p><strong>Participation :</strong> Les jeunes doivent être acteurs, pas seulement bénéficiaires. Notre taux de participation active est actuellement de 78%.</p>
<p><strong>Gouvernance :</strong> Les changements doivent être intégrés dans les structures locales de gouvernance pour être durables.</p>`,
    bodyEn: `<p>Since ADJC's founding in 2010, we have developed and refined our own impact evaluation framework: the <strong>UPG Model</strong> (Unity – Participation – Governance). This model recognises that lasting change can only occur when three conditions are met.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">The three pillars</h3>
<p><strong>Unity:</strong> Communities must be united around shared objectives. We measure this through social cohesion and conflict reduction indicators.</p>
<p><strong>Participation:</strong> Young people must be actors, not merely beneficiaries. Our active participation rate currently stands at 78%.</p>
<p><strong>Governance:</strong> Changes must be integrated into local governance structures to be sustainable.</p>`,
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    category: 'stories',
    emoji: '🛡️',
    bg: 'linear-gradient(135deg,#3A1A0A,#5C2E0E)',
    date: '20 Déc 2025',
    readTime: 4,
    author: 'Amina Kasongo',
    role: 'Communication',
    authorAvatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&q=80',
    catFr: 'Témoignages', catEn: 'Stories',
    titleFr: 'Fatuma : Comment l\'ADJC a Changé Ma Vision du Leadership',
    titleEn: 'Fatuma: How ADJC Changed My Vision of Leadership',
    excerptFr: "Ancienne bénéficiaire du programme SSRD à Goma, Fatuma est aujourd'hui coordinatrice d'un réseau de 200 femmes leaders dans sa province.",
    excerptEn: "Former SRHR programme beneficiary in Goma, Fatuma now coordinates a network of 200 women leaders in her province.",
    tags: ['genre', 'leadership', 'Goma', 'femmes'],
    bodyFr: `<p>Fatuma Samba avait 19 ans quand elle a rejoint les ateliers SSRD de l'ADJC à Goma en 2021. Cinq ans plus tard, elle coordonne un réseau de <strong>200 femmes leaders</strong> dans le Nord-Kivu et représente sa province lors de forums nationaux.</p>
<p>"L'ADJC ne m'a pas seulement appris mes droits. Elle m'a appris à les défendre — et à aider d'autres femmes à faire de même," dit-elle avec conviction.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">Un réseau qui grandit</h3>
<p>Le réseau qu'elle a fondé, "Femmes Debout Nord-Kivu", organise chaque mois des sessions de sensibilisation sur les droits des femmes et la prévention des violences basées sur le genre dans 15 localités.</p>`,
    bodyEn: `<p>Fatuma Samba was 19 when she joined ADJC's SRHR workshops in Goma in 2021. Five years later, she coordinates a network of <strong>200 women leaders</strong> in North Kivu and represents her province at national forums.</p>
<p>"ADJC didn't just teach me my rights. It taught me to defend them — and to help other women do the same," she says with conviction.</p>
<h3 style="font-family:var(--font-display);font-weight:700;color:var(--color-navy);font-size:1.1rem;margin:1.5rem 0 0.5rem;padding-left:0.75rem;border-left:3px solid var(--color-red)">A growing network</h3>
<p>The network she founded, "Femmes Debout Nord-Kivu", organises monthly awareness sessions on women's rights and GBV prevention across 15 localities.</p>`,
  },
]

// Hero carousel uses first 4 posts
const heroSlides = posts.slice(0, 4)

// ── Computed ──────────────────────────────────────────────────────────────────
const filteredPosts = computed(() => {
  let result = [...posts] // show all posts in grid
  if (activeCategory.value !== 'all') {
    result = result.filter(p => p.category === activeCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(p =>
      (p.titleFr + p.titleEn + p.excerptFr + p.excerptEn + p.tags.join(' ')).toLowerCase().includes(q)
    )
  }
  return result
})

const allTags = computed(() => {
  const tags = new Set()
  posts.forEach(p => p.tags.forEach(t => tags.add(t)))
  return [...tags]
})
</script>