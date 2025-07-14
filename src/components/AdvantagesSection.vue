<template>
  <section class="w-full my-10 mt-20 bg-gray-50">
    <div class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

      <!-- Главный блок -->
      <div
        class="md:col-span-2 md:row-span-1 bg-[#CCFCE3] rounded-2xl shadow relative overflow-hidden flex items-start justify-start p-6 md:p-8 h-[290px]">
        <div class="relative z-10">
          <h3 class="font-medium text-[25px] leading-snug">
            {{ t('main_block3.title[0]') }}<br />
            {{ t('main_block3.title[1]') }}
            <template v-if="locale === 'uz'">
              <br />{{ t('main_block3.title[2]') }}
            </template>
          </h3>
        </div>

        <img src="../components/AdvantagesSection/Frame 427321871.svg" alt="График эффективности"
          class="absolute inset-0 w-full h-full object-cover z-0 rounded-2xl pointer-events-none" />
      </div>

      <!-- Блок 1 -->
      <div class="bg-white rounded-2xl p-6 shadow flex flex-col h-full">
        <h3 class="font-medium text-[25px] mb-12 leading-snug">
          <template v-if="locale === 'uz'">
            <span class="uz-title-first">Biznes </span>
            <span class="uz-title-second">va maqsadlarni </span>
            <span class="uz-title-third">tushunamiz</span>
          </template>
          <template v-else>
            <span class="uz-title-first">Понимаем </span>
            <span class="uz-title-second">бизнес и </span>
            <span class="uz-title-third">цели</span>
          </template>
        </h3>

        <p class="text-[17px] text-[#878C91]">
          <template v-if="locale === 'uz'">
            Saytingiz natija berishi uchun sizning<br />
            sohangiz, vazifalaringiz va<br />
            auditoriyangizni o‘rganamiz
          </template>
          <template v-else>
            Изучаем вашу нишу, задачи и<br />
            аудиторию, чтобы сайт работал<br />
            на результат
          </template>
        </p>
      </div>

      <!-- Блок 2 -->
      <div class="bg-white rounded-2xl p-6 shadow flex flex-col h-full">
        <h3 class="font-medium text-[25px] mb-12 leading-snug">
          <template v-if="locale === 'uz'">
            <span class="uz-title-first">Aql bilan </span>
            <span class="uz-title-second">ishlab </span>
            <span class="uz-title-third">chiqamiz</span>
          </template>
          <template v-else>
            <span class="uz-title-first">Упаковываем </span>
            <span class="uz-title-second">с </span>
            <span class="uz-title-third">умом</span>
          </template>
        </h3>

        <p class="text-[17px] text-[#878C91]">
          <template v-if="locale === 'uz'">
            Mahsulot qiymatini oshiradigan va<br />
            savdoga olib boradigan tuzilma,<br />
            dizayn hamda matnlar yaratamiz
          </template>
          <template v-else>
            Создаём структуру, дизайн и тексты,<br />
            которые усиливают ценность продукта<br />
            и ведут к продаже
          </template>
        </p>
      </div>

      <!-- Блок 3 -->
      <div class="bg-white rounded-2xl p-6 shadow flex flex-col h-full">
        <h3 class="font-medium text-[25px] mb-12 leading-snug">
          <template v-if="locale === 'uz'">
            <span class="uz-title-first">Qulay va </span>
            <span class="uz-title-second">chiroyli </span>
            <span class="uz-title-third">qilamiz</span>
          </template>
          <template v-else>
            <span class="uz-title-first">Делаем </span>
            <span class="uz-title-second">удобно и </span>
            <span class="uz-title-third">красиво</span>
          </template>
        </h3>

        <p class="text-[17px] text-[#878C91]">
          <template v-if="locale === 'uz'">
            Tushunarli mantiq va vizual<br />
            ifodaviylikni uyg‘unlashtiramiz — sayt<br />
            ishonch uyg‘otadi va ortiqcha bosishlarsiz ishlaydi
          </template>
          <template v-else>
            Совмещаем понятную логику и визуальную<br />
            выразительность — сайт вызывает доверие<br />
            и работает без лишних кликов
          </template>
        </p>
      </div>

      <!-- Блок 4 -->
      <div class="bg-white rounded-2xl p-6 shadow flex flex-col h-full">
        <h3 class="font-medium text-[25px] mb-12 leading-snug">
          <template v-if="locale === 'uz'">
            <span class="uz-title-first">Ishga </span>
            <span class="uz-title-second">tushiramiz va </span>
            <span class="uz-title-third">qo‘llab-quvvatlaymiz</span>
          </template>
          <template v-else>
            <span class="uz-title-first">Запускаем и </span>
            <span class="uz-title-second">поддерживаем</span>
          </template>
        </h3>

        <p class="text-[17px] text-[#878C91]">
          <template v-if="locale === 'uz'">
            Moslashuvchan sayt tuzilmasidan tortib,<br />
            integratsiyalar va ishga tushirilgandan<br />
            keyingi texnik yordamgacha hamma narsani o‘z zimmamizga olamiz
          </template>
          <template v-else>
            Берём на себя всё техническое — от<br />
            адаптивной верстки до интеграций и<br />
            сопровождения после запуска
          </template>
        </p>
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

<style>
.uz-title-first,
.uz-title-second,
.uz-title-third {
  display: inline;
}

@media (max-width: 1536px) {

  .uz-title-first,
  .uz-title-second,
  .uz-title-third {
    display: block;
  }
}

@media (min-width: 1537px) {

  .uz-title-first,
  .uz-title-second {
    display: inline;
  }

  .uz-title-third {
    display: block;
  }
}
</style>