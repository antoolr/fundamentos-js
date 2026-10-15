let persona = {
    nombre: "Carlos",
    edad: 30,
    activo: true,
    aficiones: ["leer", "correr", "viajar"],
    direccion: {
        calle: "Mayor",
        ciudad: "Madrid"
    }
};

console.log("Objeto con console.log():", persona);
console.log("Objeto con console.table():");
console.table(persona);