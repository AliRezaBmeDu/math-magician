import React, { useState } from 'react';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialDisplay = {
    total: '',
    next: null,
    operation: null,
  };
  const [result, setResult] = useState(initialDisplay);

  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    setResult(calculate(result, buttonName));
  };

  return (
    <div className="grid-container">
      <Display data={result.total} />
      <div className="row second">
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
        <button type="button" onClick={handleClick}>÷</button>
      </div>
      <div className="row third">
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button type="button" onClick={handleClick}>x</button>
      </div>
      <div className="row fourth">
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button type="button" onClick={handleClick}>-</button>
      </div>
      <div className="row fifth">
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>
        <button type="button" onClick={handleClick}>+</button>
      </div>
      <div className="row sixth">
        <button type="button" onClick={handleClick}>0</button>
        <button type="button" onClick={handleClick}>.</button>
        <button type="button" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
