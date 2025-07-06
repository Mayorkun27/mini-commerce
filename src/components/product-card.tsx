import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCartStore } from "@/app/store/cart-store";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
    }, 1000);
  };

  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col jus">
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 text-gray-600">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-3">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0 mt-auto">
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-3 px-4 cursor-pointer transition-all"
        >
          {showFeedback ? '✓ Added to Cart!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
