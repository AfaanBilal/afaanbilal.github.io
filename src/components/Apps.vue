<template>
    <section id="apps" class="w-full py-16 scroll-mt-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                        Apps & Projects
                    </span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4 animate-fade-in-up delay-100">
                    Showcasing secure, scalable, and high-performance applications.
                </p>

                <!-- Filter Controls -->
                <div class="flex flex-col md:flex-row items-center justify-between gap-6 mt-8 animate-fade-in-up">
                    <!-- Category Tabs -->
                    <div class="flex flex-wrap justify-center gap-2">
                        <button v-for="category in categories" :key="category" @click="selectedCategory = category"
                            class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                            :class="selectedCategory === category
                                ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg shadow-blue-500/30 transform scale-105'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'">
                            {{ category }}
                        </button>
                    </div>

                    <!-- Search Bar -->
                    <div class="relative w-full md:w-64 group">
                        <div
                            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input v-model="searchQuery" type="text" placeholder="Search projects..."
                            class="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm group-hover:shadow-md text-gray-700 dark:text-gray-200 placeholder-gray-400" />
                        <button v-if="searchQuery" @click="searchQuery = ''"
                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer">
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Tech Filters -->
                <div class="flex flex-wrap justify-center gap-2 mt-6 animate-fade-in-up delay-100"
                    v-if="allTechs.length > 0">
                    <button v-for="tech in allTechs" :key="tech" @click="toggleTech(tech)"
                        class="px-3 py-1 text-xs rounded-md transition-all duration-300 border cursor-pointer"
                        :class="selectedTech === tech
                            ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50'
                            : 'bg-transparent text-gray-500 dark:text-gray-400 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800'">
                        {{ tech }}
                    </button>
                    <button v-if="selectedTech" @click="selectedTech = null"
                        class="px-3 py-1 text-xs rounded-md text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer flex items-center gap-1">
                        <span>Clear</span>
                        <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <!-- Empty State -->
                <div v-if="filteredApps.length === 0" class="col-span-full py-20 text-center animate-fade-in-up">
                    <div
                        class="inline-flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                        <svg class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
                    <p class="text-gray-500 max-w-md mx-auto">
                        We couldn't find any projects matching your search. Try adjusting filters or search terms.
                    </p>
                    <button @click="clearAllFilters"
                        class="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
                        Clear Filters
                    </button>
                </div>

                <transition-group name="list">
                    <div v-for="app in visibleApps" :key="app.name"
                        class="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">

                        <!-- Image Section -->
                        <div class="relative overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-gray-900">
                            <img :src="app.image" :alt="app.name" loading="lazy"
                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />

                            <!-- Overlay Actions -->
                            <div
                                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a v-if="app.link" :href="app.link" target="_blank" rel="noopener"
                                    aria-label="View Project"
                                    class="p-3 bg-white rounded-full text-black hover:bg-blue-500 hover:text-white transition-colors transform hover:scale-110 shadow-lg"
                                    :title="app.category === 'Web' ? 'Visit Site' : 'View Source'">
                                    <svg v-if="app.category === 'Web'" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </a>

                                <a v-if="app.playStore" :href="app.playStore" target="_blank" rel="noopener"
                                    aria-label="View on Play Store"
                                    class="p-3 bg-white rounded-full text-black hover:bg-green-500 hover:text-white transition-colors transform hover:scale-110 shadow-lg"
                                    title="Get it on Google Play">
                                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.84L14.5,13.41L16.81,15.12M14.5,10.59L6.05,2.15L16.81,8.88L14.5,10.59M18.27,9.96L19.66,10.79V10.8L18.27,11.63L15.65,9.69L18.27,9.96Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Content Section -->
                        <div class="p-6 flex-1 flex flex-col">
                            <div class="flex justify-between items-start mb-2">
                                <h3
                                    class="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">
                                    {{ app.name }}
                                </h3>
                                <span class="text-xs px-2 py-1 rounded font-medium" :class="{
                                    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300': app.category === 'Web',
                                    'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300': app.category === 'Mobile',
                                    'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300': app.category === 'Desktop'
                                }">
                                    {{ app.category }}
                                </span>
                            </div>

                            <p v-if="app.domain" class="text-sm text-gray-500 dark:text-gray-400 mb-3 font-mono">
                                {{ app.domain }}
                            </p>

                            <p v-if="app.description"
                                class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                {{ app.description }}
                            </p>

                            <div class="flex flex-wrap gap-2 mt-auto pt-4">
                                <span v-for="tech in app.tech" :key="tech"
                                    class="text-xs px-2 py-1 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-600 rounded-md">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>

            <div v-if="filteredApps.length > initialCount" class="text-center mt-12 animate-fade-in-up">
                <button @click="expanded = !expanded"
                    class="group relative inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                    <span>{{ expanded ? 'Show Less' : 'Show More Projects' }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300"
                        :class="expanded ? 'rotate-180' : 'group-hover:translate-y-1'" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')
