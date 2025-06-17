<template>
  <footer class="w-full mt-16">
    <!-- Баннер бесплатного разбора -->
    <div class="bg-dark rounded-2xl mb-8 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Сделаем <span class="text-primary">бесплатный разбор</span><br>вашего сайта</h2>
      </div>
      <button class="border border-primary rounded-full px-6 py-3 text-base font-semibold text-white hover:bg-primary hover:text-dark transition w-max">Получить разбор</button>
    </div>
    <!-- Основной футер -->
    <div class="bg-white rounded-2xl p-8 flex flex-col md:flex-row md:justify-between gap-8">
      <!-- Логотип и описание -->
      <div class="flex-1 min-w-[200px] mb-6 md:mb-0">
        <div class="flex items-center gap-3 mb-3">
          <img src="/logo.svg" alt="boostim logo" class="h-9 w-9" />
          <span class="font-bold text-xl tracking-tight">boostim</span>
        </div>
        <p class="text-sm text-gray-600 mb-4">Создаём цифровые решения, которые помогают компаниям привлекать клиентов, эффективно презентовать свои услуги и усиливать позиции на рынке.</p>
        <div class="text-xs text-gray-400">Boostim 2025 | все права защищены</div>
      </div>
      <!-- Навигация -->
      <div class="flex-1 min-w-[120px] mb-6 md:mb-0">
        <div class="font-semibold mb-2">Навигация</div>
        <ul class="text-sm text-gray-700 space-y-1">
          <li><a href="#about" class="hover:text-primary">О нас</a></li>
          <li><a href="#process" class="hover:text-primary">Структура работы</a></li>
          <li><a href="#team" class="hover:text-primary">Команда</a></li>
          <li><a href="#pricing" class="hover:text-primary">Цены</a></li>
        </ul>
      </div>
      <!-- Услуги -->
      <div class="flex-1 min-w-[140px] mb-6 md:mb-0">
        <div class="font-semibold mb-2">Услуги</div>
        <ul class="text-sm text-gray-700 space-y-1">
          <li>Одностраничный сайт</li>
          <li>Корпоративный сайт</li>
          <li>Интернет - магазин</li>
        </ul>
      </div>
      <!-- Контакты -->
      <div class="flex-1 min-w-[180px]">
        <div class="font-semibold mb-2">Контакты</div>
        <ul class="text-sm text-gray-700 space-y-2">
          <li class="flex items-center gap-2"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M6.5 7.5A5.5 5.5 0 0 1 12 2a5.5 5.5 0 0 1 5.5 5.5c0 3.038-2.462 5.5-5.5 5.5S6.5 10.538 6.5 7.5Z"/><path stroke="#181A1B" stroke-width="2" d="M3 22a9 9 0 0 1 18 0v0a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v0Z"/></svg> +998 (94) 904-20-54</li>
          <li class="flex items-center gap-2"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Z"/><path stroke="#181A1B" stroke-width="2" d="m3.5 6.5 7.5 7a2 2 0 0 0 2.6 0l7.5-7"/></svg> hello@boostim.uz</li>
          <li class="flex items-center gap-2"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M21.5 3.5 11 21l-3.5-7-7-3.5L21.5 3.5Z"/></svg> boostim_uz</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Только разметка
</script> 