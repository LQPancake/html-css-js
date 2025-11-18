state = {
    cards: [
    {
        id: crypto.randomUUID(),
        picture: "https://imgproxy.eneba.games/aJSVu8Y8LCNMVTCgdR5bhMl4ly5VbEjGMEgOeDhxi_I/rs:fit:95/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy83/UUZ2WVBzNW0xVHNO/aVhkQUNRbkdsQ3pw/bFJvMG81cW9VZjI1/dVlYTGkwLmpwZWc",
        name: "Steam Gift Card",
        amount: "1",
    },
    {
        id: crypto.randomUUID(),
        picture: "https://imgproxy.eneba.games/WZL3sMyJkRVj9VUuxjGPBwMZA9S8_Hda782sD8xV1Sc/rs:fit:95/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9v/czhYN255b09iMEdo/QnVUdXdYeldBSkRz/WmJsRFE4cGdXTkVW/S1U2VXpZLmpwZWc",
        name: "Steam Gift Card",
        amount: "5",
    },
    {
        id: crypto.randomUUID(),
        picture: "https://imgproxy.eneba.games/jrsm8ycQOIQN_xEz2yrQN9NLhNA6lvfBu1IKLYqjqwY/rs:fit:95/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9G/VV9TX20xN3BGOUFl/dmI5Rk1WTnpFdHBz/V215dG1SQVlSbHd2/d3ByeFZVLmpwZWc",
        name: "Steam Gift Card",
        amount: "10",
    },
    {
        id: crypto.randomUUID(),
        picture: "https://imgproxy.eneba.games/fSR7a-8mz9rkntvzd8vZ__axbiGiB5yaxPDMY3-kJuQ/rs:fit:95/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9F/QWpBWXpPd0pSUHFE/QlBVVzVBaE1MZFB5/TlpQTDV4Wmx0UVVB/bURpMkJJLmpwZWc",
        name: "Steam Gift Card",
        amount: "20",
    },
    {
        id: crypto.randomUUID(),
        picture: "https://imgproxy.eneba.games/HT6D6DSrm7uCpnfH0Qihgm26_D9HiTYQe_jrNcSO8v4/rs:fit:95/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9n/WGdBbGFYenc1ZFd0/dmE4TnBWckFmQ2xL/UHA2bkZYSlZBZ01a/NGN4QUpVLmpwZWc",
        name: "Steam Gift Card",
        amount: "50",
    },
    {
        id: crypto.randomUUID(),
        picture: "https://imgproxy.eneba.games/xv3tEpFdVhg7UbP-WqTMkwy2Mb_zW-ro0GZfDI4l420/rs:fit:95/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9E/cWdRZ0ZkRG82U0R2/b0xjNEpvcG04RlJG/MHRKc1ZXMXZ0QUc1/bmJvYjAwLmpwZWc",
        name: "Steam Gift Card",
        amount: "100",
    },
    ]
}
function deleteCard(id){
    state.cards = state.cards.filter(card => card.id !== id);
    render();
}

function render() {
    let cards = document.getElementById("cards")
    cardHtml = '<div class="row">';
    for (const card of state.cards) {
        cardHtml += `
        <div class="col-md-2 mb-4">
         <div class="card">
                    <img src="${card.picture}" alt="">
                    <h3> ${card.name}</h3>
                    <p>${card.amount}€</p>  
                    <button class="btn btn-danger btn-sm" onclick="deleteCard('${card.id}')">Delete</button>
                </div>
            </div>`
            }
            cardHtml+= "</div>";
            cards.innerHTML = cardHtml;
        }
window.onload = render;

document.getElementById('create-product').onSubmit = (event) => {
    event.preventDefault();

    const price = parseInt(event.target.elements.price.value);

    state.cards.push({
        id: crypto.randomUUID(),
        name: "Steam Gift Card",
        amount: price,
        picture: "https://imgproxy.eneba.games/aJSVu8Y8LCNMVTCgdR5bhMl4ly5VbEjGMEgOeDhxi_I/rs:fit:95/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy83/UUZ2WVBzNW0xVHNO/aVhkQUNRbkdsQ3pw/bFJvMG81cW9VZjI1/dVlYTGkwLmpwZWc"
    });

    render();
    event.target.reset();
};