/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function random(list) {
    let randomNum = Math.floor(Math.random() * list.length);
    return list[randomNum];
  }

  let suit = ["♦", "♣", "♥", "♠"];
  let number = ["1", "2", "3", "4", "5", "6", "8", "9", "10", "J", "Q", "K"];

  let elementTopSuit = document.querySelector("#topSuit");
  let elementCardNum = document.querySelector("#cardNum");
  let elementBottomSuit = document.querySelector("#bottomSuit");
  let cardElement = document.querySelector(".card");

  const renderNewRandomCard = () => {
    let topSuit = random(suit);
    let cardNum = random(number);

    elementTopSuit.innerHTML = topSuit;
    elementCardNum.innerHTML = cardNum;
    elementBottomSuit.innerHTML = topSuit;

    if (topSuit == "♦" || topSuit == "♥") {
      elementBottomSuit.style.color = "red";
      elementTopSuit.style.color = "red";
    } else {
      elementBottomSuit.style.color = "black";
      elementTopSuit.style.color = "black";
    }
  };

  // Botón para generar una nueva carta
  let generateRandomBtn = document.querySelector("#generate-button");

  generateRandomBtn.addEventListener("click", renderNewRandomCard);

  // Inputs de ancho y alto
  let widthInput = document.querySelector("#width-input");
  let heightInput = document.querySelector("#height-input");

  widthInput.addEventListener("change", event => {
    let newWidth = event.target.value;
    cardElement.style.width = `${newWidth}px`; // Cambia el ancho de la carta
  });

  heightInput.addEventListener("change", event => {
    let newHeight = event.target.value;
    cardElement.style.height = `${newHeight}px`; // Cambia la altura de la carta
  });

  // Llama a la función cada 10 segundos
  setInterval(renderNewRandomCard, 10000);
};
