function celsiusAFahrenheit(c) {
    return (c * 9/5) + 32;
}

document.getElementById("btnEjecutar").addEventListener("click", function() {
    let c = Number(document.getElementById("celsiusInput").value);
    let f = celsiusAFahrenheit(c);
    let resultado = `${c} °C equivalen a ${f} °F`;
    console.log(resultado);
    document.getElementById("salida").textContent = resultado;
});