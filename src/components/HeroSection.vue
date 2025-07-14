<template>
  <section
    class="w-full bg-black rounded-2xl mt-5 mb-8 px-4 sm:px-6 md:px-10 py-10 shadow-lg bg-cover bg-no-repeat bg-left overflow-hidden"
    style="background-image: url('/Frame427321785.svg');">

    <div
      class="max-w-[1180px] xl:max-w-[1380px] 2xl:max-w-[1600px] [@media(min-width:1800px)]:max-w-[1730px] mx-auto relative h-full flex items-stretch">

      <!-- Текст по центру слева -->
      <div class="flex-1 flex items-center">
        <div class="z-10">
          <h1
            class="text-2xl sm:text-3xl md:text-5xl xl:text-[50px] 2xl:text-[52px] [@media(min-width:1800px)]:text-[58px] font-medium text-white leading-tight max-w-[90%] sm:max-w-[100%]">
           {{ t('main.BigPictureText1') }}<br />
            <span class="text-[#A5FF73]">{{ t('main.BigPictureText2') }}</span><br />
            {{ t('main.BigPictureText3') }}
          </h1>
        </div>
      </div>

      <!-- Столбики прижаты к низу справа -->
      <div
        class="flex items-end gap-[6px] z-10 pr-2 sm:pr-4 md:pr-6 translate-y-6 sm:translate-y-8 md:translate-y-10 xl:translate-y-12 2xl:translate-y-14 [@media(min-width:1800px)]:translate-y-16">

        <div
          class="bg-[#C5FF97] w-[36px] sm:w-[46px] md:w-[56px] xl:w-[60px] 2xl:w-[66px] [@media(min-width:1800px)]:w-[72px] h-[120px] sm:h-[140px] md:h-[160px] xl:h-[180px] 2xl:h-[200px] [@media(min-width:1800px)]:h-[220px]">
        </div>
        <div
          class="bg-[#B0FF6D] w-[36px] sm:w-[46px] md:w-[56px] xl:w-[60px] 2xl:w-[66px] [@media(min-width:1800px)]:w-[72px] h-[160px] sm:h-[180px] md:h-[200px] xl:h-[220px] 2xl:h-[240px] [@media(min-width:1800px)]:h-[260px]">
        </div>
        <div
          class="bg-[#96EF4E] w-[36px] sm:w-[46px] md:w-[56px] xl:w-[60px] 2xl:w-[66px] [@media(min-width:1800px)]:w-[72px] h-[220px] sm:h-[240px] md:h-[260px] xl:h-[280px] 2xl:h-[300px] [@media(min-width:1800px)]:h-[320px]">
        </div>
      </div>

    </div>
  </section>
</template>


<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const changeLang = (lang) => {
  locale.value = lang
  document.documentElement.setAttribute('lang', lang)
  localStorage.setItem('lang', lang)
}

// при старте — подхватываем язык из localStorage
watch(locale, (lang) => {
  document.documentElement.setAttribute('lang', lang)
}, { immediate: true })

const savedLang = localStorage.getItem('lang')
if (savedLang && savedLang !== locale.value) {
  locale.value = savedLang
}
</script>