"use strict";

let allBars = document.querySelectorAll(".bar");

let barValue = document.querySelectorAll(".value");

let barLastChild = document.querySelector(".transition");

allBars[3];

let array = [];

let arrayNumbers = 0;

setInterval(getNumbersOfCustomers, 750);

function getNumbersOfCustomers() {
  const nextNumber = Math.floor(Math.random() * 32) + 1;
  console.log("Random", nextNumber);
  array.push(nextNumber);
  console.log("Array", array);
  if (array.length > 40) {
    array.splice(arrayNumbers, 1);
  }
  console.log("SLUT:", array);
  for (let i = 0; i <= 41; i++) {
    console.log("i", i);
    allBars[i].style.height = array[i] * 2 + "vh";
    barValue[i].textContent = array[i];
    console.log("FOR LOOP");
  }
}
