/* El simulador va a comportarse como novela visual en la que vas a tener que escoger una opción u otra.
Al igual que pedir input al usuario como el nombre. y respuestas a puzzles. Las opciones que elijas van a 
determinar tu experiencia dentro del juego.*/

let heroName = prompt("Choose the name of our hero");

let naming = true;

while (naming === true) {
    if (heroName === "") {
        heroName = prompt("That's not it. Everyone has a name. Try again. Choose a name.");
        continue;
    } else {
        alert(`Their name is ${heroName}. Very good, let's begin!`);
    }
    naming = false;
}

console.log(heroName);

alert ("You just moved to a new place. What do you want to do?");
alert ("Remember you have to enter a number to pick!");

let firstQuestion = parseInt(prompt("1. Check inside the house - 2. Walk through the garden"));
let continuePlaying;
let decisionMaking = true;

while (decisionMaking === true) {
    if (firstQuestion === 1){
        alert ("The house is quite big. You still don't know how you got so lucky to bag this.");
    } else if (firstQuestion === 2){
        alert("You notice the garden is well kept. Quite curious since nobody has lived here for a while");
    } else {
        firstQuestion = parseInt(
            prompt("The choice you've made has led you nowhere. You should try again. 1. Check inside the house - 2. Walk through the garden"));
        continue;
    }
    decisionMaking = false;
} 
continuePlaying = alert("You start walking ahead");

const Protagonist = {
    age: 25,
    birthday: "August 13th"
};

function dataHero () {
    console.log("Hello, I'm " + heroName + ". I have " + this.age + " years of experience in this thing called living.");
    console.log("My birthday is " + this.birthday);
};

Protagonist.dataHero = dataHero;
Protagonist.dataHero ();










