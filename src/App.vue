<template>
  <TheCursor />
  <TheNavbar :mob="mobOpen" :current-page="currentPage" @toggleMob="mobOpen = !mobOpen" @navigate="navigateTo" />

  <!-- ── Sub-pages ── -->
  <WhoWeArePage v-if="currentPage === 'whoweare'" :section="currentRouteParams.section" @navigate="navigateTo" />
  <WhatWeDoPage v-else-if="currentPage === 'whatwedo'" :section="currentRouteParams.section" @navigate="navigateTo" />
  <SubProgramPage v-else-if="currentPage === 'sub-program'" :slug="currentRouteParams.slug" @navigate="navigateTo" />
  <SafiPadsPage v-else-if="currentPage === 'safipads'" @navigate="navigateTo" />
  <BlogNewsPage v-else-if="currentPage === 'blognews'" @navigate="navigateTo" />
  <BlogPostPage v-else-if="currentPage === 'blog-post'" :post-id="currentRouteParams.postId" @navigate="navigateTo" />
  <AdminLoginPage v-else-if="currentPage === 'admin-login'" @navigate="navigateTo" />
  <AdminPanelPage v-else-if="currentPage === 'admin-panel'" @navigate="navigateTo" />

  <!-- ── Home (default) ── -->
  <template v-else>
    <main>
      <HeroSection @navigate="navigateTo" />
      <AboutSection />
      <ProgramsSection @navigate="navigateTo" />
      <ImpactSection />
      <TeamSection />
      <PartnersSection />

      <GallerySection />
      <ContactSection />
    </main>
  </template>

  <TheFooter @navigate="navigateTo" />
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'

import { useReveal } from '../src/composables/useReveal.js'
import TheCursor from '../src/components/TheCursor.vue'
import TheNavbar from '../src/components/TheNavbar.vue'
import HeroSection from '../src/components/HeroSection.vue'
import AboutSection from '../src/components/AboutSection.vue'
import ProgramsSection from '../src/components/ProgramsSection.vue'
import ImpactSection from '../src/components/ImpactSection.vue'
import TeamSection from '../src/components/TeamSection.vue'
import GallerySection from '../src/components/GallerySection.vue'
import PartnersSection from '../src/components/PartnersSection.vue'
import ContactSection from '../src/components/ContactSection.vue'
import TheFooter from '../src/components/TheFooter.vue'
import WhoWeArePage from '../src/components/whowearepage.vue'
import WhatWeDoPage from '../src/components/whatwedopage.vue'
import SubProgramPage from '../src/pages/Subprogrampage.vue'
import SafiPadsPage from '../src/pages/SafiPadsPage.vue'
import BlogNewsPage from '../src/pages/BlogNewsPage.vue'
import BlogPostPage from '../src/pages/Blogpostpage.vue'
import AdminLoginPage from '../src/pages/AdminLoginPage.vue'
import AdminPanelPage from '../src/pages/AdminPanelPage.vue'

// ── State ─────────────────────────────────────────────────────────────────────
const mobOpen = ref(false)
const currentPage = ref('home')
const currentRouteParams = ref({})

// Section anchors that live on the home page
const HOME_ANCHORS = new Set([
  'home', 'about', 'programs', 'impact',
  'team', 'partners', 'news', 'gallery', 'donate', 'contact',
])

// ── Navigation ────────────────────────────────────────────────────────────────
/**
 * Central navigation handler used by all components via @navigate.
 *
 * @param {string} target - Route name or home-page anchor id
 * @param {object|string} params - Optional route params, e.g. { slug: 'srhr-gbv-prevention' } or anchor string
 */
function navigateTo(target, params = {}) {
  mobOpen.value = false

  let section = null
  if (typeof params === 'string') {
    section = params
    params = { section }
  } else if (params && typeof params === 'object' && 'section' in params) {
    section = params.section
  }

  currentRouteParams.value = params

  // Named sub-pages
  if (target === 'whoweare') {
    currentPage.value = 'whoweare'
    currentRouteParams.value = { section }
    return
  }
  // About Us section anchors — go to whoweare page then scroll to section
  const WHOWEARE_SECTIONS = new Set(['ourstory', 'visionmission', 'approach', 'values', 'ourteam', 'partners'])
  if (WHOWEARE_SECTIONS.has(target)) {
    currentRouteParams.value = { section: target }
    if (currentPage.value === 'whoweare') {
      // Already on the page — just scroll
      nextTick(() => scrollToSection(target))
    } else {
      currentPage.value = 'whoweare'
      // whowearepage will scroll on mount via the section param
    }
    return
  }
  // WhatWeDo section anchors — go to whatwedo page then scroll to program
  const WHATWEDO_SECTIONS = new Set(['srhr', 'enterprise', 'peace', 'climate', 'research'])
  if (WHATWEDO_SECTIONS.has(target)) {
    currentRouteParams.value = { section: target }
    if (currentPage.value === 'whatwedo') {
      nextTick(() => scrollToSection(target))
    } else {
      currentPage.value = 'whatwedo'
    }
    return
  }
  if (target === 'whatwedo') {
    currentPage.value = 'whatwedo'
    currentRouteParams.value = { section }
    if (section && currentPage.value === 'whatwedo') {
      nextTick(() => scrollToSection(section))
    }
    return
  }
  if (target === 'sub-program') {
    currentPage.value = 'sub-program'
    return
  }
  if (target === 'safipads') {
    currentPage.value = 'safipads'
    return
  }
  if (target === 'blognews' || target === 'news' || target === 'blog' || target === 'gallery') {
    currentPage.value = 'blognews'
    return
  }
  if (target === 'blog-post') {
    currentPage.value = 'blog-post'
    return
  }
  if (target === 'admin-login') {
    currentPage.value = 'admin-login'
    return
  }
  if (target === 'admin-panel') {
    currentPage.value = 'admin-panel'
    return
  }

  // Home-page section anchors — navigate home first if needed, then scroll
  if (currentPage.value !== 'home') {
    currentPage.value = 'home'
    nextTick(() => {
      setTimeout(() => {
        if (HOME_ANCHORS.has(target)) {
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
        }
      }, 80)
    })
  } else {
    if (HOME_ANCHORS.has(target)) {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

// ── Scroll to a named section (used by About Us and What We Do anchors) ──────
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (!el) return
  const navbarHeight = 96
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
  window.scrollTo({ top, behavior: 'smooth' })
}

// ── Re-run reveal observer on every page change ───────────────────────────────
watch(currentPage, () => nextTick(() => useReveal()))

onMounted(() => useReveal())
</script>