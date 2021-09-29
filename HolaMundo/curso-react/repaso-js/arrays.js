const arr = [5,1,2,3,4];

const r = arr.filter(x => x > 2);

//console.log(r);


//const mapped = arr.map(x => x * 2);

//console.log(mapped);

const user = [
    {id: 1, name: 'marcos'},
    {id: 2, name: 'antonio'},
    {id: 3, name: 'matias'},
    {id: 4, name: 'nicolas'},
]

const mapped = user.map((user) => `<h1>${user.name}</h1>`);
//console.log(mapped);

//reduce

//const r1 = arr.reduce((acumulador, elemento) => acumulador + elemento, 0)

//const getMax = (a,b) => Math.max(a,b);
//const r1 = arr.reduce(getMax)


//const r1 = user.reduce((acc, el) => `${acc === '' ? '' : `${acc}, `}${el.name}`, '')


const r1 = user.reduce((acc, el) => {
    if (el.id < 2 ) {
        return acc;
    }
    return acc.concat(el);
}, [])

console.log(r1);

