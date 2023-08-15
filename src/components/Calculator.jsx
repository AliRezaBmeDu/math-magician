import React from 'react';
import Display from './Display';

const Calculator = () => (
  <div className="grid-container">
    <Display />
    <div className="row second">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button">&divide;</button>
    </div>
    <div className="row third">
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">x</button>
    </div>
    <div className="row fourth">
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">-</button>
    </div>
    <div className="row fifth">
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">+</button>
    </div>
    <div className="row sixth">
      <button type="button">0</button>
      <button type="button">.</button>
      <button type="button">=</button>
    </div>
  </div>
);

export default Calculator;
