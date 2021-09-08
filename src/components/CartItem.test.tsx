import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";

describe("CartItem", () => {
  it("exists", () => {
    expect(typeof CartItem).toBe("function");
  });

  it('has class "CartItem"', () => {
    render(<CartItem />);
    const ui = screen.getByTestId("CartItem");
    expect(ui).toHaveClass("CartItem");
  });
});
