import { motion } from "framer-motion";

const activities = [
  {
    role: "Coordinator",
    organization: "Coding Club, IIT Guwahati",
    duration: "Mar 2025 - Apr 2025",
    description:
      "Led technical initiatives, coordinated coding events, workshops and community engagement activities within the Science & Technology ecosystem of IIT Guwahati.",
  },

  {
    role: "Research Intern",
    organization: "National Institute of Technology Silchar",
    duration: "2025",
    description:
      "Worked on machine learning-based surrogate modeling and predictive analytics for thermal simulations using advanced regression techniques and scientific computing workflows.",
  },

  {
    role: "Agentic AI Intern",
    organization: "Qoherenz",
    duration: "2025",
    description:
      "Developed AI-powered workflows, agentic systems, prompt engineering pipelines and automation solutions using modern Generative AI technologies.",
  },

  {
    role: "Campus Ambassador",
    organization: "Guesss India",
    duration: "2025",
    description:
      "Represented the organization across campus initiatives, outreach campaigns, student engagement programs and professional networking activities.",
  },
];

function About() {
  return (
    <section
      id="roles"
      className="py-32"
    >
      <div className="container-width">

        <div className="text-center mb-20">

          <p className="font-mono text-cyan-400 mb-4">
            $ cat leadership.log
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
            Leadership &
            Contributions
          </h2>

          <p
            className="
            text-gray-400
            max-w-3xl
            mx-auto
            text-lg
          "
          >
            Leadership roles, research engagements,
            technical communities and professional
            initiatives that contributed to my
            growth as an AI researcher and engineer.
          </p>

        </div>

        <div className="grid gap-8">

          {activities.map((item, index) => (
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

                  <div
                    className="
                    w-12
                    h-1
                    bg-gradient-to-r
                    from-red-500
                    to-cyan-400
                    mb-5
                  "
                  />

                  <h3
                    className="
                    text-2xl
                    font-bold
                    text-white
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
                  whitespace-nowrap
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
                text-lg
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