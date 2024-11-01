<script setup lang="ts">
import { ref } from 'vue'

import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import LanguagesSection from '@/components/LanguagesSection.vue'
// import ProjectsSection from '@/components/projects-section/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import dataAbout from '@/data/about.yaml'
import dataExperience from '@/data/experience.yaml'
import type { Basics, Experience } from '@/types'

const about = ref<Basics>(dataAbout.about)
const experience = ref<Experience[]>(dataExperience.experience)
</script>

<template>
  <main class="container is-max-desktop">
    <AboutSection :about="about" />
    <ExperienceSection title="Experience" :experience="experience" />
    <div class="section">
      <div class="columns">
        <EducationSection />
        <div class="column">
          <SkillsSection />
          <LanguagesSection />
        </div>
      </div>
    </div>
    <!-- <ProjectsSection /> -->
    <ContactSection :email="about.email" />
  </main>
</template>
