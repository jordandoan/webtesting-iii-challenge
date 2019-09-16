// Test away!
import React from 'react';
import { render } from 'react-testing-library'
import Controls from './Controls';


test('contains text for default state: unlocked and open', () => {
  const { queryByText } = render(<Controls />);
  expect(queryByText(/close/i)).toBeTruthy();
});
