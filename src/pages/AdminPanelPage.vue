<template>
  <div class="admin-panel-page min-h-screen bg-navy-mist pt-[116px]">
    <!-- Header -->
    <header class="bg-navy-dark text-white py-6 px-8">
      <div class="max-w-[1280px] mx-auto flex items-center justify-between">
        <div>
          <h1 class="font-display font-bold text-2xl">
            {{ lang === 'fr' ? 'Panneau d\'Administration' : 'Admin Panel' }}
          </h1>
          <p class="text-white/60 font-body text-sm mt-1">
            {{ lang === 'fr' ? 'Gérer les articles du blog' : 'Manage blog posts' }}
          </p>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-white/60 font-body text-sm">
            {{ lang === 'fr' ? 'Connecté en tant que' : 'Logged in as' }}: {{ user?.email }}
          </span>
          <button @click="handleLogout"
            class="bg-red hover:bg-red-dark text-white font-body text-sm px-4 py-2 rounded-lg border-none cursor-pointer transition-colors duration-200">
            {{ lang === 'fr' ? 'Déconnexion' : 'Logout' }}
          </button>
        </div>
      </div>
    </header>

    <div class="max-w-[1280px] mx-auto px-8 py-8">
      <!-- Action Bar -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="font-display font-bold text-navy text-xl">
          {{ lang === 'fr' ? 'Articles du Blog' : 'Blog Posts' }}
        </h2>
        <button @click="showCreateModal = true"
          class="bg-red hover:bg-red-dark text-white font-body font-semibold text-sm px-6 py-3 rounded-xl border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-red-lg">
          + {{ lang === 'fr' ? 'Nouvel Article' : 'New Post' }}
        </button>
      </div>

      <!-- Posts Table -->
      <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/[.06]">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-navy-mist">
              <tr>
                <th class="px-6 py-4 text-left font-body font-semibold text-navy text-sm">
                  {{ lang === 'fr' ? 'Titre' : 'Title' }}
                </th>
                <th class="px-6 py-4 text-left font-body font-semibold text-navy text-sm">
                  {{ lang === 'fr' ? 'Catégorie' : 'Category' }}
                </th>
                <th class="px-6 py-4 text-left font-body font-semibold text-navy text-sm">
                  {{ lang === 'fr' ? 'Date' : 'Date' }}
                </th>
                <th class="px-6 py-4 text-left font-body font-semibold text-navy text-sm">
                  {{ lang === 'fr' ? 'Auteur' : 'Author' }}
                </th>
                <th class="px-6 py-4 text-center font-body font-semibold text-navy text-sm">
                  {{ lang === 'fr' ? 'Actions' : 'Actions' }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.id" class="border-t border-navy/[.04] hover:bg-navy/[.02]">
                <td class="px-6 py-4">
                  <div class="font-body font-semibold text-navy text-sm max-w-xs truncate">
                    {{ lang === 'fr' ? post.titleFr : post.titleEn }}
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="bg-red/10 text-red font-body text-xs px-2 py-1 rounded-full">
                    {{ lang === 'fr' ? post.catFr : post.catEn }}
                  </span>
                </td>
                <td class="px-6 py-4 font-body text-navy/60 text-sm">
                  {{ post.date }}
                </td>
                <td class="px-6 py-4 font-body text-navy/60 text-sm">
                  {{ post.author }}
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="flex items-center justify-center gap-2">
                    <button @click="editPost(post)"
                      class="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors duration-200">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button @click="deletePost(post)"
                      class="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition-colors duration-200">
                      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-16 text-navy/40 font-body text-sm">
          {{ lang === 'fr' ? 'Chargement des articles...' : 'Loading posts...' }}
        </div>

        <!-- Empty State -->
        <div v-if="!loading && posts.length === 0" class="text-center py-16">
          <div class="text-5xl mb-4">📝</div>
          <p class="text-navy/40 font-body text-sm">
            {{ lang === 'fr' ? 'Aucun article trouvé.' : 'No posts found.' }}
          </p>
        </div>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div v-if="showCreateModal || editingPost"
      class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" @click.self="closeModal">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-display font-bold text-navy text-xl">
              {{ editingPost ? (lang === 'fr' ? 'Modifier l\'Article' : 'Edit Post') : (lang === 'fr' ? 'Nouvel Article'
                : 'New Post') }}
            </h3>
            <button @click="closeModal"
              class="w-8 h-8 rounded-lg bg-navy/5 hover:bg-navy/10 text-navy/60 hover:text-navy flex items-center justify-center transition-colors duration-200">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Basic Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Titre (Français)' : 'Title (French)' }}
                </label>
                <input v-model="form.titleFr" type="text" required
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200" />
              </div>
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Titre (Anglais)' : 'Title (English)' }}
                </label>
                <input v-model="form.titleEn" type="text" required
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200" />
              </div>
            </div>

            <!-- Category and Author -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Catégorie (Français)' : 'Category (French)' }}
                </label>
                <input v-model="form.catFr" type="text" required
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200" />
              </div>
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Catégorie (Anglais)' : 'Category (English)' }}
                </label>
                <input v-model="form.catEn" type="text" required
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200" />
              </div>
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Auteur' : 'Author' }}
                </label>
                <input v-model="form.author" type="text" required
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200" />
              </div>
            </div>

            <!-- Excerpts -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Extrait (Français)' : 'Excerpt (French)' }}
                </label>
                <textarea v-model="form.excerptFr" rows="3" required
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200 resize-none"></textarea>
              </div>
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Extrait (Anglais)' : 'Excerpt (English)' }}
                </label>
                <textarea v-model="form.excerptEn" rows="3" required
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200 resize-none"></textarea>
              </div>
            </div>

            <!-- Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Contenu (Français)' : 'Content (French)' }}
                </label>
                <textarea v-model="form.bodyFr" rows="8" required
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200 resize-none"></textarea>
              </div>
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Contenu (Anglais)' : 'Content (English)' }}
                </label>
                <textarea v-model="form.bodyEn" rows="8" required
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200 resize-none"></textarea>
              </div>
            </div>

            <!-- Image Uploads - FIXED SECTION -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Main Image -->
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Image Principale' : 'Main Image' }}
                  <span v-if="!editingPost" class="text-red">*</span>
                  <span v-if="editingPost" class="text-navy/40 text-xs ml-2">
                    {{ lang === 'fr' ? '(laisser vide pour garder l\'actuelle)' : '(leave empty to keep current)' }}
                  </span>
                </label>
                <div class="relative">
                  <input ref="imgMainInput" type="file" accept="image/*" @change="handleImageUpload('img', $event)"
                    :required="!editingPost && !form.img"
                    class="w-full text-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red file:text-white hover:file:bg-red-dark cursor-pointer transition-colors" />
                </div>
                <div v-if="form.img || form.imgPreview"
                  class="mt-3 rounded-lg overflow-hidden border border-navy/10 h-32 bg-navy/5 flex items-center justify-center relative group">
                  <img :src="form.imgPreview || form.img" alt="Main preview" class="h-full w-full object-cover" />
                  <button v-if="editingPost" type="button" @click="clearImage('img')"
                    class="absolute top-2 right-2 bg-red text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Middle Image -->
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Image Milieu (optionnelle)' : 'Middle Image (optional)' }}
                </label>
                <input ref="imgMidInput" type="file" accept="image/*" @change="handleImageUpload('imgMid', $event)"
                  class="w-full text-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-navy/10 file:text-navy hover:file:bg-navy/20 cursor-pointer transition-colors" />
                <div v-if="form.imgMid || form.imgMidPreview"
                  class="mt-3 rounded-lg overflow-hidden border border-navy/10 h-32 bg-navy/5 flex items-center justify-center relative group">
                  <img :src="form.imgMidPreview || form.imgMid" alt="Middle preview"
                    class="h-full w-full object-cover" />
                  <button type="button" @click="clearImage('imgMid')"
                    class="absolute top-2 right-2 bg-red text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Date and Read Time -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Date' : 'Date' }}
                </label>
                <input v-model="form.date" type="text" required placeholder="15 Mars 2026"
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200" />
              </div>
              <div>
                <label class="block text-navy font-body font-semibold text-sm mb-2">
                  {{ lang === 'fr' ? 'Temps de Lecture' : 'Read Time' }}
                </label>
                <input v-model="form.readTime" type="number" required min="1"
                  class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200" />
              </div>
            </div>

            <!-- Tags -->
            <div>
              <label class="block text-navy font-body font-semibold text-sm mb-2">
                {{ lang === 'fr' ? 'Tags (séparés par des virgules)' : 'Tags (comma separated)' }}
              </label>
              <input v-model="form.tagsString" type="text" placeholder="education, youth, development"
                class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy outline-none focus:border-red/50 transition-colors duration-200" />
            </div>

            <!-- Submit Buttons -->
            <div class="flex items-center justify-end gap-4 pt-4 border-t border-navy/[.06]">
              <button type="button" @click="closeModal"
                class="px-6 py-3 bg-navy/[.04] hover:bg-navy/[.08] text-navy font-body font-semibold text-sm rounded-xl border-none cursor-pointer transition-colors duration-200">
                {{ lang === 'fr' ? 'Annuler' : 'Cancel' }}
              </button>
              <button type="submit" :disabled="saving || uploadingImages"
                class="px-6 py-3 bg-red hover:bg-red-dark disabled:bg-red/50 text-white font-body font-semibold text-sm rounded-xl border-none cursor-pointer transition-all duration-200 disabled:cursor-not-allowed">
                <span v-if="saving || uploadingImages" class="flex items-center gap-2">
                  <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  {{ uploadingImages ? (lang === 'fr' ? 'Téléchargement des images...' : 'Uploading images...') : (lang
                    === 'fr' ? 'Sauvegarde...' : 'Saving...') }}
                </span>
                <span v-else>
                  {{ editingPost ? (lang === 'fr' ? 'Mettre à Jour' : 'Update') : (lang === 'fr' ? 'Créer' : 'Create')
                  }}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'
import { useAuth } from '../composables/useAuth.js'
import { useBlogPosts } from '../composables/useBlogPosts.js'
import { createClient } from '@supabase/supabase-js'

const emit = defineEmits(['navigate'])
const { lang } = useTranslations()
const { user, signOut, checkAuth } = useAuth()
const { posts, loading, fetchPosts } = useBlogPosts()

let supabase = null
function getSupabase() {
  if (!supabase) {
    supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_SERVICE_KEY
    )
  }
  return supabase
}

