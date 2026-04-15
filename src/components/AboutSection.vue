<template>
  <section id="about" class="bg-white py-10">
    <div class="max-w-[1100px] mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

        <!-- Visual side -->
        <div class="reveal-left relative flex justify-center">

          <div class="relative w-full max-w-[420px] aspect-[5/6] rounded-2xl overflow-hidden group">

            <img src="../assets/empower1.jpg" alt="About Image"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

            <div class="absolute inset-0 bg-navy/70"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-navy-light/40 to-navy-dark/80"></div>
            <div class="absolute inset-0 grid-lines opacity-30"></div>

            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="w-10 h-[3px] bg-red mb-3"></div>
              <blockquote class="font-display text-white text-xl font-semibold leading-[1.35] italic mb-2">
                {{ t('aboutQuote') }}
              </blockquote>
              <cite class="text-white/40 font-body text-xs tracking-[2px] uppercase not-italic">
                {{ t('aboutQuoteBy') }}
              </cite>
            </div>
          </div>

          <!-- Floating badge -->
          <div
            class="absolute -top-3 right-6 w-20 h-20 bg-red rounded-2xl flex flex-col items-center justify-center shadow-red-lg z-10">
            <span class="font-display font-bold text-white text-xl leading-none">5</span>
            <span class="text-white/70 font-body text-[.45rem] tracking-[1px] uppercase text-center leading-tight mt-1">
              {{ t('badge') }}
            </span>
          </div>

          <!-- Bottom card -->


        </div>

        <!-- Text side -->
        <div class="reveal-right">

          <div class="flex items-center gap-3 mb-3">
            <span class="w-6 h-[2px] bg-red flex-shrink-0"></span>
            <span class="text-red font-body text-[.6rem] font-semibold tracking-[3px] uppercase">
              {{ t('aboutEye') }}
            </span>
          </div>

          <h2 class="font-display font-bold text-navy leading-[1.1] mb-4" style="font-size:clamp(2rem,3vw,2.6rem)">
            {{ t('aboutTitle') }}
          </h2>

          <p class="text-navy/60 font-body font-light leading-[1.7] mb-3 text-sm">
            {{ t('aboutP1') }}
          </p>

          <p class="text-navy/60 font-body font-light leading-[1.7] mb-5 text-sm">
            {{ t('aboutP2') }}
          </p>

          <!-- Mission / Vision -->
          <div class="grid grid-cols-2 gap-2">
            <div class="bg-navy rounded-xl p-4 group hover:bg-navy-light transition-colors duration-300">
              <div class="w-6 h-[2px] bg-red mb-2"></div>
              <h4 class="font-display font-bold text-white text-base mb-1">
                {{ t('missionTitle') }}
              </h4>
              <p class="text-white/50 font-body text-xs leading-[1.6]">
                {{ t('missionText') }}
              </p>
            </div>

            <div
              class="bg-red-pale border border-red/15 rounded-xl p-4 group hover:border-red/40 transition-colors duration-300">
              <div class="w-6 h-[2px] bg-red mb-2"></div>
              <h4 class="font-display font-bold text-navy text-base mb-1">
                {{ t('visionTitle') }}
              </h4>
              <p class="text-navy/60 font-body text-xs leading-[1.6]">
                {{ t('visionText') }}
              </p>
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