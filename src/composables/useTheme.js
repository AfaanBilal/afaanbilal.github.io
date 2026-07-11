import { ref, watch, onMounted, getCurrentInstance } from 'vue'

const isDark = ref(false)
let initialized = false

const apply = (dark) => {
    if (typeof document === 'undefined') return
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const resolveInitial = () => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = stored === 'dark' || (!stored && prefersDark)
    watch(isDark, apply)
}

const init = () => {
    if (initialized) return
    // Skip during SSR/SSG — no window/localStorage available.
    if (typeof window === 'undefined') return
    initialized = true
    // Defer reading the real theme until after mount so the first client render
    // matches the server-prerendered (isDark=false) markup and hydration stays
    // clean. CSS theming is already correct pre-paint: the inline script in
    // index.html sets the <html> `.dark` class before Vue loads.
    if (getCurrentInstance()) onMounted(resolveInitial)
    else resolveInitial()
}

export const useTheme = () => {
    init()
    const toggle = () => { isDark.value = !isDark.value }
    return { isDark, toggle }
}
