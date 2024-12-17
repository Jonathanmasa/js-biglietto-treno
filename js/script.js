// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
let chilometro = prompt("inserisci il numero di chilometri da percorrere");
let eta = prompt("inserisci l'età del passeggero");

console.log(chilometro, eta);

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// prezzo/km
let priceKm = 0.21;

// prezzo minimo biglietto
let startPrice = chilometro * priceKm;

// prezzo finale
let finalPrice = startPrice;

console.log(priceKm,"km");
console.log(startPrice,"euro");
console.log(finalPrice,"euro");


// SE l'età è minore di 18
if (eta < 18) {

    // - va applicato uno sconto del 20% per i minorenni
    finalPrice *= 0.8;
    console.log(finalPrice);

    // SE l'età è maggiore di 65 
} else if (eta > 65) {

    // - va applicato uno sconto del 40% per gli over 65.
    finalPrice *= 0.6;

}

// selezione numero decimali
finalPrice = finalPrice.toFixed(2);
console.log("prezzo finale:", finalPrice)

// Console finale
console.log(`Prezzo totale: ${finalPrice}`);


    


