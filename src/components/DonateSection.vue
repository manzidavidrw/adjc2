<template>
  <section id="donate" class="bg-white py-28">
    <div class="max-w-[1280px] mx-auto px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        <!-- Left: impact card -->
        <div class="reveal-left">
          <!-- Big red card -->
          <div class="bg-red rounded-2xl p-10 relative overflow-hidden">
            <!-- decorative circles -->
            <div class="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-white/[.06]"></div>
            <div class="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/[.04]"></div>
            <div class="relative z-10">
              <p class="text-white/55 font-body text-[.62rem] tracking-[3px] uppercase mb-3">{{ t('donEye') }}</p>
              <h3 class="font-display font-bold text-white leading-[1.1] mb-4" style="font-size:2.4rem">{{ t('donTitle') }}</h3>
              <p class="text-white/60 font-body text-sm leading-[1.8] mb-8">{{ t('donSub') }}</p>

              <!-- Impact rows -->
              <div class="flex flex-col gap-3">
                <div
                  v-for="row in t('donImpact')" :key="row.amt"
                  class="flex items-center gap-4 bg-white/[.1] rounded-xl px-5 py-3.5"
                >
                  <span class="font-display font-bold text-white text-lg leading-none w-14 flex-shrink-0">{{ row.amt }}</span>
                  <span class="text-white/75 font-body text-xs leading-snug">{{ row.txt }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: form -->
        <div class="reveal-right flex flex-col gap-6">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="w-7 h-[2px] bg-red flex-shrink-0"></span>
              <span class="text-red font-body text-[.65rem] font-semibold tracking-[3px] uppercase">{{ t('donEye') }}</span>
            </div>
            <h2 class="font-display font-bold text-navy leading-[1.1]" style="font-size:clamp(2rem,3vw,2.6rem)">
              {{ t('donTitle') }}
            </h2>
          </div>

          <!-- Amount selector -->
          <div>
            <label class="block text-navy font-body font-semibold text-[.65rem] tracking-[2px] uppercase mb-3">
              {{ t('donAmounts')[0] ? 'Montant / Amount' : '' }}
            </label>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="amt in t('donAmounts')" :key="amt"
                @click="selected = amt"
                :class="['amt-btn border-[1.5px] rounded-xl py-3 font-body font-semibold text-sm text-navy cursor-pointer border-navy/15 bg-transparent',
                         selected === amt ? 'active' : '']"
              >{{ amt }}</button>
            </div>
          </div>

          <!-- Name -->
          <div class="flex flex-col gap-1.5">
            <label class="text-navy font-body font-semibold text-[.65rem] tracking-[2px] uppercase">{{ t('donName') }}</label>
            <input
              type="text" :placeholder="t('donNamePh')"
              class="form-input w-full px-4 py-3.5 border-[1.5px] border-navy/15 rounded-xl bg-snow font-body text-sm text-navy outline-none transition-all duration-200"
            />
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1.5">
            <label class="text-navy font-body font-semibold text-[.65rem] tracking-[2px] uppercase">{{ t('donEmail') }}</label>
            <input
              type="email" :placeholder="t('donEmailPh')"
              class="form-input w-full px-4 py-3.5 border-[1.5px] border-navy/15 rounded-xl bg-snow font-body text-sm text-navy outline-none transition-all duration-200"
            />
          </div>

          <!-- Submit -->
          <button class="w-full bg-red hover:bg-red-dark text-white font-body font-semibold text-sm tracking-wide py-4 rounded-xl border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-red-lg">
            {{ t('donBtn') }} →
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useTranslations } from '../composables/useTranslations.js'

const { t } = useTranslations()
const selected = ref('$25')
</script>
