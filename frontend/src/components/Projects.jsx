import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const fadeIn = (i) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  },
});

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0)}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Our Landmark Projects
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(1)}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Explore some of our proudest architectural achievements — where craftsmanship, scale, and innovation meet.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(i + 2)}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl bg-white/20 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 backdrop-blur-xl shadow-xl transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Slide-up info */}
              <div className="absolute bottom-0 left-0 w-full p-5 bg-black/60 backdrop-blur-sm text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-blue-200 uppercase tracking-wider mt-1">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
