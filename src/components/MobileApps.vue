<template>
  <section id="mobile-apps" class="container mx-auto px-4 py-8 md:p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mt-8">Mobile Apps</h2>
      <div class="pt-8 flex flex-wrap gap-2 justify-center items-center">
          <div v-for="app in apps" :key="app.name" class="border rounded p-2 w-full md:w-96">
              <a :name="app.anchor"></a>
              <div v-if="app.isFxRate" class="flex justify-between">
                  <a :href="app.link" target="_blank" rel="noopener" class="text-xl font-bold text-center hover:text-pink-400 mb-4">{{ app.name }}</a>
                  <a :href="app.playStore" target="_blank" rel="noopener" title="Play Store">
                      <img src="/images/playstore.png" class="w-8" />
                  </a>
              </div>
              <a v-else :href="app.link" target="_blank" rel="noopener"><h2 class="text-xl font-bold text-center hover:text-pink-400 mb-4">{{ app.name }}</h2></a>

              <div class="flex justify-center"><img class="rounded" :src="app.image" :alt="app.name" /></div>
              <div class="pt-2 text-sm">
                  <span v-for="tech in app.tech" :key="tech" style="background: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);" class="text-white px-2 py-1 rounded m-2 inline-block shadow hover:shadow-lg">{{ tech }}</span>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup>
const apps = [
    {
        name: 'FxRate',
        anchor: 'fxrate',
        link: 'https://github.com/AfaanBilal/fxrate',
        image: 'https://raw.githubusercontent.com/AfaanBilal/fxrate/master/screenshots/fxrate-hero.png',
        tech: ['React Native', 'Typescript', 'Expo'],
        isFxRate: true,
        playStore: 'https://play.google.com/store/apps/details?id=dev.afaan.fxrate'
    },
    {
        name: 'Meeqat',
        anchor: 'meeqat',
        link: 'https://github.com/AfaanBilal/meeqat',
        image: 'https://raw.githubusercontent.com/AfaanBilal/meeqat/master/screenshots/meeqat-hero.png',
        tech: ['React Native', 'Typescript', 'Expo']
    },
    {
        name: 'One Dua',
        anchor: 'one-dua',
        link: 'https://github.com/AfaanBilal/one-dua',
        image: 'https://raw.githubusercontent.com/AfaanBilal/one-dua/master/screenshots/one-dua.png',
        tech: ['React Native', 'Typescript', 'Expo']
    },
    {
        name: 'Whisper',
        anchor: 'whisper',
        link: 'https://github.com/AfaanBilal/whisper-app',
        image: 'https://raw.githubusercontent.com/AfaanBilal/whisper-app/master/screenshots/whisper.png',
        tech: ['React Native', 'Typescript', 'Expo']
    },
    {
        name: 'Word Hunt',
        anchor: 'word-hunt',
        link: 'https://github.com/AfaanBilal/word_hunt',
        image: 'https://afaan.dev/screenshots/word_hunt.png',
        tech: ['Flutter', 'Dart']
    },
    {
        name: 'Statistical Analysis',
        anchor: 'statistical-analysis',
        link: 'https://github.com/AfaanBilal/Statistical-Analysis-Android',
        image: 'https://afaan.dev/screenshots/Statistical-Analysis.png',
        tech: ['Java', 'Android']
    }
]
</script>
