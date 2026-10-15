function azar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let numeroAleatorio = azar(-5, 10);
    let resultado = `Número aleatorio generado entre -5 y 10: ${numeroAleatorio}`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});