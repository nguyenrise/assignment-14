import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders portfolio header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Sunrise Nguyen's Portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
