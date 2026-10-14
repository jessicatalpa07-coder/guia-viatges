<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="inici">
    <section class="hero">
      <div class="quadre">
        <h1>Guia de viatges</h1>
        <p>Troba la teva propera aventura: ciutats, cultura, gastronomia i racons per descobrir arreu del món.</p>
        <RouterLink to="/destinacions" class="boto">Veure destinacions</RouterLink>
      </div>
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
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: -2rem;
  margin-bottom: 0;
  padding: 5rem 1.5rem 7rem;
  display: flex;
  justify-content: center;
  background-color: #f6f2fa;
  background-image:
    linear-gradient(to bottom, rgba(246, 242, 250, 0) 45%, #f6f2fa 95%),
    url('/img/portada.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 2px 0 0 #f6f2fa;
}
.quadre {
  max-width: 640px;
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
}
.quadre h1 {
  color: #4a2c6d;
  font-size: 3rem;
  margin-bottom: 1rem;
}
.quadre p {
  color: #4a2c6d;
  font-size: 1.15rem;
  margin-bottom: 1.5rem;
}
.boto {
  display: inline-block;
  background: #4a2c6d;
  color: #ffffff;
  font-weight: 600;
  padding: 0.8rem 1.8rem;
  border-radius: 999px;
  transition: background 0.2s ease;
}
.boto:hover {
  background: #6a3f96;
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
  list-style: none;
  counter-reset: pas;
  padding: 0;
}
.passos li {
  counter-increment: pas;
  position: relative;
  background: #ffffff;
  border-radius: 8px;
  padding: 0.9rem 1rem 0.9rem 3.5rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 6px rgba(74, 44, 109, 0.12);
}
.passos li::before {
  content: counter(pas);
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  background: #4a2c6d;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>