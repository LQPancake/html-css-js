// Belső állapot
let state = {
  circle: 0,
  square: 0,
  rectangle: 0,
};


// 1. Selecteld ki id alapján a form elementet és submit eseményre 
// köss be funkcionalitást
document.getElementById("shapes").addEventListener("submit", function (event){
  event.preventDefault
  console.log("teszt");
});

// 2. Az esemény bekövetkezésekor olvasd ki az input mezőkben lévő adatokat

// 3. Az adatok alapján módosítsd az alkalmazás belső állapotát

// 4. A belső állapot alapján rajzold újra a formákat
