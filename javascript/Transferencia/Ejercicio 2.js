//conversor de tiempo

// Constante
const SEGUNDOS = 7200;

// Variables
let minutos;
let horas;
let dias;

// Conversiones
minutos = SEGUNDOS / 60;
horas = SEGUNDOS / 3600;
dias = SEGUNDOS / 86400;

// Mostrar resultados
console.log("Segundos:", SEGUNDOS);
console.log("En minutos:", minutos);
console.log("En horas:", horas);
console.log("En días:", dias);