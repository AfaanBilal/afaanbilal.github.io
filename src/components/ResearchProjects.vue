<template>
    <section id="research-projects" class="w-full py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Research Projects
                </span>
            </h2>

            <div class="space-y-12">
                <!-- ATVACS -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div class="md:flex">
                        <!-- Creative Image Section -->
                        <div
                            class="md:w-1/2 relative min-h-[400px] flex items-center justify-center bg-black/20 overflow-hidden group/images">
                            <!-- Background Glow -->
                            <div
                                class="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-3xl opacity-50 group-hover/images:animate-pulse">
                            </div>

                            <!-- Scattered Images -->
                            <div
                                class="absolute w-64 h-40 rounded-lg shadow-2xl border-2 border-gray-700/50 transform -rotate-12 -translate-y-16 -translate-x-12 group-hover/images:rotate-0 group-hover/images:scale-105 group-hover/images:z-10 transition-all duration-500 cursor-pointer">
                                <img :src="atvcasImages[0]" class="w-full h-full object-cover rounded-lg"
                                    alt="Detection" />
                            </div>
                            <div
                                class="absolute w-64 h-40 rounded-lg shadow-2xl border-2 border-gray-700/50 transform rotate-6 -translate-y-8 translate-x-10 group-hover/images:rotate-0 group-hover/images:scale-105 group-hover/images:z-10 transition-all duration-500 cursor-pointer">
                                <img :src="atvcasImages[1]" class="w-full h-full object-cover rounded-lg"
                                    alt="Classification" />
                            </div>
                            <div
                                class="absolute w-64 h-40 rounded-lg shadow-2xl border-2 border-gray-700/50 transform -rotate-3 translate-y-12 -translate-x-4 group-hover/images:rotate-0 group-hover/images:scale-105 group-hover/images:z-10 transition-all duration-500 cursor-pointer">
                                <img :src="atvcasImages[2]" class="w-full h-full object-cover rounded-lg" alt="RTL" />
                            </div>
                            <div
                                class="absolute w-64 h-40 rounded-lg shadow-2xl border-2 border-gray-700/50 transform rotate-12 translate-y-24 translate-x-8 group-hover/images:rotate-0 group-hover/images:scale-105 group-hover/images:z-10 transition-all duration-500 cursor-pointer">
                                <img :src="atvcasImages[3]" class="w-full h-full object-cover rounded-lg" alt="VD" />
                            </div>
                        </div>

                        <div class="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                            <div class="mb-4">
                                <span class="text-xs font-bold tracking-wider uppercase text-purple-400">
                                    Research Study
                                </span>
                                <h3 class="text-3xl font-bold text-white mt-1 mb-2">ATVACS</h3>
                                <p class="text-lg text-gray-300">
                                    Automated Traffic Volume Classification & Analysis System
                                </p>
                            </div>

                            <div class="flex flex-wrap gap-2 mb-8">
                                <span v-for="item in atvcasTags" :key="item"
                                    class="px-3 py-1 bg-purple-900/30 text-purple-300 border border-purple-500/30 text-sm rounded-full font-medium">
                                    {{ item }}
                                </span>
                            </div>

                            <a href="https://www.researchgate.net/publication/350054733_Automated_Traffic_Volume_Classification_and_Analysis_System_ATVCAS_A_Comparison_of_Methodologies"
                                target="_blank" rel="noopener"
                                class="inline-flex items-center text-purple-400 font-bold hover:text-purple-300 transition-colors group z-10">
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
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div class="md:flex flex-row-reverse">
                        <!-- Creative Image Section -->
                        <div
                            class="md:w-1/2 relative min-h-[350px] flex items-center justify-center bg-black/20 group/images">
                            <div
                                class="absolute w-64 h-64 bg-pink-600/20 rounded-full blur-3xl opacity-50 group-hover/images:animate-pulse">
                            </div>

                            <div
                                class="absolute w-80 h-56 rounded-xl shadow-2xl border-2 border-gray-700/50 transform -rotate-6 -translate-x-6 z-10 group-hover/images:rotate-0 group-hover/images:scale-105 transition-all duration-500">
                                <img src="/research/pcu/pcu_snow.png" class="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div
                                class="absolute w-80 h-56 rounded-xl shadow-2xl border-2 border-gray-700/50 transform rotate-6 translate-x-6 translate-y-4 z-0 group-hover/images:rotate-0 group-hover/images:translate-x-0 group-hover:translate-y-0 group-hover:scale-105 transition-all duration-500">
                                <img src="/research/pcu/pcu_potholes.png"
                                    class="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>

                        <div class="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                            <div class="mb-4">
                                <span class="text-xs font-bold tracking-wider uppercase text-pink-400">
                                    B.Tech Thesis
                                </span>
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
