import Component from "./Component";

export default class ImageComponent extends Component {
  constructor(parentElement, imagePath, htmlTag, altText, className) {
    super(parentElement, "img");
    this.element.src = imagePath;
    this.element.alt = altText;
    this.element.className = className;
  }
}
