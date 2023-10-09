import { type Ref, computed } from 'vue'

import type { Project } from '@/types'

export default function getFilteredProjects(
  projects: Ref<Project[]>,
  searchTerm: Ref<string>,
  selectedKeyword: Ref<string>,
) {
  return computed(() => {
    return projects.value.filter((project) => {
      const combinedText = [project.title, project.summary, ...project.keywords].join(' ').toLowerCase()
      const terms = searchTerm.value.toLowerCase().split(' ')
      return (
        terms.some((term) => combinedText.includes(term)) &&
        (selectedKeyword.value === '' || project.keywords.includes(selectedKeyword.value))
      )
    })
  })
}
