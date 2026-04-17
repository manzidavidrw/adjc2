<template>
  <div class="sub-program-page">

    <!-- ═══ HERO ═══ -->
    <section class="relative bg-navy-dark min-h-[46vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>

      <div v-if="result"
        class="absolute right-0 bottom-0 font-display font-bold text-white/[.025] leading-none select-none pointer-events-none"
        style="font-size: 20vw">{{ result.program.ico }}</div>

      <div class="relative max-w-[1280px] mx-auto px-8 pb-14 w-full">
        <!-- Breadcrumb -->
        <div class="flex flex-wrap items-center gap-2 mb-6">
          <button @click="$emit('navigate', 'home')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">{{
              lang === 'fr' ? 'Accueil' : 'Home' }}</button>
          <span class="text-white/20 text-xs">›</span>
          <button @click="$emit('navigate', 'whatwedo')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">{{
              lang === 'fr' ? 'Ce Que Nous Faisons' : 'What We Do' }}</button>
          <template v-if="result">
            <span class="text-white/20 text-xs">›</span>
            <span class="text-white/35 font-body text-xs">
              {{ lang === 'fr' ? result.program.shortFr : result.program.shortEn }}
            </span>
            <span class="text-white/20 text-xs">›</span>
            <span class="text-red font-body text-xs font-semibold truncate max-w-[200px]">{{ currentArea.title }}</span>
          </template>
        </div>

        <!-- Title -->
        <template v-if="result">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">{{ result.program.ico }}</span>
            <span class="w-6 h-[2px] bg-red flex-shrink-0"></span>
            <span class="text-red font-body text-[.62rem] font-semibold tracking-[3px] uppercase">
              {{ lang === 'fr' ? result.program.shortFr : result.program.shortEn }}
            </span>
          </div>
          <h1 class="font-display font-bold text-white leading-[1.06]" style="font-size: clamp(2rem, 4vw, 3.8rem)">
            {{ currentArea.ico }} {{ currentArea.title }}
          </h1>
        </template>

        <!-- Not found -->
        <template v-else>
          <h1 class="font-display font-bold text-white text-4xl">
            {{ lang === 'fr' ? 'Programme introuvable' : 'Program Not Found' }}
          </h1>
        </template>
      </div>
    </section>

    <!-- ═══ ARTICLE BODY ═══ -->
    <section v-if="result" class="bg-white py-20">
      <div class="max-w-[860px] mx-auto px-8">

        <!-- Meta tags -->
        <div class="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-navy/[.08]">
          <span
            class="inline-flex items-center gap-2 bg-navy/[.06] text-navy font-body text-xs font-semibold px-3 py-1.5 rounded-full">
            <span>{{ result.program.ico }}</span>
            {{ lang === 'fr' ? result.program.shortFr : result.program.shortEn }}
          </span>
          <span
            class="inline-flex items-center gap-2 bg-red/10 text-red font-body text-xs font-semibold px-3 py-1.5 rounded-full">
            {{ lang === 'fr' ? `Domaine ${result.areaIndex + 1}` : `Focus Area ${result.areaIndex + 1}` }}
          </span>
          <span class="ml-auto text-navy/35 font-body text-xs">
            {{ lang === 'fr' ? 'Programme' : 'Program' }} {{ result.programIndex + 1 }} / 5
          </span>
        </div>

        <!-- Summary box -->
        <div class="bg-navy-mist rounded-2xl p-7 mb-12 border-l-4 border-red">
          <p class="text-navy/70 font-body font-light leading-[1.9] text-[.95rem]">{{ currentArea.desc }}</p>
        </div>

        <!-- Featured image from the front card -->
        <div class="mb-12 rounded-3xl overflow-hidden border border-navy/[.08] shadow-sm">
          <img :src="featuredImage" :alt="currentArea.title" class="w-full h-[420px] object-cover md:h-[520px]" />
        </div>

        <!-- Full article HTML -->
        <article class="prose-adjc max-w-none" v-html="currentArea.fullArticle"></article>

        <!-- Richer summary content -->
        <section v-if="extraContent" class="mt-12 prose-adjc max-w-none text-navy">
          <h2 class="text-2xl font-display font-bold mb-4">
            {{ extraContent.title }}
          </h2>
          <p class="mb-4">{{ extraContent.intro }}</p>
          <h3 class="text-lg font-semibold mb-3">{{ extraContent.highlightTitle }}</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>{{ extraContent.pointOne }}</li>
            <li>{{ extraContent.pointTwo }}</li>
            <li>{{ extraContent.pointThree }}</li>
          </ul>
          <p class="mt-6 text-[.95rem] leading-7">{{ extraContent.conclusion }}</p>
        </section>

        <!-- Sibling sub-programs -->
        <div class="mt-16 pt-10 border-t border-navy/[.08]">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-6 h-[2px] bg-red"></div>
            <span class="text-navy font-display font-semibold text-base">
              {{ lang === 'fr' ? 'Autres domaines de ce programme' : 'Other areas in this program' }}
            </span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button v-for="sibling in siblingAreas" :key="sibling.slug"
              @click="$emit('navigate', 'sub-program', { slug: sibling.slug })"
              class="flex items-center gap-3 p-4 rounded-xl border border-navy/[.08] hover:border-red/40 hover:bg-red/[.03] transition-all duration-200 text-left group cursor-pointer bg-white">
              <span class="text-xl">{{ sibling.ico }}</span>
              <span class="font-body text-navy/70 text-sm font-medium group-hover:text-navy transition-colors flex-1">
                {{ sibling.title }}
              </span>
              <span
                class="text-navy/25 group-hover:text-red transition-colors text-sm group-hover:translate-x-1 inline-block duration-200">→</span>
            </button>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="mt-12 flex flex-wrap gap-4">
          <button @click="$emit('navigate', 'whatwedo')"
            class="flex items-center gap-2 bg-navy text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer hover:-translate-y-0.5 hover:bg-navy/90 transition-all duration-200">
            ← {{ lang === 'fr' ? 'Retour aux programmes' : 'Back to programs' }}
          </button>
          <button @click="$emit('navigate', 'donate')"
            class="flex items-center gap-2 bg-red text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer hover:-translate-y-0.5 hover:bg-red-dark transition-all duration-200">
            {{ lang === 'fr' ? 'Soutenir ce programme' : 'Support this program' }} →
          </button>
        </div>
      </div>
    </section>

    <!-- Not found fallback -->
    <section v-else class="bg-white py-24 text-center">
      <p class="text-navy/50 font-body mb-6">
        {{ lang === 'fr' ? "Ce domaine n'existe pas." : 'This focus area does not exist.' }}
      </p>
      <button @click="$emit('navigate', 'whatwedo')"
        class="bg-red text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer">
        {{ lang === 'fr' ? '← Retour' : '← Go back' }}
      </button>
    </section>

  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'
