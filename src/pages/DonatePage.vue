<template>
  <div class="donate-page">
    <!-- ═══ HERO ═══ -->
    <section class="relative bg-navy-dark min-h-[50vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>

      <div class="relative max-w-[860px] mx-auto px-8 pb-14 w-full">
        <div class="flex items-center gap-2 mb-6">
          <button @click="$emit('navigate', 'home')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">
            {{ lang === 'fr' ? 'Accueil' : 'Home' }}
          </button>
          <span class="text-white/20 text-xs">›</span>
          <span class="text-red font-body text-xs font-semibold">
            {{ lang === 'fr' ? 'Faire un Don' : 'Donate' }}
          </span>
        </div>

        <h1 class="font-display font-bold text-white leading-[1.08]" style="font-size:clamp(1.8rem,4vw,3rem)">
          {{ lang === 'fr' ? 'Soutenez Notre Mission' : 'Support Our Mission' }}
        </h1>

        <p class="text-white/60 font-body font-light leading-[1.8] mt-6 max-w-[560px]">
          {{ lang === 'fr'
            ? `Votre contribution aide les jeunes congolais à accéder à l\'éducation, la santé, la paix et un avenir
          digne.`
            : `Your contribution helps Congolese youth access education, health, peace and a dignified future.` }}
        </p>
      </div>
    </section>

    <!-- ═══ CONTENT ═══ -->
    <section class="bg-white py-20">
      <div class="max-w-[860px] mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Donation Option 1 -->
          <div class="bg-navy-mist rounded-2xl p-8 text-center">
            <div class="text-5xl mb-4">💳</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Don Unique' : 'One-Time Donation' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-6">
              {{ lang === 'fr'
                ? 'Effectuez un don ponctuel pour soutenir nos programmes.'
                : 'Make a one-time donation to support our programs.' }}
            </p>
            <button
              class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer transition-colors duration-200">
              {{ lang === 'fr' ? 'Donner Maintenant' : 'Donate Now' }}
            </button>
          </div>

          <!-- Donation Option 2 -->
          <div class="bg-navy-mist rounded-2xl p-8 text-center">
            <div class="text-5xl mb-4">🔄</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Don Mensuel' : 'Monthly Giving' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-6">
              {{ lang === 'fr'
                ? 'Devenez un supporter régulier et faites une différence durable.'
                : 'Become a regular supporter and make lasting impact.' }}
            </p>
            <button
              class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer transition-colors duration-200">
              {{ lang === 'fr' ? 'Souscrire' : 'Subscribe' }}
            </button>
          </div>

          <!-- Donation Option 3 -->
          <div class="bg-navy-mist rounded-2xl p-8 text-center">
            <div class="text-5xl mb-4">🎁</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Don en Honneur' : 'Tribute Gift' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-6">
              {{ lang === 'fr'
                ? 'Faites un don en l\'honneur d\'une personne spéciale.'
                : 'Make a gift in honor of someone special.' }}
            </p>
            <button
              class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer transition-colors duration-200">
              {{ lang === 'fr' ? 'Donner un Tribut' : 'Give a Tribute' }}
            </button>
          </div>
        </div>

        <!-- Impact Message -->
        <div class="bg-navy py-12 px-8 rounded-2xl text-white text-center">
          <h2 class="font-display font-bold text-2xl mb-4">
            {{ lang === 'fr' ? 'Votre Impact' : 'Your Impact' }}
          </h2>
          <p class="font-body text-white/80 max-w-[600px] mx-auto">
            {{ lang === 'fr'
              ? `100% de votre don soutient directement les jeunes congolais. Chaque contribution, grande ou petite, crée
            un changement positif.`
              : `100% of your donation directly supports Congolese youth. Every contribution, large or small, creates
            positive change.` }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useTranslations } from '../composables/useTranslations.js'

defineEmits(['navigate'])
const { lang } = useTranslations()
</script>
