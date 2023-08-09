import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { scrollToSection } from '@/utils/scroll'

describe('scrollToSection function', () => {
  let mockElement: any

  beforeEach(() => {
    mockElement = {
      getBoundingClientRect: vi.fn().mockReturnValue({ top: 100 }),
    }

    document.getElementById = vi.fn().mockReturnValue(mockElement)

    vi.spyOn(window, 'scrollTo')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should call window.scrollTo with correct top value', () => {
    if (!mockElement) return
    const id = 'someId'
    const navbarHeight = 3.25 * 16
    const expectedTop = mockElement.getBoundingClientRect().top + window.scrollY - navbarHeight

    scrollToSection(id)

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expectedTop,
      behavior: 'smooth',
    })
  })

  it('should not call window.scrollTo if element is not found', () => {
    document.getElementById = vi.fn().mockReturnValue(null)
    scrollToSection('nonexistentId')
    expect(window.scrollTo).not.toHaveBeenCalled()
  })
})
