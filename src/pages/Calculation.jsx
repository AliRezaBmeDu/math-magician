import React from 'react';
import Calculator from '../components/Calculator';

const Calculation = () => (
  <React.Fragment>
    <header>
      <h1>Math Magicians</h1>
      <Navigation/>
    </header>

    <div className="calculator-body">
      <h2>Let do some maths!</h2>
      <Calculator />
    </div>
  </React.Fragment>
);

export default Calculation;