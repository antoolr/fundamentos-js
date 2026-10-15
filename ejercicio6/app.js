document.getElementById("btnComprobar").addEventListener("click", function() {
    let valor = document.getElementById("numeroInput").value;
    let numero = Number(valor);
    let resultado = "";

    if (valor.trim() === "" || isNaN(numero)) {
        resultado = "Entrada no válida.";
    } else if (numero % 2 === 0) {
        resultado = `El número ${numero} es par.`;
    } else {
        resultado = `El número ${numero} es impar.`;
    }

    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});