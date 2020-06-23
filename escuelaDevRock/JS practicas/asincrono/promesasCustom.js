const request = require('request')


function llamada(url){
    return new Promise(function(resolve, reject){
        request(url, function(err, response){
            if(err){
                reject(err)
            }else {
                resolve(response)
            }
        })

    })
}


llamada('http://wikipedia.com').then(function(response){
    console.log('ya se todo de wikipedia');
    
}).catch(function(err){
    console.log(err);
     
})



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