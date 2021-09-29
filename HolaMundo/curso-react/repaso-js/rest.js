const rest = (a, ...argumentos) => {
    //console.log(a);
    //console.log(argumentos);
}

rest(1,2,3);


const obj= {
    a:1, b:2, c:3, d:4
}


//object destructuring

//const { a, b } = obj
//console.log(a, b);


const arr = [1,2,3,4,5];

const [a, b, c, ...r] = arr;

//console.log(a,b,c,r);

const useState = () => ['valor', () => {}];

const [valor, setValor] = useState();
console.log(valor, setValor);
