<script setup lang="ts">
import { ref } from 'vue'
import dataAbout from '@/data/about.yaml'
import dataSections from '@/data/sections.yaml'
import type { Section, Basics } from '@/types'
import { scrollToElement } from '@/utils/scroll'

const about = ref<Basics>(dataAbout.about)
const sections = ref<Section[]>(dataSections.sections)
</script>

<template>
  <nav class="navbar has-shadow is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" @click.prevent="scrollToElement('about')">
        <strong>{{ about.name }}</strong>
        &nbsp;- {{ about.title }}
      </a>
      <div class="navbar-item dropdown is-hidden-tablet is-right is-hoverable">
        <div class="dropdown-trigger">
          <button class="button is-white" aria-haspopup="true" aria-controls="dropdown-menu">
            <span class="icon">
              <i class="fa-solid fa-bars" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div id="dropdown-menu" class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a
              v-for="section in sections"
              :key="`nav-${section.name}`"
              class="dropdown-item"
              @click.prevent="scrollToElement(section.id)"
              >{{ section.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <a
          v-for="section in sections"
          :key="`nav-${section.name}`"
          class="navbar-item"
          @click.prevent="scrollToElement(section.id)"
          >{{ section.name }}</a
        >
      </div>
    </div>
  </nav>
</template>
