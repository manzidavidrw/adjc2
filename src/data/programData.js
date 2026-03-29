/**
 * src/data/programData.js
 * ──────────────────────────────────────────────────────────────────────────
 * Single source of truth for all ADJC programs and their sub-programs.
 * Every program has BOTH areasFr and areasEn arrays.
 * Every sub-program has a unique `slug` used for page routing.
 */

export const programs = [
  /* ═══════════════════════════════════════════════════════════ 01 · SRHR */
  {
    ico: '🩺',
    slug: 'srhr',
    shortFr: 'Santé Sexuelle & Reproductive',
    shortEn: 'Sexual & Reproductive Health',
    titleFr: 'Santé Sexuelle & Reproductive des Jeunes (SSRD)',
    titleEn: 'Youth Sexual & Reproductive Health and Rights (SRHR)',
    stat: '60%',
    statLabelFr: 'des bénéficiaires sont des jeunes femmes',
    statLabelEn: 'of beneficiaries are young women',
    descFr: "Ce programme vise à améliorer la santé, le bien-être et les droits des jeunes — en particulier des adolescentes et des jeunes femmes — grâce à des interventions SSRD globales, adaptées aux jeunes et fondées sur les droits.",
    descEn: "This programme aims to improve the health, wellbeing, and rights of young people — particularly adolescent girls and young women — through comprehensive, youth-friendly and rights-based SRHR interventions.",

    areasFr: [
      {
        slug: 'srhr-education-adolescents',
        ico: '📚',
        title: 'Éducation SSRD pour adolescents',
        desc: "ADJC offre une éducation sur la santé reproductive adaptée à chaque âge, abordant la puberté, le consentement, l'égalité de genre et la prévention des pratiques néfastes.",
        fullArticle: `<h2>Éducation SSRD pour Adolescents</h2><p>L'éducation sur la santé sexuelle et reproductive (SSRD) est fondamentale pour permettre aux jeunes de faire des choix éclairés. ADJC propose des sessions adaptées à l'âge dans les écoles, centres communautaires et espaces jeunesse.</p><h3>Impact</h3><ul><li>Plus de 2 400 adolescents touchés en 2023</li><li>Taux de rétention scolaire des filles amélioré de 18 %</li><li>Réduction de 30 % des grossesses non désirées dans les zones cibles</li></ul>`,
      },
      {
        slug: 'srhr-menstrual-health',
        ico: '🌸',
        title: 'Hygiène menstruelle (MHM)',
        desc: "Promotion de la santé menstruelle pour réduire la stigmatisation et favoriser l'accès à des solutions dignes, permettant aux filles de participer pleinement à la vie scolaire.",
        fullArticle: `<h2>Hygiène Menstruelle (MHM)</h2><p>La gestion de l'hygiène menstruelle reste un obstacle majeur à la scolarisation des filles dans les zones rurales du Congo.</p><h3>Résultats</h3><ul><li>1 800 kits MHM distribués</li><li>Réduction de 40 % de l'absentéisme scolaire lié aux menstruations</li></ul>`,
      },
      {
        slug: 'srhr-gbv-prevention',
        ico: '🛡️',
        title: 'Prévention des VBG',
        desc: "Sensibilisation à la violence basée sur le genre, promotion de l'autonomie corporelle et renforcement des connaissances sur les droits des jeunes filles.",
        fullArticle: `<h2>Prévention des Violences Basées sur le Genre (VBG)</h2><p>La prévention des violences basées sur le genre est au cœur de notre travail. Ateliers de sensibilisation, cercles de parole pour survivantes, formation des hommes et garçons comme alliés, et référencement vers des services psychosociaux.</p>`,
      },
      {
        slug: 'srhr-health-services',
        ico: '🔗',
        title: 'Accès aux services de santé',
        desc: "Facilitation de l'accès à des informations confidentielles et adaptées, avec orientation vers des services de santé locaux appropriés.",
        fullArticle: `<h2>Accès aux Services de Santé Adaptés aux Jeunes</h2><p>ADJC travaille avec les centres de santé locaux pour développer des espaces conviviaux pour les jeunes où ils peuvent accéder à des informations confidentielles et des soins de qualité sans stigmatisation.</p>`,
      },
      {
        slug: 'srhr-gender-equality',
        ico: '💪',
        title: 'Égalité des genres & autonomisation',
        desc: "Renforcement des compétences et opportunités de leadership des filles et jeunes femmes, tout en engageant les communautés à remettre en question les normes discriminatoires.",
        fullArticle: `<h2>Égalité des Genres & Autonomisation des Filles</h2><p>Nous accompagnons les jeunes femmes à développer leur leadership et leur confiance à travers des clubs de filles, des bourses et des programmes de mentorat.</p>`,
      },
      {
        slug: 'srhr-community-engagement',
        ico: '🤲',
        title: 'Engagement communautaire',
        desc: "Mobilisation des communautés pour réduire la stigmatisation autour de la SSRD et créer des environnements favorables à l'exercice des droits des jeunes.",
        fullArticle: `<h2>Engagement Communautaire pour la SSRD</h2><p>ADJC mobilise les leaders traditionnels, religieux et parentaux pour créer un environnement favorable à la santé et aux droits des jeunes.</p>`,
      },
    ],

    areasEn: [
      {
        slug: 'srhr-education-adolescents',
        ico: '📚',
        title: 'SRHR Education for Adolescents',
        desc: "ADJC provides age-appropriate SRHR education covering puberty, reproductive health, consent, gender equality, and prevention of harmful practices.",
        fullArticle: `<h2>SRHR Education for Adolescents</h2><p>ADJC delivers age-appropriate sessions in schools, community centres, and youth spaces across the Minembwe territory.</p><h3>Impact</h3><ul><li>Over 2,400 adolescents reached in 2023</li><li>Girls' school retention rate improved by 18%</li><li>30% reduction in unintended pregnancies in target areas</li></ul>`,
      },
      {
        slug: 'srhr-menstrual-health',
        ico: '🌸',
        title: 'Menstrual Health Management (MHM)',
        desc: "Promoting menstrual health and hygiene to reduce stigma and support access to safe, dignified menstrual solutions so girls can fully participate in education.",
        fullArticle: `<h2>Menstrual Health Management (MHM)</h2><p>Menstrual health management remains a major barrier to girls' schooling in rural Congo.</p><h3>Results</h3><ul><li>1,800 MHM kits distributed</li><li>40% reduction in menstruation-related school absenteeism</li></ul>`,
      },
      {
        slug: 'srhr-gbv-prevention',
        ico: '🛡️',
        title: 'Prevention of Gender-Based Violence',
        desc: "Raising awareness on GBV, promoting bodily autonomy, and strengthening knowledge of rights among young people, particularly girls and young women.",
        fullArticle: `<h2>Prevention of Gender-Based Violence (GBV)</h2><p>Through community campaigns, safe spaces, and training, we build young people's capacity to protect their rights. Awareness workshops, survivor support circles, training men and boys as allies, and referral to psychosocial services.</p>`,
      },
      {
        slug: 'srhr-health-services',
        ico: '🔗',
        title: 'Access to Youth-Friendly Health Services',
        desc: "Facilitating access to accurate, confidential SRHR information and linking young people to appropriate local health services through referral mechanisms.",
        fullArticle: `<h2>Access to Youth-Friendly Health Services</h2><p>ADJC works with local health centres to develop youth-friendly spaces where young people can access confidential information and quality care without stigma.</p>`,
      },
      {
        slug: 'srhr-gender-equality',
        ico: '💪',
        title: "Gender Equality & Girls' Empowerment",
        desc: "Empowering girls with knowledge, skills, and leadership opportunities while engaging communities to challenge discriminatory norms and support equal rights.",
        fullArticle: `<h2>Gender Equality & Girls' Empowerment</h2><p>We accompany young women in developing leadership and confidence through girls' clubs, scholarships, and mentorship programmes with role models.</p>`,
      },
      {
        slug: 'srhr-community-engagement',
        ico: '🤲',
        title: 'Community Engagement',
        desc: "Mobilizing communities to raise awareness, challenge harmful norms, and reduce stigma so youth can exercise their rights safely and with dignity.",
        fullArticle: `<h2>Community Engagement for SRHR</h2><p>ADJC mobilizes traditional, religious, and parental leaders to create an enabling environment for youth health and rights.</p>`,
      },
    ],
  },

  /* ══════════════════════════════════════════════ 02 · YOUTH ENTERPRISE */
  {
    ico: '💼',
    slug: 'enterprise',
    shortFr: 'Entrepreneuriat Jeune',
    shortEn: 'Youth Enterprise',
    titleFr: "Développement de l'Entreprise Jeune",
    titleEn: 'Youth Enterprise Development',
    stat: '320+',
    statLabelFr: 'entreprises créées',
    statLabelEn: 'businesses created',
    descFr: "Ce programme promeut l'autonomisation économique et l'auto-emploi chez les jeunes en renforçant les compétences entrepreneuriales, l'innovation et l'accès aux opportunités de subsistance.",
    descEn: "This programme promotes economic empowerment and self-reliance among young people by strengthening entrepreneurial skills, innovation, and access to livelihood opportunities.",

    areasFr: [
      {
        slug: 'enterprise-training',
        ico: '🎓',
        title: 'Formation en Entrepreneuriat',
        desc: "Outille les jeunes avec des compétences pratiques pour créer et gérer des entreprises, incluant la planification, le marketing et la gestion financière.",
        fullArticle: `<h2>Formation en Entrepreneuriat</h2><p>Nos formations couvrent la création d'entreprise, le marketing digital, la gestion financière et le développement de produits. Les jeunes bénéficient d'un accompagnement de 6 mois après la formation.</p>`,
      },
      {
        slug: 'enterprise-talent',
        ico: '💡',
        title: 'Promotion des Talents & Innovation',
        desc: "Identifie et nourrit les talents et idées créatives des jeunes, favorisant l'innovation, le leadership et la pensée entrepreneuriale.",
        fullArticle: `<h2>Promotion des Talents & Innovation</h2><p>À travers des hackathons, concours d'innovation et incubateurs locaux, ADJC identifie et soutient les idées à fort impact portées par les jeunes congolais.</p>`,
      },
      {
        slug: 'enterprise-startup',
        ico: '🏪',
        title: 'Soutien aux Start-ups & Coopératives',
        desc: "Fournit un soutien technique, financier et opérationnel aux start-ups, micro-entreprises et coopératives dirigées par des jeunes.",
        fullArticle: `<h2>Soutien aux Start-ups & Coopératives</h2><p>Nous fournissons subventions, mentorat et mise en réseau aux start-ups et coopératives dirigées par des jeunes pour assurer leur viabilité à long terme.</p>`,
      },
      {
        slug: 'enterprise-financial-literacy',
        ico: '💰',
        title: 'Littératie Financière',
        desc: "Développe les connaissances financières des jeunes : budget, épargne et planification pour une stabilité économique à long terme.",
        fullArticle: `<h2>Littératie Financière</h2><p>Nos modules couvrent la budgétisation, l'épargne, le crédit responsable et la planification d'investissement adaptés aux réalités économiques locales.</p>`,
      },
      {
        slug: 'enterprise-markets',
        ico: '🌐',
        title: 'Accès aux Marchés & Mentorat',
        desc: "Met en relation les jeunes avec des marchés, réseaux et mentors pour améliorer la croissance, l'échelle et la durabilité des entreprises.",
        fullArticle: `<h2>Accès aux Marchés & Mentorat</h2><p>ADJC facilite des foires commerciales, des plateformes d'e-commerce locales et des programmes de mentorat avec des entrepreneurs établis.</p>`,
      },
      {
        slug: 'enterprise-inclusion',
        ico: '🤝',
        title: 'Participation Économique Inclusive',
        desc: "Garantit que tous les jeunes, y compris les plus vulnérables, peuvent pleinement participer à l'entrepreneuriat et au développement économique.",
        fullArticle: `<h2>Participation Économique Inclusive</h2><p>Nous ciblons spécifiquement les jeunes en situation de vulnérabilité : déplacés internes, jeunes en situation de handicap et jeunes ruraux, pour assurer une participation économique équitable.</p>`,
      },
    ],

    areasEn: [
      {
        slug: 'enterprise-training',
        ico: '🎓',
        title: 'Entrepreneurship Training',
        desc: "Equips young people with practical skills to start and manage businesses: business planning, marketing, financial management, and problem-solving.",
        fullArticle: `<h2>Entrepreneurship Training</h2><p>Our training covers business creation, digital marketing, financial management and product development. Young people benefit from 6 months of personalised post-training support.</p>`,
      },
      {
        slug: 'enterprise-talent',
        ico: '💡',
        title: 'Youth Talent & Innovation',
        desc: "Identifies and nurtures young people's talents and creative ideas, fostering innovation, leadership, and entrepreneurial thinking.",
        fullArticle: `<h2>Youth Talent & Innovation</h2><p>Through hackathons, innovation contests and local incubators, ADJC identifies and supports high-impact ideas carried by Congolese youth.</p>`,
      },
      {
        slug: 'enterprise-startup',
        ico: '🏪',
        title: 'Start-up & Cooperative Support',
        desc: "Provides technical, financial, and operational support to youth-led start-ups, micro-enterprises, and cooperatives for sustainable growth.",
        fullArticle: `<h2>Start-up & Cooperative Support</h2><p>We provide grants, mentorship and networking to youth-led start-ups and cooperatives to ensure their long-term viability.</p>`,
      },
      {
        slug: 'enterprise-financial-literacy',
        ico: '💰',
        title: 'Financial Literacy',
        desc: "Builds financial knowledge and money management skills among young people: budgeting, saving, and planning for long-term economic stability.",
        fullArticle: `<h2>Financial Literacy</h2><p>Our financial literacy modules cover budgeting, saving, responsible credit and investment planning tailored to local economic realities.</p>`,
      },
      {
        slug: 'enterprise-markets',
        ico: '🌐',
        title: 'Market Linkages & Mentorship',
        desc: "Connects youth with markets, networks, and mentors to enhance business growth, scalability, and sustainability.",
        fullArticle: `<h2>Market Linkages & Mentorship</h2><p>ADJC facilitates trade fairs, local e-commerce platforms and mentorship programmes with established entrepreneurs to accelerate youth business growth.</p>`,
      },
      {
        slug: 'enterprise-inclusion',
        ico: '🤝',
        title: 'Inclusive Economic Participation',
        desc: "Ensures all young people, including marginalized and vulnerable youth, can fully participate in entrepreneurship and economic development activities.",
        fullArticle: `<h2>Inclusive Economic Participation</h2><p>We specifically target internally displaced youth, youth with disabilities and rural youth to ensure equitable economic participation.</p>`,
      },
    ],
  },

  /* ══════════════════════════════════════════════ 03 · PEACE & SECURITY */
  {
    ico: '☮️',
    slug: 'peace',
    shortFr: 'Paix & Sécurité',
    shortEn: 'Peace & Security',
    titleFr: 'Jeunes, Paix et Sécurité',
    titleEn: 'Youth, Peace and Security',
    stat: 'SCR 2250',
    statLabelFr: 'Agenda ONU YPS',
    statLabelEn: 'UN YPS Agenda',
    descFr: "Ce programme soutient les jeunes comme acteurs clés de la consolidation de la paix, de la prévention des conflits et de la cohésion sociale, conformément à l'Agenda ONU Jeunes, Paix et Sécurité (SCR 2250).",
    descEn: "This programme supports young people as key actors in peacebuilding, conflict prevention, and social cohesion, in line with the UN Youth, Peace and Security (YPS) Agenda (SCR 2250).",

    areasFr: [
      {
        slug: 'peace-participation',
        ico: '🗳️',
        title: 'Participation aux Processus de Paix',
        desc: "Permet aux jeunes de s'engager activement dans les structures communautaires et de gouvernance, contribuant à la prise de décision locale et aux initiatives de paix.",
        fullArticle: `<h2>Participation aux Processus de Paix</h2><p>ADJC forme et accompagne des jeunes délégués à la paix qui participent aux conseils communautaires, dialogues inter-communautaires et forums de gouvernance locale.</p>`,
      },
      {
        slug: 'peace-conflict-prevention',
        ico: '💬',
        title: 'Prévention des Conflits & Dialogue',
        desc: "Outille les jeunes pour prévenir les conflits, arbitrer les différends et communiquer pacifiquement, favorisant l'harmonie dans leurs communautés.",
        fullArticle: `<h2>Prévention des Conflits & Dialogue</h2><p>Formation à la médiation, la communication non-violente et la résolution de conflits pour que les jeunes deviennent des médiateurs locaux efficaces.</p>`,
      },
      {
        slug: 'peace-civic-education',
        ico: '📜',
        title: 'Éducation Civique & Justice Sociale',
        desc: "Sensibilise les jeunes à leurs droits et responsabilités, encourage l'engagement civique actif et la compréhension de la justice sociale.",
        fullArticle: `<h2>Éducation Civique & Justice Sociale</h2><p>Ateliers interactifs sur les droits humains, la constitution congolaise, la démocratie participative et les mécanismes de justice transitionnelle.</p>`,
      },
      {
        slug: 'peace-extremism-prevention',
        ico: '🛡️',
        title: "Prévention de l'Extrémisme Violent",
        desc: "Permet aux jeunes d'identifier et de contrer les risques de radicalisation en menant des initiatives communautaires qui promeuvent la sécurité et la résilience.",
        fullArticle: `<h2>Prévention de l'Extrémisme Violent</h2><p>Programme de résilience qui aide les jeunes à identifier les facteurs de radicalisation et à développer des contre-narratifs positifs ancrés dans leur culture et identité.</p>`,
      },
      {
        slug: 'peace-social-cohesion',
        ico: '🌍',
        title: 'Cohésion Sociale & Gouvernance Inclusive',
        desc: "Encourage les jeunes à bâtir des ponts entre les communautés, à participer à une gouvernance inclusive et à renforcer la confiance dans les systèmes locaux.",
        fullArticle: `<h2>Cohésion Sociale & Gouvernance Inclusive</h2><p>Projets inter-communautaires, espaces de dialogue entre groupes ethniques et initiatives de gouvernance participative menés par et pour les jeunes.</p>`,
      },
      {
        slug: 'peace-leadership',
        ico: '🌟',
        title: 'Leadership Jeune pour la Réconciliation',
        desc: "Soutient des projets menés par des jeunes qui promeuvent la réconciliation, la consolidation de la paix et la résilience communautaire.",
        fullArticle: `<h2>Leadership Jeune pour la Réconciliation</h2><p>Financement et accompagnement de micro-projets de réconciliation conçus et exécutés par des jeunes pour renforcer les liens sociaux dans les communautés post-conflit.</p>`,
      },
    ],

    areasEn: [
      {
        slug: 'peace-participation',
        ico: '🗳️',
        title: 'Youth Participation in Peacebuilding',
        desc: "Empowers young people to actively engage in community and governance structures, contributing to local decision-making and peace initiatives.",
        fullArticle: `<h2>Youth Participation in Peacebuilding</h2><p>ADJC trains and supports youth peace delegates who participate in community councils, inter-community dialogues and local governance forums.</p>`,
      },
      {
        slug: 'peace-conflict-prevention',
        ico: '💬',
        title: 'Conflict Prevention & Dialogue',
        desc: "Equips youth with skills to prevent conflicts, mediate disputes, and communicate peacefully, promoting harmony within their communities.",
        fullArticle: `<h2>Conflict Prevention & Dialogue</h2><p>Training in mediation, non-violent communication and conflict resolution so young people become effective local mediators.</p>`,
      },
      {
        slug: 'peace-civic-education',
        ico: '📜',
        title: 'Civic Education & Social Justice',
        desc: "Raises youth awareness of their rights and responsibilities, fosters understanding of social justice, and encourages active civic engagement.",
        fullArticle: `<h2>Civic Education & Social Justice</h2><p>Interactive workshops on human rights, the Congolese constitution, participatory democracy and transitional justice mechanisms.</p>`,
      },
      {
        slug: 'peace-extremism-prevention',
        ico: '🛡️',
        title: 'Prevention of Violent Extremism',
        desc: "Enables young people to identify and counter risks of radicalization by leading community-based initiatives that promote safety and resilience.",
        fullArticle: `<h2>Prevention of Violent Extremism</h2><p>Resilience programme helping youth identify radicalisation factors and develop positive counter-narratives rooted in their culture and identity.</p>`,
      },
      {
        slug: 'peace-social-cohesion',
        ico: '🌍',
        title: 'Social Cohesion & Inclusive Governance',
        desc: "Encourages youth to build bridges across communities, participate in inclusive governance, and strengthen trust and cooperation in local systems.",
        fullArticle: `<h2>Social Cohesion & Inclusive Governance</h2><p>Inter-community projects, dialogue spaces between ethnic groups and participatory governance initiatives led by and for young people.</p>`,
      },
      {
        slug: 'peace-leadership',
        ico: '🌟',
        title: 'Youth Leadership for Reconciliation',
        desc: "Supports youth-led projects that promote reconciliation, peacebuilding, and community resilience, developing leadership skills and accountability.",
        fullArticle: `<h2>Youth Leadership for Reconciliation</h2><p>Funding and support for reconciliation micro-projects designed and executed by young people to strengthen social bonds in post-conflict communities.</p>`,
      },
    ],
  },

  /* ═══════════════════════════════════════════ 04 · CLIMATE RESILIENCE */
  {
    ico: '🌿',
    slug: 'climate',
    shortFr: 'Résilience Climatique',
    shortEn: 'Climate Resilience',
    titleFr: 'Jeunes & Résilience Climatique',
    titleEn: 'Youth and Climate Resilience',
    stat: '6',
    statLabelFr: "axes d'intervention",
    statLabelEn: 'intervention axes',
    descFr: "Ce programme renforce la capacité des jeunes et des communautés à répondre aux défis climatiques et environnementaux à travers des actions climatiques menées par les jeunes et des pratiques durables.",
    descEn: "This programme strengthens the capacity of young people and communities to respond to climate change and environmental challenges through youth-led climate action and sustainable practices.",

    areasFr: [
      {
        slug: 'climate-education',
        ico: '📖',
        title: 'Sensibilisation & Éducation Climatique',
        desc: "Éduque les jeunes sur le changement climatique, les défis environnementaux et les pratiques durables, les outillant pour agir dans leurs communautés.",
        fullArticle: `<h2>Sensibilisation & Éducation Climatique</h2><p>Curricula d'éducation climatique intégrés dans les écoles partenaires, camps climatiques jeunesse et campagnes de sensibilisation communautaires menées par des jeunes ambassadeurs climatiques.</p>`,
      },
      {
        slug: 'climate-adaptation',
        ico: '🌱',
        title: "Initiatives d'Adaptation Climatique",
        desc: "Soutient les jeunes dans la conception et la mise en œuvre de projets qui aident les communautés à s'adapter aux impacts climatiques.",
        fullArticle: `<h2>Initiatives d'Adaptation Climatique</h2><p>Conception et mise en œuvre de systèmes d'irrigation adaptés, de cultures résistantes à la sécheresse et d'infrastructure communautaire résiliente face aux inondations.</p>`,
      },
      {
        slug: 'climate-natural-resources',
        ico: '🌳',
        title: 'Gestion Durable des Ressources Naturelles',
        desc: "Engage les jeunes dans la gestion responsable des forêts, de l'eau et des terres, assurant une utilisation durable pour les générations présentes et futures.",
        fullArticle: `<h2>Gestion Durable des Ressources Naturelles</h2><p>Formation à l'agroforesterie, gestion des bassins versants et pratiques agricoles durables pour préserver les ressources naturelles du territoire de Minembwe.</p>`,
      },
      {
        slug: 'climate-green-skills',
        ico: '⚡',
        title: 'Compétences Vertes & Moyens de Subsistance',
        desc: "Formation aux compétences durables : énergies renouvelables, agriculture intelligente face au climat et entrepreneuriat éco-responsable.",
        fullArticle: `<h2>Compétences Vertes & Moyens de Subsistance</h2><p>Formation à l'installation de panneaux solaires, biodigesteurs, agriculture biologique et fabrication de produits écologiques pour créer des emplois verts locaux.</p>`,
      },
      {
        slug: 'climate-reforestation',
        ico: '🌲',
        title: 'Protection Environnementale & Reboisement',
        desc: "Mobilise les jeunes pour mener des initiatives de reboisement, de plantation d'arbres et de conservation locale, restaurant les écosystèmes.",
        fullArticle: `<h2>Protection Environnementale & Reboisement</h2><p>Campagnes annuelles de plantation d'arbres, pépinières communautaires gérées par les jeunes et cartographie participative des zones dégradées à restaurer.</p>`,
      },
      {
        slug: 'climate-advocacy',
        ico: '📣',
        title: 'Plaidoyer Climatique Jeune',
        desc: "Encourage les jeunes à participer aux campagnes de plaidoyer et aux dialogues politiques sur les questions climatiques.",
        fullArticle: `<h2>Plaidoyer Climatique Jeune</h2><p>Formation au plaidoyer, participation aux COP, délégations jeunesse aux forums nationaux et production de rapports alternatifs soumis aux instances gouvernementales.</p>`,
      },
    ],

    areasEn: [
      {
        slug: 'climate-education',
        ico: '📖',
        title: 'Climate Awareness & Education',
        desc: "Educates young people on climate change, environmental challenges, and sustainable practices, empowering them to take action in their communities.",
        fullArticle: `<h2>Climate Awareness & Education</h2><p>Climate education curricula integrated in partner schools, youth climate camps and community awareness campaigns led by young climate ambassadors.</p>`,
      },
      {
        slug: 'climate-adaptation',
        ico: '🌱',
        title: 'Youth-Led Climate Adaptation',
        desc: "Supports youth to design and implement projects that help communities adapt to climate impacts and reduce vulnerability to climate risks.",
        fullArticle: `<h2>Youth-Led Climate Adaptation</h2><p>Design and implementation of adapted irrigation systems, drought-resistant crops and community infrastructure resilient to flooding.</p>`,
      },
      {
        slug: 'climate-natural-resources',
        ico: '🌳',
        title: 'Sustainable Natural Resource Management',
        desc: "Engages young people in responsible management of forests, water, and land for sustainable use by current and future generations.",
        fullArticle: `<h2>Sustainable Natural Resource Management</h2><p>Training in agroforestry, watershed management and sustainable farming practices to preserve the natural resources of the Minembwe territory.</p>`,
      },
      {
        slug: 'climate-green-skills',
        ico: '⚡',
        title: 'Green Skills & Climate-Smart Livelihoods',
        desc: "Training in renewable energy, climate-smart agriculture, and eco-friendly entrepreneurship to boost youth employability and local development.",
        fullArticle: `<h2>Green Skills & Climate-Smart Livelihoods</h2><p>Training in solar panel installation, biodigesters, organic farming and ecological product manufacturing to create local green jobs.</p>`,
      },
      {
        slug: 'climate-reforestation',
        ico: '🌲',
        title: 'Environmental Protection & Reforestation',
        desc: "Empowers youth to lead reforestation, tree planting, and local conservation initiatives, restoring ecosystems and improving community wellbeing.",
        fullArticle: `<h2>Environmental Protection & Reforestation</h2><p>Annual tree planting campaigns, community nurseries managed by youth and participatory mapping of degraded areas to be restored.</p>`,
      },
      {
        slug: 'climate-advocacy',
        ico: '📣',
        title: 'Youth Climate Advocacy',
        desc: "Encourages young people to participate in advocacy campaigns and policy dialogues on climate issues, amplifying youth voices in decision-making.",
        fullArticle: `<h2>Youth Climate Advocacy</h2><p>Advocacy training, participation in COPs, youth delegations to national forums and production of alternative reports submitted to government bodies.</p>`,
      },
    ],
  },

  /* ════════════════════════════════════════════ 05 · RESEARCH & ADVOCACY */
  {
    ico: '🔬',
    slug: 'research',
    shortFr: 'Recherche & Plaidoyer',
    shortEn: 'Research & Advocacy',
    titleFr: 'Recherche et Plaidoyer',
    titleEn: 'Research and Advocacy',
    stat: 'UPG',
    statLabelFr: 'Modèle de référence',
    statLabelEn: 'Reference model',
    descFr: "Chez ADJC, le plaidoyer fondé sur des données probantes est un pilier de notre stratégie de changement systémique. Ce programme renforce les voix des jeunes à la base grâce à la recherche rigoureuse, l'apprentissage participatif et le plaidoyer, ancrés dans notre modèle UPG.",
    descEn: "At ADJC, evidence-based advocacy is a cornerstone of our strategy for systemic change. This programme strengthens grassroots youth voices through rigorous research, participatory learning, and advocacy, rooted in our UPG model and community-based work.",

    areasFr: [
      {
        slug: 'research-participatory',
        ico: '🔎',
        title: 'Recherche Participative',
        desc: "Implique les jeunes dans la collecte et l'analyse de données, garantissant que leurs perspectives informent les politiques et les programmes.",
        fullArticle: `<h2>Recherche Participative</h2><p>Les jeunes sont formés comme chercheurs communautaires, collectant des données qualitatives et quantitatives sur les besoins et expériences de leur communauté pour informer nos interventions.</p>`,
      },
      {
        slug: 'research-evidence-advocacy',
        ico: '📊',
        title: 'Plaidoyer Fondé sur les Preuves',
        desc: "Utilise les résultats de la recherche pour informer les campagnes de plaidoyer, influencer les politiques et promouvoir un changement systémique.",
        fullArticle: `<h2>Plaidoyer Fondé sur les Preuves</h2><p>Nos rapports de recherche alimentent des campagnes de plaidoyer ciblées auprès des décideurs politiques congolais et des partenaires internationaux pour un changement systémique durable.</p>`,
      },
      {
        slug: 'research-learning',
        ico: '🎓',
        title: 'Apprentissage & Partage des Connaissances',
        desc: "Facilite des ateliers, formations et échanges pour traduire la recherche en solutions concrètes et renforcer les capacités des jeunes.",
        fullArticle: `<h2>Apprentissage & Partage des Connaissances</h2><p>Forums d'apprentissage inter-organisations, publications de synthèse et plateformes numériques pour partager les leçons apprises et les bonnes pratiques.</p>`,
      },
      {
        slug: 'research-monitoring',
        ico: '📋',
        title: 'Suivi & Évaluation Communautaires',
        desc: "Soutient les jeunes dans le suivi des résultats des programmes et de l'impact communautaire, assurant responsabilité et amélioration continue.",
        fullArticle: `<h2>Suivi & Évaluation Communautaires</h2><p>Outils de suivi participatif, tableaux de bord communautaires et revues trimestrielles impliquant les bénéficiaires dans l'évaluation de l'impact de nos programmes.</p>`,
      },
      {
        slug: 'research-transformative',
        ico: '💡',
        title: 'Changement Transformateur par la Recherche',
        desc: "Promeut des solutions innovantes et fondées sur la recherche pour les défis auxquels font face les jeunes, les femmes et les communautés.",
        fullArticle: `<h2>Changement Transformateur par la Recherche</h2><p>Laboratoires d'innovation sociale combinant recherche empirique et créativité des jeunes pour co-concevoir des solutions aux problèmes complexes des communautés congolaises.</p>`,
      },
      {
        slug: 'research-amplify-voices',
        ico: '🗣️',
        title: 'Amplification des Voix des Jeunes',
        desc: "Renforce la capacité des jeunes à articuler leurs besoins et à influencer les décisions qui affectent leur vie au niveau communautaire et politique.",
        fullArticle: `<h2>Amplification des Voix des Jeunes</h2><p>Plateformes médiatiques communautaires, podcasts jeunesse, représentation dans les espaces décisionnels et formation au plaidoyer public pour amplifier l'impact des voix jeunes.</p>`,
      },
    ],

    areasEn: [
      {
        slug: 'research-participatory',
        ico: '🔎',
        title: 'Participatory Youth Research',
        desc: "Engages young people in data collection and analysis, ensuring their perspectives inform policies and programmes.",
        fullArticle: `<h2>Participatory Youth Research</h2><p>Young people are trained as community researchers, collecting qualitative and quantitative data on their community's needs and experiences to inform our interventions.</p>`,
      },
      {
        slug: 'research-evidence-advocacy',
        ico: '📊',
        title: 'Evidence-Based Advocacy',
        desc: "Uses research findings to inform advocacy campaigns, influence policy, and promote systemic change at local and national levels.",
        fullArticle: `<h2>Evidence-Based Advocacy</h2><p>Our research reports fuel targeted advocacy campaigns with Congolese policymakers and international partners for lasting systemic change.</p>`,
      },
      {
        slug: 'research-learning',
        ico: '🎓',
        title: 'Learning & Knowledge Sharing',
        desc: "Facilitates workshops, training, and exchanges to translate research into actionable solutions and strengthen youth capacity.",
        fullArticle: `<h2>Learning & Knowledge Sharing</h2><p>Inter-organisational learning forums, synthesis publications and digital platforms to share lessons learned and good practices.</p>`,
      },
      {
        slug: 'research-monitoring',
        ico: '📋',
        title: 'Community-Based Monitoring & Evaluation',
        desc: "Supports youth in tracking programme outcomes and community impact, ensuring accountability and continuous improvement.",
        fullArticle: `<h2>Community-Based Monitoring & Evaluation</h2><p>Participatory monitoring tools, community dashboards and quarterly reviews involving beneficiaries in evaluating the impact of our programmes.</p>`,
      },
      {
        slug: 'research-transformative',
        ico: '💡',
        title: 'Transformative Change Through Research',
        desc: "Promotes innovative, research-driven solutions to challenges faced by youth, women, and communities.",
        fullArticle: `<h2>Transformative Change Through Research</h2><p>Social innovation labs combining empirical research and youth creativity to co-design solutions to complex problems in Congolese communities.</p>`,
      },
      {
        slug: 'research-amplify-voices',
        ico: '🗣️',
        title: 'Amplifying Youth Voices',
        desc: "Strengthens the capacity of young people to articulate their needs and influence decisions that affect their lives at community and policy levels.",
        fullArticle: `<h2>Amplifying Youth Voices</h2><p>Community media platforms, youth podcasts, representation in decision-making spaces and public advocacy training to amplify the impact of youth voices.</p>`,
      },
    ],
  },
]

/**
 * Finds a sub-program by slug across all programs.
 * Returns { program, areaFr, areaEn, programIndex, areaIndex } or null.
 */
export function findAreaBySlug(slug) {
  for (let pi = 0; pi < programs.length; pi++) {
    const program = programs[pi]
    for (let ai = 0; ai < program.areasFr.length; ai++) {
      if (program.areasFr[ai].slug === slug) {
        return {
          program,
          areaFr: program.areasFr[ai],
          areaEn: program.areasEn[ai],
          programIndex: pi,
          areaIndex: ai,
        }
      }
    }
  }
  return null
}