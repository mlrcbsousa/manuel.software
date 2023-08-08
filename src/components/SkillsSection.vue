<script setup lang="ts">
import { ref } from 'vue'
import data from '@/data/skills.yaml'

const skills = ref<string[]>(data.skills)
</script>

<template>
  <section id="skills">
    <h1 class="title mb-6">Skills</h1>
    <div class="content">
      <p v-for="skill in skills" :key="skill" class="tag is-light is-medium mr-4">{{ skill }}</p>
    </div>
  </section>
</template>
