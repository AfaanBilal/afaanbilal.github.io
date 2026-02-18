<template>
    <section id="books" class="container mx-auto px-4 py-16 md:py-24 scroll-mt-12">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4 animate-fade-in-up">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Books</span>
        </h2>
        <p
            class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-12 animate-fade-in-up delay-100">
            Comprehensive guides and handbooks for mastering modern technology.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <div v-for="book in books" :key="book.title"
                class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">

                <a :href="book.url" target="_blank" rel="noopener"
                    class="relative h-64 overflow-hidden block bg-gray-100 dark:bg-gray-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img :src="book.image" :alt="book.title" loading="lazy"
                        class="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute bottom-4 left-4 z-20">
                        <span
                            class="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded uppercase tracking-wide">PDF</span>
                    </div>
                </a>

                <div class="p-6 flex-1 flex flex-col">
                    <a :href="book.url" target="_blank" rel="noopener">
                        <h3
                            class="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {{ book.title }}
                        </h3>
                    </a>

                    <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-1">
                        {{ book.description }}
                    </p>

                    <div
                        class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between gap-4">
                        <a :href="book.url" target="_blank" rel="noopener"
                            class="text-blue-700 dark:text-blue-400 font-bold group-hover:text-blue-800 dark:group-hover:text-blue-300 flex items-center gap-1">
                            Get the Book
                            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const books = [
    {
        title: "The Cloud Security Architect's Handbook",
        url: 'https://cloud-security-handbook.afaan.dev/',
        image: '/images/cloud-security-architect-handbook-cover.jpg',
        description: 'Master advanced architectural patterns, automation strategies, and future-proofing techniques for securing cloud environments at scale.',
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
