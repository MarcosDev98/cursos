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

    //DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected."))
  .catch((err) => console.log("Error en conexion a la BD: \n", err));
