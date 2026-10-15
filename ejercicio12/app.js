function obtenerPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let pares = obtenerPares(original);
    let resultado = `Original: [${original.join(", ")}] | Pares: [${pares.join(", ")}]`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});