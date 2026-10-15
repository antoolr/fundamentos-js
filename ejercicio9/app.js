function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let texto = document.getElementById("cadenaInput").value;
    let invertida = invertirCadena(texto);
    let resultado = `Original: "${texto}" | Invertida: "${invertida}"`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});