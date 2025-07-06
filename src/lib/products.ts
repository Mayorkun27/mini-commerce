import { Product } from '@/types'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchProducts(): Promise<Product[]> {
  await delay(1000)
  
  try {
    const { products } = await import('@/data/products.json')
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(products))
    }
    
    return products
  } catch (error) {
    throw new Error(`Failed to fetch products: ${(error as Error).message}`);
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const products = await fetchProducts()
  const product = products.find(product => product.slug === slug)
  
  return product || null
}
