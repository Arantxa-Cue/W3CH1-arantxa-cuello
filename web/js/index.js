import ButtonComponent from "../../Components/ButtonComponent.js";
import CardComponent from "../../Components/CardComponent.js";
import ImageComponent from "../../Components/ImageComponent.js";
import LiComponent from "../../Components/LiComponent.js";
import personajesGot from "./Personajes.js";

const body = document.querySelector("body");
const buttonTest = document.querySelector("button");
const li = document.querySelector("ul");
const cardTest = document.querySelector(".character");

const action = () => {
  console.log("hello");
};
const button = new ButtonComponent(body, "algo", action());

personajesGot.forEach((element) => {
  const list = document.createElement("li");
  list.classList.add("character", "col");

  li.appendChild(list);

  const image = new ImageComponent("img/bronn.jpg", "profile picture");

  const cardTemplate = new CardComponent(list, "div", image);
});
