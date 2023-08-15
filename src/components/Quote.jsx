import React from 'react';
import spinLogo from './arrow-clockwise.svg';

const Quote = () => (
  <div className="quote-container">
    <div className="quote">I will earn $7000 per month next year</div>
    <div className="author">Ali Reza</div>
    <button type="button" className="reload-button">
      <img src={spinLogo} alt="reload-icon" />
      <p>Refresh</p>
    </button>
  </div>
);

export default Quote;
