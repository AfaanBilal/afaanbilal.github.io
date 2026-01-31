<template>
  <section id="desktop-apps" class="container mx-auto px-4 py-8 md:p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mt-8">Desktop Apps</h2>
      <div class="pt-8 flex flex-wrap gap-2 justify-center items-center">
          <div v-for="app in apps" :key="app.name" class="border rounded p-2 w-full md:w-96">
              <div class="flex justify-between items-baseline border-b pb-2 mb-2">
                  <a :href="app.link" target="_blank" rel="noopener"><h2 class="text-xl font-bold hover:text-blue-500">{{ app.name }}</h2></a>
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
        name: 'AMX TextEdit',
        link: 'https://afaan.dev/AMX-TextEdit',
        image: 'https://afaan.dev/screenshots/amx-textedit.png',
        tech: ['C++', 'wxWidgets']
    },
    {
        name: 'Central Limit',
        link: 'https://github.com/AfaanBilal/central-limit',
        image: 'https://raw.githubusercontent.com/AfaanBilal/central-limit/master/assets/central-limit-hero.png',
        tech: ['Rust', 'TUI']
    },
    {
        name: 'Sorting Visualizer',
        link: 'https://github.com/AfaanBilal/sorting-visualizer',
        image: 'https://raw.githubusercontent.com/AfaanBilal/sorting-visualizer/master/screenshots/sorting-visualizer-hero.png',
        tech: ['Rust', 'TUI']
    },
    {
        name: 'OpenGL Testbench',
        link: 'https://github.com/AfaanBilal/OpenGLTestbench',
        image: 'https://raw.githubusercontent.com/AfaanBilal/OpenGLTestbench/master/assets/opengl-testbench.png',
        tech: ['C++', 'OpenGL']
    }
]
</script>
