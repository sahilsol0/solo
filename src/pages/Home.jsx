import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Link } from 'react-router'
import Loading from "../components/Loading.jsx"
import HeroSection from "../components/HeroSection.jsx"
import AboutSection from "../components/AboutSection.jsx"
import SkillSection from "../components/SkillSection.jsx"
import ResumeSection from "../components/ResumeSection.jsx"
import ContactSection from "../components/ContactSection.jsx"

function Home() {

	const firstName = "Sahil"
	const lastName = "Solomon"

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

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, { stiffness: 50 })
	const headerY = useTransform(scrollYProgress, [0, .1], [0, -500]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<AnimatePresence>
				{isLoading && (<Loading />)}
			</AnimatePresence>
			<motion.header
				{...fadeInUp}
				style={{ y: headerY,  }}
				className="sticky text-2xl/5 px-10 py-10 tracking-tighter font-semibold z-10"
			>
				{firstName}<br />{lastName}.
			</motion.header>
			
			<HeroSection name= {firstName} animation={fadeInUp}/>
			<AboutSection animation={fadeInUp}/>
			<SkillSection animation={fadeInUp}/>

			<section className="bg-black text-white text-center py-8 lg:py-16">
                <Link to='/projects' className="pointer">
                    <h1 className="text-3xl/6 font-normal tracking-tighter">SEE MY PROJECTS</h1>
                    <p className="text-md/2 font-thin tracking-normal">( Click to view )</p>
                </Link>
			</section>

			<ResumeSection />
			<ContactSection animation={fadeInUp}/>
			<footer className="bg-black text-white text-center text-[0.6rem] font-normal py-4">
				<p>Made with ❤️ by {firstName} {lastName}.</p>
				<p>&copy; 2025 {firstName} {lastName}. All rights reserved.</p>
			</footer>

			<motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scaleX,
                    position: "fixed",
                    bottom: -1,
                    left: 0,
                    right: 0,
                    height: 8,
                    originX: 0,
                }}
				className="bg-linear-to-r from-lime-bg to-lime-fg"
			/>
			
		</>
	)
}

export default Home
