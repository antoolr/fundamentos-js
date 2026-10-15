document.getElementById("btnComprobar").addEventListener("click", function() {
    let entrada = prompt("Introduce un número:");
    let numero = Number(entrada);
    let resultado = "";

    if (entrada === null || entrada.trim() === "" || isNaN(numero)) {
        resultado = "Entrada no válida.";
    } else if (numero % 2 === 0) {
        resultado = `El número ${numero} es par.`;
    } else {
        resultado = `El número ${numero} es impar.`;
    }

    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});