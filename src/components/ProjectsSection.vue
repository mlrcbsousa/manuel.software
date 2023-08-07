<script setup lang="ts">
import { ref } from 'vue'
import dataProjects from '@/data/projects.yaml'
import type { Project } from '@/types'

const projects = ref<Project[]>(dataProjects.projects)
</script>

<template>
  <section id="projects">
    <h1>Projects</h1>
    <template v-for="project in projects" :key="project.name">
      <h2 v-if="project.website">
        <a :href="project.website" target="_blank" rel="noopener noreferrer">{{ project.title }}</a>
      </h2>
      <h2 v-else>{{ project.title }}</h2>
      <p>{{ project.summary }}</p>
      <ul v-for="keyword in project.keywords" :key="keyword">
        <li>{{ keyword }}</li>
      </ul>
      <a :href="project.github" target="_blank" rel="noopener noreferrer">source</a>
    </template>
  </section>
</template>
