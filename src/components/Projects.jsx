import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

function Projects() {

  const [selectedProject, setSelectedProject] =
    useState(null);

  const projects = [
    {
      title:
        "ML-Based Surrogate Modeling",

      subtitle:
        "Continuous Casting Temperature Prediction",

      problem:
        "Engineering simulations using COMSOL are computationally expensive. The objective was to build machine learning surrogate models capable of accurately approximating temperature distributions generated from simulation data.",

      methodology:
        "Generated simulation datasets from 48 COMSOL cases and trained XGBoost, Support Vector Regression, and Gaussian Process Regression models. Evaluated performance using R², MAE, and RMSE metrics.",

      results:
        "XGBoost achieved the highest predictive performance with R² ≈ 0.939, demonstrating the feasibility of replacing repeated numerical simulations using machine learning based surrogate models.",

      tech: [
        "Python",
        "XGBoost",
        "SVR",
        "GPR",
        "COMSOL",
        "NumPy",
        "Pandas",
        "Scikit-Learn",
      ],

      github: "#",
      report: "#",
    },

    {
      title:
        "AI Customer Review Intelligence System",

      subtitle:
        "Multi-Agent AI Architecture",

      problem:
        "Businesses struggle to manually analyze large volumes of customer feedback and extract actionable insights.",

      methodology:
        "Designed a modular AI architecture combining sentiment analysis, spam detection, trend identification, competitor analysis, retrieval augmented generation, and LLM-powered response generation.",

      results:
        "Created a scalable framework capable of transforming unstructured customer reviews into business intelligence using multiple specialized AI agents.",

      tech: [
        "Generative AI",
        "RAG",
        "LangChain",
        "Prompt Engineering",
        "Multi-Agent Systems",
        "Vector Databases",
        "LLMs",
      ],

      github: "#",
      report: "https://drive.google.com/file/d/1RHT9pDq0tL1OkKP3EDR6hrDBklp73X7u/view?usp=drive_link",
    },
  ];

  return (
    <section id="Projects" className="py-32 px-6">

      <div className="container-width">

        <h2 className="text-4xl font-bold mb-12">
          Research & Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              className="
              glass
              glow
              rounded-3xl
              p-8
              cursor-pointer
              hover:-translate-y-2
              transition-all
              "
              onClick={() =>
                setSelectedProject(project)
              }
            >

              <p className="text-cyan-400 mb-4">
                Featured Project
              </p>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-violet-400 mt-2">
                {project.subtitle}
              </p>

              <p className="text-gray-400 mt-6">
                {project.problem}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">

                {project.tech
                  .slice(0, 4)
                  .map((item) => (
                    <span
                      key={item}
                      className="
                      text-sm
                      px-3 py-1
                      rounded-full
                      border
                      border-cyan-500/20
                      "
                    >
                      {item}
                    </span>
                  ))}

              </div>

              <button
                className="
                mt-8
                text-cyan-400
                font-semibold
                "
              >
                View Details →
              </button>

            </motion.div>
          ))}

        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />

    </section>
  );
}

export default Projects;