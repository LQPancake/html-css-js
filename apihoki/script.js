async function arfolyamBetoltes() {
    try {
        const valasz = await fetch("https://api.coingecko.com/api/v3/exchange_rates");
        const adat = await valasz.json();
        const arfolyamok = adat.rates;
        const kivantDevizak = ["eur", "usd", "gbp", "chf", "jpy", "czk", "pln"];
        const forintBtc = arfolyamok["huf"].value;
        const arfolyamDiv = document.getElementById("arfolyamok");
        kivantDevizak.forEach(kod => {
            const deviza = arfolyamok[kod];
            const ertekForintban = forintBtc / deviza.value;
            const sorDiv = document.createElement("div");
            sorDiv.classList.add("sor");
            sorDiv.innerHTML = `
                <span class="deviza-nev">
                    1 ${deviza.unit} (${deviza.name})
                </span>
                = ${ertekForintban.toFixed(2)} HUF
            `;
            arfolyamDiv.appendChild(sorDiv);
        });
    } catch (hiba) {
        console.error("Hiba történt:", hiba);
    }
}
arfolyamBetoltes();