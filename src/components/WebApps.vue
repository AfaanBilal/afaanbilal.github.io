<template>
  <section id="web-apps" class="container mx-auto px-4 py-8 md:p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mt-8">Web Apps</h2>
      <div class="pt-8 flex flex-wrap gap-2 justify-center items-center">
          <div v-for="app in apps" :key="app.name" class="border rounded p-2 w-full md:w-96">
              <div class="flex justify-between items-baseline border-b pb-2 mb-2">
                  <a :href="app.link" target="_blank" rel="noopener"><h2 class="text-xl font-bold text-center hover:text-blue-500">{{ app.name }}</h2></a>
                  <a :href="app.link" target="_blank" rel="noopener"><h2 class="text-lg text-center hover:text-blue-500">{{ app.domain }}</h2></a>
              </div>
              <div class="flex justify-center items-center">
                  <img :src="app.image" :alt="app.name" />
              </div>
              <div class="pt-2 text-sm">
                  <span v-for="tech in app.tech" :key="tech" style="background: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);" class="text-white px-2 py-1 rounded m-2 inline-block shadow hover:shadow-lg">{{ tech }}</span>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup>
const apps = [
    {
        name: 'Koshur Online',
        domain: 'koshur.afaan.dev',
        link: 'https://koshur.afaan.dev',
        image: 'https://koshur.afaan.dev/screenshots/koshur-online-hero.png',
        tech: ['Vue', 'Typescript', 'Tailwind']
    },
    {
        name: 'ABACUS',
        domain: 'abacus.afaan.dev',
        link: 'https://abacus.afaan.dev',
        image: 'https://abacus.afaan.dev/screenshots/abacus-hero.png',
        tech: ['Vue', 'Typescript', 'Tailwind']
    },
    {
        name: 'Lumina',
        domain: 'lumina.afaan.dev',
        link: 'https://lumina.afaan.dev',
        image: 'https://raw.githubusercontent.com/AfaanBilal/lumina/master/screenshots/lumina-hero.png',
        tech: ['Vue', 'Typescript', 'Tailwind']
    },
    {
        name: 'Open Source Summary',
        domain: 'oss.afaan.dev',
        link: 'https://oss.afaan.dev',
        image: 'https://afaan.dev/screenshots/oss-hero.png',
        tech: ['React', 'Typescript', 'Tailwind']
    },
    {
        name: 'Parabolic Motion',
        domain: 'afaan.dev/parabolic-motion',
        link: 'https://afaan.dev/parabolic-motion',
        image: 'https://afaan.dev/screenshots/pbm-hero.png',
        tech: ['Javascript', 'Canvas', 'Bootstrap']
    },
    {
        name: 'Game of Life',
        domain: 'afaan.dev/game-of-life',
        link: 'https://afaan.dev/game-of-life',
        image: 'https://afaan.dev/screenshots/gol-hero.png',
        tech: ['Vue', 'Javascript', 'Bootstrap']
    }
]
</script>
