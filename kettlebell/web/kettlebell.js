fetch("/api/arak")
.then(response => response.json())
.then(data => {
    const prices = document.querySelectorAll(".card-price")
    prices[0].innerHTML = data["kiloar"] + '<span class="period">/KG</span>'
    prices[1].innerHTML = data["edzoterv"] + '<span class="period">/hónap</span>'
    prices[2].innerHTML = data["tankonyv"]
    document.getElementById("kedvezmenyListaElem").innerHTML = `
    <span class="fa-li"><i class="fas fa-check"></i></span>${data.kedvezmeny}%-os
                    kedvezmény a terem belépő árából
    `
})

const gyakorlatok = ["Swing", "Magasra húzás", "Serleg guggolás", "Szélmalom", "Török felállás"]

function gyakorlatGeneralas() {
    const ismetlesSzam = Math.floor(Math.random() * 30)+1;
    const gyakorlat = gyakorlatok[Math.floor(Math.random() * gyakorlatok.length)];
    document.getElementById("generaltGyakorlat").innerHTML = `
    ${ismetlesSzam} darab ${gyakorlat}
    `
}