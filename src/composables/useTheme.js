import { ref, watch } from 'vue'

const isDark = ref(false)
let initialized = false

const apply = (dark) => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const init = () => {
    if (initialized) return
    initialized = true
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = stored === 'dark' || (!stored && prefersDark)
    apply(isDark.value)
    watch(isDark, apply)
}

export const useTheme = () => {
    init()
    const toggle = () => { isDark.value = !isDark.value }
    return { isDark, toggle }
}
