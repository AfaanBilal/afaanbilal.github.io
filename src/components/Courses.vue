<template>
    <section id="courses" class="container mx-auto px-4 py-16 md:py-24 scroll-mt-12">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4 animate-fade-in-up">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Courses</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12 animate-fade-in-up delay-100">
            Professional training in backend development, security, and system architecture.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="course in courses" :key="course.title"
                class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">

                <a :href="course.url" target="_blank" rel="noopener" class="relative h-48 overflow-hidden block">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img :src="course.image" :alt="course.title" loading="lazy"
                        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute bottom-4 left-4 z-20">
                        <span
                            class="px-2 py-1 bg-orange-500 text-gray-900 text-xs font-bold rounded uppercase tracking-wide">Udemy</span>
                    </div>
                    <div
                        class="absolute bottom-4 right-4 z-20 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                        <span class="text-yellow-400 font-bold text-sm">{{ course.rating }}</span>
                        <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    </div>
                </a>

                <div class="p-6 flex-1 flex flex-col">
                    <a :href="course.url" target="_blank" rel="noopener">
                        <h3
                            class="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                            {{ course.title }}
                        </h3>
                    </a>

                    <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-1">
                        {{ course.description }}
                    </p>

                    <div
                        class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between gap-4">
                        <a :href="course.url" target="_blank" rel="noopener"
                            class="text-orange-700 dark:text-orange-400 font-bold group-hover:text-orange-800 dark:group-hover:text-orange-300 flex items-center gap-1">
                            Enroll Now
                            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <a v-if="course.curriculum" :href="course.curriculum" target="_blank"
                            class="text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-3 py-1.5 rounded-lg border border-orange-100 dark:border-orange-800/30 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors flex items-center gap-2"
                            title="Download Course Curriculum">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Curriculum
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const courses = [
    {
        title: 'Creating an API server in Rust with Actix, SQLx and JWT',
        url: 'https://www.udemy.com/course/rust-api-server-actix-sqlx-jwt/?referralCode=0C3C85FE260C2016C334',
        image: '/images/udemy-rust-actix-sqlx-course.png',
        description: 'Build your own REST API server with the safety and performance of Rust using Actix Web, SQLx and JWT authentication.',
        rating: 4.5,
        curriculum: '/assets/API-Server-Development-in-Rust-with-Actix-Web-SQLx-and-JWT.pdf'
    },
    {
        title: 'Creating an API server in Rust with Rocket, SeaORM and JWT',
        url: 'https://www.udemy.com/course/rest-api-server-rust-rocket-seaorm-jwt/?referralCode=0A41F1674B329B330B9F',
        image: '/images/udemy-rust-rest-course.jpg',
        description: 'Build your own REST API server with the safety and performance of Rust using Rocket, SeaORM and JWT authentication.',
        rating: 4.5
    },
    {
        title: 'Creating a REST API server with PHP, Laravel and MySQL',
        url: 'https://www.udemy.com/course/laravel-rest-api-server/?referralCode=AE00F1CF28608CD5F56E',
        image: '/images/udemy-laravel-rest-course.png',
        description: 'Project-based guide to creating production-ready Laravel REST API servers including authentication, route-model binding, pagination, sorting, searching and more.',
        rating: 4.6
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
