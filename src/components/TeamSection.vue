<template>
  <section id="team" class="bg-slate-50 py-28">
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
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div v-for="(member, i) in t('team')" :key="i"
          class="reveal rounded-[2.5rem] overflow-hidden border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.09)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_110px_rgba(15,23,42,0.14)] group">

          <div class="relative h-[28rem] overflow-hidden bg-slate-950">
            <img :src="photos[i]" :alt="member.name"
              class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button type="button" @click.stop="toggleBio(i)"
                class="pointer-events-auto rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[1.2px] text-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white/20">
                {{ selectedBio === i ? t('closeBio') : t('viewBio') }}
              </button>
            </div>

            <div class="absolute inset-x-6 bottom-6 rounded-3xl p-5 backdrop-blur-xl">
              <p class="font-display font-semibold text-white text-xl leading-tight">{{ member.name }}</p>
              <p class="mt-2 text-red font-body text-[.72rem] uppercase tracking-[1.4px]">{{ member.role }}</p>
            </div>

            <div
              class="absolute inset-0 bg-slate-950/95 p-6 flex flex-col justify-center items-center text-center transition-all duration-500"
              :class="selectedBio === i ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">
              <p class="text-white/80 font-body text-sm leading-7 mb-6">{{ member.bio }}</p>
              <button type="button" @click.stop="toggleBio(i)"
                class="rounded-full bg-white text-navy font-semibold text-sm uppercase tracking-[1px] px-4 py-2 hover:bg-slate-200 transition-colors duration-200">
                {{ t('closeBio') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'

import nondo from '../assets/team/nondo.jpg'
import mugisha from '../assets/team/mugisha.jpg'
import atete from '../assets/team/atete.jpg'
import jolie from '../assets/team/jolie.jpg'

const { t } = useTranslations()
const selectedBio = ref(null)
function toggleBio(index) {
  selectedBio.value = selectedBio.value === index ? null : index
}

// Must match the order of the team array in useTranslations
const photos = [nondo, mugisha, atete, jolie]
</script>