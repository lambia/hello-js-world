const prodotti = ["penna", "quaderno", "zaino"];

// for (let i = 0; i < prodotti.length; i++) {
//     const prodotto = prodotti[i];

//     console.log(prodotto);
// }

// for (const prodotto of prodotti) {
//     console.log(prodotto);
// }

// prodotti.forEach( function(prodotto) {
//     console.log(prodotto);
// } )

// prodotti.forEach((prodotto) => {
//     console.log(prodotto);
// })

// prodotti.forEach(prodotto => console.log(prodotto))

/******************************************************/

// const prezzi = [22, 23, 102, 55];

// const nuoviPrezzi = prezzi.map(prezzo => prezzo * 2)

// console.log(nuoviPrezzi);

/******************************************************/

// let risultato;

// for (const prodotto of prodotti) {

//     if (prodotto == "penna") {
//         risultato = prodotto.toUpperCase();
//     }

// }
// console.log(risultato);

// const pennaMaiuscola = prodotti.find(prodotto => prodotto == "penna");
// console.log(pennaMaiuscola);

// const prezzi = [22, 23, 102, 55];
// console.log(prezzi);

const prezziAltiFind = prezzi.find(prezzo => prezzo > 200);
console.log("find:", prezziAltiFind);
//restituisce undefined O il primo valore trovato

const prezziAltiFilter = prezzi.filter(prezzo => prezzo > 200);
console.log("filter:", prezziAltiFilter);
//restituisce sempre un array (vuoto o con tutti i valori trovati)

