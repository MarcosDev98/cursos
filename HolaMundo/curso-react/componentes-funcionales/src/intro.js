//import MiComponente from './components/MiComponente';

const impura = () => new Date().toLocaleString();

console.log(impura());

const MiComponente = ({ miProp }) => {
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return(
    <MiComponente miProp={'chanchito feliz'} />
  )
}

export default App;
