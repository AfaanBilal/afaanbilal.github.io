<template>
  <section id="research-projects" class="container mx-auto px-6 py-8">
      <h2 class="text-4xl font-bold text-center text-gray-800 my-10">Research Projects</h2>

      <div class="flex flex-wrap my-4 border-b py-4">
          <div class="w-full md:w-1/2 flex flex-wrap justify-center py-4">
              <div v-for="(img, idx) in atvcasImages" :key="idx" class="px-1 w-full md:w-1/2 flex justify-center">
                  <img :src="img" class="rounded w-80 h-48 my-2 md:m-0" />
              </div>
          </div>
          <div class="w-full md:w-1/2 px-10 py-10 md:py-2">
              <p class="text-gray-600 font-bold mb-0">Bachelor of Technology in Civil Engineering</p>
              <p class="text-gray-600 mb-4">National Institute of Technology, Srinagar</p>

              <h3 class="text-3xl font-bold text-gray-800 my-2">
                  <a href="https://www.researchgate.net/publication/350054733_Automated_Traffic_Volume_Classification_and_Analysis_System_ATVCAS_A_Comparison_of_Methodologies" target="_blank" rel="noopener">
                      ATVACS
                  </a>
              </h3>
              <p class="text-xl text-gray-800 mb-4">Automatic Traffic Volume Analysis and Classification System</p>
              <p class="mb-10 flex flex-wrap">
                  <span
                      v-for="item in atvcasTags" :key="item"
                      style="background: linear-gradient(120deg, #fb8817, #ff4b01, #c12127, #e02aff)" class="text-white px-2 py-1 mr-2 mt-2 rounded block shadow hover:shadow-lg">
                      {{ item }}
                  </span>
              </p>
          </div>
      </div>

      <div class="flex flex-wrap my-4 py-4">
          <div class="w-full md:w-1/2 px-10 py-10 md:py-2">
              <p class="text-gray-600 font-bold mb-0">Bachelor of Technology in Civil Engineering</p>
              <p class="text-gray-600 mb-4">National Institute of Technology, Srinagar</p>

              <h3 class="text-3xl font-bold text-gray-800 my-2">Study of Impact on PCU</h3>
              <p class="text-xl text-gray-800 mb-4">Impact of Road Surface Conditions on the PCU of vehicle categories</p>
              <p class="mb-10 flex flex-wrap">
                  <span
                      v-for="item in pcuTags" :key="item"
                      style="background: linear-gradient(120deg, #fb8817, #ff4b01, #c12127, #e02aff)" class="text-white px-2 py-1 mr-2 mt-2 rounded block shadow hover:shadow-lg">
                      {{ item }}
                  </span>
              </p>
          </div>
          <div class="w-full md:w-1/2 flex flex-wrap justify-center py-3">
              <div class="px-1 w-full flex justify-center">
                  <img src="/research/pcu/pcu_snow.png" class="rounded my-2 md:m-0" />
              </div>
              <div class="px-1 w-full flex justify-center">
                  <img src="/research/pcu/pcu_potholes.png" class="rounded my-2 md:m-0" />
              </div>
          </div>
      </div>
  </section>
</template>

<script setup>
const atvcasImages = [
    '/research/atvacs/A2-Detection-Recognition.png',
    '/research/atvacs/A2-Classification-Counting.png',
    '/research/atvacs/FGM-RTL.png',
    '/research/atvacs/VD-RTL.png'
]
const atvcasTags = ['Python', 'Computer Vision', 'Background Subtraction', 'Object Detection', 'Object Recognition', 'Machine Learning', 'Artificial Neural Networks', 'You Only Look Once (YOLO)']

const pcuTags = ['PCU', 'Road Surface Conditions', 'Snowy Roads', 'Potholes', 'Car', 'LCV', 'Bus', 'Truck']
</script>
