import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Artificial Intelligence & ML",
    skills: [
      "Machine Learning",
      "Artificial Intelligence",
      "Statistical Data Analysis",
      "Data Mining",
      "Data Modeling",
      "Modeling & Simulation",
      "Surrogate Modeling",
    ],
  },

  {
    title: "Generative AI",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "Agentic AI",
      "LLM Applications",
      "RAG Systems",
      "AI-Powered Development",
    ],
  },

  {
    title: "Programming",
    skills: [
      "Python",
      "Web Development",
      "Software Development",
      "Programming",
      "Git",
      "GitHub",
    ],
  },

  {
    title: "Data Science",
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Data Management",
      "Data Literacy",
      "Information Research",
    ],
  },

  {
    title: "Cloud & Platforms",
    skills: [
      "Google Cloud Platform",
      "Google Cloud AI",
      "Google Colab",
    ],
  },

  {
    title: "Cyber Security",
    skills: [
      "Cybersecurity",
      "Information Security",
      "Data Privacy",
      "Cryptography",
      "IAM",
      "Data Security",
    ],
  },
];

function Skills() {
  return (
    <section id="Skills" className="py-32 px-6">

      <div className="container-width">

        <h2 className="text-4xl font-bold mb-12">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass glow rounded-3xl p-8 hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-white/5
                    border
                    border-cyan-500/10
                    text-sm
                    hover:border-cyan-400
                    transition
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;