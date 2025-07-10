import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400 opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 opacity-10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Company Info with Logo */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <img
              src="/SKlogo.png"
              alt="S.K Reality Logo"
              className="h-10 w-18 object-contain"
            />
            <h3 className="text-3xl font-bold text-yellow-400">S.K Reality</h3>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            Your trusted partner for high-quality construction solutions,
            combining design innovation with operational excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/teams" className="hover:text-yellow-400 transition">Team</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="/projects" className="hover:text-yellow-400 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contact Info</h4>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} className="text-yellow-400" /> +91 11111 11111
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} className="text-yellow-400" /> contact@xyz.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={18} className="text-yellow-400" /> XYZ, Maharashtra
            </li>
          </ul>

          <div className="flex justify-center md:justify-start gap-5 mt-6">
            <a href="#" className="hover:scale-110 hover:text-yellow-400 transition transform">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:scale-110 hover:text-yellow-400 transition transform">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">S.K Reality</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
