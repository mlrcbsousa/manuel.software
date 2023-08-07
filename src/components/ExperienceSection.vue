<script setup lang="ts">
import { ref } from 'vue'
import data from '@/data/experience.yaml'
import type { Experience } from '@/types'

const experience = ref<Experience[]>(data.experience)
</script>

<template>
  <section id="experience">
    <h1>Experience</h1>
    <template v-for="job in experience" :key="`${job.company}-${job.position}`">
      <h2>
        <a :href="job.website" target="_blank" rel="noopener noreferrer">{{ job.company }}</a>
      </h2>
      <p>{{ job.position }}</p>
      <p>{{ job.startDate }} - {{ job.endDate ?? 'Present' }}</p>
      <ul v-for="highlight in job.highlights" :key="highlight">
        <li>{{ highlight }}</li>
      </ul>
    </template>
  </section>
</template>
