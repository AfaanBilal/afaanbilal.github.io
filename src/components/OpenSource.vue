<template>
    <section id="open-source" ref="sectionRef" class="container mx-auto px-4 py-32 scroll-mt-12">
        <div class="text-center mb-12">
            <h2
                class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 animate-fade-in-up">
                Open Source
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-500 max-w-2xl mx-auto animate-fade-in-up delay-100">
                Building for the community with
                <span class="font-bold text-purple-600">{{ sortedRepos.length }}+</span>
                open source projects.
            </p>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="mb-10">
            <!-- Filters Skeleton -->
            <div class="flex flex-wrap justify-center gap-2 mb-8 animate-pulse">
                <div class="h-9 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div class="h-9 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div class="h-9 w-28 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div class="h-9 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div class="h-9 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div class="h-9 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div class="h-9 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div class="h-9 w-28 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div class="h-9 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div class="h-9 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>

            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div v-for="n in itemsPerPage" :key="n"
                    class="border border-gray-100 dark:border-gray-700 rounded-xl p-4 shadow-sm animate-pulse bg-white dark:bg-gray-800">

                    <!-- Header Skeleton -->
                    <div class="flex justify-between items-start mb-2">
                        <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                        <div class="h-6 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    </div>

                    <!-- Description Skeleton -->
                    <div class="space-y-2 mb-2 h-[60px]">
                        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                    </div>

                    <!-- Footer Skeleton -->
                    <div class="flex items-center justify-between mt-auto">
                        <div class="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                        <div class="flex gap-3">
                            <div class="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div class="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-10 space-y-3">
            <p class="text-red-500">Failed to load repositories. This may be due to GitHub API rate limiting.</p>
            <p class="text-gray-500 text-sm">Unauthenticated requests are limited to 60/hour. Please try again later or
                <a href="https://github.com/AfaanBilal" target="_blank" rel="noopener"
                    class="text-purple-600 hover:underline">view all repos on GitHub</a>.
            </p>
        </div>

        <div v-else class="mb-12 min-h-[500px]">
            <!-- Sort Toggle -->
            <div class="flex justify-center mb-6 animate-fade-in-up" v-if="!loading">
                <div class="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden text-sm font-medium">
                    <button @click="sortBy = 'stars'" :aria-pressed="sortBy === 'stars'"
                        class="px-4 py-2 flex items-center gap-1.5 transition-colors cursor-pointer"
                        :class="sortBy === 'stars' ? 'bg-purple-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Most Stars
                    </button>
                    <button @click="sortBy = 'updated'" :aria-pressed="sortBy === 'updated'"
                        class="px-4 py-2 flex items-center gap-1.5 transition-colors cursor-pointer border-l border-gray-200 dark:border-gray-700"
                        :class="sortBy === 'updated' ? 'bg-purple-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Recently Updated
                    </button>
                </div>
            </div>

            <!-- Language Filters -->
            <div class="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up delay-100" v-if="!loading">
                <button @click="selectedLanguage = 'All'"
                    class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                    :class="selectedLanguage === 'All'
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'">
                    All <span class="opacity-75 text-xs ml-1">({{ sortedRepos.length }})</span>
                </button>
                <button v-for="lang in uniqueLanguages" :key="lang.name" @click="selectedLanguage = lang.name"
                    class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                    :class="selectedLanguage === lang.name
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'">
                    {{ lang.name }} <span class="opacity-75 text-xs ml-1">({{ lang.count }})</span>
                </button>
            </div>

            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div v-for="(r, index) in displayedRepos" :key="r.id"
                    class="group relative bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <!-- Gradient Border/Glow Effect on Hover -->
                    <div
                        class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                    </div>

                    <div class="flex justify-between items-start mb-2">
                        <router-link :to="{ name: 'project', params: { name: r.full_name } }"
                            class="group-hover:text-purple-400 transition-colors text-gray-800 dark:text-gray-100">
                            <h3 class="text-xl font-bold truncate capitalize" :title="r.name.split('-').join(' ')">
                                {{ r.name.split('-').join(' ') }}
                            </h3>
                        </router-link>

                        <div class="flex items-center gap-1 text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400 px-2 py-0.5 rounded-full text-sm font-medium"
                            v-if="r.stargazers_count > 0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>{{ r.stargazers_count }}</span>
                        </div>
                    </div>

                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3 h-[60px] leading-snug">
                        {{ r.description || 'No description available for this project.' }}
                    </p>

                    <div class="flex items-center justify-between mt-auto">
                        <div class="flex items-center gap-2">
                            <span v-if="r.language"
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                {{ r.language }}
                            </span>
                        </div>

                        <div class="flex space-x-3 text-sm font-medium">
                            <a v-if="r.homepage" :href="r.homepage" target="_blank" rel="noopener"
                                class="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 group/link">
                                Demo
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                    class="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            <a :href="r.html_url" target="_blank" rel="noopener"
                                class="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 group/link">
                                Code
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                    class="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Pagination Controls -->
        <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-12 animate-fade-in-up flex-wrap">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label="Previous Page">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <template v-for="page in visiblePages" :key="page">
                <span v-if="page === '...'" class="px-2 text-gray-400 select-none">...</span>
                <button v-else @click="changePage(page)" :aria-label="`Page ${page}`" :aria-current="page === currentPage ? 'page' : undefined"
                    class="w-9 h-9 rounded-lg border text-sm font-medium cursor-pointer transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    :class="page === currentPage
                        ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-purple-600 hover:border-purple-300'">
                    {{ page }}
                </button>
            </template>

            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label="Next Page">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div class="text-center mt-8 animate-fade-in-up delay-100">
            <a href="https://github.com/AfaanBilal" target="_blank" rel="noopener"
                class="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">
                <span>View all on GitHub</span>
                <IconGitHub class="h-5 w-5" />
            </a>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { isExcludedRepo } from '../config'
