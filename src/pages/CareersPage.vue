<template>
  <div class="careers-page">
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
            {{ lang === 'fr' ? 'Carrières' : 'Careers' }}
          </span>
        </div>

        <h1 class="font-display font-bold text-white leading-[1.08]" style="font-size:clamp(1.8rem,4vw,3rem)">
          {{ lang === 'fr' ? 'Grandissez Avec Nous' : 'Grow With Us' }}
        </h1>

        <p class="text-white/60 font-body font-light leading-[1.8] mt-6 max-w-[560px]">
          {{ lang === 'fr'
            ? 'Rejoignez une équipe dynamique dédiée à transformer la vie des jeunes congolais.'
            : 'Join a dynamic team dedicated to transforming Congolese youth lives.' }}
        </p>
      </div>
    </section>

    <!-- ═══ CONTENT ═══ -->
    <section class="bg-white py-20">
      <div class="max-w-[860px] mx-auto px-8">
        <!-- Current Positions -->
        <h2 class="font-display font-bold text-navy text-2xl mb-12">
          {{ lang === 'fr' ? 'Postes Disponibles' : 'Open Positions' }}
        </h2>

        <div class="space-y-6 mb-16">
          <div class="border-l-4 border-red pl-6 py-4 bg-navy-mist/30 rounded-r-lg">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-display font-bold text-navy">
                {{ lang === 'fr' ? 'Directeur de Programme' : 'Program Director' }}
              </h3>
              <span class="bg-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                {{ lang === 'fr' ? 'Temps Plein' : 'Full-time' }}
              </span>
            </div>
            <p class="text-navy/60 font-body text-sm mb-2">
              {{ lang === 'fr' ? 'Kinshasa' : 'Kinshasa' }}
            </p>
            <p class="text-navy font-body text-sm mb-4">
              {{ lang === 'fr'
                ? 'Dirigez la conception et la mise en œuvre de nos programmes de jeunesse innovants.'
                : 'Lead design and implementation of our innovative youth programs.' }}
            </p>
            <button
              class="text-red hover:text-red-dark font-body font-semibold text-sm border-none bg-transparent cursor-pointer">
              {{ lang === 'fr' ? 'Voir Plus' : 'View Details' }} →
            </button>
          </div>

          <div class="border-l-4 border-red pl-6 py-4 bg-navy-mist/30 rounded-r-lg">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-display font-bold text-navy">
                {{ lang === 'fr' ? 'Coordinateur Communautaire' : 'Community Coordinator' }}
              </h3>
              <span class="bg-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                {{ lang === 'fr' ? 'Temps Plein' : 'Full-time' }}
              </span>
            </div>
            <p class="text-navy/60 font-body text-sm mb-2">
              {{ lang === 'fr' ? 'Kinshasa, Goma' : 'Kinshasa, Goma' }}
            </p>
            <p class="text-navy font-body text-sm mb-4">
              {{ lang === 'fr'
                ? 'Coordonnez les activités de sensibilisation et renforcez les partenariats communautaires.'
                : 'Coordinate outreach activities and strengthen community partnerships.' }}
            </p>
            <button
              class="text-red hover:text-red-dark font-body font-semibold text-sm border-none bg-transparent cursor-pointer">
              {{ lang === 'fr' ? 'Voir Plus' : 'View Details' }} →
            </button>
          </div>

          <div class="border-l-4 border-red pl-6 py-4 bg-navy-mist/30 rounded-r-lg">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-display font-bold text-navy">
                {{ lang === 'fr' ? 'Spécialiste Suivi-Évaluation' : 'Monitoring & Evaluation Specialist' }}
              </h3>
              <span class="bg-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                {{ lang === 'fr' ? 'Temps Plein' : 'Full-time' }}
              </span>
            </div>
            <p class="text-navy/60 font-body text-sm mb-2">
              {{ lang === 'fr' ? 'Kinshasa' : 'Kinshasa' }}
            </p>
            <p class="text-navy font-body text-sm mb-4">
              {{ lang === 'fr'
                ? 'Mesurez l\'impact de nos programmes et guidez l\'amélioration continue.'
                : 'Measure program impact and guide continuous improvement.' }}
            </p>
            <button
              class="text-red hover:text-red-dark font-body font-semibold text-sm border-none bg-transparent cursor-pointer">
              {{ lang === 'fr' ? 'Voir Plus' : 'View Details' }} →
            </button>
          </div>

          <div class="border-l-4 border-red pl-6 py-4 bg-navy-mist/30 rounded-r-lg">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-display font-bold text-navy">
                {{ lang === 'fr' ? 'Développeur Web' : 'Web Developer' }}
              </h3>
              <span class="bg-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                {{ lang === 'fr' ? 'Temps Partiel' : 'Part-time' }}
              </span>
            </div>
            <p class="text-navy/60 font-body text-sm mb-2">
              {{ lang === 'fr' ? 'Télétraville' : 'Remote' }}
            </p>
            <p class="text-navy font-body text-sm mb-4">
              {{ lang === 'fr'
                ? 'Construisez et maintenez nos plateformes numériques et nos outils technologiques.'
                : 'Build and maintain our digital platforms and technology tools.' }}
            </p>
            <button
              class="text-red hover:text-red-dark font-body font-semibold text-sm border-none bg-transparent cursor-pointer">
              {{ lang === 'fr' ? 'Voir Plus' : 'View Details' }} →
            </button>
          </div>
        </div>

        <!-- Why Join -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="bg-navy py-10 px-8 rounded-xl text-white">
            <h3 class="font-display font-bold text-lg mb-6">{{ lang === 'fr' ? 'Avantages' : 'Benefits' }}</h3>
            <ul class="space-y-3 font-body text-sm">
              <li class="flex gap-3">
                <span class="text-red">✓</span>
                <span>{{ lang === 'fr' ? 'Salaire compétitif' : 'Competitive salary' }}</span>
              </li>
              <li class="flex gap-3">
                <span class="text-red">✓</span>
                <span>{{ lang === 'fr' ? 'Assurance maladie' : 'Health insurance' }}</span>
              </li>
              <li class="flex gap-3">
                <span class="text-red">✓</span>
                <span>{{ lang === 'fr' ? 'Formation continue' : 'Professional development' }}</span>
              </li>
              <li class="flex gap-3">
                <span class="text-red">✓</span>
                <span>{{ lang === 'fr' ? 'Équipe diverse' : 'Diverse team culture' }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-navy-mist py-10 px-8 rounded-xl">
            <h3 class="font-display font-bold text-navy text-lg mb-6">{{ lang === 'fr' ? 'Ce Qui Nous Distingue' : 'What
              Sets Us Apart' }}</h3>
            <ul class="space-y-3 font-body text-sm text-navy/80">
              <li class="flex gap-3">
                <span class="text-red">→</span>
                <span>{{ lang === 'fr' ? 'Impact réel auprès des jeunes' : 'Real impact with youth' }}</span>
              </li>
              <li class="flex gap-3">
                <span class="text-red">→</span>
                <span>{{ lang === 'fr' ? 'Leadership inclusif' : 'Inclusive leadership' }}</span>
              </li>
              <li class="flex gap-3">
                <span class="text-red">→</span>
                <span>{{ lang === 'fr' ? 'Innovation constante' : 'Continuous innovation' }}</span>
              </li>
              <li class="flex gap-3">
                <span class="text-red">→</span>
                <span>{{ lang === 'fr' ? 'Communauté bienveillante' : 'Supportive community' }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-navy py-16 px-8 rounded-2xl text-white text-center">
          <h2 class="font-display font-bold text-2xl mb-4">
            {{ lang === 'fr' ? 'Prêt à Rejoindre Notre Mission?' : 'Ready to Join Our Mission?' }}
          </h2>
          <p class="font-body text-white/70 max-w-[600px] mx-auto mb-8">
            {{ lang === 'fr'
              ? 'Envoyez-nous votre CV et une lettre de motivation. Nous espérons vous connaître!'
              : 'Send us your resume and a cover letter. We\'d love to learn about you!' }}
          </p>
          <button @click="$emit('navigate', 'contact')"
            class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-8 py-3 rounded-xl border-none cursor-pointer transition-colors duration-200">
            {{ lang === 'fr' ? 'Nous Contacter' : 'Get in Touch' }} →
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
