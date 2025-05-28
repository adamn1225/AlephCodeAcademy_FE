// app/page.tsx
'use client'

import HomeLayout from '@/components/layouts/HomeLayout'
import Card from '@/components/Card'
import { motion } from 'framer-motion'

export default function HomePage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  }

  const cards = [
    {
      title: '🚀 Try a Sample Mission',
      description: 'Jump into a Blockly mission and see how it works!',
      href: '/dashboard/child',
    },
    {
      title: '👨‍👩‍👧 Parent Tools',
      description: 'Track your child’s XP, progress, and badges.',
      href: '/dashboard/parent',
    },
    {
      title: '🧑‍🏫 Teacher Panel',
      description: 'Assign missions and monitor student progress.',
      href: '/dashboard/teacher',
    },
  ]

  return (
    <HomeLayout>
      <h2 className="text-2xl font-bold mb-4">Welcome to AlephCode Academy</h2>
      <p className="mb-6 text-gray-700 max-w-2xl">
        Teach, learn, and grow with fun code missions, progress tracking, and interactive assignments.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {cards.map((card, i) => (
          <motion.div key={card.title} custom={i} variants={cardVariants}>
            <Card {...card} icon={card.title.charAt(0)} />
          </motion.div>
        ))}
      </motion.div>
    </HomeLayout>
  )
}
