//Las tres notas del estudiante

//Se declaran variables
let a, b, c, promedio; 

//Se piden datos

a = parseFloat(prompt("Ingrese su 1 nota: "))
b = parseFloat(prompt("Ingrese su 2 nota: "))
c = parseFloat(prompt("Ingrese su 3 nota: "))

//Se hace la operacion

promedio = (a + b + c) / 3

//Se da el resultado

alert("Su promedio en la materia es " + promedio)
