<template>
  <section id="contact"
    class="w-full py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white scroll-mt-12">
    <div
      class="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl shadow-purple-900/20 overflow-hidden border border-gray-600">
      <div class="grid md:grid-cols-2">
        <div
          class="p-10 bg-gradient-to-br from-purple-900/80 to-pink-900/80 text-white flex flex-col justify-between relative overflow-hidden">
          <!-- Decorative circle -->
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-0 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl"></div>

          <div class="relative z-10">
            <h2 class="text-3xl font-bold mb-6">Let's Chat!</h2>
            <p class="md:mb-8 text-gray-300 leading-relaxed">
              Have a project idea or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div class="mt-12 space-y-6 relative z-10">
            <a href="mailto:hello@afaan.dev"
              class="flex items-center gap-4 hover:text-purple-300 transition-colors group">
              <div
                class="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
              </div>
              <span class="text-xl font-medium">hello@afaan.dev</span>
            </a>

            <div class="flex gap-4">
              <a href="https://github.com/AfaanBilal" target="_blank" rel="noopener" aria-label="GitHub Profile"
                class="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-sm border border-white/10">
                <IconGitHub class="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/AfaanBilal" target="_blank" rel="noopener" aria-label="LinkedIn Profile"
                class="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-sm border border-white/10">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="p-10 bg-gray-900/80 backdrop-blur-sm">
          <div v-if="sent"
            class="h-full flex flex-col items-center justify-center text-center p-6 bg-green-900/20 rounded-2xl animate-fade-in border border-green-800/30">
            <div class="w-16 h-16 bg-green-800/30 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p class="text-gray-300">Thanks for reaching out. I'll get back to you shortly.</p>
            <button @click="sent = false" class="mt-6 text-purple-400 font-medium hover:underline cursor-pointer">
              Send another message
            </button>
          </div>

          <div v-if="error"
            class="mb-4 px-4 py-3 bg-red-900/30 border border-red-700/50 rounded-lg text-red-300 text-sm flex items-center gap-2">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            Something went wrong. Please try again or email me directly at
            <a href="mailto:hello@afaan.dev" class="underline hover:text-red-200">hello@afaan.dev</a>.
          </div>

          <form v-if="!sent" @submit.prevent="sendMessage" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input type="text" v-model="name" required
                class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-500 focus:bg-gray-700"
                placeholder="John Doe">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" v-model="email" required
                class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-500 focus:bg-gray-700"
                placeholder="john@example.com">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea rows="4" v-model="message" required
                class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-white placeholder-gray-500 focus:bg-gray-700"
                placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" :disabled="sending"
              class="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center cursor-pointer">
              <span v-if="sending" class="flex items-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import IconGitHub from './icons/IconGitHub.vue'

const name = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)
const sending = ref(false)
const error = ref(false)

async function sendMessage() {
  sending.value = true
  error.value = false
  try {
    const r = await fetch('https://script.google.com/macros/s/AKfycbyr7UVSG3tsVPZagH79m1MMvBVaKDj6WNdWiCKvS8ws4pkRX9wm5cOAIr3ZCq20btgS/exec', {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'name=' + encodeURIComponent(name.value) + '&email=' + encodeURIComponent(email.value) + '&message=' + encodeURIComponent(message.value)
    })
    const d = await r.text()
    if (d === 'success') {
      name.value = ''
      email.value = ''
      message.value = ''
      sent.value = true
    } else {
      error.value = true
    }
  } catch {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>
