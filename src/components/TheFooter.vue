<template>
  <footer class="bg-navy-dark">

    <!-- Top wave divider -->
    <div class="h-1 bg-red w-full"></div>

    <div class="max-w-[1280px] mx-auto px-8 pt-16 pb-0">

      <!-- Main grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-14 border-b border-white/[.07]">

        <!-- Brand column -->
        <div>
          <!-- Logo -->
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 bg-red rounded-lg flex items-center justify-center flex-shrink-0">
              <span class="font-display font-bold text-white text-sm tracking-tight">ADJ</span>
            </div>
            <div>
              <div class="font-display font-bold text-white text-lg tracking-[2px] leading-none">ADJC</div>
              <div class="text-[.52rem] text-white/35 tracking-[1.5px] uppercase mt-0.5 font-body">{{ t('logoSub') }}
              </div>
            </div>
          </div>

          <p class="text-white/35 font-body text-sm leading-[1.85] max-w-[280px] mb-7">{{ t('ftTagline') }}</p>

          <!-- Newsletter -->
          <div>
            <p class="text-white/50 font-body text-[.6rem] tracking-[2px] uppercase mb-3">{{ t('ftNlLabel') }}</p>
            <div class="flex">
              <input type="email" :placeholder="t('ftNlPh')"
                class="flex-1 px-4 py-2.5 bg-white/[.06] border border-white/[.1] border-r-0 rounded-l-xl font-body text-sm text-white placeholder:text-white/25 outline-none focus:border-red/50 transition-colors duration-200" />
              <button
                class="px-4 py-2.5 bg-red hover:bg-red-dark text-white font-body text-xs font-semibold rounded-r-xl border-none cursor-pointer transition-colors duration-200">
                {{ t('ftNlBtn') }}
              </button>
            </div>
          </div>
        </div>

        <!-- Nav column -->
        <div>
          <h5 class="text-white font-body font-semibold text-[.62rem] tracking-[2.5px] uppercase mb-5">{{ t('ftNav') }}
          </h5>
          <ul class="flex flex-col gap-3 list-none">
            <li v-for="link in navLinks" :key="link.id">
              <button @click="go(link.id)"
                class="text-white/40 hover:text-white font-body text-sm bg-transparent border-none cursor-pointer transition-colors duration-200 flex items-center gap-2 p-0">
                <span class="w-3 h-[1.5px] bg-red/50 flex-shrink-0"></span>
                {{ t(link.label) }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Programs column -->
        <div>
          <h5 class="text-white font-body font-semibold text-[.62rem] tracking-[2.5px] uppercase mb-5">{{ t('ftProgs')
            }}</h5>
          <ul class="flex flex-col gap-3 list-none">
            <li v-for="prog in t('progs')" :key="prog.title">
              <a href="#"
                class="text-white/40 hover:text-white font-body text-sm no-underline transition-colors duration-200 flex items-center gap-2">
                <span class="w-3 h-[1.5px] bg-red/50 flex-shrink-0"></span>
                {{ prog.title }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social column -->
        <div>
          <h5 class="text-white font-body font-semibold text-[.62rem] tracking-[2.5px] uppercase mb-5">{{ t('ftConnect')
            }}</h5>
          <ul class="flex flex-col gap-3 list-none">
            <li v-for="soc in socials" :key="soc.name">
              <a href="#"
                class="text-white/40 hover:text-white font-body text-sm no-underline transition-colors duration-200 flex items-center gap-2">
                <span class="w-3 h-[1.5px] bg-red/50 flex-shrink-0"></span>
                {{ soc.name }}
              </a>
            </li>
          </ul>

          <!-- Social icon buttons -->
          <div class="flex gap-2 mt-6">
            <a v-for="soc in socials" :key="soc.icon" href="#"
              class="w-9 h-9 rounded-lg border border-white/[.1] flex items-center justify-center text-white/40 text-sm font-bold no-underline hover:bg-red hover:border-red hover:text-white transition-all duration-200">{{
              soc.icon }}</a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="py-5 flex flex-wrap items-center justify-between gap-4">
        <p class="text-white/25 font-body text-xs">{{ t('ftCopy') }}</p>
        <div class="flex items-center gap-6">
          <a href="#"
            class="text-white/25 hover:text-white/60 font-body text-xs no-underline transition-colors duration-200">{{
              t('ftPrivacy') }}</a>
          <a href="#"
            class="text-white/25 hover:text-white/60 font-body text-xs no-underline transition-colors duration-200">{{
              t('ftTerms') }}</a>
        </div>
        <!-- Made with -->
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-red animate-pulse"></span>
          <span class="text-white/20 font-body text-xs">adjcongo.org</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useTranslations } from '../composables/useTranslations.js'

const { t } = useTranslations()

const navLinks = [
  { id: 'about', label: 'navAbout' },
  { id: 'programs', label: 'navPrograms' },
  { id: 'impact', label: 'navImpact' },
  { id: 'team', label: 'navTeam' },
  { id: 'news', label: 'navNews' },
  { id: 'contact', label: 'navContact' },
]

const socials = [
  { name: 'Facebook', icon: 'f' },
  { name: 'X / Twitter', icon: '𝕏' },
  { name: 'LinkedIn', icon: 'in' },
  { name: 'YouTube', icon: '▶' },
]

function go(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
</script>
