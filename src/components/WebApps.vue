<template>
    <section id="web-apps" class="container mx-auto px-4 py-16">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Web Apps</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="app in apps" :key="app.name"
                class="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div class="relative overflow-hidden h-48 bg-gray-50 dark:bg-gray-900">
                    <img :src="app.image" :alt="app.name"
                        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    <div
                        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a :href="app.link" target="_blank" rel="noopener"
                            class="px-6 py-2 bg-white text-gray-900 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-colors transform scale-90 group-hover:scale-100 duration-300">
                            Visit Site
                        </a>
                    </div>
                </div>

                <div class="p-6 flex-1 flex flex-col">
                    <div class="flex justify-between items-start mb-2">
                        <h3
                            class="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                            {{ app.name }}</h3>
                        <span
                            class="text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 px-2 py-1 rounded">{{
                                app.domain }}</span>
                    </div>

                    <div class="flex flex-wrap gap-2 mt-auto pt-4">
                        <span v-for="tech in app.tech" :key="tech"
                            class="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md font-medium">
                            {{ tech }}
                        </span>
                    </div>
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
