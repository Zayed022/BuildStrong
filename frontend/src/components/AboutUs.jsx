import React from "react";
import {
  Landmark,
  Lightbulb,
  ShieldCheck,
  Recycle,
  Building2,
} from "lucide-react";

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

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-950 py-24 px-6 md:px-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Who We Are
          </span>
          <h2 className="text-4xl font-extrabold text-blue-700 dark:text-yellow-400 mt-2 mb-4">
            About S.K Reality
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-base">
            S.K Reality is a next-generation construction firm redefining modern
            infrastructure with bold designs, sustainable practices, and
            cutting-edge technology. Our foundation? Trust, innovation, and a
            passion for excellence.
          </p>
        </div>

        {/* Core Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm rounded-2xl p-6 overflow-hidden transition hover:shadow-xl hover:border-blue-500 dark:hover:border-yellow-400"
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
            </div>
          ))}
        </div>

        {/* Mission + Values */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img
              src="../../public/SK.png" // Replace with actual image path
              alt="Construction Team"
              className="rounded-xl shadow-md object-cover w-full h-[350px] border border-gray-200 dark:border-gray-800"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-sm text-gray-700 dark:text-gray-200 shadow">
              <Landmark className="inline-block w-4 h-4 mr-1" />
              10+ Years of Global Excellence
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We don’t just build. We engineer experiences. From luxury
              residences to public infrastructure, our mission is to craft
              structures that endure — both physically and emotionally. Our
              legacy is built on innovation, trust, and unwavering quality.
            </p>
            <ul className="grid gap-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Client-centric planning & transparent communication</li>
              <li>End-to-end delivery with zero cost overruns</li>
              <li>Certified green practices & smart material sourcing</li>
              <li>Real-time site tracking & digital dashboards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
