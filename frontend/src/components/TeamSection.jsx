import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TeamSection = () => {
  const team = {
    director: {
      name: "Aqib",
      title: "DIRECTOR",
      description: [
        "Expert at navigating regulatory complexities.",
        "Manages architectural project aesthetics.",
        "Deep expertise in permits, zoning, and compliance.",
        "Guides teams with wisdom and foresight.",
      ],
      image: "/team/aqib.jpg",
      socials: [
        { name: "WhatsApp", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "Facebook", href: "#" },
      ],
    },
    members: [
      {
        name: "Person2",
        role: "Senior Design Architect",
        desc: "Expert in functionality with architectural creativity. Drives sustainable, aesthetic designs and leads material selection.",
        image: "/team/person2.jpg",
      },
      {
        name: "Person3",
        role: "Principal Architect",
        desc: "Shapes concept to reality through spatial and structural storytelling. Balances heritage with modern design.",
        image: "/team/person3.jpg",
      },
      {
        name: "person4",
        role: "Visualizer",
        desc: "Creates immersive visualizations and walkthroughs. Fuses color theory and emotion into impactful representations.",
        image: "/team/person4.jpg",
      },
      {
        name: "Person5",
        role: "Operations Engineer",
        desc: "Ensures logistics and building systems flow smoothly. Keeps processes efficient from ground to handover.",
        image: "/team/person5.jpg",
      },
      {
        name: "Person6",
        role: "Junior Architect",
        desc: "Assists in site evaluations, modeling, and research. Brings fresh ideas with conceptual sketches and design explorations.",
        image: "/team/person6.jpg",
      },
      {
        name: "Person7",
        role: "Visualizer",
        desc: "Masters digital renderings, crafting 3D scenes and immersive walkthroughs.",
        image: "/team/person7.jpg",
      },
      {
        name: "Person8",
        role: "Visualizer",
        desc: "Specialist in lighting, textures, and rendering composition.",
        image: "/team/person8.jpg",
      },
      {
        name: "Person9",
        role: "Designer",
        desc: "Elevates form and color into emotionally rich design.",
        image: "/team/person9.jpg",
      },
    ],
  };

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-sm uppercase tracking-widest text-gray-400 mb-2"
        >
          Our Expert Team
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Meet the Minds Behind Our Success
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16"
        >
          The dedicated professionals driving our vision forward.
        </motion.p>

        {/* Director Highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center gap-10 justify-center mb-20"
        >
          <img
            src={team.director.image}
            alt={team.director.name}
            className="rounded-xl w-72 h-auto object-cover shadow-2xl ring-4 ring-blue-200 dark:ring-blue-500"
          />
          <div className="text-left max-w-lg">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {team.director.name}
            </h3>
            <p className="text-sm uppercase text-blue-500 font-medium mb-4">
              {team.director.title}
            </p>
            <ul className="text-gray-600 dark:text-gray-400 list-disc ml-4 space-y-1 text-sm mb-4">
              {team.director.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="flex gap-3 mt-2">
              {team.director.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.members.map((member, idx) => (
            <motion.div
              key={idx}
              custom={idx * 0.15}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              className="rounded-xl shadow-xl p-6 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-24 h-24 object-cover mb-4 ring-2 ring-blue-400 dark:ring-blue-600"
              />
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h4>
              <p className="text-sm text-blue-500 uppercase font-medium">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
