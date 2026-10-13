<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footerweb from './components/Footerweb.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <main>
      <RouterView />
    </main>
    <Footerweb />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>