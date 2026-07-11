<script setup>
import CommandPalette from './components/CommandPalette.vue'
import ConsentBanner from './components/ConsentBanner.vue'
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <CommandPalette />
  <router-view id="main"></router-view>
  <ConsentBanner />
</template>
