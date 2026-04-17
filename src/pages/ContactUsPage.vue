<template>
  <div class="contact-page">
    <!-- ═══ HERO ═══ -->
    <section class="relative bg-navy-dark min-h-[50vh] flex items-end overflow-hidden pt-[104px]">
      <div class="absolute inset-0 bg-hero-mesh"></div>
      <div class="absolute inset-0 grid-lines"></div>
      <div class="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-red"></div>

      <div class="relative max-w-[860px] mx-auto px-8 pb-14 w-full">
        <div class="flex items-center gap-2 mb-6">
          <button @click="$emit('navigate', 'home')"
            class="text-white/35 font-body text-xs hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer">
            {{ lang === 'fr' ? 'Accueil' : 'Home' }}
          </button>
          <span class="text-white/20 text-xs">›</span>
          <span class="text-red font-body text-xs font-semibold">
            {{ lang === 'fr' ? 'Nous Contacter' : 'Contact Us' }}
          </span>
        </div>

        <h1 class="font-display font-bold text-white leading-[1.08]" style="font-size:clamp(1.8rem,4vw,3rem)">
          {{ t('conTitle') }}
        </h1>

        <p class="text-white/60 font-body font-light leading-[1.8] mt-6 max-w-[560px]">
          {{ t('conSub') }}
        </p>
      </div>
    </section>

    <!-- ═══ CONTENT ═══ -->
    <section class="bg-white py-20">
      <div class="max-w-[860px] mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div>
            <h2 class="font-display font-bold text-navy text-2xl mb-8">
              {{ lang === 'fr' ? 'Informations de Contact' : 'Contact Information' }}
            </h2>

            <div class="space-y-8">
              <!-- Address -->
              <!-- Address (Branches) -->
              <div class="space-y-6">

                <!-- Bukavu -->
                <div class="flex gap-4 p-5 border border-navy/10 rounded-2xl bg-navy/[.02]">
                  <div class="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span class="text-red text-xl">📍</span>
                  </div>

                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <h3 class="font-body font-semibold text-navy text-lg">
                        Bukavu
                      </h3>
                      <span class="text-[10px] bg-red text-white px-2 py-0.5 rounded-full font-semibold tracking-wide">
                        {{ lang === 'fr' ? 'Siège' : 'Head Office' }}
                      </span>
                    </div>

                    <p class="text-navy/60 font-body text-sm leading-relaxed whitespace-pre-line">
                      RDC Kinshasa SUD-KIVU Bukavu,40BAv.de la montagneQ.
                      Nyalukemba, Comm. d'Ibanda,
                      Ville de Bukavu

                    </p>
                  </div>
                </div>

                <!-- Goma -->
                <div class="flex gap-4 p-5 border border-navy/10 rounded-2xl bg-navy/[.02]">
                  <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span class="text-green-600 text-xl">📍</span>
                  </div>

                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <h3 class="font-body font-semibold text-navy text-lg">
                        Goma
                      </h3>
                      <span
                        class="text-[10px] bg-green-600 text-white px-2 py-0.5 rounded-full font-semibold tracking-wide">
                        {{ lang === 'fr' ? 'Agence' : 'Branch' }}
                      </span>
                    </div>

                    <p class="text-navy/60 font-body text-sm leading-relaxed whitespace-pre-line">
                      RDC Kinshasa NORD-KIVU Goma, Centre-Ville Ville de Goma,
                      Com de Goma,
                      Q.Mikeno Av. Kitona : No 11
                    </p>
                  </div>
                </div>

              </div>

              <!-- Phone -->
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-red text-xl">📞</span>
                </div>
                <div>
                  <h3 class="font-body font-semibold text-navy text-lg mb-2">{{ t('ciPhone') }}</h3>
                  <p class="text-navy/60 font-body text-sm leading-relaxed whitespace-pre-line">{{ t('ciPhoneV') }}</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-red text-xl">✉️</span>
                </div>
                <div>
                  <h3 class="font-body font-semibold text-navy text-lg mb-2">{{ t('ciEmail') }}</h3>
                  <p class="text-navy/60 font-body text-sm leading-relaxed whitespace-pre-line">{{ t('ciEmailV') }}</p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-red text-xl">🕒</span>
                </div>
                <div>
                  <h3 class="font-body font-semibold text-navy text-lg mb-2">{{ t('ciHours') }}</h3>
                  <p class="text-navy/60 font-body text-sm leading-relaxed whitespace-pre-line">{{ t('ciHoursV') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="font-display font-bold text-navy text-2xl mb-8">
              {{ lang === 'fr' ? 'Envoyez-nous un Message' : 'Send Us a Message' }}
            </h2>

            <form class="space-y-6">
              <!-- Name -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-body font-semibold text-navy text-sm mb-2">{{ t('fFirst') }}</label>
                  <input type="text" :placeholder="t('fFirstPh')"
                    class="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-sm focus:border-red focus:outline-none transition-colors" />
                </div>
                <div>
                  <label class="block font-body font-semibold text-navy text-sm mb-2">{{ t('fLast') }}</label>
                  <input type="text" :placeholder="t('fLastPh')"
                    class="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-sm focus:border-red focus:outline-none transition-colors" />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="block font-body font-semibold text-navy text-sm mb-2">{{ t('fEmail') }}</label>
                <input type="email" :placeholder="t('fEmailPh')"
                  class="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-sm focus:border-red focus:outline-none transition-colors" />
              </div>

              <!-- Subject -->
              <div>
                <label class="block font-body font-semibold text-navy text-sm mb-2">{{ t('fSubj') }}</label>
                <select
                  class="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-sm focus:border-red focus:outline-none transition-colors bg-white">
                  <option v-for="opt in t('fOpts')" :key="opt">{{ opt }}</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="block font-body font-semibold text-navy text-sm mb-2">{{ t('fMsg') }}</label>
                <textarea :placeholder="t('fMsgPh')" rows="6"
                  class="w-full px-4 py-3 border border-navy/20 rounded-xl font-body text-sm focus:border-red focus:outline-none transition-colors resize-vertical"></textarea>
              </div>

              <!-- Submit -->
              <button type="submit"
                class="w-full bg-red hover:bg-red-dark text-white font-body font-semibold text-base py-4 rounded-xl border-none cursor-pointer transition-colors duration-200">
                {{ t('fSend') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useTranslations } from '../composables/useTranslations.js'

const { lang, t } = useTranslations()

defineEmits(['navigate'])
</script>