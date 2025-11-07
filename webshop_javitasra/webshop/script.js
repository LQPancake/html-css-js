let state = {
    products: [
        {
        name: "appliedwhey",
        price: "18080",
        keplink: "appliedwhey.jpg"

        },
        {
        name: "Citrulin Malát",
        price: "8800",
        keplink: "appliedwhey.jpg"

        },
        {
        name: "EAA Gymbeam",
        price: "8800",
        keplink: "eaagymbeam.png"

        },
        {
        name: "EAA Scitec",
        price: "8800",
        keplink: "appliedwhey.jpg"

        },
        {
        name: "JustWhey protein powder",
        price: "9000",
        keplink: "justwhey.png"

        },
        {
        name: "Fehérjék",
        price: "8800",
        keplink: "appliedwhey.jpg"

        },

    ]
}

function render() {
    let products = document.getElementById("products")
    productHtml = '<div class="row">';
    for (const product of state.products) {
        productHtml += `
        <divv class="clo-md 4 mb 4">
         <div class="card">
                    <img src="${product.keplink}" alt="">
                    <h3> ${product.name}</h3>
                    <p>${product.price}</p>
                    <p id="akcio">Akciós ár: 18080Ft</p>    
                </div>
            </div>`
            }
            productHtml+= "</div>";
            products.innerHTML = productHtml;
        }
window.onload = render;
/*document.getElementById(newProduct).onsubmit=function(e){
    e.preventDefault();
    let name =e.target.elements.name.value;
    let price =e.target.elements.price.value;
    let keplink =e.target.elements.keplink.value;
    state.product.push({name:name, price:price, keplink:keplink});
render();
};*/