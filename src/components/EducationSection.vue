<script setup lang="ts">
import { ref } from 'vue'
import dataEducation from '@/data/education.yaml'
import type { Education } from '@/types'

const education = ref<Education[]>(dataEducation.education)
</script>

<template>
  <section id="education">
    <h1>Education</h1>
    <template v-for="school in education" :key="`${school.institution}-${school.studyType}`">
      <h2>
        <a :href="school.website" target="_blank" rel="noopener noreferrer">{{ school.institution }}</a>
      </h2>
      <p>{{ school.area }}, {{ school.studyType }}</p>
      <p>{{ school.startDate }} - {{ school.endDate ?? 'Present' }}</p>
    </template>
  </section>
</template>
