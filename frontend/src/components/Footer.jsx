import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold mb-3">BuildStrong</h3>
          <p className="text-sm">
            Your trusted construction partner delivering excellence across residential and commercial projects.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/teams" className="hover:text-yellow-400">Team</a></li>
            <li><a href="/abput" className="hover:text-yellow-400">About</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/projects" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} /> contact@buildstrong.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} /> Lonavala, Maharashtra
            </li>
          </ul>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400"><Facebook size={18} /></a>
            <a href="#" className="hover:text-yellow-400"><Instagram size={18} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-8">
        © {new Date().getFullYear()} BuildStrong Constructions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
