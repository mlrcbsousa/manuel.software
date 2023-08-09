import { computed, type Ref } from 'vue'

export const getMailtoHref = (email: Ref<string>, subject: Ref<string>, message: Ref<string>) =>
  computed(() => {
    const subjectEncoded = encodeURIComponent(subject.value)
    const messageEncoded = encodeURIComponent(message.value)

    return `mailto:${email.value}?subject=${subjectEncoded}&body=${messageEncoded}`
  })
