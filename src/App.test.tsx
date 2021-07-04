import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders `Restaurants` text", () => {
  render(<App />);
  const helloWorld = screen.getByText(/Restaurants/i);
  expect(helloWorld).toBeInTheDocument();
});
