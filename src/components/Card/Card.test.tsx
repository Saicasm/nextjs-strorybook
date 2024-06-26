import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CustomCard from "./Card";

describe("Card", () => {
  it("renders a Custom Card", () => {
    render(<CustomCard title="Test" />);
    const heading = screen.findAllByText("Test");
    expect(heading).toBeTruthy();
  });
});
