<script setup lang="ts">
import { ref } from 'vue'

import data from '@/data/education.yaml'
import type { Education } from '@/types'

const education = ref<Education[]>(data.education)
</script>

<template>
  <section id="education" class="column">
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
