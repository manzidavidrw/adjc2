<template>
  <div class="blog-post-page">

    <!-- ═══ HERO ═══ -->
    <section class="relative bg-navy-dark min-h-[50vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>

      <div class="absolute inset-0">
        <img :src="post.img" :alt="lang === 'fr' ? post.titleFr : post.titleEn" class="w-full h-full object-cover" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/30"></div>

      <div class="relative max-w-[860px] mx-auto px-8 pb-14 w-full">
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

        <div class="mb-4">
          <span
            class="bg-red text-white font-body font-semibold text-[.6rem] tracking-[2px] uppercase px-3 py-1.5 rounded-full">
            {{ lang === 'fr' ? post.catFr : post.catEn }}
          </span>
        </div>

        <h1 class="font-display font-bold text-white leading-[1.08]" style="font-size:clamp(1.8rem,4vw,3rem)">
          {{ lang === 'fr' ? post.titleFr : post.titleEn }}
        </h1>

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

        <!-- Picture placeholder — top of article -->
        <div class="relative rounded-2xl overflow-hidden mb-10 aspect-[16/9]">
          <img :src="post.imgTop" :alt="lang === 'fr' ? post.titleFr : post.titleEn"
            class="w-full h-full object-cover" />
        </div>

        <!-- Article body HTML -->
        <article class="prose-adjc" v-html="lang === 'fr' ? post.bodyFr : post.bodyEn"></article>

        <!-- Picture placeholder — mid article -->
        <div class="relative rounded-2xl overflow-hidden my-10 aspect-[3/2]">
          <img :src="post.imgMid" :alt="lang === 'fr' ? post.titleFr : post.titleEn"
            class="w-full h-full object-cover" />
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
import launch from '../assets/launching.jpeg'
import five from '../assets/five.jpeg'
import sake from '../assets/sake.jpeg'
import hundred from '../assets/hundred.jpeg'
import participate from '../assets/participate.jpeg'
import froms from '../assets/from.jpeg'
import people from '../assets/people.jpeg'


