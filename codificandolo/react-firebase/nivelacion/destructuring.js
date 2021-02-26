const persona = {
  nombre: 'Marcos',
  apellido: 'Aguado',
  edad: 22,
  casado: false,
  mascota: {
    nombreMascota: 'Manchita',
    edadMascota: 3,
  }
}

// Esto es Object Destructuring
// Al definir constantes entre llaves, de esta manera JavaScript entiende que dentro del objeto persona hay propiedades con ese nombre, en este caso nombre, apellido y edad.
const {nombre, apellido, edad} = persona

console.log(nombre);
console.log(apellido);
console.log(edad);

const {nombreMascota} = persona.mascota

console.log(nombreMascota);