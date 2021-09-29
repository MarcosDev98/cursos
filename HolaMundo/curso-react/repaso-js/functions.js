function Fn() {
    this.name = 'marcos';
    this.age = 22;
    return 'chanchito Feliz';
}

Fn.prototype.Saludar = function Saludar() {console.log('Hola Mundo');}

const r = new Fn();
console.log(r.__proto__);

console.log(Fn(), r);

const saludo = () => 'hola mundo';

console.log(saludo());