<template>
  <section class="w-full my-8 mt-0">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- Одностраничный сайт -->
      <div class="bg-white rounded-xl shadow p-6 flex flex-col gap-3">
        <div class="flex items-center gap-2 ml-[12px]">
          <span class="w-3 h-3 rounded-full inline-block" style="background-color: #3BC07C;"></span>
          <span class="text-xs" style="color: #878C91;">{{ t('main_block2.AndPictureText') }}</span>
        </div>

        <div class="ml-[12px]">
          <h3 class="font-medium text-[20px] mt-5 mb-1"> {{ t('main_block2.AndPictureh1') }}</h3>
          <p class="text-[15px] text-[#878C91] mt-4 mb-4 w-full">
            {{ t('main_block2.AndPictureText2') }} <br /> {{ t('main_block2.AndPictureText3') }}
          </p>
        </div>

        <button
          class="ml-auto mt-auto h-9 px-4 flex items-center justify-center rounded-full bg-black hover:opacity-90 transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <!-- Корпоративный сайт -->
      <div class="bg-white rounded-xl shadow p-6 flex flex-col gap-3">
        <div class="flex items-center gap-2 ml-[12px]">
          <span class="w-3 h-3 rounded-full inline-block" style="background-color: #06969E;"></span>
          <span class="text-xs" style="color: #878C91;">{{ t('main_block2.AndPictureText_block2') }}</span>
        </div>

        <div class="ml-[12px]">
          <h3 class="font-medium text-[20px] mt-5 mb-1">{{ t('main_block2.AndPictureh2') }}</h3>
          <p class="text-[15px] text-[#878C91] mt-4 mb-4 w-full">
            {{ t('main_block2.AndPictureText4') }}
          </p>

        </div>

        <button
          class="ml-auto mt-auto h-9 px-4 flex items-center justify-center rounded-full bg-black hover:opacity-90 transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>


      <!-- Интернет-магазин -->
      <div class="bg-white rounded-xl shadow p-6 flex flex-col gap-3">
        <div class="flex items-center gap-2 ml-[12px]">
          <span class="w-3 h-3 rounded-full inline-block" style="background-color: #7446BB;"></span>
          <span class="text-xs" style="color: #878C91;">{{ t('main_block2.AndPictureText_block3') }}</span>
        </div>

        <div class="ml-[12px]">
          <h3 class="font-medium text-[20px] mt-5 mb-1">{{ t('main_block2.AndPictureh3') }}</h3>
          <p class="text-[15px] text-[#878C91] mt-4 mb-4 w-full">
            {{ t('main_block2.AndPictureText5') }}
          </p>
        </div>

        <button
          class="ml-auto mt-auto h-9 px-4 flex items-center justify-center rounded-full bg-black hover:opacity-90 transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
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
<style></style>
