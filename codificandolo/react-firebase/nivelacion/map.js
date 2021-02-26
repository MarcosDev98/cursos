const datos = [
  {nombre: 'marcos', edad: 22},
  {nombre: 'Catalina', edad: 28},
  {nombre: 'Matias', edad: 42},
  {nombre: 'Fermin', edad: 19},
  {nombre: 'Juan Carlos', edad: 64},
]

datos.map(elemento => {
  console.log(elemento.nombre, elemento.edad);
})
