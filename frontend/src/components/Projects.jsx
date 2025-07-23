import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

const fadeIn = (i) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  },
});

const statusColor = (status) =>
  status === "Completed"
    ? "bg-green-100 text-green-700 border-green-500"
    : "bg-blue-100 text-blue-700 border-blue-500";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-gray-950 text-gray-900 dark:text-white relative z-10"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0)}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Landmark Projects
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(1)}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Explore our proudest architectural achievements — where design, scale,
          and innovation converge.
        </motion.p>
      </div>

      <div className="space-y-24 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn(i + 2)}
            className={`flex flex-col ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12`}
          >
           <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-auto max-h-[400px] object-contain rounded-xl mx-auto"
  />
</div>


            <div className="w-full lg:w-1/2 space-y-4">
              <p className="text-2xl tracking-wide text-gray-500 dark:text-gray-400 uppercase">
                {project.location}
              </p>

              <h3 className="text-3xl font-semibold">{project.title}</h3>

              <div
                className={`inline-block text-md px-5 py-2 border rounded-md font-medium ${statusColor(
                  project.status
                )}`}
              >
                {project.status}
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description.substring(0, 160)}...
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="border border-gray-800 dark:border-gray-200 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal: Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <div className="bg-white dark:bg-gray-900 p-8 w-full max-w-5xl rounded-2xl shadow-2xl relative overflow-y-auto max-h-[95vh]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-6 text-gray-400 hover:text-red-500 text-2xl"
                >
                  &times;
                </button>

                {/* Full-size image with zoom */}
                <div
                  className="overflow-hidden rounded-xl mb-6 cursor-zoom-in"
                  onClick={() => setFullscreenImage(selectedProject.image)}
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full object-contain max-h-[60vh] rounded-xl"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-sm uppercase text-gray-500 mb-2">
                  {selectedProject.location}
                </p>
                <div
                  className={`inline-block text-sm px-4 py-1 border rounded-full mb-4 font-medium ${statusColor(
                    selectedProject.status
                  )}`}
                >
                  {selectedProject.status}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fullscreen image viewer */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
          >
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
