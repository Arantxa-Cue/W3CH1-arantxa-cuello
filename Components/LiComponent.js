import Component from "./Component.js";

export default class LiComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "li");

    this.element.className = "character col";
  }
}
