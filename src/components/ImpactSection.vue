<template>
  <section id="impact" class="bg-navy py-28 relative overflow-hidden">
    <!-- bg decoration -->
    <div class="absolute inset-0 grid-lines opacity-60"></div>
    <div class="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red/[.06] blur-3xl pointer-events-none"></div>

    <div class="relative max-w-[1280px] mx-auto px-8">
      <!-- Top -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div class="reveal-left">
          <div class="flex items-center gap-3 mb-5">
            <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
            <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ t('impEye') }}</span>
          </div>
          <h2 class="font-display font-bold text-white leading-[1.1]" style="font-size:clamp(2.2rem,3.5vw,3rem)">
            {{ t('impTitle') }}
          </h2>
        </div>
        <div class="reveal-right">
          <p class="text-white/45 font-body font-light leading-[1.85] mb-8 text-[.95rem]">{{ t('impSub') }}</p>
          <button
            @click="go('donate')"
            class="inline-flex items-center gap-3 bg-red hover:bg-red-dark text-white font-body font-semibold text-sm tracking-wide px-7 py-3.5 rounded-xl border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-red-lg"
          >{{ t('impCta') }} →</button>
        </div>
      </div>

      <!-- Stats grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(item, i) in t('imps')" :key="i"
          class="stat-card reveal bg-white/[.05] border border-white/[.07] rounded-2xl px-7 py-8 text-center group cursor-default"
          :class="'d' + (i + 1)"
        >
          <div class="font-display font-bold text-white leading-none mb-2 group-hover:text-red transition-colors duration-300" style="font-size:2.6rem">
            {{ item.n }}
          </div>
          <div class="text-white/35 font-body text-[.62rem] tracking-[1.5px] uppercase">{{ item.l }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTranslations } from '../composables/useTranslations.js'
const { t } = useTranslations()
function go(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
</script>
