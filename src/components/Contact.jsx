import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
    >
      <div className="container-width">

        <div className="text-center mb-20">

          <p className="font-mono text-cyan-400 mb-4">
            $ establish_connection
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
            Let's Build
            <br />
            Something Intelligent
          </h2>

          <p
            className="
            text-gray-400
            max-w-3xl
            mx-auto
            text-lg
            leading-relaxed
          "
          >
            Interested in Artificial Intelligence,
            Machine Learning, Generative AI,
            Data Science or research collaborations?
            I'm always open to discussing innovative
            projects, internships, research opportunities
            and impactful ideas.
          </p>

        </div>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-8
        "
        >

          {/* LEFT */}

          <motion.div
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
            className="
            bg-black/70
            backdrop-blur-xl
            border
            border-red-500/20
            rounded-3xl
            p-8
          "
          >

            <p className="text-red-400 font-mono mb-4">
              CONTACT INFORMATION
            </p>

            <h3
              className="
              text-3xl
              font-bold
              mb-8
            "
            >
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-red-400 font-mono text-sm mb-2">
                  EMAIL
                </p>

                <a
                  href="mailto:YOUR_EMAIL@gmail.com"
                  className="
                  text-xl
                  text-white
                  hover:text-red-400
                  transition
                "
                >
                  parv.m1005@gmail.com
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-mono text-sm mb-2">
                  LINKEDIN
                </p>

                <a
                  href="www.linkedin.com/in/pratham-mittal-6a146a309L"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  text-xl
                  text-white
                  hover:text-cyan-400
                  transition
                "
                >
                  LinkedIn Profile
                </a>
              </div>

              <div>
                <p className="text-red-400 font-mono text-sm mb-2">
                  GITHUB
                </p>

                <a
                  href="YOUR_GITHUB_URL"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  text-xl
                  text-white
                  hover:text-red-400
                  transition
                "
                >
                  GitHub Repository
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-mono text-sm mb-2">
                  LOCATION
                </p>

                <p className="text-xl text-white">
                  Guwahati, India
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
            bg-black/70
            backdrop-blur-xl
            border
            border-cyan-500/20
            rounded-3xl
            p-8
          "
          >

            <p className="text-cyan-400 font-mono mb-4">
              CURRENT STATUS
            </p>

            <h3
              className="
              text-3xl
              font-bold
              mb-6
            "
            >
              Open For Opportunities
            </h3>

            <p
              className="
              text-gray-400
              leading-relaxed
              mb-8
            "
            >
              Currently exploring opportunities
              in Artificial Intelligence,
              Machine Learning,
              Generative AI,
              Data Science,
              Research Internships,
              Software Engineering
              and Agentic AI Systems.
            </p>

            <div
              className="
              flex
              flex-wrap
              gap-4
            "
            >

              <span className="px-4 py-2 rounded-xl border border-red-500/30 text-red-400">
                AI Research
              </span>

              <span className="px-4 py-2 rounded-xl border border-cyan-500/30 text-cyan-400">
                Machine Learning
              </span>

              <span className="px-4 py-2 rounded-xl border border-red-500/30 text-red-400">
                Generative AI
              </span>

              <span className="px-4 py-2 rounded-xl border border-cyan-500/30 text-cyan-400">
                Data Science
              </span>

              <span className="px-4 py-2 rounded-xl border border-red-500/30 text-red-400">
                Research
              </span>

              <span className="px-4 py-2 rounded-xl border border-cyan-500/30 text-cyan-400">
                Software Engineering
              </span>

            </div>

            <div
              className="
              mt-10
              border-t
              border-white/10
              pt-8
            "
            >
              <p className="text-gray-500">
                Building intelligent systems,
                research-driven solutions and
                next-generation AI applications.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;