import { render, screen } from '@testing-library/react';
import App from './App';

describe('Glamping Website', () => {
  test('renders main heading', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { name: /HIDDEN HEAVEN GLAMPING/i, level: 1 });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders navigation with correct links', () => {
    render(<App />);
    const navigation = screen.getByRole('navigation', { name: /main navigation/i });
    expect(navigation).toBeInTheDocument();
  });

  test('renders book now button', () => {
    render(<App />);
    const bookButtons = screen.getAllByRole('button', { name: /book/i });
    expect(bookButtons.length).toBeGreaterThan(0);
  });
});
