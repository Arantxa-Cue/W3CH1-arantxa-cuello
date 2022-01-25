export default class Component {
  element;

  constructor(parentElement, htmlTag = "div") {
    this.element = document.createElement(htmlTag);

    parentElement.append(this.element);
  }
}
