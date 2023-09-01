import { ref } from 'vue'
import type { Project } from '@/types'
import { expect, it, describe } from 'vitest'
import getFilteredProjects from '@/components/projects-section/filtered-projects'

describe('getFilteredProjects', () => {
  it('should filter projects correctly', () => {
    const projects = ref<Project[]>([
      {
        title: 'Project 1',
        summary: 'Summary 1',
        keywords: ['key1', 'key2'],
        github: 'github1',
      },
      {
        title: 'Project 2',
        summary: 'Summary key1',
        keywords: ['key3', 'key4'],
        github: 'github2',
      },
      {
        title: 'key1',
        summary: 'Summary 3',
        keywords: ['key5', 'key6'],
        github: 'github3',
      },
    ])
    const searchTerm = ref('key1')
    const selectedKeyword = ref('')

    const filteredProjects = getFilteredProjects(projects, searchTerm, selectedKeyword)

    expect(filteredProjects.value.length).toBe(3)
    expect(filteredProjects.value[0].title).toBe('Project 1')
    expect(filteredProjects.value[1].title).toBe('Project 2')
    expect(filteredProjects.value[2].title).toBe('key1')

    selectedKeyword.value = 'key3'
    expect(filteredProjects.value.length).toBe(1)
    expect(filteredProjects.value[0].title).toBe('Project 2')

    searchTerm.value = 'nonexistent'
    expect(filteredProjects.value.length).toBe(0)
  })
})
