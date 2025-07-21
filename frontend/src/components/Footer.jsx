import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-950 to-blue-900 text-white pt-16 pb-10 px-6 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 opacity-10 rounded-full blur-3xl -z-10" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/SKlogo.png"
              alt="S.K Reality Logo"
              className="h-12 w-auto object-contain"
            />
            <h3 className="text-3xl font-bold text-yellow-400">S.K Reality</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Trusted partner in real estate development. We blend design,
            innovation, and top-tier execution for modern living and spaces that
            inspire.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { label: "Home", href: "/" },
              { label: "Team", href: "/teams" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Projects", href: "/projects" },
              { label: "Contact", href: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Map */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-yellow-400" />
              +91 08530 251422
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-yellow-400" />
              contact@skreality.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-yellow-400" />
              Harnam Residency, Plot No 16, Lonavala, MH
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-5 mt-6">
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 hover:scale-110 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Embedded Map */}
          <div className="mt-6 rounded-lg overflow-hidden border border-yellow-400">
            <iframe
              title="S.K Reality Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.1803967473875!2d73.4139355!3d18.7454775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8018ae7d5273f%3A0xd1bf239948ac96de!2sS.K%20Reality!5e0!3m2!1sen!2sin!4v1753114357650!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">S.K Reality</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
