"use client";

import Image from "next/image";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { CartItem } from "@/types";

interface CartItemCardProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemCardProps) {
  const { product, quantity } = item;

  return (
    <div className="md:p-6 p-4 border-b border-gray-200 last:border-b-0">
        <div className="flex items-center space-x-4">
            {/* Product Image */}
            <div className="flex flex-col items-center md:gap-2 gap-3">
                <div className="flex-shrink-0 w-20 h-20 relative">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <button
                    onClick={() => onRemove(product.id)}
                    title="Remove Item"
                    className="text-red-600 cursor-pointer hover:text-red-800 transition-colors flex items-center gap-1 md:text-xs text-[10px]"
                >
                    <TrashIcon className="h-4 w-4" />
                    <span className="whitespace-nowrap">Remove Item</span>
                </button>
            </div>

            {/* Product Details */}
            <div className="flex-1">
                <h3 className="md:text-lg text-sm font-semibold text-gray-900">
                    {product.name}
                </h3>
                <p className="text-gray-600 md:text-sm text-xs mb-2">{product.description}</p>
                <div className="flex items-center space-x-4">
                    <span className="md:text-lg text-sm font-medium text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs bg-gray-100 p-1 rounded text-gray-500">{product.category}</span>
                </div>
            </div>

            {/* Item Total & Quantity Controls  */}
            <div className="text-right md:inline hidden">
                <div className="text-lg font-bold text-blue-600 mb-2">
                    ${(product.price * quantity).toFixed(2)}
                </div>
                <div className="flex items-center space-x-3">
                <button
                    onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                    className="p-2 rounded transition-colors cursor-pointer hover:bg-blue-600/20 text-black"
                    title="Decrease Quantity"
                >
                    <MinusIcon className="h-4 w-4 text-gray-600" />
                </button>
                <span className="w-8 text-center font-medium text-black">{quantity}</span>
                <button
                    onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                    className="p-2 rounded transition-colors cursor-pointer hover:bg-blue-600/20 text-black"
                    title="Increase Quantity"
                >
                    <PlusIcon className="h-4 w-4 text-gray-600" />
                </button>
                </div>
                
            </div>
        </div>
        <div className="text-right md:hidden flex items-center justify-between mt-4">
            <div className="text-lg font-bold text-blue-600">
                ${(product.price * quantity).toFixed(2)}
            </div>
            <div className="flex items-center space-x-3">
                <button
                    onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                    className="p-2 rounded transition-colors cursor-pointer hover:bg-blue-600/20 text-black"
                    title="Decrease quantity"
                >
                    <MinusIcon className="h-4 w-4 text-gray-600" />
                </button>
                <span className="w-8 text-center text-black font-medium">{quantity}</span>
                <button
                    onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                    className="p-2 rounded transition-colors cursor-pointer hover:bg-blue-600/20 text-black"
                    title="Increase quantity"
                >
                    <PlusIcon className="h-4 w-4 text-gray-600" />
                </button>
            </div>
        </div>
    </div>
  );
}
