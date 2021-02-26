fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(respuesta => respuesta.json() ).catch(error => console.log('Error en el fetch: ' + error))
.then(json => {
  console.log(json);
  console.log(json.userId);
  console.log(json.title);
  console.log(json.completed);
} )