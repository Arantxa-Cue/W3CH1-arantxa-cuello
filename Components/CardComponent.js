import Component from "./Component.js";

export default class CardComponent extends Component {
  constructor(parentElement, htmlTag, image) {
    super(parentElement, htmlTag);
    this.element.className = "card character__card";
    this.generateHTML();

    parentElement.prepend(image.element);
  }

  generateHTML() {
    this.element.innerHTML = ` 
            <div class = "card character__card">
            <div class="card-body">
              <h2 class="character__name card-title h4">Nombre y familia</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: X años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>
      </ul>
    </div>`;
  }
}
