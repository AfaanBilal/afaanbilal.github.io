<template>
    <div id="quick-links" class="container mx-auto px-4 py-16">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">Quick Links</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a v-for="link in links" :key="link.title" :href="link.url" target="_blank" rel="noopener"
                class="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block h-full flex flex-col">
                <div class="flex items-center justify-between mb-4">
                    <h3
                        class="text-xl font-bold text-gray-800 dark:text-white group-hover:text-teal-600 transition-colors">
                        {{ link.title }}</h3>
                    <svg class="w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors transform group-hover:translate-x-1"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm flex-1">
                    {{ link.desc }}
                </p>
            </a>
        </div>
    </div>
</template>

<script setup>
const links = [
    { title: '#solid-talk', url: '/solid-talk', desc: 'A simple chatroom built using SolidJS and SocketIO.' },
    { title: 'Pulse', url: '/pulse', desc: 'An experiment in reactivity.' },
    { title: 'Pulse Demo', url: '/pulse-demo', desc: 'A demo of PulseJS' },
    { title: 'Secure Message', url: '/secure-message', desc: 'A simple demo of symmetric encryption.' },
    { title: 'Books and Games', url: '/books-and-games', desc: 'A list of books I\'ve read and games I\'ve played built with SolidJS and TailwindCSS.' },
    { title: 'Iron Guard', url: 'https://iron-guard.afaan.dev', desc: 'An inventory management system built with Rust, SolidJS and TailwindCSS.' },
    { title: 'Simple Linear Regression', url: 'https://simple-linear-regression.streamlit.app', desc: 'A quick simple linear regression demo using Streamlit.' },
]
</script>
