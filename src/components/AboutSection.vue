<script setup lang="ts">
import { ref } from 'vue'
import data from '@/data/about.yaml'
import type { Basics } from '@/types'

const about = ref<Basics>(data.about)
</script>

<template>
  <section id="about">
    <h1>{{ about.name }}</h1>
    <p>{{ about.title }}</p>
    <figure class="image">
      <img class="is-rounded" :src="about.picture" alt="Profile Photo" />
    </figure>
    <p>{{ about.email }}</p>
    <p>{{ about.phone }}</p>
    <p>{{ about.summary }}</p>
    <p>{{ about.location.city }}, {{ about.location.country }}</p>
    <div class="buttons">
      <a href="/ManuelSousa_CV.pdf" title="Download CV">
        <button class="button">Download CV</button>
      </a>
    </div>
    <template v-for="profile in about.profiles" :key="profile.id">
      <p>{{ profile.username }}</p>
      <a :alt="profile.network" :href="profile.url" target="_blank" rel="noopener noreferrer">{{ profile.network }}</a>
    </template>
  </section>
</template>
