/**
 * en javascript la recursividad no esta optimizada por lo que
 * es normal que nos topemos con el error:
 *Maximum call stack size exceeded 
 * 
 * los TRAMPOLINES!!! nos permite solucionar esto.
 */


const trampoline = fn => (...args) => {

    let result = fn(...args)
    while (typeof result === 'function'){
        result = result()
    }
    return result
}



const suma = (number, sum = 0) => (
    number === 0
    ? sum
    :() => suma(number - 1, sum + number)
)

const tsuma = trampoline(suma)
const r = tsuma(10000)

console.log(r)

// otro comentario para github