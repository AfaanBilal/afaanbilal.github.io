<template>
  <div class="home">
    <Navbar />
    <main>
      <Hero />
      <Courses />
      <NanoCore />
      <HyperDB />
      <OpenSource />
      <Skills />
      <ResearchProjects />
      <WebApps />
      <MobileApps />
      <DesktopApps />
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
import MobileApps from '../components/MobileApps.vue'
import WebApps from '../components/WebApps.vue'
import HyperDB from '../components/HyperDB.vue'
import DesktopApps from '../components/DesktopApps.vue'
import QuickLinks from '../components/QuickLinks.vue'
import NanoCore from '../components/NanoCore.vue'
import OpenSource from '../components/OpenSource.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
</script>
