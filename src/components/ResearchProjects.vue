<template>
    <section id="research-projects" class="w-full py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Research
                    Projects</span>
            </h2>

            <div class="space-y-12">
                <!-- ATVACS -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1">
                    <div class="md:flex">
                        <div class="md:w-1/2 p-2 grid grid-cols-2 gap-2 bg-black/40">
                            <div v-for="(img, idx) in atvcasImages" :key="idx"
                                class="rounded-lg overflow-hidden h-40 border border-gray-800">
                                <img :src="img"
                                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100"
                                    alt="Research Image" />
                            </div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                            <div class="mb-4">
                                <span class="text-xs font-bold tracking-wider uppercase text-purple-400">B.Tech
                                    Thesis</span>
                                <h3 class="text-3xl font-bold text-white mt-1 mb-2">ATVACS</h3>
                                <p class="text-lg text-gray-300">Automated Traffic Volume Classification & Analysis
                                    System</p>
                            </div>

                            <div class="flex flex-wrap gap-2 mb-8">
                                <span v-for="item in atvcasTags" :key="item"
                                    class="px-3 py-1 bg-purple-900/30 text-purple-300 border border-purple-500/30 text-sm rounded-full font-medium">
                                    {{ item }}
                                </span>
                            </div>

                            <a href="https://www.researchgate.net/publication/350054733_Automated_Traffic_Volume_Classification_and_Analysis_System_ATVCAS_A_Comparison_of_Methodologies"
                                target="_blank" rel="noopener"
                                class="inline-flex items-center text-purple-400 font-bold hover:text-purple-300 transition-colors group">
                                View Publication
                                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- PCU Study -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1">
                    <div class="md:flex flex-row-reverse">
                        <div class="md:w-1/2 p-2 grid grid-cols-2 gap-2 bg-black/40">
                            <div class="rounded-lg overflow-hidden h-48 w-full border border-gray-800">
                                <img src="/research/pcu/pcu_snow.png"
                                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100" />
                            </div>
                            <div class="rounded-lg overflow-hidden h-48 w-full border border-gray-800">
                                <img src="/research/pcu/pcu_potholes.png"
                                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100" />
                            </div>
                        </div>
                        <div class="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                            <div class="mb-4">
                                <span class="text-xs font-bold tracking-wider uppercase text-pink-400">Research
                                    Study</span>
                                <h3 class="text-3xl font-bold text-white mt-1 mb-2">Impact on PCU</h3>
                                <p class="text-lg text-gray-300">Effect of Road Surface Conditions on PCU Values</p>
                            </div>

                            <div class="flex flex-wrap gap-2 mb-8">
                                <span v-for="item in pcuTags" :key="item"
                                    class="px-3 py-1 bg-pink-900/30 text-pink-300 border border-pink-500/30 text-sm rounded-full font-medium">
                                    {{ item }}
                                </span>
                            </div>

                            <div class="text-gray-500 italic">Published Research @ NIT Srinagar</div>
                        </div>
                    </div>
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
const atvcasTags = ['Python', 'Computer Vision', 'Deep Learning', 'YOLO', 'Neural Networks', 'Traffic Analysis']

const pcuTags = ['Traffic Engineering', 'Road Conditions', 'Data Analysis', 'PCU Estimation', 'Research']
</script>
