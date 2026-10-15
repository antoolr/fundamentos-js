function contarVocales(texto) {
    let vocales = "aeiouáéíóúü";
    let contador = 0;
    let textoMinus = texto.toLowerCase();
    for (let i = 0; i < textoMinus.length; i++) {
        if (vocales.includes(textoMinus[i])) {
            contador++;
        }
    }
    return contador;
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let texto = document.getElementById("palabraInput").value;
    let resultado = `La palabra/frase contiene ${contarVocales(texto)} vocales.`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});