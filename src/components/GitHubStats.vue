<template>
    <div id="github-stats" class="py-5" style="background: linear-gradient(270deg, #8034cc 0%,#991a79 100%)">
        <section class="container mx-auto px-4 py-8 md:p-10">
            <h2 class="text-4xl font-bold text-center mb-5 text-white">GitHub Stats</h2>
            <div class="flex justify-center flex-wrap">
                <div class="w-full md:w-1/3 py-4 flex justify-center">
                    <img v-show="!errors.streak"
                        src="https://github-readme-streak-stats.herokuapp.com?user=AfaanBilal&theme=default"
                        alt="AfaanBilal's GitHub Streak Stats showing current and longest streak"
                        @error="errors.streak = true" />
                    <StatFallback v-if="errors.streak" label="GitHub Streak" />
                </div>
                <div class="w-full md:w-1/3 py-4 flex justify-center">
                    <img v-show="!errors.langs"
                        src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=AfaanBilal&layout=compact&langs_count=10"
                        alt="AfaanBilal's Top Languages on GitHub"
                        @error="errors.langs = true" />
                    <StatFallback v-if="errors.langs" label="Top Languages" />
                </div>
                <div class="w-full md:w-1/3 py-4 flex justify-center">
                    <img v-show="!errors.stats"
                        src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=AfaanBilal&show_icons=true&include_all_commits=true&count_private=true&custom_title=GitHub+Stats"
                        alt="AfaanBilal's GitHub Stats showing total stars, commits, PRs, and issues"
                        @error="errors.stats = true" />
                    <StatFallback v-if="errors.stats" label="GitHub Stats" />
                </div>
            </div>
            <div class="flex justify-center flex-wrap">
                <div class="w-full py-4 flex justify-center">
                    <img v-show="!errors.trophy" class="w-full"
                        src="https://github-profile-trophy.vercel.app/?username=AfaanBilal&column=-1&margin-w=50&margin-h=50"
                        alt="AfaanBilal's GitHub Trophies"
                        @error="errors.trophy = true" />
                    <StatFallback v-if="errors.trophy" label="GitHub Trophies" />
                </div>
            </div>
            <div class="flex justify-center flex-wrap">
                <div class="w-full py-4 flex justify-center">
                    <img v-show="!errors.activity" class="w-full"
                        src="https://github-readme-activity-graph.vercel.app/graph?username=AfaanBilal&theme=react-dark&hide_title=true&radius=10&area=true"
                        alt="AfaanBilal's GitHub Contribution Graph"
                        @error="errors.activity = true" />
                    <StatFallback v-if="errors.activity" label="Contribution Graph" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { reactive, defineComponent, h } from 'vue'

const errors = reactive({
    streak: false,
    langs: false,
    stats: false,
    trophy: false,
    activity: false,
})

const StatFallback = defineComponent({
    props: { label: String },
    setup(props) {
        return () => h('div', {
            class: 'flex flex-col items-center justify-center gap-2 px-8 py-6 rounded-xl bg-white/10 border border-white/20 text-white/60 text-sm'
        }, [
            h('svg', { class: 'w-8 h-8', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' })
            ),
            h('span', props.label),
            h('a', {
                href: 'https://github.com/AfaanBilal',
                target: '_blank',
                rel: 'noopener',
                class: 'text-white/80 underline hover:text-white text-xs'
            }, 'View on GitHub ↗')
        ])
    }
})
</script>
