import Personaje from "./Personaje.js";

export default class Rey extends Personaje {
  anyosReinado;

  emoji;

  constructor(emojiRey, nombreRey, familiaRey, edadRey, anyosReinadoRey) {
    super(nombreRey, familiaRey, edadRey);
    this.anyosReinado = anyosReinadoRey;
    this.emoji = emojiRey;

    this.emoji = document.createElement("i");
    this.emoji.className = "emoji";
    this.emoji.innerHTML = "<i></i>";

    document.querySelector(".emoji").append(this.emoji);
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}
