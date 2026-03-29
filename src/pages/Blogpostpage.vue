<template>
  <div class="blog-post-page">

    <!-- ═══ HERO ═══ -->
    <section class="relative bg-navy-dark min-h-[50vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>

      <!-- Hero image -->
      <div class="absolute inset-0">
        <img :src="post.img" :alt="lang === 'fr' ? post.titleFr : post.titleEn" class="w-full h-full object-cover" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/30"></div>

      <div class="relative max-w-[860px] mx-auto px-8 pb-14 w-full">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-6">
          <button @click="$emit('navigate', 'home')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">
            {{ lang === 'fr' ? 'Accueil' : 'Home' }}
          </button>
          <span class="text-white/20 text-xs">›</span>
          <button @click="$emit('navigate', 'blognews')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">
            {{ lang === 'fr' ? 'Actualités & Blog' : 'Blog & News' }}
          </button>
          <span class="text-white/20 text-xs">›</span>
          <span class="text-red font-body text-xs font-semibold truncate max-w-[200px]">
            {{ lang === 'fr' ? post.catFr : post.catEn }}
          </span>
        </div>

        <!-- Category badge -->
        <div class="mb-4">
          <span
            class="bg-red text-white font-body font-semibold text-[.6rem] tracking-[2px] uppercase px-3 py-1.5 rounded-full">
            {{ lang === 'fr' ? post.catFr : post.catEn }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="font-display font-bold text-white leading-[1.08]" style="font-size:clamp(1.8rem,4vw,3rem)">
          {{ lang === 'fr' ? post.titleFr : post.titleEn }}
        </h1>

        <!-- Meta row -->
        <div class="flex flex-wrap items-center gap-4 mt-6">
          <div class="flex items-center gap-2.5">
            <div
              class="w-9 h-9 rounded-full bg-navy/40 border-2 border-white/20 flex items-center justify-center font-bold text-white text-sm">
              {{ post.author.charAt(0) }}
            </div>
            <div>
              <p class="font-body font-semibold text-white text-xs">{{ post.author }}</p>
              <p class="font-body text-white/40 text-[.62rem]">{{ post.role }}</p>
            </div>
          </div>
          <span class="text-white/20">·</span>
          <span class="text-white/50 font-body text-xs">{{ post.date }}</span>
          <span class="text-white/20">·</span>
          <span class="text-white/50 font-body text-xs">{{ post.readTime }} {{ lang === 'fr' ? `min de lecture` : `min
            read` }}</span>
        </div>
      </div>
    </section>

    <!-- ═══ ARTICLE BODY ═══ -->
    <section class="bg-white py-14">
      <div class="max-w-[860px] mx-auto px-8">

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-10 pb-8 border-b border-navy/[.08]">
          <span v-for="tag in post.tags" :key="tag"
            class="bg-navy/[.06] text-navy/60 font-body text-[.62rem] font-semibold px-2.5 py-1 rounded-full">
            #{{ tag }}
          </span>
        </div>

        <!-- Lead / excerpt -->
        <p
          class="text-navy/70 font-body font-light leading-[1.95] text-[1.05rem] mb-10 border-l-4 border-red pl-5 italic">
          {{ lang === 'fr' ? post.excerptFr : post.excerptEn }}
        </p>

        <!-- ── PICTURE PLACEHOLDER 1 — Top of article ── -->
        <div
          class="relative rounded-2xl overflow-hidden mb-10 bg-navy/[.04] border-2 border-dashed border-navy/20 aspect-[16/9] flex flex-col items-center justify-center gap-3">
          <div class="text-4xl opacity-30">🖼️</div>
          <p class="font-body text-navy/30 text-sm font-medium">{{ lang === 'fr' ? `Ajouter une photo ici` : `Add a
            photo here` }}</p>
          <p class="font-body text-navy/20 text-xs">{{ lang === 'fr' ? `Photo principale de l\'article · 16:9
            recommandé` : `Main article photo · 16: 9 recommended` }}</p>
        </div>

        <!-- Article body HTML -->
        <article class="prose-adjc" v-html="lang === 'fr' ? post.bodyFr : post.bodyEn"></article>

        <!-- ── PICTURE PLACEHOLDER 2 — Mid article ── -->
        <div
          class="relative rounded-2xl overflow-hidden my-10 bg-navy/[.04] border-2 border-dashed border-navy/20 aspect-[3/2] flex flex-col items-center justify-center gap-3">
          <div class="text-4xl opacity-30">📷</div>
          <p class="font-body text-navy/30 text-sm font-medium">{{ lang === 'fr' ? `Photo ou illustration` : `Photo or
            illustration` }}</p>
          <p class="font-body text-navy/20 text-xs">{{ lang === 'fr' ? 'Activités sur le terrain · 3:2 recommandé' :
            'Field activity photo · 3:2 recommended' }}</p>
        </div>

        <!-- ── PICTURE PLACEHOLDER 3 — Gallery strip ── -->
        <div class="mb-10">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-6 h-[2px] bg-red"></div>
            <span class="text-navy font-display font-semibold text-sm">
              {{ lang === 'fr' ? 'Galerie Photos' : 'Photo Gallery' }}
            </span>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div v-for="n in 3" :key="n"
              class="aspect-square rounded-xl bg-navy/[.04] border-2 border-dashed border-navy/20 flex flex-col items-center justify-center gap-2">
              <div class="text-2xl opacity-30">📸</div>
              <p class="font-body text-navy/25 text-[.65rem] text-center px-2">
                {{ lang === 'fr' ? `Photo ${n}` : `Photo ${n}` }}
              </p>
            </div>
          </div>
        </div>

        <!-- Tags bottom -->
        <div class="pt-8 border-t border-navy/[.08] flex flex-wrap gap-2 mb-10">
          <span class="text-navy/40 font-body text-xs font-semibold mr-2">Tags:</span>
          <span v-for="tag in post.tags" :key="tag"
            class="bg-navy/[.06] hover:bg-red/10 hover:text-red text-navy/60 font-body text-[.62rem] font-semibold px-2.5 py-1 rounded-full cursor-pointer transition-colors duration-200"
            @click="$emit('navigate', 'blognews')">
            #{{ tag }}
          </span>
        </div>

        <!-- Action buttons -->
        <div class="flex flex-wrap gap-4">
          <button @click="$emit('navigate', 'blognews')"
            class="flex items-center gap-2 bg-navy text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer hover:-translate-y-0.5 hover:bg-navy/90 transition-all duration-200">
            ← {{ lang === 'fr' ? 'Retour aux articles' : 'Back to articles' }}
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

const props = defineProps({
  postId: { type: Number, required: true },
})
defineEmits(['navigate'])

const { lang } = useTranslations()
onMounted(() => window.scrollTo({ top: 0, behavior: 'smooth' }))

// ── All posts data (same as BlogNewsPage) ─────────────────────────────────────
const allPosts = [
  {
    id: 1, img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80', category: 'news', emoji: '🌱',
    bg: 'linear-gradient(135deg,#1A3A0A,#2E6012)',
    date: '15 Mars 2026', readTime: 4,
    author: 'Jean-Pierre Kabila', role: 'Directeur Exécutif',
    catFr: 'Actualités', catEn: 'News',
    titleFr: 'Lancement du Programme National de Bourses 2026 pour 500 Jeunes',
    titleEn: '2026 National Scholarship Program Launched for 500 Youth',
    excerptFr: "L'ADJC annonce son programme le plus ambitieux à ce jour — 500 bourses distribuées dans toutes les provinces de la RDC pour l'année scolaire 2026-2027.",
    excerptEn: "ADJC announces its most ambitious program to date — 500 scholarships distributed across all provinces of the DRC for the 2026-2027 school year.",
    tags: ['bourses', 'éducation', 'RDC', 'jeunesse'],
    bodyFr: `<p>C'est avec une immense fierté que l'ADJC annonce le lancement de son Programme National de Bourses 2026. Cette initiative sans précédent permettra à <strong>500 jeunes congolais</strong> d'accéder à une éducation de qualité, indépendamment de leur situation économique.</p>
<h3>Critères de sélection</h3>
<p>Les candidats seront évalués sur la base de leur excellence académique, leur engagement communautaire et leur situation socio-économique. Les dossiers sont ouverts jusqu'au 30 avril 2026.</p>
<h3>Impact attendu</h3>
<p>Ce programme s'inscrit dans notre vision à long terme d'un Congo où chaque jeune talentueux, quelle que soit son origine, peut réaliser son plein potentiel. Avec 500 bénéficiaires directs et un effet multiplicateur sur leurs familles et communautés, nous estimons toucher plus de 2 500 personnes.</p>`,
    bodyEn: `<p>It is with immense pride that ADJC announces the launch of its 2026 National Scholarship Program. This unprecedented initiative will give <strong>500 young Congolese</strong> access to quality education, regardless of their economic situation.</p>
<h3>Selection criteria</h3>
<p>Candidates will be assessed on academic excellence, community engagement, and socio-economic circumstances. Applications are open until April 30, 2026.</p>
<h3>Expected impact</h3>
<p>This programme aligns with our long-term vision of a Congo where every talented young person, regardless of background, can reach their full potential. With 500 direct beneficiaries and a multiplier effect on their families and communities, we expect to reach over 2,500 people.</p>`,
  },
  {
    id: 2, img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80', category: 'events', emoji: '🎤',
    bg: 'linear-gradient(135deg,#A81E1E,#D42B2B)',
    date: '8 Mars 2026', readTime: 3,
    author: 'Amina Kasongo', role: 'Communication',
    catFr: 'Événements', catEn: 'Events',
    titleFr: 'Forum National de la Jeunesse — Kinshasa 2026 : Un Succès Retentissant',
    titleEn: 'National Youth Forum — Kinshasa 2026: A Resounding Success',
    excerptFr: "800 jeunes leaders réunis pour deux jours d'ateliers et d'échanges intenses sur l'avenir du Congo.",
    excerptEn: "800 young leaders gathered for two days of intensive workshops and exchanges on the future of Congo.",
    tags: ['forum', 'leadership', 'Kinshasa', 'jeunesse'],
    bodyFr: `<p>Le Forum National de la Jeunesse 2026 a réuni <strong>800 jeunes leaders</strong> venus des quatre coins de la République Démocratique du Congo. Pendant deux jours intenses, participants et intervenants ont débattu des grands enjeux qui façonneront l'avenir du pays.</p>
<h3>Temps forts de l'événement</h3>
<p>Parmi les moments marquants : une table ronde sur la participation des jeunes dans les processus de paix, un atelier pratique sur l'entrepreneuriat numérique, et une session de plaidoyer devant des représentants du gouvernement.</p>
<h3>Déclaration finale</h3>
<p>Le forum s'est conclu par l'adoption d'une déclaration commune appelant à une plus grande inclusion des jeunes dans les décisions politiques locales et nationales.</p>`,
    bodyEn: `<p>The 2026 National Youth Forum brought together <strong>800 young leaders</strong> from every corner of the DRC. Over two intense days, participants and speakers debated the major issues that will shape the country's future.</p>
<h3>Event highlights</h3>
<p>Key moments included a roundtable on youth participation in peace processes, a practical workshop on digital entrepreneurship, and an advocacy session before government representatives.</p>
<h3>Final declaration</h3>
<p>The forum concluded with the adoption of a joint declaration calling for greater inclusion of young people in local and national political decisions.</p>`,
  },
  {
    id: 3, img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80', category: 'news', emoji: '🤝',
    bg: 'linear-gradient(135deg,#1A3A0A,#2E6012)',
    date: '22 Fév 2026', readTime: 3,
    author: 'Jean-Pierre Kabila', role: 'Directeur Exécutif',
    catFr: 'Actualités', catEn: 'News',
    titleFr: "Nouveau Partenariat avec l'Union Européenne pour l'Emploi Jeune",
    titleEn: 'New EU Partnership for Youth Employment',
    excerptFr: "Un financement sur 3 ans signé avec l'UE pour accélérer la création d'emplois durables pour les jeunes en RDC.",
    excerptEn: "A 3-year funding agreement signed with the EU to accelerate the creation of sustainable jobs for youth in the DRC.",
    tags: ['partenariat', 'UE', 'emploi', 'entrepreneuriat'],
    bodyFr: `<p>L'ADJC a officiellement signé un accord de partenariat avec la délégation de l'Union Européenne en RDC. Ce financement triennal représente un investissement de <strong>2,4 millions d'euros</strong> dans l'entrepreneuriat jeune et la création d'emplois durables.</p>
<h3>Objectifs du programme</h3>
<p>Sur trois ans, ce partenariat permettra de former 1 200 jeunes entrepreneurs, de financer 300 start-ups et coopératives, et de créer un accès au marché pour les jeunes producteurs ruraux.</p>`,
    bodyEn: `<p>ADJC officially signed a partnership agreement with the EU Delegation in the DRC. This three-year funding represents an investment of <strong>€2.4 million</strong> in youth entrepreneurship and sustainable job creation.</p>
<h3>Programme objectives</h3>
<p>Over three years, this partnership will train 1,200 young entrepreneurs, fund 300 start-ups and cooperatives, and create market access for young rural producers.</p>`,
  },
  {
    id: 4, img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1200&q=80', category: 'stories', emoji: '💪',
    bg: 'linear-gradient(135deg,#234D0E,#1A3A0A)',
    date: '10 Fév 2026', readTime: 5,
    author: 'Marie-Cé Nzuzi', role: 'Dir. Programmes',
    catFr: 'Témoignages', catEn: 'Stories',
    titleFr: "Bénédicte, de Bénéficiaire à Entrepreneuse : Son Parcours Inspirant",
    titleEn: "Bénédicte, from Beneficiary to Entrepreneur: Her Inspiring Journey",
    excerptFr: "À 24 ans, Bénédicte dirige aujourd'hui une PME de transformation alimentaire à Kinshasa qui emploie 12 personnes.",
    excerptEn: "At 24, Bénédicte now runs a food processing SME in Kinshasa employing 12 people.",
    tags: ['témoignage', 'entrepreneuriat', 'femmes', 'Kinshasa'],
    bodyFr: `<p>En 2022, Bénédicte Mukendi était une étudiante brillante mais sans ressources. Aujourd'hui, à 24 ans, elle dirige <strong>Saveurs du Congo</strong>, une PME de transformation alimentaire qui emploie 12 personnes à Kinshasa.</p>
<p>"Quand j'ai reçu ma bourse ADJC, c'était bien plus qu'une aide financière. C'était la confirmation que quelqu'un croyait en moi," confie-t-elle.</p>
<h3>De la bourse à l'entrepreneuriat</h3>
<p>Après ses études en gestion, Bénédicte a intégré le programme d'entrepreneuriat de l'ADJC. Avec un micro-financement de 2 500$, elle a lancé sa première ligne de produits dérivés du manioc, aujourd'hui distribuée dans 3 supermarchés de la capitale.</p>`,
    bodyEn: `<p>In 2022, Bénédicte Mukendi was a brilliant but financially struggling student. Today, at 24, she runs <strong>Saveurs du Congo</strong>, a food processing SME employing 12 people in Kinshasa.</p>
<p>"When I received my ADJC scholarship, it was much more than financial support. It was confirmation that someone believed in me," she says.</p>
<h3>From scholarship to entrepreneurship</h3>
<p>After studying business management, Bénédicte joined ADJC's entrepreneurship programme. With a $2,500 micro-grant, she launched her first line of cassava-based products, now distributed in 3 Kinshasa supermarkets.</p>`,
  },
  {
    id: 5, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80', category: 'blog', emoji: '☮️',
    bg: 'linear-gradient(135deg,#0A2A3A,#0E3D52)',
    date: '28 Jan 2026', readTime: 6,
    author: 'Patrick Lumumba', role: 'Responsable Terrain',
    catFr: 'Blog', catEn: 'Blog',
    titleFr: 'Jeunes Médiateurs de Paix : Leçons du Terrain à Minembwe',
    titleEn: 'Young Peace Mediators: Lessons from the Field in Minembwe',
    excerptFr: "Après 18 mois de formation, nos jeunes médiateurs de paix ont résolu 47 conflits communautaires à Minembwe.",
    excerptEn: "After 18 months of training, our young peace mediators have resolved 47 community conflicts in Minembwe.",
    tags: ['paix', 'Minembwe', 'médiation', 'terrain'],
    bodyFr: `<p>Le territoire de Minembwe, au Sud-Kivu, est l'un des contextes les plus complexes dans lesquels nous intervenons. Depuis 2024, notre programme de médiation communautaire a formé <strong>32 jeunes médiateurs</strong>.</p>
<h3>Ce que nous avons appris</h3>
<p>La clé du succès réside dans la légitimité des médiateurs auprès de leurs communautés. Sur 47 conflits traités, 41 ont abouti à une résolution durable — un taux de succès de 87%.</p>`,
    bodyEn: `<p>The Minembwe territory in South Kivu is one of the most complex contexts in which we operate. Since 2024, our community mediation programme has trained <strong>32 young mediators</strong>.</p>
<h3>What we learned</h3>
<p>The key to success lies in the legitimacy of mediators within their communities. Of 47 conflicts handled, 41 resulted in a lasting resolution — an 87% success rate.</p>`,
  },
  {
    id: 6, img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=80', category: 'programs', emoji: '🌿',
    bg: 'linear-gradient(135deg,#1A3A0A,#2E5010)',
    date: '15 Jan 2026', readTime: 4,
    author: 'Marie-Cé Nzuzi', role: 'Dir. Programmes',
    catFr: 'Programmes', catEn: 'Programs',
    titleFr: '5 000 Arbres Plantés : Notre Bilan Environnemental 2025',
    titleEn: '5,000 Trees Planted: Our 2025 Environmental Report',
    excerptFr: "En 2025, nos jeunes ambassadeurs climatiques ont planté 5 000 arbres dans 8 communautés rurales.",
    excerptEn: "In 2025, our young climate ambassadors planted 5,000 trees across 8 rural communities.",
    tags: ['climat', 'arbres', 'environnement', '2025'],
    bodyFr: `<p>L'année 2025 a marqué un tournant dans notre programme de résilience climatique. Grâce à l'engagement de <strong>180 jeunes ambassadeurs climatiques</strong>, l'ADJC a planté 5 000 arbres dans 8 communautés rurales.</p>
<h3>Espèces plantées</h3>
<p>Notre approche agroforestière privilégie les espèces locales : eucalyptus, moringa, caféier arabica et bananier.</p>`,
    bodyEn: `<p>The year 2025 marked a turning point in our climate resilience programme. Thanks to <strong>180 young climate ambassadors</strong>, ADJC planted 5,000 trees across 8 rural communities.</p>
<h3>Species planted</h3>
<p>Our agroforestry approach favours local species: eucalyptus, moringa, arabica coffee and banana trees.</p>`,
  },
  {
    id: 7, img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80', category: 'blog', emoji: '🔬',
    bg: 'linear-gradient(135deg,#2A1A3A,#3D0E52)',
    date: '5 Jan 2026', readTime: 7,
    author: 'Jean-Pierre Kabila', role: 'Directeur Exécutif',
    catFr: 'Blog', catEn: 'Blog',
    titleFr: 'Le Modèle UPG : Comment Nous Mesurons Notre Impact',
    titleEn: 'The UPG Model: How We Measure Our Impact',
    excerptFr: "Notre modèle Unité-Participation-Gouvernance est au cœur de toutes nos interventions.",
    excerptEn: "Our Unity-Participation-Governance model is at the heart of all our interventions.",
    tags: ['UPG', 'impact', 'recherche', 'méthodologie'],
    bodyFr: `<p>Depuis la fondation de l'ADJC en 2010, nous avons développé le <strong>Modèle UPG</strong> (Unité – Participation – Gouvernance).</p>
<h3>Les trois piliers</h3>
<p><strong>Unité :</strong> Les communautés doivent être unies autour d'objectifs communs.</p>
<p><strong>Participation :</strong> Les jeunes doivent être acteurs, pas seulement bénéficiaires. Notre taux de participation active est de 78%.</p>
<p><strong>Gouvernance :</strong> Les changements doivent être intégrés dans les structures locales pour être durables.</p>`,
    bodyEn: `<p>Since ADJC's founding in 2010, we have developed the <strong>UPG Model</strong> (Unity – Participation – Governance).</p>
<h3>The three pillars</h3>
<p><strong>Unity:</strong> Communities must be united around shared objectives.</p>
<p><strong>Participation:</strong> Young people must be actors, not merely beneficiaries. Our active participation rate stands at 78%.</p>
<p><strong>Governance:</strong> Changes must be integrated into local governance structures to be sustainable.</p>`,
  },
  {
    id: 8, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', category: 'stories', emoji: '🛡️',
    bg: 'linear-gradient(135deg,#3A1A0A,#5C2E0E)',
    date: '20 Déc 2025', readTime: 4,
    author: 'Amina Kasongo', role: 'Communication',
    catFr: 'Témoignages', catEn: 'Stories',
    titleFr: "Fatuma : Comment l'ADJC a Changé Ma Vision du Leadership",
    titleEn: 'Fatuma: How ADJC Changed My Vision of Leadership',
    excerptFr: "Ancienne bénéficiaire du programme SSRD à Goma, Fatuma est aujourd'hui coordinatrice d'un réseau de 200 femmes leaders.",
    excerptEn: "Former SRHR programme beneficiary in Goma, Fatuma now coordinates a network of 200 women leaders.",
    tags: ['genre', 'leadership', 'Goma', 'femmes'],
    bodyFr: `<p>Fatuma Samba avait 19 ans quand elle a rejoint les ateliers SSRD de l'ADJC à Goma en 2021. Cinq ans plus tard, elle coordonne un réseau de <strong>200 femmes leaders</strong> dans le Nord-Kivu.</p>
<h3>Un réseau qui grandit</h3>
<p>Le réseau "Femmes Debout Nord-Kivu" organise chaque mois des sessions de sensibilisation dans 15 localités.</p>`,
    bodyEn: `<p>Fatuma Samba was 19 when she joined ADJC's SRHR workshops in Goma in 2021. Five years later, she coordinates a network of <strong>200 women leaders</strong> in North Kivu.</p>
<h3>A growing network</h3>
<p>The network "Femmes Debout Nord-Kivu" organises monthly awareness sessions across 15 localities.</p>`,
  },
]

const post = allPosts.find(p => p.id === props.postId) ?? allPosts[0]
</script>

<style scoped>
.prose-adjc :deep(h3) {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-navy);
  font-size: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 0.6rem;
  padding-left: 0.75rem;
  border-left: 3px solid var(--color-red);
}

.prose-adjc :deep(p) {
  color: color-mix(in srgb, var(--color-navy) 65%, transparent);
  font-size: 0.96rem;
  line-height: 1.9;
  margin-bottom: 1.2rem;
}

.prose-adjc :deep(strong) {
  color: var(--color-navy);
  font-weight: 700;
}
</style>