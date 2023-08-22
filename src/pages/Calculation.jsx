import React from 'react';
import Calculator from '../components/Calculator';

const Calculation = () => (
  <div className="calculator-body">
    <div className="description">
      <h2>Let&apos;s do some math!</h2>
      <p>
        The calculator has the features of normal arithmetic operations.
        The &apos;%&apos; operator is used to find the remainder of number1 divided by number2
      </p>
    </div>
    <Calculator />
  </div>
);

export default Calculation;
