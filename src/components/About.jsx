import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="About"
      className="py-32 px-6"
    >
      <div className="container-width">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12"
        >
          About Me
        </motion.h2>

        <div className="glass glow rounded-3xl p-8 md:p-12">

          <div className="font-mono text-green-400 mb-8">
            &gt; initialize_profile
          </div>

          <div className="space-y-5 text-gray-300 font-mono">

            <p>
              <span className="text-cyan-400">
                Name:
              </span>{" "}
              Pratham Mittal
            </p>

            <p>
              <span className="text-cyan-400">
                Institute:
              </span>{" "}
              Indian Institute of Technology Guwahati
            </p>

            <p>
              <span className="text-cyan-400">
                Program:
              </span>{" "}
              Data Science & Artificial Intelligence
            </p>

            <p>
              <span className="text-cyan-400">
                Research Interests:
              </span>
            </p>

            <ul className="ml-8 list-disc text-gray-400">
              <li>Machine Learning</li>
              <li>Generative AI</li>
              <li>Multi-Agent Systems</li>
              <li>Surrogate Modeling</li>
              <li>Simulation Engineering</li>
            </ul>

            <p>
              <span className="text-cyan-400">
                Current Focus:
              </span>{" "}
              Building AI systems that combine
              research, engineering, and real-world
              deployment.
            </p>

            <p>
              <span className="text-cyan-400">
                Status:
              </span>{" "}
              Open to AI Research, Machine Learning,
              and Data Science opportunities.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

