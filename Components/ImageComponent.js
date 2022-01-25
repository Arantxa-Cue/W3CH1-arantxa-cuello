import Component from "./Component.js";

export default class ImageComponent extends Component {
  constructor(
    imagePath,
    altText,
    className = "character__picture card-img-top",
    parentElement = document.querySelector(".card")
  ) {
    super(parentElement, "img");
    this.element.src = imagePath;
    this.element.alt = altText;
    this.element.className = className;
  }
}
