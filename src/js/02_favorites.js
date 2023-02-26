/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable quotes */

"use strict";

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

    const removeFavElement = document.createElement("i");
    removeFavElement.setAttribute(
      "class",
      "fa-solid fa-circle-xmark js__remove-fav"
    );
    removeFavElement.setAttribute("id", drink.idDrink);
    liFavElement.appendChild(removeFavElement);
  }
  favIconsEvent();
}

// Add a new class to selected cocktails to highlight them
function handleClickDrink(ev) {
  ev.currentTarget.classList.toggle("selected");
  const idSelected = ev.currentTarget.id;

  // Check in the cocktails data if id's matches with selected drink and print it in the Favorites list and if we stop selecting it, remove it ++ add it to localStorage
  const selectedDrink = cocktailsData.find(
    (cocktail) => cocktail.idDrink === idSelected
  );
  const indexSelectedDrink = favCoctailsData.findIndex(
    (cocktail) => cocktail.idDrink === idSelected
  );

  if (indexSelectedDrink === -1) {
    favCoctailsData.push(selectedDrink);
    localStorage.setItem("cocktails", JSON.stringify(favCoctailsData));
    console.log("selected item added to local", localDrink);
    printFavList(favCoctailsData);
  } else {
    favCoctailsData.splice(indexSelectedDrink, 1);
    localStorage.setItem("cocktails", JSON.stringify(favCoctailsData));
    localDrink = JSON.parse(localStorage.getItem("cocktails"));
    console.log("selected item removed from local", localDrink);
    printFavList(favCoctailsData);
  }
}

// Remove cocktail in FAV list (from array and localStorage) if we click in the icon && remove class in cocktail list
function handleClickIcon(e) {
  const iconSelected = e.target.id;
  const selectedFav = cocktailsData.find(
    (cocktail) => cocktail.idDrink === iconSelected
  );
  const indexSelectedFav = favCoctailsData.findIndex(
    (cocktail) => cocktail.idDrink === iconSelected
  );

  if (indexSelectedFav) {
    favCoctailsData.splice(indexSelectedFav, 1);
    localStorage.setItem("cocktails", JSON.stringify(favCoctailsData));
    localDrink = JSON.parse(localStorage.getItem("cocktails"));
    printFavList(favCoctailsData);
    printList(cocktailsData);
  } 
}

// Add an event to all the drinks with the same class: js__drink
function selectDrinkEvent() {
  const selectedDrinkList = document.querySelectorAll(".js__drink");
  for (const drink of selectedDrinkList) {
    drink.addEventListener("click", handleClickDrink);
  }
}

function favIconsEvent() {
  const removeIcon = document.querySelectorAll(".js__remove-fav");
  for (const icon of removeIcon) {
    icon.addEventListener("click", handleClickIcon);
  }
}
