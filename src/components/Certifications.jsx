import { motion } from "framer-motion";

const certificationGroups = [
  {
    category: "Artificial Intelligence & Generative AI",
    certifications: [
      "Prompt Engineering Specialization",
      "Programming with Generative AI",
      "Generative AI Primer",
      "Qoherenz Internship Program 2025",
    ],
    issuer: "Coursera • Qoherenz",
  },

  {
    category: "Data Science & Analytics",
    certifications: [
      "Data Analysis with Python",
      "Data Management & Visualization",
      "Exploring Data Transformation with Google",
    ],
    issuer: "Coursera • Google",
  },

  {
    category: "Cloud Computing",
    certifications: [
      "Innovating with Google Cloud AI",
    ],
    issuer: "Google Cloud",
  },

  {
    category: "Cyber Security",
    certifications: [
      "Cyber Security: Data & Identity Security",
    ],
    issuer: "Coursera",
  },

  {
    category: "Leadership & Outreach",
    certifications: [
      "Guesss India Campus Ambassador",
    ],
    issuer: "Guesss India",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24"
    >
      <div className="container-width">

        <div className="text-center mb-20">

          <p className="font-mono text-cyan-400 mb-4">
            $ ls certifications/
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
            Certifications
          </h2>

          <p
            className="
            text-gray-400
            max-w-3xl
            mx-auto
            text-lg
          "
          >
            Professional certifications and training
            across Artificial Intelligence, Machine Learning,
            Data Science, Cloud Computing, Cyber Security
            and Technical Leadership.
          </p>

        </div>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
        "
        >

          {certificationGroups.map(
            (group, index) => (
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
                  delay: index * 0.08,
                }}
                className="
                bg-black/70
                backdrop-blur-xl
                border
                border-red-500/20
                rounded-3xl
                p-8
                hover:border-red-500/50
                hover:-translate-y-1
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
                  mb-3
                  text-white
                "
                >
                  {group.category}
                </h3>

                <p
                  className="
                  text-cyan-400
                  font-mono
                  text-sm
                  mb-6
                "
                >
                  {group.issuer}
                </p>

                <div className="space-y-3">

                  {group.certifications.map(
                    (cert) => (
                      <div
                        key={cert}
                        className="
                        flex
                        items-start
                        gap-3
                      "
                      >
                        <span className="text-red-400">
                          ✓
                        </span>

                        <span className="text-gray-300">
                          {cert}
                        </span>
                      </div>
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

export default Certifications;