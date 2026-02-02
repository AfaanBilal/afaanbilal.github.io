<template>
    <section id="open-source" ref="sectionRef" class="container mx-auto px-4 py-16 md:p-10 scroll-mt-12">
        <div class="text-center mb-12">
            <h2
                class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 animate-fade-in-up">
                Open Source
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-500 max-w-2xl mx-auto animate-fade-in-up delay-100">
                Contributing to the community with
                <span class="font-bold text-purple-600">{{ sortedRepos.length }}+</span>
                repositories.
            </p>
        </div>

        <!-- Loading State -->
        <div v-if="loading || isChangingPage" class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
            <div v-for="n in itemsPerPage" :key="n"
                class="border border-gray-100 rounded-xl p-4 shadow-sm animate-pulse bg-white">

                <!-- Header Skeleton -->
                <div class="flex justify-between items-start mb-2">
                    <div class="h-6 bg-gray-200 rounded w-2/3"></div>
                    <div class="h-6 w-8 bg-gray-200 rounded-full"></div>
                </div>

                <!-- Description Skeleton -->
                <div class="space-y-2 mb-2 h-[60px]">
                    <div class="h-4 bg-gray-200 rounded w-full"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>

                <!-- Footer Skeleton -->
                <div class="flex items-center justify-between mt-auto">
                    <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                    <div class="flex gap-3">
                        <div class="h-4 w-12 bg-gray-200 rounded"></div>
                        <div class="h-4 w-12 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center text-red-500 py-10">
            <p>Failed to load repositories. Please try again later.</p>
        </div>

        <!-- Repository Grid -->
        <div v-else class="mb-12 min-h-[500px]">
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
                            <h3 class="text-xl font-bold truncate" :title="toTitleCase(r.name.split('-').join(' '))">
                                {{ toTitleCase(r.name.split('-').join(' ')) }}
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
        <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-12 animate-fade-in-up">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                class="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 hover:text-purple-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label="Previous Page">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </button>

            <div class="flex gap-2 items-center px-4 font-medium text-gray-600">
                Page {{ currentPage }} of {{ totalPages }}
            </div>

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
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            </a>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const allRepos = ref([])
const loading = ref(true)
const isChangingPage = ref(false)
const error = ref(false)

const excludeNames = ["AfaanBilal", "afaanbilal.github.io", "musings", "amx-infinity.github.io", "SoftSolutions"]

const sectionRef = ref(null)

const fetchRepos = async () => {
    try {
        loading.value = true
        const userReposPromise = fetch('https://api.github.com/users/AfaanBilal/repos?per_page=100').then(r => r.json())
        const orgReposPromise = fetch('https://api.github.com/orgs/AMX-Infinity/repos?per_page=100').then(r => r.json())

        const [userRepos, orgRepos] = await Promise.all([userReposPromise, orgReposPromise])

        let repos = []
        if (Array.isArray(userRepos)) repos = [...repos, ...userRepos]
        if (Array.isArray(orgRepos)) repos = [...repos, ...orgRepos]

        allRepos.value = repos
    } catch (e) {
        console.error("Failed to fetch repos", e)
        error.value = true
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            fetchRepos()
            observer.disconnect()
        }
    }, { threshold: 0.1 })

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
})

const sortedRepos = computed(() => {
    return allRepos.value
        .filter(o => !excludeNames.includes(o.name))
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
})

const currentPage = ref(1)
const itemsPerPage = 16

const totalPages = computed(() => Math.ceil(sortedRepos.value.length / itemsPerPage))

const displayedRepos = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return sortedRepos.value.slice(start, end)
})

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        isChangingPage.value = true

        // smooth scroll to top of section with a little offset
        if (sectionRef.value) {
            const yOffset = -80 // header offset
            const y = sectionRef.value.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }

        // 300ms delay for skeleton state
        setTimeout(() => {
            currentPage.value = page
            isChangingPage.value = false
        }, 300)
    }
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}
</script>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

.delay-100 {
    animation-delay: 0.2s;
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
</style>
