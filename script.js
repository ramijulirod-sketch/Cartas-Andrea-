/*
  CÓMO AÑADIR UNA CARTA:
  1. Añade una nueva carta AL PRINCIPIO de la lista "letters".
  2. La primera carta de la lista será la del sobre interactivo.
  3. La carta que antes estaba primera aparecerá automáticamente en el archivo de abajo.
  4. Cambia date, title, body y signature por los datos de tu carta.
  5. Guarda los archivos y vuelve a subirlos a GitHub Pages.
  Nota: GitHub Pages es una web estática; escribir desde este navegador no publica cartas para ella.
*/
const letters = [

  
  {
    date: "29 de octubre de 2026",
    title: "My love ",
    body: [
      "Cada día que pasa es un día más cerca de ti, esperando a que llegues, siempre me pongo a pensar en cómo tenemos tanta conexión a distancia no me imagino en persona, yo nunca pensé que encontraría a una persona así la verdad, es como un sueño.",
      "Mientras tanto solo nos queda esperar al día, por ahora solo me queda quererte y conocernos más te volviste totalmente mi vida."
    ],
    signature: "Te adoro Juliian",
    icon: "♥"
  },
  {
    date: "27 de octubre de 2026",
    title: "Rosarito",
    body: [
      "No sabia como expresarte mi cariño al estar lejos, ni poder darte algo y creo que las cartas es un amor a la antigua, por que el amar a la antigua es lo mas bonito.",
      "Entonces queria empezar a escribirte cartas por que te mereces todo lo bonito, una forma de decirte te amo y aca apareceran las cartas nuevas que envie."
    ],
    signature: "Te amo Julián ♡",
    icon: "♥"
  },
  {
    date: "",
    title: "",
    body: [
      ""
    ],
    signature: "",
    icon: ""
  },

];

const envelope = document.getElementById("envelope");
const openButton = document.getElementById("open-envelope");
const letterView = document.getElementById("letter-view");
const archive = document.getElementById("letter-grid");
const tapHint = document.getElementById("tap-hint");

function showLetter(index, scroll = true) {
  const letter = letters[index];
  document.getElementById("letter-date").textContent = letter.date;
  document.getElementById("letter-title").textContent = letter.title;
  const body = document.getElementById("letter-body");
  body.replaceChildren();
  letter.body.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    body.appendChild(p);
  });
  document.getElementById("letter-signature").textContent = letter.signature;
  letterView.classList.remove("hidden");
  letterView.style.animation = "none";
  void letterView.offsetWidth;
  letterView.style.animation = "";
  if (scroll) letterView.scrollIntoView({behavior: "smooth", block: "start"});
}

function buildArchive() {
  archive.replaceChildren();
  // La primera carta es la interactiva; el archivo muestra las anteriores.
  letters.slice(1).forEach((letter, archiveIndex) => {
    const actualIndex = archiveIndex + 1;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "letter-card";
    const icon = document.createElement("span");
    icon.className = "card-icon";
    icon.textContent = letter.icon || "♡";
    const title = document.createElement("span");
    title.className = "card-title";
    title.textContent = letter.title;
    const date = document.createElement("span");
    date.className = "card-date";
    date.textContent = letter.date;
    card.append(icon, title, date);
    card.addEventListener("click", () => showLetter(actualIndex));
    archive.appendChild(card);
  });
}

openButton.addEventListener("click", () => {
  envelope.classList.add("open");
  tapHint.textContent = "Tu última carta, escrita para ti ♡";
  showLetter(0);
});
document.getElementById("back-to-home").addEventListener("click", () => {
  letterView.classList.add("hidden");
  envelope.classList.remove("open");
  tapHint.textContent = "Toca el sobre para leer mi última carta";
  document.getElementById("inicio").scrollIntoView({behavior: "smooth"});
});
buildArchive();
