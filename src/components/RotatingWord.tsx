import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = [
  'retrieve',
  'fine-tune',
  'orchestrate',
  'deploy',
  'scale',
  'reflect',
  'evaluate',
  'index',
  'quantize',
  'automate',
  'monitor',
]

function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.em
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="inline-block italic text-signal"
        >
          {words[index]}
        </motion.em>
      </AnimatePresence>
    </span>
  )
}

export default RotatingWord
