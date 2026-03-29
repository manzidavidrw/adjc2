<template>
  <section id="news" class="bg-snow py-28">
    <div class="max-w-[1280px] mx-auto px-8">

      <!-- Header -->
      <div class="reveal flex flex-wrap items-end justify-between gap-6 mb-16">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
            <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ t('newsEye') }}</span>
          </div>
          <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size:clamp(2.2rem,3.5vw,3rem)">{{ t('newsTitle') }}</h2>
        </div>
        <button class="text-red font-body font-semibold text-sm border-none bg-transparent cursor-pointer hover:opacity-70 transition-opacity">
          {{ t('newsAll') }} →
        </button>
      </div>

      <!-- Grid: 1 featured + 2 side -->
      <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-6">
        <div
          v-for="(article, i) in t('news')" :key="i"
          class="news-card reveal rounded-2xl overflow-hidden bg-white shadow-navy-sm cursor-pointer"
          :class="'d' + (i + 1)"
        >
          <!-- Image -->
          <div
            class="relative overflow-hidden flex items-center justify-center"
            :class="i === 0 ? 'h-64' : 'h-48'"
            :style="{ background: article.bg }"
          >
            <div class="news-img-inner w-full h-full flex items-center justify-center text-5xl">{{ article.emoji }}</div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <!-- Category badge -->
            <div class="absolute bottom-4 left-4 bg-red text-white font-body font-semibold text-[.58rem] tracking-[2px] uppercase px-3 py-1 rounded-full">
              {{ article.cat }}
            </div>
          </div>
          <!-- Body -->
          <div class="p-6">
            <p class="text-navy/35 font-body text-[.62rem] tracking-[1px] uppercase mb-2">{{ article.date }}</p>
            <h3 class="font-display font-bold text-navy leading-tight mb-3"
                :class="i === 0 ? 'text-[1.35rem]' : 'text-[1.1rem]'">{{ article.title }}</h3>
            <p class="text-navy/55 font-body text-sm leading-[1.7]">{{ article.desc }}</p>
            <div class="flex items-center gap-2 mt-4 text-red font-body text-[.7rem] font-semibold tracking-wide uppercase">
              {{ t('readMore') }} →
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useTranslations } from '../composables/useTranslations.js'
const { t } = useTranslations()
</script>
