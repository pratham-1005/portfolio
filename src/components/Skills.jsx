import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Artificial Intelligence & Generative AI",
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
  },

  {
    title: "Machine Learning & Data Science",
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
  },

  {
    title: "Programming & Development",
    skills: [
      "Python",
      "Java",
      "C",
      "JavaScript",
      "Linux",
      "Git",
      "GitHub",
      "Software Development",
      "Web Development",
    ],
  },

  {
    title: "Cloud & Deployment",
    skills: [
      "Google Cloud Platform",
      "Docker",
      "Streamlit",
      "Vercel",
      "Deployment",
      "Cloud Computing",
    ],
  },

  {
    title: "Research & Scientific Computing",
    skills: [
      "Research",
      "Modeling & Simulation",
      "Surrogate Modeling",
      "Scientific Computing",
      "Information Research",
      "Data Transformation",
      "COMSOL",
    ],
  },

  {
    title: "Cyber Security",
    skills: [
      "Cybersecurity",
      "Cryptography",
      "IAM",
      "Data Privacy",
      "Data Security",
      "Information Security",
    ],
  },

  {
    title: "Leadership & Professional Skills",
    skills: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Analytical Thinking",
      "Brand Ambassadorship",
      "Community Building",
      "Event Management",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
    >
      <div className="container-width">

        <div className="text-center mb-20">

          <p className="font-mono text-cyan-400 mb-4">
            $ cat skills.json
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-black
            mb-6
            bg-gradient-to-r
            from-red-500
            via-pink-500
            to-cyan-400
            text-transparent
            bg-clip-text
          "
          >
            Skills & Expertise
          </h2>

          <p
            className="
            text-gray-400
            max-w-3xl
            mx-auto
            text-lg
          "
          >
            A combination of artificial intelligence,
            machine learning, software engineering,
            research and data science skills developed
            through academic projects, internships,
            certifications and real-world applications.
          </p>

        </div>

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
                backdrop-blur-xl
                border
                border-red-500/20
                rounded-3xl
                p-8
                hover:border-red-500/50
                hover:translate-y-[-4px]
                transition-all
                duration-300
              "
              >

                <div
                  className="
                  w-12
                  h-1
                  bg-gradient-to-r
                  from-red-500
                  to-cyan-400
                  mb-6
                "
                />

                <h3
                  className="
                  text-2xl
                  font-bold
                  text-white
                  mb-6
                "
                >
                  {group.title}
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
                        className="
                        px-4
                        py-2
                        rounded-xl
                        border
                        border-red-500/30
                        bg-red-500/5
                        text-red-400
                        text-sm
                        font-mono
                      "
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