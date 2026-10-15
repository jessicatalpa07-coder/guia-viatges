<script setup>
import { ref, computed, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import TargetaDestinacio from '../components/TargetaDestinacio.vue'
import EstatMissatge from '../components/EstatMissatge.vue'

const destinacions = ref([])
const carregant = ref(true)
const error = ref(false)
const cerca = ref('')

const filtrades = computed(() => {
  const text = cerca.value.trim().toLowerCase()
  if (!text) return destinacions.value
  return destinacions.value.filter((d) =>
    d.nom.toLowerCase().includes(text)
  )
})

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

    <template v-else>
      <input
        v-model="cerca"
        class="cerca"
        type="search"
        placeholder="Cerca una ciutat..."
        aria-label="Cerca una ciutat"
      />

      <EstatMissatge
        v-if="filtrades.length === 0"
        text="No hi ha cap destinació amb aquest nom."
      />

      <div v-else class="llista">
        <TargetaDestinacio
          v-for="d in filtrades"
          :key="d.id"
          :destinacio="d"
        />
      </div>
    </template>
  </section>
</template>

<style scoped>
.cerca {
  width: 100%;
  max-width: 420px;
  padding: 0.7rem 1rem;
  margin: 0.5rem 0 1.5rem;
  border: 1px solid #c9a7eb;
  border-radius: 999px;
  font-size: 1rem;
  background: #ffffff;
}
.cerca:focus {
  outline: 2px solid #8a5fbf;
}
.llista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 0.5rem;
}
</style>