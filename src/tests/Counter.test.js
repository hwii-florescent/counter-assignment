// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i); // Verifies the "Counter" heading exists
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count'); // Finds the paragraph displaying the count
  expect(countElement).toHaveTextContent('0'); // Ensures the initial value is 0
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count'); // Finds the paragraph displaying the count
  const incrementButton = screen.getByText('+'); // Finds the "+" button
  fireEvent.click(incrementButton); // Simulates clicking the "+" button
  expect(countElement).toHaveTextContent('1'); // Verifies the count has incremented to 1
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count'); // Finds the paragraph displaying the count
  const decrementButton = screen.getByText('-'); // Finds the "-" button
  fireEvent.click(decrementButton); // Simulates clicking the "-" button
  expect(countElement).toHaveTextContent('-1'); // Verifies the count has decremented to -1
});
