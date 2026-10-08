// console.log("Hello extrenal JS World!");
// alert("pagina bloccata");

const nuovoTitolo = "Hello JS World!";
document.getElementById("titolo").innerHTML = nuovoTitolo;

const annoDiNascita = 1990;
const annoCorrente = 2026;
const miaEta = annoCorrente - annoDiNascita;

//L'utente è nato nel 1990, quindi ha 36 anni
// Concatenazione di stringe (e variabili)
// const msg = "L'utente è nato nel " + annoDiNascita + ", quindi ha " + miaEta + " anni";

// Interpolazione di stringe (e variabili)
// Il carattere si chiama "backtick", il formato è "template literal"
const msg = `L'utente è nato nel ${annoDiNascita}, quindi ha ${miaEta} anni`;

console.log(msg);