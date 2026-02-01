<template>
    <section class="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center justify-center">
        <!-- Background Blob Effect -->
        <div
            class="absolute top-0 right-0 w-2/3 h-full overflow-hidden z-0 pointer-events-none opacity-20 dark:opacity-10">
            <div
                class="absolute top-[10%] right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl animate-pulse">
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10 text-center">
            <div class="space-y-8 animate-fade-in-up">

                <!-- 404 Large Text -->
                <h1
                    class="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-tighter">
                    404
                </h1>

                <!-- Message -->
                <div class="space-y-4">
                    <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
                        Page Not Found
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                        Oops! The page you're looking for seems to have wandered off into the digital void.
                    </p>
                </div>

                <!-- Action Button -->
                <div class="pt-8">
                    <a href="/"
                        class="inline-flex items-center gap-2 px-8 py-4 bg-[#8034cc] text-white font-bold rounded-xl hover:bg-[#6a2aa8] transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/30">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Go Back Home
                    </a>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
