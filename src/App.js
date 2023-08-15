import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <div className="main">
    <Quote />
    <Calculator />
  </div>
);

export default App;
