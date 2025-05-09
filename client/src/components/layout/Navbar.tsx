import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [whyUsDropdownOpen, setWhyUsDropdownOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  // Add a state to control mega menu visibility
const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdowns = (e: MouseEvent) => {
    if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
      setServicesDropdownOpen(false);
    }
    if (whyUsRef.current && !whyUsRef.current.contains(e.target as Node)) {
      setWhyUsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdowns);
    return () => {
      document.removeEventListener('mousedown', closeDropdowns);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="bg-blue-50 w-full">
          <div className="flex items-center justify-end space-x-3 h-12">
            <FaLocationDot className="text-primary"/>
            <p className="text-gray-600 pr-8">123 Main St, Anytown, USA</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 px-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center">
              <img src="/src/assets/logo.svg" alt="ETW Care Services" className="h-10 md:hidden " />
              <span className="ml-2 text-lg font-bold text-primary hidden md:inline">ETW Care Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Care Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button 
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setWhyUsDropdownOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-primary font-medium transition duration-300 focus:outline-none"
              >
                Care Services
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <DropdownLink to="/services/senior-care">Senior Care</DropdownLink>
                    <DropdownLink to="/services/dementia-care">Dementia Care</DropdownLink>
                    <DropdownLink to="/services/respite-care">Respite Care</DropdownLink>
                    <DropdownLink to="/services/companion-care">Companion Care</DropdownLink>
                    <DropdownLink to="/services/personal-care">Personal Care</DropdownLink>
                    <DropdownLink to="/services">All Services</DropdownLink>
                  </div>
                </div>
              )}
            </div>
            
            {/* Why Us Dropdown */}
            <div ref={whyUsRef} className="relative">
              <button 
                onClick={() => {
                  setWhyUsDropdownOpen(!whyUsDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-primary font-medium transition duration-300 focus:outline-none"
              >
                Why Us
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${whyUsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {whyUsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <DropdownLink to="/about">About Us</DropdownLink>
                    <DropdownLink to="/about/team">Our Team</DropdownLink>
                    <DropdownLink to="/about/values">Our Values</DropdownLink>
                    <DropdownLink to="/testimonials">Testimonials</DropdownLink>
                    <DropdownLink to="/faq">FAQs</DropdownLink>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/careers">Careers</NavLink>
          </nav>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/pricing" 
              className="bg-primary hover:bg-primary/80 text-white font-medium px-4 py-2 rounded uppercase tracking-wide text-sm transition duration-300"
            >
              PRICING
            </Link>
            
            <a 
              href="tel:+17045952220" 
              className="flex items-center text-gray-700 hover:text-primary transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">(704) 595-2220</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            className="flex items-center text-gray-700 hover:text-primary font-medium transition duration-300 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              className={`ml-1 h-4 w-4 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

         {/* When mega menu is opened */}
        {megaMenuOpen && (
          <div className="absolute left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
            <div className="container mx-auto py-8 px-4">
              <div className="grid grid-cols-3 gap-8">
                {/* Care Services Column */}
                <div>
                  <h3 className="font-bold text-lg mb-4">Care Services</h3>
                  <ul className="space-y-2">
                    <li><Link to="/services/senior-care" className="text-gray-700 hover:text-primary">Senior Care</Link></li>
                    <li><Link to="/services/personal-care" className="text-gray-700 hover:text-primary">Personal Care</Link></li>
                    <li><Link to="/services/companion-care" className="text-gray-700 hover:text-primary">Companion Care</Link></li>
                    <li><Link to="/services/dementia-care" className="text-gray-700 hover:text-primary">Dementia Care</Link></li>
                    <li><Link to="/services/respite-care" className="text-gray-700 hover:text-primary">Respite Care</Link></li>
                    <li><Link to="/services/veteran-care" className="text-gray-700 hover:text-primary">Veteran Care</Link></li>
                    <li><Link to="/services/specialty-care" className="text-gray-700 hover:text-primary">Specialty Care</Link></li>
                  </ul>
                </div>
                
                {/* Why Us Column */}
                <div>
                  <h3 className="font-bold text-lg mb-4">Why Us</h3>
                  <ul className="space-y-2">
                    <li><Link to="/about" className="text-gray-700 hover:text-primary">About Us</Link></li>
                    <li><Link to="/culture" className="text-gray-700 hover:text-primary">Culture of Care</Link></li>
                    <li><Link to="/reviews" className="text-gray-700 hover:text-primary">Reviews</Link></li>
                    <li><Link to="/news" className="text-gray-700 hover:text-primary">News</Link></li>
                  </ul>
                </div>
                
                {/* Home Care Resources Column */}
                <div>
                  <h3 className="font-bold text-lg mb-4">Home Care Resources</h3>
                  <ul className="space-y-2">
                    <li><Link to="/blog" className="text-gray-700 hover:text-primary">Blog</Link></li>
                    <li><Link to="/covid" className="text-gray-700 hover:text-primary">COVID-19 Information</Link></li>
                    <li><Link to="/newsletter" className="text-gray-700 hover:text-primary">Subscribe to Newsletter</Link></li>
                  </ul>
                  
                  {/* Search Box */}
                  <div className="mt-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search this website" 
                        className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button className="absolute right-3 top-2.5">
                        <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Contact Us</h4>
                    <a href="tel:+17045952220" className="flex items-center text-primary">
                      <span className="font-medium">(704) 595-2220</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-center space-x-6 mt-8">
                <Link 
                  to="/pricing" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded uppercase tracking-wide transition duration-300"
                >
                  REQUEST PRICING
                </Link>
                <Link 
                  to="/careers" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded uppercase tracking-wide transition duration-300"
                >
                  CAREGIVER CAREERS
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-4 lg:hidden px-8"
          >
            <div className="flex flex-col space-y-1">
              {/* Mobile Care Services Submenu */}
              <MobileDropdown title="Care Services">
                <MobileNavLink to="/services/senior-care" onClick={toggleMenu}>Senior Care</MobileNavLink>
                <MobileNavLink to="/services/dementia-care" onClick={toggleMenu}>Dementia Care</MobileNavLink>
                <MobileNavLink to="/services/respite-care" onClick={toggleMenu}>Respite Care</MobileNavLink>
                <MobileNavLink to="/services/companion-care" onClick={toggleMenu}>Companion Care</MobileNavLink>
                <MobileNavLink to="/services/personal-care" onClick={toggleMenu}>Personal Care</MobileNavLink>
                <MobileNavLink to="/services" onClick={toggleMenu}>All Services</MobileNavLink>
              </MobileDropdown>

              {/* Mobile Why Us Submenu */}
              <MobileDropdown title="Why Us">
                <MobileNavLink to="/about" onClick={toggleMenu}>About Us</MobileNavLink>
                <MobileNavLink to="/about/team" onClick={toggleMenu}>Our Team</MobileNavLink>
                <MobileNavLink to="/about/values" onClick={toggleMenu}>Our Values</MobileNavLink>
                <MobileNavLink to="/testimonials" onClick={toggleMenu}>Testimonials</MobileNavLink>
                <MobileNavLink to="/faq" onClick={toggleMenu}>FAQs</MobileNavLink>
              </MobileDropdown>

              <MobileNavLink to="/careers" onClick={toggleMenu}>Careers</MobileNavLink>
              <MobileNavLink to="/pricing" onClick={toggleMenu}>Pricing</MobileNavLink>
              <div className="pt-2 border-t border-gray-200 mt-2">
                <a 
                  href="tel:+17045952220" 
                  className="flex items-center text-gray-700 hover:text-primary transition duration-300 py-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">(704) 595-2220</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

// Mobile Dropdown Component
const MobileDropdown = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-100 py-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-gray-700 hover:text-primary font-medium py-1 transition duration-300 focus:outline-none"
      >
        <span>{title}</span>
        <svg 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4 mt-2 space-y-1 flex flex-col">
          {children}
        </div>
      )}
    </div>
  );
};

// Desktop NavLink Component
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-gray-700 hover:text-primary font-medium transition duration-300"
    >
      {children}
    </Link>
  );
};

// Dropdown Link Component
const DropdownLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition duration-300"
    >
      {children}
    </Link>
  );
};

// Mobile NavLink Component
const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <Link 
      to={to} 
      className="text-gray-700 hover:text-primary font-medium py-2 transition duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
