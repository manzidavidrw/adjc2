<template>
  <section id="partners" class="bg-white py-16">
    <div class="max-w-[1280px] mx-auto px-8">
      <!-- Header -->
      <div class="reveal max-w-[860px] mb-14">
        <div class="flex items-center gap-3 mb-5">
          <span class="w-8 h-[2px] bg-red flex-shrink-0"></span>
          <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">
            {{ lang === 'fr' ? 'Nos Partenaires' : 'Our Partners' }}
          </span>
        </div>
        <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size:clamp(2rem,3.2vw,2.8rem)">
          {{ lang === 'fr' ? 'Travaillant Ensemble pour le Changement' : 'Working Together for Change' }}
        </h2>
      </div>

      <p class="text-navy/45 font-body font-light text-sm leading-relaxed max-w-[500px] mb-12">
        {{ lang === 'fr'
          ? "Nous collaborons avec des organisations leaders pour amplifier notre impact et créer un avenir meilleur."
          : "We collaborate with leading organizations to amplify our impact and create a better future." }}
      </p>

      <!-- Logo Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        <a v-for="(partner, i) in partners" :key="i" :href="partner.url" target="_blank" rel="noopener noreferrer"
          :style="{ backgroundColor: partner.bg }"
          class="reveal group flex items-center justify-center p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-108 hover:-translate-y-1"
          :class="'d' + (i + 1)">
          <img :src="partner.logo" :alt="partner.name"
            class="h-24 opacity-100 transition-all duration-300 object-contain filter group-hover:brightness-110 drop-shadow-sm" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTranslations } from '../composables/useTranslations.js'
import { useReveal } from '../composables/useReveal.js'

import icanLogo from '../assets/logo/ican.svg'
import ipenLogo from '../assets/logo/ipen.png'
import ipbLogo from '../assets/logo/ipb.png'
import ochaLogo from '../assets/logo/ocha.svg'
import shareLogo from '../assets/logo/share.svg'
import inroadsLogo from '../assets/logo/inroads.png'

const { lang } = useTranslations()
useReveal()

const partners = [
  { name: 'ICAN', logo: icanLogo, url: 'https://www.icanw.org/', bg: '#FEF3E2' },
  { name: 'IPEN', logo: ipenLogo, url: 'https://www.ipen.org/', bg: '#E8F5E9' },
  { name: 'IPB', logo: ipbLogo, url: 'https://ipb.org/', bg: '#E3F2FD' },
  { name: 'OCHA', logo: ochaLogo, url: 'https://www.unocha.org/democratic-republic-congo', bg: '#F3E5F5' },
  { name: 'SHARE', logo: shareLogo, url: 'https://share-netinternational.org/', bg: '#E91E63' },
  { name: 'Make Inroads', logo: inroadsLogo, url: 'https://www.makeinroads.org/', bg: '#1976D2' },
]
</script>
