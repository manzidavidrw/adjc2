<template>
  <div class="who-we-are-page">

    <!-- ═══ HERO BANNER ═══ -->
    <section class="relative bg-navy-dark min-h-[40vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <!-- decorative vertical red line -->
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>
      <!-- large bg text -->
      <div
        class="absolute right-0 bottom-0 font-display font-bold text-white/[.025] leading-none select-none pointer-events-none"
        style="font-size:28vw">ADJC</div>

      <div class="relative max-w-[1280px] mx-auto px-8 pb-10 w-full">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-6">
          <button @click="$emit('navigate', 'home')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">
            {{ lang === 'fr' ? 'Accueil' : 'Home' }}
          </button>
          <span class="text-white/20 text-xs">›</span>
          <span class="text-red font-body text-xs font-semibold">{{ lang === 'fr' ? 'Qui Sommes-Nous' : 'Who We Are'
          }}</span>
        </div>
        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-[2px] bg-red flex-shrink-0"></span>
          <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ lang === 'fr' ? `À
            Propos de l\'ADJC` : `About ADJC` }}</span>
        </div>
        <h1 class="font-display font-bold text-white leading-[1.06]" style="font-size:clamp(2.8rem,5vw,4.5rem)">
          {{ lang === 'fr' ? 'Qui Sommes-' : 'Who ' }}<em class="not-italic text-red">{{ lang === 'fr' ? 'Nous' : `We
            Are` }}</em>{{ lang === 'fr' ? ' ?' : '' }}
        </h1>
        <p class="text-white/50 font-body font-light mt-4 max-w-[600px] leading-[1.85]" style="font-size:.95rem">
          {{ lang === 'fr'
            ? `Organisation de la société civile enregistrée en RDC, dédiée à l'autonomisation des jeunes et à la
          promotion des droits humains.`
            : `A registered civil society organization in the DRC, dedicated to youth empowerment and the promotion of
          human rights.` }}
        </p>
      </div>
    </section>

    <!-- ═══ INTRO — Our Story ═══ -->
    <section id="ourstory" class="bg-white py-10">
      <div class="max-w-[1280px] mx-auto px-8">

        <div class="reveal max-w-[860px]">
          <div class="flex items-center gap-3 mb-5">
            <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
            <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ lang === 'fr' ?
              'Notre Organisation' : 'Our Organization' }}</span>
            <!-- Small founded badge -->
            <div class="ml-auto bg-red rounded-xl px-4 py-2 flex-shrink-0">
              <div class="text-white/70 font-body text-[.55rem] tracking-[2px] uppercase leading-none mb-0.5">{{ lang
                === 'fr' ? 'Fondée' : 'Founded' }}</div>
              <div class="font-display font-bold text-white text-lg leading-none">2010 · Kinshasa</div>
            </div>
          </div>
          <h2 class="font-display font-bold text-navy leading-[1.1] mb-5" style="font-size:clamp(2rem,3.2vw,2.8rem)">
            {{ lang === 'fr' ? `Action Pour le Développement des Jeunes au Congo` : `Action for Youth Development in
            Congo` }}
          </h2>
          <p class="text-navy/60 font-body font-light leading-[1.9] mb-4" style="font-size:.95rem">
            {{ lang === 'fr'
              ? `L'ADJC est une organisation de la société civile à but non lucratif, apolitique, légalement établie en
            République Démocratique du Congo. Elle œuvre pour l'autonomisation des jeunes, la promotion des talents,
            la défense des droits humains, l'égalité des genres et le développement durable à travers des actions
            inclusives et communautaires alignées sur les Objectifs de Développement Durable (ODD).`
              : `ADJC is a non-profit, non-political civil society organization, legally established in the Democratic
            Republic of Congo. The organization works to empower youth, promote youth talents, advance human rights,
            foster gender equality, and support sustainable development through inclusive, community-based actions
            aligned with the Sustainable Development Goals (SDGs).` }}
          </p>
          <p class="text-navy/60 font-body font-light leading-[1.9]" style="font-size:.95rem">
            {{ lang === 'fr'
              ? `Grâce à des actions inclusives portées par les communautés, nous développons les compétences,
            protégeons la dignité et créons des opportunités qui permettent aux jeunes et aux femmes de devenir des
            acteurs de changement positif.`
              : `Through inclusive, community-driven actions, we work to build skills, protect dignity, and create
            opportunities that enable youth and women to become agents of positive change.` }}
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ MISSION & VISION ═══ -->
    <section id="missionvision" class="bg-navy-mist py-10">
      <div class="max-w-[1280px] mx-auto px-8">
        <div class="text-center mb-8 reveal">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="w-7 h-[2px] bg-red"></span>
            <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ lang === 'fr' ?
              'Nos Fondements' : 'Our Foundations' }}</span>
            <span class="w-7 h-[2px] bg-red"></span>
          </div>
          <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size:clamp(2rem,3.2vw,2.8rem)">
            {{ lang === 'fr' ? 'Mission & Vision' : 'Mission & Vision' }}
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          <!-- Mission -->
          <div
            class="reveal d1 bg-navy rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div class="absolute top-0 left-0 right-0 h-1 bg-red"></div>
            <div class="w-12 h-12 bg-red/20 rounded-xl flex items-center justify-center text-2xl mb-6">🎯</div>
            <h3 class="font-display font-bold text-white text-2xl mb-4">{{ lang === 'fr' ? `Notre Mission` : `Our
              Mission` }}</h3>
            <p class="text-white/55 font-body text-sm leading-[1.85]">
              {{ lang === 'fr'
                ? `Autonomiser les jeunes en République Démocratique du Congo en promouvant l'éducation, les droits
              humains, l'égalité des genres, la résilience climatique et le développement durable.`
                : `To empower young people in the Democratic Republic of Congo by promoting education, human rights,
              gender equality, climate resilience, and sustainable development.` }}
            </p>
          </div>

          <!-- Vision -->
          <div
            class="reveal d2 bg-red rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div class="absolute top-0 left-0 right-0 h-1 bg-white/30"></div>
            <div class="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-2xl mb-6">🌟</div>
            <h3 class="font-display font-bold text-white text-2xl mb-4">{{ lang === 'fr' ? 'Notre Vision' : 'Our Vision'
            }}</h3>
            <p class="text-white/75 font-body text-sm leading-[1.85]">
              {{ lang === 'fr'
                ? `Une société juste, inclusive et résiliente où les jeunes participent pleinement au développement
              social, économique et environnemental, et où chaque individu a un égal accès aux opportunités, à
              l'éducation et à une vie digne.`
                : `A just, inclusive, and resilient society where young people fully participate in social, economic, and
              environmental development, and where every individual has equal access to opportunities, education, and a
              dignified life.` }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ OUR APPROACH ═══ -->
    <section id="approach" class="bg-white py-10">
      <div class="max-w-[1280px] mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <!-- Icon block -->
          <div class="reveal-left flex justify-center lg:justify-start">
            <div class="bg-navy rounded-3xl p-12 inline-flex flex-col items-center gap-5 relative overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-1 bg-red"></div>
              <div class="w-20 h-20 bg-red/20 rounded-2xl flex items-center justify-center text-5xl">🤝</div>
              <p class="font-display font-bold text-white text-xl text-center">
                {{ lang === 'fr' ? 'Notre Approche' : 'Our Approach' }}
              </p>
            </div>
          </div>
          <!-- Text -->
          <div class="reveal-right">
            <div class="flex items-center gap-3 mb-5">
              <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
              <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">
                {{ lang === 'fr' ? 'Comment Nous Travaillons' : 'How We Work' }}
              </span>
            </div>
            <h2 class="font-display font-bold text-navy leading-[1.1] mb-5"
              style="font-size:clamp(1.8rem,2.8vw,2.4rem)">
              {{ lang === 'fr' ? 'Une approche inclusive et communautaire' : 'An inclusive, community-driven approach'
              }}
            </h2>
            <p class="text-navy/60 font-body font-light leading-[1.9] text-[.95rem]">
              {{ lang === 'fr'
                ? `Par des actions inclusives portées par les communautés, nous développons les compétences, protégeons la
              dignité et créons des opportunités qui permettent aux jeunes et aux femmes de devenir des acteurs de
              changement positif. Notre modèle UPG (Unité – Participation – Gouvernance) place les jeunes au cœur de
              chaque intervention.`
                : `Through inclusive, community-driven actions, we work to build skills, protect dignity, and create
              opportunities that enable youth and women to become agents of positive change. Our UPG model (Unity –
              Participation – Governance) places young people at the heart of every intervention.` }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ VALUES ═══ -->
    <section id="values" class="bg-navy-mist py-10">
      <div class="max-w-[1280px] mx-auto px-8">
        <div class="flex flex-wrap items-end justify-between gap-6 mb-7 reveal">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
              <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ lang === 'fr' ?
                'Ce en Quoi Nous Croyons' : 'What We Stand For' }}</span>
            </div>
            <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size:clamp(2rem,3.2vw,2.8rem)">
              {{ lang === 'fr' ? 'Nos Valeurs' : 'Our Values' }}
            </h2>
          </div>
          <p class="text-navy/50 font-body font-light text-sm leading-relaxed max-w-[380px]">
            {{ lang === 'fr'
              ? "Ces valeurs guident chacune de nos actions et décisions sur le terrain."
              : "These values guide every one of our actions and decisions in the field." }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="(val, i) in values" :key="i"
            class="reveal group bg-snow hover:bg-navy rounded-2xl p-7 transition-all duration-400 cursor-default border border-navy/[.06] hover:border-transparent hover:-translate-y-1 hover:shadow-navy-lg"
            :class="'d' + (i + 1)">
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 transition-colors duration-400"
              :class="'bg-red/10 group-hover:bg-red/25'">
              {{ val.ico }}
            </div>
            <h4
              class="font-display font-bold text-navy group-hover:text-white text-xl mb-3 transition-colors duration-400">
              {{ lang === 'fr' ? val.titleFr : val.titleEn }}</h4>
            <p
              class="font-body text-navy/55 group-hover:text-white/60 text-sm leading-[1.8] transition-colors duration-400">
              {{ lang === 'fr' ? val.descFr : val.descEn }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ STATS STRIP ═══ -->
    <section class="bg-navy py-8 relative overflow-hidden">
      <div class="absolute inset-0 grid-lines opacity-50"></div>
      <div class="relative max-w-[1280px] mx-auto px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="stat in stats" :key="stat.n"
            class="reveal bg-white/[.05] border border-white/[.07] rounded-2xl py-8 px-6 text-center hover:bg-red/10 transition-colors duration-300">
            <div class="font-display font-bold text-white leading-none mb-2" style="font-size:2.5rem">{{ stat.n }}</div>
            <div class="text-white/35 font-body text-[.62rem] tracking-[1.5px] uppercase">{{ lang === 'fr' ? stat.lFr :
              stat.lEn }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TEAM ═══ -->
    <section id="ourteam" class="bg-white py-10">
      <div class="max-w-[1280px] mx-auto px-8">
        <div class="text-center mb-7 reveal">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="w-7 h-[2px] bg-red"></span>
            <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ lang === 'fr' ?
              'Les Personnes' : 'The People' }}</span>
            <span class="w-7 h-[2px] bg-red"></span>
          </div>
          <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size:clamp(2rem,3.2vw,2.8rem)">
            {{ lang === 'fr' ? 'Notre Équipe de Direction' : 'Our Leadership Team' }}
          </h2>
          <p class="text-navy/50 font-body font-light text-sm leading-relaxed max-w-[500px] mx-auto mt-4">
            {{ lang === 'fr'
              ? "Des professionnels engagés, unis autour d'une vision commune pour la jeunesse congolaise."
              : "Dedicated professionals united around a common vision for Congolese youth." }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(member, i) in teamMembers" :key="i" class="reveal group" :class="'d' + (i + 1)">
            <div class="rounded-2xl overflow-hidden relative aspect-[3/4]" :style="member.bg">
              <div class="absolute inset-0 grid-lines opacity-30"></div>
              <div class="absolute top-0 left-0 right-0 h-1 bg-red"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="font-display font-bold text-white/10 select-none" style="font-size:5rem">{{ member.ini
                }}</span>
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <p class="font-display font-bold text-white text-lg leading-tight">{{ member.name }}</p>
                <p class="text-red font-body text-[.62rem] tracking-[1.5px] uppercase mt-0.5">{{ member.role }}</p>
                <div class="overflow-hidden" style="max-height:0;transition:max-height .4s" ref="bioRef">
                  <p class="text-white/55 font-body text-[.72rem] leading-[1.6] pt-2">{{ member.bio }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA BAND ═══ -->
    <section class="bg-red py-12 relative overflow-hidden">
      <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/[.05]"></div>
      <div class="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-white/[.04]"></div>
      <div class="relative max-w-[1280px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h2 class="font-display font-bold text-white leading-[1.1] mb-3" style="font-size:clamp(1.8rem,3vw,2.8rem)">
            {{ lang === 'fr' ? 'Prêt à Faire la Différence ?' : 'Ready to Make a Difference?' }}
          </h2>
          <p class="text-white/65 font-body text-sm leading-relaxed max-w-[500px]">
            {{ lang === 'fr'
              ? "Rejoignez notre communauté et contribuez à bâtir un avenir meilleur pour la jeunesse congolaise."
              : "Join our community and help build a better future for Congolese youth." }}
          </p>
        </div>
        <div class="flex gap-4 flex-shrink-0 flex-wrap">
          <button @click="$emit('navigate', 'whatwedo')"
            class="bg-white text-red font-body font-bold text-sm px-7 py-3.5 rounded-xl border-none cursor-pointer hover:bg-navy-mist transition-colors duration-200">
            {{ lang === 'fr' ? 'Nos Programmes' : 'Our Programs' }} →
          </button>
          <button @click="$emit('navigate', 'donate')"
            class="bg-transparent border-2 border-white/40 text-white font-body font-semibold text-sm px-7 py-3.5 rounded-xl cursor-pointer hover:border-white hover:bg-white/10 transition-all duration-200">
            {{ lang === 'fr' ? 'Faire un Don' : 'Donate' }}
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useTranslations } from '@/composables/useTranslations.js'
import { useReveal } from '@/composables/useReveal.js'

const props = defineProps({
  section: { type: String, default: null },
})
defineEmits(['navigate'])

const { lang } = useTranslations()
useReveal()

// ── Scroll to a section by id with navbar offset ──────────────────────────
function scrollToSection(sectionId) {
  if (!sectionId) return
  const el = document.getElementById(sectionId)
  if (!el) return
  const navbarHeight = 96
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
  window.scrollTo({ top, behavior: 'smooth' })
}

onMounted(() => {
  if (props.section) {
    // Small delay so DOM has rendered fully before scrolling
    setTimeout(() => scrollToSection(props.section), 120)
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

// If already on page and section changes (e.g. clicking another nav item)
watch(() => props.section, (newSection) => {
  if (newSection) scrollToSection(newSection)
})

const values = [
  { ico: '⚖️', titleFr: 'Droits Humains & Dignité', titleEn: 'Human Rights & Dignity', descFr: "Nous défendons les droits fondamentaux et la dignité de chaque individu.", descEn: "We uphold the fundamental rights and dignity of all individuals." },
  { ico: '♀️', titleFr: 'Inclusion Jeunes & Genre', titleEn: 'Youth & Gender Inclusion', descFr: "Nous promouvons la participation significative des jeunes et des femmes dans tous nos programmes.", descEn: "We promote meaningful participation of youth and women in all our programs." },
  { ico: '🏘️', titleFr: 'Appropriation Communautaire', titleEn: 'Community Ownership', descFr: "Nous privilégions des solutions locales, portées par les communautés et culturellement adaptées.", descEn: "We prioritize locally driven and culturally appropriate solutions." },
  { ico: '🔍', titleFr: 'Responsabilité & Transparence', titleEn: 'Accountability & Transparency', descFr: "Nous assurons une gestion responsable, éthique et transparente des ressources.", descEn: "We ensure responsible, ethical, and transparent management of resources." },
  { ico: '🌱', titleFr: 'Durabilité & Climat', titleEn: 'Sustainability & Climate', descFr: "Nous intégrons la protection de l'environnement et la résilience climatique dans toutes nos actions.", descEn: "We integrate environmental protection and climate resilience into our actions." },
  { ico: '🕊️', titleFr: 'Paix & Cohésion Sociale', titleEn: 'Peace & Social Cohesion', descFr: "Nous favorisons le dialogue, la non-violence et le développement inclusif au sein des communautés.", descEn: "We foster dialogue, non-violence, and inclusive development within communities." },
]

const stats = [
  { n: '5 000+', lFr: 'Jeunes soutenus', lEn: 'Youth supported' },
  { n: '12', lFr: 'Provinces couvertes', lEn: 'Provinces covered' },
  { n: '15', lFr: "Années d'expérience", lEn: 'Years of experience' },
  { n: '98%', lFr: 'Taux de satisfaction', lEn: 'Satisfaction rate' },
]

const teamMembers = [
  { ini: 'JK', name: 'Nondo Rugira Christian', role: 'Directeur Exécutif / Executive Director', bio: "Expert en développement communautaire avec 20 ans d'expérience en RDC.", bg: 'background:linear-gradient(160deg,#1A3A0A,#2E6012)' },
  { ini: 'MC', name: 'Mugisha Justin Kabocho', role: 'Dir. Programmes', bio: "Spécialiste en éducation et formation professionnelle depuis 2015.", bg: 'background:linear-gradient(160deg,#A81E1E,#1A3A0A)' },
  { ini: 'PL', name: 'Atete Solange', role: 'Responsable Terrain', bio: "Coordinateur de nos 12 antennes provinciales sur le terrain.", bg: 'background:linear-gradient(160deg,#234D0E,#1A3A0A)' },
  { ini: 'AK', name: 'Ntumwa Binthi Jolie', role: 'Communication', bio: "Journaliste engagée donnant une voix aux jeunes que nous accompagnons.", bg: 'background:linear-gradient(160deg,#D42B2B,#1A3A0A)' },
]
</script>