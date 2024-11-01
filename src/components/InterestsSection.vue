<script setup lang="ts">
import { ref } from 'vue'

import data from '@/data/interests.yaml'

const interests = ref(data.interests)
</script>

<template>
  <section id="interests">
    <h1 class="title mb-6">Interests</h1>
    <div class="content">
      <p v-for="interest in interests" :key="interest.name" class="tag is-light is-medium mr-4">
        <i :class="interest.icon" class="icon fa-solid mr-2"></i>
        {{ interest.name }}
      </p>
    </div>
  </section>
</template>
