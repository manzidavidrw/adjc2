<template>
  <div class="fixed top-0 left-0 right-0 z-[400]" @mouseleave="activeMenu = null">

    <!-- ── Lang / utility bar ── -->
    <div :class="['bg-navy-dark border-b border-white/[.06] flex items-center justify-between px-8 overflow-hidden transition-all duration-500',
      scrolled ? 'h-0 opacity-0 border-b-0' : 'h-10 opacity-100']">

      <!-- Left: two office locations -->
      <div class="flex items-center gap-0 divide-x divide-white/[.08]">

        <!-- Bukavu -->
        <div class="flex items-center gap-2.5 pr-5">
          <div class="flex items-center justify-center w-4 h-4 rounded-sm bg-red/20 flex-shrink-0">
            <svg class="w-2.5 h-2.5 text-red" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-white/60 font-body font-semibold text-[.58rem] tracking-[1.5px] uppercase">Bukavu</span>
            <span class="text-white/20 text-[.58rem]">·</span>
            <span class="text-white/30 font-body text-[.58rem] tracking-[0.5px]">✉ info@adjcongo.org</span>
            <span class="text-white/20 text-[.58rem]">·</span>
            <span class="text-white/30 font-body text-[.58rem] tracking-[0.5px]">☎ +243 985 031 016</span>
          </div>
        </div>

      </div>

      <!-- Right: language switcher -->
      <div class="flex items-center gap-1">
        <!-- Email icon -->
        <a href="https://server104.web-hosting.com:2096/" target="_blank"
          class="hidden md:flex items-center justify-center w-8 h-8 rounded-full transition-all hover:scale-105" :class="isScrolled
            ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            : 'text-white hover:text-white/80 hover:bg-white/10'" title="Webmail Login">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
        <button v-for="l in ['fr', 'en']" :key="l" @click="setLang(l)" :class="['text-[.62rem] font-semibold tracking-[2px] uppercase px-3 py-0.5 rounded-sm transition-all duration-200 border-none cursor-pointer font-body',
          lang === l ? 'bg-red text-white' : 'bg-transparent text-white/40 hover:text-white/70']">{{ l }}</button>
      </div>
    </div>
    <!-- ── Main navbar ── -->
    <nav :class="['transition-all duration-500',
      scrolled ? 'bg-navy-dark/96 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,.35)]' : 'bg-transparent']">
      <div class="max-w-[1280px] mx-auto px-8 h-[80px] flex items-center justify-between">

        <!-- Logo -->
        <button @click="navigate('home')" class="flex items-center gap-3 flex-shrink-0">
          <img :src="logo" alt="ADJC Logo" class="h-14 w-auto object-contain" />
        </button>

        <!-- Desktop mega-menu -->
        <div class="hidden lg:flex items-center h-full">
          <div v-for="menu in menus" :key="menu.key" class="relative h-full flex items-center "
            @mouseenter="activeMenu = menu.key">

            <!-- Top-level label -->
            <button @click="navigate(menu.page, null)"
              class="flex items-center gap-1.5 h-full px-5 text-[.7rem] font-semibold tracking-[1px] uppercase font-body border-none bg-transparent cursor-pointer transition-colors duration-200"
              :class="activeMenu === menu.key
                ? 'text-sky-600'
                : 'text-sky-400 hover:text-sky-600'">

              {{ t(menu.label) }}

              <svg v-if="menu.subs.length" class="w-3 h-3 transition-transform duration-200"
                :class="activeMenu === menu.key ? 'rotate-180' : ''" fill="none" viewBox="0 0 12 12">
                <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
            <div class="absolute bottom-0 left-5 right-5 h-[2px] bg-red transition-transform duration-200 origin-left"
              :class="activeMenu === menu.key ? 'scale-x-100' : 'scale-x-0'"></div>

            <!-- Dropdown panel — only shown if menu has subs -->
            <div v-if="menu.subs.length" v-show="activeMenu === menu.key"
              class="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[520px]"
              style="filter:drop-shadow(0 20px 40px rgba(0,0,0,.4))">
              <div class="bg-white rounded-2xl overflow-hidden">
                <div class="bg-navy px-6 py-4 flex items-center justify-between">
                  <div>
                    <p class="text-white font-display font-bold text-lg leading-none">{{ t(menu.label) }}</p>
                    <p class="text-white/40 font-body text-[.65rem] mt-1">{{ t(menu.desc) }}</p>
                  </div>
                  <div class="w-10 h-10 bg-red/20 rounded-xl flex items-center justify-center text-xl">{{ menu.ico }}
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-px bg-navy/5 p-1">
                  <button v-for="sub in menu.subs" :key="sub.navId + sub.label"
                    @click="navigate(sub.navId, sub.anchor); activeMenu = null"
                    class="flex items-start gap-3 px-4 py-4 rounded-xl bg-white hover:bg-navy-mist text-left transition-colors duration-150 border-none cursor-pointer group/sub">
                    <span
                      class="w-8 h-8 rounded-lg bg-navy/5 group-hover/sub:bg-red group-hover/sub:text-white flex items-center justify-center text-base flex-shrink-0 transition-all duration-200">
                      {{ sub.ico }}
                    </span>
                    <div>
                      <p class="font-body font-semibold text-navy text-sm leading-tight">{{ t(sub.label) }}</p>
                      <p class="font-body text-navy/45 text-[.68rem] leading-snug mt-0.5">{{ t(sub.desc) }}</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Donate CTA -->
          <button @click="navigate('donate', null)"
            class="ml-4 bg-red hover:bg-red-dark text-white text-[.7rem] font-semibold tracking-[1px] uppercase px-5 py-2.5 rounded-lg border-none cursor-pointer transition-all duration-200 hover:-translate-y-px hover:shadow-red-lg font-body flex-shrink-0">
            {{ t('navDonate') }}
          </button>

          <!-- Admin Login -->
          <button @click="navigate('admin-login')"
            class="ml-2 w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
            title="Admin Login">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </button>
        </div>

        <!-- Hamburger -->
        <button @click="$emit('toggleMob')"
          class="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer">
          <span class="block w-5 h-[1.5px] bg-white/70 transition-all duration-300"
            :class="mob ? 'rotate-45 translate-y-[6.5px]' : ''"></span>
          <span class="block w-5 h-[1.5px] bg-white/70 transition-all duration-300"
            :class="mob ? 'opacity-0' : ''"></span>
          <span class="block w-5 h-[1.5px] bg-white/70 transition-all duration-300"
            :class="mob ? '-rotate-45 -translate-y-[6.5px]' : ''"></span>
        </button>
      </div>
    </nav>
  </div>

  <!-- Mobile full-screen menu -->
  <div :class="['fixed inset-0 z-[350] bg-navy-dark flex flex-col overflow-y-auto transition-all duration-500 pt-[116px]',
    mob ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none']">
    <div class="flex-1 px-6 py-4 flex flex-col gap-1">
      <div v-for="menu in menus" :key="menu.key">
        <button
          @click="menu.subs.length ? (mobActive = mobActive === menu.key ? null : menu.key) : (navigate(menu.page), $emit('toggleMob'))"
          class="w-full flex items-center justify-between px-4 py-4 rounded-xl bg-transparent hover:bg-white/[.04] border-none cursor-pointer transition-colors duration-200">
          <span class="font-display font-bold text-white text-2xl">{{ t(menu.label) }}</span>
          <svg v-if="menu.subs.length" class="w-5 h-5 text-white/40 transition-transform duration-300"
            :class="mobActive === menu.key ? 'rotate-180' : ''" fill="none" viewBox="0 0 12 12">
            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
        <div v-if="menu.subs.length" class="overflow-hidden transition-all duration-400"
          :style="mobActive === menu.key ? 'max-height:600px;opacity:1' : 'max-height:0;opacity:0'">
          <div class="flex flex-col gap-1 px-2 pb-3">
            <button v-for="sub in menu.subs" :key="sub.navId + sub.label"
              @click="navigate(sub.navId, sub.anchor); $emit('toggleMob'); mobActive = null"
              class="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[.03] hover:bg-white/[.07] border-none cursor-pointer text-left transition-colors duration-150">
              <span class="w-8 h-8 rounded-lg bg-red/20 flex items-center justify-center text-base flex-shrink-0">{{
                sub.ico }}</span>
              <div>
                <p class="font-body font-semibold text-white text-sm leading-tight">{{ t(sub.label) }}</p>
                <p class="font-body text-white/35 text-[.65rem]">{{ t(sub.desc) }}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile footer: offices + lang + donate -->
    <div class="px-6 py-6 border-t border-white/[.07] flex flex-col gap-4">

      <!-- Office locations -->
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1.5 bg-white/[.04] rounded-xl px-4 py-3">
          <div class="flex items-center gap-1.5">
            <svg class="w-3 h-3 text-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-white font-body font-bold text-[.62rem] tracking-[1.5px] uppercase">Bukavu</span>
          </div>
          <p class="text-white/35 font-body text-[.6rem] leading-relaxed">
            info@adjcongo.org<br>+243 985 031 016
          </p>
        </div>
        <div class="flex flex-col gap-1.5 bg-white/[.04] rounded-xl px-4 py-3">
          <div class="flex items-center gap-1.5">
            <svg class="w-3 h-3 text-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-white font-body font-bold text-[.62rem] tracking-[1.5px] uppercase">Goma</span>
          </div>

        </div>
      </div>

      <button @click="navigate('donate'); $emit('toggleMob')"
        class="w-full bg-red hover:bg-red-dark text-white font-body font-semibold text-base py-4 rounded-xl border-none cursor-pointer transition-colors duration-200">
        {{ t('navDonate') }} →
      </button>
      <div class="flex items-center justify-center gap-4">
        <button @click="navigate('admin-login'); $emit('toggleMob')"
          class="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
          title="Admin Login">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </button>
        <a href="https://server104.web-hosting.com:2096/" target="_blank"
          class="p-3 rounded-full bg-brand-yellow text-brand-green hover:brightness-110 transition-all shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
        <div class="flex items-center gap-2">
          <button v-for="l in ['fr', 'en']" :key="l" @click="setLang(l)" :class="['text-xs font-semibold tracking-[2px] uppercase px-4 py-2 rounded-lg border-none cursor-pointer font-body transition-all duration-200',
            lang === l ? 'bg-red text-white' : 'bg-white/[.06] text-white/40']">{{ l }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'
