import ButtonComponent from "../../Components/ButtonComponent.js";
import ImageComponent from "../../Components/ImageComponent.js";
import personajesGot from "./Personajes.js";

const body = document.querySelector("body");
const buttonTest = document.querySelector("button");

const action = () => {
  console.log("hello");
};
const prueba = new ImageComponent(body, "", "señor");
const button = new ButtonComponent(body, "algo", action());
