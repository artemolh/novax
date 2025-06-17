<template>
  <section class="w-full my-12" id="pricing">
    <h2 class="font-bold text-2xl mb-8">Стоимость разработки сайта</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Одностраничный сайт -->
      <div class="bg-primary/10 rounded-2xl p-6 flex flex-col gap-3 border-t-4 border-primary">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-3 h-3 rounded-full bg-primary inline-block"></span>
          <span class="text-xs text-gray-500">от 10 дней</span>
        </div>
        <h3 class="font-bold text-lg mb-1">Одностраничный сайт</h3>
        <p class="text-sm text-gray-700 mb-2">Лаконичный сайт с фокусом на одной цели — идеальное решение для презентации услуги, продукта или события</p>
        <ul class="text-sm text-dark/80 mb-4 space-y-1">
          <li>✔ Индивидуальный дизайн</li>
          <li>✔ Продуманная структура</li>
          <li>✔ Адаптивная вёрстка</li>
        </ul>
        <div class="font-bold text-xl mb-3">от 3 000 000 <span class="text-base font-normal">сум</span></div>
        <button class="border border-primary rounded-full px-5 py-2 text-base font-medium hover:bg-primary hover:text-dark transition w-max">Обсудить проект</button>
      </div>
      <!-- Корпоративный сайт -->
      <div class="bg-orange-100 rounded-2xl p-6 flex flex-col gap-3 border-t-4 border-orange-300">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-3 h-3 rounded-full bg-orange-300 inline-block"></span>
          <span class="text-xs text-gray-500">от 20 дней</span>
        </div>
        <h3 class="font-bold text-lg mb-1">Корпоративный сайт</h3>
        <p class="text-sm text-gray-700 mb-2">Надёжное цифровое лицо компании с продуманной структурой, современным дизайном и акцентом на бизнес-цели</p>
        <ul class="text-sm text-dark/80 mb-4 space-y-1">
          <li>✔ Грамотная архитектура сайта</li>
          <li>✔ Брендированный интерфейс</li>
          <li>✔ Простое администрирование</li>
        </ul>
        <div class="font-bold text-xl mb-3">от 8 000 000 <span class="text-base font-normal">сум</span></div>
        <button class="border border-orange-300 rounded-full px-5 py-2 text-base font-medium hover:bg-orange-300 hover:text-dark transition w-max">Обсудить проект</button>
      </div>
      <!-- Интернет-магазин -->
      <div class="bg-accent/10 rounded-2xl p-6 flex flex-col gap-3 border-t-4 border-accent">
        <div class="flex items-center gap-2 mb-2">
          <span class="w-3 h-3 rounded-full bg-accent inline-block"></span>
          <span class="text-xs text-gray-500">от 30 дней</span>
        </div>
        <h3 class="font-bold text-lg mb-1">Интернет - магазин</h3>
        <p class="text-sm text-gray-700 mb-2">Функциональный сайт с удобным каталогом, корзиной и оплатой, для стабильных продаж и роста онлайн-бизнеса</p>
        <ul class="text-sm text-dark/80 mb-4 space-y-1">
          <li>✔ Управление товарами и заказами</li>
          <li>✔ Каталог с товарами и фильтрами</li>
          <li>✔ Подключение онлайн-кассы</li>
        </ul>
        <div class="font-bold text-xl mb-3">от 12 000 000 <span class="text-base font-normal">сум</span></div>
        <button class="border border-accent rounded-full px-5 py-2 text-base font-medium hover:bg-accent hover:text-dark transition w-max">Обсудить проект</button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Только разметка
</script> 