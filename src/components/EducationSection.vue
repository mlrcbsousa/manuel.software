<script setup lang="ts">
import { ref } from 'vue'
import dataEducation from '@/data/education.yaml'
import type { Education } from '@/types'

const education = ref<Education[]>(dataEducation.education)
</script>

<template>
  <section id="education" class="column">
    <!-- <h1 class="title mb-6">Experience</h1>
    <div v-for="job in experience" :key="`${job.company}-${job.position}`" class="content">
      <small class="heading">{{ job.startDate }} - {{ job.endDate ?? 'Present' }}</small>
      <p class="title is-4">{{ job.position }}</p>
      <p class="subtitle mb-0">
        <a :href="job.website" target="_blank" rel="noopener noreferrer">{{ job.company }}</a>
      </p>
      <ul class="mt-1">
        <li v-for="highlight in job.highlights" :key="highlight">{{ highlight }}</li>
      </ul>
    </div> -->

    <h1 class="title mb-6">Education</h1>
    <div v-for="school in education" :key="`${school.institution}-${school.studyType}`" class="content">
      <small class="heading">{{ school.startDate }} - {{ school.endDate ?? 'Present' }}</small>
      <p class="title is-4">{{ school.area }}{{ school.studyType ? `, ${school.studyType}` : '' }}</p>
      <p class="subtitle">
        <a :href="school.website" target="_blank" rel="noopener noreferrer">{{ school.institution }}</a>
      </p>
    </div>
  </section>
</template>
