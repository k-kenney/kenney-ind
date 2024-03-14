

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// componenets
import Home from './pages/Home/Index';
import About from './pages/About/Index';
import Services from './pages/Services/Index';
import Quote from './pages/Quote/Index';
import Careers from './pages/Careers/Index';
import Contact from './pages/Contact/Index';
import Openings from './pages/Careers/Openings';
import SuccessMessage from './components/SuccessMessage';


function App() {

  const appStyle = {
    backgroundColor: '#2B3452', // Set your desired background color here
    minHeight: '100vh', // Ensures the background covers the entire viewport height
  };

  return (
    <div style={appStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/openings/:id" element={<Openings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<SuccessMessage />} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
