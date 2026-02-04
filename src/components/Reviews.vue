<template>
    <section id="reviews" class="py-16 scroll-mt-12 bg-white dark:bg-gray-900 relative overflow-hidden">
        <!-- Decorative background elements -->
        <div
            class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-30 dark:opacity-10">
            <div
                class="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob">
            </div>
            <div
                class="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000">
            </div>
            <div
                class="absolute -bottom-8 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000">
            </div>
        </div>

        <div class="container mx-auto px-4 mb-16 relative z-10">
            <h2 class="text-4xl md:text-5xl font-extrabold text-center animate-fade-in-up">
                <span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
                    What Students Say
                </span>
            </h2>
        </div>

        <div class="relative w-full overflow-hidden space-y-8 z-10">
            <!-- Row 1 -->
            <div class="flex gap-6 animate-marquee w-max px-4">
                <div v-for="(review, index) in [...firstRow, ...firstRow]" :key="`r1-${index}`"
                    class="w-[350px] md:w-[450px] flex-shrink-0 group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.05)] border border-gray-100 dark:border-gray-700 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">

                    <!-- Gradient Top Border -->
                    <div
                        class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                    </div>

                    <!-- Quote Icon -->
                    <div
                        class="absolute top-4 right-4 text-gray-100 dark:text-gray-700 group-hover:text-purple-50 dark:group-hover:text-gray-700 transition-colors duration-300">
                        <svg class="w-16 h-16 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                    </div>

                    <div class="flex items-center gap-4 mb-6 relative">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-xl shadow-inner">
                            {{ getInitials(review.name) }}
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-900 dark:text-gray-100 text-base">{{ review.name }}</h4>
                            <p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{
                                review.timeAgo }}</p>
                        </div>
                    </div>

                    <div class="flex text-yellow-400 mb-4 gap-0.5 relative">
                        <template v-for="n in 5" :key="n">
                            <svg v-if="n <= Math.floor(review.rating)" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <svg v-else class="w-4 h-4 text-gray-300 dark:text-gray-600 fill-current"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </template>
                    </div>

                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative line-clamp-4">
                        "{{ review.content }}"
                    </p>
                </div>
            </div>

            <!-- Row 2 -->
            <div class="flex gap-6 animate-marquee w-max px-4" style="animation-delay: -20s;">
                <div v-for="(review, index) in [...secondRow, ...secondRow]" :key="`r2-${index}`"
                    class="w-[350px] md:w-[450px] flex-shrink-0 group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.05)] border border-gray-100 dark:border-gray-700 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden">

                    <!-- Gradient Top Border -->
                    <div
                        class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                    </div>

                    <!-- Quote Icon -->
                    <div
                        class="absolute top-4 right-4 text-gray-100 dark:text-gray-700 group-hover:text-purple-50 dark:group-hover:text-gray-700 transition-colors duration-300">
                        <svg class="w-16 h-16 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                    </div>

                    <div class="flex items-center gap-4 mb-6 relative">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-xl shadow-inner">
                            {{ getInitials(review.name) }}
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-900 dark:text-gray-100 text-base">{{ review.name }}</h4>
                            <p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{
                                review.timeAgo }}</p>
                        </div>
                    </div>

                    <div class="flex text-yellow-400 mb-4 gap-0.5 relative">
                        <template v-for="n in 5" :key="n">
                            <svg v-if="n <= Math.floor(review.rating)" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <svg v-else class="w-4 h-4 text-gray-300 dark:text-gray-600 fill-current"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </template>
                    </div>

                    <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative line-clamp-4">
                        "{{ review.content }}"
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const reviews = [
    {
        name: 'Sebastian',
        rating: 5,
        timeAgo: '6 months ago',
        content: 'This course is highly recommended!'
    },
    {
        name: 'Utkarsh',
        rating: 4,
        timeAgo: '9 months ago',
        content: 'Very good course on Rust Backend Development. Only i feel like instructor volume is little low.'
    },
    {
        name: 'Arief',
        rating: 5,
        timeAgo: '10 months ago',
        content: 'for rust programming beginners like me, this course really helped me in learning Rust'
    },
    {
        name: 'Aliaksei',
        rating: 5,
        timeAgo: '1 year ago',
        content: 'I wanted to take a moment to thank you for the excellent course. It provided a clear, structured approach to building REST API services with Rust. I really appreciate the effort you put into it! It is highly recommended to anyone with experience building similar services in other languages who wants to learn Rust and its frameworks.'
    },
    {
        name: 'Paul',
        rating: 5,
        timeAgo: '1 year ago',
        content: 'I work with APIs every day and it\'s important to know how they really work. This was a fantastic class. Great Job!!'
    },
    {
        name: 'A K M Shafiul',
        rating: 5,
        timeAgo: '1 year ago',
        content: 'The way he did the coding step-by-step, i loved the style.'
    },
    {
        name: 'Emanuel Dickson',
        rating: 5,
        timeAgo: '1 year ago',
        content: 'Correct and precise content'
    },
    {
        name: 'Otis',
        rating: 4, // 4.5 visually but keeping simple integer for loop unless I implement half star svg
        timeAgo: '1 year ago',
        content: 'The materials were well presented and easy to follow. It might have helped to have some more detail about the environment setup ahead of the course.'
    },
    {
        name: 'Pedro Victor',
        rating: 5, // 4.5 -> 5 for visual impact
        timeAgo: '1 year ago',
        content: 'this course is just awesome. It\'s simple and straight to the point. You can tell it\'s been put together by someone who really knows what they\'re talking about. Highly recommend it!'
    },
    {
        name: 'Alexandria',
        rating: 4,
        timeAgo: '2 years ago',
        content: 'This course was really good for someone who has worked with Laravel before but wanted a better understanding of how API\'s work. It was REALLY fast whenever going through postman which I found really difficult at times. I would slow it down at that point and did to .5x but it didn\'t do that much. Other than that, thanks!'
    },
    {
        name: 'Imtiyaz',
        rating: 5,
        timeAgo: '2 years ago',
        content: 'The explanation is very clear and suitable for beginners.'
    },
    {
        name: 'Johan Hartono',
        rating: 5,
        timeAgo: '2 years ago',
        content: 'This course is very clear understanding for beginners who want to understand the basic of REST API with Laravel. This course does it well. However there is some video slide too fast, but don\'t worry. The Tutor/Mentor will solved and replied our question very fast for the problem we had faced.'
    }
]

const firstRow = computed(() => reviews.slice(0, Math.ceil(reviews.length / 2)))
const secondRow = computed(() => reviews.slice(Math.ceil(reviews.length / 2)))

const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
}
</script>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0px, 0px) scale(1);
    }
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

.animate-marquee {
    animation: marquee 50s linear infinite;
}

.animate-marquee:hover {
    animation-play-state: paused;
}
</style>
