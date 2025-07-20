// components/MotionFadeIn.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function MotionFadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      {children}
    </motion.div>
  )
}