import IconGitHub from './icons/IconGitHub.vue'

const allRepos = ref([])
const loading = ref(true)
const error = ref(false)
const selectedLanguage = ref('All')
const sortBy = ref('stars')

const sectionRef = ref(null)
let observer = null

const CACHE_KEY = 'os_repos_v1'
const CACHE_TTL = 60 * 60 * 1000 // 1h

const readCache = () => {
    try {
        const raw = localStorage.getItem(CACHE_KEY)
        if (!raw) return null
        const { ts, data } = JSON.parse(raw)
        if (Date.now() - ts > CACHE_TTL) return null
        return Array.isArray(data) ? data : null
    } catch { return null }
}

const writeCache = (data) => {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data })) } catch {}
}

const fetchJsonArray = async (url) => {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`GitHub API ${res.status}`)
    const json = await res.json()
    if (!Array.isArray(json)) throw new Error(json?.message || 'Unexpected response')
    return json
}

const fetchRepos = async () => {
    const cached = readCache()
    if (cached) {
        allRepos.value = cached
        loading.value = false
        return
    }

    try {
        loading.value = true
        const [userRepos, orgRepos] = await Promise.all([
            fetchJsonArray('https://api.github.com/users/AfaanBilal/repos?per_page=100'),
            fetchJsonArray('https://api.github.com/orgs/AMX-Infinity/repos?per_page=100'),
        ])
        const repos = [...userRepos, ...orgRepos]
        allRepos.value = repos
        writeCache(repos)
    } catch (e) {
        console.error("Failed to fetch repos", e)
        error.value = true
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            fetchRepos()
            observer?.disconnect()
            observer = null
        }
    }, { threshold: 0.1 })

    if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
    observer?.disconnect()
    observer = null
})

const sortedRepos = computed(() => {
    return allRepos.value
        .filter(o => !isExcludedRepo(o.name))
        .sort((a, b) => sortBy.value === 'updated'
            ? new Date(b.pushed_at) - new Date(a.pushed_at)
            : b.stargazers_count - a.stargazers_count)
})

const uniqueLanguages = computed(() => {
    const counts = {}
    sortedRepos.value.forEach(r => {
        if (r.language) {
            counts[r.language] = (counts[r.language] || 0) + 1
        }
    })

    return Object.keys(counts)
        .map(name => ({ name, count: counts[name] }))
        .sort((a, b) => b.count - a.count)
})

const filteredRepos = computed(() => {
    if (selectedLanguage.value === 'All') {
        return sortedRepos.value
    }
    return sortedRepos.value.filter(r => r.language === selectedLanguage.value)
})

// Reset page when filter or sort changes
watch([selectedLanguage, sortBy], () => {
    currentPage.value = 1
})

const currentPage = ref(1)
const itemsPerPage = 16

const totalPages = computed(() => Math.ceil(filteredRepos.value.length / itemsPerPage))

const visiblePages = computed(() => {
    const total = totalPages.value
    const current = currentPage.value
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

    const pages = []
    pages.push(1)
    if (current > 3) pages.push('...')
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
        pages.push(i)
    }
    if (current < total - 2) pages.push('...')
    pages.push(total)
    return pages
})

const displayedRepos = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredRepos.value.slice(start, end)
})

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
    }
}


</script>

