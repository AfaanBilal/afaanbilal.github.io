<template>
  <section id="contact" class="container mx-auto px-4 py-24">
    <div
      class="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
      <div class="grid md:grid-cols-2">
        <div class="p-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white flex flex-col justify-between">
          <div>
            <h2 class="text-3xl font-bold mb-6">Let's Chat!</h2>
            <p class="mb-8 text-purple-100 leading-relaxed">
              Have a project idea or just want to say hi? I'd love to hear from you.
            </p>

            <div class="space-y-4">
              <a href="mailto:afaanbilal@gmail.com"
                class="flex items-center gap-3 hover:text-purple-200 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
                <span>afaanbilal@gmail.com</span>
              </a>
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>India</span>
              </div>
            </div>
          </div>

          <div class="mt-12 flex space-x-4">
            <!-- Social Icons here if needed -->
          </div>
        </div>

        <div class="p-10 bg-white dark:bg-gray-800">
          <form action="#" method="POST" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input type="text"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="John Doe">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="john@example.com">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea rows="4"
                class="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit"
              class="w-full py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors transform hover:-translate-y-1 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
