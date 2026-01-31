<template>
  <div class="project-view">
    <div class="py-20 md:pt-20 md:pb-40" style="background: linear-gradient(110deg, #672ba3 0%,#b3218e 100%)">
        <div class="container mx-auto px-6">

            <h3 class="flex justify-center py-2">
                <div>
                    <router-link to="/" class="font-bold text-white hover:underline text-xl"><img class="w-16 transform rotate-180" src="/assets/arrow.svg" alt="back" /></router-link>
                </div>
            </h3>

            <div class="flex justify-center items-center flex-wrap">
                <div class="py-5 mx-5 md:mx-10">
                    <h2 class="text-6xl font-bold mb-2 text-white">{{ repoTitle }}</h2>
                    <h3 class="text-1xl text-gray-200 hover:text-white">{{ repo.description }}</h3>
                    <h3 class="text-1xl text-gray-200 hover:text-white">
                        <a v-show="repo.homepage" :href="repo.homepage" class="font-bold hover:underline" target="_blank" rel="noopener">Homepage</a>
                        <span class="mx-2" v-show="repo.homepage">&middot;</span>
                        <a v-show="repo.html_url" :href="repo.html_url" class="font-bold hover:underline" target="_blank" rel="noopener">Source code</a>
                    </h3>
                </div>
                <div class="py-5 md:mx-10">
                    <a :href="repo.html_url" target="_blank" rel="noopener"><img class="w-32" src="/assets/github.svg" alt="github" /></a>
                </div>
            </div>

            <div class="text-white text-2xl w-full text-center mb-14 flex justify-center mt-6">
                hello <img class="w-5 mx-1" src="/assets/at.svg" alt="at" /> afaan <img class="w-2 mx-1 pt-2" src="/assets/dot.svg" alt="dot" /> dev
            </div>

            <div class="flex justify-center mt-10">
                <div class="pr-4 md:pr-16"><a href="https://linkedin.com/in/AfaanBilal" target="_blank" rel="noopener"><img style="width: 32px;" src="/assets/linkedin.svg" alt="linkedin" /></a></div>
                <div class="px-4 md:px-16"><a href="https://medium.com/@AfaanBilal" target="_blank" rel="noopener"><img style="width: 32px;" src="/assets/medium.svg" alt="medium" /></a></div>
                <div class="px-4 md:px-16"><a href="https://github.com/AfaanBilal" target="_blank" rel="noopener"><img style="width: 32px;" src="/assets/github.svg" alt="github" /></a></div>
                <div class="px-4 md:px-16"><a href="https://twitter.com/AfaanBilal" target="_blank" rel="noopener"><img style="width: 32px;" src="/assets/twitter.svg" alt="twitter" /></a></div>
                <div class="px-4 md:px-16"><a href="https://instagram.com/AfaanBilal" target="_blank" rel="noopener"><img style="width: 32px;" src="/assets/instagram.svg" alt="instagram" /></a></div>
                <div class="pl-4 md:pl-16"><a href="https://facebook.com/AfaanBilal" target="_blank" rel="noopener"><img style="width: 32px;" src="/assets/facebook.svg" alt="facebook" /></a></div>
            </div>
        </div>
    </div>

    <section class="container mx-auto py-10">
        <div class="mb-10 pt-10 md:mx-36">
            <h3 class="text-2xl font-bold text-center text-gray-800 mb-5">Languages</h3>
            <div class="md:mx-20 flex flex-wrap justify-center">
                <span
                    v-for="l in languages"
                    :key="l"
                    style="background: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)" class="text-white px-2 py-1 rounded m-2 inline-block shadow hover:shadow-lg">
                    {{ l }}
                </span>
            </div>
        </div>
    </section>

    <div class="py-5" style="background: linear-gradient(270deg, #8034cc 0%,#991a79 100%)">
        <section class="container mx-auto px-6 p-10">
            <h2 class="text-4xl font-bold text-center mb-5 text-white">GitHub Stats</h2>
            <div class="flex justify-center flex-wrap">
                <div class="w-full py-4 flex justify-center" v-if="repo.full_name">
                    <img :src="'https://github-readme-stats.vercel.app/api/pin/?username=' + repo.full_name.split('/')[0] + '&repo=' + repo.name" alt="github stats" />
                </div>
            </div>
        </section>
    </div>

    <section class="container mx-auto py-10">
        <h2 class="text-4xl font-bold text-center mb-5">Readme</h2>
        <div class="text-gray-800 justify-center flex">
            <div id="readme" class="markdown-body">
                <div v-html="readmeHtml"></div>
            </div>
        </div>
    </section>

    <div class="py-5" style="background: linear-gradient(270deg, #8034cc 0%,#991a79 100%)">
        <section class="container mx-auto px-6 p-10">
            <h2 class="text-4xl font-bold text-center mb-5 text-white">License</h2>
            <div class="text-white justify-center flex">
                <div id="license" class="markdown-body">
                    <div v-html="licenseHtml"></div>
                </div>
            </div>
        </section>
    </div>

    <Footer />

    <div class="text-center text-white py-2" style="background: linear-gradient(110deg, #672ba3 0%,#b3218e 100%)">
        Copyright &copy; Afaan Bilal
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import showdown from 'showdown'
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
})

watch(() => route.params.name, () => {
    loadRepo()
})

async function loadRepo() {
    repoFullName.value = route.params.name
    if (!repoFullName.value) return

    if (!['afaanbilal', 'amx-infinity'].includes(repoFullName.value.split('/')[0].toLowerCase())) {
        router.push('/')
        return
    }

    const converter = new showdown.Converter()

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

        const licenseRes = await fetch('https://raw.githubusercontent.com/' + repoFullName.value + '/' + repo.value.default_branch + '/LICENSE')
        const licenseText = await licenseRes.text()
        licenseHtml.value = converter.makeHtml(licenseText)

    } catch (e) {
        console.error(e)
        router.push('/')
    }
}
</script>

<style>
/* Markdown Styles from project.html */
.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4 {
    color: inherit;
    font-weight: 500;
}
.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body p {
    margin-bottom: 12px;
    padding: 0;
}
.markdown-body h1 { font-size: 28px; }
.markdown-body h2 { font-size: 24px; margin: 12px 0 6px; }
.markdown-body h3 { font-size: 20px; }
.markdown-body h4 { font-size: 18px; }
.markdown-body h5 { font-size: 16px; }
.markdown-body a {
    color: #0099ff;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}
.markdown-body ul, .markdown-body ol { padding: 0; margin: 0; }
.markdown-body li { line-height: 24px; }
.markdown-body li ul, .markdown-body li ul { margin-left: 24px; }
.markdown-body p, .markdown-body ul, .markdown-body ol { font-size: 14px; line-height: 22px; }
.markdown-body pre {
    padding: 0px 24px;
    white-space: pre-wrap;
    max-width: 700px;
    background: #f4f4f4;
    border-radius: 4px;
    padding: 10px;
}
.markdown-body code {
    font-family: Consolas, Monaco, Andale Mono, monospace;
    line-height: 1.5;
    font-size: 13px;
    background: rgba(0,0,0,0.05);
    padding: 2px 4px;
    border-radius: 3px;
}
.markdown-body blockquote { margin: 1em 2em; max-width: 476px; border-left: 4px solid #ccc; padding-left: 10px; }
.markdown-body hr {
    width: 540px;
    text-align: left;
    margin: 0 auto 0 0;
    color: #999;
}
</style>
