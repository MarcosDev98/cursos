const obtenerRespuesta = async() => {
  try{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const datos = await respuesta.json()
    console.log(datos);
  } catch(error) {
    console.log(error);
  }
}

obtenerRespuesta()
