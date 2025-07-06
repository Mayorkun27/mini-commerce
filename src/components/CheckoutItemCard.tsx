'use client';

import Image from "next/image";
import { CartItem } from "@/types";

interface CheckoutItemCardProps {
  item: CartItem;
}

export function CheckoutItemCard({ item }: CheckoutItemCardProps) {
  const { product, quantity } = item;

  return (
    <div className="flex items-center space-x-3">
      <div className="w-16 h-16 relative flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 md:text-base text-sm">{product.name}</h3>
        <p className="md:text-sm text-xs text-gray-600">Qty: {quantity}</p>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-900">
          ${(product.price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
