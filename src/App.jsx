import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// componenets
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Quote from './pages/Quote/Quote';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact';
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<SuccessMessage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
