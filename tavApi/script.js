async function szamol() {
    const coord1 = document.getElementById("coord1").value;
    const coord2 = document.getElementById("coord2").value;
    const eredmenyDiv = document.getElementById("eredmeny");

    if (!coord1 || !coord2) {
        eredmenyDiv.innerHTML = "Adj meg mindkét koordinátát!";
        return;
    }

    try {
        const url = `https://api.infojegyzet.hu/tavolsag/?honnan=${coord1}&hova=${coord2}`;
        const response = await fetch(url);
        const data = await response.json();

        eredmenyDiv.innerHTML = `
            <p><b>${data.honnan_varos}</b> → <b>${data.hova_varos}</b></p>
            <p>Távolság: ${data.tavolsag_km} km</p>
        `;
    } catch (error) {
        eredmenyDiv.innerHTML = "Hiba történt az API hívás során.";
        console.error(error);
    }
}