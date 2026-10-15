<template>
  <div class="about">
    <h1>Sobre nosaltres</h1>

    <div class="contingut">
      <section class="bloc">
        <h2>Qui som</h2>
        <p>
          Guia de viatges és un projecte creat per una apassionada dels viatges i la tecnologia.
          La idea va néixer de la necessitat de tenir en un sol lloc les idees per descobrir
          món, explicades de manera clara i senzilla.
        </p>
      </section>

      <section class="bloc fosc">
        <h2>La nostra missió</h2>
        <p>
          Volem ajudar-te a trobar la teva propera destinació i a preparar-la sense complicacions.
          Creiem que viatjar és una de les millors maneres d'aprendre, i que tothom hauria de
          poder fer-ho amb bona informació.
        </p>
      </section>

      <section class="bloc fosc">
        <h2>Què hi trobaràs</h2>
        <ul>
          <li>Una selecció de destinacions amb fotografia i descripció.</li>
          <li>Idees per a diferents tipus de viatge.</li>
          <li>Consells per planificar l'escapada.</li>
        </ul>
      </section>

      <section class="bloc">
        <h2>Com està feta la web</h2>
        <p>
          Aquesta web s'ha fet amb Vue, per construir les pàgines amb components, i Vue Router,
          per navegar entre elles. Les destinacions es guarden a Cloud Firestore i la web
          està publicada amb Firebase Hosting.
        </p>
      </section>

      <section class="bloc contacte">
        <h2>Contacte</h2>
        <p>
          Tens algun suggeriment o vols proposar una destinació? Escriu-nos a
          <strong>hola@guiadeviatges.exemple</strong>.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about h1 {
  margin-bottom: 1.25rem;
}
.contingut {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.bloc {
  grid-column: 1 / -1;
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem 1.75rem;
  box-shadow: 0 2px 6px rgba(74, 44, 109, 0.12);
}
.bloc h2 {
  margin-bottom: 0.6rem;
}
.fosc {
  grid-column: span 1;
  background: #4a2c6d;
  color: #ffffff;
}
.fosc h2 {
  color: #ffffff;
}
.fosc ul {
  padding-left: 1.25rem;
}
.contacte {
  background: #c9a7eb;
}
.contacte p {
  color: #2d2340;
}

@media (max-width: 700px) {
  .contingut {
    grid-template-columns: 1fr;
  }
  .fosc {
    grid-column: 1 / -1;
  }
}
</style>