import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


describe('Navbar', () => {
  it('renders a Home link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders an About link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders a Contact link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Contact/i);
    expect(linkElement).toBeInTheDocument();
  });
});
