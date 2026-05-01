<template>
    <footer class="bg-gray-50 dark:bg-gray-900 py-16 border-t border-gray-200 dark:border-gray-800">
        <div class="container mx-auto px-6 text-center">
            <a href="/"
                class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6 inline-block">
                Afaan Bilal
            </a>

            <p class="text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto">
                Building scalable, high-performance software for the modern web.
            </p>

            <div class="flex justify-center space-x-8 mb-12">
                <a href="https://github.com/AfaanBilal" target="_blank" rel="noopener" aria-label="GitHub Profile"
                    class="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition-colors transform hover:scale-110">
                    <span class="sr-only">GitHub</span>
                    <IconGitHub class="h-8 w-8" />
                </a>
                <a href="https://linkedin.com/in/AfaanBilal" target="_blank" rel="noopener"
                    aria-label="LinkedIn Profile"
                    class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a href="mailto:hello@afaan.dev" aria-label="Email Me"
                    class="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors transform hover:scale-110">
                    <span class="sr-only">Email</span>
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </a>
            </div>

            <div class="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <div>
                    <a href="/privacy"
                        class="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy
                        Policy</a>
                </div>
                <div>&copy; {{ year }} Afaan Bilal. All rights reserved.</div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import IconGitHub from './icons/IconGitHub.vue'
const year = new Date().getFullYear()
</script>
