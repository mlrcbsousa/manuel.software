<script setup lang="ts">
import { ref } from 'vue'
import data from '@/data/languages.yaml'
import type { Language } from '@/types'

const languages = ref<Language[]>(data.languages)
</script>

<template>
  <section id="languages">
    <h1 class="title mb-6">Languages</h1>
    <table class="table is-fullwidth is-bordered">
      <tbody>
        <tr v-for="language in languages" :key="language.name">
          <th>{{ language.name }}</th>
          <td>{{ language.fluency }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
