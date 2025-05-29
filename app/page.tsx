// app/page.tsx
'use client'
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
    <>
      <div className="mb-8 bg-gradient-to-r from-pink-200 via-sky-100 to-indigo-100 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-extrabold text-blue-700 mb-2">Welcome to AlephCode Academy!</h2>
              <p className="text-lg md:text-xl text-blue-900 mb-4">
                Where kids become confident coders and parents stay connected. <span className="text-pink-600 font-bold">Fun, safe, and effective</span> coding lessons for ages 7–14.
              </p>
              <ul className="list-disc pl-6 text-blue-800 space-y-1 text-base">
                <li>Live 1:1 and group tutoring</li>
                <li>Interactive coding missions and games</li>
                <li>Progress tracking for parents</li>
                <li>Friendly, expert instructors</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <span className="text-[5rem] md:text-[7rem] drop-shadow">🚀</span>
            </div>
          </div>
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
    </>
  )
}
