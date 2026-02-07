<template>
    <section id="research-projects"
        class="w-full py-16 bg-gradient-to-br from-gray-900 to-black text-white scroll-mt-12">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Research Projects
                </span>
            </h2>
            <p class="text-center text-gray-400 text-lg mb-12 -mt-8 max-w-2xl mx-auto">
                Applied research exploring systems, performance, and real-world constraints.
            </p>

            <div class="space-y-12">
                <!-- ATVACS -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div class="md:flex">
                        <!-- Creative Image Section -->
                        <div
                            class="md:w-1/2 relative min-h-[500px] flex items-center justify-center bg-black/20 overflow-hidden group/images">
                            <!-- Background Glow -->
                            <div
                                class="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-3xl opacity-50 group-hover/images:animate-pulse">
                            </div>

                            <!-- Scattered Images (ATVACS) -->
                            <div
                                class="absolute w-64 h-40 rounded-lg shadow-2xl border-2 border-gray-700/50 transform -rotate-12 -translate-y-24 -translate-x-20 group-hover/images:rotate-0 group-hover/images:-translate-x-36 group-hover/images:-translate-y-24 group-hover/images:scale-100 group-hover/images:z-10 transition-all duration-500 ease-out">
                                <img :src="atvcasImages[0]" class="w-full h-full object-cover rounded-lg"
                                    alt="Detection" loading="lazy" />
                            </div>
                            <div
                                class="absolute w-64 h-40 rounded-lg shadow-2xl border-2 border-gray-700/50 transform rotate-6 -translate-y-12 translate-x-24 group-hover/images:rotate-0 group-hover/images:translate-x-36 group-hover/images:-translate-y-24 group-hover/images:scale-100 group-hover/images:z-10 transition-all duration-500 ease-out">
                                <img :src="atvcasImages[1]" class="w-full h-full object-cover rounded-lg"
                                    alt="Classification" loading="lazy" />
                            </div>
                            <div
                                class="absolute w-64 h-40 rounded-lg shadow-2xl border-2 border-gray-700/50 transform -rotate-3 translate-y-16 -translate-x-16 group-hover/images:rotate-0 group-hover/images:-translate-x-36 group-hover/images:translate-y-24 group-hover/images:scale-100 group-hover/images:z-10 transition-all duration-500 ease-out">
                                <img :src="atvcasImages[2]" class="w-full h-full object-cover rounded-lg" alt="RTL"
                                    loading="lazy" />
                            </div>
                            <div
                                class="absolute w-64 h-40 rounded-lg shadow-2xl border-2 border-gray-700/50 transform rotate-12 translate-y-32 translate-x-12 group-hover/images:rotate-0 group-hover/images:translate-x-36 group-hover/images:translate-y-24 group-hover/images:scale-100 group-hover/images:z-10 transition-all duration-500 ease-out">
                                <img :src="atvcasImages[3]" class="w-full h-full object-cover rounded-lg" alt="VD"
                                    loading="lazy" />
                            </div>
                        </div>

                        <div class="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                            <div class="mb-4">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-xs font-bold tracking-wider uppercase text-purple-400">
                                        Research Study
                                    </span>
                                    <span class="text-gray-600 text-xs">•</span>
                                    <span class="text-xs font-bold tracking-wider uppercase text-gray-400">
                                        December 2019
                                    </span>
                                </div>
                                <h3 class="text-3xl font-bold text-white mt-1 mb-2">ATVACS</h3>
                                <p class="text-lg text-gray-300 mb-4">
                                    Automated Traffic Volume Classification & Analysis System
                                </p>

                                <div class="space-y-3 mb-6 text-sm">
                                    <div class="flex items-center gap-3 text-gray-400">
                                        <div
                                            class="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                            </svg>
                                        </div>
                                        <span>Evaluated <span class="text-gray-300">Ultrasonic Sensors</span></span>
                                    </div>
                                    <div class="flex items-center gap-3 text-gray-400">
                                        <div
                                            class="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 0 00-2-2H5a2 2 0 00-2 2v8zm2 3h6M9 9h6" />
                                            </svg>
                                        </div>
                                        <span>Tested <span class="text-gray-300">Background Subtraction</span></span>
                                    </div>
                                    <div class="flex items-center gap-3 text-purple-300">
                                        <div
                                            class="w-6 h-6 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/50 shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-purple-200"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M10 3H6a2 2 0 00-2 2v4m14-4h4a2 2 0 012 2v4M4 14v4a2 2 0 002 2h4m10-6v4a2 2 0 01-2 2h-4m-7 1h.01M12 12h.01M16 12h.01M12 16h.01M8 12h.01M12 8h.01" />
                                            </svg>
                                        </div>
                                        <span>
                                            Settled on <span class="font-bold text-white">Object Detection</span>
                                        </span>
                                    </div>
                                </div>
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

                            <div class="mt-6 pt-6 border-t border-gray-700/50 text-sm text-gray-400 space-y-1">
                                <div><span class="text-purple-400 font-bold">Conference:</span> 5th Conference of
                                    Transportation Research Group of India (CTRG-2019)</div>
                                <div><span class="text-purple-400 font-bold">Location:</span> Bhopal, India</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PCU Study -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div class="md:flex flex-row-reverse">
                        <!-- Creative Image Section -->
                        <div
                            class="md:w-1/2 relative min-h-[450px] flex items-center justify-center bg-black/20 group/images">
                            <div
                                class="absolute w-64 h-64 bg-pink-600/20 rounded-full blur-3xl opacity-50 group-hover/images:animate-pulse">
                            </div>

                            <div
                                class="absolute w-96 rounded-xl shadow-2xl border-2 border-gray-700/50 transform -rotate-6 -translate-x-12 -translate-y-8 z-10 group-hover/images:rotate-0 group-hover/images:-translate-y-24 group-hover/images:translate-x-0 group-hover/images:scale-95 transition-all duration-500 ease-out">
                                <img src="/research/pcu/pcu_snow.png" class="w-full h-full rounded-xl"
                                    alt="Road showing snow conditions" loading="lazy" />
                            </div>
                            <div
                                class="absolute w-96 rounded-xl shadow-2xl border-2 border-gray-700/50 transform rotate-6 translate-x-12 translate-y-12 z-0 group-hover/images:rotate-0 group-hover/images:translate-y-24 group-hover/images:translate-x-0 group-hover/images:scale-95 transition-all duration-500 ease-out">
                                <img src="/research/pcu/pcu_potholes.png" alt="Road showing potholes"
                                    class="w-full h-full rounded-xl" loading="lazy" />
                            </div>
                        </div>

                        <div class="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                            <div class="mb-4">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-xs font-bold tracking-wider uppercase text-pink-400">
                                        B.Tech Thesis
                                    </span>
                                    <span class="text-gray-600 text-xs">•</span>
                                    <span class="text-xs font-bold tracking-wider uppercase text-gray-400">
                                        July 2019
                                    </span>
                                </div>
                                <h3 class="text-3xl font-bold text-white mt-1 mb-2">Impact on PCU</h3>
                                <p class="text-lg text-gray-300 mb-4">Effect of Road Surface Conditions on PCU Values
                                </p>
                                <div class="space-y-3 mb-6">
                                    <div class="flex items-start gap-3">
                                        <div
                                            class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-gray-300 text-sm leading-relaxed">
                                                <span class="text-white font-bold block">Snow Conditions</span>
                                                Increased PCU values by
                                                <span class="text-blue-300 font-bold">100-180%</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-3">
                                        <div
                                            class="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-gray-300 text-sm leading-relaxed">
                                                <span class="text-white font-bold block">Potholes</span>
                                                Caused a <span class="text-red-300 font-bold">60-100%</span>
                                                surge in PCU factors
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
