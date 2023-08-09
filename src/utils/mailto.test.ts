import { ref } from 'vue'
import { describe, expect, it } from 'vitest'
import { getMailtoHref } from '@/utils/mailto'

describe('getMailtoHref', () => {
  it('should return a correctly formatted mailto URL', () => {
    const email = ref('test@example.com')
    const subject = ref('Test Subject')
    const message = ref('Hello, this is a test message!')

    const mailtoHref = getMailtoHref(email, subject, message)

    expect(mailtoHref.value).toBe(
      'mailto:test@example.com?subject=Test%20Subject&body=Hello%2C%20this%20is%20a%20test%20message!',
    )
  })

  it('should encode special characters correctly', () => {
    const email = ref('test@example.com')
    const subject = ref('Test/Subject?')
    const message = ref('Hello, & this is a test message!')

    const mailtoHref = getMailtoHref(email, subject, message)

    expect(mailtoHref.value).toBe(
      'mailto:test@example.com?subject=Test%2FSubject%3F&body=Hello%2C%20%26%20this%20is%20a%20test%20message!',
    )
  })

  it('should encode empty values correctly', () => {
    const email = ref('test@example.com')
    const subject = ref('')
    const message = ref('')

    const mailtoHref = getMailtoHref(email, subject, message)

    expect(mailtoHref.value).toBe('mailto:test@example.com?subject=&body=')
  })
})
