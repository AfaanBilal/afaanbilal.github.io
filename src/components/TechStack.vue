<template>
  <section id="tech-stack" class="container mx-auto px-4 py-16">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Tech Stack</span>
      </h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        The technologies I use to build robust and scalable solutions.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <!-- This is a placeholder for logos. Since I don't have SVGs, I'll use styled text cards -->
      <div v-for="tech in stack" :key="tech"
        class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
        <span class="font-bold text-gray-700 dark:text-gray-200 group-hover:text-blue-600 transition-colors">{{ tech
          }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const stack = [
  "Vue.js", "Laravel", "Tailwind", "Python", "Docker", "Git", "MySQL", "AWS", "Node.js", "TypeScript", "React", "Linux"
]
</script>
