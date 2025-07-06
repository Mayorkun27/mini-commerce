"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useCartStore } from "@/app/store/cart-store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export function Header() {
    const pathname = usePathname();
    const totalItems = useCartStore((state) => state.getTotalItems());

    const isActive = (path: string) => {
        if (path === '/') {
          return pathname === '/';
        }
        return pathname?.startsWith(path);
    };

    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="md:text-2xl text-base font-bold text-blue-600"
                    >
                        Mini-Commerce
                    </Link>

                    <nav className="flex items-center md:space-x-6 space-x-4 md:text-base text-sm">
                        <Link 
                            href="/" 
                            className={`transition-colors ${
                                isActive('/') 
                                ? 'text-blue-600 font-medium' 
                                : 'text-gray-700 hover:text-blue-600'
                            }`}
                        >
                            Products
                        </Link>

                        <Link href="/cart" className="relative">
                            <div className={`flex items-center space-x-1 transition-colors ${
                                isActive('/cart') 
                                ? 'text-blue-600 font-medium' 
                                : 'text-gray-700 hover:text-blue-600'
                            }`}>
                                <ShoppingCartIcon className="md:h-6 md:w-6 h-4 w-4" />
                                <span>Cart</span>
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
