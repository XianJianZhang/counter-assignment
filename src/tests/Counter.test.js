import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../components/Counter'; // adjust the import path as necessary

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByRole('heading')).toHaveTextContent('Counter');
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  // First increment and then decrement to test if the count returns to 0
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});
