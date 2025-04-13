import { motion, useAnimation } from 'motion/react'
import { useEffect } from 'react'

export default function Loading({ isLoading }) {

  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        filter: 'blur(0px)',
      }, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1]
      });

      // // Final fade out with slight blur
      await controls.start({
        opacity: 0,
        filter: 'blur(0px)'
      }, { 
        duration: .5,
        ease: [0.16, 1, 0.3, 1]
      });
    };
    sequence();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity : 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white px-24"
    >
      <motion.h1
        initial={{
          opacity: 0,
          filter: 'blur(10px)'
        }}
        animate={controls}
        className='text-6xl text-center font-medium tracking-tightest'
      >
        PORTFOLIO OF SAHIL SOLOMON.</motion.h1>
    </motion.div>
  );
}