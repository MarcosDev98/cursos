function promesaA(){
    return new Promise((resolve, reject) =>{

        setTimeout(resolve, 200, 'pepe')

    } )
}



function promesaB(nombre){
    return new Promise((resolve, reject) =>{

        setTimeout(resolve, 400, 'Mi nombre es '+ nombre)

    } )
}


promesaA().then(promesaB).then(console.log)

