<script setup lang="ts">
import type { Basics } from '@/types'
import { toRefs } from 'vue'

const props = defineProps<{ about: Basics }>()
const { about } = toRefs(props)
</script>

<template>
  <section id="about" class="section">
    <div class="columns is-vcentered">
      <div class="column">
        <h1 class="title is-1">{{ about.name }}</h1>
        <p class="subtitle is-3 mb-4">{{ about.title }}</p>
        <p class="is-size-5 mb-5">{{ about.summary }}</p>
        <div class="buttons mb-5">
          <a href="/ManuelSousa_CV.pdf" title="Download CV" class="button mr-4 is-outlined is-link">
            <span class="is-hidden-mobile">Download</span>
            <i class="icon fa-regular fa-file-pdf"></i>
          </a>
          <a
            v-for="profile in about.profiles"
            :key="profile.network"
            class="button is-white has-text-link"
            :alt="profile.network"
            :href="profile.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="icon fa-brands is-size-4" :class="profile.icon"></i>
          </a>
        </div>
        <p class="heading">{{ about.email }}</p>
        <p class="heading">{{ about.phone }}</p>
        <p class="heading">{{ about.location.city }}, {{ about.location.country }}</p>
      </div>
      <div data-aos="fade-right" class="column is-two-fifths profile-photo">
        <figure class="image">
          <img class="is-rounded" :src="about.picture" alt="Profile Photo" />
        </figure>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
#about
  margin-top: 2rem
  padding-top: 4rem
</style>