const categories = ['All', 'Web', 'Mobile', 'Desktop']

const apps = [
    // Web Apps
    {
        name: 'Koshur Online',
        category: 'Web',
        domain: 'koshur.afaan.dev',
        link: 'https://koshur.afaan.dev',
        image: '/screenshots/koshur.png',
        tech: ['Vue', 'Typescript', 'Tailwind'],
        description: 'Online playground and documentation for the Koshur programming language.'
    },
    {
        name: 'ABACUS',
        category: 'Web',
        domain: 'abacus.afaan.dev',
        link: 'https://abacus.afaan.dev',
        image: 'https://abacus.afaan.dev/screenshots/abacus-hero.png',
        tech: ['Vue', 'Typescript', 'Tailwind'],
        description: 'Abacus emulator for the web.'
    },
    {
        name: 'Lumina',
        category: 'Web',
        domain: 'lumina.afaan.dev',
        link: 'https://lumina.afaan.dev',
        image: 'https://raw.githubusercontent.com/AfaanBilal/lumina/master/screenshots/lumina-hero.png',
        tech: ['Vue', 'Typescript', 'Tailwind'],
        description: 'Privacy-focused spreadsheet app.'
    },
    {
        name: 'Open Source Summary',
        category: 'Web',
        domain: 'oss.afaan.dev',
        link: 'https://oss.afaan.dev',
        image: '/screenshots/oss.png',
        tech: ['React', 'Typescript', 'Tailwind'],
        description: 'GitHub summary of repositories, languages and organizations.'
    },
    {
        name: 'Parabolic Motion',
        category: 'Web',
        domain: 'afaan.dev/parabolic-motion',
        link: 'https://afaan.dev/parabolic-motion',
        image: 'https://afaan.dev/screenshots/pbm-hero.png',
        tech: ['Javascript', 'Canvas', 'Bootstrap'],
        description: 'Interactive simulation of projectile motion physics.'
    },
    {
        name: 'Game of Life',
        category: 'Web',
        domain: 'afaan.dev/game-of-life',
        link: 'https://afaan.dev/game-of-life',
        image: 'https://afaan.dev/screenshots/gol-hero.png',
        tech: ['Vue', 'Javascript', 'Bootstrap'],
        description: "Implementation of John Conway's cellular automaton."
    },

    // Mobile Apps
    {
        name: 'FxRate',
        category: 'Mobile',
        link: 'https://github.com/AfaanBilal/fxrate',
        image: 'https://raw.githubusercontent.com/AfaanBilal/fxrate/master/screenshots/fxrate-hero.png',
        tech: ['React Native', 'Typescript', 'Expo'],
        playStore: 'https://play.google.com/store/apps/details?id=dev.afaan.fxrate',
        description: 'Free currency exchange rate tracker and converter.'
    },
    {
        name: 'Meeqat',
        category: 'Mobile',
        link: 'https://github.com/AfaanBilal/meeqat',
        image: 'https://raw.githubusercontent.com/AfaanBilal/meeqat/master/screenshots/meeqat-hero.png',
        tech: ['React Native', 'Typescript', 'Expo'],
        description: 'Local prayer times for Muslims.'
    },
    {
        name: 'One Dua',
        category: 'Mobile',
        link: 'https://github.com/AfaanBilal/one-dua',
        image: 'https://raw.githubusercontent.com/AfaanBilal/one-dua/master/screenshots/one-dua.png',
        tech: ['React Native', 'Typescript', 'Expo'],
        description: 'A collection of supplications (Duas).'
    },
    {
        name: 'Whisper',
        category: 'Mobile',
        link: 'https://github.com/AfaanBilal/whisper-app',
        image: 'https://raw.githubusercontent.com/AfaanBilal/whisper-app/master/screenshots/whisper.png',
        tech: ['React Native', 'Typescript', 'Expo'],
        description: 'A simple micro-blogging app and backend.'
    },
    {
        name: 'Word Hunt',
        category: 'Mobile',
        link: 'https://github.com/AfaanBilal/word_hunt',
        image: 'https://afaan.dev/screenshots/word_hunt.png',
        tech: ['Flutter', 'Dart'],
        description: 'Classic word search puzzle game built with Flutter.'
    },
    {
        name: 'Statistical Analysis',
        category: 'Mobile',
        link: 'https://github.com/AfaanBilal/Statistical-Analysis-Android',
        image: 'https://afaan.dev/screenshots/Statistical-Analysis.png',
        tech: ['Java', 'Android'],
        description: 'Android app for performing various statistical calculations.'
    },

    // Desktop Apps
    {
        name: 'AMX TextEdit',
        category: 'Desktop',
        link: 'https://afaan.dev/AMX-TextEdit',
        image: 'https://afaan.dev/screenshots/amx-textedit.png',
        tech: ['C++', 'wxWidgets'],
        description: 'Fast and lightweight text editor built with C++ and wxWidgets.'
    },
    {
        name: 'Central Limit',
        category: 'Desktop',
        link: 'https://github.com/AfaanBilal/central-limit',
        image: 'https://raw.githubusercontent.com/AfaanBilal/central-limit/master/assets/central-limit-hero.png',
        tech: ['Rust', 'TUI'],
        description: 'Visual demonstration of the Central Limit Theorem.'
    },
    {
        name: 'Sorting Visualizer',
        category: 'Desktop',
        link: 'https://github.com/AfaanBilal/sorting-visualizer',
        image: 'https://raw.githubusercontent.com/AfaanBilal/sorting-visualizer/master/screenshots/sorting-visualizer-hero.png',
        tech: ['Rust', 'TUI'],
        description: 'Visualizer for common sorting algorithms.'
    },
    {
        name: 'OpenGL Testbench',
        category: 'Desktop',
        link: 'https://github.com/AfaanBilal/OpenGLTestbench',
        image: 'https://raw.githubusercontent.com/AfaanBilal/OpenGLTestbench/master/assets/opengl-testbench.png',
        tech: ['C++', 'OpenGL'],
        description: 'Testing environment for OpenGL rendering experimentation.'
    }
]

