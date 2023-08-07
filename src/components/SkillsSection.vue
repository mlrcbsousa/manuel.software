<script setup lang="ts">
import { ref } from 'vue'
import data from '@/data/skills.yaml'

const skills = ref<string[]>(data.skills)
</script>

<template>
  <section id="skills">
    <h1>Skills</h1>
    <template v-for="skill in skills" :key="skill">
      <p>{{ skill }}</p>
    </template>
  </section>
</template>
