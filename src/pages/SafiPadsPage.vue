<template>
  <div class="safi-pads-page">

    <!-- ═══ HERO ═══ -->
    <section class="relative bg-navy-dark min-h-[52vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>
      <div
        class="absolute right-0 bottom-0 font-display font-bold text-white/[.025] leading-none select-none pointer-events-none"
        style="font-size: 22vw">🌸</div>

      <div class="relative max-w-[1280px] mx-auto px-8 pb-16 w-full">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-6">
          <button @click="$emit('navigate', 'home')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">
            {{ lang === 'fr' ? 'Accueil' : 'Home' }}
          </button>
          <span class="text-white/20 text-xs">›</span>
          <span class="text-red font-body text-xs font-semibold">Safi Pads</span>
        </div>

        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-[2px] bg-red flex-shrink-0"></span>
          <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">
            {{ lang === 'fr' ? 'Initiative ADJC' : 'ADJC Initiative' }}
          </span>
        </div>

        <h1 class="font-display font-bold text-white leading-[1.06]" style="font-size: clamp(2.8rem, 5vw, 4.5rem)">
          Safi <em class="not-italic text-red">Pads</em>
        </h1>

        <p class="text-white/50 font-body font-light mt-4 max-w-[600px] leading-[1.85]" style="font-size: .95rem">
          {{
            lang === 'fr'
              ? "Aucune fille ne devrait rater l'école à cause de ses règles. Safi Pads fournit des serviettes hygiéniques dignes et abordables aux filles scolarisées en RDC."
              : "No girl should miss school because of her period. Safi Pads provides dignified, affordable sanitary pads to schoolgirls across the DRC."
          }}
        </p>
      </div>
    </section>

    <!-- ═══ COMING SOON ═══ -->
    <section class="bg-white py-32">
      <div class="max-w-[860px] mx-auto px-8 text-center">
        <div class="w-20 h-20 bg-red/10 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8">🌸</div>

        <div class="flex items-center justify-center gap-3 mb-4">
          <span class="w-7 h-[2px] bg-red"></span>
          <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">
            {{ lang === 'fr' ? 'Bientôt disponible' : 'Coming Soon' }}
          </span>
          <span class="w-7 h-[2px] bg-red"></span>
        </div>

        <h2 class="font-display font-bold text-navy leading-[1.1] mb-6" style="font-size: clamp(2rem, 3.2vw, 2.8rem)">
          {{ lang === 'fr' ? 'Page en construction' : 'Page Under Construction' }}
        </h2>

        <p class="text-navy/55 font-body font-light leading-[1.9] mb-10" style="font-size: .95rem; max-width: 560px; margin-left: auto; margin-right: auto">
          {{
            lang === 'fr'
              ? "Nous travaillons à vous apporter toutes les informations sur l'initiative Safi Pads — notre programme d'hygiène menstruelle pour les filles scolarisées en RDC. Revenez bientôt."
              : "We're working to bring you all the information about the Safi Pads initiative — our menstrual health programme for schoolgirls in the DRC. Check back soon."
          }}
        </p>

        <div class="flex gap-4 justify-center flex-wrap">
          <button @click="$emit('navigate', 'whoweare')"
            class="flex items-center gap-2 bg-navy text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer hover:-translate-y-0.5 hover:bg-navy/90 transition-all duration-200">
            ← {{ lang === 'fr' ? 'Qui Sommes-Nous' : 'Who We Are' }}
          </button>
          <button @click="$emit('navigate', 'contact')"
            class="flex items-center gap-2 bg-red text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer hover:-translate-y-0.5 hover:bg-red-dark transition-all duration-200">
            {{ lang === 'fr' ? 'Nous Contacter' : 'Contact Us' }} →
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'

const { lang } = useTranslations()
defineEmits(['navigate'])

onMounted(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
</script>
