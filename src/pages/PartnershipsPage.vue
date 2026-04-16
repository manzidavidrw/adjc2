<template>
  <div class="partnerships-page">
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
            {{ lang === 'fr' ? 'Partenariats Institutionnels' : 'Institutional Partnerships' }}
          </span>
        </div>

        <h1 class="font-display font-bold text-white leading-[1.08]" style="font-size:clamp(1.8rem,4vw,3rem)">
          {{ lang === 'fr' ? 'Devenez Notre Partenaire' : 'Become Our Partner' }}
        </h1>

        <p class="text-white/60 font-body font-light leading-[1.8] mt-6 max-w-[560px]">
          {{ lang === 'fr'
            ? 'Collaborez avec ADJC pour amplifier l\'impact de vos programmes et services auprès des jeunes congolais.'
            : 'Collaborate with ADJC to amplify the impact of your programs and services for Congolese youth.' }}
        </p>
      </div>
    </section>

    <!-- ═══ CONTENT ═══ -->
    <section class="bg-white py-20">
      <div class="max-w-[860px] mx-auto px-8">
        <!-- Partnership Types -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="border-2 border-navy/10 rounded-2xl p-8 hover:border-red/50 transition-colors duration-200">
            <div class="text-5xl mb-4">🤝</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Partenariat Stratégique' : 'Strategic Partnership' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-4">
              {{ lang === 'fr'
                ? 'Collaborez sur des initiatives communes pour maximiser l\'impact social.'
                : 'Collaborate on joint initiatives to maximize social impact.' }}
            </p>
            <button
              class="text-red hover:text-red-dark font-body font-semibold text-sm border-none bg-transparent cursor-pointer">
              {{ lang === 'fr' ? 'En Savoir Plus' : 'Learn More' }} →
            </button>
          </div>

          <div class="border-2 border-navy/10 rounded-2xl p-8 hover:border-red/50 transition-colors duration-200">
            <div class="text-5xl mb-4">🏢</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Partenariat Corporatif' : 'Corporate Partnership' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-4">
              {{ lang === 'fr'
                ? 'Impliquez vos employés et clients dans nos programmes de développement.'
                : 'Engage your employees and clients in our development programs.' }}
            </p>
            <button
              class="text-red hover:text-red-dark font-body font-semibold text-sm border-none bg-transparent cursor-pointer">
              {{ lang === 'fr' ? 'En Savoir Plus' : 'Learn More' }} →
            </button>
          </div>

          <div class="border-2 border-navy/10 rounded-2xl p-8 hover:border-red/50 transition-colors duration-200">
            <div class="text-5xl mb-4">🎓</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Partenariat Académique' : 'Academic Partnership' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-4">
              {{ lang === 'fr'
                ? 'Travaillez avec des universités et centres de recherche pour l\'apprentissage partagé.'
                : 'Work with universities and research centers for shared learning.' }}
            </p>
            <button
              class="text-red hover:text-red-dark font-body font-semibold text-sm border-none bg-transparent cursor-pointer">
              {{ lang === 'fr' ? 'En Savoir Plus' : 'Learn More' }} →
            </button>
          </div>

          <div class="border-2 border-navy/10 rounded-2xl p-8 hover:border-red/50 transition-colors duration-200">
            <div class="text-5xl mb-4">🌐</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Partenariat Technologique' : 'Technology Partnership' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-4">
              {{ lang === 'fr'
                ? 'Partagez votre expertise technologique pour renforcer nos capacités numériques.'
                : 'Share your tech expertise to strengthen our digital capabilities.' }}
            </p>
            <button
              class="text-red hover:text-red-dark font-body font-semibold text-sm border-none bg-transparent cursor-pointer">
              {{ lang === 'fr' ? 'En Savoir Plus' : 'Learn More' }} →
            </button>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-navy py-12 px-8 rounded-2xl text-white text-center">
          <h2 class="font-display font-bold text-2xl mb-4">
            {{ lang === 'fr' ? 'Prêt à Devenir Partenaire?' : 'Ready to Partner With Us?' }}
          </h2>
          <p class="font-body text-white/80 max-w-[600px] mx-auto mb-6">
            {{ lang === 'fr'
              ? 'Contactez-nous pour discuter des opportunités de partenariat adaptées à votre organisation.'
              : 'Contact us to discuss partnership opportunities tailored to your organization.' }}
          </p>
          <button @click="$emit('navigate', 'contact')"
            class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-8 py-3 rounded-xl border-none cursor-pointer transition-colors duration-200">
            {{ lang === 'fr' ? 'Nous Contacter' : 'Contact Us' }} →
          </button>
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
