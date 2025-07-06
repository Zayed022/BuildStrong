import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Code2, Wrench } from "lucide-react";

const sections = [
  {
    title: "Strategic Thinking",
    icon: <BrainCircuit className="text-purple-500 w-6 h-6" />,
    desc: `We approach each project with a blend of creativity, foresight, and precise planning. Our design foundations are rooted in vision, longevity, and impact.`,
    tools: [],
  },
  {
    title: "Software We Excel In",
    icon: <Code2 className="text-pink-500 w-6 h-6" />,
    desc: `We master industry-leading software that helps us deliver precision, detail, and immersive design solutions.`,
    tools: [
      "AutoCAD", "Revit", "SketchUp", "Lumion", "V-Ray", "3ds Max", "Archicad", "Photoshop",
    ],
  },
  {
    title: "Technologies We Implement",
    icon: <Wrench className="text-indigo-500 w-6 h-6" />,
    desc: `Our architectural ecosystem leverages modern tech — from 3D modeling to real-time rendering, virtual walkthroughs, and data-driven project insights.`,
    tools: [
      "Twinmotion", "Rhino3D", "Grasshopper", "Blender", "SmartDraw", "Vectorworks",
      "Live Home 3D", "Affinity Designer", "Illustrator",
    ],
  },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const TechnicalExpertise = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100 dark:from-gray-950 dark:to-gray-900 py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-2">
            Build Strong
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
            Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-base">
            Empowering architecture with intelligent tools and state-of-the-art engineering platforms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
              className="group relative rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-800 p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Gradient border on hover */}
              <div className="absolute -inset-[2px] rounded-2xl z-[-1] bg-gradient-to-tr from-blue-500/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {section.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {section.desc}
              </p>

              {section.tools.length > 0 && (
                <motion.div
                  className="flex flex-wrap gap-2 mt-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {section.tools.map((tool, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={badgeVariants}
                      className="text-xs px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:scale-105 hover:shadow transition-transform duration-200"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative SVG Background */}
      <div className="absolute top-0 right-0 w-[600px] opacity-20 dark:opacity-10 pointer-events-none -z-10 hidden md:block">
        <img
          src="/tech-pattern.svg" // Add your design SVG in /public
          alt="Decorative pattern"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default TechnicalExpertise;
