<script setup lang="ts">
import { ref } from 'vue'
import dataAbout from '@/data/about.yaml'
import dataSections from '@/data/sections.yaml'
import type { Section, Basics } from '@/types'

const about = ref<Basics>(dataAbout.about)
const sections = ref<Section[]>(dataSections.sections)
</script>

<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <a href="#about" class="navbar-item">
        <strong>{{ about.name }}</strong>
        &nbsp;- {{ about.title }}
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <a v-for="section in sections" :key="`nav-${section.name}`" class="navbar-item" :href="`#${section.id}`">{{
          section.name
        }}</a>
      </div>
    </div>
  </nav>
</template>
