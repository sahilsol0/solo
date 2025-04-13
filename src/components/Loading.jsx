import { motion } from 'motion/react';

export default function Loading({ isLoading }) {

  return (
    <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
    </motion.div>
  );
}