import { Route, Routes, Link, Navigate } from 'react-router-dom';

const Portafolio = () => {
  const loggedIn = false;

  if (!loggedIn) {
    return <Navigate to="/" />
  }
  return <h1>Route Portafolio</h1>
}



const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<h1>Route Inicio</h1>} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/perfil" element={<h1>Route Perfil</h1>} />
        </Routes>
      </section>
    </div>
  )
}

export default App;