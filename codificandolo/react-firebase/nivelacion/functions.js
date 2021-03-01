function nombreFuncion(){
  console.log('Hola Mundo');
}


const saludar = () => {
  console.log('Hola Mundo desde ArrowFunction');
}

nombreFuncion();
saludar();


const funct1 = (dato) => {
  return dato
}

const funct2 = (d) => {
  console.log(d);
}


//Puedo pasar una función como párametro
funct2(funct1('Marcos'))

