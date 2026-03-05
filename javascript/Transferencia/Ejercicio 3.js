//Ejercicio 3: Producción de una fábrica

// Constantes 
const PRODUCCION_POR_HORA = 250;
const HORAS_TRABAJADAS = 8;
const CAPACIDAD_CAJA = 12;

// Variables
let totalPiezas;
let cajasLlenas;
let piezasSobrantes;

// Cálculos
totalPiezas = PRODUCCION_POR_HORA * HORAS_TRABAJADAS;

// La división entera se logra con parseInt
cajasLlenas = parseInt(totalPiezas / CAPACIDAD_CAJA);

// El residuo
piezasSobrantes = totalPiezas % CAPACIDAD_CAJA;

// Resultados
console.log("Total de piezas:", totalPiezas);
console.log("Cajas llenas:", cajasLlenas);
console.log("Piezas sobrantes:", piezasSobrantes);