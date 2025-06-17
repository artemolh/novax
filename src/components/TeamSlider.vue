<template>
  <section class="w-full my-12" id="team">
    <div class="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
      <div>
        <h2 class="font-bold text-2xl mb-2">Воплощаем<br>идеи в реальность</h2>
      </div>
      <p class="text-gray-600 max-w-xl text-sm">Мы — команда дизайнеров, разработчиков и стратегов, создающих сайты, которые приносят результат. Каждый проект для нас — уникальная история, требующая индивидуального подхода и творческого решения</p>
    </div>
    <div class="relative">
      <button @click="prev" :disabled="page === 0" class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-primary/30 disabled:opacity-40">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M15 6l-6 6 6 6"/></svg>
      </button>
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-300" :style="sliderStyle">
          <div v-for="member in visibleMembers" :key="member.name+member.role" class="min-w-[220px] max-w-xs mx-2 bg-white rounded-2xl shadow p-4 flex flex-col items-center">
            <img :src="member.photo" alt="photo" class="w-32 h-40 object-cover rounded-xl mb-3" />
            <div class="font-semibold">{{ member.name }}</div>
            <div class="text-gray-500 text-sm">{{ member.role }}</div>
          </div>
        </div>
      </div>
      <button @click="next" :disabled="page === maxPage" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-primary/30 disabled:opacity-40">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M9 6l6 6-6 6"/></svg>
      </button>
      <div class="flex justify-center mt-4 gap-2">
        <span v-for="i in maxPage+1" :key="i" class="w-2 h-2 rounded-full" :class="{'bg-primary': page === i-1, 'bg-gray': page !== i-1}"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const members = [
  { name: 'Петин Сергей', role: 'CEO', photo: '/team/sergey.jpg' },
  { name: 'Петин Сергей', role: 'Маркетинг и исследования', photo: '/team/sergey.jpg' },
  { name: 'Петин Сергей', role: 'Backend-разработка', photo: '/team/sergey.jpg' },
  { name: 'Петин Сергей', role: 'Frontend - разработка', photo: '/team/sergey.jpg' },
]

const page = ref(0)
const perPage = ref(4)

const updatePerPage = () => {
  if (window.innerWidth < 640) perPage.value = 1
  else if (window.innerWidth < 1024) perPage.value = 2
  else perPage.value = 4
}
onMounted(() => {
  updatePerPage()
  window.addEventListener('resize', updatePerPage)
})

const maxPage = computed(() => Math.max(0, Math.ceil(members.length / perPage.value) - 1))
const visibleMembers = computed(() => {
  const start = page.value * perPage.value
  return members.slice(start, start + perPage.value)
})
const sliderStyle = computed(() => ({
  transform: `translateX(-${page.value * 100}%)`
}))

function prev() { if (page.value > 0) page.value-- }
function next() { if (page.value < maxPage.value) page.value++ }
</script> 