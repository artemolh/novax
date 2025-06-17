<script setup>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AdvantagesSection from './components/AdvantagesSection.vue'
import WorkStagesAccordion from './components/WorkStagesAccordion.vue'
import TeamSlider from './components/TeamSlider.vue'
import PricingSection from './components/PricingSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-light font-inter">
    <Header />
    <main class="max-w-7xl mx-auto">
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <WorkStagesAccordion />
      <TeamSlider />
      <PricingSection />
      <FooterSection />
      <!-- Здесь будут остальные секции -->
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
