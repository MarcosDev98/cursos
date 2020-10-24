//Buscar todos los elementos de una 'tabla'.
db.clientes.find();

//insertar varios datos de una.
db.clientes.insert([
  { firstName: "Elena", lastName: "Soraya" },
  { firstName: "Joe", lastName: "McMillan" },
]);

db.clientes.insert({
  firstName: "Isaac",
  lastName: "Delahaye",
});

//actualizar
db.clientes.update(
  { lastName: "Soraya" },
  { firstName: "Elena", lastName: "Soraya", gender: "female" }
);
//agregar un nuevo campo, sin repetir los previos.
db.clientes.update(
  {
    _id: ObjectId("5f944505464f1962459e5dcc"),
  },
  {
    $set: { age: 45 },
  }
);

//incrementar el valor de un campo
//en este caso incrementa la edad en 5.
db.clientes.update(
  { _id: ObjectId("5f944505464f1962459e5dcc") },
  {
    $inc: { age: 5 },
  }
);

db.clientes.update(
  { _id: ObjectId("5f944505464f1962459e5dcc") },
  {
    $inc: { age: 5 },
  }
);

//actualizar un dato, si no lo encuentra lo crea.
//Pero solo si agregamos {upsert: true}.
db.clientes.update(
  {
    firstName: "Aaron",
  },
  { firstName: "Aaron", lastName: "Delahaye" },
  { upsert: true }
);

//renombrar el nombre del campo.
db.clientes.update(
  { firstName: "Aaron" },
  { $rename: { firstName: "primerNombre" } }
);

//borrar un dato.
db.clientes.remove({ primerNombre: "Aaron" });

//buscar con condicion.
db.clientes.find({ $or: [{ firstName: "Joe" }, { firstName: "Isaac" }] });

//busca los datos con un valor de age mayor a 30.
//gt = greaterThan = mayor que:
db.clientes.find({ age: { $gt: 30 } });

//busca un dato con un valor de age menor a 30.
//lt = lessThan = menor que:
db.clientes.find({ age: { $lt: 30 } });

//tambien se pueden combinar.

db.clientes.find({ age: { $gt: 20, $lt: 80 } });

//agregar dato compuesto.
db.clientes.insert({
  firstName: "Zack",
  address: {
    city: "London",
  },
});

db.clientes.find({ "address.city": "London" });
