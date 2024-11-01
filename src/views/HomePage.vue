<script setup lang="ts">
import { ref } from 'vue'

import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import LanguagesSection from '@/components/LanguagesSection.vue'
import InterestsSection from '@/components/InterestsSection.vue'
// import ProjectsSection from '@/components/projects-section/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import dataAbout from '@/data/about.yaml'
import dataExperience from '@/data/experience.yaml'
import dataExperienceProject from '@/data/experience_project.yaml'
import dataExperienceLeadership from '@/data/experience_leadership.yaml'
import type { Basics, Experience } from '@/types'

const about = ref<Basics>(dataAbout.about)
const experience = ref<Experience[]>(dataExperience.experience)
const experienceProject = ref<Experience[]>(dataExperienceProject.experience_project)
const experienceLeadership = ref<Experience[]>(dataExperienceLeadership.experience_leadership)
</script>

<template>
  <main class="container is-max-desktop">
    <AboutSection :about="about" />
    <ExperienceSection title="Work Experience" :experience="experience" />
    <EducationSection />
    <ExperienceSection title="Project Experience" :experience="experienceProject" />
    <ExperienceSection title="Leadership Experience" :experience="experienceLeadership" />
    <div class="section">
      <div class="columns">
        <div class="column">
          <SkillsSection />
        </div>
        <div class="column">
          <LanguagesSection />
          <InterestsSection />
        </div>
      </div>
    </div>
    <!-- <ProjectsSection /> -->
    <ContactSection :email="about.email" />
  </main>
</template>
