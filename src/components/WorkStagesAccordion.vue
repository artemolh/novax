<template>
  <section class="w-full my-12" id="process">
    <div class="bg-white rounded-2xl shadow p-6 md:p-10 flex flex-col md:flex-row gap-8">
      <!-- Левая колонка -->
      <div class="md:w-1/2 flex flex-col justify-between mb-6 md:mb-0">
        <h2 class="font-bold text-2xl mb-4">Структура работы над сайтом</h2>
        <p class="text-sm text-gray-700 mb-6">Работаем по чёткой системе: изучаем бизнес, ставим цели, проектируем структуру, создаём дизайн и реализуем его в разработке. Перед запуском тщательно тестируем сайт и настраиваем все технические детали. После публикации остаёмся на связи — обеспечиваем поддержку и развитие. Без хаоса, только понятные шаги и результат</p>
        <button class="border border-gray rounded-full px-5 py-2 text-base font-medium hover:bg-primary hover:text-dark transition w-max">Обсудить проект</button>
      </div>
      <!-- Правая колонка: Аккордеон -->
      <div class="md:w-1/2">
        <ul>
          <li v-for="(stage, idx) in stages" :key="stage.title" class="mb-2">
            <button @click="toggle(idx)" class="w-full flex items-center justify-between py-3 px-4 rounded-lg border border-gray bg-light hover:bg-primary/10 transition text-left">
              <span>
                <span :class="'font-bold mr-2 ' + stage.color">{{ stage.num }} этап</span>
                <span class="font-semibold">{{ stage.title }}</span>
              </span>
              <span>
                <svg v-if="openIdx === idx" width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M6 15l6-6 6 6"/></svg>
                <svg v-else width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M6 9l6 6 6-6"/></svg>
              </span>
            </button>
            <div v-if="openIdx === idx" class="px-4 pb-4 text-sm text-gray-700 animate-fade-in">
              {{ stage.desc }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const openIdx = ref(0)
const toggle = idx => openIdx.value = openIdx.value === idx ? -1 : idx
const stages = [
  {
    num: '01',
    color: 'text-primary',
    title: 'Анализ и постановка задач',
    desc: 'Проводим интервью и брифинг. Изучаем бизнес, аудиторию, цели и конкурентов. Формируем стратегию и определяем, каким должен быть сайт, чтобы решать конкретные задачи.'
  },
  {
    num: '02',
    color: 'text-orange-400',
    title: 'Проектирование структуры',
    desc: 'Создаём архитектуру сайта, продумываем логику и структуру страниц, чтобы пользователю было удобно.'
  },
  {
    num: '03',
    color: 'text-accent',
    title: 'UI/UX-дизайн',
    desc: 'Разрабатываем современный дизайн, который выделяет ваш бизнес и делает сайт удобным.'
  },
  {
    num: '04',
    color: 'text-primary',
    title: 'Фронтенд- и бэкенд-разработка',
    desc: 'Воплощаем дизайн в коде, реализуем все функции, интеграции и адаптивность.'
  },
  {
    num: '05',
    color: 'text-accent',
    title: 'Тестирование и подготовка к запуску',
    desc: 'Проверяем сайт на всех устройствах, устраняем баги, настраиваем аналитику и готовим к публикации.'
  },
]
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: none; }
}
.animate-fade-in {
  animation: fade-in 0.2s;
}
</style> 