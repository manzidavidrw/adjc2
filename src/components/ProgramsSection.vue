<template>
  <section id="programs" class="bg-navy-mist py-28">
    <div class="max-w-[1280px] mx-auto px-8">

      <!-- Header -->
      <div class="flex flex-wrap items-end justify-between gap-6 mb-16 reveal">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
            <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ t('progEye')
              }}</span>
          </div>
          <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size:clamp(2.2rem,3.5vw,3rem)">
            {{ t('progTitle') }}
          </h2>
        </div>
        <p class="text-navy/55 font-body font-light leading-[1.8] max-w-[380px] text-[.92rem]">{{ t('progSub') }}</p>
      </div>

      <!-- Programs grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(prog, i) in t('progs')" :key="i" class="prog-card reveal bg-white rounded-2xl p-8 cursor-pointer"
          :class="'d' + (i + 1)">
          <!-- Number -->
          <div class="font-display font-bold text-[3.5rem] text-navy/[.06] leading-none mb-5">{{
            String(i + 1).padStart(2,'0') }}</div>
          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
            :class="i % 2 === 0 ? 'bg-navy text-white' : 'bg-red text-white'">
            {{ prog.ico }}
          </div>
          <!-- Text -->
          <h3 class="font-display font-bold text-navy text-xl leading-tight mb-3">{{ prog.title }}</h3>
          <p class="text-navy/55 font-body text-sm leading-[1.75]">{{ prog.desc }}</p>
          <!-- Link -->
          <div class="flex items-center gap-2 mt-6 text-red font-body text-xs font-semibold tracking-wide uppercase">
            {{ t('readMore') }}
            <span
              class="w-5 h-5 rounded-full border border-red/30 flex items-center justify-center text-[.55rem]">→</span>
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
