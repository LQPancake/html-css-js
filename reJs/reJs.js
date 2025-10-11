// write smth into console
console.log("This coding language fucking sucks");

// make button do smth on click
document.querySelector("button").addEventListener("click", () => {alert("Robo — 19:47: the nword")});

/* input window that writes smth into console
let inputText = prompt("Input window jumpscare");
console.log(inputText); */
/* sum calculator that writes the answer into an alert box
function calculator(){
    let num1 = Number(prompt("Number 1:"));
    let num2 = Number(prompt("Number 2:"));
    let sum = num1 + num2;
    alert("Sum is " + sum);
}
calculator(); */

/* number guessing 1-10
let secretNum = Math.floor(Math.random() * 10) + 1;
let guess = 0;
while (guess !== secretNum) {
    guess = Number(prompt("Guess a number between 1-10"));
    if (guess < secretNum) {
        alert("too low");
    } else if (guess > secretNum) {
        alert("too high");
    } else {
        alert("correct(yay)");
    }
} */

// 2 buttons that change the html body's background to smth else
document.getElementById("themeButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "black"; })
document.getElementById("themeButton2").addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(34, 56, 56)"; })

// live click counter
let count = 0
document.addEventListener("click", function() {
    count++
    document.getElementById("clickCounter").textContent = count
});

// live cursor position
document.addEventListener("mousemove", function(event){
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("cursorPosition").textContent = "x" + x + ", " + "y" + y;
});

// better theme color changer
// background
const colorInputBg = document.getElementById("bgColor");
colorInputBg.addEventListener("input", function() {
    document.body.style.backgroundColor = colorInputBg.value
});
// sections
const colorInputSection = document.getElementById("sectionColor");
colorInputSection.addEventListener("input", function() {
    const sections = document.querySelectorAll(".aSection");
    sections.forEach(function(section) {
        section.style.backgroundColor = colorInputSection.value;
    });
});
// text
const colorInputText = document.getElementById("textColor");
colorInputText.addEventListener("input", function() {
    const textElements = document.querySelectorAll("*")
    textElements.forEach(function(text) {
        text.style.color = colorInputText.value;
    });
});
// button
const colorInputButton = document.getElementById("buttonColor");
colorInputButton.addEventListener("input", function() {
    const buttons = document.querySelectorAll("button")
    buttons.forEach(function(button) {
        button.style.backgroundColor = colorInputButton.value;
    });
});
// random colors
const bgButton = document.getElementById("hellButton")
bgButton.addEventListener("click", function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
const sectionButton = document.getElementById("hellButton")
sectionButton.addEventListener("click", function() {
    const sections = document.querySelectorAll(".aSection");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    sections.forEach(function(section) {
        section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })
})
const textButton = document.getElementById("hellButton")
textButton.addEventListener("click", function() {
    const textElements = document.querySelectorAll("*");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    textElements.forEach(function(text){
    text.style.color = `rgb(${r}, ${g}, ${b})`;
    })
});
const buttonBg = document.getElementById("hellButton")
buttonBg.addEventListener("click", function() {
    const buttons = document.querySelectorAll("button")
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    buttons.forEach(function(button){
        button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })
});
