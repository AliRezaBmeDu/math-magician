import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import { Link, Routes, Route } from 'react-router-dom';

const App = () => (
  <div className="main">
    <Quote />
    <Calculator />
  </div>
);

export default App;
