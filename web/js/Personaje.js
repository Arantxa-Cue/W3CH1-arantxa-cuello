export default class Personaje {
  nombre;

  familia;

  edad;

  vivo = true;

  serie = "Juego de Tronos";

  emoji;

  constructor(
    nombrePersonaje,
    emojiPersonaje,
    familiaPersonaje,
    edadPersonaje
  ) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
    this.emoji = emojiPersonaje;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}
