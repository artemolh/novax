<template>
  <header class="w-full bg-white shadow-sm py-3 px-4 flex items-center justify-between sticky top-0 z-50">
    <div class="flex items-center gap-3">
      <img src="/logo.svg" alt="boostim logo" class="h-9 w-9" />
      <span class="font-bold text-xl tracking-tight">boostim</span>
    </div>
    <nav class="hidden md:flex gap-8 text-base font-medium">
      <a href="#about" class="hover:text-primary transition">О нас</a>
      <a href="#process" class="hover:text-primary transition">Структура работы</a>
      <a href="#team" class="hover:text-primary transition">Команда</a>
      <a href="#pricing" class="hover:text-primary transition">Цены</a>
    </nav>
    <div class="flex items-center gap-3">
      <button class="hidden md:block border border-gray rounded-full px-5 py-2 text-sm font-medium hover:bg-primary hover:text-dark transition">Обсудить проект</button>
      <div class="flex items-center gap-1 bg-gray rounded-full px-2 py-1 ml-2">
        <button class="px-2 py-1 rounded-full text-xs font-semibold" :class="{'bg-primary text-dark': lang==='RU'}" @click="lang='RU'">RU</button>
        <button class="px-2 py-1 rounded-full text-xs font-semibold" :class="{'bg-primary text-dark': lang==='UZ'}" @click="lang='UZ'">UZ</button>
      </div>
      <button class="md:hidden ml-2" @click="menuOpen = !menuOpen">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
    <transition name="fade">
      <div v-if="menuOpen" class="fixed inset-0 bg-black/40 z-50 flex flex-col md:hidden">
        <div class="bg-white w-3/4 h-full p-6 flex flex-col gap-6">
          <button class="self-end mb-4" @click="menuOpen = false">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#181A1B" stroke-width="2" d="M6 6l12 12M6 18L18 6"/></svg>
          </button>
          <a href="#about" class="py-2 text-lg font-medium" @click="menuOpen=false">О нас</a>
          <a href="#process" class="py-2 text-lg font-medium" @click="menuOpen=false">Структура работы</a>
          <a href="#team" class="py-2 text-lg font-medium" @click="menuOpen=false">Команда</a>
          <a href="#pricing" class="py-2 text-lg font-medium" @click="menuOpen=false">Цены</a>
          <button class="mt-6 border border-gray rounded-full px-5 py-2 text-base font-medium hover:bg-primary hover:text-dark transition">Обсудить проект</button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const lang = ref('RU')
const menuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 