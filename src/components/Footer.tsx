
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/37cd7e9c-1d1b-4835-a858-12048792c8de.png" 
                alt="Genetech Logo" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg">Genetech</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering businesses with innovative IT solutions and cutting-edge technology services to drive growth and success.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-light-blue cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-light-blue cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-light-blue cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-light-blue cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-light-blue transition-colors">Custom Software Development</Link></li>
              <li><Link to="/services" className="hover:text-light-blue transition-colors">Web & Mobile Applications</Link></li>
              <li><Link to="/services" className="hover:text-light-blue transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="hover:text-light-blue transition-colors">Digital Transformation</Link></li>
              <li><Link to="/services" className="hover:text-light-blue transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-light-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-light-blue transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-light-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-light-blue transition-colors">Contact</Link></li>
              <li><Link to="/services" className="hover:text-light-blue transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-light-blue" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-light-blue" />
                <span>info@genetechtech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-light-blue" />
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Genetech Technologies. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
