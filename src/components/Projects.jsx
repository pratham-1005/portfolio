import { motion } from "framer-motion";

const projects = [
  {
    featured: true,
    title:
      "Machine Learning-Based Surrogate Modeling for Continuous Casting Temperature Prediction",
    category: "Research Project",

    description:
      "Developed machine learning surrogate models to predict thermal behavior in continuous casting processes using XGBoost, Support Vector Regression (SVR) and Gaussian Process Regression (GPR). Trained and evaluated models on 15,952+ simulation samples generated through COMSOL Multiphysics, enabling faster and more efficient thermal prediction compared to conventional simulation approaches.",

    technologies: [
      "Python",
      "Machine Learning",
      "XGBoost",
      "SVR",
      "GPR",
      "COMSOL",
      "Data Analysis",
      "Scientific Computing",
    ],
  },

  {
    featured: false,
    title: "Customer Review Intelligence System",

    category: "Generative AI Project",

    description:
      "Built a multi-agent AI platform capable of analyzing customer reviews, identifying sentiment patterns, extracting business insights and generating actionable recommendations using modern LLM workflows, Retrieval-Augmented Generation and intelligent agent orchestration.",

    technologies: [
      "Generative AI",
      "LLMs",
      "RAG",
      "Agentic AI",
      "Prompt Engineering",
      "Python",
      "LangChain",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <div className="container-width">

        <div className="text-center mb-20">

          <p className="font-mono text-cyan-400 mb-4">
            $ ls projects/
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
            Research & AI Projects
          </h2>

          <p
            className="
            text-gray-400
            max-w-3xl
            mx-auto
            text-lg
          "
          >
            A collection of research-driven and
            AI-powered projects focused on machine
            learning, scientific computing,
            intelligent automation and generative AI.
          </p>

        </div>

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
          relative
          mb-12
          bg-black/70
          backdrop-blur-xl
          border
          border-red-500/20
          rounded-3xl
          p-8
          md:p-10
          hover:border-red-500/50
          transition-all
          duration-300
        "
        >

          <div
            className="
            absolute
            left-0
            top-0
            bottom-0
            w-1
            rounded-l-3xl
            bg-gradient-to-b
            from-red-500
            to-cyan-400
          "
          />

          <div className="flex flex-wrap gap-3 mb-6">

            <span
              className="
              px-4
              py-2
              rounded-xl
              bg-red-500/10
              text-red-400
              text-sm
              font-mono
            "
            >
              FEATURED RESEARCH
            </span>

            <span
              className="
              px-4
              py-2
              rounded-xl
              bg-cyan-500/10
              text-cyan-400
              text-sm
              font-mono
            "
            >
              MACHINE LEARNING
            </span>

          </div>

          <h3
            className="
            text-3xl
            md:text-4xl
            font-bold
            mb-6
            text-white
          "
          >
            {projects[0].title}
          </h3>

          <p
            className="
            text-gray-400
            text-lg
            leading-relaxed
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
                  rounded-xl
                  border
                  border-red-500/30
                  bg-red-500/5
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

        {/* Other Projects */}

        <div className="grid md:grid-cols-2 gap-8">

          {projects
            .slice(1)
            .map((project, index) => (
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
                rounded-3xl
                p-8
                hover:border-cyan-500/50
                transition-all
                duration-300
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
                  mb-5
                  text-white
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
                    (tech) => (
                      <span
                        key={tech}
                        className="
                        px-3
                        py-2
                        rounded-xl
                        border
                        border-cyan-500/30
                        bg-cyan-500/5
                        text-cyan-400
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
            ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;