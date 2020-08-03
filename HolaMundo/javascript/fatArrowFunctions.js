/**
 * FAT ARROW FUNCTIONS!!!!
 * 
 * Las fat arrow function tienen un return implicito cuando
 * son de una sola linea.
 * 
 * No es necesario utilizar la palabra reservada "function"
 * con esta nueva sintaxis podemos declarar funciones *anónimas y asignarlas a una constante. 
 *
 */

 /* function suma(a,b){
     return a+b
 }

 const resultado = suma(1,5)

 console.log(resultado)
 */

//return implicito.
 const suma = (a,b) => a+b


 //return explicito.
const sumar = (a,b) => {
    const c = a+b
    return c
}


const resultado = suma(1,5)
const resultado2 = sumar(1,5)

console.log(resultado)
console.log(resultado2)


