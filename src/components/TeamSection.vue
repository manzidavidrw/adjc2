<template>
  <section id="team" class="bg-white py-28">
    <div class="max-w-[1280px] mx-auto px-8">
      <!-- Header -->
      <div class="flex flex-wrap items-end justify-between gap-6 mb-16 reveal">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
            <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ t('teamEye')
              }}</span>
          </div>
          <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size:clamp(2.2rem,3.5vw,3rem)">{{
            t('teamTitle') }}</h2>
        </div>
        <p class="text-navy/55 font-body font-light leading-[1.8] max-w-[360px] text-[.92rem]">{{ t('teamSub') }}</p>
      </div>

      <!-- Team grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(member, i) in t('team')" :key="i"
          class="team-card reveal rounded-2xl overflow-hidden cursor-pointer" :class="'d' + (i + 1)">
          <!-- Portrait area -->
          <div class="relative aspect-[3/4] flex items-end" :style="bgs[i]">
            <div class="absolute inset-0 grid-lines opacity-30"></div>
            <!-- Initials -->
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-white/10 leading-none select-none"
              style="font-size:5rem">
              {{ member.ini }}
            </div>
            <!-- Red accent bar -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-red"></div>
            <!-- Info overlay -->
            <div class="relative z-10 w-full p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <p class="font-display font-bold text-white text-lg leading-tight">{{ member.name }}</p>
              <p class="text-red font-body text-[.62rem] tracking-[1.5px] uppercase mt-0.5">{{ member.role }}</p>
              <!-- Bio slides up on hover -->
              <div class="team-overlay overflow-hidden">
                <p class="text-white/60 font-body text-[.72rem] leading-[1.6] pt-3">{{ member.bio }}</p>
              </div>
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

const bgs = [
  'background: linear-gradient(160deg, #1A3A0A, #2E6012)',
  'background: linear-gradient(160deg, #A81E1E, #1A3A0A)',
  'background: linear-gradient(160deg, #234D0E, #1A3A0A)',
  'background: linear-gradient(160deg, #D42B2B, #1A3A0A)',
]
</script>
