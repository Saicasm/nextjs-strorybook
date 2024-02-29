import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders primary button with correct styles", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock} variant='primary'>
        Primary Button
      </Button>
    );

    const button = getByText("Primary Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-light-accent-primary");
    expect(button).toHaveClass("text-black");

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  test("renders secondary button with correct styles", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock} variant='secondary'>
        Secondary Button
      </Button>
    );

    const button = getByText("Secondary Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-light-accent-secondary");
    expect(button).toHaveClass("text-white");

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
