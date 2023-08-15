import React from 'react';
import Display from './Display';

const Calculator = () => (
  <div className="grid-container">
    <Display />
    <div className="row second">
      <span>AC</span>
      <span>+/-</span>
      <span>%</span>
      <span>&divide;</span>
    </div>
    <div className="row third">
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>x</span>
    </div>
    <div className="row fourth">
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>-</span>
    </div>
    <div className="row fifth">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>+</span>
    </div>
    <div className="row sixth">
      <span>0</span>
      <span>.</span>
      <span>=</span>
    </div>
  </div>
);

export default Calculator;
