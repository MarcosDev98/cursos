/**
 * COMPOSICION!!!
 * 
 * Nos permite ir creando funciones grandes a base de funciones pequeñas.
 * 
 * Las funciones pequeñas son faciles de entender y testear.!!!
 * 
 * 
 */



 const _ = require('lodash')

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const users = [
    {id: 1, nombre: 'nicolas', apellido: 'schurmann' }
]

//una funcion que devuelve el primer elemento
const head = x => x[0]
const capitalizaNombreYApellido = x => ({
    nombre: _.upperFirst(x.nombre),
    apellido: _.upperFirst(x.apellido),
})
const generarNombre = x => `${x.nombre} ${x.apellido}`


const getNombreCompleto = (_users) => {
    const primero = head(_users)
    const capitalizados = capitalizaNombreYApellido(primero) 
    
    return generarNombre(capitalizados)
}

//Composicion de funciones
//Puede ser confuso de leer
const getNombreCompleto2 = (_users) => {
    return generarNombre(capitalizaNombreYApellido(head(_users)))
}

//programacion tácita o point free.
const getNombreCompleto3 = compose(generarNombre, capitalizaNombreYApellido, head)

//comentario
const x = getNombreCompleto(users)

const y = getNombreCompleto2(users)

const z = getNombreCompleto3(users)

console.log('getNombreCompleto: ' + x)

console.log('getNombreCompleto2: ' + y)

console.log('getNombreCompleto3: ' + z)