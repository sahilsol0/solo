import AboutSection from "./components/AboutSection.jsx"
import SkillSection from "./components/SkillSection.jsx"
import ResumeSection from "./components/ResumeSection.jsx"
import ContactSection from "./components/ContactSection.jsx"

function App() {

	return (
		<>
			<header className="text-2xl/5 px-10 py-10 tracking-tighter font-semibold ">
				Sahil<br />Solomon.
			</header>

			<section className="py-28 font-semibold text-center min-h-dvh">
				<p className="text-xl mb-4 tracking-tighter">Hello</p>
				<p className="text-5xl/10 px-24 tracking-tightest">
					I’m Sahil, a Python developer with a creative mind.
				</p>
			</section>

			<AboutSection />
			<SkillSection />

			<section className="bg-black text-white text-center py-4">
				<h1 className="text-3xl/6 font-normal tracking-tighter">SEE MY PROJECTS</h1>
				<p className="text-md/2 font-thin tracking-normal">( Click to view )</p>
			</section>

			<ResumeSection />
			<ContactSection />
		</>
	)
}

export default App