const allPosts = [
  {
    id: 1,
    img: launch,
    imgTop: five,
    imgMid: sake,
    category: 'blog', date: '7 Novembre 2025', readTime: 5,
    author: 'ADJC', role: 'Équipe ADJC',
    catFr: 'Blog', catEn: 'Blog',
    titleFr: 'Lancement d\'une Étude sur les Besoins Non Satisfaits des Jeunes Femmes Survivantes de Violences Sexuelles en RDC',
    titleEn: 'Launching a Critical Study on the Unmet Needs of Young Women Survivors of Sexual Violence in Eastern DRC',
    excerptFr: "L'ADJC rejoint ses partenaires à Goma pour renforcer l'action fondée sur des preuves en faveur de la protection et du rétablissement des survivantes de violences sexuelles.",
    excerptEn: "ADJC joins partners in Goma to strengthen evidence-based action for survivor protection and recovery in conflict-affected areas of North and South Kivu.",
    tags: ['survivantes', 'violences sexuelles', 'RDC', 'protection', 'Goma'],
    bodyFr: `<p>Dans le contexte du conflit armé persistant et de l'insécurité dans l'Est de la République Démocratique du Congo, les jeunes femmes et les filles restent parmi les populations les plus exposées à la violence, aux déplacements, aux traumatismes et aux risques de protection. Pourtant, malgré l'ampleur de la crise, de nombreuses survivantes de violences sexuelles continuent de se heurter à de sérieux obstacles pour accéder au soutien et aux services dont elles ont besoin pour se rétablir et reconstruire leur vie.</p>
<h3>Pourquoi Cette Étude Est Essentielle</h3>
<p>Pour aider à combler ce fossé, l'ADJC a rejoint les membres du réseau Uwezo et les organisations partenaires à Goma, au Nord-Kivu, pour le lancement officiel d'une étude sur l'évaluation des besoins non satisfaits des jeunes femmes survivantes de violences sexuelles dans les territoires touchés par les conflits et les zones urbaines du Nord et du Sud-Kivu. Dans les contextes de conflit, les survivantes font face à des défis croisés qui vont bien au-delà du préjudice immédiat subi : accès limité aux soins médicaux et psychosociaux, obstacles à la justice, stigmatisation sociale, vulnérabilité économique et manque de voies de référencement sécurisées.</p>
<h3>De la Réponse à l'Action Fondée sur des Preuves</h3>
<p>Trop souvent, les réponses humanitaires et de protection sont conçues sans preuves directes suffisantes de la part des personnes les plus touchées. En lançant cette évaluation, l'ADJC et ses partenaires contribuent à faire évoluer la conversation des suppositions vers les preuves. L'objectif est non seulement d'identifier les lacunes, mais aussi de générer des données pratiques pouvant orienter la programmation humanitaire, les interventions de protection, la prévention des violences basées sur le genre et l'engagement politique auprès des parties prenantes concernées.</p>
<h3>Une Approche Centrée sur les Survivantes</h3>
<p>Au cœur de cette initiative se trouve un principe simple mais urgent : les survivantes ne doivent pas être traitées uniquement comme des statistiques — leurs besoins, leurs voix, leur dignité et leur autonomie doivent guider la réponse. L'ADJC reste engagée à travailler aux côtés des réseaux, des partenaires et des communautés pour garantir que chaque survivante soit accueillie non pas par le silence ou la négligence, mais par la dignité, les soins, la protection et l'espoir.</p>`,
    bodyEn: `<p>In the context of continued armed conflict and insecurity in eastern Democratic Republic of Congo, young women and girls remain among the populations most exposed to violence, displacement, trauma, and protection risks. Yet despite the scale of the crisis, many survivors of sexual violence continue to face serious barriers in accessing the support and services they need to recover and rebuild their lives.</p>
<h3>Why This Study Matters</h3>
<p>To help address this gap, ADJC joined fellow members of the Uwezo Network and partner organizations in Goma, North Kivu, for the official launch of a study on the assessment of unmet needs among young women survivors of sexual violence in conflict-affected territories and urban areas in North and South Kivu. In conflict-affected settings, survivors often face overlapping challenges that go far beyond the immediate harm they experience: limited access to medical and psychosocial care, barriers to justice, social stigma, economic vulnerability, and lack of safe referral pathways.</p>
<h3>From Response to Evidence-Based Action</h3>
<p>Too often, humanitarian and protection responses are designed without enough direct evidence from the people most affected. By launching this assessment, ADJC and its partners are helping to shift the conversation from assumptions to evidence. The objective is not only to identify gaps, but also to generate practical insights that can inform humanitarian programming, protection interventions, gender-based violence prevention and response, and policy engagement with relevant stakeholders.</p>
<h3>A Survivor-Centered and Rights-Based Approach</h3>
<p>At the heart of this initiative is a simple but urgent principle: survivors must not be treated only as statistics — their needs, voices, dignity, and agency must guide the response. ADJC remains committed to working alongside networks, partners, and communities to help ensure that every survivor is met not with silence or neglect, but with dignity, care, protection, and hope.</p>`,
  },
  {
    id: 2,
    img: five,
    imgTop: five,
    imgMid: sake,
    category: 'formation', date: '14 Novembre 2025', readTime: 4,
    author: 'ADJC', role: 'Équipe ADJC',
    catFr: 'Formation', catEn: 'Training',
    titleFr: 'Goma : Une Formation de Cinq Jours Renforce les Capacités de la Société Civile sur la Santé Sexuelle et le Cadre Légal de l\'Avortement Sécurisé',
    titleEn: 'Goma: A Five-Day Training Strengthens Civil Society Capacities on Sexual Health and the Legal Framework for Safe Abortion in DRC',
    excerptFr: "L'organisation ADS a remis des attestations à des membres de la société civile formés au plaidoyer pour les droits sexuels et reproductifs et au cadre juridique de l'avortement sécurisé en RDC.",
    excerptEn: "ADS has awarded certificates to civil society members trained in sexual and reproductive rights advocacy and the legal framework for safe abortion in the DRC.",
    tags: ['SDSR', 'droits sexuels', 'formation', 'Goma', 'société civile'],
    bodyFr: `<p>Dans la droite lignée des activités menées dans le cadre du réseau Uwezo et de ses partenaires, l'organisation ADS — Action pour les Droits Sexuels — a clôturé le 14 novembre 2025 un cycle de formation intensif de cinq jours consacré au plaidoyer pour la santé et les droits sexuels et reproductifs. La cérémonie de remise des attestations s'est tenue à Goma, chef-lieu de la province du Nord-Kivu, en présence du Directeur Exécutif Yassin TUSINGWIRE.</p>
<h3>Un Programme Développé avec Amplify Change</h3>
<p>Le programme de formation, développé en partenariat avec l'initiative internationale Amplify Change, a couvert trois grands axes thématiques : le plaidoyer auprès des organisations de la société civile sur la santé et les droits sexuels, les mécanismes juridiques nationaux encadrant l'avortement sécurisé en RDC, et les stratégies de communication et de mobilisation communautaire adaptées aux réalités locales.</p>
<h3>Combler le Fossé dans les Zones de Conflit</h3>
<p>En RDC, l'avortement sécurisé reste légalement encadré mais peu accessible dans les zones de conflit, où les structures de santé sont souvent détruites ou sous-dotées. Les victimes de violences sexuelles liées aux conflits se trouvent fréquemment face à un vide dans la prise en charge médicale et juridique. La formation dispensée par ADS vise précisément à réduire cet écart en équipant les acteurs de terrain des arguments et des références nécessaires pour exiger une meilleure application des textes en vigueur. Former et documenter constituent, selon les responsables des organisations partenaires, les deux piliers indissociables d'un changement durable.</p>`,
    bodyEn: `<p>In line with activities conducted within the Uwezo Network and its partners, the organisation ADS — Action pour les Droits Sexuels — concluded a five-day intensive training cycle on November 14, 2025, dedicated to advocacy for sexual and reproductive health and rights. The certificate ceremony was held in Goma, capital of North Kivu province, in the presence of Executive Director Yassin TUSINGWIRE.</p>
<h3>A Programme Developed with Amplify Change</h3>
<p>The training programme, developed in partnership with the international initiative Amplify Change, covered three main thematic areas: advocacy with civil society organisations on sexual health and rights, national legal mechanisms governing safe abortion in the DRC, and communication and community mobilisation strategies adapted to local realities.</p>
<h3>Bridging the Gap in Conflict Zones</h3>
<p>In the DRC, safe abortion remains legally regulated but largely inaccessible in conflict zones, where health structures are often destroyed or under-resourced. Survivors of conflict-related sexual violence frequently face a gap in medical and legal support. The training provided by ADS aims precisely to reduce this gap by equipping field workers with the arguments and references needed to demand better application of existing legislation. Training and documentation are, according to partner organisation leaders, the two inseparable pillars of lasting change.</p>`,
  },
  {
    id: 3,
    img: sake,
    imgTop: five,
    imgMid: sake,
    category: 'formation', date: '3–5 Décembre 2025', readTime: 4,
    author: 'ADJC', role: 'Équipe ADJC',
    catFr: 'Formation', catEn: 'Training',
    titleFr: 'Goma/Sake : Un Atelier de Trois Jours Vulgarise la Loi N°02/003 et la Résolution 2475 en Faveur des Personnes Handicapées',
    titleEn: 'Goma/Sake: A Three-Day Workshop Disseminates Law N°02/003 and UN Resolution 2475 for Persons with Disabilities',
    excerptFr: "À l'occasion de la Journée Internationale des Personnes Handicapées 2025, Handicap International, le PAPH-RDC et l'ADED ont organisé un atelier de sensibilisation sur les droits des personnes handicapées à Goma et Sake.",
    excerptEn: "On the occasion of the 2025 International Day of Persons with Disabilities, Handicap International, PAPH-DRC and ADED organised an awareness workshop on the rights of persons with disabilities in Goma and Sake.",
    tags: ['handicap', 'droits', 'inclusion', 'Goma', 'Résolution 2475'],
    bodyFr: `<p>C'est dans le cadre solennel de la commémoration de la Journée Internationale des Personnes Handicapées, célébrée chaque année le 3 décembre, que Goma et Sake ont accueilli du 3 au 5 décembre 2025 un atelier de trois jours consacré à la vulgarisation et à la sensibilisation sur les textes d'application de la loi organique N°02/003 relative à la protection et à la promotion des droits des personnes vivant avec un handicap en RDC, ainsi que sur la Résolution 2475 du Conseil de Sécurité des Nations Unies portant sur la protection des personnes handicapées dans les conflits armés.</p>
<h3>Trois Organisations Unies pour l'Inclusion</h3>
<p>L'événement a été conjointement organisé par Handicap International (HI), le Programme d'Assistance aux Personnes Handicapées de la RDC (PAPH-RDC) et l'ADED. Le thème retenu pour cette édition 2025 — « Promouvoir des politiques inclusives pour les personnes handicapées, progresser ensemble afin de faire » — traduit une volonté affichée de dépasser les déclarations d'intention pour s'engager dans des actions concrètes. Dans une région où les conflits armés ont considérablement aggravé la vulnérabilité des personnes handicapées, la Résolution 2475 du Conseil de Sécurité des Nations Unies prend une résonance particulière.</p>
<h3>Rendre le Droit Accessible sur le Terrain</h3>
<p>Au plan national, la loi organique N°02/003 constitue le cadre juridique fondamental pour la protection et la promotion des droits des personnes handicapées en RDC. Malgré son adoption, sa mise en œuvre reste limitée, notamment dans les zones de conflit où les structures administratives sont affaiblies et les services sociaux quasi inexistants. Les participants — issus de la société civile, des associations de personnes handicapées, des autorités locales et des structures humanitaires — ont pu échanger sur les obstacles pratiques à l'inclusion et identifier des pistes d'action prioritaires pour les mois à venir.</p>`,
    bodyEn: `<p>In the solemn setting of the commemoration of the International Day of Persons with Disabilities, celebrated each year on 3 December, Goma and Sake hosted from 3 to 5 December 2025 a three-day workshop dedicated to the dissemination and awareness of the implementing provisions of Organic Law N°02/003 on the protection and promotion of the rights of persons with disabilities in the DRC, as well as UN Security Council Resolution 2475 on the protection of persons with disabilities in armed conflicts.</p>
<h3>Three Organisations United for Inclusion</h3>
<p>The event was jointly organised by Handicap International (HI), the Programme d'Assistance aux Personnes Handicapées de la RDC (PAPH-DRC), and ADED. The theme chosen for this 2025 edition — "Promoting inclusive policies for persons with disabilities, progressing together to act" — reflects a stated determination to move beyond declarations of intent toward concrete action. In a region where armed conflicts have considerably worsened the vulnerability of persons with disabilities, UN Security Council Resolution 2475 takes on particular resonance.</p>
<h3>Making Rights Accessible on the Ground</h3>
<p>At the national level, Organic Law N°02/003 constitutes the fundamental legal framework for protecting and promoting the rights of persons with disabilities in the DRC. Despite its adoption, implementation remains limited, particularly in conflict zones where administrative structures are weakened and social services near-absent. Participants — drawn from civil society, organisations of persons with disabilities, local authorities, and humanitarian structures — were able to discuss practical obstacles to inclusion and identify priority action areas for the months ahead.</p>`,
  },
  {
    id: 4,
    img: hundred,
    imgTop: five,
    imgMid: sake,
    category: 'genre', date: '25 Nov – 10 Déc 2025', readTime: 5,
    author: 'ADJC', role: 'Équipe ADJC',
    catFr: 'Genre & Droits', catEn: 'Gender & Rights',
    titleFr: 'Des Centaines d\'Élèves Mobilisés au Nord et Sud-Kivu : Le Réseau Uwezo s\'Engage pour les 16 Jours d\'Activisme 2025',
    titleEn: 'Hundreds of Students Mobilised in North and South Kivu: The Uwezo Network Engages for the 2025 16 Days of Activism',
    excerptFr: "Sous la bannière commune de la FADA, de l'ADJC et de Women Concern, le réseau Uwezo a lancé une vaste campagne scolaire contre le cyberharcèlement et l'exploitation numérique des femmes et filles.",
    excerptEn: "Under the joint banner of FADA, ADJC and Women Concern, the Uwezo Network launched a large school-based campaign against cyberharassment and the digital exploitation of women and girls.",
    tags: ['16 jours', 'cyberharcèlement', 'genre', 'Kivu', 'jeunesse'],
    bodyFr: `<p>Ils étaient des centaines, alignés dans la cour d'une école du Nord-Kivu, en uniforme blanc et bleu, bannière déployée face à l'objectif. Cette image illustre mieux que tout discours l'ampleur de la mobilisation conduite par le réseau Uwezo entre le 25 novembre et le 10 décembre 2025 dans les provinces du Nord-Kivu et du Sud-Kivu. Trois organisations membres — la Fondation Amani & Afya (FADA), l'ADJC et Women Concern — ont coordonné leurs actions pour atteindre le plus grand nombre d'élèves, d'enseignants et de membres des communautés locales.</p>
<h3>Les Droits des Femmes s'Appliquent Aussi en Ligne</h3>
<p>Le thème choisi pour cette édition 2025 est particulièrement ancré dans les réalités contemporaines : « Les droits des femmes et filles s'appliquent aussi en ligne. Stop au cyberharcèlement et à l'exploitation numérique. » Ce message rappelle que l'espace numérique n'est pas un territoire hors-droit, et que les violences qui y sont perpétrées contre les femmes et les filles — chantage, diffusion de contenus intimes non consentis, harcèlement en ligne — constituent des formes de violences de genre à part entière. Dans les provinces du Kivu, où la pénétration des smartphones progresse rapidement même dans les zones rurales, les jeunes et les filles en particulier sont de plus en plus exposés à ces nouvelles formes de violence.</p>
<h3>Une Mobilisation Scolaire au Cœur de la Prévention</h3>
<p>Les sessions de sensibilisation menées tout au long des 16 jours ont abordé des thématiques concrètes : identifier les situations de cyberharcèlement, connaître ses droits en tant que victime, savoir vers qui se tourner, et comprendre comment les normes sociales et de genre facilitent la perpétuation de ces violences en ligne. Des espaces de parole sécurisés ont également été organisés pour permettre aux élèves, en particulier aux filles, de témoigner de leurs expériences sans craindre de représailles. Cette mobilisation confirme la montée en puissance d'un écosystème d'organisations locales déterminées à protéger les droits des femmes et des filles dans l'Est du Congo.</p>`,
    bodyEn: `<p>There were hundreds of them, lined up in a school courtyard in North Kivu, in white and blue uniforms, banner unfurled before the camera. This image illustrates better than any speech the scale of the mobilisation conducted by the Uwezo Network between 25 November and 10 December 2025 in the provinces of North and South Kivu. Three member organisations — the Fondation Amani & Afya (FADA), ADJC, and Women Concern — coordinated their actions to reach as many students, teachers, and community members as possible.</p>
<h3>Women's Rights Apply Online Too</h3>
<p>The theme chosen for this 2025 edition is particularly grounded in contemporary realities: "Women's and girls' rights apply online too. Stop cyberharassment and digital exploitation." This message is a reminder that the digital space is not a rights-free territory, and that violence perpetrated against women and girls online — blackmail, non-consensual sharing of intimate content, online harassment — constitutes gender-based violence in its own right. In the Kivu provinces, where smartphone penetration is advancing rapidly even in rural areas, young people — and girls in particular — are increasingly exposed to these new forms of violence.</p>
<h3>School-Based Mobilisation at the Heart of Prevention</h3>
<p>Awareness sessions held throughout the 16 days addressed concrete topics: identifying situations of cyberharassment, knowing one's rights as a victim, knowing where to turn, and understanding how social and gender norms facilitate the perpetuation of online violence. Safe dialogue spaces were also organised to allow students, particularly girls, to share their experiences without fear of reprisals. This mobilisation confirms the growing strength of a local ecosystem of organisations determined to protect the rights of women and girls in Eastern Congo.</p>`,
  },
  {
    id: 5,
    img: participate,
    imgTop: five,
    imgMid: sake,
    category: 'protection', date: '2025', readTime: 3,
    author: 'ADJC', role: 'Équipe ADJC',
    catFr: 'Protection', catEn: 'Protection',
    titleFr: 'L\'ADJC Participe à une Conférence de Formation sur la Protection de l\'Enfant',
    titleEn: 'ADJC Participates in a Child Protection Training Conference',
    excerptFr: "L'ADJC a eu l'honneur d'être invitée par I Will Stand International Organisation à participer à une importante conférence de formation sur la protection de l'enfant.",
    excerptEn: "ADJC was honoured to be invited by I Will Stand International Organisation to participate in an important Child Protection training conference.",
    tags: ['protection enfant', 'formation', 'droits', 'ADJC'],
    bodyFr: `<p>L'ADJC a eu l'honneur d'être invitée par I Will Stand International Organisation à participer à une importante conférence de formation sur la protection de l'enfant. Cette expérience enrichissante a réuni des professionnels et des organisations dévoués à la sécurité et au bien-être des enfants.</p>
<h3>Ce Que Nous Avons Appris</h3>
<p>Durant cette conférence, notre équipe a eu l'opportunité d'approfondir ses connaissances et ses compétences dans un large éventail de sujets essentiels : introduction aux fondements de la protection de l'enfant, principes et cadres clés guidant ce travail, identification des différentes formes d'abus et de négligence, facteurs de risque et facteurs protecteurs, les cercles de responsabilité partagée entre familles, communautés et institutions, les normes et principes internationaux de protection de l'enfant, la gestion de cas, et la mise en œuvre de bonnes pratiques de sauvegarde dans tous nos programmes.</p>
<h3>Notre Engagement Renforcé</h3>
<p>À l'ADJC, la protection et le développement des jeunes sont au cœur de tout ce que nous faisons. Participer à cette formation a davantage équipé notre équipe des connaissances, des outils et de la confiance nécessaires pour renforcer nos pratiques de protection de l'enfant et garantir que chaque enfant que nous accompagnons soit en sécurité, respecté et soutenu. Nous sommes profondément reconnaissants envers I Will Stand International Organisation pour cette précieuse invitation et pour leur engagement continu envers la protection de l'enfant à travers les communautés. Ensemble, nous nous engageons pour chaque enfant.</p>`,
    bodyEn: `<p>ADJC is honoured to have been invited by I Will Stand International Organisation to participate in an important Child Protection training conference. This enriching experience brought together dedicated professionals and organisations committed to the safety and well-being of children.</p>
<h3>What We Learned</h3>
<p>During this conference, our team had the opportunity to deepen their knowledge and skills across a wide range of critical topics: an introduction to the foundations of child protection, key principles and frameworks guiding this work, identifying the various forms of abuse and neglect, risk and protective factors, the rings of shared responsibility among families, communities, and institutions, internationally recognised child protection standards and principles, case management, and implementing safeguarding best practices across all our programmes.</p>
<h3>Our Strengthened Commitment</h3>
<p>At ADJC, the protection and development of young people is at the heart of everything we do. Participating in this training has further equipped our team with the knowledge, tools, and confidence to strengthen our child protection practices and ensure that every child we serve is safe, respected, and supported. We are deeply grateful to I Will Stand International Organisation for this valuable invitation and for their continued dedication to child protection across communities. Together, we stand for every child.</p>`,
  },
  {
    id: 6,
    img: froms,
    imgTop: five,
    imgMid: sake,
    category: 'environnement', date: '2025', readTime: 4,
    author: 'ADJC', role: 'NONDO RUGIRA Christian',
    catFr: 'Environnement', catEn: 'Environment',
    titleFr: 'De la Salle de Conférence au Terrain : L\'ADJC Plante des Arbres au Forum des Solutions Fondées sur la Nature',
    titleEn: 'From the Conference Room to the Ground: ADJC Plants Trees at the Urban Nature-Based Solutions Forum',
    excerptFr: "NONDO RUGIRA Christian, Directeur Exécutif de l'ADJC, rejoint les délégués du forum pour planter des arbres sur une colline dénudée, traduisant en actes les principes des Solutions fondées sur la Nature.",
    excerptEn: "NONDO RUGIRA Christian, Executive Director of ADJC, joins fellow forum delegates to plant trees on a bare hillside, translating the principles of Nature-based Solutions into hands-on ground-level action.",
    tags: ['arbres', 'NbS', 'environnement', 'forum', 'ADJC'],
    bodyFr: `<p>Le sol était rouge et sec, la colline dénudée et brûlée par le soleil. C'est pourtant ici, loin des tables de conférence et des salles plénières climatisées, que le Forum Urbain et Péri-Urbain sur les Solutions fondées sur la Nature a trouvé son expression la plus puissante. Les délégués — leur cordon d'accréditation encore autour du cou, leur badge de conférence encore épinglé à leur chemise — se sont agenouillés dans la terre aux côtés des membres de la communauté et ont planté de jeunes arbres, un par un, dans le sol fissuré d'une pente urbaine exposée.</p>
<h3>Un Geste qui Cristallise la Vision du Forum</h3>
<p>Parmi eux se trouvait NONDO RUGIRA Christian, Directeur Exécutif de l'ADJC. Accroupi, les mains enfoncées dans la terre rouge, il a travaillé avec les autres participants pour assurer les racines d'un jeune plant — un geste qui cristallise la conviction centrale du forum : les solutions fondées sur la nature doivent quitter le domaine des politiques et prendre racine dans le paysage physique des villes africaines. Comme il l'a déclaré lors de la session : « Chaque arbre que nous plantons aujourd'hui est une promesse faite à la prochaine génération — que nous avons choisi d'agir, et pas seulement de parler. »</p>
<h3>Un Horizon Programmatique Élargi pour l'ADJC</h3>
<p>Pour l'ADJC, la participation à cette session revêt une signification organisationnelle particulière. En tant que membre actif du réseau Uwezo dans l'Est de la RDC, travaillant à l'intersection du développement des jeunes, des droits des femmes et de la résilience communautaire, la présence de son Directeur Exécutif au Forum NbS reflète un élargissement de l'horizon programmatique de l'organisation pour englober l'action environnementale comme dimension intégrante d'un développement durable des jeunes. Sur la colline, des dizaines de participants répétaient le même geste calme et délibéré — creuser, placer, couvrir, tasser la terre — transformant lentement un espace dégradé en un espace d'espoir.</p>`,
    bodyEn: `<p>The soil was red and dry, the hillside bare and sun-baked. Yet it was here, away from the polished conference tables and air-conditioned plenary halls, that the Urban and Peri-Urban Nature-based Solutions Forum found its most powerful expression. Delegates — their lanyards still around their necks, their conference badges still clipped to their shirts — knelt in the earth alongside community members and planted young trees, one by one, into the cracked ground of an exposed urban slope.</p>
<h3>A Gesture That Crystallises the Forum's Vision</h3>
<p>Among them was NONDO RUGIRA Christian, Executive Director of ADJC. Crouching low, hands deep in the red earth, he worked together with fellow participants to secure the roots of a slender young sapling — a gesture that crystallises the forum's core conviction: that nature-based solutions must ultimately leave the realm of policy and take root in the physical landscape of African cities. As he stated during the session: "Every tree we plant today is a promise to the next generation — that we chose to act, not just to talk."</p>
<h3>A Broadened Programmatic Horizon for ADJC</h3>
<p>For ADJC, participation in this session carries a particular organisational significance. As an active member of the Uwezo Network in eastern DRC, working at the intersection of youth development, gender rights, and community resilience, the presence of its Executive Director at the NbS Forum reflects a broadening of ADJC's programmatic horizon to encompass environmental action as an integral dimension of sustainable youth development. Across the hillside, dozens of participants repeated the same quiet, deliberate gesture — digging, placing, covering, patting the earth firm — slowly transforming a degraded space into a space of hope.</p>`,
  },
  {
    id: 7,
    img: people,
    imgTop: five,
    imgMid: sake,
    category: 'genre', date: 'Novembre – Décembre 2025', readTime: 5,
    author: 'ADJC', role: 'Équipe ADJC',
    catFr: 'Genre & Droits', catEn: 'Gender & Rights',
    titleFr: 'Les Jeunes se Lèvent pour la Dignité et la Sécurité pendant les 16 Jours d\'Activisme',
    titleEn: 'Young People Rise for Dignity and Safety During the 16 Days of Activism',
    excerptFr: "L'ADJC, avec des partenaires et des parties prenantes communautaires, organise une activité de sensibilisation réunissant étudiants et jeunes contre les violences de genre et l'exploitation numérique.",
    excerptEn: "ADJC, together with partner organisations and community stakeholders, organises a vibrant awareness activity bringing together students and youth against gender-based violence and digital exploitation.",
    tags: ['16 jours', 'dignité', 'genre', 'école', 'cyberharcèlement'],
    bodyFr: `<p>À un moment où de nombreuses filles et jeunes femmes continuent de faire face à la violence, à la discrimination et aux risques croissants dans les espaces numériques, l'action collective reste l'un des outils les plus puissants pour le changement. Durant les 16 Jours d'Activisme contre les Violences Basées sur le Genre, l'ADJC, avec des organisations partenaires et des parties prenantes communautaires, a organisé une activité de sensibilisation dynamique réunissant un grand nombre d'élèves et de jeunes dans un esprit de solidarité, d'éducation et d'action. Le rassemblement a servi bien plus qu'un simple événement public : c'était un message clair que les droits des femmes et des filles doivent être protégés partout — à l'école, à la maison, dans la communauté, et en ligne.</p>
<h3>Pourquoi la Sensibilisation Scolaire Est Essentielle</h3>
<p>Les écoles restent l'un des espaces les plus importants pour la prévention, l'apprentissage et la transformation sociale. En engageant directement les élèves, cette activité a contribué à créer des opportunités pour accroître la sensibilisation à l'égalité des genres et à la dignité humaine, encourager les jeunes à dénoncer les violences, promouvoir une utilisation sécurisée et respectueuse des outils numériques, renforcer la compréhension des droits, de la protection et des mécanismes de signalement, et construire un leadership jeune autour de la prévention et de l'éducation par les pairs. Lorsque les jeunes sont informés et inclus, ils deviennent des acteurs puissants pour se protéger eux-mêmes et protéger les autres.</p>
<h3>Un Appel à Poursuivre le Mouvement</h3>
<p>Les 16 Jours d'Activisme ne constituent pas seulement une période de campagne — ils sont un appel à une action soutenue. Protéger les filles et les jeunes femmes contre la violence signifie garantir qu'elles puissent apprendre sans peur, participer sans discrimination, s'exprimer librement, accéder aux espaces numériques sans abus, et grandir dans la dignité et la liberté. L'ADJC reste engagée à travailler avec les écoles, les communautés et les partenaires pour créer des environnements où chaque jeune — et surtout chaque fille — peut s'épanouir en toute sécurité et confiance.</p>`,
    bodyEn: `<p>At a time when many girls and young women continue to face violence, discrimination, and growing risks in digital spaces, collective action remains one of the most powerful tools for change. During the 16 Days of Activism Against Gender-Based Violence, ADJC, together with partner organisations and community stakeholders, organised a vibrant awareness activity bringing together a large number of students and youth in a spirit of solidarity, education, and action. The gathering served as more than a public event — it was a clear message that the rights of women and girls must be protected everywhere: at school, at home, in the community, and online.</p>
<h3>Why School-Based Awareness Matters</h3>
<p>Schools remain one of the most important spaces for prevention, learning, and social transformation. By engaging students directly, this activity helped create opportunities to increase awareness of gender equality and human dignity, encourage young people to speak out against violence, promote safe and respectful use of digital tools, strengthen understanding of rights, protection, and reporting mechanisms, and build youth leadership around prevention and peer education. When young people are informed and included, they become powerful actors in protecting themselves and others.</p>
<h3>A Call to Continue the Movement</h3>
<p>The 16 Days of Activism is not only a campaign period — it is a call to sustained action. Protecting girls and young women from violence means ensuring they can learn without fear, participate without discrimination, express themselves safely, access digital spaces without abuse, and grow in dignity and freedom. ADJC remains committed to working with schools, communities, and partners to create environments where every young person — especially every girl — can thrive safely and confidently.</p>`,
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