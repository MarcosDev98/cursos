import { useState } from 'react';
/**
 * reglas de los hooks:
 * 
 * no se llaman en loops, ni condiciones, ni whiles, ni nada.
 * siempre en el nivel/scope mas alto del componente.
 * solo se pueden utilizar en 2 partes:
 * componentes de React y custom hooks.
 * cuando creamos un custom hook el nombre de este debe empezar con use*
 */

// class App extends Component {
//     state = {contador: 0}
//     incrementar = () => {
//         this.setState({ contador: this.state.contador + 1 })
//     }

//     render() {
//         return (
//             <div>
//             Contador: {this.state.contador}
//             <button onClick={this.incrementar}>Incrementar</button>
//         </div>
//         )
//     }
// }

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);
    const incrementar = () => {
        setContador(contador + 1);
    }
    return [contador, incrementar];
}

const App = () => {
    const [contador, incrementar] = useContador(0);
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App;