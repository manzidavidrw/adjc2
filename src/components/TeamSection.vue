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
          <div class="relative aspect-[3/4] flex items-end">

            <!-- Real photo — object-top keeps face visible -->
            <img :src="photos[i]" :alt="member.name" class="absolute inset-0 w-full h-full object-cover object-top" />

            <!-- Gradient so text is always readable -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

            <!-- Red accent bar -->
            <div class="absolute top-0 left-0 right-0 h-1 bg-red"></div>

            <!-- Name / role / bio -->
            <div class="relative z-10 w-full p-5">
              <p class="font-display font-bold text-white text-lg leading-tight">{{ member.name }}</p>
              <p class="text-red font-body text-[.62rem] tracking-[1.5px] uppercase mt-0.5">{{ member.role }}</p>
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

import nondo from '../assets/team/nondo.jpg'
import mugisha from '../assets/team/mugisha.jpg'
import atete from '../assets/team/atete.jpg'
import jolie from '../assets/team/jolie.jpg'

const { t } = useTranslations()

// Must match the order of the team array in useTranslations
const photos = [nondo, mugisha, atete, jolie]
</script>