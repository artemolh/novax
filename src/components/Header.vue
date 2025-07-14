<template>
  <header class="w-full bg-white overflow-hidden rounded-[10px] sticky top-0 z-50 pr-0">
    <div class="w-full header-container flex items-center justify-between">

      <!-- ЛОГО + НАВИГАЦИЯ -->
      <div class="flex items-center gap-6 xl:gap-10 2xl:gap-12">
        <div class="flex items-center gap-2 xl:gap-3 2xl:gap-4">
          <img src="../components/HeaderImage/headerIcon.svg" alt="boostim logo"
            class="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[70px] 2xl:h-[70px]" />
          <span class="font-medium text-[22px] xl:text-[24px] 2xl:text-[26px] text-black">
            boostim
          </span>
        </div>

        <nav
          class="hidden md:flex gap-6 xl:gap-8 2xl:gap-10 text-[16px] xl:text-[18px] 2xl:text-[20px] mb-0 font-medium text-black">
          <a href="/" class="hover:opacity-80 transition text-black">{{ t('header.about') }}</a>
          <a href="#process" class="hover:opacity-80 transition text-black">{{ t('header.structure') }}</a>
          <a href="#team" class="hover:opacity-80 transition text-black">{{ t('header.team') }}</a>
          <a href="#pricing" class="hover:opacity-80 transition text-black">{{ t('header.pricing') }}</a>
        </nav>
      </div>

      <!-- КНОПКИ -->
      <div class="flex items-center gap-3 ml-auto pr-6 button-group">
        <button
          class="hidden md:block border border-[#C0C0C0] rounded-full px-6 h-[50px] text-sm font-medium hover:bg-[#F5F5F5] transition"
          style="color: #878C91;">
          {{ t('header.contact') }}
        </button>

        <div class="flex items-center border border-[#C0C0C0] rounded-full h-[50px] overflow-hidden">
          <button class="h-full px-5 text-sm font-medium transition cursor-pointer rounded-full"
            :class="locale === 'ru' ? 'bg-[#99EA48] text-white' : 'bg-transparent text-[#878C91]'"
            @click="changeLang('ru')">
            RU
          </button>
          <button class="h-full px-5 text-sm font-medium transition cursor-pointer rounded-full"
            :class="locale === 'uz' ? 'bg-[#99EA48] text-white' : 'bg-transparent text-[#878C91]'"
            @click="changeLang('uz')">
            UZ
          </button>
        </div>

        <button class="md:hidden ml-2 burger-menu" @click="menuOpen = !menuOpen">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="#181A1B" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const menuOpen = ref(false)
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



<style scoped>
.header-container {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 1280px) {
  .header-container {
    height: 100px;
  }
}

@media (min-width: 1536px) {
  .header-container {
    height: 110px;
  }
}

@media (min-width: 1024px) {
  header {
    padding-right: 1rem !important;

  }
}

@media (max-width: 900px) and (min-width: 758px) {
  nav {
    display: none !important;
  }

  .button-group {
    margin-left: auto;
    margin-right: 0;
    justify-content: flex-end;
  }

  .burger-menu {
    display: none !important;
  }
}

@media (max-width: 767px) {
  .button-group {
    margin-left: auto;
    margin-right: 0;
  }

  /* Скрываем бургер только на мобилке */
  .burger-menu {
    display: none !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
