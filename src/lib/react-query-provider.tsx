'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        // How long data stays fresh before refetching
        staleTime: 5 * 60 * 1000, // 5 minutes
        // How long data stays in cache
        gcTime: 10 * 60 * 1000, // 10 minutes
        // Retry failed requests
        retry: 3,
        // Don't refetch on window focus in development
        refetchOnWindowFocus: false,
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}