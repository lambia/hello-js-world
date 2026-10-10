//programma per confrontare la lunghezza di due parole
//l'utente inserisce due parole, io controllo qual'è la più lunga

/*
1 - input: ricevo due parole dall'utente, le salvo in due variabili
2 - elaborazione: confronto le due parole dell'utente
3 - output: messaggio che stampa la parola più lunga
*/

// INPUT
debugger;

let a = prompt("Inserisci la prima parola");
console.log(`L'utente ha inserito: ${a}`);

let b = prompt("Inserisci la seconda parola");
console.log(`L'utente ha inserito: ${b}`);

let msg = "";

// ELABORAZIONE
if (!a || !b) {

    msg = "Non hai inserito tutti i dati!"

} else if (a.length > b.length) {

    msg = `${a} è più lunga di ${b}`;

} else if (a.length < b.length) {

    msg = `${b} è più lunga di ${a}`;

} else {

    msg = `Le parole sono lunghe uguali`;

}

//OUTPUT
console.log(msg);
console.log("Programma terminato");