/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */
"use strict";

// Print a list with the desired cocktails.
function printList(cocktailsData) {
  drinksList.innerHTML = "";

  for (const drink of cocktailsData) {
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "main__drinks-list--item js__drink");
    liElement.setAttribute("id", drink.idDrink);
    drinksList.appendChild(liElement);

    const nameElement = document.createElement("h3");
    const textName = document.createTextNode(drink.strDrink);
    nameElement.appendChild(textName);
    nameElement.setAttribute("class", "main__drinks-list--item-name");
    liElement.appendChild(nameElement);

    // Add "selected" class to the drink element if id's match in favCoctailsData and drink element of cocktailsData
    const drinkId = drink.idDrink;
    const favDrink = favCoctailsData.find((fav) => fav.idDrink === drinkId);

    if (favDrink || favCoctailsData.lenght === 0) {
      liElement.classList.add("selected");
    } else {
      liElement.classList.remove("selected");
    }

    // Add a placeholder image if the cocktail doesn't contain an image
    if (drink.strDrinkThumb) {
      const imgElement = document.createElement("img");
      imgElement.setAttribute("class", "main__drinks-list--item-img");
      imgElement.setAttribute("src", `${drink.strDrinkThumb}/preview`);
      liElement.appendChild(imgElement);
    } else {
      const imgElement = document.createElement("img");
      liElement.setAttribute("class", "main__drinks-list--item-img");
      imgElement.setAttribute(
        "src",
        "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"
      );
      liElement.appendChild(imgElement);
    }
  }
  // Add the function with the event for each drink clicked
  selectDrinkEvent();
}

defaultFetch();

// Look if there is info in localStorage and print it in favorites list
if (localDrink) {
  favCoctailsData = localDrink;
  printFavList(favCoctailsData);
}

// Fetch with the default list: margarita
function defaultFetch() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => response.json())
    .then((data) => {
      cocktailsData = data.drinks;
      printList(cocktailsData);
    });
}

// Function for printing the result of input value search
function inputFetch() {
  const inputValue = inputSearch.value;
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      cocktailsData = data.drinks;
      printList(cocktailsData);
      printFavList(favCoctailsData);
    });
}

// Listen to "submit" and "click" event and show list of cocktails
function handleBtnSearch(ev) {
  ev.preventDefault();
  if (inputSearch.value) {
    inputFetch();
  } else {
    defaultFetch();
  }
}

// Clean the input and show the default list of margaritas
function handleBtnReset(e) {
  inputSearch.value = "";
  e.preventDefault();
  defaultFetch();
}

btnSearch.addEventListener("click", handleBtnSearch);
formSearch.addEventListener("submit", handleBtnSearch);
btnReset.addEventListener("click", handleBtnReset);
