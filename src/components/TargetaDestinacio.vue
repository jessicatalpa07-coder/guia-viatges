<script setup>
defineProps({
  destinacio: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="targeta">
    <h2>{{ destinacio.nom }}</h2>
    <p class="pais">{{ destinacio.pais }}</p>
    <p>{{ destinacio.descripcio }}</p>
  </article>
</template>

<style scoped>
.targeta {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  box-shadow: 0 2px 6px rgba(74, 44, 109, 0.15);
}
.targeta h2 {
  color: #4a2c6d;
  margin: 0;
}
.pais {
  color: #7a5ca0;
  font-weight: 600;
  margin: 0.25rem 0 0.75rem;
}
</style>