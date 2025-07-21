import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/AboutUs";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import QA from "./components/QA";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import TechnicalExpertise from "./components/TechnicalExpertise";
import WeOffer from "./components/WeOffer";
import TeamSection from "./components/TeamSection";
import AboutPage from "./pages/About";
import TeamPage from "./pages/Team";
import StickyEnquireButton from "./components/StickyEnquireButton";

function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/services" element={<ServicesPage />} />
       <Route path="/projects" element={<ProjectsPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/teams" element={<TeamPage />} />
       <Route path="/about" element={<AboutPage />} />
      
    </Routes>
     <StickyEnquireButton/>
      
    
    </>
    
  );
}

export default App;
