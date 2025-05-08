import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Main Pages
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Testimonials from '../pages/Testimonials';
import FAQ from '../pages/FAQ';
import Pricing from '../pages/Pricing';
import Careers from '../pages/Careers';

// Service Pages
import SeniorCare from '../pages/services/SeniorCare';
import DementiaCare from '../pages/services/DementiaCare';
import RespiteCare from '../pages/services/RespiteCare';
import CompanionCare from '../pages/services/CompanionCare';
import PersonalCare from '../pages/services/PersonalCare';
import VeteranCare from '../pages/services/VeteranCare';

// About Pages
import Team from '../pages/about/Team';
import Values from '../pages/about/Values';

/**
 * AppRouter Component
 * 
 * Central routing configuration for the application.
 * All route definitions are managed here for better organization.
 */
export default function AppRouter() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/careers" element={<Careers />} />
        
        {/* Service Specific Routes */}
        <Route path="/services/senior-care" element={<SeniorCare />} />
        <Route path="/services/dementia-care" element={<DementiaCare />} />
        <Route path="/services/respite-care" element={<RespiteCare />} />
        <Route path="/services/companion-care" element={<CompanionCare />} />
        <Route path="/services/personal-care" element={<PersonalCare />} />
        <Route path="/services/veteran-care" element={<VeteranCare />} />
        
        {/* About Section Routes */}
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/values" element={<Values />} />
      </Routes>
    </AnimatePresence>
  );
}
