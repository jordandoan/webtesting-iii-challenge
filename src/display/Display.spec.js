// Test away!
import React from "react";
import { render } from 'react-testing-library'
import Display from './Display';
test('display closed or open based on prop, and if displaying correct color', () => {
  const {getByTestId, rerender, unmount} = render(<Display locked={false} closed={false} />);
  expect(getByTestId("closed").textContent).toBe("Open");
  expect(getByTestId("closed").classList.contains("green-led")).toBeTruthy();
  rerender(<Display locked={false} closed={true} />);
  expect(getByTestId("closed").textContent).toBe("Closed");
  expect(getByTestId("closed").classList.contains("red-led")).toBeTruthy();
  unmount();
});

test('display locked or unlocked based on prop, and if displaying correct color', () => {
  const {getByTestId, rerender, unmount} = render(<Display locked={false} closed={false} />);
  expect(getByTestId("locked").textContent).toBe("Unlocked");
  expect(getByTestId("locked").classList.contains("green-led")).toBeTruthy();
  rerender(<Display locked={true} closed={false} />);
  expect(getByTestId("locked").textContent).toBe("Locked");
  expect(getByTestId("locked").classList.contains("red-led")).toBeTruthy();
  unmount();
});
