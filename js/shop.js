/* Simulador de carrito de compras para comprar mercancías del juego o el juego*/

let products = parseInt(
    prompt("Type the number of the product you want to buy: 1.Ghosting (Full version) - 2.Ghosting Artbook - 3.Ghosting Bundle (Full game + Artbook)")
);

let keepBuying = true;
let buyTotal = 0;
let wantTo;

class Product{
    constructor(id,name,price){
    this.id = id
    this.name = name;
    this.price = price;
    }
}

const ghosting = new Product(1, "ghosting", 30);
const artbook = new Product(2, "artbook", 27);
const bundlePack = new Product(3, "bundle", 51);

while(keepBuying === true) {
    if (products === ghosting.id) {
        buyTotal = buyTotal + ghosting.price;
    } else if (products === artbook.id) {
        buyTotal = buyTotal + artbook.price;
    } else if (products === bundlePack.id) {
        buyTotal = buyTotal + bundlePack.price;
    } else {
        products = parseInt(
            prompt("The option you typed is not available. Please choose an available option: 1.Ghosting (Full version) 2 - Ghosting Artbook 3. Ghosting Bundle (Full game + Artbook"));
            continue;
    }

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
