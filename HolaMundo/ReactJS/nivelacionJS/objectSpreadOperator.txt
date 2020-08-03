/**
 *
 * object spread operator
 *
 * nos va servir para cuando nosotros queramos generar copias de
 * un objeto en otro sin que se pisen los valores.
 *
 */

const obj = {
  a: 1,
  b: 2,
};

const obj1 = {
  data: { ...obj },
};

obj1["c"] = 3;

console.log(obj, obj1, obj1.data);
