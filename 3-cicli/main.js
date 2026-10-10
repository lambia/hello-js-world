// for (let i = 1; i <= 10; i++) {

//     console.log(`Numero: ${i}`);

// }

/*************************************************/

// let numeri = "";

// for (let i = 1; i <= 10; i++) {

//     numeri += `${i} `;
//     console.log("Iterazione: ", numeri);

// }

// console.log("Risultato finale: ", numeri);

/*************************************************/

let scatole = "";

for (let i = 1; i <= 1000; i++) {

    scatole += `<div class="box">${i}</div>`;

}

// console.log(scatole);
document.getElementById("container").innerHTML += scatole;

/*************************************************/

