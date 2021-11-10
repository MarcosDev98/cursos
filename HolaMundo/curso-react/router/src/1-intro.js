import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  );
}

export default App;