const showCreateModal = ref(false)
const editingPost = ref(null)
const saving = ref(false)
const uploadingImages = ref(false)

const imgMainInput = ref(null)
const imgMidInput = ref(null)

const form = ref({
  titleFr: '',
  titleEn: '',
  catFr: '',
  catEn: '',
  author: '',
  excerptFr: '',
  excerptEn: '',
  bodyFr: '',
  bodyEn: '',
  img: '',
  imgPreview: '', // NEW: for preview
  imgMid: '',
  imgMidPreview: '', // NEW: for preview
  imgFile: null, // NEW: store file
  imgMidFile: null, // NEW: store file
  date: '',
  readTime: 5,
  tagsString: '',
})

onMounted(async () => {
  await checkAuth()
  await new Promise(resolve => setTimeout(resolve, 100))

  if (!user.value) {
    emit('navigate', 'admin-login')
    return
  }

  await fetchPosts()
})

function resetForm() {
  form.value = {
    titleFr: '',
    titleEn: '',
    catFr: '',
    catEn: '',
    author: '',
    excerptFr: '',
    excerptEn: '',
    bodyFr: '',
    bodyEn: '',
    img: '',
    imgPreview: '',
    imgMid: '',
    imgMidPreview: '',
    imgFile: null,
    imgMidFile: null,
    date: '',
    readTime: 5,
    tagsString: '',
  }
}

