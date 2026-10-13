//Definizione (con parametri)
function calcolaEta(annoDiNascita) {
    const annoCorrente = 2026;

    if (!annoDiNascita || !Number.isInteger(annoDiNascita) || annoDiNascita < 1800 || annoDiNascita > annoCorrente) {
        return;
    }

    return annoCorrente - annoDiNascita;
}

// Invocazione: solo qui il codice viene eseguito (con argomenti)
// const annoCorrente = getAnnoCorrente(); // 2026
// console.log(annoCorrente);
// console.log(`Siamo nell'anno ${annoCorrente}!`);
// document.writeln(`<p>${annoCorrente}</p>`)

// const etaDiLuca = calcolaEta(1990);
// const etaDiGiuseppe = calcolaEta(2000);




// function somma(a, b) {
//     return a + b;
// }

// somma( 2, 3 )

// const x = 1;
// const y = 2;
// somma( x, y );