import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { CheckoutItemCard } from "../CheckoutItemCard";
import { CartItem } from "@/types";

const mockItem: CartItem = {
  product: {
    id: "2",
    name: "Checkout Product",
    description: "From checkout",
    price: 50.0,
    image: "https://example.com/checkout.jpg",
    slug: "checkout-product",
    category: "Books",
  },
  quantity: 1,
};

describe("CheckoutItemCard", () => {
  it("renders checkout summary correctly", () => {
    const { getByText } = render(<CheckoutItemCard item={mockItem} />);
    
    expect(getByText("Checkout Product")).toBeInTheDocument();
    expect(getByText("Qty: 1")).toBeInTheDocument();
    expect(getByText("$50.00")).toBeInTheDocument();
  });
});
