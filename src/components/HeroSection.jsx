import { motion } from "motion/react"

function HeroSection({name}) {
    return (
        <section className="py-36 font-semibold text-center min-h-dvh">
            <motion.p className="text-xl mb-4 tracking-tighter">Hello</motion.p>
            <motion.p

                className="text-5xl/10 px-24 tracking-tightest"
            >
                I’m {name}, a Python developer with a creative mind.
            </motion.p>
        </section>
    )
}

export default HeroSection