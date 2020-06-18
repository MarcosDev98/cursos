const suma = (ns) => {
    let acumulado = 0
    for (i = 0; i < ns.length; i++){

        acumulado += ns[i];
    }
    return acumulado
}

const numeros = [1,2,3,4,5]
//multiplicar * 2 

//const multiplicados = numeros.map(x => x * 2)
//console.log(multiplicados)

// a pares
//const parejas = numeros.map(x => [x,x])
//console.log(parejas)

const mascotas = [
    {nombre: 'Pocho', edad: 7, tipo: 'gato'},
    {nombre: 'Tuntun', edad: 6, tipo: 'gato'},
    {nombre: 'Ema', edad : 10, tipo: 'perro'},
    {nombre: 'Bodoque', edad: 9, tipo: 'perro'},
];

// edad promedio

const edades = mascotas.map(x => x.edad)
console.log(suma(edades)/edades.length)



