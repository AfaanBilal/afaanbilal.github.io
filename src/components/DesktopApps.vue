<template>
    <section id="desktop-apps" class="container mx-auto px-4 py-16">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500">Desktop Apps</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="app in apps" :key="app.name"
                class="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div class="relative overflow-hidden h-40 bg-gray-50 flex items-center justify-center p-4">
                    <img :src="app.image" :alt="app.name"
                        class="max-h-full w-full object-contain transform group-hover:scale-105 transition-transform duration-500 rounded" />
                </div>

                <div class="p-6 flex-1 flex flex-col">
                    <h3
                        class="text-lg font-bold text-gray-800 dark:text-white mb-4 group-hover:text-gray-600 transition-colors text-center">
                        {{ app.name }}</h3>

                    <div class="flex justify-center flex-wrap gap-2 mt-auto">
                        <span v-for="tech in app.tech" :key="tech"
                            class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md font-medium">
                            {{ tech }}
                        </span>
                    </div>

                    <a :href="app.link" target="_blank" rel="noopener"
                        class="mt-4 block w-full py-2 text-center text-sm font-bold border border-gray-200 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
                        View Project
                    </a>
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
