<script setup>
defineProps({
  tipus: {
    type: String,
    default: 'info'
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <p class="missatge" :class="tipus">{{ text }}</p>
</template>

<style scoped>
.missatge {
  padding: 1rem;
  border-radius: 8px;
  background: #f3edf9;
  color: #4a2c6d;
}
.error {
  background: #fdeaea;
  color: #a02020;
}
</style>