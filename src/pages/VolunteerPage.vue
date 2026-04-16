<template>
  <div class="volunteer-page">
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
            {{ lang === 'fr' ? 'Devenir Bénévole' : 'Become Volunteer' }}
          </span>
        </div>

        <h1 class="font-display font-bold text-white leading-[1.08]" style="font-size:clamp(1.8rem,4vw,3rem)">
          {{ lang === 'fr' ? 'Rejoignez Notre Équipe' : 'Join Our Team' }}
        </h1>

        <p class="text-white/60 font-body font-light leading-[1.8] mt-6 max-w-[560px]">
          {{ lang === 'fr'
            ? `Les bénévoles sont le cœur de notre travail. Utilisez vos compétences pour créer un changement
          significatif.`
            : `Volunteers are the heart of our work. Use your skills to create meaningful change.` }}
        </p>
      </div>
    </section>

    <!-- ═══ CONTENT ═══ -->
    <section class="bg-white py-20">
      <div class="max-w-[860px] mx-auto px-8">
        <!-- Volunteer Opportunities -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="bg-navy-mist rounded-2xl p-8">
            <div class="text-5xl mb-4">📚</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Enseignant' : 'Teaching' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-6">
              {{ lang === 'fr'
                ? 'Enseignez aux jeunes les compétences en santé, leadership et entrepreneuriat.'
                : 'Teach young people health, leadership and entrepreneurship skills.' }}
            </p>
            <button
              class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-6 py-2 rounded-lg border-none cursor-pointer transition-colors duration-200">
              {{ lang === 'fr' ? 'Postuler' : 'Apply' }}
            </button>
          </div>

          <div class="bg-navy-mist rounded-2xl p-8">
            <div class="text-5xl mb-4">💻</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Technique' : 'Technical Support' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-6">
              {{ lang === 'fr'
                ? 'Aidez-nous avec le développement web, l\'informatique et les médias sociaux.'
                : 'Help us with web development, IT and social media.' }}
            </p>
            <button
              class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-6 py-2 rounded-lg border-none cursor-pointer transition-colors duration-200">
              {{ lang === 'fr' ? 'Postuler' : 'Apply' }}
            </button>
          </div>

          <div class="bg-navy-mist rounded-2xl p-8">
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Mentorat' : 'Mentoring' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-6">
              {{ lang === 'fr'
                ? 'Guidez les jeunes dans leur développement personnel et professionnel.'
                : 'Guide young people in their personal and professional development.' }}
            </p>
            <button
              class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-6 py-2 rounded-lg border-none cursor-pointer transition-colors duration-200">
              {{ lang === 'fr' ? 'Postuler' : 'Apply' }}
            </button>
          </div>

          <div class="bg-navy-mist rounded-2xl p-8">
            <div class="text-5xl mb-4">🤝</div>
            <h3 class="font-display font-bold text-navy text-lg mb-3">
              {{ lang === 'fr' ? 'Sensibilisation' : 'Advocacy' }}
            </h3>
            <p class="text-navy/60 font-body text-sm mb-6">
              {{ lang === 'fr'
                ? 'Aidez-nous à promouvoir nos messages et valeurs dans votre communauté.'
                : 'Help us promote our messages and values in your community.' }}
            </p>
            <button
              class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-6 py-2 rounded-lg border-none cursor-pointer transition-colors duration-200">
              {{ lang === 'fr' ? 'Postuler' : 'Apply' }}
            </button>
          </div>
        </div>

        <!-- Benefits -->
        <div class="bg-navy py-16 px-8 rounded-2xl text-white mb-16">
          <h2 class="font-display font-bold text-2xl mb-8 text-center">
            {{ lang === 'fr' ? 'Ce Que Vous Obtiendrez' : 'What You\'ll Gain' }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex gap-4">
              <div class="text-2xl flex-shrink-0">✅</div>
              <div>
                <h4 class="font-body font-semibold mb-1">{{ lang === 'fr' ? `Expérience Pratique` : `Practical
                  Experience` }}</h4>
                <p class="text-white/70 font-body text-sm">
                  {{ lang === 'fr'
                    ? 'Développez des compétences réelles en travaillant sur des projets réels.'
                    : 'Develop real skills working on real projects.' }}
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="text-2xl flex-shrink-0">✅</div>
              <div>
                <h4 class="font-body font-semibold mb-1">{{ lang === 'fr' ? 'Réseau' : 'Networking' }}</h4>
                <p class="text-white/70 font-body text-sm">
                  {{ lang === 'fr'
                    ? 'Connectez-vous avec d\'autres passionnés et professionnels.'
                    : 'Connect with other passionate professionals.' }}
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="text-2xl flex-shrink-0">✅</div>
              <div>
                <h4 class="font-body font-semibold mb-1">{{ lang === 'fr' ? 'Formation' : 'Training' }}</h4>
                <p class="text-white/70 font-body text-sm">
                  {{ lang === 'fr'
                    ? 'Accédez à des ressources de formation et du mentorat.'
                    : 'Access training resources and mentoring.' }}
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="text-2xl flex-shrink-0">✅</div>
              <div>
                <h4 class="font-body font-semibold mb-1">{{ lang === 'fr' ? 'Impact' : 'Impact' }}</h4>
                <p class="text-white/70 font-body text-sm">
                  {{ lang === 'fr'
                    ? 'Faites une différence réelle dans la vie des jeunes congolais.'
                    : 'Make a real difference in Congolese youth lives.' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-navy-mist py-12 px-8 rounded-2xl text-center">
          <h2 class="font-display font-bold text-2xl text-navy mb-4">
            {{ lang === 'fr' ? 'Prêt à Commencer?' : 'Ready to Get Started?' }}
          </h2>
          <p class="font-body text-navy/70 max-w-[600px] mx-auto mb-6">
            {{ lang === 'fr'
              ? 'Postulez maintenant pour rejoindre notre équipe de bénévoles passionnés.'
              : 'Apply now to join our team of passionate volunteers.' }}
          </p>
          <button @click="$emit('navigate', 'contact')"
            class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-8 py-3 rounded-xl border-none cursor-pointer transition-colors duration-200">
            {{ lang === 'fr' ? 'Postuler Maintenant' : 'Apply Now' }} →
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
