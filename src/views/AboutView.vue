<template>
  <div class="about">
    <h1>Sobre nosaltres</h1>

    <section>
      <h2>Qui som</h2>
      <p>
        Guia de viatges és un projecte creat per una apassionada dels viatges i la tecnologia.
        La idea va néixer de la necessitat de tenir en un sol lloc les idees per descobrir
        món, explicades de manera clara i senzilla.
      </p>
    </section>

    <section>
      <h2>La nostra missió</h2>
      <p>
        Volem ajudar-te a trobar la teva propera destinació i a preparar-la sense complicacions.
        Creiem que viatjar és una de les millors maneres d'aprendre, i que tothom hauria de
        poder fer-ho amb bona informació.
      </p>
    </section>

    <section>
      <h2>Què hi trobaràs</h2>
      <ul>
        <li>Una selecció de destinacions amb fotografia i descripció.</li>
        <li>Idees per a diferents tipus de viatge.</li>
        <li>Consells per planificar l'escapada.</li>
      </ul>
    </section>

    <section>
      <h2>Com està feta la web</h2>
      <p>
        Aquesta web s'ha fet amb Vue, per construir les pàgines amb components, i Vue Router,
        per navegar entre elles. Les destinacions es guarden a Cloud Firestore i la web
        està publicada amb Firebase Hosting.
      </p>
    </section>

    <section class="contacte">
      <h2>Contacte</h2>
      <p>Tens algun suggeriment o vols proposar una destinació? Escriu-nos a <strong>jessicatalpa07@gmail.com</strong>.</p>
    </section>
  </div>
</template>

<style scoped>
section {
  background: #ffffff;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  margin-top: 1.25rem;
  box-shadow: 0 2px 6px rgba(74, 44, 109, 0.15);
}
h2 {
  color: #4a2c6d;
  margin-bottom: 0.5rem;
}
ul {
  padding-left: 1.25rem;
}
.contacte {
  background: #e6dcf2;
}
</style>