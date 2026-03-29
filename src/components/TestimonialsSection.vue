<template>
  <section class="bg-navy-dark py-24 relative overflow-hidden">
    <div class="absolute inset-0 grid-lines opacity-40"></div>
    <div class="relative max-w-[1280px] mx-auto px-8">
      <!-- Header -->
      <div class="reveal text-center mb-16">
        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
          <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ t('testEye') }}</span>
          <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
        </div>
        <h2 class="font-display font-bold text-white leading-[1.1]" style="font-size:clamp(2.2rem,3.5vw,3rem)">{{ t('testTitle') }}</h2>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in t('tests')" :key="i"
          class="test-card reveal bg-white/[.05] border border-white/[.08] rounded-2xl p-8 relative overflow-hidden"
          :class="'d' + (i + 1)"
        >
          <!-- Big quote mark -->
          <div class="absolute -top-2 -left-1 font-display text-[7rem] text-white/[.05] leading-none select-none">"</div>
          <!-- Stars -->
          <div class="flex gap-1 mb-5">
            <span v-for="s in 5" :key="s" class="text-red text-sm">★</span>
          </div>
          <!-- Quote -->
          <blockquote class="font-display italic text-white text-lg leading-[1.55] mb-6 relative z-10">
            "{{ item.q }}"
          </blockquote>
          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-red flex items-center justify-center font-display font-bold text-white text-sm flex-shrink-0">
              {{ item.ini }}
            </div>
            <div>
              <p class="text-white font-body font-semibold text-sm">{{ item.name }}</p>
              <p class="text-white/35 font-body text-[.65rem] tracking-wide">{{ item.loc }}</p>
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
