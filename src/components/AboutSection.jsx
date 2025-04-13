import { motion } from "framer-motion"
import faceSticker from "../assets/images/face_sticker.png"

const fadeInUp = {
  initial: {
    opacity: 0,
    filter: 'blur(10px)',
    y: 75,
  },
  whileInView: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
  },
  viewport: { once: true }
}

function AboutSection() {
    return (
      <section className="bg-lime-bg text-lime-fg py-24 flex flex-col items-center gap-4">
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
          className="font-black text-4xl tracking-tighter"
        >
          About me.
        </motion.h1>
        
        <motion.img
          {...fadeInUp}
          transition={{ delay: 0.7, duration: 1, ease: 'easeInOut' }}
          src={faceSticker}
          alt="face of Sahil in a sticker style." 
        />
        
        <motion.h4
          {...fadeInUp}
          transition={{ delay: .9, duration: 1, ease: 'easeInOut' }}
          className="text-2xl font-normal tracking-tight text-center px-17 md:px-96"
        >
          I am a Computer Science (B.Tech.) graduate specializing in full-stack Python/Django development, handling both front-end and back-end aspects of web creation. <br/><br />Graduated in 2025, I've utilized and polished my skills through projects and internships.
        </motion.h4>
      </section>
    )
}

export default AboutSection