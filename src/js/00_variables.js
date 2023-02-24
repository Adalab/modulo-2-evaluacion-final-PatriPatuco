/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
'use strict';

// Search section
const inputSearch = document.querySelector(".js__search-input");
const btnSearch = document.querySelector(".js__search-button");
const btnReset = document.querySelector(".js__reset-button");

// Cocktail list section
const drinksList = document.querySelector(".js__drinks-list");
const drinkItem = document.querySelector(".js__drink");

// Favorites list section
const favList = document.querySelector(".js__fav-list");

// Cocktails data
let cocktailsData = [];