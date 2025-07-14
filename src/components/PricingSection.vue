  <template>
    <section class="w-full py-6 bg-white mt-20 rounded-[15px] bg-[#F9FAFB]" id="pricing">
      <div class="max-w-screen-xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">
        <div class="p-0 sm:p-0 md:p-0 w-full">
          <h2
            class="font-medium text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-black leading-tight pl-4 md:pl-10 mt-[40px]">
            {{ t('pricing.title') }}
          </h2>

          <div ref="carousel"
            class="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 justify-start px-2 sm:px-8 md:px-10 pb-10 overflow-x-auto md:overflow-visible flex-nowrap snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300"
            @scroll="updateScroll">

            <!-- Одностраничный сайт -->
            <div
              class="min-w-full sm:min-w-[85vw] md:min-w-0 max-w-[540px] bg-[#EEFBF3] rounded-[28px] p-6 sm:p-10 flex flex-col w-full h-[520px] mx-auto text-[#878C91] shadow-md snap-center md:snap-none">
              <div class="flex flex-col flex-grow">
                <div class="flex items-center gap-2 text-sm text-[#32D583] font-medium mb-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#32D583]"></span>
                  {{ t('pricing.one.duration') }}
                </div>
                <h3 class="text-lg font-medium mb-2 mt-6 sm:mt-10 text-[23px] sm:text-[25px] text-black">{{
                  t('pricing.one.title') }}</h3>
                <p class="text-base w-full leading-relaxed mb-3 sm:mb-4 mt-3 sm:mt-5">
                  {{ t('pricing.one.desc') }}
                </p>
                <ul class="space-y-2 text-sm">
                  <li class="flex gap-3">
                    <img src="../components/icons/MaskGroup2.svg" alt="" class="w-5 h-5" />
                    <span>{{ t('pricing.one.list1') }}</span>
                  </li>
                  <li class="flex gap-3">
                    <img src="../components/icons/MaskGroup2.svg" alt="" class="w-5 h-5" />
                    <span>{{ t('pricing.one.list2') }}</span>
                  </li>
                  <li class="flex gap-3">
                    <img src="../components/icons/MaskGroup2.svg" alt="" class="w-5 h-5" />
                    <span>{{ t('pricing.one.list3') }}</span>
                  </li>
                </ul>
              </div>
              <div class="mt-4">
                <div class="text-lg sm:text-xl font-bold text-black mb-5">от 3 000 000 <span
                    class="text-base font-normal">сум</span></div>
                <button
                  class="w-full border border-[#878C91] text-[#878C91] rounded-full py-2 transition font-medium text-sm sm:text-base mt-0 hover:bg-[#F3F4F6]">
                  {{ t('pricing.button') }}
                </button>
              </div>
            </div>

            <!-- Корпоративный сайт -->
            <div
              class="min-w-full sm:min-w-[85vw] md:min-w-0 max-w-[540px] bg-[#EFFEFC] rounded-[28px] p-6 sm:p-10 flex flex-col w-full h-[520px] mx-auto text-[#878C91] shadow-md snap-center md:snap-none">
              <div class="flex flex-col flex-grow">
                <div class="flex items-center gap-2 text-sm text-[#12B76A] font-medium mb-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#12B76A]"></span>
                  {{ t('pricing.corp.duration') }}
                </div>
                <h3 class="text-lg font-medium mb-2 mt-6 sm:mt-10 text-[23px] sm:text-[25px] text-black">{{
                  t('pricing.corp.title') }}</h3>
                <p class="text-base w-full leading-relaxed mb-3 sm:mb-4 mt-3 sm:mt-5">
                  {{ t('pricing.corp.desc') }}
                </p>
                <ul class="space-y-2 text-sm">
                  <li class="flex gap-3">
                    <img src="../components/icons/MaskGroup1.svg" alt="" class="w-5 h-5" />
                    <span>{{ t('pricing.corp.list1') }}</span>
                  </li>
                  <li class="flex gap-3">
                    <img src="../components/icons/MaskGroup1.svg" alt="" class="w-5 h-5" />
                    <span>{{ t('pricing.corp.list2') }}</span>
                  </li>
                  <li class="flex gap-3">
                    <img src="../components/icons/MaskGroup1.svg" alt="" class="w-5 h-5" />
                    <span>{{ t('pricing.corp.list3') }}</span>
                  </li>
                </ul>
              </div>
              <div class="mt-4">
                <div class="text-lg sm:text-xl font-bold text-black mb-5">от 8 000 000 <span
                    class="text-base font-normal">сум</span></div>
                <button
                  class="w-full border border-[#878C91] text-[#878C91] rounded-full py-2 transition font-medium text-sm sm:text-base mt-0 hover:bg-[#F3F4F6]">
                  {{ t('pricing.button') }}
                </button>
              </div>
            </div>

            <!-- Интернет-магазин -->
            <div
              class="min-w-full sm:min-w-[85vw] md:min-w-0 max-w-[540px] bg-[#F9F7FD] rounded-[28px] p-6 sm:p-10 flex flex-col w-full h-[520px] mx-auto text-[#878C91] shadow-md snap-center md:snap-none">
              <div class="flex flex-col flex-grow">
                <div class="flex items-center gap-2 text-sm text-[#9E77ED] font-medium mb-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#9E77ED]"></span>
                  {{ t('pricing.shop.duration') }}
                </div>
                <h3 class="text-lg font-medium mb-2 mt-6 sm:mt-10 text-[23px] sm:text-[25px] text-black">{{
                  t('pricing.shop.title') }}</h3>
                <p class="text-base w-full leading-relaxed mb-3 sm:mb-4 mt-3 sm:mt-5">
                  {{ t('pricing.shop.desc') }}
                </p>
                <ul class="space-y-2 text-sm">
                  <li class="flex gap-3">
                    <img src="../components/icons/MaskGroup3.svg" alt="" class="w-5 h-5" />
                    <span>{{ t('pricing.shop.list1') }}</span>
                  </li>
                  <li class="flex gap-3">
                    <img src="../components/icons/MaskGroup3.svg" alt="" class="w-5 h-5" />
                    <span>{{ t('pricing.shop.list2') }}</span>
                  </li>
                  <li class="flex gap-3">
                    <img src="../components/icons/MaskGroup3.svg" alt="" class="w-5 h-5" />
                    <span>{{ t('pricing.shop.list3') }}</span>
                  </li>
                </ul>
              </div>
              <div class="mt-4">
                <div class="text-lg sm:text-xl font-bold text-black mb-5">от 12 000 000 <span
                    class="text-base font-normal">сум</span></div>
                <button
                  class="w-full border border-[#878C91] text-[#878C91] rounded-full py-2 transition font-medium text-sm sm:text-base mt-0 hover:bg-[#F3F4F6]">
                  {{ t('pricing.button') }}
                </button>
              </div>
            </div>
          </div>

          <!-- Навигация -->
          <div class="flex justify-center items-center mt-6 md:hidden">
            <button @click="scrollLeft"
              class="mr-2 w-10 h-10 flex items-center justify-center rounded-full border border-[#878C91] bg-white text-[#878C91] hover:bg-[#F3F4F6] transition disabled:opacity-50"
              :disabled="scrollPos === 0" aria-label="Прокрутить влево">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M12.5 15l-5-5 5-5" stroke="#878C91" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
            <button @click="scrollRight"
              class="w-10 h-10 flex items-center justify-center rounded-full border border-[#878C91] bg-white text-[#878C91] hover:bg-[#F3F4F6] transition disabled:opacity-50"
              :disabled="scrollPos === maxScroll" aria-label="Прокрутить вправо">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M7.5 5l5 5-5 5" stroke="#878C91" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>


<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const scrollPos = ref(0)
const maxScroll = ref(0)
const carousel = ref(null)

const updateScroll = () => {
  if (carousel.value) {
    scrollPos.value = carousel.value.scrollLeft
    maxScroll.value = carousel.value.scrollWidth - carousel.value.clientWidth
  }
}

const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -carousel.value.clientWidth * 0.8, behavior: 'smooth' })
    setTimeout(updateScroll, 400)
  }
}

const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: carousel.value.clientWidth * 0.8, behavior: 'smooth' })
    setTimeout(updateScroll, 400)
  }
}

// Автоустановка lang
watch(locale, (lang) => {
  document.documentElement.setAttribute('lang', lang)
}, { immediate: true })

const savedLang = localStorage.getItem('lang')
if (savedLang && savedLang !== locale.value) {
  locale.value = savedLang
}

onMounted(() => {
  updateScroll()
  window.addEventListener('resize', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScroll)
})
</script>

<style>
@media (min-width: 1100px) and (max-width: 1230px) {
  .custom-width {
    max-width: 400px !important;
    min-width: 400px !important;
  }
}
</style>