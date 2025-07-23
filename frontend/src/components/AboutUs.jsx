import React, { useEffect } from "react";
import {
  Landmark,
  Lightbulb,
  ShieldCheck,
  Recycle,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <Lightbulb className="text-indigo-500 w-6 h-6" />,
    title: "Design Philosophy",
    text: `We create visually stunning yet deeply functional spaces by blending sustainability, modern design trends, and your personal goals into every project.`,
  },
  {
    icon: <ShieldCheck className="text-blue-500 w-6 h-6" />,
    title: "Execution Excellence",
    text: `From blueprint to brickwork, our process is deeply collaborative, precise, and geared toward delivering on-time results with zero compromise.`,
  },
  {
    icon: <Recycle className="text-green-500 w-6 h-6" />,
    title: "Sustainable Impact",
    text: `Eco-conscious materials, energy-efficient builds, and zero-waste initiatives make sustainability not an afterthought, but our foundation.`,
  },
  {
    icon: <Building2 className="text-yellow-500 w-6 h-6" />,
    title: "Versatile Expertise",
    text: `Residential. Commercial. Civic. From luxury villas to urban towers, we build across verticals with an unmatched passion for quality.`,
  },
];

const stats = [
  { label: "Projects Delivered", value: 120 },
  { label: "Happy Clients", value: 80 },
  { label: "Cities Served", value: 10 },
  { label: "Green Certifications", value: 15 },
];

const About = () => {
  useEffect(() => {
    // Tawk.to script injection (if needed)
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/687e6adc0c2df81912a84c2c/1j0mt2rkg";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-950 py-24 px-6 md:px-12 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Who We Are
          </span>
          <h2 className="text-4xl font-extrabold text-blue-700 dark:text-yellow-400 mt-2 mb-4">
            About S.K Reality
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-base">
            S.K Reality is redefining modern infrastructure with bold design,
            sustainable innovation, and future-ready technology. We don’t just
            construct — we craft legacies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm rounded-2xl p-6 overflow-hidden transition hover:shadow-xl hover:border-blue-500 dark:hover:border-yellow-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {card.text}
              </p>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-400 dark:to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/SK.png"
              alt="Construction Team"
              className="rounded-xl shadow-md object-cover w-full h-[350px] border border-gray-200 dark:border-gray-800"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-sm text-gray-700 dark:text-gray-200 shadow">
              <Landmark className="inline-block w-4 h-4 mr-1" />
              10+ Years of Global Excellence
            </div>
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We don’t just build. We engineer experiences. From luxury
              residences to public infrastructure, our mission is to craft
              structures that endure — both physically and emotionally.
            </p>
            <ul className="grid gap-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Client-centric planning & transparent communication</li>
              <li>End-to-end delivery with zero cost overruns</li>
              <li>Certified green practices & smart material sourcing</li>
              <li>Real-time site tracking & digital dashboards</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} className="text-blue-700 dark:text-yellow-400">
              <h4 className="text-4xl font-bold">{stat.value}+</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos */}
        <div className="mt-20">
          <h4 className="text-xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-6">
            Trusted by Industry Leaders
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
            {["/Regal.png", "/Gigani.jpeg", "/Tata.png"].map(
              (src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Partner Logo"
                  className="h-10 grayscale hover:grayscale-0 transition"
                />
              )
            )}
          </div>
        </div>

        {/* Founder */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            A Word from Our Founder
          </h4>
          <p className="text-gray-600 dark:text-gray-400 italic">
            “At S.K Reality, we don't chase trends — we set them. Every brick we
            lay is a promise: of innovation, sustainability, and lifelong
            value.”
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            – Shoyeb Khan, Founder & CEO
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-20">
          <h4 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            Technology That Powers Us
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "AI-Driven Design Simulation",
              "Real-Time Site Monitoring",
              "Smart Procurement Systems",
              "Digital Twin Architecture",
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-sm text-gray-700 dark:text-gray-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
