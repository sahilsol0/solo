import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App