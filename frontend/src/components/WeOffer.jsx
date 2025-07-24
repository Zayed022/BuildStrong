import React from "react";
import { motion } from "framer-motion";

// Reusable gradient heading text
const AnimatedWord = ({ text, gradient }) => (
  <span
    className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-extrabold animate-gradient`}
  >
    {text}
  </span>
);

const services = [
  {
    title: "RCC Construction",
    description:
      "From villa basements to multi-storey commercial buildings, we specialize in RCC works using high-grade materials and modern formwork systems.",
    bullets: [
      "✔ Column-Beam-Slab frameworks",
      "✔ Podium slabs, raft foundations, retaining walls",
      "✔ High-load structures with structural vetting",
    ],
    gradient: "from-gray-700 via-gray-900 to-black",
  },
  {
    title: "Brickwork & Blockwork",
    description:
      "Precise masonry using AAC blocks, red bricks, and fly-ash blocks for strength, insulation, and finish quality.",
    bullets: [
      "✔ Load-bearing & partition walls",
      "✔ Weather protection techniques",
      "✔ Vertical alignment and joint control",
    ],
    gradient: "from-yellow-500 via-orange-600 to-red-500",
  },
  {
    title: "Waterproofing Solutions",
    description:
      "Multi-system waterproofing for podiums, basements, terraces, and tanks with a leak-proof guarantee.",
    bullets: [
      "✔ PU coating, injection grouting, membranes",
      "✔ Site-specific plans with inspection reports",
      "✔ Material warranties included",
    ],
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
  },
  {
    title: "Architectural & Structural Drawings",
    description:
      "End-to-end technical drawings for approval and execution.",
    bullets: [
      "✔ Concept + working plans",
      "✔ RCC drawings with bar bending schedules",
      "✔ Integrated MEP & civil detailing",
    ],
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    title: "Sanctioning & Compliance",
    description:
      "We handle government approvals and compliance with ease.",
    bullets: [
      "✔ Liaisoning with authorities",
      "✔ Fire NOC, drainage & environmental clearances",
      "✔ Legal sync with architects",
    ],
    gradient: "from-green-400 via-teal-500 to-emerald-500",
  },
  {
    title: "Project Management Consultancy (PMC)",
    description:
      "Gain control over quality, budget, and timelines with our PMC expertise.",
    bullets: [
      "✔ Budgeting, contractor & timeline control",
      "✔ Audits, milestone tracking, reporting",
      "✔ Vendor and material reconciliation",
    ],
    gradient: "from-red-500 via-amber-500 to-yellow-500",
  },
  {
    title: "Interior Works",
    description:
      "Functional, elegant interiors delivered with turnkey execution.",
    bullets: [
      "✔ POP, paneling, and gypsum work",
      "✔ Modular kitchens, wardrobes, false ceilings",
      "✔ Premium paint, veneer, PU finishes",
    ],
    gradient: "from-purple-600 via-fuchsia-600 to-pink-600",
  },
];

const WeOffer = () => {
  return (
    <section className="relative z-10 py-24 px-6 md:px-12 overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center md:text-left">
        {/* Section Label */}
        <motion.p
          className="text-sm tracking-widest text-gray-400 uppercase mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our Expertise
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          We Offer
        </motion.h2>

        {/* Animated Intro Tagline */}
        <div className="text-2xl md:text-3xl font-bold leading-snug space-y-2 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <AnimatedWord
              text="Technical Precision,"
              gradient="from-blue-500 via-purple-500 to-pink-500"
            />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedWord
              text="Practical Execution,"
              gradient="from-green-400 via-emerald-500 to-teal-500"
            />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-800 dark:text-white"
          >
            And Project Excellence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-xl font-semibold mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
              >
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">
                {service.description}
              </p>
              <ul className="list-disc ml-4 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                {service.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Outro */}
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          At <strong>S.K Reality</strong>, each project reflects our commitment to delivering value-driven results with clarity, care, and craftsmanship. From foundations to finishes, we partner with clients to shape durable and delightful spaces.
        </motion.p>
      </div>
    </section>
  );
};

export default WeOffer;
