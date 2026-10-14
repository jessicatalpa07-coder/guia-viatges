<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import TargetaDestinacio from '../components/TargetaDestinacio.vue'
import EstatMissatge from '../components/EstatMissatge.vue'

const destinacions = ref([])
const carregant = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const resultat = await getDocs(collection(db, 'destinacions'))
    destinacions.value = resultat.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    console.error('Error llegint Firestore:', e)
    error.value = true
  } finally {
    carregant.value = false
  }
})
</script>

<template>
  <section>
    <h1>Destinacions</h1>

    <EstatMissatge v-if="carregant" text="Carregant destinacions..." />

    <EstatMissatge
      v-else-if="error"
      tipus="error"
      text="No s'han pogut carregar les destinacions. Torna-ho a provar més tard."
    />

    <EstatMissatge
      v-else-if="destinacions.length === 0"
      text="Encara no hi ha cap destinació."
    />

    <div v-else class="llista">
      <TargetaDestinacio
        v-for="d in destinacions"
        :key="d.id"
        :destinacio="d"
      />
    </div>
  </section>
</template>

<style scoped>
.llista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
</style>