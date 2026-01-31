<template>
  <section id="courses" class="container mx-auto px-4 py-8 md:p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 my-10">Courses</h2>
      <a href="/assets/API-Server-Development-in-Rust-with-Actix-Web-SQLx-and-JWT.pdf" class="text-gray-800 border p-2 rounded hover:border-gray-300 block text-center md:inline-block">
          📄 Course Overview: API Server Development in Rust with Actix Web, SQLx and JWT
      </a>
      <div class="pt-8 flex gap-4 flex-wrap">
          <a v-for="course in courses" :key="course.title" class="w-full" :href="course.url" target="_blank" rel="noopener">
              <div style="background: linear-gradient(240deg, #fb8817, #ff4b01, #c12127, #e02aff)" class="text-white p-4 border rounded hover:border-black">
                  <div class="flex gap-6 items-center flex-wrap">
                      <img class="w-full md:w-32 rounded" :src="course.image" :alt="course.title" />
                      <div>
                          <div class="text-2xl font-bold">
                              {{ course.title }}
                              <small><code>[Udemy]</code></small>
                          </div>
                          {{ course.description }}
                      </div>
                  </div>
              </div>
          </a>
      </div>
  </section>
</template>

<script setup>
const courses = [
    {
        title: 'Creating an API server in Rust with Actix, SQLx and JWT',
        url: 'https://www.udemy.com/course/rust-api-server-actix-sqlx-jwt/?referralCode=0C3C85FE260C2016C334',
        image: '/images/udemy-rust-actix-sqlx-course.png',
        description: 'Build your own REST API server with the safety and performance of Rust using Actix Web, SQLx and JWT authentication.'
    },
    {
        title: 'Creating an API server in Rust with Rocket, SeaORM and JWT',
        url: 'https://www.udemy.com/course/rest-api-server-rust-rocket-seaorm-jwt/?referralCode=0A41F1674B329B330B9F',
        image: '/images/udemy-rust-rest-course.jpg',
        description: 'Build your own REST API server with the safety and performance of Rust using Rocket, SeaORM and JWT authentication.'
    },
    {
        title: 'Creating a REST API server with PHP, Laravel and MySQL',
        url: 'https://www.udemy.com/course/laravel-rest-api-server/?referralCode=AE00F1CF28608CD5F56E',
        image: '/images/udemy-laravel-rest-course.png',
        description: 'Project-based guide to creating production-ready Laravel REST API servers including authentication, route-model binding, pagination, sorting, searching and more.'
    }
]
</script>
