import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Intern",
    company: "Qoherenz",
    duration: "2025",
    description:
      "Worked on Agentic AI Development, Prompt Engineering, AI-Powered Development workflows, and modern LLM applications. Built practical experience with autonomous AI systems and business automation.",
  },

  {
    title: "Research Intern",
    company: "National Institute of Technology Silchar",
    duration: "2025",
    description:
      "Conducted research in Machine Learning, Data Mining, Statistical Data Analysis, Modeling & Simulation, and surrogate modeling techniques for engineering applications.",
  },

  {
    title: "Coordinator",
    company: "Coding Club, IIT Guwahati",
    duration: "Mar 2025 – Apr 2025",
    description:
      "Led technical initiatives, coordinated coding activities, organized technical events, and facilitated student engagement in programming, AI, software development, and competitive coding.",
  },
];

function Experience() {
  return (
    <section id="Experience" className="py-32 px-6">
      <div className="container-width">
        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="glass glow p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-cyan-400 mb-2">
                {item.duration}
              </p>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-violet-400 mt-2">
                {item.company}
              </p>

              <p className="text-gray-400 mt-6 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;