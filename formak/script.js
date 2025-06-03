// Belső állapot
let state = {
  circle: 0,
  square: 0,
  rectangle: 0,
};
// 1. Selecteld ki id alapján a form elementet és submit eseményre 
// köss be funkcionalitást
document.getElementById("shapes").addEventListener("submit", function (event) {
  event.preventDefault();
    // 2. Az esemény bekövetkezésekor olvasd ki az input mezőkben lévő adatokat
    let action = event.target.elements.action.value; // increment|decrement
    let shapeName = event.target.elements.selectedShape.value; // circle|rectangle|square
    // 3. Az adatok alapján módosítsd az alkalmazás belső állapotát
    if (action === "increment") {
      state[shapeName]++;
    } else {
      state[shapeName]--;
    }
    render();
});
// 4. A belső állapot alapján rajzold újra a formákat
function render() {
    document.getElementById("sh-circle").innerHTML = state.circle;
    document.getElementById("sh-square").innerHTML = state.square;
    document.getElementById("sh-rectangle").innerHTML = state.rectangle;
}
