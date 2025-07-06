import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Product } from "@/types";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) =>
    React.createElement("img", props),
}));

const mockAddToCart = jest.fn();

jest.mock("@/app/store/cart-store", () => ({
  useCartStore: jest.fn((selector) => {
    const mockState = {
      addToCart: mockAddToCart,
    };
    return selector(mockState);
  }),
}));

import { ProductCard } from "../product-card";

const mockProduct: Product = {
  id: "1",
  slug: "test-product",
  name: "Test Product",
  price: 29.99,
  image: "https://example.com/test-image.jpg",
  description: "This is a test product",
  category: "Electronics",
};

const renderWithQuery = (component: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );
};

describe("ProductCard", () => {
  beforeEach(() => {
    mockAddToCart.mockClear();
  });

  it("renders product information correctly", () => {
    renderWithQuery(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    expect(screen.getByText("This is a test product")).toBeInTheDocument();
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add to Cart" })
    ).toBeInTheDocument();
  });

  it("calls addToCart when button is clicked", () => {
    renderWithQuery(<ProductCard product={mockProduct} />);
    fireEvent.click(screen.getByRole("button", { name: "Add to Cart" }));

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
