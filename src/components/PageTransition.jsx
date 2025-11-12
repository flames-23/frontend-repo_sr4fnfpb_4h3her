import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.35, ease: 'easeInOut' } },
}

export default function PageTransition({ children, className = '' }) {
  return (
    <motion.main
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className={className}
    >
      {children}
    </motion.main>
  )
}
