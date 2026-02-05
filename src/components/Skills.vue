<template>
    <section id="skills" class="w-full py-24 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white scroll-mt-12">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-10 animate-fade-in-up">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="category in categories" :key="category.title"
                    class="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <svg class="w-6 h-6" :class="`text-${category.color}-400`" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon">
                            </path>
                        </svg> {{ category.title }}
                    </h3>
                    <div class="flex flex-wrap gap-3">
                        <span v-for="skill in category.skills" :key="skill"
                            class="px-4 py-2 rounded-full bg-gray-900/50 text-gray-300 font-medium border border-gray-700 transition-colors cursor-default"
                            :class="`hover:bg-${category.color}-900/40 hover:text-${category.color}-300`">
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const categories = [
    {
        title: "Security & Compliance",
        color: "green",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        skills: ["SOC 2 Type II", "HIPAA", "GDPR", "OWASP", "OAuth2", "SAML / SSO", "AWS IAM", "WAF", "GuardDuty", "Inspector", "Security Hub", "Dependabot", "Vanta"]
    },
    {
        title: "Languages",
        color: "purple",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        skills: ["Rust", "Go", "PHP", "TypeScript", "JavaScript", "C", "C++", "Python", "SQL", "Terraform"]
    },
    {
        title: "Backend",
        color: "pink",
        icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
        skills: ["Actix-Web", "Rocket", "Laravel", "Node.js", "Bun", "Express.js", "SeaORM", "SQLx", "WebSockets"]
    },
    {
        title: "Frontend",
        color: "cyan",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        skills: ["React", "Vue.js", "React Native", "Flutter", "Expo", "Tailwind CSS", "OpenGL"]
    },
    {
        title: "AI",
        color: "teal",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        skills: ["LLMs", "AI Agents", "RAG", "LangChain", "Generative AI", "Cloudflare AI"]
    },
    {
        title: "Integrations & SaaS",
        color: "indigo",
        icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
        skills: ["Stripe", "Zapier", "HubSpot", "Slack", "Plaid", "PayPal", "SendGrid", "Resend"]
    },
    {
        title: "Cloud & DevOps",
        color: "orange",
        icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
        skills: ["AWS", "EC2", "VPC", "ECS", "Fargate", "ECR", "Systems Manager", "Sentry", "Terraform", "Docker", "GitHub Actions", "Nginx", "Cloudflare"]
    },
    {
        title: "Databases",
        color: "yellow",
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
        skills: ["Aurora", "MySQL", "Redis", "Elasticsearch", "SQLite", "HyperDB", "Valkey"]
    },
    {
        title: "Architecture & Systems",
        color: "red",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
        skills: ["Microservices", "Event-Driven Architecture", "System Design", "Serverless", "Technical Leadership", "Concurrency", "Memory Management", "Multithreading", "Low-level Optimization"]
    }
]
</script>
