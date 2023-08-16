import React, { useState, useEffect } from 'react';
import spinLogo from './arrow-clockwise.svg';

const Quote = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = 'vA0/JB/b2F3uIe+n+OUoAA==ssQu65YPz7YnNSOQ';

  const fetchQuoteData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Request failed:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuoteData();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="quote-container">
      <div className="quote">{ data[0].quote }</div>
      <div className="author">{ data[0].author }</div>
      <button type="button" className="reload-button">
        <img src={spinLogo} alt="reload-icon" />
        <p>Refresh</p>
      </button>
    </div>
  );
};

export default Quote;
