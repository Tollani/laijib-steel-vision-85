
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="bg-steel text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="white" />
            <p className="text-gray-300 mt-4">
              Building Abuja's future with precision-engineered steel structures and innovative designs since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-grassgreen transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-grassgreen transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-grassgreen transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-grassgreen transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-grassgreen transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-grassgreen transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-grassgreen transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-grassgreen transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-grassgreen transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-grassgreen transition-colors">Steel Fabrication</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-grassgreen transition-colors">Structural Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-grassgreen transition-colors">Installation Services</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-grassgreen transition-colors">Custom Steel Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-grassgreen transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-grassgreen flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">123 Industrial Zone, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-grassgreen flex-shrink-0" size={18} />
                <a href="tel:+2348012345678" className="text-gray-300 hover:text-grassgreen transition-colors">+234 801 234 5678</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-grassgreen flex-shrink-0" size={18} />
                <a href="mailto:info@laijib.com" className="text-gray-300 hover:text-grassgreen transition-colors">info@laijib.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2023 LAIJIB NIG. LTD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-grassgreen transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-grassgreen transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
