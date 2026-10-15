function esPalindromo(palabra) {
    let limpia = palabra.toLowerCase().replace(/\s+/g, "");
    let invertida = limpia.split("").reverse().join("");
    return limpia === invertida;
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let texto = document.getElementById("palindromoInput").value;
    let resultado = esPalindromo(texto) ? `"${texto}" es un palíndromo.` : `"${texto}" NO es un palíndromo.`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});