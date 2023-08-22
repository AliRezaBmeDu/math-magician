import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Calculation from './pages/Calculation';
import Quotation from './pages/Quotation';
import Home from './pages/Home';

const App = () => (
  <>
    <header className="navbar">
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/calculator" className="nav-link">Calculator</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/quote" className="nav-link">Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Routes className="main">
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculation />} />
      <Route path="/quote" element={<Quotation />} />
    </Routes>
  </>
);

export default App;
