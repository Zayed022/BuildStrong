import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building,
  Hammer,
  HardHat,
  Ruler,
  PaintRoller,
  Wrench,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    description: `We provide full-cycle residential construction services including planning, permits, foundation work, and finishing. Our projects range from villas to apartment complexes. We focus on long-term structural integrity, efficient use of space, and contemporary aesthetics. You can expect timely delivery, premium-grade materials, and environmentally conscious construction practices.`,
    icon: Building,
  },
  {
    title: "Renovation & Remodeling",
    description: `Whether it's a single room or a full home overhaul, we reimagine your space with precision. From layout restructuring and interior upgrades to energy-efficient improvements, we transform outdated spaces into vibrant, functional environments—blending your vision with expert design.`,
    icon: Hammer,
  },
  {
    title: "Project Planning & Management",
    description: `Our pre-construction planning includes site evaluation, budgeting, scheduling, and permit handling. We use Gantt charts and agile techniques to track progress and optimize workflow. You'll get complete transparency through real-time updates, milestone reports, and a dedicated project manager.`,
    icon: Ruler,
  },
  {
    title: "Safety & Regulatory Compliance",
    description: `Every project is built to exceed local building codes and safety regulations. We conduct rigorous site inspections and follow OSHA standards. Our compliance-first approach ensures zero legal complications and peace of mind for our clients.`,
    icon: HardHat,
  },
  {
    title: "Painting, Finishing & Interiors",
    description: `Enhance the final look of your project with our finishing services: custom painting, textures, waterproofing, wood polish, false ceilings, lighting, and decor. Our interior team works closely with designers to match function with aesthetics.`,
    icon: PaintRoller,
  },
  {
    title: "Post-Construction Maintenance",
    description: `We don't walk away after handover. Our maintenance team provides ongoing support including plumbing, electrical, HVAC, waterproofing, and emergency repairs. You also get optional AMC packages tailored to your property needs.`,
    icon: Wrench,
  },
];

const fadeInUp = (i) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  },
});

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-100 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Radial Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[1600px] h-[1600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-blue-400/10 via-purple-500/10 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0)}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
        >
          Comprehensive Construction Solutions
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(1)}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-base md:text-lg"
        >
          From blueprint to final brick, we provide future-ready, detail-oriented services that bring your vision to life—safely, efficiently, and beautifully.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isExpanded = activeIndex === i;

            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp(i)}
                whileHover={{ scale: 1.03 }}
                onClick={() => handleToggle(i)}
                className="group relative p-6 bg-white/10 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden cursor-pointer"
              >
                {/* Glow */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/20 via-purple-400/30 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-50 transition duration-500 rounded-full pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-indigo-400/30 blur-2xl opacity-0 group-hover:opacity-50 transition duration-500 rounded-full pointer-events-none" />

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-800 dark:to-blue-700 text-blue-800 dark:text-blue-200 shadow-md animate-float-slow">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 z-10 relative">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 z-10 relative transition-all duration-300">
                  {isExpanded
                    ? service.description
                    : service.description.slice(0, 130) + "…"}
                </p>

                {/* Toggle Button */}
                <button
                  className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 mt-3 hover:underline z-10 relative"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle(i);
                  }}
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
