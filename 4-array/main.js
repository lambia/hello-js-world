const iscritti = ["Luca", "Marco", "Paolo", "Marco", "Roberto"];

// console.log(iscritti[0]);
// console.log(iscritti[1]);
// console.log(iscritti[2]);
// console.log(iscritti[3]);

// for (let i = 0; i < iscritti.length; i++) {
//     const studente = iscritti[i];

//     console.log(studente);
// }
// console.log("contatore dopo for", i);

console.log(iscritti);

// Cerco Marco
for (let i = 0; i < iscritti.length; i++) {
    const studente = iscritti[i];

    console.log("Sto analizzando: ", studente);

    if (studente == "Marco") {
        console.log(`Ho trovato Marco! Si trova all'indice ${i}`);
        doveSiTrovaMarco = i;

    } else {
        console.log("Questo non è Marco...");
    }
}



// const studenti = ["Luca", "Marco", "Paolo", "Roberto", "Vincenzo"]

// let i = 0;
// while (i <= studenti.length) {

//     console.log(studenti[i]);
//     i++;
// }

// console.log("contatore dopo while", i);

const studenti = ["Luca", "Marco", "Paolo", "Roberto", "Vincenzo"]
for (const studente of studenti) {
    console.log(studente);
}

//.....