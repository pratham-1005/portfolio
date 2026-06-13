import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "programming",
    skills: [
      "Python",
      "Java",
      "C",
      "JavaScript",
      "Linux",
      "Git",
    ],
    color: "red",
  },

  {
    title: "machine_learning_and_data_science",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Statistical Analysis",
      "Data Modeling",
      "Data Mining",
      "Scikit-Learn",
      "XGBoost",
      "Feature Engineering",
      "Time Series Analysis",
      "Predictive Modeling",
    ],
    color: "cyan",
  },

  {
    title: "generative_ai_and_agentic_ai",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "Agentic AI",
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "Vector Databases",
      "MCP",
      "AI-Powered Development",
    ],
    color: "red",
  },

  {
    title: "cloud_and_deployment",
    skills: [
      "Google Cloud Platform",
      "Docker",
      "GitHub",
      "Deployment",
      "Streamlit",
      "Vercel",
    ],
    color: "cyan",
  },

  {
    title: "research_and_analytics",
    skills: [
      "Research",
      "Modeling & Simulation",
      "Surrogate Modeling",
      "Scientific Computing",
      "Information Research",
      "Data Transformation",
    ],
    color: "violet",
  },

  {
    title: "cyber_security",
    skills: [
      "Cybersecurity",
      "Cryptography",
      "IAM",
      "Data Privacy",
      "Data Security",
      "Information Security",
    ],
    color: "violet",
  },

  {
    title: "soft_skills",
    skills: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Analytical Thinking",
      "Brand Ambassadorship",
    ],
    color: "violet",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-cyan-400 mb-3">
          $ cat skills.json
        </p>

        <h2
          className="
          text-5xl
          md:text-6xl
          font-black
          font-mono
          mb-16
          bg-gradient-to-r
          from-red-500
          to-violet-500
          text-transparent
          bg-clip-text
        "
        >
          Skills & Expertise
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
        >
          {skillGroups.map(
            (group, index) => (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                bg-black/70
                border
                border-cyan-500/20
                rounded-2xl
                p-7
                backdrop-blur-lg
                hover:border-red-500/40
                transition-all
                duration-300
              "
              >
                <p
                  className="
                  text-red-500
                  font-mono
                  text-sm
                  mb-4
                "
                >
                  ~/{group.title}
                </p>

                <h3
                  className="
                  text-2xl
                  font-bold
                  mb-6
                  font-mono
                "
                >
                  {group.title
                    .replaceAll("_", " ")
                    .replace(
                      /\b\w/g,
                      (c) =>
                        c.toUpperCase()
                    )}
                </h3>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                "
                >
                  {group.skills.map(
                    (skill) => (
                      <span
                        key={skill}
                        className={`
                        px-4
                        py-2
                        rounded-lg
                        text-sm
                        font-mono
                        border

                        ${
                          group.color ===
                          "red"
                            ? "border-red-500/50 text-red-400"
                            : group.color ===
                              "cyan"
                            ? "border-cyan-500/50 text-cyan-400"
                            : "border-violet-500/50 text-violet-400"
                        }
                      `}
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>

      </div>
    </section>
  );
}

export default Skills;