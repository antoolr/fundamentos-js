function calcularPromedio(arr) {
    if (arr.length === 0) return 0;
    let suma = arr.reduce((acum, val) => acum + val, 0);
    return suma / arr.length;
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let numeros = [10, 20, 30, 40, 50];
    let promedio = calcularPromedio(numeros);
    let resultado = `Array: [${numeros.join(", ")}] -> Promedio: ${promedio}`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});