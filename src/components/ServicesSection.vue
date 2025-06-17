<template>
  <section class="w-full my-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Одностраничный сайт -->
      <div class="bg-white rounded-xl shadow p-6 flex flex-col gap-3 border-t-4 border-primary">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-primary inline-block"></span>
          <span class="text-xs text-gray-500">от 3 000 000 сум</span>
        </div>
        <h3 class="font-bold text-lg mb-1">Одностраничный сайт</h3>
        <p class="text-sm text-gray-600 mb-4">Лаконичный сайт, разрабатываемый для достижения одной цели</p>
        <button class="ml-auto mt-auto w-9 h-9 flex items-center justify-center rounded-full bg-gray hover:bg-primary transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
      <!-- Корпоративный сайт -->
      <div class="bg-white rounded-xl shadow p-6 flex flex-col gap-3 border-t-4 border-orange-300">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-orange-300 inline-block"></span>
          <span class="text-xs text-gray-500">от 8 000 000 сум</span>
        </div>
        <h3 class="font-bold text-lg mb-1">Корпоративный сайт</h3>
        <p class="text-sm text-gray-600 mb-4">Надёжное цифровое лицо компании с продуманной структурой</p>
        <button class="ml-auto mt-auto w-9 h-9 flex items-center justify-center rounded-full bg-gray hover:bg-primary transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
      <!-- Интернет-магазин -->
      <div class="bg-white rounded-xl shadow p-6 flex flex-col gap-3 border-t-4 border-accent">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-accent inline-block"></span>
          <span class="text-xs text-gray-500">от 12 000 000 сум</span>
        </div>
        <h3 class="font-bold text-lg mb-1">Интернет - магазин</h3>
        <p class="text-sm text-gray-600 mb-4">Функциональный сайт с удобным каталогом, корзиной и оплатой</p>
        <button class="ml-auto mt-auto w-9 h-9 flex items-center justify-center rounded-full bg-gray hover:bg-primary transition">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Нет логики, только разметка
</script> 