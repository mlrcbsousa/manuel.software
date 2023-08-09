<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { getMailtoHref } from '@/utils/mailto'

const props = defineProps<{ email: string }>()
const { email } = toRefs(props)

const subject = ref('')
const message = ref('')
const href = getMailtoHref(email, message, subject)
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
        <a :href="href">
          <button class="button is-link">Send Email</button>
        </a>
      </div>
    </div>
  </section>
</template>
