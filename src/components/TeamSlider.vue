<template>
  <section class="w-full py-6 bg-white mt-20 rounded-[15px] min-h-[800px]" id="team">
    <div class="flex flex-col gap-4 px-4 md:px-10 mb-10 md:flex-row md:gap-12">
      <div class="md:w-1/2">
        <h2 class="font-medium text-[28px] sm:text-[32px] md:text-[35px] leading-[1.2] text-black mt-8">
          {{ t('team.title') }}
        </h2>
      </div>
      <div class="md:w-1/2 flex items-center mt-4 md:mt-8 pr-4">
        <p class="text-[#878C91] text-sm md:text-base leading-relaxed text-right md:text-left max-w-[520px]">
          {{ t('team.description') }}
        </p>
      </div>
    </div>

    <div ref="carousel"
      class="team-wrapper flex md:grid md:grid-cols-4 gap-4 px-4 sm:px-6 md:px-10 mt-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-thin scrollbar-thumb-gray-300">

      <div v-for="(member, i) in members" :key="i"
        class="flex justify-center md:block snap-center md:snap-none min-w-[85vw] sm:min-w-[60vw] md:min-w-0">
        <div
          class="team-card bg-white rounded-[15px] flex flex-col items-start text-left w-full max-w-[365px] h-full box-border">
          <img :src="member.photo" alt="photo" class="team-img rounded-[15px] mb-4 w-full object-contain" />
          <div class="team-name font-medium text-black ml-2 text-base md:text-lg">
            {{ t(`team.members[${i}].name`) }}
          </div>
          <div class="team-role text-[#878C91] text-sm md:text-base ml-2">
            {{ t(`team.members[${i}].role`) }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center mt-10 md:hidden">
      <button @click="scrollLeft"
        class="mr-2 w-10 h-10 flex items-center justify-center rounded-full border border-[#878C91] bg-white text-[#878C91] transition disabled:opacity-50"
        :disabled="scrollPos === 0">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M12.5 15l-5-5 5-5" stroke="#878C91" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
      <button @click="scrollRight"
        class="w-10 h-10 flex items-center justify-center rounded-full border border-[#878C91] bg-white text-[#878C91] transition disabled:opacity-50"
        :disabled="scrollPos === maxScroll">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path d="M7.5 5l5 5-5 5" stroke="#878C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const members = [
  { photo: 'TeamSliderImg/Rectangle.svg' },
  { photo: 'TeamSliderImg/Rectangle.svg' },
  { photo: 'TeamSliderImg/Rectangle.svg' },
  { photo: 'TeamSliderImg/Rectangle.svg' },
]

const carousel = ref(null)
const scrollPos = ref(0)
const maxScroll = ref(0)

const updateScroll = () => {
  if (carousel.value) {
    scrollPos.value = carousel.value.scrollLeft
    maxScroll.value = carousel.value.scrollWidth - carousel.value.clientWidth
  }
}

const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -carousel.value.clientWidth * 0.8, behavior: 'smooth' })
    setTimeout(updateScroll, 300)
  }
}

const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: carousel.value.clientWidth * 0.8, behavior: 'smooth' })
    setTimeout(updateScroll, 300)
  }
}

onMounted(() => {
  updateScroll()
  window.addEventListener('resize', updateScroll)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateScroll)
})
</script>

<style scoped>
@media (min-width: 768px) and (max-width: 1200px) {
  .team-wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 32px !important;
  }

  .team-card {
    max-width: 100% !important;
    padding: 20px;
  }

  .team-img {
    height: 460px !important;
  }

  .team-name {
    font-size: 20px !important;
  }

  .team-role {
    font-size: 16px !important;
  }
}
</style>
