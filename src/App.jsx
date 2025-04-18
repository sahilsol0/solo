import { useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Lenis from 'lenis'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'


function App() {
	const lenis = useRef(null);

	useEffect(() => {
		// Initialize Lenis
		lenis.current = new Lenis({ // Cubic easing for smooth stop
			smooth: true,
			smoothTouch: true, // Enable smooth scrolling on touch devices
		});

		const animate = (time) => {
		lenis.current.raf(time);
		requestAnimationFrame(animate);
		};

		requestAnimationFrame(animate);

		// Cleanup on unmount
		return () => {
		lenis.current.destroy();
		};
	}, []);
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/projects" element={<Projects />} />
		</Routes>
	);
}

export default App