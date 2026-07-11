<template>
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4">
        <div v-if="visible" role="dialog" aria-live="polite" aria-label="Cookie consent"
            class="fixed bottom-4 inset-x-4 md:left-auto md:right-6 md:max-w-md z-50">
            <div
                class="bg-gray-900 text-gray-200 border border-gray-700 rounded-2xl shadow-2xl p-5 backdrop-blur-md">
                <div class="flex items-start gap-3 mb-4">
                    <div class="p-2 rounded-lg bg-purple-900/30 text-purple-300 shrink-0">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p class="text-sm leading-relaxed">
                        This site uses privacy-respecting analytics (Google Analytics, IP-anonymized) only if you
                        allow it. Nothing is stored until you accept. See the
                        <a href="/privacy" class="text-purple-400 hover:underline">Privacy Policy</a>.
                    </p>
                </div>
                <div class="flex gap-3">
                    <button @click="decline"
                        class="flex-1 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60">
                        Decline
                    </button>
                    <button @click="accept"
                        class="flex-1 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60">
                        Accept
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'cookie-consent'
const visible = ref(false)

const gtagConsent = (state) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('consent', 'update', { analytics_storage: state })
    }
}

onMounted(() => {
    let stored = null
    try { stored = localStorage.getItem(STORAGE_KEY) } catch (e) { }
    // Only prompt when the visitor hasn't chosen yet.
    // A prior 'granted' is already restored by the inline script in index.html.
    if (stored !== 'granted' && stored !== 'denied') {
        visible.value = true
    }
})

const persist = (value) => {
    try { localStorage.setItem(STORAGE_KEY, value) } catch (e) { }
}

const accept = () => {
    persist('granted')
    gtagConsent('granted')
    visible.value = false
}

const decline = () => {
    persist('denied')
    gtagConsent('denied')
    visible.value = false
}
</script>
