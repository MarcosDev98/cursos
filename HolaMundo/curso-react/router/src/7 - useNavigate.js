import { Route, Routes, Link, useNavigate } from 'react-router-dom';



const App = () => {
  const history = useNavigate();
  console.log({history});
  const forward = () => {
    history("/");
  }

  

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
        <button onClick={() => history(-1)}>Go back (-1)</button>
        <button onClick={() => history(1)}>Go forward (+1)</button>
        <button onClick={() => history(2)}>Go forward 2 (+2)</button>
      </section>
    </div>
  )
}

export default App;