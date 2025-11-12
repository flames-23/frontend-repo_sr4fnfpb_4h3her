import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black">
      <motion.div
        className="relative h-16 w-16"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 rounded-full border-2 border-t-orange-500 border-r-orange-500 border-b-transparent border-l-transparent" />
      </motion.div>
      <motion.p
        className="mt-6 text-white/70 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Loading experience...
      </motion.p>
    </div>
  )
}
