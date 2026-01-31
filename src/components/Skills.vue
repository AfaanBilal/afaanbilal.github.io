<template>
    <section id="skills" class="container mx-auto px-4 py-16 md:py-24">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16 animate-fade-in-up">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Skills</span>
        </h2>

        <div class="space-y-12">
            <!-- Languages -->
            <div
                class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <span class="text-purple-600">#</span> Languages
                </h3>
                <div class="flex flex-wrap gap-3">
                    <span v-for="skill in skills.languages" :key="skill"
                        class="px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-900/30 dark:hover:text-purple-300 transition-colors cursor-default">
                        {{ skill }}
                    </span>
                </div>
            </div>

            <!-- Frameworks & Technologies -->
            <div
                class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <span class="text-pink-600">#</span> Frameworks & Technologies
                </h3>
                <div class="flex flex-wrap gap-3">
                    <span v-for="skill in skills.frameworks" :key="skill"
                        class="px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium hover:bg-pink-100 hover:text-pink-700 dark:hover:bg-pink-900/30 dark:hover:text-pink-300 transition-colors cursor-default">
                        {{ skill }}
                    </span>
                </div>
            </div>

            <!-- Tools & Platforms -->
            <div
                class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                    <span class="text-blue-600">#</span> Tools & Platforms
                </h3>
                <div class="flex flex-wrap gap-3">
                    <span v-for="skill in skills.tools" :key="skill"
                        class="px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 transition-colors cursor-default">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const skills = {
    languages: [
        "PHP", "JavaScript", "TypeScript", "Python", "Java", "C#", "C++", "C", "SQL", "HTML5", "CSS3", "SASS"
    ],
    frameworks: [
        "Laravel", "Vue.js", "React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Livewire", "Alpine.js", "Electron"
    ],
    tools: [
        "Git", "GitHub", "Docker", "MySQL", "PostgreSQL", "SQLite", "Firebase", "DigitalOcean", "Composer", "NPM", "Vite", "VS Code"
    ]
}
</script>
