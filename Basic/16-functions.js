// Funciones    :   Es un bloque de codigo para realizar una tarea especifica

// Declaracion 
function myFunc() {
    console.log("Hola, funcion!")
}

// llamada a la funcion
myFunc()
myFunc()
myFunc()
myFunc()
myFunc()


// Con parametros 
function myFuncWitharams (name) {
    console.log(`Hola, ${name}!`)
}
myFuncWitharams("Brais")
myFuncWitharams("MoureDev")


// Funciones anonimas   :   capacidad de almacenar la funcion en un variable
const myFunc2 = function (name) {
    console.log(`Hola, ${name}!`)
}

myFunc2("Brais Moure")



// Arrow functions  o funciones flecha

const myFunc3 = (name) => {
    console.log(`Hola, ${name}!`)    
}
myFunc3("Brais Moure Arrow")
myFunc3("Brais Moure Arrow")



// Parametros 
function sum(a, b) {
    console.log(a + b)
}
sum(5, 10)

function defaultSum(a = 0, b= 0) {
    console.log(a + b)
}
defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)



// Retorno de valores
function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)


// Funciones anidades

function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}

extern()
// intern()    Error:  Fuera del scope



// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}
applyFunc(myFunc3, "Funcion de orden superior")



// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])


myArray.forEach(function (value) {
    console.log(value)    
})

myArray.forEach((value) => console.log(value))  // forma simplificada


myMap.forEach((value) => console.log(value))  // forma simplificada

mySet.forEach((value) => console.log(value))  // forma simplificada
