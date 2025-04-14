import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  return (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/projects" element={<Projects />} />
	</Routes>
  );
}

export default App