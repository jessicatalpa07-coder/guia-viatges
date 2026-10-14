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
    <img
      v-if="destinacio.imatge"
      :src="destinacio.imatge"
      :alt="'Imatge de ' + destinacio.nom"
    />
    <div class="contingut">
      <h2>{{ destinacio.nom }}</h2>
      <p class="pais">{{ destinacio.pais }}</p>
      <p>{{ destinacio.descripcio }}</p>
    </div>
  </article>
</template>

<style scoped>
.targeta {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(74, 44, 109, 0.15);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.targeta:hover,
.targeta:active {
  transform: scale(1.04);
  box-shadow: 0 8px 18px rgba(74, 44, 109, 0.3);
}
.targeta img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.contingut {
  padding: 1rem 1.25rem;
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