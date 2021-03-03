import './App.css';
import Hola from "./components/Hola";
import Contador from "./components/Contador"
import Listado from './components/Listado'
import Temperatura from './components/Temperatua'

function App() {
  return (
    <div className="App">
      <Hola></Hola>
      <Contador></Contador>
      <Listado></Listado>
      <Temperatura></Temperatura>
    </div>
  );
}

export default App;
