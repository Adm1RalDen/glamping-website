import { render, screen } from '@testing-library/react';
import App from './App';

test('renders glamping website header', () => {
  render(<App />);
  const glampingText = screen.getByText(/glamping/i);
  expect(glampingText).toBeInTheDocument();
});

test('renders main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/HIDDEN HEAVEN GLAMPING/i);
  expect(headingElement).toBeInTheDocument();
});
