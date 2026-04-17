// composables/useBlogPosts.js
import { ref, readonly } from 'vue'
import { createClient } from '@supabase/supabase-js'

let supabase = null

function getSupabase() {
  if (!supabase) {
    const url = import.meta.env.VITE_SUPABASE_URL
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY

    if (!url || !key) {
      console.error('Supabase environment variables are missing:', { url: !!url, key: !!key })
      throw new Error('Supabase configuration is missing. Check .env file.')
    }

    supabase = createClient(url, key)
  }
  return supabase
}

export function useBlogPosts() {
  const posts = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchPosts() {
    loading.value = true
    const { data, error: err } = await getSupabase()
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
    loading.value = false
    if (err) { error.value = err.message; return }
    posts.value = data.map(normalise)
  }

  async function fetchPost(id) {
    const { data, error: err } = await getSupabase()
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()
    if (err) { error.value = err.message; return null }
    return normalise(data)
  }

  // Maps snake_case DB columns back to the camelCase shape your components expect
  function normalise(p) {
    return {
      id: p.id,
      img: p.img_url,
      imgTop: p.img_top_url,
      imgMid: p.img_mid_url,
      category: p.category,
      date: p.date,
      readTime: p.read_time,
      author: p.author,
      role: p.role,
      catFr: p.cat_fr,
      catEn: p.cat_en,
      titleFr: p.title_fr,
      titleEn: p.title_en,
      excerptFr: p.excerpt_fr,
      excerptEn: p.excerpt_en,
      bodyFr: p.body_fr,
      bodyEn: p.body_en,
      tags: p.tags ?? [],
    }
  }

  return { posts: readonly(posts), loading, error, fetchPosts, fetchPost }
}