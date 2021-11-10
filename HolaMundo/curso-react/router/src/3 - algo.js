import { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './components/Products';
import Welcome from './components/Products';

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li><Link to={'/portafolio/welcome'}>Welcome</Link></li>
        <li><Link to={'/portafolio/products'}>Products</Link></li>
      </ul>
      <div>
        <Routes>
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/products" element={<Products/>} />
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
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/portafolio/*" element={<Portafolio />} />
      </Routes>
    </Fragment>
  );
}

export default App;
