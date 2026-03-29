<template>
  <section id="gallery" class="bg-navy py-28 relative overflow-hidden">
    <div class="absolute inset-0 grid-lines opacity-40"></div>

    <div class="relative max-w-[1280px] mx-auto px-8">
      <!-- Header -->
      <div class="reveal flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
            <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ t('galEye') }}</span>
          </div>
          <h2 class="font-display font-bold text-white leading-[1.1]" style="font-size:clamp(2.2rem,3.5vw,3rem)">{{ t('galTitle') }}</h2>
        </div>
        <button class="text-white/50 hover:text-white font-body font-semibold text-sm border-none bg-transparent cursor-pointer transition-colors duration-200">
          {{ t('galAll') }} →
        </button>
      </div>

      <!-- Asymmetric gallery -->
      <div class="grid gap-3" style="grid-template-columns:repeat(12,1fr); grid-template-rows:220px 220px;">
        <div
          v-for="(item, i) in t('gal')" :key="i"
          class="gal-item rounded-xl overflow-hidden relative cursor-pointer"
          :style="[
            'grid-column:span 5;grid-row:span 2',
            'grid-column:span 4',
            'grid-column:span 3',
            'grid-column:span 3',
            'grid-column:span 4'
          ][i]"
        >
          <div class="gal-img w-full h-full flex items-center justify-center text-5xl" :style="{ background: item.bg }">
            {{ item.ico }}
          </div>
          <div class="gal-overlay absolute inset-0 bg-red/70 flex items-center justify-center">
            <span class="text-white text-4xl font-light">+</span>
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
