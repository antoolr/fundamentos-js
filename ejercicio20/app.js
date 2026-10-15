document.getElementById("btnEjecutar").addEventListener("click", function() {
    let original = document.getElementById("textoInput").value;
    let mayus = original.toUpperCase();
    let minus = original.toLowerCase();
    let resultado = `Original: ${original}\nMayúsculas: ${mayus}\nMinúsculas: ${minus}`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});