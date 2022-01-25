import Component from "./Component.js";

export default class ImageComponent extends Component {
  constructor(
    parentElement,
    imagePath,
    altText,
    className = "character__picture card-img-top"
  ) {
    super(parentElement, "img");
    this.element.src = imagePath;
    this.element.alt = altText;
    this.element.className = className;
  }
}
