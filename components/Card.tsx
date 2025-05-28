// components/Card.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function Card({
  title,
  description,
  icon,
  href
}: {
  title: string
  description: string
  icon: ReactNode
  href: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded shadow p-4 cursor-pointer transition"
    >
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        <span>{icon}</span>
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
      <Link href={href} className="inline-block mt-2 text-blue-600 hover:underline">
        Learn More
      </Link>
    </motion.div>
    
  )
}
