function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let limite = Number(document.getElementById("limiteInput").value);
    let primos = [];
    for (let i = 1; i <= limite; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    let resultado = `Primos hasta ${limite}: ${primos.join(", ")}`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});