function editPost(post) {
  editingPost.value = post
  form.value = {
    titleFr: post.titleFr,
    titleEn: post.titleEn,
    catFr: post.catFr,
    catEn: post.catEn,
    author: post.author,
    excerptFr: post.excerptFr,
    excerptEn: post.excerptEn,
    bodyFr: post.bodyFr,
    bodyEn: post.bodyEn,
    img: post.img,
    imgPreview: '',
    imgMid: post.imgMid || '',
    imgMidPreview: '',
    imgFile: null,
    imgMidFile: null,
    date: post.date,
    readTime: post.readTime,
    tagsString: post.tags ? post.tags.join(', ') : '',
  }
  showCreateModal.value = true
}

function clearImage(field) {
  if (field === 'img') {
    form.value.img = ''
    form.value.imgPreview = ''
    form.value.imgFile = null
    if (imgMainInput.value) imgMainInput.value.value = ''
  } else if (field === 'imgMid') {
    form.value.imgMid = ''
    form.value.imgMidPreview = ''
    form.value.imgMidFile = null
    if (imgMidInput.value) imgMidInput.value.value = ''
  }
}

async function handleSubmit() {
  saving.value = true

  try {
    // Upload new images if files were selected
    const uploadedUrls = await uploadImages()

    const postData = {
      title_fr: form.value.titleFr,
      title_en: form.value.titleEn,
      cat_fr: form.value.catFr,
      cat_en: form.value.catEn,
      author: form.value.author,
      excerpt_fr: form.value.excerptFr,
      excerpt_en: form.value.excerptEn,
      body_fr: form.value.bodyFr,
      body_en: form.value.bodyEn,
      img_url: uploadedUrls.img || form.value.img, // Use new upload or keep existing
      img_mid_url: uploadedUrls.imgMid || form.value.imgMid || null, // Use new upload or keep existing
      date: form.value.date,
      read_time: parseInt(form.value.readTime),
      tags: form.value.tagsString ? form.value.tagsString.split(',').map(tag => tag.trim()) : [],
    }

    if (editingPost.value) {
      const { error } = await getSupabase()
        .from('blog_posts')
        .update(postData)
        .eq('id', editingPost.value.id)

      if (error) throw error
    } else {
      const { error } = await getSupabase()
        .from('blog_posts')
        .insert([postData])

      if (error) throw error
    }

    await fetchPosts()
    closeModal()
  } catch (error) {
    console.error('Error saving post:', error)
    alert(lang.value === 'fr' ? 'Erreur lors de la sauvegarde' : 'Error saving post')
  } finally {
    saving.value = false
  }
}

