function palabraMasLarga(frase) {
    let palabras = frase.trim().split(/\s+/);
    if (palabras.length === 0 || palabras[0] === "") return "";
    let masLarga = palabras[0];
    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length > masLarga.length) {
            masLarga = palabras[i];
        }
    }
    return masLarga;
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let texto = document.getElementById("fraseInput").value;
    let larga = palabraMasLarga(texto);
    let resultado = `La palabra más larga es "${larga}" (${larga.length} caracteres).`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});