<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Inici</RouterLink>
      <RouterLink to="/destinacions">Destinacions</RouterLink>
      <RouterLink to="/sobre-nosaltres">Sobre nosaltres</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background: #4a2c6d;
}
nav a {
  color: #e6dcf2;
  font-weight: 500;
  padding-bottom: 2px;
}
nav a:hover {
  color: #ffffff;
}
nav a.router-link-exact-active {
  color: #ffffff;
  border-bottom: 2px solid #c9a7eb;
}
</style>