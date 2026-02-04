<template>
    <section id="courses" class="container mx-auto px-4 py-16 scroll-mt-12">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Courses</span>
        </h2>

        <div class="flex justify-center mb-10">
            <a href="/assets/API-Server-Development-in-Rust-with-Actix-Web-SQLx-and-JWT.pdf"
                class="inline-flex items-center gap-2 px-6 py-3 bg-orange-50 text-orange-700 rounded-full border border-orange-200 hover:bg-orange-100 transition-colors font-medium">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Download Course Curriculum
            </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a v-for="course in courses" :key="course.title" :href="course.url" target="_blank" rel="noopener"
                class="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div class="relative h-48 overflow-hidden">
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
                </div>

                <div class="p-6 flex-1 flex flex-col">
                    <h3
                        class="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {{ course.title }}
                    </h3>

                    <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-1">
                        {{ course.description }}
                    </p>

                    <div
                        class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 text-orange-700 dark:text-orange-400 font-bold group-hover:text-orange-800 dark:group-hover:text-orange-300 flex items-center gap-1">
                        Enroll Now
                        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </a>
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
        rating: 4.5
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
