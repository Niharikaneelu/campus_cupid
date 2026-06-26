import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('renders authentication screen', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});

test('renders the main dashboard when session exists', () => {
  localStorage.setItem(
    'campusCupidSession',
    JSON.stringify({ name: 'Aanya', email: 'demo@campuscupid.app' }),
  );

  render(<App />);

  expect(
    screen.getByRole('heading', { name: /find people you actually want to meet/i }),
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /discover/i })).toBeInTheDocument();
});

test('renders the profile and settings screen from the dashboard', async () => {
  localStorage.setItem(
    'campusCupidSession',
    JSON.stringify({ name: 'Aanya', email: 'demo@campuscupid.app' }),
  );

  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /^profile$/i }));

  expect(screen.getByRole('heading', { name: /about you/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/upload profile photo/i)).toBeInTheDocument();
});
