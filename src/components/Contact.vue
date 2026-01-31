<template>
  <div id="contact" class="py-5" style="background: linear-gradient(270deg, #8034cc 0%,#991a79 100%)">
      <section class="container mx-auto px-6 p-10">
          <h2 class="text-4xl font-bold text-center mb-8 text-white">Let's talk!</h2>

          <div class="flex justify-center my-2" v-show="sent">
              <div class="alert flex flex-row items-center bg-green-200 p-2 rounded border-b-2 border-green-300 w-64">
                  <div class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                      <span class="text-green-500">
                          <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                      </span>
                  </div>
                  <div class="alert-content ml-4">
                      <div class="alert-title font-semibold text-lg text-green-800">Success</div>
                      <div class="alert-description text-sm text-green-600">Message sent!</div>
                  </div>
              </div>
          </div>

          <div class="flex justify-center my-2" v-show="sending">
             <div class="text-white">Sending...</div>
          </div>

          <form @submit.prevent="sendMessage" v-if="!sent" class="w-full max-w-lg mx-auto">
             <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-name">
                    Name
                  </label>
                  <input v-model="name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Jane Doe">
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-email">
                    E-mail
                  </label>
                  <input v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="jane@example.com">
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-message">
                    Message
                  </label>
                  <textarea v-model="message" class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="grid-message" placeholder="Hello..."></textarea>
                </div>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                  <button class="shadow bg-purple-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Send
                  </button>
                </div>
                <div class="md:w-2/3"></div>
              </div>
            </form>

      </section>
  </div>
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
            sending.value = false
            sent.value = true
        }
    })
}
</script>
