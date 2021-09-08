import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  it("exists", () => {
    expect(typeof ProductCard).toBe("function");
  });

  it('has class "ProductCard"', () => {
    render(<ProductCard />);
    const ui = screen.getByTestId("ProductCard");
    expect(ui).toHaveClass("ProductCard");
  });
});
