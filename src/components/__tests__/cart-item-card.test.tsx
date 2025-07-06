import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CartItemCard } from "../CartItemCard";
import { CartItem } from "@/types";

const mockUpdateQuantity = jest.fn();
const mockRemoveFromCart = jest.fn();

jest.mock("@/app/store/cart-store", () => ({
  useCartStore: () => ({
    updateQuantity: mockUpdateQuantity,
    removeFromCart: mockRemoveFromCart,
  }),
}));

const mockItem: CartItem = {
  product: {
    id: "1",
    name: "Test Product",
    description: "A nice item",
    price: 19.99,
    image: "https://example.com/image.jpg",
    slug: "test-product",
    category: "Test Category",
  },
  quantity: 2,
};

describe("CartItemCard", () => {
  beforeEach(() => {
    mockUpdateQuantity.mockClear();
    mockRemoveFromCart.mockClear();
  });

  it("renders product details correctly", () => {
    const { getByText, getByTestId } = render(
      <CartItemCard
        item={mockItem}
        onUpdateQuantity={mockUpdateQuantity}
        onRemove={mockRemoveFromCart}
      />
    );

    expect(getByText("Test Product")).toBeInTheDocument();
    expect(getByText("A nice item")).toBeInTheDocument();
    expect(getByText("$19.99")).toBeInTheDocument();
    expect(getByText("Test Category")).toBeInTheDocument();
    expect(getByTestId("quantity")).toHaveTextContent("2");
    expect(getByTestId("total-mobile")).toHaveTextContent("$39.98");
  });

  it("calls updateQuantity on + and -", () => {
    const { getByTitle } = render(
      <CartItemCard
        item={mockItem}
        onUpdateQuantity={mockUpdateQuantity}
        onRemove={mockRemoveFromCart}
      />
    );

    fireEvent.click(getByTitle("Increase Quantity"));
    expect(mockUpdateQuantity).toHaveBeenCalledWith("1", 3);

    fireEvent.click(getByTitle("Decrease Quantity"));
    expect(mockUpdateQuantity).toHaveBeenCalledWith("1", 1);
  });

  it("calls removeFromCart on trash button click", () => {
    const { getByLabelText } = render(
      <CartItemCard
        item={mockItem}
        onUpdateQuantity={mockUpdateQuantity}
        onRemove={mockRemoveFromCart}
      />
    );
    const trashButton = getByLabelText("Remove from cart");

    fireEvent.click(trashButton);
    expect(mockRemoveFromCart).toHaveBeenCalledWith("1");
  });
});
