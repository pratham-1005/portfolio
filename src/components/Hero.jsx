import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";

const roles = [
  "AI Researcher",
  "Machine Learning Engineer",
  "Generative AI Developer",
  "Agentic AI Builder",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="font-mono text-cyan-400 mb-4">
            ● IIT GUWAHATI | DATA SCIENCE & AI
          </p>

          <p className="font-mono text-red-500 mb-4">
            $ whoami
          </p>

          <h1
            className="
            text-6xl
            md:text-8xl
            font-black
            leading-none
            mb-6
            bg-gradient-to-r
            from-red-500
            via-pink-500
            to-cyan-400
            text-transparent
            bg-clip-text
          "
          >
            Pratham
            <br />
            Mittal
          </h1>

          <motion.h2
            key={roleIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
            text-2xl
            md:text-3xl
            text-gray-300
            font-mono
            mb-8
          "
          >
            {roles[roleIndex]}
          </motion.h2>

          <p
            className="
            text-gray-400
            leading-relaxed
            text-lg
            max-w-2xl
          "
          >
            Building intelligent systems at the
            intersection of Machine Learning,
            Generative AI, Agentic Workflows,
            Scientific Computing and Data Science.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="
              px-8
              py-4
              rounded-xl
              bg-red-600
              hover:bg-red-500
              transition-all
              shadow-[0_0_35px_rgba(255,23,68,0.4)]
            "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="
              px-8
              py-4
              rounded-xl
              border
              border-cyan-500
              hover:bg-cyan-500/10
              transition-all
            "
            >
              Download Resume
            </a>

          </div>

          <div className="grid grid-cols-2 gap-5 mt-12">

            <div className="glass rounded-xl p-5">
              <h3 className="text-red-400 font-mono">
                Research
              </h3>

              <p className="text-gray-300 mt-2">
                NIT Silchar
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <h3 className="text-red-400 font-mono">
                Education
              </h3>

              <p className="text-gray-300 mt-2">
                IIT Guwahati
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <h3 className="text-red-400 font-mono">
                Projects
              </h3>

              <p className="text-gray-300 mt-2">
                AI • ML • DS
              </p>
            </div>

            <div className="glass rounded-xl p-5">
              <h3 className="text-red-400 font-mono">
                Certifications
              </h3>

              <p className="text-gray-300 mt-2">
                10+
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-red-500/20
              blur-3xl
              scale-125
            "
            />

            <img
              src={profileImg}
              alt="Pratham Mittal"
              className="
              relative
              w-[320px]
              h-[320px]
              md:w-[420px]
              md:h-[420px]
              object-cover
              rounded-full
              border-4
              border-red-500/30
              shadow-[0_0_80px_rgba(255,23,68,0.4)]
            "
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;