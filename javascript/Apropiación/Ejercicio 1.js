// El terreno rectangular

// se declaran variables.
let base, altura, area, perimetro; 

// Se piden los datos. 
base = parseInt(prompt("Ingrese la base del terreno: "))
altura = parseInt(prompt("Ingrese la altura: "))

//Se hacen operaciones
area = base * altura
perimetro = 2 * (base + altura)

//Se ejecuta el resultado
alert("El area del terreno es: " + area + 
    " m2 Y el perimetro es: " + perimetro + " m ")