// components/ClientMapWrapper.tsx
'use client'

import dynamic from 'next/dynamic'

// Dynamically load the map with SSR disabled
const DynamicMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => <div className="text-gray-500 text-sm">Loading map...</div>,
})

export default function ClientMapWrapper() {
  return <DynamicMap />
}
