import { motion } from "framer-motion";

function Education() {
  return (
    <section id="Education" className="py-32 px-6">

      <div className="container-width">

        <h2 className="text-4xl font-bold mb-12">
          Education
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass glow rounded-3xl p-10"
        >
          <p className="text-cyan-400 mb-3">
            2022 – Present
          </p>

          <h3 className="text-3xl font-bold">
            Indian Institute of Technology Guwahati
          </h3>

          <p className="text-violet-400 mt-3 text-lg">
            Data Science & Artificial Intelligence
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Focused on Machine Learning, Artificial
            Intelligence, Statistical Analysis,
            Simulation Engineering, Data Science,
            Generative AI, and autonomous AI systems.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default Education;