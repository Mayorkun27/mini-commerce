import { Product } from '@/types'

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchProducts(): Promise<Product[]> {
  // Simulate network delay
  await delay(1000)
  
  try {
    // In a real app, this would be an API call
    // For now, we'll import the JSON data
    const { products } = await import('@/data/products.json')
    
    // Seed to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(products))
    }
    
    return products
  } catch (error) {
    throw new Error('Failed to fetch products')
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const products = await fetchProducts()
  const product = products.find(product => product.slug === slug)
  
  return product || null
}