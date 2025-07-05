'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderId, setOrderId] = useState<string | null>(null)

  useEffect(() => {
    const orderIdParam = searchParams.get('orderId')
    if (!orderIdParam) {
      // Redirect to home if no order ID
      router.push('/')
      return
    }
    setOrderId(orderIdParam)
  }, [searchParams, router])

  if (!orderId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            {/* Success Icon */}
            <div className="mx-auto mb-6">
              <CheckCircleIcon className="h-24 w-24 text-green-500 mx-auto" />
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been successfully placed.
            </p>

            {/* Order Details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Order Details
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-mono text-gray-900">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date:</span>
                  <span className="text-gray-900">
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-medium">Confirmed</span>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="text-left bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's Next?
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>You will receive an email confirmation shortly</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Your order will be processed within 1-2 business days</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>You'll receive tracking information once your order ships</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Estimated delivery: 3-5 business days</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => window.print()}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Print Receipt
              </button>
            </div>

            {/* Contact Support */}
            <div className="mt-8 pt-6 border-t">
              <p className="text-sm text-gray-600">
                Need help? Contact our support team at{' '}
                <a href="mailto:support@mini-commerce.com" className="text-blue-600 hover:underline">
                  support@mini-commerce.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// 'use client'

// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import { CheckCircleIcon } from '@heroicons/react/24/solid'

// export default function CheckoutSuccessPage() {
//   const searchParams = useSearchParams()
//   const orderId = searchParams.get('orderId')

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="max-w-md w-full">
//         <div className="bg-white rounded-lg shadow-md p-8 text-center">
//           <div className="mb-6">
//             <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
//             <h1 className="text-2xl font-bold text-gray-900 mb-2">
//               Order Confirmed!
//             </h1>
//             <p className="text-gray-600">
//               Thank you for your purchase. Your order has been successfully placed.
//             </p>
//           </div>

//           {orderId && (
//             <div className="bg-gray-50 rounded-lg p-4 mb-6">
//               <p className="text-sm text-gray-600 mb-1">Order ID</p>
//               <p className="font-mono text-lg font-semibold text-gray-900">
//                 {orderId}
//               </p>
//             </div>
//           )}

//           <div className="space-y-3">
//             <Link
//               href="/"
//               className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors block"
//             >
//               Continue Shopping
//             </Link>
//             <p className="text-sm text-gray-500">
//               You'll receive an email confirmation shortly.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }