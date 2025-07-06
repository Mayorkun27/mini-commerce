import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartState, Product } from '@/types'

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addToCart: (product: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find(
          (item) => item.product.id === product.id
        )

        if (existingItem) {
          // If item exists, increase quantity
          set({
            items: currentItems.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })
        } else {
          // If new item, add to cart
          set({
            items: [...currentItems, { product, quantity: 1 }],
          })
        }
      },

      removeFromCart: (productId: string) => {
        set({
          items: get().items.filter((item) => item.product.id !== productId),
        })
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          // If quantity is 0 or negative, remove item
          get().removeFromCart(productId)
          return
        }

        set({
          items: get().items.map((item) =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          ),
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      },
    }),
    {
      name: 'cart-storage', // localStorage key
      partialize: (state) => ({ items: state.items }), // Only persist items
    }
  )
)
