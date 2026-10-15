<script setup>
import { ref } from 'vue'

const nom = ref('')
const correu = ref('')
const contrasenya = ref('')
const enviat = ref(false)
const nomEnviat = ref('')

function enviar() {
  nomEnviat.value = nom.value
  enviat.value = true
  nom.value = ''
  correu.value = ''
  contrasenya.value = ''
}
</script>

<template>
  <section class="registre">
    <div class="formulari">
      <h1>Registra't</h1>
      <p>Crea el teu compte per rebre idees de viatge.</p>

      <p v-if="enviat" class="confirmacio">
        Gràcies, {{ nomEnviat }}! Aquesta web és un exemple i les dades no es guarden enlloc.
      </p>

      <form @submit.prevent="enviar">
        <label for="nom">Nom</label>
        <input id="nom" v-model="nom" type="text" required />

        <label for="correu">Correu electrònic</label>
        <input id="correu" v-model="correu" type="email" required />

        <label for="contrasenya">Contrasenya</label>
        <input id="contrasenya" v-model="contrasenya" type="password" required minlength="6" />

        <button type="submit">Registrar-me</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.registre {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin: -2rem 0 -2rem calc(50% - 50vw);
  padding: 3rem 1rem;
  min-height: calc(100vh - 130px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:
    linear-gradient(rgba(74, 44, 109, 0.35), rgba(74, 44, 109, 0.35)),
    url('/img/registre.jpg');
  background-size: cover;
  background-position: center;
}
.formulari {
  width: 100%;
  max-width: 460px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
form {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}
label {
  font-weight: 600;
  color: #4a2c6d;
  margin-top: 0.75rem;
}
input {
  padding: 0.6rem;
  margin-top: 0.25rem;
  border: 1px solid #c9a7eb;
  border-radius: 6px;
  font-size: 1rem;
}
input:focus {
  outline: 2px solid #8a5fbf;
}
button {
  margin-top: 1.25rem;
  padding: 0.75rem;
  background: #4a2c6d;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}
button:hover {
  background: #6a3f96;
}
.confirmacio {
  background: #e6dcf2;
  color: #4a2c6d;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}
</style>