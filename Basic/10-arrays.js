// ARRAYS
    
// Declaracion   >   2 formas posibles: 
let myArray = []
let myArray2 = new Array()

// Inicializacion
myArray = [1]       // almacena el numero 1 
myArray2 = new Array(3)     // separa 3 espacion vacias en el array

console.log(myArray)
console.log(myArray2)



myArray = [1,2,3,"Mijail", true]       // almacena el numero 1 2 3 4 
myArray2 = new Array(1,2,3,"Mijail", true)     // almacena el numero 1 2 3 4 


console.log(myArray)
console.log(myArray2)

// Añadiendo poco a poco valores
myArray2 = new Array(3)
myArray2[0] = "Brais"
myArray2[1] = "Moure"
myArray2[2] = "mouredev"

console.log(myArray2)



// Añadiendo poco a poco valores myArray
myArray[1] = "Mouredev"

console.log(myArray)


// Metodos comunes 

//      push : Introduce elementos a un array, sigue un orden creciente
//      pop : Elimina el ultimo elemento del array

myArray = []

// push
myArray.push("Brais")  // introducir elementos en el array
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

// pop
myArray.pop()  // ademas pop guarda el elemento eliminado
myArray.pop()

console.log(myArray)


// Metodos comunes

//      Shift  : Eliminar el primer elemento del array
//      Unshift : agrega elementos al principio del array

// shift
console.log(myArray.shift())  // ademas shift tambien guarda el elemento eliminado
console.log(myArray)

// unshift
myArray.unshift("Brais", "mouredev") 
console.log(myArray) 


// length
console.log(myArray.length)


// clear
// myArray = []
myArray.length = 0    // estaes un forma altenativa de vaciar o limpiar un array
console.log(myArray)


// slice : devuelte una copia superficial del tamaño requerido
myArray.push("Brais", "Moure", "mouredev", 37, true)

let myNewArray = myArray.slice(1,3)  // crear un copia de los indices del 1 al 2, sin contar el 3

console.log(myArray)
console.log(myNewArray)


// splice
myArray.splice(1,3)  // elimina esos elementos desde los indices 1 al 3, se toma consideracion al indice 3
console.log(myArray)

//splice con 3 argumentos 
myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1,2, "Nuevo elemento") // elimina indices : 1 y 2. Y reemplaza en su lugar por "Nuevo elemento"
console.log(myArray)