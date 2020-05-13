Redmi note 7: 390px                 slategray, dimgray, gray, darkgray, lightgray, gainsboro, WhiteSmoke, ghostwhite, mintcream, snow, ivory



primary: blue;
primary-dark: indigo darken-4;
pramary-light: blue lighten-5;



Pagina contatti
news homepage
check ARIA - sr-only(current)



Rev 0.3 - 08/05/2020
Restyle totale della pagina (immagini in grande, testo su sfondo bianco, navbar colorata, ecc ecc)

Rev 0.2b - 06/05/2020
Cambiata la gestione del font-size
Cambiato il gradiente
Immagine Olìstik a tutto schermo


Rev 0.2 - 06/05/2020
Immagine adattata allo schermo (team)
Bug fixes (navbar, footer, gradiente)

Rev 0.1 - 05/05/2020

Navbar estesa e shadow
Miglioramento del codice (struttura HTML5, classi CSS)
Implementato il logo ad alta risoluzione e modificata la gestione dell'immagine
Modificato il colore di sfondo (da lightskyblue a un gradiente di #0091EA)
Aggiunto Footer (logo e pay-off, link social, Partnership) #incompleto
cambiata icona facebook nella navbar
freccetta torna su
ridotti i margini del contenuto dal bordo dello schermo
Restyle della navbar: logo al centro, link a sinistra, social a destra
migliorata l'icona del bottone della navbar (tolto bordo e alone)
Migliorato il dropdown menù della navbar (tolto bordo, colore elemento attivo)
rimosso bordo bianco intorno alle immagini e ingrandite

Initial release - 26/04/2020



------

p{
  font-family: "bookman old style"
}
p:first-child::first-letter{
  font-family: "papyrus";
  font-size: 25px
  font-weight: bold
}

------
p {
  width: 100%;
  margin: auto;
  font-size: 50px;
  transform: scale(.5);
  font-family: courier new;
  font-weght: bold;
}

div {
  background-image: url("URL DES HINTERGRUNDBILDES");
  background-attachment: fixed;
  transform: scale(1.25);}

body {
  height: 100%;
  overflow: scroll;
}

-------

ul {
  margin: 0.75em 0;
  padding: 0 1em;
  list-style: none;
}

li:before {
  content: "";
  border-color: transparent #111;
  border-style: solid;
  border-width: 0.35em 0 0.35em 0.45em;
  display: block;
  height: 0;
  width: 0;
  left: -1em;
  top: 0.9em;
  position: relative;
}
