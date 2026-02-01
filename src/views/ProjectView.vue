<template>
    <div
        class="project-view min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <!-- Header Section -->
        <div class="relative py-20 pb-32 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
            <!-- Background Effects -->
            <div class="absolute top-0 right-0 w-2/3 h-full overflow-hidden z-0 pointer-events-none opacity-20">
                <div
                    class="absolute top-[10%] right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl animate-pulse">
                </div>
            </div>

            <div class="container mx-auto px-6 relative z-10">
                <!-- Back Navigation -->
                <div class="flex justify-start mb-8">
                    <a href="/#open-source"
                        class="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <div
                            class="p-2 rounded-full bg-gray-800/50 group-hover:bg-purple-600/20 backdrop-blur-sm border border-gray-700 group-hover:border-purple-500/50 transition-all">
                            <svg class="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </div>
                        <span class="font-medium">Back to Portfolio</span>
                    </a>
                </div>

                <!-- Title & Meta -->
                <div
                    class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 animate-fade-in-up">
                    <div class="space-y-4 max-w-3xl">
                        <h1 class="text-5xl md:text-6xl font-black tracking-tight text-white mb-2">
                            {{ repoTitle }}
                        </h1>
                        <p class="text-xl text-gray-300 leading-relaxed font-light">{{ repo.description }}</p>

                        <!-- Languages -->
                        <div class="flex flex-wrap gap-2 pt-2">
                            <span v-for="l in languages" :key="l"
                                class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium hover:bg-purple-900/40 hover:text-purple-300 border border-gray-700 transition-colors cursor-default">
                                {{ l }}
                            </span>
                        </div>

                        <!-- Links -->
                        <div class="flex flex-wrap gap-4 pt-4">
                            <a v-if="repo.homepage" :href="repo.homepage" target="_blank" rel="noopener"
                                class="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-900/50">
                                <span>Live Demo</span>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                    </path>
                                </svg>
                            </a>
                            <a v-if="repo.html_url" :href="repo.html_url" target="_blank" rel="noopener"
                                class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 hover:text-white text-gray-200 font-bold rounded-xl backdrop-blur-md border border-white/10 transition-all transform hover:-translate-y-1">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>Source Code</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- Content Section -->
        <main class="container mx-auto px-6 py-16 space-y-16">
            <!-- Readme -->
            <section class="w-full">
                <div class="flex items-center gap-4 mb-8">
                    <div
                        class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                            </path>
                        </svg>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Project Details</h2>
                </div>

                <div
                    class="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div class="markdown-body dark:prose-invert" v-html="readmeHtml"></div>
                </div>
            </section>

            <!-- License -->
            <section class="w-full" v-if="licenseHtml">
                <div class="flex items-center gap-4 mb-8">
                    <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3">
                            </path>
                        </svg>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white">License</h2>
                </div>
                <div
                    class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                    <div class="markdown-body dark:prose-invert" v-html="licenseHtml"></div>
                </div>
            </section>
        </main>

        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import showdown from 'showdown'
import 'github-markdown-css/github-markdown.css' // Import GitHub styles
import Footer from '../components/Footer.vue'

const route = useRoute()
const router = useRouter()

const repoFullName = ref('')
const repo = ref({})
const langs = ref({})
const readmeHtml = ref('loading...')
const licenseHtml = ref('loading...')

const repoTitle = computed(() => {
    return repo.value.name ? toTitleCase(repo.value.name.split('-').join(' ')) : 'Loading...'
})

const languages = computed(() => Object.keys(langs.value))

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

onMounted(() => {
    loadRepo()
    window.scrollTo(0, 0)
})

watch(() => route.params.name, () => {
    loadRepo()
    window.scrollTo(0, 0)
})

async function loadRepo() {
    repoFullName.value = route.params.name
    if (!repoFullName.value) return

    if (!['afaanbilal', 'amx-infinity'].includes(repoFullName.value.split('/')[0].toLowerCase())) {
        router.push('/')
        return
    }

    const converter = new showdown.Converter()
    // Styles for markdown tables etc
    converter.setOption('tables', true)

    try {
        const repoRes = await fetch('https://api.github.com/repos/' + repoFullName.value)
        if (!repoRes.ok) throw new Error('Repo not found')
        const repoData = await repoRes.json()

        if (['afaanbilal', 'amx-infinity'].includes(repoData.full_name.split('/')[0].toLowerCase())) {
            repo.value = repoData
            document.title = repoTitle.value + ' | Afaan Bilal'
        } else {
            router.push('/')
            return
        }

        const langsRes = await fetch(repo.value.languages_url)
        langs.value = await langsRes.json()

        const readmeRes = await fetch('https://raw.githubusercontent.com/' + repoFullName.value + '/' + repo.value.default_branch + '/README.md')
        const readmeText = await readmeRes.text()
        readmeHtml.value = converter.makeHtml(readmeText)

        try {
            const licenseRes = await fetch('https://raw.githubusercontent.com/' + repoFullName.value + '/' + repo.value.default_branch + '/LICENSE')
            if (licenseRes.ok) {
                const licenseText = await licenseRes.text()
                licenseHtml.value = converter.makeHtml(licenseText)
            } else {
                licenseHtml.value = ''
            }
        } catch (e) { licenseHtml.value = '' }

    } catch (e) {
        console.error(e)
        router.push('/')
    }
}
</script>

<style>
/* Markdown Content Customization for Dark Mode + Tailwind Typography compatibility */
.markdown-body {
    background: transparent !important;
    font-family: inherit !important;
    line-height: 1.8 !important;
}

/* Invert colors for dark mode context */
.dark .markdown-body {
    color: #e5e7eb !important;
    /* gray-200 */
}

.dark .markdown-body h1,
.dark .markdown-body h2,
.dark .markdown-body h3 {
    color: #fff !important;
    border-bottom-color: #374151 !important;
    /* gray-700 */
}

.dark .markdown-body a {
    color: #c084fc !important;
    /* purple-400 */
}

.dark .markdown-body code {
    background-color: #1f2937 !important;
    /* gray-800 */
    color: #e5e7eb !important;
}

.dark .markdown-body pre {
    background-color: #111827 !important;
    /* gray-900 */
    border: 1px solid #374151;
}

.dark .markdown-body blockquote {
    color: #9ca3af !important;
    /* gray-400 */
    border-left-color: #4b5563 !important;
    /* gray-600 */
}

.dark .markdown-body table tr {
    background-color: transparent !important;
    border-top-color: #374151 !important;
}

.dark .markdown-body table tr:nth-child(2n) {
    background-color: #1f2937 !important;
    /* gray-800 */
}

.dark .markdown-body table th,
.dark .markdown-body table td {
    border-color: #374151 !important;
}

/* Base styles cleanup */
.markdown-body img {
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    max-width: 100%;
}
</style>
