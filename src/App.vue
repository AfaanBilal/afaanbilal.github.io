<script setup>
import CommandPalette from './components/CommandPalette.vue'
</script>

<template>
  <a href="#main" class="skip-link">Skip to content</a>
  <CommandPalette />
  <router-view id="main"></router-view>
</template>
