const fn = (a, b, c) => console.log(a + b + c);

const arr = [15,78,42];

fn(arr[0], arr[1], arr[2]);

//spread operator
fn(...arr);

const arr1 = [19, 21];

const arr2 = [...arr, ...arr1];

//console.log(arr2);


//

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 5, d: 'chanchito feliz' }

const obj3 = {  ...obj1 }
obj1.a = 10;
console.log(obj3, obj1);