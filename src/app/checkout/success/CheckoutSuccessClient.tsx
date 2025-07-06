'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CheckoutSuccessClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderId, setOrderId] = useState<string | null>(null)

  useEffect(() => {
    const orderIdParam = searchParams.get('orderId')
    if (!orderIdParam) {
      router.push('/')
    } else {
      setOrderId(orderIdParam)
    }
  }, [searchParams, router])

  if (!orderId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* The full success UI here, like you already had */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md md:p-8 p-4 text-center">
            <div className="mx-auto mb-6">
              <CheckCircleIcon className="h-24 w-24 text-green-500 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 md:mb-4 mb-2">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 mb-6 md:text-base text-sm">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h2>
              <div className="space-y-2 md:text-base text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-mono text-gray-900">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date:</span>
                  <span className="text-gray-900">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-medium">Confirmed</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="bg-black text-white px-6 py-3 font-medium">
                Continue Shopping
              </Link>
              <button onClick={() => window.print()} className="bg-gray-100 text-gray-700 px-6 py-3 font-medium">
                Print Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
        }
