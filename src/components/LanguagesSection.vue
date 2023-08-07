<script setup lang="ts">
import { ref } from 'vue'
import data from '@/data/languages.yaml'
import type { Language } from '@/types'

const languages = ref<Language[]>(data.languages)
</script>

<template>
  <section id="languages">
    <h1>Languages</h1>
    <template v-for="language in languages" :key="language.name">
      <p>{{ language.name }} - {{ language.fluency }}</p>
    </template>
  </section>
</template>
