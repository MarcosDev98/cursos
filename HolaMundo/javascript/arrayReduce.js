//funcion reducer

//const reducer = (acumulador, valorActual) => nuevoAcumulador

/**
 * el metodo reduce recibe una funcion llamada reducer la cual recibe como primer argumento el acumulador y el segundo argumento es el elemento que se esta iterando. Esta funcion devuelve el nuevo acumulador que se va a pasar como argumento la siguiente vez que se llame la funcion reduce. Ademas de esto el metodo de reduce recibe un segundo argumento el cual va ser el valor inicial que va tener nuestro acumulador.
 * 
 * 
 */


//const reducido = [1,2].reduce((acc,el) => acc + el, 0)



const numeros = [1,2,3,4,5]


//DATO IMPORTANTE!!!!!
//ESTA ES LA FORMA CORRECTA DE IMPLEMENTAR LA SUMA DE TODOS LOS ELEMENTOS DE UN ARREGLO.
const resultado = numeros.reduce((acc, el) => acc + el, 0)


//console.log(resultado)
//console.log(numeros)


const mascotas = [
    {nombre: 'Pocho', edad: 7, tipo: 'gato'},
    {nombre: 'Tuntun', edad: 6, tipo: 'gato'},
    {nombre: 'Ema', edad : 10, tipo: 'perro'},
    {nombre: 'Bodoque', edad: 9, tipo: 'perro'},
];

//De esta manera podemos indexar los los elementos dentro de un arreglo utilizando el metodo reduce
const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {})

/*
console.log(indexed)
console.log("-----------------------------------------")
console.log(mascotas)
console.log("-----------------------------------------")
console.log(indexed['Pocho'])
*/



const anidado = [1, [2,3], 4, [5]];

const plano = anidado.reduce((acumulador, elemento) => acumulador.concat(elemento), [])
console.log(anidado)
console.log("-----------------------------------------")
console.log(plano)
