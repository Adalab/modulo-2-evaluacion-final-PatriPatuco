/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable quotes */

"use strict";

// Add a new class to selected cocktails to higlight them
function handleDrink(ev) {
  ev.currentTarget.classList.toggle("selected");
}

// Add an event to all the drinks with the same class: js__drink
function selectDrinkEvent() {
  const drinksSelectedList = document.querySelectorAll(".js__drink");
  for (const drink of drinksSelectedList) {
    drink.addEventListener("click", handleDrink);
  }
}
