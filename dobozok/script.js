/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/
 const element1 = document.getElementById("element-one")
 element1.onclick = function() {
  if (element1.classList.contains("blur")){
    element1.classList.remove("blur");

  }
  else{
    element1.classList.add("blur");
  }
 }
/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/
const element2 = document.getElementById("element-two")
element2.onmouseover = function() {
  element2.style = "background-color: red"
}
element2.onmouseout = function() {
  element2.style = "background-color: firebrick"
}
/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/
const element3 = document.getElementById("element-three")
element3.ondblclick = function() {
  const randomNumber = Math.floor(Math.random()*20)+1;
  element3.querySelector("span").innerText = randomNumber;
} 
/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/
const element4 = document.getElementById("element-four")

element4.onclick = function() {
  element4.style.display = "none";
  setTimeout(() => {
    element4.style.display = "block";
  }, 1000);
}


/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/
const element5 = document.getElementById("element-five")
const shapes = document.getElementsByClassName("shape")
let toggled = false;
element5.onclick = function() {
  for (let i = 0; i < shapes.length; i++) {
    if (!toggled) {
      shapes[i].style.borderRadius = "100px";
    } else {
      shapes[i].style.borderRadius = "3px";
    }
  }
  toggled = !toggled;
}


/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/
const element6 = document.getElementById("element-six")
function hat(){
  const szam = parseInt(document.getElementById("hat-input").value);
  document.getElementById("hat-szam").innerText = szam;
  event.preventDefault();
}
/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/
const inputBox7 = document.getElementById("box7-input")
document.addEventListener("keypress", function(event){
  const char = event.key;
  inputBox7.value += char;
})


/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/
const element8 = document.getElementById("element-eight");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  element8.textContent = `X: ${x}, Y: ${y}`;
});



/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/

const elementNine = document.getElementById("element-nine");
const form = document.getElementById("box-9");
const textSpan = elementNine.querySelector("span.text");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const operator = formData.get("operator");
  const operand = parseFloat(formData.get("operand"));

  if (isNaN(operand)) {
    alert("Kérlek, adj meg egy számot!");
    return;
  }

  let currentValue = parseFloat(textSpan.textContent.trim());

  let result;

  switch (operator) {
    case "add":
      result = currentValue + operand;
      break;
    case "sub":
      result = currentValue - operand;
      break;
    case "mult":
      result = currentValue * operand;
      break;
    case "div":
      if (operand === 0) {
        alert("Nem lehet nullával osztani!");
        return;
      }
      result = currentValue / operand;
      break;
    default:
      alert("Ismeretlen művelet!");
      return;
  }

  textSpan.textContent = result;
});
