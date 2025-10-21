let state = {
    products : [
        {
            name: "Májkrém",
            price: 600,
            isInStock: true
        },
        {
            name: "Sajtkrém",
            price: 650,
            isInStock: true
        },
        {
            name: "Vajkrém",
            price: 900,
            isInStock: false
        },
        {
            name: "Nutella",
            price: 4000,
            isInStock: true
        },
        {
            name: "Pisztáciakrém",
            price: 5000,
            isInStock: false
        }
    ]
}
function renderProducts() {
    var productsHTML = '';
    for (const products of state.products){
        productsHTML +=`

        `
    }
    document.getElementById('').innerHTML = productsHTML;
}
window.onload = renderProducts;