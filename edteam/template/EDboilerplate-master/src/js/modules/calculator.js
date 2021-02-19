import { get } from 'browser-sync'

const screen = document.getElementById('calculator-screen'),
keys = document.getElementById('calculator-keys')

screen.textContent = "0"

const calculator = () =>{
    
  if(!keys) return
  //si keys no existe, acaba la función.
  // porque si intento escuchar el evento de un null va dar error.
  keys.addEventListener('click', (e) =>{
    const t = e.target,
          d = t.dataset

    //detectar si se pulsó un número
    if (d.number){
      //writeScreen(d.number)
      screen.textContent === '0'
        ? screen.textContent = d.number
        : screen.textContent += d.number
      console.log(screen.textContent);
    } 
    //detectar si se pulsó una operación matemática
    if (d.math){
      getOperation()
    } 
    //detectar si se pulsó otra operación
    if (d.operation){
      runOperation()
    } 
  })
}

const writeScreen = number => {
  screen.textContent === '0'
    ? screen.textContent = number
    : screen.textContent += number
  console.log(screen.textContent);
}



export { calculator }