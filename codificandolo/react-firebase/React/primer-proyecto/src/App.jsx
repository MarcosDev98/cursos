import './App.css';
import Hola from "./components/Hola";
import Contador from "./components/Contador"
import Listado from './components/Listado'


function App() {
  return (
    <div className="App">
      <Hola></Hola>
      <Contador></Contador>
      <Listado></Listado>
    </div>
  );
}

export default App;
