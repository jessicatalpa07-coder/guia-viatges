
### Guia de viatges 

### Què és aquesta web? 
Aquesta és la meva guia de viatges, feta amb Vue. He volgut fer una web senzilla però completa, té la seva portada, una llista de destinacions amb fotografies, un buscador, una pàgina de registre i una part anomenada "Sobre nosaltres".

Les destinacions no estan escrites al codi. Es guarden a Cloud Firestore i la web les llegeix quan s'obre la pàgina.

La web està publicada aquí: https://guia-jessica.web.app

### Tecnologies que he fet servir
- Vue 3, per construir la web amb components.
- Vue Router, per tenir diverses pàgines dins d'una sola aplicació.
- Cloud Firestore, per guardar les destinacions.
- Firebase Hosting, per publicar la web.
- Vite, per executar el projecte en local.
- GitHub, per guardar el codi i els canvis.

### Com instal·lar-la i executar-la 
Per provar el projecte al teu ordinador has de tenir instal·lats Node.js i Git. Escriu les ordres a la terminal: 

1. **Descarregar el projecte.** Baixa el repositori de GitHub i obre la carpeta amb la terminal. 
2. **Instal·lar les llibreries.** Escriu `npm install`. Descarrega tot el que el projecte necessita (Vue, Firebase, etc.). Només cal fer-ho la primera vegada. 
3. **Engegar la web.** Escriu `npm run dev`. La terminal et dirà una adreça, normalment `http://localhost:5173`. Obre-la al navegador i veuràs la web. Per aturar-la, prem `Ctrl + C`. 4. **Generar la versió de producció.** Escriu `npm run build`. Es crea la carpeta `dist` amb els fitxers llestos per publicar. 
5. **Desplegar-la.** Cal tenir `firebase-tools` instal·lat (`npm install -g firebase-tools`) i haver iniciat sessió amb `firebase login`. Després escriu `firebase deploy`: puja la carpeta `dist` a Firebase Hosting i publica les regles de Firestore. 

### Estructura del projecte
- `src/components`: les peces reutilitzables de la web.
- `src/views`: una vista per cada ruta.
- `src/router/index.js`: la definició de les rutes.
- `src/firebase.js`: la connexió amb Firebase i Firestore.
- `public/img`: les fotografies de les destinacions, de la portada i del registre.
- `docs`: les captures de pantalla de Firestore.
- `firestore.rules`: les regles de seguretat de la base de dades.
- `firebase.json` i `.firebaserc`: la configuració de Firebase Hosting.

### Els components que he fet
A part d'`App.vue`, que és el component principal, he creat quatre components propis:

- **`NavBar.vue`**: el menú de dalt, amb els enllaços per anar d'una pàgina a una altra mitjançant `RouterLink`.
- **`Footerweb.vue`**: el peu de pàgina, que es veu igual a totes les vistes i queda sempre a baix de tot.
- **`TargetaDestinacio.vue`**: la targeta de cada destinació, amb la foto, el nom, el país i la descripció. Creix una mica quan hi passes el ratolí.
- **`EstatMissatge.vue`**: els missatges de càrrega, de "no hi ha dades" i d'error.

### Com passo dades amb props
L'exemple és la llista de destinacions:

- El pare és `DestinacionsView.vue`. Llegeix les destinacions de Firestore i, per cadascuna, crea una targeta.
- El fill és `TargetaDestinacio.vue`. Rep les dades i les mostra.
- Les dades que es passen són l'objecte `destinacio`, que conté `nom`, `pais`, `descripcio` i `imatge`.

El pare les envia amb `:destinacio="d"`. El fill les declara amb `defineProps` i només les mostra, sense modificar-les.

`EstatMissatge.vue` també rep props des de `DestinacionsView.vue`: `tipus`, que canvia el color si és un error, i `text`, que és el missatge.

### Les rutes
| Ruta | Vista | Què hi surt |
|---|---|---|
| `/` | `HomeView` | La portada amb foto, els motius per fer servir la guia i els passos per planificar un viatge |
| `/destinacions` | `DestinacionsView` | Les destinacions amb foto, llegides de Firestore, amb un buscador per elegir la ciutat |
| `/registre` | `RegistreView` | Un formulari de registre |
| `/sobre-nosaltres` | `AboutView` | Qui som, la missió, què hi trobaràs i com està feta la web |

El menú utilitza `RouterLink` i la vista de cada ruta es mostra amb `RouterView` dins d'`App.vue`.

Perquè les rutes funcionin també quan es recarrega la pàgina o s'hi entra directament, he configurat Firebase Hosting perquè sempre serveixi `index.html`. Ho fa el *rewrite* de `firebase.json`, i després Vue Router decideix quina vista ensenyar segons l'adreça.

### Firestore
- **Col·lecció:** `destinacions`, amb 9 destinacions: Barcelona, Kyoto, París, Lisboa, Roma, Atenes, Varsòvia, Londres i Nova York.
- **Camps principals:** `nom`, `pais`, `descripcio` i `imatge`, tots de tipus text. `imatge` guarda la ruta de la foto, per exemple `/img/roma.jpg`.
- **Vista que els mostra:** `DestinacionsView`.
- **Estats:** mentre la web carrega les destinacions, mostra un missatge d'espera. Si no hi ha cap destinació guardada, avisa que la llista està buida. Si hi ha algun problema en carregar les dades, mostra un missatge d'error.
- **Regles:** estan al fitxer `firestore.rules`. Permeten llegir la col·lecció a tothom, però no deixen escriure-hi, perquè la web només necessita llegir.

Aquestes són les captures de com tinc les dades a Firestore:

![Estructura de Firestore](docs/captura-firestore-estructura.png)

![Un altre document de Firestore](docs/captura-firestore-2.png)

I aquestes són les regles publicades:

![Regles de Firestore](docs/captura-regles.png)

### Buscador
A la pàgina de destinacions hi ha un quadre de cerca. Quan escrius el nom d'una ciutat, només es queden les targetes que coincideixen. El filtre es fa a la mateixa pàgina, sense tornar a demanar res a Firestore.

### Pàgina de registre
El formulari demana nom, correu i contrasenya, i el navegador comprova que els camps estiguin ben omplerts. És només una demostració: en enviar-lo surt un missatge de confirmació, però les dades no es guarden enlloc, ni a Firestore ni a cap altre servidor.

### Publicació
Per publicar la web a Internet faig servir Firebase Hosting. Primer escric `npm run build` per preparar els fitxers de la web i guardar-los a la carpeta `dist`. Després escric `firebase deploy` per pujar la web a Internet. Aquesta ordre també publica les regles de seguretat de Firestore.

### Les fotografies
Les fotografies de les destinacions, de la portada i del registre són de Pixabay, que permet fer-les servir gratis.


