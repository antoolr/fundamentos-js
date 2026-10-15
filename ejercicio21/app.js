function filtrarMayores(arr, limite) {
    return arr.filter(num => num > limite);
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let original = [5, 12, 8, 130, 44, 3, 20];
    let limite = Number(document.getElementById("valorInput").value);
    let filtrados = filtrarMayores(original, limite);
    let resultado = `Original: [${original.join(", ")}] | Mayores que ${limite}: [${filtrados.join(", ")}]`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});