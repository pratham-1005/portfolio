import { motion } from "framer-motion";

const experiences = [
  {
    title: "Research Intern",
    organization: "National Institute of Technology Silchar",
    duration: "May 2025 - July 2025",
    description:
      "Developed machine learning surrogate models using XGBoost, SVR and GPR for predicting thermal behavior in continuous casting processes. Worked with 15,952+ simulation samples generated using COMSOL Multiphysics.",
    tech: [
      "Python",
      "XGBoost",
      "SVR",
      "GPR",
      "COMSOL",
      "Machine Learning",
    ],
  },

  {
    title: "Agentic AI Intern",
    organization: "Qoherenz",
    duration: "2025",
    description:
      "Built agentic AI workflows, prompt engineering pipelines, multi-agent systems and AI-powered automation solutions for real-world business applications.",
    tech: [
      "Generative AI",
      "LLMs",
      "Agentic AI",
      "Prompt Engineering",
      "Automation",
    ],
  },

  {
    title: "Coordinator",
    organization: "Coding Club, IIT Guwahati",
    duration: "Mar 2025 - Apr 2025",
    description:
      "Coordinated technical activities, coding events, workshops and student engagement initiatives within the Science and Technology ecosystem of IIT Guwahati.",
    tech: [
      "Leadership",
      "Community Building",
      "Event Management",
      "Communication",
    ],
  },

  {
    title: "Campus Ambassador",
    organization: "Guesss India",
    duration: "2025",
    description:
      "Represented the organization across campus initiatives, outreach programs and promotional activities while strengthening professional communication and networking skills.",
    tech: [
      "Brand Ambassadorship",
      "Leadership",
      "Marketing",
      "Networking",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-cyan-400 mb-3">
          $ cat experience.log
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
          via-pink-500
          to-violet-500
          text-transparent
          bg-clip-text
        "
        >
          Experience
        </h2>

        <div className="grid gap-8">

          {experiences.map(
            (exp, index) => (
              <motion.div
                key={index}
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
                  delay:
                    index * 0.1,
                }}
                className="
                bg-black/70
                backdrop-blur-xl
                border
                border-cyan-500/20
                rounded-2xl
                p-8
                hover:border-red-500/40
                transition-all
                duration-300
              "
              >
                <div
                  className="
                  flex
                  flex-col
                  lg:flex-row
                  lg:justify-between
                  gap-4
                "
                >
                  <div>
                    <h3
                      className="
                      text-2xl
                      font-bold
                      text-white
                    "
                    >
                      {exp.title}
                    </h3>

                    <p
                      className="
                      text-red-400
                      font-mono
                      mt-2
                    "
                    >
                      {exp.organization}
                    </p>
                  </div>

                  <div
                    className="
                    text-cyan-400
                    font-mono
                  "
                  >
                    {exp.duration}
                  </div>
                </div>

                <p
                  className="
                  text-gray-400
                  mt-6
                  leading-relaxed
                "
                >
                  {exp.description}
                </p>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-6
                "
                >
                  {exp.tech.map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                        px-4
                        py-2
                        rounded-lg
                        border
                        border-red-500/30
                        text-red-400
                        text-sm
                        font-mono
                      "
                      >
                        {tech}
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

export default Experience;