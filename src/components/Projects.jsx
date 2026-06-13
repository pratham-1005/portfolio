import { motion } from "framer-motion";

const projects = [
  {
    featured: true,
    title:
      "Machine Learning-Based Surrogate Modeling for Continuous Casting Temperature Prediction",
    category: "Research Project",
    description:
      "Developed high-performance surrogate models to predict thermal behavior in continuous casting processes using machine learning. Trained and evaluated XGBoost, Support Vector Regression (SVR), and Gaussian Process Regression (GPR) on 15,952+ simulation samples generated through COMSOL Multiphysics.",
    technologies: [
      "Python",
      "XGBoost",
      "SVR",
      "GPR",
      "Machine Learning",
      "COMSOL",
      "Data Analysis",
      "Scientific Computing",
    ],
    github: "#",
    report: "#",
  },

  {
    featured: false,
    title:
      "Customer Review Intelligence System",
    category: "Generative AI Project",
    description:
      "Built a multi-agent AI platform that analyzes customer reviews, extracts sentiment, identifies business trends, and generates actionable insights using LLMs and Retrieval-Augmented Generation workflows.",
    technologies: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Agentic AI",
      "LangChain",
      "Prompt Engineering",
      "Python",
    ],
    github: "#",
    report: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-cyan-400 mb-3">
          $ ls projects/
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
          Featured Projects
        </h2>

        {/* Featured Project */}

        <motion.div
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
          className="
          mb-10
          bg-black/70
          backdrop-blur-xl
          border
          border-red-500/30
          rounded-3xl
          p-10
          shadow-[0_0_50px_rgba(255,0,60,0.15)]
        "
        >
          <div className="flex flex-wrap gap-3 mb-5">

            <span
              className="
              px-4
              py-2
              rounded-lg
              bg-red-500/10
              text-red-400
              font-mono
              text-sm
            "
            >
              ★ FEATURED RESEARCH
            </span>

            <span
              className="
              px-4
              py-2
              rounded-lg
              bg-cyan-500/10
              text-cyan-400
              font-mono
              text-sm
            "
            >
              RESEARCH
            </span>

          </div>

          <h3
            className="
            text-3xl
            md:text-4xl
            font-bold
            mb-6
          "
          >
            {projects[0].title}
          </h3>

          <p
            className="
            text-gray-400
            leading-relaxed
            text-lg
          "
          >
            {projects[0].description}
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-3
            mt-8
          "
          >
            {projects[0].technologies.map(
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
                  font-mono
                  text-sm
                "
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div
            className="
            flex
            flex-wrap
            gap-5
            mt-8
          "
          >
            <a
              href={projects[0].github}
              target="_blank"
              rel="noreferrer"
              className="
              px-6
              py-3
              rounded-xl
              bg-red-600
              hover:bg-red-500
              transition
            "
            >
              View GitHub
            </a>

            <a
              href={projects[0].report}
              target="_blank"
              rel="noreferrer"
              className="
              px-6
              py-3
              rounded-xl
              border
              border-cyan-500/40
              hover:bg-cyan-500/10
            "
            >
              View Report
            </a>
          </div>

        </motion.div>

        {/* Other Projects */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
        "
        >
          {projects
            .slice(1)
            .map(
              (
                project,
                index
              ) => (
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
                  className="
                  bg-black/70
                  backdrop-blur-xl
                  border
                  border-cyan-500/20
                  rounded-2xl
                  p-8
                  hover:border-red-500/40
                  transition-all
                "
                >
                  <p
                    className="
                    text-cyan-400
                    font-mono
                    text-sm
                    mb-4
                  "
                  >
                    {project.category}
                  </p>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mb-4
                  "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                    text-gray-400
                    leading-relaxed
                  "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                    flex
                    flex-wrap
                    gap-3
                    mt-6
                  "
                  >
                    {project.technologies.map(
                      (
                        tech
                      ) => (
                        <span
                          key={tech}
                          className="
                          px-3
                          py-2
                          rounded-lg
                          border
                          border-cyan-500/30
                          text-cyan-400
                          font-mono
                          text-sm
                        "
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <div
                    className="
                    flex
                    gap-4
                    mt-8
                  "
                  >
                    <a
                      href={
                        project.github
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="
                      text-red-400
                      hover:text-red-300
                    "
                    >
                      GitHub →
                    </a>

                    <a
                      href={
                        project.report
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="
                      text-cyan-400
                      hover:text-cyan-300
                    "
                    >
                      Report →
                    </a>
                  </div>

                </motion.div>
              )
            )}
        </div>

      </div>
    </section>
  );
}

export default Projects;