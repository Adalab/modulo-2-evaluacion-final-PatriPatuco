/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */
"use strict";

// Print a list with the desired cocktails.
function printList(cocktailsData) {
  drinksList.innerHTML = "";

  for (const drink of cocktailsData) {
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "main__drinks-list--item");
    liElement.setAttribute("class", "js__drink");
    drinksList.appendChild(liElement);

    const nameElement = document.createElement("h3");
    const textName = document.createTextNode(drink.strDrink);
    nameElement.appendChild(textName);
    liElement.setAttribute("class", "main__drinks-list--item--name");
    liElement.appendChild(nameElement);

    // Add a placeholder image if the cocktail doesn't contain an image
    if (drink.strDrinkThumb) {
      const imgElement = document.createElement("img");
      liElement.setAttribute("class", "main__drinks-list--item--img");
      imgElement.setAttribute("src", `${drink.strDrinkThumb}/preview`);
      liElement.appendChild(imgElement);
    } else {
      const imgElement = document.createElement("img");
      liElement.setAttribute("class", "main__drinks-list--item--img");
      imgElement.setAttribute(
        "src",
        "https://via.placeholder.com/210x295/ffffff/666666/?text=TV"
      );
      liElement.appendChild(imgElement);
    }
  }
}

// Fetch with the default list: margarita
function defaultFetch() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.drinks);
      cocktailsData = data.drinks;
      printList(cocktailsData);
    });
}

defaultFetch();

// Function for printing the result of input value search
function inputFetch() {
  const inputValue = inputSearch.value;
fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("kdsljf");
      cocktailsData = data.drinks;
      printList(cocktailsData);
    });
}

// Listen to click event and show list of cocktails
function handleBtnSearch(ev) {
  ev.preventDefault();
  inputFetch();
}

btnSearch.addEventListener("click", handleBtnSearch);

/* function handleEnter(ev) {
     ev.preventDefault();
  if (ev.keyCode === 13 && inputSearch === document.activeElement) {
    inputFetch();
  }
}

inputSearch.addEventListener("keyUp", handleEnter); */
