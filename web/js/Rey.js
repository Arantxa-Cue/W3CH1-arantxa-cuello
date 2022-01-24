import Personaje from "./Personaje.js";

export default class Rey extends Personaje {
  anyosReinado;

  emoji;

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey, emojiRey, card) {
    super(nombreRey, familiaRey, edadRey);
    this.anyosReinado = anyosReinadoRey;

    this.emoji = emojiRey;
    this.emojiRey = document.createElement("i");
    this.emojiRey.className = "emoji";
    this.emojiRey.innerHTML = "<i>\uD83D\uDC51</i>";

    card.append(this.emojiRey);
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}
