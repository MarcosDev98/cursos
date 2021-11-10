import { Route, Routes, Link, useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const App = () => {

  const query = useQuery();
  const chancho = query.get('chanchito');
  const nombre = query.get('nombre');
  console.log({chancho, nombre});

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Route Inicio</h1>} />
          <Route path="/perfil" element={<h1>Route Perfil</h1>} />
          <Route path="*" element={<h1>404: ruta no encontrada</h1>} />
        </Routes>
      </section>
    </div>
  )
}

export default App;