<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" @click="close"
            :class="animate ? 'opacity-100' : 'opacity-0'"></div>

        <!-- Palette -->
        <div class="relative w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-200"
            :class="animate ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4'">

            <!-- Search Input -->
            <div class="flex items-center border-b border-gray-700 p-4">
                <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input ref="inputRef" v-model="search" type="text" placeholder="Type a command or search..."
                    class="w-full bg-transparent text-lg text-white placeholder-gray-500 focus:outline-none"
                    @keydown.down.prevent="navigate(1)" @keydown.up.prevent="navigate(-1)" @keydown.enter="execute"
                    @keydown.esc="close" />
                <div class="text-xs text-gray-500 font-mono border border-gray-700 rounded px-2 py-0.5">ESC</div>
            </div>

            <!-- List -->
            <div class="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
                <div v-if="filteredCommands.length === 0" class="p-8 text-center text-gray-500">
                    No results found.
                </div>

                <div v-else>
                    <div v-for="(group, groupName) in groupedCommands" :key="groupName" class="mb-2">
                        <div v-if="group.length > 0"
                            class="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 py-2">
                            {{ groupName }}
                        </div>
                        <button v-for="cmd in group" :key="cmd.id"
                            class="w-full flex items-center justify-between px-3 py-3 rounded-lg text-left transition-colors group"
                            :class="selectedId === cmd.id ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'"
                            @click="trigger(cmd)" @mousemove="selectedId = cmd.id">
                            <div class="flex items-center gap-3">
                                <component :is="cmd.icon" class="w-5 h-5"
                                    :class="selectedId === cmd.id ? 'text-white' : 'text-gray-400'" />
                                <span>{{ cmd.label }}</span>
                            </div>
                            <div v-if="cmd.shortcut" class="text-xs font-mono opacity-50"
                                :class="selectedId === cmd.id ? 'text-white' : 'text-gray-500'">
                                {{ cmd.shortcut }}
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="bg-gray-950 px-4 py-2 border-t border-gray-800 flex justify-between items-center text-xs">
                <div class="flex gap-4 text-gray-500">
                    <span class="flex items-center gap-1"><kbd class="bg-gray-800 px-1 rounded">↵</kbd>
                        to select</span>
                    <span class="flex items-center gap-1"><kbd class="bg-gray-800 px-1 rounded">↑↓</kbd>
                        to navigate</span>
                </div>
                <div class="text-gray-600">
                    &copy; Afaan Bilal
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, h } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)
const animate = ref(false)
const search = ref('')
const selectedId = ref('')
const inputRef = ref(null)

// Icons
const IconHome = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': 2 }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })])
const IconCode = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': 2 }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })])
const IconBriefcase = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': 2 }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })])
const IconMail = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': 2 }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })])
const IconGithub = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' })])
const IconLink = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': 2 }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' })])
const IconSun = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': 2 }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' })])
const IconMoon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': 2 }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' })])
const IconTerminal = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': 2 }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' })])

const commands = [
    {
        id: 'home',
        label: 'Go to Home',
        group: 'Navigation',
        icon: IconHome,
        action: () => router.push('/').then(() => scrollTo('top'))
    },
    {
        id: 'skills',
        label: 'Go to Skills',
        group: 'Navigation',
        icon: IconCode,
        action: () => scrollTo('skills')
    },
    {
        id: 'opensource',
        label: 'Go to Open Source',
        group: 'Navigation',
        icon: IconGithub,
        action: () => scrollTo('open-source')
    },
    {
        id: 'research',
        label: 'Go to Research',
        group: 'Navigation',
        icon: IconBriefcase,
        action: () => scrollTo('research-projects')
    },
    {
        id: 'courses',
        label: 'Go to Courses',
        group: 'Navigation',
        icon: IconBriefcase,
        action: () => scrollTo('courses')
    },
    {
        id: 'apps',
        label: 'Go to Apps & Projects',
        group: 'Navigation',
        icon: IconBriefcase,
        action: () => scrollTo('apps')
    },
    {
        id: 'contact',
        label: 'Go to Contact',
        group: 'Navigation',
        icon: IconMail,
        action: () => scrollTo('contact')
    },
    {
        id: 'nanocore',
        label: 'Go to NanoCore',
        group: 'Projects',
        icon: IconTerminal,
        action: () => scrollTo('nanocore')
    },
    {
        id: 'hyperdb',
        label: 'Go to HyperDB',
        group: 'Projects',
        icon: IconCode,
        action: () => scrollTo('hyperdb')
    },
    {
        id: 'koshur',
        label: 'Go to Koshur',
        group: 'Projects',
        icon: IconCode,
        action: () => scrollTo('koshur')
    },
    {
        id: 'github',
        label: 'Open GitHub Profile',
        group: 'Social',
        icon: IconGithub,
        shortcut: '↗',
        action: () => window.open('https://github.com/AfaanBilal', '_blank')
    },
    {
        id: 'theme',
        label: 'Toggle Theme',
        group: 'System',
        icon: IconSun,
        action: () => {
            const isDark = document.documentElement.classList.toggle('dark')
            localStorage.setItem('theme', isDark ? 'dark' : 'light')
        }
    },
    {
        id: 'email',
        label: 'Copy Email Address',
        group: 'Actions',
        icon: IconLink,
        action: () => {
            navigator.clipboard.writeText('hello@afaan.dev')
            alert('Email copied to clipboard!')
        }
    }
]

const filteredCommands = computed(() => {
    if (!search.value) return commands
    const query = search.value.toLowerCase()
    return commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query) ||
        cmd.group.toLowerCase().includes(query)
    )
})

const groupedCommands = computed(() => {
    const groups = {}
    filteredCommands.value.forEach(cmd => {
        if (!groups[cmd.group]) groups[cmd.group] = []
        groups[cmd.group].push(cmd)
    })
    return groups
})

const navigate = (dir) => {
    const currentList = filteredCommands.value
    if (currentList.length === 0) return

    const idx = currentList.findIndex(c => c.id === selectedId.value)
    let newIdx = idx + dir

    if (newIdx < 0) newIdx = currentList.length - 1
    if (newIdx >= currentList.length) newIdx = 0

    selectedId.value = currentList[newIdx].id
}

const execute = () => {
    const cmd = commands.find(c => c.id === selectedId.value)
    if (cmd) trigger(cmd)
}

const trigger = (cmd) => {
    cmd.action()
    close()
}

const scrollTo = (id) => {
    close()
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const close = () => {
    animate.value = false
    setTimeout(() => {
        isOpen.value = false
        search.value = ''
    }, 200)
}

const onKeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        isOpen.value = true
        if (commands.length > 0) selectedId.value = commands[0].id
        nextTick(() => {
            animate.value = true
            inputRef.value?.focus()
        })
    }
}

onMounted(() => {
    window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
})
</script>
