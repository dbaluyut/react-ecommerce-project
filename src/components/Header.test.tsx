import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("exists", () => {
    expect(typeof Header).toBe("function");
  });

  it('has class "Header"', () => {
    render(<Header />);
    const ui = screen.getByTestId("Header");
    expect(ui).toHaveClass("Header");
  });
});
