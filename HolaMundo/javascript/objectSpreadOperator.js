const gato = {
    nombre: 'Tuntun',
    edad: 7,
}


// la sintaxis ... le dice a javascript que queremos que genere una copia de ese objeto.
const gato2 = {...gato}


console.log(gato2)
gato2.nombre = 'Pocho'
console.log(gato2)
const gatos = [gato, gato2]



