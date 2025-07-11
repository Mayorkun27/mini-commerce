'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchProductBySlug } from '@/lib/products'
import { useCartStore } from '@/app/store/cart-store'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface ProductDetailClientProps {
  params: { slug: string }
}

export default function ProductDetailClient({ params }: ProductDetailClientProps) {
  const router = useRouter()
  const addToCart = useCartStore((state) => state.addToCart)
  
  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', params.slug],
    queryFn: () => fetchProductBySlug(params.slug),
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    )
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-black text-white px-6 py-3 cursor-pointer"
          >
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-square relative bg-white overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="bg-white shadow-md p-6">
            <div className="mb-4">
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <div className="text-3xl font-bold text-blue-600 mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 px-6 transition-colors font-medium text-lg cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
