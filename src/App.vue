<script setup>
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import CommandPalette from './components/CommandPalette.vue'

// Site-wide defaults; pages override what differs (title, description, image).
const SITE = 'https://afaan.dev'
const TITLE = 'Afaan Bilal · Principal Software Engineer, CISO'
const DESCRIPTION = 'Principal Software Engineer, CISO. Expert in Full Stack Development, Cloud Computing, and Security.'
const IMAGE = `${SITE}/assets/afaan.png`

const route = useRoute()
const url = () => SITE + route.path

useHead({ link: [{ rel: 'canonical', href: url }] })
useSeoMeta({
  title: TITLE,
  description: DESCRIPTION,
  ogType: 'website',
  ogUrl: url,
  ogTitle: TITLE,
  ogDescription: DESCRIPTION,
  ogImage: IMAGE,
  twitterCard: 'summary_large_image',
  twitterTitle: TITLE,
  twitterDescription: DESCRIPTION,
  twitterImage: IMAGE,
})
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <CommandPalette />
  <router-view id="main"></router-view>
</template>
