<template>
  <nav class="bg-gray-100 py-5">
      <div class="flex flex-wrap justify-center">
          <div v-for="(link, index) in links" :key="index" class="w-full flex justify-center mb-4 md:my-0 md:w-auto px-6" :class="{'border-b md:border-b-0 md:border-r pb-4 md:py-0': index < links.length - 1}">
              <a :href="link.href">{{ link.text }}</a>
          </div>
      </div>
  </nav>
</template>

<script setup>
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
