<template>
  <section id="open-source" class="container mx-auto px-6 p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mt-10 mb-4">Open source projects</h2>
      <p class="text-xl text-center text-gray-500 mb-16">{{ repos.length }} repositories</p>

      <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">

          <div class="border shadow hover:shadow-2xl border-l-4 rounded border-purple-600 p-3 pl-5" v-for="r in repos" :key="r.id">
              <router-link :to="{ name: 'project', params: { name: r.full_name } }" class="hover:underline">
                  <h4 class="text-2xl text-gray-800 font-bold mb-3">{{ toTitleCase(r.name.split('-').join(' ')) }}</h4>
              </router-link>
              <div class="text-gray-700">
                  {{ r.description }}

                  <div class="mt-4">
                      <span v-show="r.stargazers_count" style="background: linear-gradient(90deg, #8034cc 0%,#991a79 100%)" class="text-white px-2 py-1 rounded">⭐ {{ r.stargazers_count }}</span>
                      <span v-show="r.stargazers_count" class="mx-2">&middot;</span>

                      <span v-show="r.language" style="background: linear-gradient(90deg, #8034cc 0%,#991a79 100%)" class="text-white px-2 py-1 rounded">{{ r.language }}</span>
                      <span v-show="r.language" class="mx-2">&middot;</span>

                      <a v-show="r.homepage" :href="r.homepage" target="_blank" rel="noopener" class="underline">Homepage</a>
                      <span v-show="r.homepage" class="mx-2">&middot;</span>

                      <a :href="r.html_url" target="_blank" rel="noopener" class="underline">Source code</a>
                  </div>
              </div>
          </div>

      </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const allRepos = ref([])

onMounted(() => {
    fetch('https://api.github.com/users/AfaanBilal/repos?per_page=100').then(r => r.json()).then((d) => {
        if(Array.isArray(d)) allRepos.value = d
    }).then(() => {
        fetch('https://api.github.com/orgs/AMX-Infinity/repos?per_page=100').then(r => r.json()).then((d) => {
            if(Array.isArray(d)) allRepos.value.push(...d)
        })
    })
})

const repos = computed(() => {
    let excludeNames = ["AfaanBilal", "afaanbilal.github.io", "musings", "amx-infinity.github.io", "SoftSolutions"]
    return allRepos.value.filter(o => !excludeNames.includes(o.name)).sort((b, a) => a.stargazers_count - b.stargazers_count)
})

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}
</script>
