let deckId = "";
let playerCards = [];
let dealerCards = [];
let balance = 1000;
let currentBet = 0;
// HTML elemek
const hitBtn = document.getElementById("gameHit");
const standBtn = document.getElementById("gameStand");
const tetBtn = document.getElementById("tetButton");
const feltoltesBtn = document.getElementById("feltoltesBtn"); // ✅ NEW
const egyenlegP = document.getElementById("egyenleg");
const tetP = document.getElementById("tet");
const startBtn = document.getElementById("startGame");
const dealerP = document.getElementById("dealerHand");
const playerP = document.getElementById("playerHand");
// UI Frissítés
function updateUI() {
    egyenlegP.textContent = "Egyenleg: " + balance;
    tetP.textContent = "Tét: " + currentBet;
}
// Kártya displayelés
function displayHands() {
    playerP.textContent = "Kártyák: " + playerCards.map(c => c.value).join(", ");
    dealerP.textContent = "Kártyák: " + dealerCards.map(c => c.value).join(", ");
}
// Kártya érték
function getCardValue(card) {
    if (["KING", "QUEEN", "JACK"].includes(card.value)) return 10;
    if (card.value === "ACE") return 11;
    return parseInt(card.value);
}
// Score
function calculateScore(cards) {
    let score = 0;
    let aces = 0;
    cards.forEach(card => {
        let val = getCardValue(card);
        score += val;
        if (card.value === "ACE") aces++;
    });
    while (score > 21 && aces > 0) {
        score -= 10;
        aces--;
    }
    return score;
}
// Kártya húzás
async function drawCard(target) {
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await res.json();
    target.push(data.cards[0]);
}
// Játék start
async function startGame() {
    playerCards = [];
    dealerCards = [];
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const data = await res.json();
    deckId = data.deck_id;
    await drawCard(playerCards);
    await drawCard(playerCards);
    await drawCard(dealerCards);
    await drawCard(dealerCards);
    displayHands();
}
// Hit
hitBtn.addEventListener("click", async () => {
    await drawCard(playerCards);
    displayHands();
    let score = calculateScore(playerCards);
    if (score > 21) {
        alert("Bust! Vesztettél.");
        balance -= currentBet;
        currentBet = 0;
        updateUI();
    }
});
// Stand
standBtn.addEventListener("click", async () => {
    while (calculateScore(dealerCards) < 17) {
        await drawCard(dealerCards);
    }
    displayHands();
    let playerScore = calculateScore(playerCards);
    let dealerScore = calculateScore(dealerCards);

    if (dealerScore > 21 || playerScore > dealerScore) {
        alert("Nyertél!");
        balance += currentBet;
    } else if (playerScore < dealerScore) {
        alert("Vesztettél!");
        balance -= currentBet;
    } else {
        alert("Döntetlen!");
    }
    currentBet = 0;
    updateUI();
});
// Tét popup
tetBtn.addEventListener("click", () => {
    let bet = prompt("Add meg a tétet:");
    if (bet !== null) {
        bet = parseInt(bet);

        if (!isNaN(bet) && bet > 0 && bet <= balance) {
            currentBet = bet;
            updateUI();
        } else {
            alert("Érvénytelen tét!");
        }
    }
});
// Feltöltés popup
feltoltesBtn.addEventListener("click", () => {
    let amount = prompt("Mennyit szeretnél feltölteni?");

    if (amount !== null) {
        amount = parseInt(amount);

        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            updateUI();
        } else {
            alert("Érvénytelen összeg!");
        }
    }
});
// Start gomb
startBtn.addEventListener("click", () => {
    if (currentBet <= 0) {
        alert("Adj meg tétet először!");
        return;
    }
    startGame();
});
updateUI();