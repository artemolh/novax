<template>
  <footer class="w-full bg-[#fff] overflow-hidden rounded-[20px] mt-16">
    <div class="bg-white px-[40px] py-[40px]">

      <!-- Мобильный баннер -->
      <div class="mobile-banner md:hidden">
        <h2>
          {{ $t('footer.banner_title') }} <br />
          <span class="text-[#99EA48]">{{ $t('footer.banner_highlight') }}</span><br />
          {{ $t('footer.banner_suffix') }}
        </h2>
        <button class="cta-button mt-4">{{ $t('footer.brief_button') }}</button>
      </div>

      <!-- Мобильный футер -->
      <div class="mobile-footer md:hidden text-center mt-8">
        <div class="flex justify-center items-center gap-2 mb-4">
          <img src="./HeaderImage/headerIcon.svg" alt="logo" class="h-9 w-9" />
          <span class="font-bold text-[22px] text-black">boostim</span>
        </div>
        <p class="text-sm text-[#878C91] px-4 leading-relaxed">
          {{ $t('footer.description') }}
        </p>
        <div class="text-xs text-[#A0A3A7] mt-6 mb-4">
          {{ $t('footer.copyright') }}
        </div>
      </div>

      <!-- Десктопная версия -->
      <div class="desktop-footer hidden md:block">
        <!-- Баннер -->
        <div class="bg-[#0B0F19] text-white rounded-[15px] p-10 md:p-16 relative overflow-hidden h-[300px]">
          <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('Frame427321785.svg');"></div>
          <h2 class="relative z-10 text-3xl md:text-4xl font-bold leading-tight">
            {{ $t('footer.banner_title') }} <br />
            <span class="text-[#99EA48]">{{ $t('footer.banner_highlight') }}</span><br />
            {{ $t('footer.banner_suffix') }}
            <span class="inline-block ml-2 align-middle border border-white rounded-full px-3 py-1 text-base">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="white" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
          </h2>
        </div>

        <!-- Футер -->
        <div class="pb-4 flex flex-col md:flex-row md:justify-between md:items-start gap-10 mt-10">
          <!-- Логотип и описание -->
          <div class="flex-[2] min-w-[250px]">
            <div class="flex gap-3">
              <img src="./HeaderImage/headerIcon.svg" alt="boostim logo" class="h-9 w-9" />
              <span class="font-bold text-xl tracking-tight text-black">boostim</span>
            </div>
            <p class="text-sm text-[#878C91] mt-10 leading-relaxed max-w-[360px]">
              {{ $t('footer.description') }}
            </p>
            <div class="text-xs text-[#A0A3A7] mt-10">
              {{ $t('footer.copyright') }}
            </div>
          </div>

          <!-- Навигация -->
          <div class="flex-[1.2] min-w-[140px] ml-4">
            <div class="font-semibold text-[18px] text-black">
              {{ $t('footer.nav_title') }}
            </div>
            <ul class="text-sm text-[#878C91] space-y-2 mt-10">
              <li><a class="text-[#878C91]" href="#about">{{ $t('footer.nav_about') }}</a></li>
              <li><a class="text-[#878C91]" href="#process">{{ $t('footer.nav_process') }}</a></li>
              <li><a class="text-[#878C91]" href="#team">{{ $t('footer.nav_team') }}</a></li>
              <li><a class="text-[#878C91]" href="#pricing">{{ $t('footer.nav_pricing') }}</a></li>
            </ul>
          </div>

          <!-- Услуги -->
          <div class="flex-[1.2] min-w-[140px]">
            <div class="font-semibold text-[18px] text-black">
              {{ $t('footer.services_title') }}
            </div>
            <ul class="text-sm text-[#878C91] space-y-2 mt-10">
              <li>{{ $t('footer.service_one') }}</li>
              <li>{{ $t('footer.service_corp') }}</li>
              <li>{{ $t('footer.service_shop') }}</li>
            </ul>
          </div>

          <!-- Контакты -->
          <div class="flex-1 min-w-[180px]">
            <div class="font-semibold text-[18px]  text-black">
              {{ $t('footer.contacts_title') }}
            </div>
            <ul class="text-sm text-[#878C91] space-y-3 mt-10">
              <li class="flex items-center gap-2">
                <img class="w-5 h-5" src="../components/icons/phone.svg" />
                {{ $t('footer.contacts_phone') }}
              </li>
              <li class="flex items-center gap-2">
                <img class="w-5 h-5" src="../components/icons/mesege.svg" />
                {{ $t('footer.contacts_email') }}
              </li>
              <li class="flex items-center gap-2">
                <img class="w-5 h-5" src="../components/icons/telegram.svg" />
                {{ $t('footer.contacts_telegram') }}
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()

// Автоустановка lang в <html>
watch(locale, (lang) => {
  document.documentElement.setAttribute('lang', lang)
}, { immediate: true })

// Подгружаем сохранённый язык, если есть
const savedLang = localStorage.getItem('lang')
if (savedLang && savedLang !== locale.value) {
  locale.value = savedLang
}
</script>


<style scoped>
.mobile-banner {
  background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
  border-radius: 16px;
  color: white;
  padding: 32px 20px;
  text-align: center;
  margin-bottom: 32px;
}

.mobile-banner h2 {
  font-size: 32px;
  line-height: 1.4;
  margin-bottom: 24px;
}

.cta-button {
  width: 100%;
  border: 1px solid white;
  border-radius: 999px;
  padding: 10px 24px;
  font-size: 16px;
  color: white;
  background: transparent;
  transition: background 0.2s ease;
}

.cta-button:hover {
  background: #ffffff20;
}
</style>