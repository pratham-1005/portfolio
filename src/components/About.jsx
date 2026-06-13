import { motion } from "framer-motion";

const activities = [
  {
    role: "Coordinator",
    organization: "Coding Club, IIT Guwahati",
    duration: "Mar 2025 - Apr 2025",
    description:
      "Led technical initiatives, coordinated coding events, workshops and community engagement activities within the Science & Technology ecosystem.",
  },

  {
    role: "Research Intern",
    organization: "National Institute of Technology Silchar",
    duration: "2025",
    description:
      "Worked on machine learning-based surrogate modeling and predictive analytics for thermal simulations using advanced regression techniques.",
  },

  {
    role: "Agentic AI Intern",
    organization: "Qoherenz",
    duration: "2025",
    description:
      "Developed AI-powered workflows, agentic systems and automation pipelines using modern Generative AI technologies.",
  },

  {
    role: "Campus Ambassador",
    organization: "Guesss India",
    duration: "2025",
    description:
      "Represented the organization across campus initiatives, outreach campaigns and student engagement programs.",
  },
];

function About() {
  return (
    <section
      id="roles"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-cyan-400 mb-3">
          $ cat leadership.log
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
          Leadership & Activities
        </h2>

        <div className="grid gap-8">

          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
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
                  "
                  >
                    {item.role}
                  </h3>

                  <p
                    className="
                    text-red-400
                    font-mono
                    mt-2
                  "
                  >
                    {item.organization}
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;