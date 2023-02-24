/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */
"use strict";

// Show by default the list of margaritas before doing any search
printDefault();

// Function for printing margaritas list
function printDefault() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      drinksList.innerHTML = "";

      for (const drink of data.drinks) {
        const liElement = document.createElement("li");
        liElement.setAttribute("class", "main__drinks-list--item");
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
    });
}

// Function for printing the result of input value search
function printInput() {
  const inputValue = inputSearch.value;
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      drinksList.innerHTML = "";

      for (const drink of data.drinks) {
        const liElement = document.createElement("li");
        liElement.setAttribute("class", "main__drinks-list--item");
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
    });
}

// Listen to click event and show list of cocktails
function handleBtnSearch(ev) {
  console.log("funcionaaa");
  ev.preventDefault();
  printInput();
}

btnSearch.addEventListener("click", handleBtnSearch);
