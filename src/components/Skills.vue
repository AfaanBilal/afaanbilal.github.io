<template>
    <section id="skills" class="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 animate-fade-in-up">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
            </h2>

            <div class="space-y-12">
                <!-- Languages -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span class="text-purple-400">#</span> Languages
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="skill in skills.languages" :key="skill"
                            class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium hover:bg-purple-900/40 hover:text-purple-300 border border-gray-700 transition-colors cursor-default">
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <!-- Frameworks & Technologies -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span class="text-pink-400">#</span> Frameworks & Technologies
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="skill in skills.frameworks" :key="skill"
                            class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium hover:bg-pink-900/40 hover:text-pink-300 border border-gray-700 transition-colors cursor-default">
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <!-- Tools & Platforms -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span class="text-blue-400">#</span> Tools & Platforms
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="skill in skills.tools" :key="skill"
                            class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium hover:bg-blue-900/40 hover:text-blue-300 border border-gray-700 transition-colors cursor-default">
                            {{ skill }}
                        </span>
                    </div>
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
