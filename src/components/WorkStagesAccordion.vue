<template>
  <div id="process"></div>
  <section class="w-full bg-white py-12 px-10 md:px-10 mt-20 rounded-3xl p-0">
    <div class="flex flex-col lg:flex-row gap-12 items-stretch">
      <!-- Левая колонка -->
      <div class="w-full lg:w-1/2 flex flex-col justify-start pt-4">
        <h2 class="font-medium text-[35px] leading-tight max-w-[340px] mb-4">
          {{ t('process.title') }}
        </h2>
        <p class="text-sm text-[#878C91] mb-6 mt-10 lg:mt-40 ml-0 leading-relaxed">
          {{ t('process.description') }}
        </p>
        <button
          class="bg-[#F5F5F5] text-[#878C91] hover:bg-[rgba(153,234,72,0.3)] border border-[#878C91] rounded-full px-6 py-2 mt-10 text-base font-medium w-max">
          {{ t('process.button') }}
        </button>
      </div>

      <!-- Правая колонка -->
      <div class="w-full md:w-1/2 pt-3">
        <ul>
          <li
            v-for="(stage, idx) in stages"
            :key="stage.title"
            class="border-t border-b border-gray-200 text-left transition-all"
          >
            <div @click="toggle(idx)" class="flex items-start justify-between cursor-pointer py-4 group">
              <div>
                <p class="text-[17px] leading-none font-medium text-[#99EA48] mb-1">
                  {{ stage.num }}
                </p>
                <p class="text-[17px] font-medium text-black  transition leading-snug">
                  {{ stage.title }}
                </p>
              </div>
              <span class="ml-2 mt-2 text-xl font-medium text-black">
                {{ openIdx === idx ? '−' : '+' }}
              </span>
            </div>
            <div
              v-if="openIdx === idx"
              class="pb-5 pr-4 text-[15px] text-[#9CA3AF] animate-fade-in leading-relaxed"
            >
              {{ stage.desc }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t, getLocaleMessage } = useI18n()

const openIdx = ref(0)
const toggle = (idx) => {
  openIdx.value = openIdx.value === idx ? -1 : idx
}

const stages = computed(() => {
  const messages = getLocaleMessage(locale.value)
  return messages?.process?.stages || []
})

// Автоустановка lang на <html>
watch(locale, (lang) => {
  document.documentElement.setAttribute('lang', lang)
}, { immediate: true })

const savedLang = localStorage.getItem('lang')
if (savedLang && savedLang !== locale.value) {
  locale.value = savedLang
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}
</style>
