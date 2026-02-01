<template>
  <section id="contact" class="container mx-auto px-4 py-24 scroll-mt-12">
    <div
      class="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
      <div class="grid md:grid-cols-2">
        <div class="p-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white flex flex-col justify-between">
          <div>
            <h2 class="text-3xl font-bold mb-6">Let's Chat!</h2>
            <p class="mb-8 text-purple-100 leading-relaxed">
              Have a project idea or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div class="mt-12 space-y-6">
            <a href="mailto:hello@afaan.dev"
              class="flex items-center gap-4 hover:text-purple-200 transition-colors group">
              <div class="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors backdrop-blur-sm">
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
                class="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-sm">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/AfaanBilal" target="_blank" rel="noopener" aria-label="LinkedIn Profile"
                class="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-sm">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="p-10 bg-white dark:bg-gray-800">
          <div v-if="sent"
            class="h-full flex flex-col items-center justify-center text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl animate-fade-in">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
            <p class="text-gray-600 dark:text-gray-300">Thanks for reaching out. I'll get back to you shortly.</p>
            <button @click="sent = false"
              class="mt-6 text-purple-600 dark:text-purple-400 font-medium hover:underline cursor-pointer">
              Send another message
            </button>
          </div>

          <form v-else @submit.prevent="sendMessage" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input type="text" v-model="name" required
                class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="John Doe">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email" v-model="email" required
                class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="john@example.com">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea rows="4" v-model="message" required
                class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none transition-all text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" :disabled="sending"
              class="w-full py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors transform hover:-translate-y-1 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center cursor-pointer">
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

const name = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)
const sending = ref(false)

function sendMessage() {
  sending.value = true
  fetch('https://script.google.com/macros/s/AKfycbyr7UVSG3tsVPZagH79m1MMvBVaKDj6WNdWiCKvS8ws4pkRX9wm5cOAIr3ZCq20btgS/exec', {
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'name=' + encodeURIComponent(name.value) + '&email=' + encodeURIComponent(email.value) + '&message=' + encodeURIComponent(message.value)
  }).then(r => r.text()).then((d) => {
    if (d == 'success') {
      name.value = ''
      email.value = ''
      message.value = ''
      sent.value = true
    }
  }).finally(() => {
    sending.value = false
  })
}
</script>
