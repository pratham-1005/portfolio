import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>

      {project && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex justify-center items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="
            glass
            glow
            rounded-3xl
            max-w-4xl
            w-full
            max-h-[90vh]
            overflow-y-auto
            p-8
            "
          >
            <div className="flex justify-between items-start">

              <div>
                <h2 className="text-3xl font-bold">
                  {project.title}
                </h2>

                <p className="text-cyan-400 mt-2">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                className="text-2xl"
              >
                ✕
              </button>

            </div>

            <div className="mt-8">

              <h3 className="text-xl text-cyan-400 mb-3">
                Problem Statement
              </h3>

              <p className="text-gray-400">
                {project.problem}
              </p>

            </div>

            <div className="mt-8">

              <h3 className="text-xl text-cyan-400 mb-3">
                Methodology
              </h3>

              <p className="text-gray-400">
                {project.methodology}
              </p>

            </div>

            <div className="mt-8">

              <h3 className="text-xl text-cyan-400 mb-3">
                Results
              </h3>

              <p className="text-gray-400">
                {project.results}
              </p>

            </div>

            <div className="mt-8">

              <h3 className="text-xl text-cyan-400 mb-4">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-3">

                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                    px-4 py-2
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            <div className="mt-10 flex gap-4 flex-wrap">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                px-6 py-3
                rounded-xl
                bg-cyan-500
                text-black
                font-semibold
                "
              >
                GitHub
              </a>

              <a
                href={project.report}
                target="_blank"
                rel="noreferrer"
                className="
                px-6 py-3
                rounded-xl
                border
                border-violet-500
                "
              >
                Research Report
              </a>

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}

export default ProjectModal;