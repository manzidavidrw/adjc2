<template>
  <div class="sub-program-page">

    <!-- ═══ HERO ═══ -->
    <section class="relative bg-navy-dark min-h-[46vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>

      <div v-if="result"
        class="absolute right-0 bottom-0 font-display font-bold text-white/[.025] leading-none select-none pointer-events-none"
        style="font-size: 20vw">{{ result.program.ico }}</div>

      <div class="relative max-w-[1280px] mx-auto px-8 pb-14 w-full">
        <!-- Breadcrumb -->
        <div class="flex flex-wrap items-center gap-2 mb-6">
          <button @click="$emit('navigate', 'home')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">{{
              lang === 'fr' ? 'Accueil' : 'Home' }}</button>
          <span class="text-white/20 text-xs">›</span>
          <button @click="$emit('navigate', 'whatwedo')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">{{
              lang === 'fr' ? 'Ce Que Nous Faisons' : 'What We Do' }}</button>
          <template v-if="result">
            <span class="text-white/20 text-xs">›</span>
            <span class="text-white/35 font-body text-xs">
              {{ lang === 'fr' ? result.program.shortFr : result.program.shortEn }}
            </span>
            <span class="text-white/20 text-xs">›</span>
            <span class="text-red font-body text-xs font-semibold truncate max-w-[200px]">{{ currentArea.title }}</span>
          </template>
        </div>

        <!-- Title -->
        <template v-if="result">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">{{ result.program.ico }}</span>
            <span class="w-6 h-[2px] bg-red flex-shrink-0"></span>
            <span class="text-red font-body text-[.62rem] font-semibold tracking-[3px] uppercase">
              {{ lang === 'fr' ? result.program.shortFr : result.program.shortEn }}
            </span>
          </div>
          <h1 class="font-display font-bold text-white leading-[1.06]" style="font-size: clamp(2rem, 4vw, 3.8rem)">
            {{ currentArea.ico }} {{ currentArea.title }}
          </h1>
        </template>

        <!-- Not found -->
        <template v-else>
          <h1 class="font-display font-bold text-white text-4xl">
            {{ lang === 'fr' ? 'Programme introuvable' : 'Program Not Found' }}
          </h1>
        </template>
      </div>
    </section>

    <!-- ═══ ARTICLE BODY ═══ -->
    <section v-if="result" class="bg-white py-20">
      <div class="max-w-[860px] mx-auto px-8">

        <!-- Meta tags -->
        <div class="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-navy/[.08]">
          <span
            class="inline-flex items-center gap-2 bg-navy/[.06] text-navy font-body text-xs font-semibold px-3 py-1.5 rounded-full">
            <span>{{ result.program.ico }}</span>
            {{ lang === 'fr' ? result.program.shortFr : result.program.shortEn }}
          </span>
          <span
            class="inline-flex items-center gap-2 bg-red/10 text-red font-body text-xs font-semibold px-3 py-1.5 rounded-full">
            {{ lang === 'fr' ? `Domaine ${result.areaIndex + 1}` : `Focus Area ${result.areaIndex + 1}` }}
          </span>
          <span class="ml-auto text-navy/35 font-body text-xs">
            {{ lang === 'fr' ? 'Programme' : 'Program' }} {{ result.programIndex + 1 }} / 5
          </span>
        </div>

        <!-- Summary box -->
        <div class="bg-navy-mist rounded-2xl p-7 mb-12 border-l-4 border-red">
          <p class="text-navy/70 font-body font-light leading-[1.9] text-[.95rem]">{{ currentArea.desc }}</p>
        </div>

        <!-- Full article HTML -->
        <article class="prose-adjc" v-html="currentArea.fullArticle"></article>

        <!-- ═══ PHOTO GALLERY ═══ -->
        <div class="mt-14 mb-4">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-6 h-[2px] bg-red"></div>
            <span class="text-navy font-display font-semibold text-base">
              {{ lang === 'fr' ? 'En images' : 'In Pictures' }}
            </span>
          </div>

          <div class="photo-gallery">
            <!-- Large featured photo -->
            <div class="photo-featured group">
              <img :src="slugPhotos[0].src" :alt="slugPhotos[0].alt"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />
              <div class="photo-overlay">
                <span class="photo-caption">{{ lang === 'fr' ? slugPhotos[0].captionFr : slugPhotos[0].captionEn
                  }}</span>
              </div>
            </div>

            <!-- Two stacked secondary photos -->
            <div class="photo-secondary-stack">
              <div class="photo-secondary group">
                <img :src="slugPhotos[1].src" :alt="slugPhotos[1].alt"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy" />
                <div class="photo-overlay">
                  <span class="photo-caption">{{ lang === 'fr' ? slugPhotos[1].captionFr : slugPhotos[1].captionEn
                    }}</span>
                </div>
              </div>
              <div class="photo-secondary group">
                <img :src="slugPhotos[2].src" :alt="slugPhotos[2].alt"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy" />
                <div class="photo-overlay">
                  <span class="photo-caption">{{ lang === 'fr' ? slugPhotos[2].captionFr : slugPhotos[2].captionEn
                    }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Photo credit line -->
          <p class="text-navy/30 font-body text-[.7rem] mt-3 text-right">
            {{ lang === 'fr' ? 'Photos : Unsplash' : 'Photos: Unsplash' }}
          </p>
        </div>

        <!-- Sibling sub-programs -->
        <div class="mt-16 pt-10 border-t border-navy/[.08]">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-6 h-[2px] bg-red"></div>
            <span class="text-navy font-display font-semibold text-base">
              {{ lang === 'fr' ? 'Autres domaines de ce programme' : 'Other areas in this program' }}
            </span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button v-for="sibling in siblingAreas" :key="sibling.slug"
              @click="$emit('navigate', 'sub-program', { slug: sibling.slug })"
              class="flex items-center gap-3 p-4 rounded-xl border border-navy/[.08] hover:border-red/40 hover:bg-red/[.03] transition-all duration-200 text-left group cursor-pointer bg-white">
              <span class="text-xl">{{ sibling.ico }}</span>
              <span class="font-body text-navy/70 text-sm font-medium group-hover:text-navy transition-colors flex-1">
                {{ sibling.title }}
              </span>
              <span
                class="text-navy/25 group-hover:text-red transition-colors text-sm group-hover:translate-x-1 inline-block duration-200">→</span>
            </button>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="mt-12 flex flex-wrap gap-4">
          <button @click="$emit('navigate', 'whatwedo')"
            class="flex items-center gap-2 bg-navy text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer hover:-translate-y-0.5 hover:bg-navy/90 transition-all duration-200">
            ← {{ lang === 'fr' ? 'Retour aux programmes' : 'Back to programs' }}
          </button>
          <button @click="$emit('navigate', 'donate')"
            class="flex items-center gap-2 bg-red text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer hover:-translate-y-0.5 hover:bg-red-dark transition-all duration-200">
            {{ lang === 'fr' ? 'Soutenir ce programme' : 'Support this program' }} →
          </button>
        </div>
      </div>
    </section>

    <!-- Not found fallback -->
    <section v-else class="bg-white py-24 text-center">
      <p class="text-navy/50 font-body mb-6">
        {{ lang === 'fr' ? "Ce domaine n'existe pas." : 'This focus area does not exist.' }}
      </p>
      <button @click="$emit('navigate', 'whatwedo')"
        class="bg-red text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer">
        {{ lang === 'fr' ? '← Retour' : '← Go back' }}
      </button>
    </section>

  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'
import { findAreaBySlug } from '../data/programData.js'

// ── Props / emits ─────────────────────────────────────────────────────────────
const props = defineProps({
  slug: { type: String, required: true },
})
defineEmits(['navigate'])

// ── Composables ───────────────────────────────────────────────────────────────
const { lang } = useTranslations()

// ── Scroll to top on mount and whenever slug changes ─────────────────────────
onMounted(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
watch(() => props.slug, () => window.scrollTo({ top: 0, behavior: 'smooth' }))

// ── Derived data ──────────────────────────────────────────────────────────────

/** Full lookup result: { program, areaFr, areaEn, programIndex, areaIndex } */
const result = computed(() => findAreaBySlug(props.slug))

/** The area object for the active language */
const currentArea = computed(() => {
  if (!result.value) return null
  return lang.value === 'fr' ? result.value.areaFr : result.value.areaEn
})

/** Sibling areas from the same program (excluding the current one) */
const siblingAreas = computed(() => {
  if (!result.value) return []
  const { program, areaIndex } = result.value
  const source = lang.value === 'fr' ? program.areasFr : program.areasEn
  return source.filter((_, i) => i !== areaIndex)
})

// ── Photo map ─────────────────────────────────────────────────────────────────
// Each slug gets 3 photos: featured (wide) + 2 secondary (tall stack)
// Using Unsplash source URLs with relevant search terms
const PHOTO_MAP = {
  // ── SRHR ──────────────────────────────────────────────────────────────────
  'srhr-education-adolescents': [
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', alt: 'Students in classroom', captionEn: 'Adolescent health education sessions in community schools', captionFr: 'Sessions d\'éducation sanitaire dans les écoles communautaires' },
    { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80', alt: 'Young people learning', captionEn: 'Interactive learning workshops for youth', captionFr: 'Ateliers d\'apprentissage interactifs pour les jeunes' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', alt: 'Teacher and students', captionEn: 'Trained facilitators guide youth discussions', captionFr: 'Des facilitateurs formés guident les discussions jeunesse' },
  ],
  'srhr-menstrual-health': [
    { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', alt: 'Girls in school', captionEn: 'Keeping girls in school through menstrual health support', captionFr: 'Maintenir les filles à l\'école grâce au soutien MHM' },
    { src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80', alt: 'Community health worker', captionEn: 'Community health workers distribute MHM kits', captionFr: 'Distribution de kits MHM par les agents de santé' },
    { src: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&q=80', alt: 'Young women empowered', captionEn: 'Breaking the stigma around menstrual health', captionFr: 'Briser la stigmatisation autour de la santé menstruelle' },
  ],
  'srhr-gbv-prevention': [
    { src: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&q=80', alt: 'Women empowerment session', captionEn: 'Safe spaces for survivors and awareness workshops', captionFr: 'Espaces sûrs pour les survivantes et ateliers de sensibilisation' },
    { src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80', alt: 'Community meeting', captionEn: 'Engaging men and boys as allies in GBV prevention', captionFr: 'Impliquer les hommes comme alliés dans la prévention des VBG' },
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', alt: 'Youth advocacy', captionEn: 'Youth-led campaigns for bodily autonomy and rights', captionFr: 'Campagnes menées par les jeunes pour l\'autonomie corporelle' },
  ],
  'srhr-health-services': [
    { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', alt: 'Health clinic', captionEn: 'Youth-friendly health spaces across Minembwe territory', captionFr: 'Espaces de santé conviviaux dans le territoire de Minembwe' },
    { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80', alt: 'Medical consultation', captionEn: 'Confidential consultations for young people', captionFr: 'Consultations confidentielles pour les jeunes' },
    { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80', alt: 'Community health outreach', captionEn: 'Outreach teams connect youth to local health services', captionFr: 'Des équipes mobiles connectent les jeunes aux services de santé' },
  ],
  'srhr-gender-equality': [
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Women leaders', captionEn: 'Girls\' clubs building confidence and leadership skills', captionFr: 'Clubs de filles renforçant la confiance et le leadership' },
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', alt: 'Youth empowerment', captionEn: 'Mentorship programmes with inspiring role models', captionFr: 'Programmes de mentorat avec des modèles inspirants' },
    { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80', alt: 'Community engagement', captionEn: 'Communities challenged to support equal rights for all', captionFr: 'Les communautés mobilisées pour l\'égalité des droits' },
  ],
  'srhr-community-engagement': [
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', alt: 'Community gathering', captionEn: 'Community leaders mobilized for youth health and rights', captionFr: 'Leaders communautaires mobilisés pour la santé des jeunes' },
    { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80', alt: 'Village meeting', captionEn: 'Village dialogues breaking harmful norms', captionFr: 'Dialogues villageois contre les normes néfastes' },
    { src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80', alt: 'Religious leaders', captionEn: 'Religious and traditional leaders as champions of change', captionFr: 'Leaders religieux et traditionnels comme champions du changement' },
  ],

  // ── ENTERPRISE ────────────────────────────────────────────────────────────
  'enterprise-training': [
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', alt: 'Business training', captionEn: 'Practical entrepreneurship training sessions for youth', captionFr: 'Sessions de formation pratique en entrepreneuriat pour les jeunes' },
    { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80', alt: 'Workshop participants', captionEn: 'Hands-on workshops covering business planning fundamentals', captionFr: 'Ateliers pratiques couvrant les bases de la création d\'entreprise' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', alt: 'Young entrepreneurs', captionEn: 'Young people developing their entrepreneurial potential', captionFr: 'Jeunes développant leur potentiel entrepreneurial' },
  ],
  'enterprise-talent': [
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80', alt: 'Innovation lab', captionEn: 'Hackathons and innovation contests surface breakthrough ideas', captionFr: 'Hackathons et concours d\'innovation pour les idées percutantes' },
    { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80', alt: 'Tech innovation', captionEn: 'Youth-led incubators nurture local talent', captionFr: 'Incubateurs locaux pour nourrir les talents jeunes' },
    { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', alt: 'Creative team', captionEn: 'Collaboration drives innovation in Congolese communities', captionFr: 'La collaboration stimule l\'innovation dans les communautés congolaises' },
  ],
  'enterprise-startup': [
    { src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80', alt: 'Small business', captionEn: 'Youth-led cooperatives and micro-enterprises supported', captionFr: 'Coopératives et micro-entreprises dirigées par des jeunes soutenues' },
    { src: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&q=80', alt: 'Market stall', captionEn: 'Start-up grants help ideas become viable businesses', captionFr: 'Des subventions aident les idées à devenir des entreprises viables' },
    { src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80', alt: 'Mentorship session', captionEn: 'Mentorship accelerates growth and sustainability', captionFr: 'Le mentorat accélère la croissance et la durabilité' },
  ],
  'enterprise-financial-literacy': [
    { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', alt: 'Financial planning', captionEn: 'Financial literacy builds long-term economic resilience', captionFr: 'La littératie financière renforce la résilience économique à long terme' },
    { src: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=600&q=80', alt: 'Savings group', captionEn: 'Community savings groups support shared financial goals', captionFr: 'Groupes d\'épargne communautaires pour des objectifs partagés' },
    { src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', alt: 'Budget workshop', captionEn: 'Practical budgeting tools adapted to local realities', captionFr: 'Outils de budgétisation pratiques adaptés aux réalités locales' },
  ],
  'enterprise-markets': [
    { src: 'https://images.unsplash.com/photo-1519995451813-39e29e054914?w=800&q=80', alt: 'Trade fair', captionEn: 'Trade fairs connect youth entrepreneurs with buyers', captionFr: 'Les foires commerciales connectent les jeunes entrepreneurs aux acheteurs' },
    { src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80', alt: 'Business networking', captionEn: 'Networking events open doors to new opportunities', captionFr: 'Les événements de networking ouvrent des opportunités' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Mentor and mentee', captionEn: 'One-on-one mentorship with established entrepreneurs', captionFr: 'Mentorat individuel avec des entrepreneurs établis' },
  ],
  'enterprise-inclusion': [
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', alt: 'Inclusive workshop', captionEn: 'Inclusive programmes reaching the most vulnerable youth', captionFr: 'Programmes inclusifs atteignant les jeunes les plus vulnérables' },
    { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80', alt: 'Diverse youth group', captionEn: 'Every young person deserves access to economic opportunity', captionFr: 'Chaque jeune mérite un accès aux opportunités économiques' },
    { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', alt: 'Rural youth', captionEn: 'Rural and displaced youth supported to thrive', captionFr: 'Les jeunes ruraux et déplacés soutenus pour s\'épanouir' },
  ],

  // ── PEACE ─────────────────────────────────────────────────────────────────
  'peace-participation': [
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', alt: 'Community meeting', captionEn: 'Youth delegates participate in local peace councils', captionFr: 'Des délégués jeunes participent aux conseils de paix locaux' },
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', alt: 'Governance forum', captionEn: 'Youth voices shape local governance and decision-making', captionFr: 'Les voix jeunes façonnent la gouvernance locale' },
    { src: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&q=80', alt: 'Peace dialogue', captionEn: 'Inter-community dialogues led by trained youth mediators', captionFr: 'Dialogues inter-communautaires menés par des médiateurs jeunes' },
  ],
  'peace-conflict-prevention': [
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', alt: 'Mediation training', captionEn: 'Mediation and conflict resolution training for youth', captionFr: 'Formation à la médiation et à la résolution de conflits' },
    { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80', alt: 'Dialogue session', captionEn: 'Non-violent communication workshops transform communities', captionFr: 'Des ateliers de communication non-violente transforment les communautés' },
    { src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80', alt: 'Peace circle', captionEn: 'Youth-led peace circles create safe spaces for dialogue', captionFr: 'Cercles de paix menés par les jeunes pour le dialogue' },
  ],
  'peace-civic-education': [
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', alt: 'Civic education class', captionEn: 'Interactive workshops on rights, democracy and justice', captionFr: 'Ateliers interactifs sur les droits, la démocratie et la justice' },
    { src: 'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?w=600&q=80', alt: 'Youth voting', captionEn: 'Young citizens empowered to engage in civic life', captionFr: 'Jeunes citoyens habilités à participer à la vie civique' },
    { src: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&q=80', alt: 'Discussion group', captionEn: 'Discussions on social justice and constitutional rights', captionFr: 'Discussions sur la justice sociale et les droits constitutionnels' },
  ],
  'peace-extremism-prevention': [
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', alt: 'Youth resilience', captionEn: 'Building resilience against radicalization in communities', captionFr: 'Renforcer la résilience contre la radicalisation dans les communautés' },
    { src: 'https://images.unsplash.com/photo-1551818255-e6e10579bd57?w=600&q=80', alt: 'Youth workshop', captionEn: 'Counter-narrative programmes rooted in local culture', captionFr: 'Programmes de contre-narratifs ancrés dans la culture locale' },
    { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80', alt: 'Community cohesion', captionEn: 'Unity and shared identity as antidotes to extremism', captionFr: 'L\'unité et l\'identité partagée comme antidotes à l\'extrémisme' },
  ],
  'peace-social-cohesion': [
    { src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80', alt: 'Cross-community project', captionEn: 'Inter-community projects build bridges across differences', captionFr: 'Projets inter-communautaires pour relier les différences' },
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', alt: 'Youth gathering', captionEn: 'Youth-led governance strengthens community trust', captionFr: 'La gouvernance menée par les jeunes renforce la confiance' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', alt: 'Community event', captionEn: 'Shared activities foster social cohesion and belonging', captionFr: 'Les activités partagées favorisent la cohésion et l\'appartenance' },
  ],
  'peace-leadership': [
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Youth leader', captionEn: 'Young leaders driving reconciliation in their communities', captionFr: 'Jeunes leaders portant la réconciliation dans leurs communautés' },
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', alt: 'Team leadership', captionEn: 'Micro-projects funded by youth for community healing', captionFr: 'Micro-projets financés par les jeunes pour la guérison communautaire' },
    { src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80', alt: 'Reconciliation ceremony', captionEn: 'Youth accountability strengthens post-conflict recovery', captionFr: 'La responsabilité des jeunes renforce la reconstruction post-conflit' },
  ],

  // ── CLIMATE ───────────────────────────────────────────────────────────────
  'climate-education': [
    { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', alt: 'Environmental education', captionEn: 'Youth climate camps spark environmental consciousness', captionFr: 'Les camps climatiques jeunesse éveillent la conscience environnementale' },
    { src: 'https://images.unsplash.com/photo-1569163139394-de44cb27a4b9?w=600&q=80', alt: 'Climate classroom', captionEn: 'Climate curricula integrated in partner schools', captionFr: 'Curricula climatiques intégrés dans les écoles partenaires' },
    { src: 'https://images.unsplash.com/photo-1497435334941-8c899a9b0249?w=600&q=80', alt: 'Nature awareness', captionEn: 'Young ambassadors lead community awareness campaigns', captionFr: 'Jeunes ambassadeurs mènent des campagnes de sensibilisation' },
  ],
  'climate-adaptation': [
    { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80', alt: 'Farming adaptation', captionEn: 'Drought-resistant crops protect food security under climate stress', captionFr: 'Cultures résistantes à la sécheresse pour la sécurité alimentaire' },
    { src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80', alt: 'Irrigation system', captionEn: 'Adapted irrigation systems designed by youth engineers', captionFr: 'Systèmes d\'irrigation adaptés conçus par les jeunes' },
    { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Community resilience', captionEn: 'Flood-resilient infrastructure protects vulnerable communities', captionFr: 'Infrastructure résiliente aux inondations protège les communautés' },
  ],
  'climate-natural-resources': [
    { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80', alt: 'Forest management', captionEn: 'Agroforestry preserves Minembwe\'s vital natural resources', captionFr: 'L\'agroforesterie préserve les ressources naturelles de Minembwe' },
    { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80', alt: 'Watershed', captionEn: 'Watershed management ensures clean water for future generations', captionFr: 'Gestion des bassins versants pour les générations futures' },
    { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Sustainable farming', captionEn: 'Sustainable farming practices adopted across the territory', captionFr: 'Pratiques agricoles durables adoptées dans tout le territoire' },
  ],
  'climate-green-skills': [
    { src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80', alt: 'Solar panels', captionEn: 'Solar panel installation training creates local green jobs', captionFr: 'La formation à l\'installation solaire crée des emplois verts locaux' },
    { src: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80', alt: 'Organic farming', captionEn: 'Organic farming and eco-product manufacturing for livelihoods', captionFr: 'Agriculture biologique et fabrication de produits écologiques' },
    { src: 'https://images.unsplash.com/photo-1497435334941-8c899a9b0249?w=600&q=80', alt: 'Green enterprise', captionEn: 'Youth eco-entrepreneurs building a sustainable local economy', captionFr: 'Éco-entrepreneurs jeunes construisant une économie locale durable' },
  ],
  'climate-reforestation': [
    { src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80', alt: 'Tree planting', captionEn: 'Annual tree planting campaigns restore degraded ecosystems', captionFr: 'Campagnes annuelles de plantation restaurent les écosystèmes dégradés' },
    { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Community nursery', captionEn: 'Community nurseries managed entirely by young people', captionFr: 'Pépinières communautaires entièrement gérées par les jeunes' },
    { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', alt: 'Forest restoration', captionEn: 'Participatory mapping identifies priority restoration zones', captionFr: 'Cartographie participative des zones prioritaires à restaurer' },
  ],
  'climate-advocacy': [
    { src: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80', alt: 'Climate advocacy', captionEn: 'Youth delegates amplify community voices at national forums', captionFr: 'Délégués jeunes amplifiant les voix communautaires aux forums nationaux' },
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Conference participation', captionEn: 'Young advocates trained to engage policymakers effectively', captionFr: 'Jeunes plaideurs formés pour engager efficacement les décideurs' },
    { src: 'https://images.unsplash.com/photo-1497435334941-8c899a9b0249?w=600&q=80', alt: 'Environment rally', captionEn: 'Alternative reports submitted to government bodies', captionFr: 'Rapports alternatifs soumis aux instances gouvernementales' },
  ],

  // ── RESEARCH ──────────────────────────────────────────────────────────────
  'research-participatory': [
    { src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80', alt: 'Community research', captionEn: 'Youth trained as community researchers in the field', captionFr: 'Jeunes formés comme chercheurs communautaires sur le terrain' },
    { src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80', alt: 'Data collection', captionEn: 'Qualitative and quantitative data collected from communities', captionFr: 'Données qualitatives et quantitatives collectées dans les communautés' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', alt: 'Focus group', captionEn: 'Community perspectives drive programme design', captionFr: 'Les perspectives communautaires guident la conception des programmes' },
  ],
  'research-evidence-advocacy': [
    { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', alt: 'Data analysis', captionEn: 'Research findings power targeted advocacy campaigns', captionFr: 'Les résultats de recherche alimentent des campagnes de plaidoyer ciblées' },
    { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80', alt: 'Policy engagement', captionEn: 'Evidence presented to Congolese policymakers', captionFr: 'Preuves présentées aux décideurs politiques congolais' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80', alt: 'Strategy meeting', captionEn: 'International partners engaged for systemic change', captionFr: 'Partenaires internationaux mobilisés pour un changement systémique' },
  ],
  'research-learning': [
    { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', alt: 'Knowledge sharing', captionEn: 'Cross-organisational forums share lessons and best practices', captionFr: 'Forums inter-organisations pour partager leçons et bonnes pratiques' },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80', alt: 'Digital platform', captionEn: 'Digital platforms disseminate research to wider audiences', captionFr: 'Plateformes numériques pour diffuser la recherche' },
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', alt: 'Training session', captionEn: 'Capacity strengthened through peer learning exchanges', captionFr: 'Capacités renforcées par des échanges d\'apprentissage entre pairs' },
  ],
  'research-monitoring': [
    { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', alt: 'Programme monitoring', captionEn: 'Participatory monitoring tools track real community impact', captionFr: 'Outils de suivi participatif pour mesurer l\'impact communautaire réel' },
    { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', alt: 'Impact dashboard', captionEn: 'Community dashboards make programme data transparent', captionFr: 'Tableaux de bord communautaires pour la transparence des données' },
    { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', alt: 'Review meeting', captionEn: 'Quarterly reviews keep beneficiaries central to evaluation', captionFr: 'Revues trimestrielles avec les bénéficiaires au centre de l\'évaluation' },
  ],
  'research-transformative': [
    { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', alt: 'Innovation lab', captionEn: 'Social innovation labs co-design solutions with communities', captionFr: 'Laboratoires d\'innovation sociale co-conçoivent des solutions' },
    { src: 'https://images.unsplash.com/photo-1519995451813-39e29e054914?w=600&q=80', alt: 'Research and creativity', captionEn: 'Empirical research combined with youth creativity', captionFr: 'Recherche empirique combinée à la créativité des jeunes' },
    { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', alt: 'Community solutions', captionEn: 'Complex community problems solved through research-driven innovation', captionFr: 'Problèmes communautaires complexes résolus par l\'innovation' },
  ],
  'research-amplify-voices': [
    { src: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80', alt: 'Youth speaking out', captionEn: 'Young voices amplified through community media platforms', captionFr: 'Voix jeunes amplifiées par des plateformes médiatiques communautaires' },
    { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80', alt: 'Youth podcast', captionEn: 'Youth podcasts reach thousands across the territory', captionFr: 'Podcasts jeunesse atteignant des milliers de personnes' },
    { src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80', alt: 'Decision-making space', captionEn: 'Youth represented in key decision-making spaces', captionFr: 'Jeunes représentés dans les espaces de prise de décision' },
  ],
}

// Default fallback photos if slug not found
const DEFAULT_PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', alt: 'Community programme', captionEn: 'Community programme in action', captionFr: 'Programme communautaire en action' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', alt: 'Youth engagement', captionEn: 'Youth engagement and capacity building', captionFr: 'Engagement des jeunes et renforcement des capacités' },
  { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80', alt: 'ADJC impact', captionEn: 'ADJC creating lasting impact', captionFr: 'ADJC créant un impact durable' },
]

/** Returns the 3 photos for the current slug */
const slugPhotos = computed(() => PHOTO_MAP[props.slug] ?? DEFAULT_PHOTOS)
</script>

<style scoped>
/* Scoped rich-text styles for the v-html article block */
.prose-adjc :deep(h2) {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-navy);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: 1.15;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.prose-adjc :deep(h3) {
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-navy);
  font-size: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 0.6rem;
  padding-left: 0.75rem;
  border-left: 3px solid var(--color-red);
}

.prose-adjc :deep(p) {
  color: color-mix(in srgb, var(--color-navy) 65%, transparent);
  font-size: 0.95rem;
  line-height: 1.9;
  margin-bottom: 1.25rem;
}

.prose-adjc :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 1rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.prose-adjc :deep(ul li) {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  color: color-mix(in srgb, var(--color-navy) 65%, transparent);
  font-size: 0.9rem;
  line-height: 1.75;
}

.prose-adjc :deep(ul li)::before {
  content: '▸';
  color: var(--color-red);
  flex-shrink: 0;
  margin-top: 0.1rem;
  font-size: 0.75rem;
}

/* ── Photo Gallery ───────────────────────────────────────────────────── */
.photo-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 0.5rem;
  border-radius: 1rem;
  overflow: hidden;
}

.photo-featured {
  grid-column: 1;
  grid-row: 1 / 3;
  position: relative;
  overflow: hidden;
  height: 360px;
  background: color-mix(in srgb, var(--color-navy) 10%, transparent);
}

.photo-secondary-stack {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.photo-secondary {
  position: relative;
  overflow: hidden;
  height: 175px;
  background: color-mix(in srgb, var(--color-navy) 10%, transparent);
}

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 55%);
  display: flex;
  align-items: flex-end;
  padding: 0.875rem 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-featured:hover .photo-overlay,
.photo-secondary:hover .photo-overlay {
  opacity: 1;
}

.photo-caption {
  font-family: var(--font-body, sans-serif);
  font-size: 0.72rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.4;
  letter-spacing: 0.01em;
}

/* Responsive: stack vertically on small screens */
@media (max-width: 580px) {
  .photo-gallery {
    grid-template-columns: 1fr;
  }

  .photo-featured {
    grid-column: 1;
    grid-row: 1;
    height: 220px;
  }

  .photo-secondary-stack {
    grid-column: 1;
    grid-row: 2;
    flex-direction: row;
  }

  .photo-secondary {
    flex: 1;
    height: 140px;
  }
}
</style>