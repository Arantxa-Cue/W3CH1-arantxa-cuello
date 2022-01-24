import Personaje from "./Personaje.js";

export default class Rey extends Personaje {
  anyosReinado;

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey) {
    super(nombreRey, familiaRey, edadRey);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}

class ReyComponent {
  emoji;

  constructor() {
    this.emoji = document.createElement("i");
    this.emoji.className = "emoji";
    this.emoji.innerHTML = "<i></i>";
  }
}
