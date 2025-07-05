import { Metadata } from 'next'
import { fetchProductBySlug } from '@/lib/products'
import ProductDetailClient from './client'

interface ProductPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await fetchProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    }
  }

  return {
    title: product.name,
    description: product.description,
    keywords: [product.category, product.name, 'e-commerce', 'shopping'],
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 400,
          height: 400,
          alt: product.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return <ProductDetailClient params={params} />
}