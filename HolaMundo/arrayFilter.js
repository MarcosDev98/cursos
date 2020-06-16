const numeros = [1,2,3,4,5,6,7,8,9]

const mascotas = [
    {nombre: 'Pocho', edad: 7, raza: 'gato'},
    {nombre: 'Tuntun', edad: 6, raza: 'gato'},
    {nombre: 'Ema', edad : 10, raza: 'perro'},
    {nombre: 'Bodoque', edad: 9, raza: 'perro'},
];


const menosNumeros = numeros.filter(x => x < 6)

const perros = mascotas.filter(x => x.raza == 'perro')
const gatos = mascotas.filter(x => x.raza == 'gato')

console.log(menosNumeros)
console.log('')
console.log(perros)
console.log('')
console.log(gatos)

