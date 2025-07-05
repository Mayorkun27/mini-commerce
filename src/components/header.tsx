'use client'

import Link from 'next/link'
import { useCartStore } from '@/app/store/cart-store'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export function Header() {
    const totalItems = useCartStore((state) => state.getTotalItems())
    
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        Mini-Commerce
                    </Link>
                    
                    <nav className="flex items-center space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-blue-600">
                            Products
                        </Link>
                        
                        <Link href="/cart" className="relative">
                            <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                                <ShoppingCartIcon className="h-6 w-6" />
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
    )
}