import logo from '../assets/logo.png'

const { lang, t } = useTranslations()
function setLang(l) { lang.value = l }
defineProps({ mob: Boolean, currentPage: String })
const emit = defineEmits(['toggleMob', 'navigate'])

const scrolled = ref(false)
const activeMenu = ref(null)
const mobActive = ref(null)

function navigate(id, anchor = null) {
  activeMenu.value = null
  emit('navigate', id, anchor)
}

function setNavbarHeight() {
  const h = scrolled.value ? 80 : 116
  document.documentElement.style.setProperty('--navbar-h', h + 'px')
}

function onScroll() {
  scrolled.value = window.scrollY > 30
  setNavbarHeight()
}

onMounted(() => {
  setNavbarHeight()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const menus = ref([
  {
    key: 'about', label: 'menuAboutUs', desc: 'menuAboutUsDesc', ico: '🌍', page: 'whoweare',
    subs: [
      { navId: 'whoweare', anchor: 'our-story', ico: '📖', label: 'subOurStory', desc: 'subOurStoryDesc' },
      { navId: 'whoweare', anchor: 'visionmission', ico: '🎯', label: 'subMission', desc: 'subMissionDesc' },
      { navId: 'whoweare', anchor: 'approach', ico: '🧭', label: 'subApproach', desc: 'subApproachDesc' },
      { navId: 'whoweare', anchor: 'values', ico: '💎', label: 'subValues', desc: 'subValuesDesc' },
      { navId: 'whoweare', anchor: 'team', ico: '👥', label: 'subTeam', desc: 'subTeamDesc' },
      { navId: 'whoweare', anchor: 'partners', ico: '🤝', label: 'subPartners', desc: 'subPartnersDesc' },
    ],
  },
  {
    key: 'whatwedo', label: 'menuWhatWeDo', desc: 'menuWhatWeDoDesc', ico: '🚀', page: 'whatwedo',
    subs: [
      { navId: 'whatwedo', anchor: 'srhr', ico: '🩺', label: 'subSRHR', desc: 'subSRHRDesc' },
      { navId: 'whatwedo', anchor: 'enterprise', ico: '💼', label: 'subEnterprise', desc: 'subEnterpriseDesc' },
      { navId: 'whatwedo', anchor: 'peace', ico: '☮️', label: 'subPeace', desc: 'subPeaceDesc' },
      { navId: 'whatwedo', anchor: 'climate', ico: '🌿', label: 'subClimate', desc: 'subClimateDesc' },
      { navId: 'whatwedo', anchor: 'research', ico: '🔬', label: 'subResearch', desc: 'subResearchDesc' },
    ],
  },
  {
    key: 'safipads', label: 'menuSafiPads', desc: 'menuSafiPadsDesc', ico: '🌸', page: 'safipads',
    subs: [
      { navId: 'safipads', anchor: null, ico: '🌸', label: 'subSafiAbout', desc: 'subSafiAboutDesc' },
      { navId: 'safipads', anchor: null, ico: '💧', label: 'subSafiMission', desc: 'subSafiMissionDesc' },
      { navId: 'safipads', anchor: null, ico: '🏫', label: 'subSafiSchools', desc: 'subSafiSchoolsDesc' },
      { navId: 'safipads', anchor: null, ico: '🤝', label: 'subSafiPartner', desc: 'subSafiPartnerDesc' },
    ],
  },
  {
    key: 'news', label: 'menuBlogsNews', desc: 'menuBlogsNewsDesc', ico: '📰', page: 'blognews',
    subs: [],
  },
  {
    key: 'takeaction', label: 'menuTakeAction', desc: 'menuTakeActionDesc', ico: '❤️', page: 'donate',
    subs: [
      { navId: 'donate', anchor: null, ico: '💳', label: 'subDonate', desc: 'subDonateDesc' },
      { navId: 'volunteer', anchor: null, ico: '🙌', label: 'subVolunteer', desc: 'subVolunteerDesc' },
      { navId: 'partnerships', anchor: null, ico: '🏢', label: 'subPartnerOrg', desc: 'subPartnerOrgDesc' },
      { navId: 'careers', anchor: null, ico: '🎓', label: 'subCareers', desc: 'subCareersDesc' },
      { navId: 'contact', anchor: null, ico: '📞', label: 'subContactUs', desc: 'subContactUsDesc' },
    ],
  },
])
</script>