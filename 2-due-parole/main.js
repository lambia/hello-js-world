console.log("Due Parole v. 0.1");

//programma per confrontare la lunghezza di due parole

//l'utente inserisce due parole, io controllo qual'è la più lunga

/*
0 - preparazione: preparo variabili, messaggi o altro
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
    console.error("Non hai inserito tutti i dati!");

} else if (a.length > b.length) {

    //OUTPUT
    console.log(`${a} è più lunga di ${b}`);

} else if (a.length < b.length) {

    //OUTPUT
    console.log(`${b} è più lunga di ${a}`);

} else {

    //OUTPUT
    console.log(`Le parole sono lunghe uguali`);

}

console.log("Programma terminato");