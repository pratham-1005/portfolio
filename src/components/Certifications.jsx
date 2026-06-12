import { useState } from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Prompt Engineering Specialization",
    issuer: "Coursera",
  },

  {
    title: "Innovating with Google Cloud AI",
    issuer: "Google Cloud",
  },

  {
    title: "Programming with Generative AI",
    issuer: "Google",
  },

  {
    title: "Generative AI Primer",
    issuer: "Google",
  },

  {
    title: "Data Analysis with Python",
    issuer: "IBM",
  },

  {
    title: "Cyber Security: Data & Identity Security",
    issuer: "Coursera",
  },

  {
    title: "Agentic AI Development",
    issuer: "Qoherenz",
  },

  {
    title: "AI-Powered Development",
    issuer: "Qoherenz",
  },

  {
    title: "Data Management & Visualization",
    issuer: "IBM",
  },

  {
    title: "Google Data Transformation",
    issuer: "Google",
  },

  {
    title: "Introduction to Generative AI",
    issuer: "Google",
  },

  {
    title: "Campus Ambassador",
    issuer: "Guesss India",
  },
];

function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const visibleCerts = showAll
    ? certifications
    : certifications.slice(0, 6);

  return (
    <section
      id="Certifications"
      className="py-32 px-6"
    >
      <div className="container-width">

        <h2 className="text-4xl font-bold mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {visibleCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="
              glass
              glow
              p-6
              rounded-3xl
              hover:-translate-y-2
              transition-all
              "
            >
              <p className="text-cyan-400 text-sm">
                VERIFIED
              </p>

              <h3 className="font-bold text-lg mt-4">
                {cert.title}
              </h3>

              <p className="text-violet-400 mt-3">
                {cert.issuer}
              </p>
            </motion.div>
          ))}

        </div>

        <div className="text-center mt-10">

          <button
            onClick={() =>
              setShowAll(!showAll)
            }
            className="
            px-6
            py-3
            rounded-xl
            border
            border-cyan-500/20
            hover:border-cyan-400
            "
          >
            {showAll
              ? "Show Less"
              : "View All Certifications"}
          </button>

        </div>

      </div>
    </section>
  );
}

export default Certifications;