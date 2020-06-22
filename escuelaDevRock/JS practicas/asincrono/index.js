const request = require('request')


//promesa o callback
request('https://wikipedia.com', function(){
    console.log('Ya se todo de wikipedia');   
})

console.log('Soy el ultimo')

