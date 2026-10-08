//programma per confrontare la lunghezza di due parole
//l'utente inserisce due parole, io controllo qual'è la più lunga

/*
1 - input: ricevo due parole dall'utente, le salvo in due variabili
2 - elaborazione: confronto le due parole dell'utente
3 - output: messaggio che stampa la parola più lunga
*/

// INPUT
let a = prompt("Inserisci la prima parola");
console.log(`L'utente ha inserito: ${a}`);

let b = prompt("Inserisci la seconda parola");
console.log(`L'utente ha inserito: ${b}`);

// ELABORAZIONE
if (a == null || b == null) {

    console.error("Non hai inserito tutti i dati!"); //OUTPUT

} else if (a.length > b.length) {

    console.log(`${a} è più lunga di ${b}`); //OUTPUT

} else if (a.length < b.length) {

    console.log(`${b} è più lunga di ${a}`); //OUTPUT

} else {

    console.log(`Le parole sono lunghe uguali`); //OUTPUT

}

//FINE
console.log("Programma terminato");