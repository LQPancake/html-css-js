/* Ezt kell önnek elkészítenie. */
let sale = document.querySelector(".sale")
let products = document.querySelectorAll(".product")
sale.onclick = function() {
    if(sale.checked){
        products.forEach((product) => {
            if (!product.querySelector(".product-old-price")){
                product.style.display= "none"
            }
        })
    } else{
        products.forEach((product) => {
            product.style.display = "inline-block"
        })
    }
}
let order = document.querySelector(".order")
let productsArray = Array.from(products)
order.onchange = () => {
    switch(order.value){
        case "0":
            productsArray.sort((a, b) => {
                let aValue = a.querySelector(".producct-price").innerText.replace(".", "")
                let bValue = b.querySelector(".producct-price").innerText.replace(".", "")
                return a-b
            })
            break;
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
    }
}