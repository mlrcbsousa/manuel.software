<script setup lang="ts">
import { ref, computed } from 'vue'
import dataProjects from '@/data/projects.yaml'
import type { Project } from '@/types'
import getFilteredProjects from '@/components/projects-section/filtered-projects'

const projects = ref<Project[]>(dataProjects.projects)
const searchTerm = ref('')
const selectedKeyword = ref('')

const allKeywords = computed(() => {
  const keywords = new Set<string>()
  projects.value.forEach((p) => p.keywords.forEach((k) => keywords.add(k)))
  return [...keywords]
})

const filteredProjects = getFilteredProjects(projects, searchTerm, selectedKeyword)
</script>

<template>
  <section id="projects" class="section">
    <h1 class="title mb-6">Projects</h1>
    <div class="field is-grouped">
      <div class="control has-icons-left">
        <div class="select">
          <select v-model="selectedKeyword">
            <option value="">Keyword</option>
            <option v-for="keyword in allKeywords" :key="keyword">{{ keyword }}</option>
          </select>
        </div>
        <span class="icon is-left">
          <a class="delete" @click="selectedKeyword = ''"></a>
        </span>
      </div>
      <div class="control is-expanded has-icons-right">
        <input v-model="searchTerm" class="input" type="text" placeholder="Search projects" />
        <span class="icon is-right">
          <a class="delete" @click="searchTerm = ''"></a>
        </span>
      </div>
    </div>
    <div class="columns is-multiline">
      <div v-for="project in filteredProjects" :key="project.title" class="column is-one-third">
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
