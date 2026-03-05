// Inicio

// Declaración de variables
const expresion = (20 + 10)/5 + 3 * 2 - 4 * (20 + 10)/5 + 3 * 2 - 4 * (20 + 10)/5 + 3 * 2 - 4;

// Evaluación de la expresión
console .log("El valor de la expresión es:", expresion);
console .log("Este resultado se obtiene al seguir el orden de las operaciones matemáticas, de la siguiente manera:");
console .log("1. Primero se resuelven las operaciones dentro de los paréntesis:");
console .log("(20 + 10)/5 + 3 * 2 - 4 * (20 + 10)/5 + 3 * 2 - 4 * (20 + 10)/5 + 3 * 2 - 4 = 30/5 + 3 * 2 - 4 * 30/5 + 3 * 2 - 4 * 30/5 + 3 * 2 - 4");
console .log("2. Luego se resuelven las multiplicaciones y divisiones de izquierda a derecha:");
console .log("30/5 + 3 * 2 - 4 * 30/5 + 3 * 2 - 4 * 30/5 + 3 * 2 - 4 = 6 + 6 - 24 + 6 - 24 + 6 - 4");
console .log("3. Finalmente se resuelven las sumas y restas de izquierda a derecha:");
console .log("6 + 6 - 24 + 6 - 24 + 6 - 4 = -28");