document.getElementById("btnEjecutar").addEventListener("click", function() {
    let numeros = [100, 2, 10, 5, 25];
    let ordenados = [...numeros].sort((a, b) => a - b);
    let resultado = `Original: [${numeros.join(", ")}] | Ordenado: [${ordenados.join(", ")}]`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});