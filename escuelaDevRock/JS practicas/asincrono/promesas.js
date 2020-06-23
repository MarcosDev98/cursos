/* const request = require('request')


//callbacks
request('https://wikipedia.com', function(){
    console.log('Soy el primero, ya se todo de wikipedia');
    request('https://google.com', function(){
        console.log('Soy el segundo, ya se todo de google.');

    })   
})

console.log('Soy el ultimo')

 */

//promesas
//el metodo then() de la promesa se ejecuta 
//cuando la promesa finaliza

const promesa = require('request-promise')


promesa('http://wikipedia.com').then(function(html){
    console.log('ya se todo de wikipedia');
    
}).catch(function(err){
    console.log(err);
    
})
console.log('Soy el ultimo')



/**
 * 
 * Estados de la promesa:
 * 
 * Fullfiled: la promesa termino satisfactoriamente.
 * rejected: la promesa se completó pero tiene algun error
 * pending: la promesa está pendiente.
 * setled: promesa finalizada.
 * 
 */