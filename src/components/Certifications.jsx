import { motion } from "framer-motion";

const certifications = [
  {
    title: "Prompt Engineering Specialization",
    issuer: "Coursera",
  },

  {
    title: "Programming with Generative AI",
    issuer: "Coursera",
  },

  {
    title: "Generative AI Primer",
    issuer: "Coursera",
  },

  {
    title: "Data Analysis with Python",
    issuer: "Coursera",
  },

  {
    title: "Data Management & Visualization",
    issuer: "Coursera",
  },

  {
    title: "Cyber Security: Data & Identity Security",
    issuer: "Coursera",
  },

  {
    title: "Innovating with Google Cloud AI",
    issuer: "Google Cloud",
  },

  {
    title: "Exploring Data Transformation with Google",
    issuer: "Google",
  },

  {
    title: "Qoherenz Internship Program 2025",
    issuer: "Qoherenz",
  },

  {
    title: "Guesss India Campus Ambassador",
    issuer: "Guesss India",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-cyan-400 mb-3">
          $ ls certifications/
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
          Certifications
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
        >
          {certifications.map(
            (cert, index) => (
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
                    index * 0.05,
                }}
                className="
                bg-black/70
                backdrop-blur-xl
                border
                border-cyan-500/20
                rounded-2xl
                p-6
                hover:border-red-500/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
              >
                <div
                  className="
                  text-red-400
                  font-mono
                  mb-4
                "
                >
                  CERT
                </div>

                <h3
                  className="
                  text-xl
                  font-bold
                  mb-4
                  leading-snug
                "
                >
                  {cert.title}
                </h3>

                <p
                  className="
                  text-cyan-400
                  font-mono
                "
                >
                  {cert.issuer}
                </p>

                <div
                  className="
                  mt-6
                  text-gray-500
                  font-mono
                  text-sm
                "
                >
                  verified credential
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