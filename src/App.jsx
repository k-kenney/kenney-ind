import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// componenets
import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Quote from './pages/Quote/Quote';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
