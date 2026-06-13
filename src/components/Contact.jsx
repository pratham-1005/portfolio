import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="font-mono text-cyan-400 mb-4">
          $ establish_connection
        </p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          text-6xl
          md:text-8xl
          font-black
          mb-10
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
          Something Smart.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
          text-gray-400
          text-xl
          max-w-3xl
          mb-16
          leading-relaxed
        "
        >
          Interested in AI Research, Machine Learning,
          Generative AI, Data Science or intelligent systems?
          I'm always open to discussing innovative ideas,
          collaborations and opportunities.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.a
            whileHover={{
              y: -8,
            }}
            href="mailto:YOUR_EMAIL"
            className="
            bg-black/70
            border
            border-red-500/30
            rounded-3xl
            p-8
            backdrop-blur-xl
            hover:border-red-500
            transition-all
          "
          >
            <p className="text-red-400 font-mono mb-3">
              EMAIL
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Get In Touch
            </h3>

            <p className="text-gray-400">
              Send me an email for opportunities,
              collaborations or research discussions.
            </p>
          </motion.a>

          <motion.a
            whileHover={{
              y: -8,
            }}
            href="YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="
            bg-black/70
            border
            border-cyan-500/30
            rounded-3xl
            p-8
            backdrop-blur-xl
            hover:border-cyan-500
            transition-all
          "
          >
            <p className="text-cyan-400 font-mono mb-3">
              LINKEDIN
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Professional Network
            </h3>

            <p className="text-gray-400">
              Connect with me professionally
              and follow my AI journey.
            </p>
          </motion.a>

          <motion.a
            whileHover={{
              y: -8,
            }}
            href="YOUR_GITHUB"
            target="_blank"
            rel="noreferrer"
            className="
            bg-black/70
            border
            border-violet-500/30
            rounded-3xl
            p-8
            backdrop-blur-xl
            hover:border-violet-500
            transition-all
          "
          >
            <p className="text-violet-400 font-mono mb-3">
              GITHUB
            </p>

            <h3 className="text-2xl font-bold mb-4">
              View Projects
            </h3>

            <p className="text-gray-400">
              Explore source code,
              research projects and AI applications.
            </p>
          </motion.a>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          mt-16
          border
          border-red-500/20
          rounded-3xl
          p-8
          bg-black/60
          backdrop-blur-xl
        "
        >
          <p className="font-mono text-red-400 mb-3">
            STATUS
          </p>

          <h3 className="text-3xl font-bold mb-4">
            Currently Open For
          </h3>

          <div className="flex flex-wrap gap-4 mt-6">

            <span className="px-4 py-2 border border-red-500/30 rounded-xl text-red-400">
              AI Research
            </span>

            <span className="px-4 py-2 border border-cyan-500/30 rounded-xl text-cyan-400">
              Machine Learning
            </span>

            <span className="px-4 py-2 border border-violet-500/30 rounded-xl text-violet-400">
              Generative AI
            </span>

            <span className="px-4 py-2 border border-red-500/30 rounded-xl text-red-400">
              Data Science
            </span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;