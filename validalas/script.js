document.getElementById("submitBtn").addEventListener("click", validalas);

function validalas() {
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const terms = document.getElementById("terms").checked;

  let valid = true;

  // hibák törlése
  document.getElementById("nameError").innerText = "";
  document.getElementById("termsError").innerText = "";
  document.getElementById("ageError").innerText = "";

  // Név ellenőrzése
  if (name.length === 0) {
    document.getElementById("nameError").innerText = "A név megadása kötelező!";
    valid = false;
  } else if (name.length > 30) {
    document.getElementById("nameError").innerText = "A név nem lehet hosszabb 30 karakternél!";
    valid = false;
  }

  // Kor ellenőrzése
  if (isNaN(age) || age < 18) {
    document.getElementById("ageError").innerText = "Legalább 18 évesnek kell lenned!";
    valid = false;
  }

  // Szabályzat ellenőrzése
  if (!terms) {
    document.getElementById("termsError").innerText = "A szabályzat elfogadása kötelező!";
    valid = false;
  }

  // Konzol kiírás
  if (valid) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
  console.log("Név:", name);
  console.log("Kor:", age);
  console.log("Szabályzat elfogadva:", terms);
}
