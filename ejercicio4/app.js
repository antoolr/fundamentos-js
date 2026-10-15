document.getElementById("btnSumar").addEventListener("click", function() {
    let num1 = Number(prompt("Introduce el primer número:"));
    let num2 = Number(prompt("Introduce el segundo número:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Una de las entradas no es un número válido.");
        document.getElementById("salida").textContent = "Error: Debes introducir números válidos.";
    } else {
        let suma = num1 + num2;
        console.log("La suma es:", suma);
        document.getElementById("salida").textContent = "Resultado de la suma: " + suma;
    }
});