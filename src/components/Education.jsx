import { motion } from "framer-motion";

const educationData = [
  {
    degree:
      "B.Tech in Data Science & Artificial Intelligence",
    institute:
      "Indian Institute of Technology Guwahati",
    duration: "2023 - 2027",
    description:
      "Pursuing undergraduate studies focused on Artificial Intelligence, Machine Learning, Data Science, Statistical Modeling, Data Analytics and Intelligent Systems.",
    highlights: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Research",
      "Programming",
      "Analytics",
    ],
  },

  {
    degree: "Senior Secondary Education",
    institute: "CBSE",
    duration: "Completed",
    description:
      "Strong academic foundation in Mathematics, Physics and Computer Science which established the basis for advanced AI and Machine Learning studies.",
    highlights: [
      "Mathematics",
      "Physics",
      "Computer Science",
      "Problem Solving",
    ],
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-cyan-400 mb-3">
          $ cat education.db
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
          Education
        </h2>

        <div className="grid gap-8">

          {educationData.map(
            (item, index) => (
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
                      {item.degree}
                    </h3>

                    <p
                      className="
                      text-red-400
                      font-mono
                      mt-2
                    "
                    >
                      {item.institute}
                    </p>
                  </div>

                  <div
                    className="
                    text-cyan-400
                    font-mono
                  "
                  >
                    {item.duration}
                  </div>
                </div>

                <p
                  className="
                  text-gray-400
                  mt-6
                  leading-relaxed
                "
                >
                  {item.description}
                </p>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-6
                "
                >
                  {item.highlights.map(
                    (highlight) => (
                      <span
                        key={highlight}
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
                        {highlight}
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

export default Education;