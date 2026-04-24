<template>
  <div class="blog-post-page">

    <!-- Loading State -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center bg-navy-dark">
      <div class="text-white font-body text-lg">
        {{ lang === 'fr' ? "Chargement de l'article..." : "Loading article..." }}
      </div>
    </div>

    <!-- ═══ HERO ═══ -->
    <section v-if="post && !loading"
      class="relative bg-navy-dark min-h-[50vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>

      <div class="absolute inset-0">
        <img :src="post.img" :alt="lang === 'fr' ? post.titleFr : post.titleEn" class="w-full h-full object-cover" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/30"></div>

      <div class="relative max-w-[860px] mx-auto px-8 pb-14 w-full">

        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-6">
          <button @click="$emit('navigate', 'home')" class="text-white/35 text-xs hover:text-white/70">
            {{ lang === 'fr' ? 'Accueil' : 'Home' }}
          </button>
          <span class="text-white/20 text-xs">›</span>
          <button @click="$emit('navigate', 'blognews')" class="text-white/35 text-xs hover:text-white/70">
            {{ lang === 'fr' ? 'Actualités & Blog' : 'Blog & News' }}
          </button>
          <span class="text-white/20 text-xs">›</span>
          <span class="text-red text-xs font-semibold truncate max-w-[200px]">
            {{ lang === 'fr' ? post.catFr : post.catEn }}
          </span>
        </div>

        <!-- Category -->
        <div class="mb-4">
          <span class="bg-red text-white text-[.6rem] tracking-[2px] uppercase px-3 py-1.5 rounded-full">
            {{ lang === 'fr' ? post.catFr : post.catEn }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-white font-bold leading-[1.08]" style="font-size:clamp(1.8rem,4vw,3rem)">
          {{ lang === 'fr' ? post.titleFr : post.titleEn }}
        </h1>

        <!-- Meta -->
        <div class="flex flex-wrap items-center gap-4 mt-6">
          <div class="flex items-center gap-2.5">
            <div
              class="w-9 h-9 rounded-full bg-navy/40 border-2 border-white/20 flex items-center justify-center text-white text-sm">
              {{ post.author ? post.author.charAt(0) : '?' }}
            </div>
            <div>
              <p class="text-white text-xs font-semibold">{{ post.author }}</p>
              <p class="text-white/40 text-[.62rem]">{{ post.role }}</p>
            </div>
          </div>

          <span class="text-white/20">·</span>
          <span class="text-white/50 text-xs">{{ post.date }}</span>
          <span class="text-white/20">·</span>
          <span class="text-white/50 text-xs">
            {{ post.readTime }} {{ lang === 'fr' ? 'min de lecture' : 'min read' }}
          </span>
        </div>
      </div>
    </section>

    <!-- ═══ ARTICLE BODY ═══ -->
    <section v-if="post && !loading" class="bg-white py-14">
      <div class="max-w-[860px] mx-auto px-8">

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-10 pb-8 border-b border-navy/[.08]">
          <span v-for="tag in (post.tags || [])" :key="tag"
            class="bg-navy/[.06] text-navy/60 text-[.62rem] font-semibold px-2.5 py-1 rounded-full">
            #{{ tag }}
          </span>
        </div>

        <!-- Lead -->
        <p class="text-navy/70 leading-[1.95] text-[1.05rem] mb-10 border-l-4 border-red pl-5 italic">
          {{ lang === 'fr' ? post.excerptFr : post.excerptEn }}
        </p>

        <!-- Body -->
        <article class="prose-adjc" v-html="lang === 'fr' ? post.bodyFr : post.bodyEn"></article>

        <!-- Image Mid -->
        <div v-if="post.imgMid" class="rounded-2xl overflow-hidden my-10 aspect-[3/2]">
          <img :src="post.imgMid" class="w-full h-full object-cover" />
        </div>

        <!-- Tags Bottom -->
        <div class="pt-8 border-t border-navy/[.08] flex flex-wrap gap-2 mb-10">
          <span class="text-navy/40 text-xs font-semibold mr-2">Tags:</span>
          <span v-for="tag in (post.tags || [])" :key="tag"
            class="bg-navy/[.06] hover:bg-red/10 hover:text-red text-navy/60 text-[.62rem] font-semibold px-2.5 py-1 rounded-full cursor-pointer"
            @click="$emit('navigate', 'blognews')">
            #{{ tag }}
          </span>
        </div>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4">
          <button @click="$emit('navigate', 'blognews')" class="bg-navy text-white px-6 py-3 rounded-xl">
            ← {{ lang === 'fr' ? 'Retour aux articles' : 'Back to articles' }}
          </button>

          <button @click="$emit('navigate', 'contact')" class="bg-red text-white px-6 py-3 rounded-xl">
            {{ lang === 'fr' ? 'Nous Contacter' : 'Contact Us' }} →
          </button>
        </div>
      </div>
    </section>

    <!-- ❗ ERROR STATE -->
    <div v-else-if="!post && !loading" class="min-h-screen flex items-center justify-center bg-navy-dark">
      <div class="text-center">
        <div class="text-6xl mb-4">📝</div>
        <h2 class="text-white text-xl font-bold mb-2">
          {{ lang === 'fr' ? 'Article non trouvé' : 'Article not found' }}
        </h2>
        <p class="text-white/60 mb-6">
          {{ lang === 'fr'
            ? "L'article que vous cherchez n'existe pas ou a été supprimé."
            : "The article you're looking for doesn't exist or has been removed." }}
        </p>
        <button @click="$emit('navigate', 'blognews')" class="bg-red text-white px-6 py-3 rounded-xl">
          {{ lang === 'fr' ? 'Retour aux articles' : 'Back to articles' }}
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'
import { useBlogPosts } from '../composables/useBlogPosts.js'

const props = defineProps({ postId: { type: Number, required: true } })
defineEmits(['navigate'])

const { lang } = useTranslations()
const { fetchPost } = useBlogPosts()

const post = ref(null)
const loading = ref(true)

onMounted(async () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  post.value = await fetchPost(props.postId)
  loading.value = false
})
</script>

<style scoped>
.prose-adjc :deep(h3) {
  font-weight: 700;
  color: var(--color-navy);
  font-size: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 0.6rem;
  padding-left: 0.75rem;
  border-left: 3px solid var(--color-red);
}

.prose-adjc :deep(p) {
  color: color-mix(in srgb, var(--color-navy) 65%, transparent);
  font-size: 0.96rem;
  line-height: 1.9;
  margin-bottom: 1.2rem;
}

.prose-adjc :deep(strong) {
  color: var(--color-navy);
  font-weight: 700;
}
</style>