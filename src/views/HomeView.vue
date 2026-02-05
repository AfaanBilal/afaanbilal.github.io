<template>
  <div class="home">
    <Navbar />
    <main>
      <Hero />
      <Courses />
      <Reviews />
      <NanoCore />
      <HyperDB />
      <Koshur />
      <OpenSource />
      <Skills />
      <ResearchProjects />
      <Apps />
      <QuickLinks />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import ResearchProjects from '../components/ResearchProjects.vue'
import Courses from '../components/Courses.vue'
import Reviews from '../components/Reviews.vue'
import Apps from '../components/Apps.vue'
import HyperDB from '../components/HyperDB.vue'
import Koshur from '../components/Koshur.vue'
import QuickLinks from '../components/QuickLinks.vue'
import NanoCore from '../components/NanoCore.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import { defineAsyncComponent } from 'vue'

const OpenSource = defineAsyncComponent(() => import('../components/OpenSource.vue'))
</script>
