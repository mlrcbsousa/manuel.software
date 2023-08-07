<script setup lang="ts">
import { ref } from 'vue'
import data from '@/data/sections.yaml'
import type { NavbarItem } from '@/types'

defineProps<{ tagline?: string }>()

const sections = ref<NavbarItem[]>(data.sections)
</script>

<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <a href="#about" class="navbar-item">Manuel Sousa - Software Engineer</a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <small>{{ tagline }}</small>
        </div>
      </div>
      <div class="navbar-end">
        <div v-for="navItem in sections" :key="`nav-${navItem.name}`" class="navbar-item">
          <a :href="`#${navItem.id}`">{{ navItem.name }}</a>
        </div>
      </div>
    </div>
  </nav>
</template>
