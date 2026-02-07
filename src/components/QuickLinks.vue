<template>
    <section id="quick-links"
        class="w-full py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white scroll-mt-12">
        <div class="container mx-auto px-4">
            <h2 class="text-5xl font-bold text-center mb-4 animate-fade-in-up">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    Quick Links
                </span>
            </h2>
            <p class="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-16 animate-fade-in-up delay-100">
                Instant access to documentation, tools, and live projects.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <a v-for="link in links" :key="link.title" :href="link.url" target="_blank" rel="noopener"
                    class="group bg-gray-800/40 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start relative overflow-hidden">

                    <!-- Hover Glow Effect -->
                    <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br"
                        :class="link.glowClass"></div>

                    <div class="flex items-center justify-between w-full mb-4 relative z-10">
                        <div
                            class="p-3 rounded-lg bg-gray-900/50 group-hover:bg-gray-900/80 transition-colors border border-gray-700 group-hover:border-gray-600">
                            <svg class="w-6 h-6 transition-colors duration-300" :class="link.iconClass" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="link.icon" />
                            </svg>
                        </div>
                        <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>

                    <h3 class="text-xl font-bold text-white mb-2 relative z-10 transition-colors duration-300"
                        :class="link.titleHoverClass">
                        {{ link.title }}
                    </h3>

                    <p
                        class="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                        {{ link.desc }}
                    </p>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const links = [
    {
        title: 'NanoCore Docs',
        url: 'https://deepwiki.com/AfaanBilal/NanoCore',
        desc: 'Deep dive into 8-bit CPU architecture emulator.',
        iconClass: 'text-green-400',
        titleHoverClass: 'group-hover:text-green-400',
        glowClass: 'from-green-400 to-transparent',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
    },
    {
        title: 'HyperDB Docs',
        url: 'https://afaan.dev/hyperdb-docs',
        desc: 'In-memory hyper-fast key-value store documentation.',
        iconClass: 'text-purple-400',
        titleHoverClass: 'group-hover:text-purple-400',
        glowClass: 'from-purple-400 to-transparent',
        icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
    },
    {
        title: 'Koshur Playground',
        url: 'https://koshur.afaan.dev',
        desc: 'Write and run Koshur code directly in your browser.',
        iconClass: 'text-orange-400',
        titleHoverClass: 'group-hover:text-orange-400',
        glowClass: 'from-orange-400 to-transparent',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
        title: '#solid-talk',
        url: '/solid-talk',
        desc: 'A simple chatroom built using SolidJS and SocketIO.',
        iconClass: 'text-blue-400',
        titleHoverClass: 'group-hover:text-blue-400',
        glowClass: 'from-blue-400 to-transparent',
        icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    },
    {
        title: 'Pulse',
        url: '/pulse',
        desc: 'An experiment in reactivity and state management.',
        iconClass: 'text-red-400',
        titleHoverClass: 'group-hover:text-red-400',
        glowClass: 'from-red-400 to-transparent',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
        title: 'Iron Guard',
        url: 'https://iron-guard.afaan.dev',
        desc: 'Inventory system built with Rust, SolidJS and Tailwind.',
        iconClass: 'text-cyan-400',
        titleHoverClass: 'group-hover:text-cyan-400',
        glowClass: 'from-cyan-400 to-transparent',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
        title: 'Books and Games',
        url: '/books-and-games',
        desc: 'Curated list of books read and games played.',
        iconClass: 'text-yellow-400',
        titleHoverClass: 'group-hover:text-yellow-400',
        glowClass: 'from-yellow-400 to-transparent',
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
    {
        title: 'Secure Message',
        url: '/secure-message',
        desc: 'A simple demo of symmetric encryption.',
        iconClass: 'text-indigo-400',
        titleHoverClass: 'group-hover:text-indigo-400',
        glowClass: 'from-indigo-400 to-transparent',
        icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
        title: 'Regression Demo',
        url: 'https://simple-linear-regression.streamlit.app',
        desc: 'Simple linear regression demo using Streamlit.',
        iconClass: 'text-pink-400',
        titleHoverClass: 'group-hover:text-pink-400',
        glowClass: 'from-pink-400 to-transparent',
        icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
    },
    {
        title: 'Lumina',
        url: 'https://lumina.afaan.dev',
        desc: 'A privacy-friendly, customizable personal spreadsheet.',
        iconClass: 'text-violet-400',
        titleHoverClass: 'group-hover:text-violet-400',
        glowClass: 'from-violet-400 to-transparent',
        icon: 'M3 3h18v18H3V3zm18 6H3m0 6h18M9 3v18m6-18v18'
    },
    {
        title: 'Abacus',
        url: 'https://abacus.afaan.dev',
        desc: 'A simple, yet powerful calculator for the web.',
        iconClass: 'text-fuchsia-400',
        titleHoverClass: 'group-hover:text-fuchsia-400',
        glowClass: 'from-fuchsia-400 to-transparent',
        icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
    },
    {
        title: 'Open Source Summary',
        url: 'https://oss.afaan.dev',
        desc: 'Building for the community with 150+ open source projects.',
        iconClass: 'text-slate-300',
        titleHoverClass: 'group-hover:text-white',
        glowClass: 'from-slate-500 to-transparent',
        icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z'
    }
]
</script>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out forwards;
}

.delay-100 {
    animation-delay: 0.2s;
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
