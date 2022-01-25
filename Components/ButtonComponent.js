import Component from "./Component.js";

export default class ButtonComponent extends Component {
  action;

  constructor(parentElement, texto, action) {
    super(parentElement, "button");
    this.element.textContent = texto;
    this.action = action;
    this.addListeners();
    this.element.className = "character__action btn";
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}
