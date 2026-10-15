let numeros = [];
for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array completo de 100 números:");
console.table(numeros);

let min = 20;
let max = 80;
let filtrados = numeros.filter(n => n >= min && n <= max);

console.log("Array filtrado entre " + min + " y " + max + ":");
console.table(filtrados);