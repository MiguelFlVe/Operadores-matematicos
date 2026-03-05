//Ejercicio 1: Calculadora de gastos de viaje

// Costos fijos (constantes)
const TRANSPORTE = 120000;
const ALOJAMIENTO = 200000;
const ALIMENTACION = 150000;
const PERSONAS = 4;

// Variables
let total;
let aporteIndividual = 130000;
let sobrante;

// Cálculo del total
total = TRANSPORTE + ALOJAMIENTO + ALIMENTACION;

// Cálculo de cuanto debe pagar cada persona
let pagoPorPersona = total / PERSONAS;

// Cálculo del sobrante por persona
sobrante = aporteIndividual - pagoPorPersona;

// Mostrar resultados
console.log("Total del viaje: $" + total);
console.log("Cada persona debe pagar: $" + pagoPorPersona);
console.log("Cada persona entregó: $" + aporteIndividual);
console.log("Sobrante por persona: $" + sobrante);