import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Proyecto = ({children}) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li><Link to="/portafolio/proyecto1">Proyecto1</Link></li>
        <li><Link to="/portafolio/proyecto2">Proyecto2</Link></li>
      </ul>
      <div>
        <Routes>
          <Route exact path="/portafolio/proyecto1" element={<Proyecto>Proyecto1</Proyecto>} />
          <Route exact path="/portafolio/proyecto2" element={<h1>Proyecto 2</h1>} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Fragment>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/portafolio">Portafolio</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<h1>Inicio</h1>} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>
    </Fragment>
  );
}

export default App;
