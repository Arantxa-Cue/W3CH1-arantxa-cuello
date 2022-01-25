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
const liComponent = new LiComponent(li);
const cardTemplate = new CardComponent(cardTest, "div");
const button = new ButtonComponent(body, "algo", action());
const image = new ImageComponent(body, "", "señor");
