<template>
  <nav class="bg-gray-100 py-4 shadow-sm relative z-50">
      <div class="container mx-auto px-6 flex justify-between items-center md:justify-center">

          <!-- Mobile Menu Button -->
          <button @click="isOpen = !isOpen" class="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>

          <!-- Links Container -->
          <div :class="isOpen ? 'flex' : 'hidden'" class="w-full flex-col md:flex md:flex-row md:items-center md:w-auto md:space-x-4 absolute md:relative top-full left-0 bg-gray-100 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0">
              <div v-for="(link, index) in links" :key="index" class="w-full md:w-auto border-b md:border-none py-2 md:py-0 text-center md:text-left">
                  <a :href="link.href" @click="isOpen = false" class="block hover:text-purple-600 transition-colors">{{ link.text }}</a>
              </div>
          </div>
      </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { text: 'Research Projects', href: '#research-projects' },
  { text: 'Courses', href: '#courses' },
  { text: 'Mobile Apps', href: '#mobile-apps' },
  { text: 'Web Apps', href: '#web-apps' },
  { text: 'Desktop Apps', href: '#desktop-apps' },
  { text: 'HyperDB', href: '#hyperdb' },
  { text: 'Quick Links', href: '#quick-links' },
  { text: 'Tech Stack', href: '#tech-stack' },
  { text: 'GitHub Stats', href: '#github-stats' },
  { text: 'Open Source', href: '#open-source' },
  { text: 'Skills', href: '#skills' },
  { text: 'Contact', href: '#contact' }
]
</script>
