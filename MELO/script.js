const API_URL = "https://randomuser.me/api/?results=6&nat=hu&seed=ceges_csapat";

const teamContainer = document.getElementById("team");

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(person => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${person.picture.large}" alt="profilkép">
        <h3>${person.name.first} ${person.name.last}</h3>
        <p>${person.email}</p>
        <p>${person.location.city}</p>
      `;

      teamContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Hiba történt:", error);
  });
