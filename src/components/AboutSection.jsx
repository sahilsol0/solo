import { motion } from "framer-motion"
import faceSticker from "../assets/images/face_sticker.webp"

function AboutSection({animation}) {
    return (
		<section className="bg-lime-bg text-lime-fg py-24 flex flex-col items-center gap-4">
			<motion.h1
				{...animation}
				transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
				className="font-black text-4xl tracking-tighter"
			>
				About me.
			</motion.h1>

			<motion.img
				{...animation}
				transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
				src={faceSticker}
				alt="face of Sahil in a sticker style."
				className="w-36 h-36"
			/>

			<motion.h2
				{...animation}
				transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
				className="text-2xl font-normal tracking-tight text-center px-17 md:px-96"
			>
				I am a Computer Science (B.Tech.) graduate specializing in full-stack Python/Django development, handling both front-end and back-end aspects of web creation. <br/><br />Graduated in 2025, I've utilized and polished my skills through projects and internships.
			</motion.h2>
		</section>
    )
}

export default AboutSection