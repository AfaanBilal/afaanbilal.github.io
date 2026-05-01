<script setup>
import IconGitHub from './icons/IconGitHub.vue'

const trackSOC2Download = () => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'download_soc2', {
            event_category: 'engagement',
            event_label: 'hero_section'
        });
    }
}

const trackCloudSecurity = () => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click_cloud_security', {
            event_category: 'engagement',
            event_label: 'hero_section'
        });
    }
}
</script>

<template>
    <section class="relative bg-gray-900 overflow-hidden min-h-screen flex items-center pt-20">
        <!-- Background Blob Effect -->
        <div class="absolute top-0 right-0 w-2/3 h-full overflow-hidden z-0 pointer-events-none opacity-20">
            <div
                class="absolute top-[10%] right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl animate-pulse">
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col-reverse md:flex-row items-center gap-12">

                <!-- Text Content -->
                <div class="w-full md:w-1/2 text-center md:text-left space-y-6 animate-slide-in-left">
                    <div class="space-y-2">
                        <div
                            class="inline-block px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-800 text-purple-300 text-sm font-bold tracking-wide">
                            Principal Software Engineer, CISO at <a href="https://centiment.co" target="_blank"
                                rel="noopener" class="font-black hover:underline">Centiment</a>
                        </div>
                    </div>

                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
                        Hi, I'm <br class="hidden md:block" />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#8034cc] to-[#991a79]">
                            Afaan Bilal
                        </span>
                    </h1>

                    <p class="text-xl text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed text-justify md:text-left">
                        Building secure, SOC 2 Type II certified SaaS platforms serving millions.
                        <br class="hidden md:block" />
                        <span class="font-semibold block mt-2">Architecture &bull; Cloud Infrastructure &bull;
                            Security</span>
                    </p>

                    <div>
                        <div class="inline-block rounded-full text-gray-300 text-sm tracking-wide mt-2">
                            Bachelor of Technology from <a href="https://www.nitsri.ac.in/" target="_blank"
                                rel="noopener" class="font-black hover:underline">NIT Srinagar</a>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
                        <a href="#contact"
                            class="px-8 py-4 bg-[#8034cc] text-white font-bold rounded-xl hover:bg-[#6a2aa8] transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/30">
                            Get in Touch
                        </a>
                        <a href="#open-source"
                            class="px-8 py-4 bg-gray-800 text-white border border-gray-700 font-bold rounded-xl hover:bg-gray-700 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-md">
                            View Work
                        </a>
                    </div>
                    <div class="flex flex-col items-center md:items-start gap-4 pt-2">
                        <a href="https://cloud-security-handbook.afaan.dev/" target="_blank" @click="trackCloudSecurity"
                            class="w-full sm:w-[420px] group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-blue-400 to-cyan-300 group-hover:from-blue-400 group-hover:to-cyan-300 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 transform hover:-translate-y-1 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                            <span
                                class="w-full relative px-8 py-3.5 transition-all ease-in duration-75 bg-gray-900 rounded-[10px] flex items-center justify-center gap-2">
                                <span class="font-bold text-cyan-200 group-hover:text-white transition-colors">
                                    Get Cloud Security Handbook
                                </span>
                                <svg class="w-5 h-5 text-cyan-200 group-hover:text-white transition-colors" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                    </path>
                                </svg>
                            </span>
                        </a>

                        <a href="/assets/SOC-2-Type-II-Compliance.pdf" target="_blank"
                            download="SOC-2-Type-II-Compliance.pdf" @click="trackSOC2Download"
                            class="w-full sm:w-[420px] group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 transform hover:-translate-y-1 transition-all duration-200 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]">
                            <span
                                class="w-full relative px-8 py-3.5 transition-all ease-in duration-75 bg-gray-900 rounded-[10px] flex items-center justify-center gap-2">
                                <span class="font-bold text-teal-200 group-hover:text-white transition-colors">
                                    Download SOC2 Type II Guide
                                </span>
                                <svg class="w-5 h-5 text-teal-200 group-hover:text-white transition-colors" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                    </path>
                                </svg>
                            </span>
                        </a>
                    </div>

                    <!-- Social Proof / Mini Stats -->
                    <!-- Social Links & Email -->
                    <div
                        class="py-8 md:pt-8 flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-400">
                        <a href="mailto:hello@afaan.dev"
                            class="flex items-center gap-2 group hover:text-purple-400 transition-colors">
                            <div class="p-2 rounded-lg bg-gray-800 group-hover:bg-purple-900/30 transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                            </div>
                            <span class="font-medium">hello@afaan.dev</span>
                        </a>

                        <div class="h-8 w-px bg-gray-700 hidden sm:block"></div>

                        <div class="flex gap-4">
                            <a href="https://github.com/AfaanBilal" target="_blank" rel="noopener"
                                aria-label="GitHub Profile"
                                class="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 hover:text-white transition-all transform hover:-translate-y-1">
                                <IconGitHub class="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/AfaanBilal" target="_blank" rel="noopener"
                                aria-label="LinkedIn Profile"
                                class="p-2 rounded-lg bg-gray-800 hover:bg-blue-900/20 hover:text-blue-600 transition-all transform hover:-translate-y-1">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Image Content -->
                <div class="w-full md:w-1/2 flex justify-center md:justify-end animate-slide-in-right">
                    <div class="relative w-72 h-72 md:w-96 md:h-96">
                        <!-- Decorative Ring -->
                        <div
                            class="absolute inset-0 rounded-full border-2 border-dashed border-purple-800 animate-spin-slow">
                        </div>

                        <!-- Profile Image -->
                        <div
                            class="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-gray-800 ring-4 ring-purple-900/50">
                            <img src="/assets/afaan.png" alt="Afaan Bilal" fetchpriority="high" width="384" height="384"
                                class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                        </div>

                        <!-- Float Element 1 -->
                        <a href="https://github.com/AfaanBilal" target="_blank" rel="noopener" aria-hidden="true"
                            tabindex="-1"
                            class="absolute top-0 right-0 bg-gray-800 p-3 rounded-2xl shadow-xl animate-float hover:scale-110 transition-transform cursor-pointer">
                            <IconGitHub class="w-8 h-8 text-[#8034cc]" />
                        </a>
                        <!-- Float Element 2 -->
                        <div aria-hidden="true"
                            class="absolute bottom-10 left-0 bg-gray-800 p-3 rounded-2xl shadow-xl animate-float animation-delay-2000">
                            <span class="text-2xl">🚀</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

