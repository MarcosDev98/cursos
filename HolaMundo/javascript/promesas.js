/**
 * PROMESAS!!!
 * son un objeto que representan un valor que 
 * eventualmente se va a resolver y eventualmente vamos a poder
 * acceder a el.
 * 
 * Son más componibles, lo que nos va permtir que reutilicemos
 * cada vez mas nuestro código y avanzar mas rápido si
 * las usamos correctamente
 * 
 * Las promesas se pueden resolver inmediatamente o eventual-
 * mente en un futuro. Tambien pueden fallar inmediatamente
 * o pueden fallar en un futuro
 * 
 * 
 * Las vamos a poder ir encadenando
 * 
 */
/* 
const p1 = Promise.resolve(1)
//comment
console.log(p1)

p1
    .then(x => x + 5)
    .then(x => Promise.resolve(x + 5))
    .then(x => Promise.reject('Error! algo se rompió'))
    .then(x => console.log('Esto no se va a llamar.'))
    .catch(e => console.log(e))
 */    

const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x),5000))

delayed(7)
    .then(x => {
        console.log(x)
        return delayed(x + 7)
    })
    .then(x => console.log(x))
    .then(x => Promise.reject('Hubo un error :c'))
    .catch(e => console.log(e))
 

