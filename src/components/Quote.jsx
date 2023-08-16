import React, { useState, useEffect } from 'react';
import spinLogo from './arrow-clockwise.svg';

const Quote = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = 'vA0/JB/b2F3uIe+n+OUoAA==ssQu65YPz7YnNSOQ';

  const fetchQuoteData = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      const json = await response.json();
      setData(json);
      console.log('JSON response: ', json);
      console.log('data: ', data);
    } catch (error) {
      console.error('Request failed:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuoteData();
  }, []);

  if (isLoading) {
    return (
      <div className="quote-container">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="quote-container">
      <div className="quote"><p>{ data[0].quote }</p></div>
      <div className="author">{ data[0].author }</div>
      <button type="button" className="reload-button">
        <img src={spinLogo} alt="reload-icon" />
        <p>Refresh</p>
      </button>
    </div>
  );
};

export default Quote;