const searchQuery = ref('')
const selectedTech = ref(null)

const allTechs = computed(() => {
    const techs = new Set()
    apps.forEach(app => {
        app.tech.forEach(t => techs.add(t))
    })
    return Array.from(techs).sort()
})

const toggleTech = (tech) => {
    if (selectedTech.value === tech) {
        selectedTech.value = null
    } else {
        selectedTech.value = tech
    }
}

const clearAllFilters = () => {
    searchQuery.value = ''
    selectedCategory.value = 'All'
    selectedTech.value = null
}

const filteredApps = computed(() => {
    return apps.filter(app => {
        // Category Filter
        const matchCategory = selectedCategory.value === 'All' || app.category === selectedCategory.value

        // Search Filter
        const query = searchQuery.value.toLowerCase().trim()
        const matchSearch = !query ||
            app.name.toLowerCase().includes(query) ||
            app.description.toLowerCase().includes(query) ||
            app.tech.some(t => t.toLowerCase().includes(query))

        // Tech Filter
        const matchTech = !selectedTech.value || app.tech.includes(selectedTech.value)

        return matchCategory && matchSearch && matchTech
    })
})

const expanded = ref(false)
const initialCount = 10

const visibleApps = computed(() => {
    if (expanded.value) return filteredApps.value
    return filteredApps.value.slice(0, initialCount)
})
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

<style scoped>
.delay-100 {
    animation-delay: 0.2s;
}
</style>
