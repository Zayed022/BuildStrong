import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Building, Flag } from "lucide-react";

const milestones = [
  {
    year: "2016",
    title: "Founded S.K Reality",
    icon: <Flag size={20} />,
    description: "Started with a vision to redefine construction excellence.",
  },
  {
    year: "2018",
    title: "First 10+ Residential Projects",
    icon: <Building size={20} />,
    description: "Completed multiple projects in Thane and Bhiwandi region.",
  },
  {
    year: "2021",
    title: "ISO Certification",
    icon: <Award size={20} />,
    description: "Achieved ISO 9001:2015 certification for quality assurance.",
  },
  {
    year: "2024",
    title: "Expanded to Mumbai & Pune",
    icon: <Briefcase size={20} />,
    description: "Scaled operations with bigger teams and larger projects.",
  },
];

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0)}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Our Company Journey
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp(0.2)}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          A timeline of innovation, excellence, and commitment to building
          dreams across Maharashtra.
        </motion.p>
      </div>

      <div className="relative border-l-2 border-blue-500 dark:border-yellow-400 pl-6 space-y-12 max-w-3xl mx-auto">
        {milestones.map((milestone, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp(i * 0.3)}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[1.2rem] top-1.5 w-4 h-4 rounded-full bg-blue-500 dark:bg-yellow-400 ring-2 ring-white dark:ring-gray-950 z-10" />

            {/* Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-blue-600 dark:text-yellow-300">{milestone.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {milestone.title}
                </h3>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {milestone.year}
              </span>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
