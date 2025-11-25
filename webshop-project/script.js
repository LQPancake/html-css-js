let state = {
    products : [
        {
            id: crypto.randomUUID(),
            name: "Teszt termék 1",
            price: 2500,
            isInStock: true
        },
        {
            id: crypto.randomUUID(),
            name: "Teszt termék 2",
            price: 3500,
            isInStock: true
        },
        {
            id: crypto.randomUUID(),
            name: "Teszt termék 3",
            price: 5550,
            isInStock: false
        }
    ]
}
function renderProducts() {
    var productsHTML = '';
    for (const product of state.products){
        productsHTML +=`
        <div class="card m-2 p-2 ${product.isInStock ? "" : "bg-danger"}">
            <p>${product.name}</p>
            <p>${product.price}</p>
            <button class="btn btn-danger float-right delete-product" data-productid="${product.id}">Törlés</button>
        </div>
        `
    }
    document.getElementById('product-list-component').innerHTML = productsHTML;
    for (const deleteBtn of document.querySelectorAll(".delete-product")){
        deleteBtn.onclick = function(event){
        let id = event.target.dataset.productid;
        let foundIndex;
        for (let index = 0; index < state.products.length; index++){
            if (state.products[index].id == id){
                foundIndex = index;
                break;
            }
            }
        state.products.splice(foundIndex, 1)
        renderProducts();
        }
    }
}
window.onload = renderProducts;
document.getElementById('create-product').onsubmit =  (event) => {
    event.preventDefault();
    const id = crypto.randomUUID();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const isInStock = event.target.elements.isInStock.checked;
    state.products.push({
        id,
        name,
        price,
        isInStock
    });

    renderProducts();
}