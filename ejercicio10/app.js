function encontrarMaximo(arr) {
    return Math.max(...arr);
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let numeros = [-15, 8, 42, 3, -2, 99, 54];
    let maximo = encontrarMaximo(numeros);
    let resultado = `Array: [${numeros.join(", ")}] -> El mayor es: ${maximo}`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});