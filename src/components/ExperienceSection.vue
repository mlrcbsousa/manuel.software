<script setup lang="ts">
import type { Experience } from '@/types'

defineProps<{ experience: Experience[]; title: string }>()
</script>

<template>
  <section id="experience" class="section">
    <h1 class="title mb-6">{{ title }}</h1>
    <div v-for="job in experience" :key="`${job.company}-${job.position}`" class="content">
      <small class="heading">{{ job.startDate ?? 'Completed' }} - {{ job.endDate ?? 'Present' }}</small>
      <p class="title is-4">{{ job.position }}</p>
      <p class="subtitle mb-0">
        <a :href="job.website" target="_blank" rel="noopener noreferrer">{{ job.company }}</a>
      </p>
      <ul class="mt-1">
        <li v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
    </div>
  </section>
</template>
