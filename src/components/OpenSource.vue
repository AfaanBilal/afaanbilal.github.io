<template>
    <section id="open-source" class="container mx-auto px-4 py-16 md:p-10 scroll-mt-12">
        <div class="text-center mb-12">
            <h2
                class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 animate-fade-in-up">
                Open Source
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-500 max-w-2xl mx-auto animate-fade-in-up delay-100">
                Contributing to the community with
                <span class="font-bold text-purple-600">{{ sortedRepos.length }}</span>
                repositories and counting.
            </p>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
            <div v-for="n in 6" :key="n" class="border border-gray-100 rounded-xl p-6 shadow-sm animate-pulse bg-white">
                <div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div class="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
                <div class="flex gap-2">
                    <div class="h-6 w-16 bg-gray-200 rounded-full"></div>
                    <div class="h-6 w-16 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center text-red-500 py-10">
            <p>Failed to load repositories. Please try again later.</p>
        </div>

        <!-- Repository Grid -->
        <div v-else class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div v-for="(r, index) in displayedRepos" :key="r.id"
                class="group relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                :style="{ animationDelay: `${index * 50}ms` }">
                <!-- Gradient Border/Glow Effect on Hover -->
                <div
                    class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                </div>

                <div class="flex justify-between items-start mb-4">
                    <router-link :to="{ name: 'project', params: { name: r.full_name } }"
                        class="group-hover:text-purple-600 transition-colors">
                        <h4 class="text-xl font-bold text-gray-800 dark:text-gray-100 truncate"
                            :title="toTitleCase(r.name.split('-').join(' '))">
                            {{ toTitleCase(r.name.split('-').join(' ')) }}
                        </h4>
                    </router-link>

                    <div class="flex items-center gap-1 text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-0.5 rounded-full text-sm font-medium"
                        v-if="r.stargazers_count > 0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{{ r.stargazers_count }}</span>
                    </div>
                </div>

                <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 h-[60px]">
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
                            class="text-gray-500 hover:text-purple-600 transition-colors flex items-center gap-1 group/link">
                            Demo
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                        <a :href="r.html_url" target="_blank" rel="noopener"
                            class="text-gray-500 hover:text-purple-600 transition-colors flex items-center gap-1 group/link">
                            Code
                            <svg xmlns="http://www.w3.org/2000/svg"
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

        <div v-if="sortedRepos.length > 9" class="text-center">
            <button @click="showAll = !showAll"
                class="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer">
                {{ showAll ? 'Show Less' : `Show All (${sortedRepos.length})` }}
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const allRepos = ref([])
const loading = ref(true)
const error = ref(false)

const excludeNames = ["AfaanBilal", "afaanbilal.github.io", "musings", "amx-infinity.github.io", "SoftSolutions"]

const showAll = ref(false)

onMounted(async () => {
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
})

const sortedRepos = computed(() => {
    return allRepos.value
        .filter(o => !excludeNames.includes(o.name))
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
})

const displayedRepos = computed(() => {
    if (showAll.value) {
        return sortedRepos.value
    }
    return sortedRepos.value.slice(0, 9)
})

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
