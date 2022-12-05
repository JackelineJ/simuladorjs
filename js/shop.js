/* Simulador de carrito de compras para comprar mercancías del juego o el juego*/

const shopProducts  = document.getElementById("shopProducts");


const seeProducts = async () => {
    const response = await fetch("../../products.json");
    const products = await response.json();
    return products;
}

const data = seeProducts();
console.log(data);

seeProducts().then(products => {
    products.forEach(product => {
        shopProducts.innerHTML += `
        <div class = "card col-6 border-0">
            <img src="../assets/shopimg/${product.img}" class ="card-img-top">
            <div class="card-body">
                <h2 class="card-title">${product.name}</p>
                <p class="card-text">$${product.price}</p>
                <button id= "shopButton" class="btn shoppingButton">Add to cart</button>
            </div>
        </div>
        `
    });
});
