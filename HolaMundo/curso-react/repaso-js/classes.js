/**
 * Hoisting:
 * el compiladore de javascript toma las variables definidas con var
 * y las funciones definidas con function
 * y las llev al comienzo del archivo.
 * 
 */


//clases declaradas con class no tienen hoisting

class Chancho {
    
    propiedad = 'mi propiedad';
    #hambre = false;
    constructor(estado = 'durmiendo', hambre = true) {
        this.estado = estado;
        this.#hambre = hambre;
    }

    hablar() {
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!' : 'satisfecho'}`);
    }

}




const feliz = new Chancho('feliz');
feliz.hablar();
const triste = new Chancho('triste');
triste.hablar();
const nose = new Chancho('durmiendo');
nose.hablar();