import { motion } from "motion/react"

function HeroSection({name}) {
    return (
        <section className="py-36 font-semibold text-center min-h-dvh">
            <motion.p
                initial={{
                    opacity: 0,
                    filter: 'blur(10px)',
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                }}
                transition={{ delay: 2, duration: 1, ease: ['easeInOut'] }}
                className="text-xl mb-4 tracking-tighter"
            >
                Hello
            </motion.p>
            <motion.p
                initial={{
                    opacity: 0,
                    filter: 'blur(10px)',
                    y: 75,
                  }}
                animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                }}
                transition={{ delay: 2.2, duration: 1, ease: ['easeInOut'] }}
                className="text-5xl/10 px-24 tracking-tightest"
            >
                I’m {name}, a Python developer with a <span className="italic">creative</span> mind.
            </motion.p>
        </section>
    )
}

export default HeroSection