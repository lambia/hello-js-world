// console.log("Hello extrenal JS World!");
// alert("pagina bloccata");

const nuovoTitolo = "Hello JS World!";
document.getElementById("titolo").innerHTML = nuovoTitolo;

const annoDiNascita = 1990;
const annoCorrente = 2026;
const miaEta = annoCorrente - annoDiNascita;

const msg = "L'utente è nato nel " + annoDiNascita + ", quindi ha " + miaEta + " anni";

console.log(msg);