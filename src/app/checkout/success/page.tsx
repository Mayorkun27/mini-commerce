'use client'

import { Suspense } from 'react'
import CheckoutSuccessClient from './CheckoutSuccessClient'

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <CheckoutSuccessClient />
    </Suspense>
  )
}
