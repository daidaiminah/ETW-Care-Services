import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Care Services */}
          <div>
            <h3 className="font-bold mb-4">Care Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/senior-care" className="hover:text-primary transition">Senior Care</Link></li>
              <li><Link to="/services/personal-care" className="hover:text-primary transition">Personal Care</Link></li>
              <li><Link to="/services/companion-care" className="hover:text-primary transition">Companion Care</Link></li>
              <li><Link to="/services/dementia-care" className="hover:text-primary transition">Dementia Care</Link></li>
              <li><Link to="/services/respite-care" className="hover:text-primary transition">Respite Care</Link></li>
              <li><Link to="/services/veteran-care" className="hover:text-primary transition">Veteran Care</Link></li>
              <li><Link to="/services/specialty-care" className="hover:text-primary transition">Specialty Care</Link></li>
            </ul>
          </div>

          {/* Why Us */}
          <div>
            <h3 className="font-bold mb-4">Why Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link to="/culture" className="hover:text-primary transition">Culture of Care</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition">Reviews</Link></li>
              <li><Link to="/news" className="hover:text-primary transition">News</Link></li>
            </ul>
          </div>

          {/* Home Care Resources */}
          <div>
            <h3 className="font-bold mb-4">Home Care Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-primary transition">Blog</Link></li>
            </ul>
            
            <h3 className="font-bold mt-6 mb-4">Address</h3>
            <p>219 Greenwich Road</p>
            <p>Charlotte, NC 28211</p>
            <Link to="/map" className="text-primary hover:underline">View Map</Link>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <p className="mb-2">(704) 595-2220</p>
            <Link to="/contact" className="hover:text-primary transition">Contact Us</Link>
            <p className="mt-4"><Link to="/newsletter" className="hover:text-primary transition">Subscribe to Newsletter</Link></p>
            
            <div className="flex space-x-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-gray-700 hover:text-primary transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-gray-700 hover:text-primary transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-gray-700 hover:text-primary transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="text-gray-700 hover:text-primary transition" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="text-gray-700 hover:text-primary transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer bottom with license info */}
      <div className="bg-primary/15 text-center py-4 px-4">
        <div className="container mx-auto">
          <p className="text-sm mb-2">License: HC4516</p>
          
          <div className="flex flex-wrap justify-center text-xs gap-x-2 mb-2">
            <p>&copy; 2025 ETW Care Services |</p>
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link> |
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link> |
            <Link to="/ca-privacy" className="hover:underline">CA Privacy Policy</Link> |
            <Link to="/accessibility" className="hover:underline">Accessibility Statement</Link> |
            <Link to="/sitemap" className="hover:underline">Sitemap</Link>
          </div>
          
          <div className="text-xs mb-3">
            <p>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy" className="hover:underline">Google Privacy Policy</a> and <a href="https://policies.google.com/terms" className="hover:underline">Terms of Service</a> apply.</p>
          </div>
          
          <p className="text-xs max-w-4xl mx-auto">
            ETW Care Services policy states that services are provided, and referrals and employment actions are made without regard to race, sex, color, national origin, religion, disability status, age, genetics, protected veteran status, sexual orientation, gender identity or expression, or any other characteristic protected by federal, state or local laws.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
