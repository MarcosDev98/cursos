const mongoose = require("mongoose");

//Conexión a la base de datos.
//La primera vez que se ejecute este comando va a crear la Base de Datos.
//Si ya existe, simplemente se conecta.
// Acá creo la base de datos que se va a llamar "notes-db-app"
mongoose
  .connect("mongodb://localhost/notes-db-app", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("DB is connected."))
  .catch((err) => console.log("Error en conexion a la BD: \n", err));
