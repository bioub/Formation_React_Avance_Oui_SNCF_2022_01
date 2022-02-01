import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('Counter render with react-dom', () => {
  const containerEl = document.createElement('div');
  ReactDOM.render(<Counter count={10} onIncrement={() => {}} />, containerEl);
  expect(containerEl.textContent).toContain('10');
});

test('Counter calls onIncrement on click with react-dom', () => {
  const containerEl = document.createElement('div');
  const spy = jest.fn();
  ReactDOM.render(<Counter count={10} onIncrement={spy} />, containerEl);

  const buttonEl = containerEl.querySelector('button');
  buttonEl.dispatchEvent(new MouseEvent('click', {bubbles: true}));

  expect(spy).toHaveBeenCalled();
});

test('Counter render with react-dom', () => {
  render(<Counter count={10} onIncrement={() => {}} />);
  expect(screen.getByRole('button').textContent).toContain('10');
});

test('Counter calls onIncrement on click with react-dom', () => {
  const spy = jest.fn();
  render(<Counter count={10} onIncrement={spy} />);

  fireEvent.click(screen.getByText('10'));

  expect(spy).toHaveBeenCalled();
});