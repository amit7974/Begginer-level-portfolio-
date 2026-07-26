import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-darkbg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              className="w-16 h-16 rounded-2xl bg-grad-primary bg-[length:200%_200%] animate-gradient-x flex items-center justify-center font-display font-extrabold text-white text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AK
            </motion.div>
            <p className="text-slate-300 font-mono text-sm tracking-widest">LOADING PORTFOLIO…</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
