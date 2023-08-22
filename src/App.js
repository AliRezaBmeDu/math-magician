import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Calculation from './pages/Calculation';
import Quote from './components/Quote';
import Home from './pages/Home';

const App = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculation />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
