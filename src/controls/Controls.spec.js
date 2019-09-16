// Test away!
import React from 'react';
import { render, getByText } from 'react-testing-library'
import Controls from './Controls';

test('2 buttons exist', () => {
  const {unmount} = render(<Controls />);
  expect(document.querySelectorAll("button").length).toBe(2);
  unmount();
});

test('text of button changes when clicked', () => {
  const {getByTestId, rerender, unmount} = render(<Controls locked={false} closed={true} />);
  expect(getByTestId("closed").textContent).toBe("Open Gate");
  rerender(<Controls closed={false} />);
  expect(getByTestId("closed").textContent).toBe("Close Gate");
  rerender(<Controls locked={true} />);
  expect(getByTestId("locked").textContent).toBe("Unlock Gate");
  rerender(<Controls locked={false} />);
  expect(getByTestId("locked").textContent).toBe("Lock Gate");
  unmount();
});

test('check if buttons are disabled based on certain props', () => {
  const {getByTestId, rerender, unmount} = render(<Controls locked={false} closed={false} />);
  expect(getByTestId("locked").disabled).toBe(true);
  rerender(<Controls locked={true} />);
  expect(getByTestId("closed").disabled).toBe(true);
  unmount();
});