import { findAreaBySlug } from '../data/programData.js'
import { getAreaPhoto } from '../data/areaPhotos.js'

// ── Props / emits ─────────────────────────────────────────────────────────────
const props = defineProps({
  slug: { type: String, required: true },
})
defineEmits(['navigate'])

// ── Composables ───────────────────────────────────────────────────────────────
const { lang } = useTranslations()

// ── Scroll to top on mount and whenever slug changes ─────────────────────────
onMounted(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
watch(() => props.slug, () => window.scrollTo({ top: 0, behavior: 'smooth' }))

// ── Derived data ──────────────────────────────────────────────────────────────

/** Full lookup result: { program, areaFr, areaEn, programIndex, areaIndex } */
const result = computed(() => findAreaBySlug(props.slug))

/** The area object for the active language */
const currentArea = computed(() => {
  if (!result.value) return null
  return lang.value === 'fr' ? result.value.areaFr : result.value.areaEn
})
const featuredImage = computed(() => getAreaPhoto(props.slug))

const extraContent = computed(() => {
  if (!currentArea.value) return null

  if (lang.value === 'fr') {
    return {
      title: `Approche approfondie pour ${currentArea.value.title}`,
      intro: `Ce domaine combine des actions concrètes, une mobilisation communautaire et un accompagnement personnalisé pour renforcer l'impact durable de nos projets. ${currentArea.value.desc}`,
      highlightTitle: `Actions clés dans ce domaine`,
      pointOne: `Co-construction de solutions avec les jeunes pour répondre aux défis locaux et améliorer leurs perspectives de vie.`,
      pointTwo: `Mobilisation des partenaires communautaires, institutions et services locaux pour renforcer la durabilité et l'accès aux ressources.`,
      pointThree: `Suivi continu des progrès, des retours des jeunes et de l'impact pour ajuster les interventions en temps réel.`,
      conclusion: `Chaque sous-programme met l'accent sur le passage à l'action, le renforcement des capacités des jeunes et la création d'un environnement où les droits, la santé et le bien-être des jeunes sont protégés et promus.`,
    }
  }

  return {
    title: `A deeper look at ${currentArea.value.title}`,
    intro: `This area combines practical action, community engagement and tailored support to strengthen long-term impact. ${currentArea.value.desc}`,
    highlightTitle: `Key actions in this area`,
    pointOne: `Co-designing solutions with young people to tackle local challenges and expand their opportunities.`,
    pointTwo: `Mobilizing community partners, institutions, and local services to improve sustainability and access.`,
    pointThree: `Tracking progress, youth feedback, and impact over time so interventions can adapt and deliver results.`,
    conclusion: `Each sub-program focuses on turning ideas into action, building youth capacity, and creating an environment where young people's rights, health, and wellbeing are protected and advanced.`,
  }
})

/** Sibling areas from the same program (excluding the current one) */
const siblingAreas = computed(() => {
  if (!result.value) return []
  const { program, areaIndex } = result.value
  const source = lang.value === 'fr' ? program.areasFr : program.areasEn
  return source.filter((_, i) => i !== areaIndex)
})
</script>

<style scoped>
/* Scoped rich-text styles for the v-html article block */
.prose-adjc :deep(h2) {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-navy);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: 1.15;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.prose-adjc :deep(h3) {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-navy);
  font-size: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 0.6rem;
  padding-left: 0.75rem;
  border-left: 3px solid var(--color-red);
}

