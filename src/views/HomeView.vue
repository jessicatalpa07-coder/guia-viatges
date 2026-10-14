<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="inici">
    <section class="hero">
      <h1>Guia de viatges</h1>
      <p>Troba la teva propera aventura: ciutats, cultura, gastronomia i racons per descobrir arreu del món.</p>
      <RouterLink to="/destinacions" class="boto">Veure destinacions</RouterLink>
    </section>

    <section>
      <h2>Per què viatjar amb nosaltres</h2>
      <div class="targetes">
        <article>
          <h3>Idees per a tots els gustos</h3>
          <p>Des d'escapades de cap de setmana fins a grans viatges. Hi ha una destinació per a cada tipus de viatger.</p>
        </article>
        <article>
          <h3>Consells pràctics</h3>
          <p>Què veure, quan anar-hi i com moure's. Tot el que cal saber abans de fer la maleta.</p>
        </article>
        <article>
          <h3>Informació sempre al dia</h3>
          <p>Les destinacions es llegeixen d'una base de dades, així que podem afegir-ne de noves en qualsevol moment.</p>
        </article>
      </div>
    </section>

    <section>
      <h2>Com planificar el teu viatge</h2>
      <ol class="passos">
        <li><strong>Inspira't.</strong> Mira les destinacions i tria la que et cridi més l'atenció.</li>
        <li><strong>Organitza't.</strong> Decideix les dates, el pressupost i quants dies et quedaràs.</li>
        <li><strong>Prepara la maleta.</strong> Revisa el clima i la documentació que necessites.</li>
        <li><strong>Gaudeix.</strong> Perd-te pels carrers i descobreix els racons que no surten a les guies.</li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #4a2c6d, #8a5fbf);
  color: #ffffff;
  text-align: center;
  padding: 3rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}
.hero h1 {
  color: #ffffff;
  font-size: 2.4rem;
}
.hero p {
  max-width: 600px;
  margin: 0 auto 1.5rem;
}
.boto {
  display: inline-block;
  background: #ffffff;
  color: #4a2c6d;
  font-weight: 600;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
}
.boto:hover {
  background: #e6dcf2;
}
h2 {
  color: #4a2c6d;
  margin: 2rem 0 1rem;
}
.targetes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.targetes article {
  background: #ffffff;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 2px 6px rgba(74, 44, 109, 0.15);
}
.targetes h3 {
  color: #4a2c6d;
  margin-bottom: 0.5rem;
}
.passos {
  padding-left: 1.25rem;
}
.passos li {
  margin-bottom: 0.75rem;
}
</style>