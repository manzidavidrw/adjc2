import { ref, readonly, computed } from 'vue'
import { createClient } from '@supabase/supabase-js'

let supabase = null
let authListenerSetup = false

function getSupabase() {
  if (!supabase) {
    supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    )
  }
  return supabase
}

export function useAuth() {
  const user = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Set up auth listener once on first composable usage
  if (!authListenerSetup) {
    authListenerSetup = true
    getSupabase().auth.onAuthStateChange((event, session) => {
      user.value = session?.user ?? null
    })
  }

  async function signIn(email, password) {
    loading.value = true
    error.value = null

    try {
      const { data, error: err } = await getSupabase().auth.signInWithPassword({
        email,
        password,
      })

      if (err) {
        error.value = err.message
        return false
      }

      user.value = data.user
      return true
    } catch (err) {
      error.value = err.message
      return false
    } finally {
      loading.value = false
    }
  }

  async function signOut() {
    loading.value = true
    error.value = null

    try {
      const { error: err } = await getSupabase().auth.signOut()
      if (err) {
        error.value = err.message
        return false
      }

      user.value = null
      return true
    } catch (err) {
      error.value = err.message
      return false
    } finally {
      loading.value = false
    }
  }

  async function checkAuth() {
    loading.value = true
    try {
      const { data: { user: currentUser } } = await getSupabase().auth.getUser()
      user.value = currentUser
    } catch (err) {
      user.value = null
    } finally {
      loading.value = false
    }
  }

  // Listen for auth state changes
  // (already set up in the main composable initialization above)

  return {
    user: readonly(user),
    loading: readonly(loading),
    error: readonly(error),
    signIn,
    signOut,
    checkAuth,
    isAuthenticated: computed(() => !!user.value),
  }
}