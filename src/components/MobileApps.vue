<template>
    <section id="mobile-apps" class="w-full py-16 bg-gradient-to-br from-gray-900 to-black text-white scroll-mt-12">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Mobile
                    Apps</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="app in apps" :key="app.name"
                    class="group bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div class="relative overflow-hidden h-48 bg-black/40 border-b border-gray-800">
                        <img :src="app.image" :alt="app.name"
                            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <div
                            class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            <a :href="app.link" target="_blank" rel="noopener"
                                class="p-3 bg-white rounded-full text-black hover:bg-green-500 hover:text-white transition-colors transform hover:scale-110">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </a>
                            <a v-if="app.playStore" :href="app.playStore" target="_blank" rel="noopener"
                                class="p-3 bg-white rounded-full text-black hover:bg-green-500 hover:text-white transition-colors transform hover:scale-110">
                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.84L14.5,13.41L16.81,15.12M14.5,10.59L6.05,2.15L16.81,8.88L14.5,10.59M18.27,9.96L19.66,10.79V10.8L18.27,11.63L15.65,9.69L18.27,9.96Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="p-6 flex-1 flex flex-col">
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                            {{ app.name }}</h3>

                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span v-for="tech in app.tech" :key="tech"
                                class="text-xs px-2 py-1 bg-green-900/30 text-green-300 border border-green-500/30 rounded-md font-medium">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const apps = [
    {
        name: 'FxRate',
        link: 'https://github.com/AfaanBilal/fxrate',
        image: 'https://raw.githubusercontent.com/AfaanBilal/fxrate/master/screenshots/fxrate-hero.png',
        tech: ['React Native', 'Typescript', 'Expo'],
        playStore: 'https://play.google.com/store/apps/details?id=dev.afaan.fxrate'
    },
    {
        name: 'Meeqat',
        link: 'https://github.com/AfaanBilal/meeqat',
        image: 'https://raw.githubusercontent.com/AfaanBilal/meeqat/master/screenshots/meeqat-hero.png',
        tech: ['React Native', 'Typescript', 'Expo']
    },
    {
        name: 'One Dua',
        link: 'https://github.com/AfaanBilal/one-dua',
        image: 'https://raw.githubusercontent.com/AfaanBilal/one-dua/master/screenshots/one-dua.png',
        tech: ['React Native', 'Typescript', 'Expo']
    },
    {
        name: 'Whisper',
        link: 'https://github.com/AfaanBilal/whisper-app',
        image: 'https://raw.githubusercontent.com/AfaanBilal/whisper-app/master/screenshots/whisper.png',
        tech: ['React Native', 'Typescript', 'Expo']
    },
    {
        name: 'Word Hunt',
        link: 'https://github.com/AfaanBilal/word_hunt',
        image: 'https://afaan.dev/screenshots/word_hunt.png',
        tech: ['Flutter', 'Dart']
    },
    {
        name: 'Statistical Analysis',
        link: 'https://github.com/AfaanBilal/Statistical-Analysis-Android',
        image: 'https://afaan.dev/screenshots/Statistical-Analysis.png',
        tech: ['Java', 'Android']
    }
]
</script>
