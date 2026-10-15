const numeri = [54, 65, 46, 22, 100];

let numeroPiuGrandeTrovato = 0;

for (let i = 0; i < numeri.length; i++) {
    const numero = numeri[i];

    if (numero > numeroPiuGrandeTrovato) {
        numeroPiuGrandeTrovato = numero;
    }
}
console.log("for dice: ", numeroPiuGrandeTrovato);




let numeroPiuGrandeTrovatoForof = 0;

for (const numero of numeri) {
    if (numero > numeroPiuGrandeTrovatoForof) {
        numeroPiuGrandeTrovatoForof = numero;
    }
}

console.log("forof dice: ", numeroPiuGrandeTrovatoForof);




let numeroPiuGrandeTrovatoForeach = 0;

numeri.forEach(numero => {
    if (numero > numeroPiuGrandeTrovatoForeach) {
        numeroPiuGrandeTrovatoForeach = numero;
    }
})

console.log("forEach dice: ", numeroPiuGrandeTrovatoForeach);