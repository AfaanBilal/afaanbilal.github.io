<template>
    <section
        class="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center justify-center pt-20">
        <!-- Background Elements -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div
                class="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-200/30 blur-3xl animate-blob mix-blend-multiply filter opacity-70">
            </div>
            <div
                class="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-pink-200/30 blur-3xl animate-blob animation-delay-2000 mix-blend-multiply filter opacity-70">
            </div>
            <div
                class="absolute top-[20%] right-[20%] w-[50%] h-[50%] rounded-full bg-yellow-200/30 blur-3xl animate-blob animation-delay-4000 mix-blend-multiply filter opacity-70">
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10 text-center">
            <div class="animate-fade-in-up">
                <div
                    class="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold tracking-wide uppercase">
                    Full Stack Engineer & Researcher
                </div>
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight mb-6">
                    Building the <br class="hidden md:block" />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Future of
                        Tech</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    I build high-performance applications, conduct advanced research, and contribute to the open-source
                    community.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <router-link :to="{ name: 'home', hash: '#contact' }"
                        class="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                        Get in Touch
                    </router-link>
                    <router-link :to="{ name: 'home', hash: '#open-source' }"
                        class="px-8 py-4 bg-white text-gray-900 border border-gray-200 font-bold rounded-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                        View Work
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
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

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
    opacity: 0;
    transform: translateY(30px);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
