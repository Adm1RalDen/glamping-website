import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * If you don't need tests, please remove this file and testing library
 * @todo fix or remove tests
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
