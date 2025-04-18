import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function Loading({ isLoading }) {
  const controls = useAnimation()
  const barControls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      // Start the bar animation immediately
      barControls.start({
        scaleX: 1,
      }, {
        duration: 1.2,
        ease: "easeInOut"
      });

      // Text animation
      await controls.start({
        opacity: 1,
        filter: 'blur(0px)',
      }, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1]
      });

      barControls.start({
        opacity: 0,
      }, {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      });

      // Final fade out with slight blur
      await controls.start({
        opacity: 0,
        filter: 'blur(0px)'
      }, { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      });
    };
    sequence();
  }, [controls, barControls]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-8"
    >
      <div>
        <motion.h1
          initial={{
            opacity: 0,
            filter: 'blur(10px)'
          }}
          animate={controls}
          className="text-6xl text-center font-medium tracking-tightest"
        >
          PORTFOLIO OF SAHIL SOLOMON.
        </motion.h1>

        <motion.div
          className="h-0.5 w-full mt-4 bg-black/80"
          initial={{ scaleX: 0, width: "100%" }}
          animate={barControls}
          style={{ 
            originX: 0.5,
          }}
        />
      </div>
    </motion.div>
  );
}