.prose-adjc :deep(p) {
  color: color-mix(in srgb, var(--color-navy) 65%, transparent);
  font-size: 0.95rem;
  line-height: 1.9;
  margin-bottom: 1.25rem;
}

.prose-adjc :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 1rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.prose-adjc :deep(ul li) {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  color: color-mix(in srgb, var(--color-navy) 65%, transparent);
  font-size: 0.9rem;
  line-height: 1.75;
}

.prose-adjc :deep(ul li)::before {
  content: '▸';
  color: var(--color-red);
  flex-shrink: 0;
  margin-top: 0.1rem;
  font-size: 0.75rem;
}

/* ── Photo Gallery ───────────────────────────────────────────────────── */
.photo-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
}

.photo-featured {
  grid-column: 1;
  grid-row: 1 / 3;
  position: relative;
  overflow: hidden;
  height: 360px;
  background: color-mix(in srgb, var(--color-navy) 10%, transparent);
}

.photo-secondary-stack {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.photo-secondary {
  position: relative;
  overflow: hidden;
  height: 175px;
  background: color-mix(in srgb, var(--color-navy) 10%, transparent);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 55%);
  display: flex;
  align-items: flex-end;
  padding: 0.875rem 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-featured:hover .photo-overlay,
.photo-secondary:hover .photo-overlay {
  opacity: 1;
}

.photo-caption {
  font-family: var(--font-body, sans-serif);
  font-size: 0.72rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.4;
  letter-spacing: 0.01em;
}

/* Responsive: stack vertically on small screens */
@media (max-width: 580px) {
  .photo-gallery {
    grid-template-columns: 1fr;
  }

  .photo-featured {
    grid-column: 1;
    grid-row: 1;
    height: 220px;
  }

  .photo-secondary-stack {
    grid-column: 1;
    grid-row: 2;
    flex-direction: row;
  }

  .photo-secondary {
    flex: 1;
    height: 140px;
  }
}
</style>