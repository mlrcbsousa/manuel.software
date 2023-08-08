<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ email: string }>()

const subject = ref('')
const message = ref('')

// TODO: test this
const mailtoContent = computed(() => {
  const subjectEncoded = encodeURIComponent(subject.value)
  const messageEncoded = encodeURIComponent(message.value)
  return `mailto:${props.email}?subject=${subjectEncoded}&body=${messageEncoded}`
})
</script>

<template>
  <section id="contact" class="section">
    <h1 class="title">Get in touch</h1>
    <div class="field">
      <label class="label" for="name">Subject</label>
      <div class="control">
        <input v-model="subject" class="input" type="text" placeholder="Your subject" />
      </div>
    </div>
    <div class="field">
      <label class="label" for="message">Message</label>
      <div class="control">
        <textarea v-model="message" class="textarea" placeholder="Your message"></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <a :href="mailtoContent">
          <button class="button is-link">Send Email</button>
        </a>
      </div>
    </div>
  </section>
</template>
