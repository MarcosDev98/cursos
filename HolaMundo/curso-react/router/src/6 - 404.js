import { Route, Routes, Link } from 'react-router-dom';



const App = () => {
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