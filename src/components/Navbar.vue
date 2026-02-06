<template>
    <nav class="fixed top-0 w-full z-50 transition-all duration-300"
        :class="{ 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2 text-gray-800 dark:text-gray-200': scrolled, 'bg-transparent py-4 text-gray-200': !scrolled }">
        <div class="container mx-auto px-6 flex justify-between items-center">

            <!-- Logo / Brand -->
            <a href="/"
                class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Afaan Bilal
            </a>

            <!-- Mobile Menu Button -->
            <button @click="isOpen = !isOpen" :aria-expanded="isOpen" aria-label="Toggle navigation menu"
                class="md:hidden text-gray-700 dark:text-gray-300 hover:text-purple-600 focus:outline-none transition-colors">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Desktop Links -->
            <div class="hidden md:flex space-x-1 items-center">
                <a v-for="(link, index) in links" :key="index" :href="link.to"
                    class="px-3 py-2 rounded-lg text-sm font-medium hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 transition-all">
                    {{ link.text }}
                </a>

                <!-- Command Palette Trigger -->
                <button @click="openCommandPalette"
                    class="ml-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs text-gray-500 hover:border-purple-300 dark:hover:border-purple-700 transition-colors flex items-center gap-2 group">
                    <span>Search</span>
                    <kbd
                        class="hidden lg:inline-block font-mono bg-white dark:bg-gray-700 rounded px-1.5 py-0.5 text-xs group-hover:text-purple-500 transition-colors">Ctrl
                        K</kbd>
                </button>

                <!-- Theme Toggle -->
                <button @click="toggleTheme"
                    class="ml-2 p-2 cursor-pointer rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 text-purple-600 dark:text-purple-400 transition-colors"
                    aria-label="Toggle Theme">
                    <svg v-if="!isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu Overlay -->
            <transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2">
                <div v-if="isOpen"
                    class="absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl md:hidden flex flex-col p-4 space-y-2 border-t border-gray-100 dark:border-gray-800">
                    <a v-for="(link, index) in links" :key="index" :href="link.to" @click="isOpen = false"
                        class="block px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 font-medium transition-colors">
                        {{ link.text }}
                    </a>

                    <!-- Mobile Theme Toggle -->
                    <button @click="toggleTheme"
                        class="flex cursor-pointer items-center w-full px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 font-medium transition-colors">
                        <span class="mr-2">{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
                        <svg v-if="!isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                </div>
            </transition>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)
const isDark = ref(false)

const handleScroll = () => {
    window.requestAnimationFrame(() => {
        scrolled.value = window.scrollY > 20
    })
}

const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    // Initialize theme based on local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
        document.documentElement.classList.add('dark')
    } else {
        isDark.value = false
        document.documentElement.classList.remove('dark')
    }
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const links = [
    { text: 'NanoCore', to: '/#nanocore' },
    { text: 'HyperDB', to: '/#hyperdb' },
    { text: 'Koshur', to: '/#koshur' },
    { text: 'Skills', to: '/#skills' },
    { text: 'Open Source', to: '/#open-source' },
    { text: 'Research', to: '/#research-projects' },
    { text: 'Courses', to: '/#courses' },
    { text: 'Apps', to: '/#apps' },
    { text: 'Contact', to: '/#contact' }
]

const openCommandPalette = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))
}
</script>
