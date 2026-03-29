<template>
  <section id="contact" class="bg-navy-mist py-28">
    <div class="max-w-[1280px] mx-auto px-8">

      <!-- Header -->
      <div class="reveal mb-16">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
          <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ t('conEye') }}</span>
        </div>
        <div class="flex flex-wrap items-end justify-between gap-6">
          <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size:clamp(2.2rem,3.5vw,3rem)">
            {{ t('conTitle') }}
          </h2>
          <p class="text-navy/55 font-body font-light text-sm leading-relaxed max-w-[380px]">{{ t('conSub') }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-16">

        <!-- Info -->
        <div class="reveal-left flex flex-col gap-6">
          <div v-for="item in contactItems" :key="item.key" class="flex items-start gap-4">
            <div class="w-11 h-11 rounded-xl bg-navy flex items-center justify-center text-base flex-shrink-0">
              {{ item.ico }}
            </div>
            <div>
              <p class="text-red font-body font-semibold text-[.6rem] tracking-[2px] uppercase mb-1">{{ t(item.key) }}
              </p>
              <p class="text-navy/65 font-body text-sm leading-[1.7]" style="white-space:pre-line">{{ t(item.val) }}</p>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="mt-2 h-36 rounded-2xl bg-navy relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 grid-lines opacity-60"></div>
            <div class="relative z-10 text-center">
              <div class="text-3xl mb-2">📍</div>
              <p class="text-white/50 font-body text-xs">Kinshasa, RDC</p>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="reveal-right">
          <div class="bg-white rounded-2xl p-8 shadow-navy-sm flex flex-col gap-5">

            <!-- Name row -->
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label class="text-navy font-body font-semibold text-[.62rem] tracking-[2px] uppercase">{{ t('fFirst')
                  }}</label>
                <input type="text" :placeholder="t('fFirstPh')" v-model="form.first"
                  class="form-input px-4 py-3 border-[1.5px] border-navy/12 rounded-xl bg-snow font-body text-sm text-navy outline-none transition-all duration-200" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="text-navy font-body font-semibold text-[.62rem] tracking-[2px] uppercase">{{ t('fLast')
                  }}</label>
                <input type="text" :placeholder="t('fLastPh')" v-model="form.last"
                  class="form-input px-4 py-3 border-[1.5px] border-navy/12 rounded-xl bg-snow font-body text-sm text-navy outline-none transition-all duration-200" />
              </div>
            </div>

            <!-- Email -->
            <div class="flex flex-col gap-1.5">
              <label class="text-navy font-body font-semibold text-[.62rem] tracking-[2px] uppercase">{{ t('fEmail')
                }}</label>
              <input type="email" :placeholder="t('fEmailPh')" v-model="form.email"
                class="form-input px-4 py-3 border-[1.5px] border-navy/12 rounded-xl bg-snow font-body text-sm text-navy outline-none transition-all duration-200" />
            </div>

            <!-- Subject -->
            <div class="flex flex-col gap-1.5">
              <label class="text-navy font-body font-semibold text-[.62rem] tracking-[2px] uppercase">{{ t('fSubj')
                }}</label>
              <select v-model="form.subj"
                class="form-input px-4 py-3 border-[1.5px] border-navy/12 rounded-xl bg-snow font-body text-sm text-navy outline-none transition-all duration-200">
                <option v-for="opt in t('fOpts')" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-1.5">
              <label class="text-navy font-body font-semibold text-[.62rem] tracking-[2px] uppercase">{{ t('fMsg')
                }}</label>
              <textarea :placeholder="t('fMsgPh')" v-model="form.msg" rows="4"
                class="form-input px-4 py-3 border-[1.5px] border-navy/12 rounded-xl bg-snow font-body text-sm text-navy outline-none transition-all duration-200 resize-y"></textarea>
            </div>

            <!-- Submit -->
            <button @click="send"
              class="w-full bg-navy hover:bg-navy-light text-white font-body font-semibold text-sm tracking-wide py-4 rounded-xl border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-navy-lg flex items-center justify-center gap-2">
              {{ t('fSend') }}
              <span
                class="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center text-[.6rem]">→</span>
            </button>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'

const { lang, t } = useTranslations()

const form = ref({ first: '', last: '', email: '', subj: '', msg: '' })

const contactItems = [
  { key: 'ciAddr', val: 'ciAddrV', ico: '📍' },
  { key: 'ciPhone', val: 'ciPhoneV', ico: '📞' },
  { key: 'ciEmail', val: 'ciEmailV', ico: '✉️' },
  { key: 'ciHours', val: 'ciHoursV', ico: '🕐' },
]

function send() {
  if (form.value.first && form.value.email && form.value.msg) {
    alert(lang.value === 'fr' ? 'Merci ! Nous vous répondrons sous 48h.' : "Thank you! We'll reply within 48 hours.")
    form.value = { first: '', last: '', email: '', subj: '', msg: '' }
  } else {
    alert(lang.value === 'fr' ? 'Veuillez remplir tous les champs requis.' : 'Please fill in all required fields.')
  }
}
</script>
