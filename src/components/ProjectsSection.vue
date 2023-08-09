<script setup lang="ts">
import { ref } from 'vue'
import dataProjects from '@/data/projects.yaml'
import type { Project } from '@/types'

const projects = ref<Project[]>(dataProjects.projects)
</script>

<template>
  <section id="projects" class="section">
    <h1 class="title mb-6">Projects</h1>
    <div class="columns is-multiline">
      <div v-for="project in projects" :key="project.title" class="column is-one-third">
        <div class="card">
          <div class="card-content">
            <h2 v-if="project.website" class="title is-4 project-title">
              <a :href="project.website" target="_blank" rel="noopener noreferrer" class="has-text-link">{{
                project.title
              }}</a>
            </h2>
            <h2 v-else class="title is-4 project-title">{{ project.title }}</h2>
            <div class="subtitle is-6">
              <div class="project-summary" :label="project.summary" :data-full-text="project.summary">
                {{ project.summary }}
              </div>
              <div class="mt-1">
                <span class="icon-text">
                  <span class="icon">
                    <a alt="Source Code" :href="project.github" target="_blank" rel="noopener noreferrer">
                      <i class="fa-solid fa-code"></i>
                    </a>
                  </span>
                  <span>
                    <em v-for="keyword in project.keywords" :key="keyword"> #{{ keyword }}</em>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.project-title
  height: 1.8rem
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
</style>
