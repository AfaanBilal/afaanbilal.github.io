<template>
  <div id="quick-links" class="py-6" style="background: linear-gradient(270deg, #8034cc 0%,#991a79 100%)">
      <section class="container mx-auto px-4 py-8 md:p-10">
          <h2 class="text-4xl font-bold text-center mb-8 text-white">Quick Links</h2>
          <div class="pt-8 flex justify-center gap-4 flex-wrap text-white">
              <a v-for="link in links" :key="link.title" :href="link.url" target="_blank" rel="noopener">
                  <div class="px-3 py-2 border rounded m-2 w-60 h-40 flex flex-col justify-center items-center text-center hover:border-gray-800"  style="background: linear-gradient(139deg, #c12127, #e02aff, #fb8817, #ff4b01);">
                      <div class="text-center text-2xl font-bold">
                          {{ link.title }}
                      </div>
                      {{ link.desc }}
                  </div>
              </a>
          </div>
      </section>
  </div>
</template>

<script setup>
const links = [
    { title: '#solid-talk', url: '/solid-talk', desc: 'A simple chatroom built using SolidJS and SocketIO.' },
    { title: 'Pulse', url: '/pulse', desc: 'An experiment in reactivity.' },
    { title: 'Pulse Demo', url: '/pulse-demo', desc: 'A demo of PulseJS' },
    { title: 'Secure Message', url: '/secure-message', desc: 'A simple demo of symmetric encryption.' },
    { title: 'Books and Games', url: '/books-and-games', desc: 'A list of books I\'ve read and games I\'ve played built with SolidJS and TailwindCSS.' },
    { title: 'Iron Guard', url: 'https://iron-guard.afaan.dev', desc: 'An inventory management system built with Rust, SolidJS and TailwindCSS.' },
    { title: 'Simple Linear Regression', url: 'https://simple-linear-regression.streamlit.app', desc: 'A quick simple linear regression demo using Streamlit.' },
]
</script>
