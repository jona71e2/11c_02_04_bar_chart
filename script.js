"use strict";

let allBars = document.querySelectorAll(".bar");

let barValue = document.querySelectorAll(".value");

allBars[3];

let array = [];

let arrayNumbers = 0;

setInterval(getNumbersOfCustomers, 1000);

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

// function init() {
//   arrayNumbers++;
//   console.log(arrayNumbers);
//   array.unshift(arrayNumbers);
//   console.log(array);
//   if (array.length >= 40) {
//     array.splice(39, arrayNumbers);
//   }
//   for (let i = 0; i <= 41; i++) {
//     console.log("i", i);
//     allBars[i].style.height = array[i] * 5 + "px";
//     console.log("FOR LOOP");
//   }
// }

// for (let i = 0; i < 40; i++) {
//   console.log("i", i);
//   allBars[i].style.height = array[i] * 5 + "px";
//   console.log("FOR LOOP");
// }

let arr = [
  "12",
  "30",
  "10",
  "19",
  "14",
  "12",
  "34",
  "23",
  "2",
  "3",
  "2",
  "19",
  "22",
  "21",
  "1",
  "9",
  "14",
  "9",
  "33",
  "32",
  "1",
  "32",
  "23",
  "9",
  "10",
  "11",
  "12",
  "19",
  "22",
  "21",
  "1",
  "9",
  "14",
  "9",
  "33",
  "32",
  "1",
  "32",
  "23",
  "9",
];

console.log(arr);

// for (let i = 0; i < 40; i++) {
//   allBars[i].style.height = arr[i] * 10 + "px";
// }

// arr.forEach((bar) =>{

// } console.log(bar));
