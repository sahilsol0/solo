import { motion } from "motion/react"
import { Link } from "react-router"

function HeroSection({name, animation}) {
    return (
        <section className="font-semibold text-center h-[80vh] pt-8 pb-20 flex flex-col justify-between">
            <div className="">
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
                    👋Hello
                </motion.p>
                <motion.p
                    {...animation}
                    transition={{ delay: 2.2, duration: 1, ease: ['easeInOut'] }}
                    className="text-5xl/10 lg:text-8xl/25 px-24 lg:px-36 tracking-tightest"
                >
                    I’m {name}, a Python developer with a <span className="italic">creative</span> mind.
                </motion.p>
            </div>
            <div className="flex flex-col items-center gap-2 text-lg">
                <Link to='/projects' className="bg-lime-bg text-lime-fg px-6 rounded-full hover:scale-110 duration-300 delay-100 ease-in-out">Projects</Link>
                <Link to='/contact' className="bg-white text-lime-fg px-6 border border-lime-fg rounded-full hover:scale-110 duration-300 delay-100 ease-in-out">Connect</Link>

                <p className="text-sm font-normal mt-8">or keep scrolling for more...</p>
            </div>
        </section>
    )
}

export default HeroSection