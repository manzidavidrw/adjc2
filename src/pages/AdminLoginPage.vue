<template>
  <div class="admin-login-page min-h-screen bg-navy-dark flex items-center justify-center px-4">
    <div class="max-w-md w-full">

      <!-- Header -->
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-red rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h1 class="font-display font-bold text-white text-3xl mb-2">
          {{ lang === 'fr' ? 'Connexion Admin' : 'Admin Login' }}
        </h1>
        <p class="text-white/60 font-body text-sm">
          {{ lang === 'fr' ? 'Accédez au panneau d\'administration' : 'Access the admin panel' }}
        </p>
      </div>

      <!-- Login Form -->
      <div class="bg-white rounded-2xl p-8 shadow-2xl">
        <form @submit.prevent="handleLogin" class="space-y-6">

          <!-- Email -->
          <div>
            <label class="block text-navy font-body font-semibold text-sm mb-2">
              {{ lang === 'fr' ? 'Email' : 'Email' }}
            </label>
            <input v-model="email" type="email" required
              class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy placeholder-navy/40 outline-none focus:border-red/50 transition-colors duration-200"
              :placeholder="lang === 'fr' ? 'admin@adjcongo.org' : 'admin@adjcongo.org'" />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-navy font-body font-semibold text-sm mb-2">
              {{ lang === 'fr' ? 'Mot de passe' : 'Password' }}
            </label>
            <input v-model="password" type="password" required
              class="w-full bg-navy/[.04] border border-navy/[.08] rounded-xl px-4 py-3 font-body text-navy placeholder-navy/40 outline-none focus:border-red/50 transition-colors duration-200"
              :placeholder="lang === 'fr' ? '••••••••' : '••••••••'" />
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red/10 border border-red/20 rounded-xl p-3">
            <p class="text-red font-body text-sm">{{ error }}</p>
          </div>

          <!-- Submit Button -->
          <button type="submit" :disabled="loading"
            class="w-full bg-red hover:bg-red-dark disabled:bg-red/50 text-white font-body font-semibold text-sm py-3 rounded-xl border-none cursor-pointer transition-all duration-200 disabled:cursor-not-allowed">
            <span v-if="loading" class="flex items-center justify-center gap-2">
              <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              {{ lang === 'fr' ? 'Connexion...' : 'Signing in...' }}
            </span>
            <span v-else>
              {{ lang === 'fr' ? 'Se connecter' : 'Sign In' }}
            </span>
          </button>
        </form>

        <!-- Back to Home -->
        <div class="mt-6 text-center">
          <button @click="$emit('navigate', 'home')"
            class="text-navy/60 hover:text-navy font-body text-sm border-none bg-transparent cursor-pointer transition-colors duration-200">
            ← {{ lang === 'fr' ? 'Retour à l\'accueil' : 'Back to Home' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'
import { useAuth } from '../composables/useAuth.js'

const emit = defineEmits(['navigate'])
const { lang } = useTranslations()
const { signIn, loading, error } = useAuth()

const email = ref('')
const password = ref('')

async function handleLogin() {
  const success = await signIn(email.value, password.value)
  if (success) {
    // Give auth state a moment to propagate
    await new Promise(resolve => setTimeout(resolve, 500))
    emit('navigate', 'admin-panel')
  }
}
</script>