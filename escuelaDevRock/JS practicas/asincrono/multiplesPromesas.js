let promesaA = new Promise((resolve, reject) => setTimeout(resolve, 500, 'hola soy la promesa A'))
let promesaB = new Promise((resolve, reject) => setTimeout(resolve, 500, 'hola soy la promesa B'))
let promesaC = Promise.reject()


//FORMA FEA
/* promesaA.then(function(){
    promesaB.then(function(){

        console.log('terminó todo');
        

    })
    
}) */


//FORMA CORRECTA
Promise.all([promesaA, promesaB, promesaC]).then(function(e){
    console.log('termino todo',e);
    
}).catch(function(err){
    console.log(err, 'Todo mal');
    
})
