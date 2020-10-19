const place = "World"
const greeting = "Hello"


console.log(`${greeting}, ${place}`);

//  VS

console.log('%s, %s', greeting, place);

//scope de let
let test = "outside function"
console.log(test);

function probandoScope(){

    let test = "inside function"
    console.log(test);
}

probandoScope()