async function deletePost(post) {
  if (!confirm(lang.value === 'fr' ? 'Êtes-vous sûr de vouloir supprimer cet article ?' : 'Are you sure you want to delete this post?')) {
    return
  }

  try {
    const { error } = await getSupabase()
      .from('blog_posts')
      .delete()
      .eq('id', post.id)

    if (error) throw error

    await fetchPosts()
  } catch (error) {
    console.error('Error deleting post:', error)
    alert(lang.value === 'fr' ? 'Erreur lors de la suppression' : 'Error deleting post')
  }
}

function closeModal() {
  showCreateModal.value = false
  editingPost.value = null
  resetForm()
  if (imgMainInput.value) imgMainInput.value.value = ''
  if (imgMidInput.value) imgMidInput.value.value = ''
}

async function handleImageUpload(field, event) {
  const file = event.target.files?.[0]
  if (!file) return

  // Store the file for later upload
  if (field === 'img') {
    form.value.imgFile = file
  } else if (field === 'imgMid') {
    form.value.imgMidFile = file
  }

  // Create preview
  const reader = new FileReader()
  reader.onload = (e) => {
    if (field === 'img') {
      form.value.imgPreview = e.target.result
    } else if (field === 'imgMid') {
      form.value.imgMidPreview = e.target.result
    }
  }
  reader.readAsDataURL(file)
}

async function uploadImages() {
  uploadingImages.value = true
  const uploadedUrls = { img: '', imgMid: '' }

  try {
    // Upload main image if a new file was selected
    if (form.value.imgFile) {
      const mainUrl = await uploadImageToStorage(form.value.imgFile, 'main')
      uploadedUrls.img = mainUrl
    }

    // Upload middle image if a new file was selected
    if (form.value.imgMidFile) {
      const midUrl = await uploadImageToStorage(form.value.imgMidFile, 'mid')
      uploadedUrls.imgMid = midUrl
    }

    return uploadedUrls
  } finally {
    uploadingImages.value = false
  }
}

async function uploadImageToStorage(file, type) {
  const timestamp = Date.now()
  const randomId = Math.random().toString(36).substring(7)
  const fileExt = file.name.split('.').pop()
  const fileName = `${editingPost.value?.id || 'new'}-${type}-${timestamp}-${randomId}.${fileExt}`

  // Upload to Supabase Storage
  const { data, error } = await getSupabase().storage
    .from('blog-images')
    .upload(`posts/${fileName}`, file, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error) throw error

  // Get public URL
  const { data: publicData } = getSupabase().storage
    .from('blog-images')
    .getPublicUrl(`posts/${fileName}`)

  return publicData.publicUrl
}

async function handleLogout() {
  await signOut()
  emit('navigate', 'home')
}
</script>