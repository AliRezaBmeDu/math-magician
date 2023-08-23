import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  it('navigates to different pages when links are clicked', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    // Assert that the initial page content is rendered
    expect(getByRole('heading', { name: 'Welcome to our Page!' })).toBeInTheDocument();

    // Click on the Calculator link
    fireEvent.click(getByRole('link', { name: 'Calculator' }));
    expect(getByRole('heading', { name: 'Let\'s do some math!' })).toBeInTheDocument();

    // Click on the Quote link
    fireEvent.click(getByRole('link', { name: 'Quote' }));
    expect(getByRole('heading', { name: 'Random Quote' })).toBeInTheDocument();

    // Click on the Home link
    fireEvent.click(getByRole('link', { name: 'Home' }));
    expect(getByRole('heading', { name: 'Welcome to our Page!' })).toBeInTheDocument();
  });
});
