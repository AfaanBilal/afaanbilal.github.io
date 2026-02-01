<template>
    <nav class="fixed top-0 w-full z-50 transition-all duration-300"
        :class="{ 'bg-white/80 backdrop-blur-md shadow-md py-2': scrolled, 'bg-transparent py-4': !scrolled }">
        <div class="container mx-auto px-6 flex justify-between items-center">

            <!-- Logo / Brand -->
            <a href="/"
                class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Afaan Bilal
            </a>

            <!-- Mobile Menu Button -->
            <button @click="isOpen = !isOpen"
                class="md:hidden text-gray-700 hover:text-purple-600 focus:outline-none transition-colors">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Desktop Links -->
            <div class="hidden md:flex space-x-1">
                <a v-for="(link, index) in links" :key="index" :href="link.to"
                    class="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all">
                    {{ link.text }}
                </a>
            </div>

            <!-- Mobile Menu Overlay -->
            <transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2">
                <div v-if="isOpen"
                    class="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl md:hidden flex flex-col p-4 space-y-2 border-t border-gray-100">
                    <a v-for="(link, index) in links" :key="index" :href="link.to" @click="isOpen = false"
                        class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium transition-colors">
                        {{ link.text }}
                    </a>
                </div>
            </transition>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
    scrolled.value = window.scrollY > 20
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const links = [
    { text: 'Courses', to: '/#courses' },
    { text: 'NanoCore', to: '/#nanocore' },
    { text: 'HyperDB', to: '/#hyperdb' },
    { text: 'Open Source', to: '/#open-source' },
    { text: 'Skills', to: '/#skills' },
    { text: 'Research', to: '/#research-projects' },
    { text: 'Apps', to: '/#mobile-apps' },
    { text: 'Contact', to: '/#contact' }
]
</script>
