/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable quotes */

"use strict";

// Add a new class to selected cocktails to highlight them
function handleClickDrink(ev) {
  ev.currentTarget.classList.toggle("selected");

  const idSelected = ev.currentTarget.id;

  // Check in the cocktails data if id's matches with selected drink and print it in the Favorites list and if we stop selecting it, remove it.
  const selectedDrink = cocktailsData.find(
    (cocktail) => cocktail.idDrink === idSelected
  );

    const indexSelectedDrink = favCoctailsData.findIndex(
      (cocktail) => cocktail.idDrink === idSelected
    );

    if (indexSelectedDrink === -1) {
        favCoctailsData.push(selectedDrink);
        printFavList(favCoctailsData);
    } else {
        favCoctailsData.splice(indexSelectedDrink, 1)
        printFavList(favCoctailsData);
    }
  
}

function printFavList(favCoctailsData) {
  favList.innerHTML = "";

  for (const drink of favCoctailsData) {
    const liFavElement = document.createElement("li");
    liFavElement.setAttribute("class", "main__fav-list--item js__drink");
    liFavElement.setAttribute("id", drink.idDrink);
    favList.appendChild(liFavElement);

    const nameFavElement = document.createElement("h3");
    const textFavName = document.createTextNode(drink.strDrink);
    nameFavElement.appendChild(textFavName);
    nameFavElement.setAttribute("class", "main__fav-list--item--name");
    liFavElement.appendChild(nameFavElement);

    // Add a placeholder image if the cocktail doesn't contain an image
    if (drink.strDrinkThumb) {
      const imgFavElement = document.createElement("img");
      imgFavElement.setAttribute("class", "main__fav-list--item--img");
      imgFavElement.setAttribute("src", `${drink.strDrinkThumb}/preview`);
      liFavElement.appendChild(imgFavElement);
    } else {
      const imgFavElement = document.createElement("img");
      liFavElement.setAttribute("class", "main__fav-list--item--img");
      imgFavElement.setAttribute(
        "src",
        "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"
      );
      liFavElement.appendChild(imgFavElement);
    }
  }
}

// Add an event to all the drinks with the same class: js__drink
function selectDrinkEvent() {
  const selectedDrinkList = document.querySelectorAll(".js__drink");
  for (const drink of selectedDrinkList) {
    drink.addEventListener("click", handleClickDrink);
  }
}
