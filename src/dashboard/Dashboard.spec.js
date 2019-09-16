// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library'
import Dashboard from './Dashboard';

test('contains text for default state: unlocked and open', () => {
  const {getByText} = render(<Dashboard />);
  getByText(/unlocked/i);
  getByText(/open/i);
  getByText(/lock gate/i);
  getByText(/close gate/i);
});

test('open/close gate is disabled when gate is locked', () => {
  const {getByText} = render(<Dashboard />);
  fireEvent.click(getByText(/close gate/i));
  fireEvent.click(getByText(/lock gate/i));
  expect(getByText(/open gate/i).disabled).toBeTruthy();
});

test('cannot lock gate if gate is open', () => {
  const {getByText} = render(<Dashboard />);
  expect(getByText(/open gate/i).disabled).toBeTruthy();
});
