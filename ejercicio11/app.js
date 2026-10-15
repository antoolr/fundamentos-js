document.getElementById("btnEjecutar").addEventListener("click", function() {
    let frecuencias = {};
    for (let i = 0; i < 100; i++) {
        let num = Math.floor(Math.random() * 20) + 1;
        frecuencias[num] = (frecuencias[num] || 0) + 1;
    }

    let textoSalida = "Frecuencias de aparición:\n";
    for (let numero in frecuencias) {
        let linea = `Número ${numero}: ${frecuencias[numero]} veces`;
        console.log(linea);
        textoSalida += linea + "\n";
    }
    document.getElementById("salida").textContent = textoSalida;
}); 