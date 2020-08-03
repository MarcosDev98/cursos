 const request = require('request')


//callbacks
request('https://wikipedia.com', function(){
    console.log('Soy el primero, ya se todo de wikipedia');
    request('https://google.com', function(){
        console.log('Soy el segundo, ya se todo de google.');

    })   
})

console.log('Soy el ultimo')

