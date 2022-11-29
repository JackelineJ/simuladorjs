/* Simulador de carrito de compras para comprar mercancías del juego o el juego*/

let products = parseInt(
    prompt("Type the number of the product you want to buy: 1.Ghosting (Full version) - 2.Ghosting Artbook - 3.Ghosting Bundle (Full game + Artbook)")
);

let keepBuying = true;
let buyTotal = 0;
let wantTo;

const productsArray = [];

class Product{
    constructor(id,name,price){
    this.id = id
    this.name = name;
    this.price = price;
    }
}

const ghosting = new Product(1, "ghosting", 30);
productsArray.push(ghosting);
const artbook = new Product(2, "artbook", 27);
productsArray.push(artbook);
const bundlePack = new Product(3, "bundle", 51);
productsArray.push(bundlePack);

console.log(productsArray);

while(keepBuying === true) {
    buyTotal = buyTotal + productsArray[products-1].price;

    wantTo = parseInt(prompt("Do you want to keep buying? (Enter a number) 1.Yes - 2.No"));
    if(wantTo === 1) {
        products = parseInt(prompt("Type the number of the product you want to buy: 1.Ghosting (Full version) - 2.Ghosting Artbook - 3.Ghosting Bundle (Full game + Artbook)"));
    } else if (wantTo === 2) {
        keepBuying = false;
    } else {
        wantTo = alert("Invalid option.");
        continue;
    } 
}
alert("The total amount is " + buyTotal);
console.log(buyTotal);

function belowFifty (sales) {
    return sales.price < 51;
}

console.log(productsArray.filter(belowFifty));

function bundleFind (pack) {
    return pack.name === "bundle";
}

console.log(productsArray.find(bundleFind));
