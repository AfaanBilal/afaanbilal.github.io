<template>
    <section id="skills" class="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 animate-fade-in-up">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                <!-- Backend -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span class="text-pink-400">#</span> Backend
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="skill in skills.backend" :key="skill"
                            class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium hover:bg-pink-900/40 hover:text-pink-300 border border-gray-700 transition-colors cursor-default">
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <!-- Frontend -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span class="text-cyan-400">#</span> Frontend
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="skill in skills.frontend" :key="skill"
                            class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium hover:bg-cyan-900/40 hover:text-cyan-300 border border-gray-700 transition-colors cursor-default">
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <!-- Cloud & DevOps -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span class="text-orange-400">#</span> Cloud & DevOps
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="skill in skills.cloud" :key="skill"
                            class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium hover:bg-orange-900/40 hover:text-orange-300 border border-gray-700 transition-colors cursor-default">
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <!-- Databases -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span class="text-yellow-400">#</span> Databases
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="skill in skills.databases" :key="skill"
                            class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium hover:bg-yellow-900/40 hover:text-yellow-300 border border-gray-700 transition-colors cursor-default">
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <!-- Security & Compliance -->
                <div
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span class="text-green-400">#</span> Security & Compliance
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="skill in skills.security" :key="skill"
                            class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium hover:bg-green-900/40 hover:text-green-300 border border-gray-700 transition-colors cursor-default">
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
        "Rust", "Go", "PHP", "TypeScript", "JavaScript", "C++", "Python", "SQL", "Terraform"
    ],
    backend: [
        "Actix-Web", "Laravel", "Node.js", "SeaORM", "SQLx", "WebSockets"
    ],
    frontend: [
        "React", "Vue.js", "React Native", "Flutter", "Expo", "Tailwind CSS", "OpenGL"
    ],
    cloud: [
        "AWS", "EC2", "VPC", "ECS", "Fargate", "ECR", "Systems Manager", "Terraform", "Docker", "GitHub Actions", "Nginx", "Cloudflare"
    ],
    databases: [
        "MySQL", "Redis", "Elasticsearch", "SQLite", "HyperDB", "Valkey"
    ],
    security: [
        "SOC 2 Type II", "GuardDuty", "Inspector", "Dependabot", "Vanta"
    ]
}
</script>
