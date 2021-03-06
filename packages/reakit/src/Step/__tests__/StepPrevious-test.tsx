import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import StepPrevious from "../StepPrevious";

test("html attrs", () => {
  const { getByText } = render(
    <StepPrevious id="test" aria-label="test" previous={jest.fn()}>
      test
    </StepPrevious>
  );
  expect(getByText("test")).toHaveAttribute("id", "test");
  expect(getByText("test")).toHaveAttribute("aria-label", "test");
});

test("call previous and onClick on click", () => {
  const previous = jest.fn();
  const onClick = jest.fn();
  const { getByText } = render(
    <StepPrevious previous={previous} onClick={onClick}>
      test
    </StepPrevious>
  );
  expect(previous).toHaveBeenCalledTimes(0);
  expect(onClick).toHaveBeenCalledTimes(0);
  fireEvent.click(getByText("test"));
  expect(previous).toHaveBeenCalledTimes(1);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("styled", () => {
  const { container } = render(<StepPrevious previous={jest.fn()} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  margin: unset;
  padding: unset;
  border: unset;
  background: unset;
  font: unset;
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  background-color: unset;
  color: inherit;
}

.c0:focus:not(:focus-visible) {
  outline: none;
}

<button
  class="c0"
/>
`);
});
