import * as util from "./utils.js";
import alap from "./utils.js"

const content = [
  [
    "Baliga József",
    "Feke Gergő",
    "Gyebnár Róbert",
    "Szabó Bence",
    "Magyar Dárius",
    "Mező Lívia",
    "Vida Dominik"
  ],
  [
    "Bánszki László Attila",
    "Barna János Lőrinc",
    "Czigla Dániel",
    "Szekeres Zsolt",
    "Székács Szabolcs",
    "Papp Nóra",
    "Kiss Dzsennifer",
    "Rostás Evelin",
    "Rácz Szabolcs",
    "Solymosi Dávid",
    "Vadász Dániel"
  ]
];

const btnSzoftveresek = document.getElementById("btn-szoftveresek");
const btnSzerveresek = document.getElementById("btn-szerveresek");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = "";
  list.innerHTML = listContent;
  tabContent.append(list);
}

function highlightButton(btn) {
  btnSzoftveresek.className = "";
  btnSzerveresek.className = "";
  btn.className = "active";
}

function handleClick(event) {
  const btnId = event.target.id;
  highlightButton(event.target);
  if (btnId === "btn-szoftveresek") {
    displayContent(content[0]);
  } else if (btnId === "btn-szerveresek") {
    displayContent(content[1]);
  }
}

displayContent(content[0]);

btnSzoftveresek.addEventListener("click", handleClick);
btnSzerveresek.addEventListener("click", handleClick);

console.log(apiKey)
console.log(valami);
console.log(getValami());