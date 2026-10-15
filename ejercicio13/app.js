document.getElementById("btnEjecutar").addEventListener("click", function() {
    let frase = document.getElementById("fraseInput").value.trim();
    let palabras = frase === "" ? [] : frase.split(/\s+/);
    let cantidad = palabras.length;
    let resultado = `La frase contiene ${cantidad} palabras.`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});