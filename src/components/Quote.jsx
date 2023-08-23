import React, { useState, useEffect } from 'react';
import spinLogo from './arrow-clockwise.svg';

const Quote = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const apiKey = 'vA0/JB/b2F3uIe+n+OUoAA==ssQu65YPz7YnNSOQ';

  const types = ['communications', 'computers', 'cool', 'courage', 'education', 'experience', 'faith', 'family',
    'famous', 'leadership', 'learning', 'money', 'morning', 'movies', 'success', 'legal', 'life', 'love',
  ];
  const category = types[Math.floor(10 * Math.random(types.length - 1))];
  const fetchQuoteData = async () => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      setIsError('Error loading Data, please refresh to see new quote');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuoteData();
  }, []);

  const handleClick = () => {
    fetchQuoteData();
  };

  if (isLoading) {
    return (
      <div className="quote-container">
        <div className="quote-author">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="quote-container">
        <div className="quote-author">
          <p>{ isError }</p>
          <button type="button" className="reload-button" name="refresh" onClick={handleClick}>
            <img src={spinLogo} alt="reload-icon" />
            <p>Refresh</p>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quote-container">
      {data.length > 0 ? (
        <div className="quote-author">
          <p className="quote">
            &quot;
            {data[0]?.quote}
            &quot;
          </p>
          <p className="author">
            &#8722;
            {data[0]?.author}
          </p>
        </div>
      ) : (
        <div className="quote-author">
          <p className="quote">
            No quotes available, please refresh.
          </p>
        </div>
      )}
      <button type="button" className="reload-button" name="refresh" onClick={handleClick}>
        <img src={spinLogo} alt="reload-icon" />
        <p>Refresh</p>
      </button>
    </div>
  );
};

export default Quote;
