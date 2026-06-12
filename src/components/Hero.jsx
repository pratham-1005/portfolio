import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "AI Researcher",
  "Machine Learning Engineer",
  "Generative AI Developer",
  "Multi-Agent Systems Builder",
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
      id="Hero"
      className="min-h-screen flex items-center"
    >
      <div className="container-width px-6">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-cyan-400 tracking-widest mb-5"
        >
          IIT GUWAHATI • AI & DATA SCIENCE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black"
        >
          PRATHAM
          <br />
          MITTAL
        </motion.h1>

        <motion.h2
          key={roleIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-2xl md:text-4xl text-violet-400 font-semibold"
        >
          {roles[roleIndex]}
        </motion.h2>

        <p className="max-w-3xl text-gray-400 mt-8 text-lg leading-relaxed">
          Building intelligent systems at the intersection
          of machine learning, simulation engineering,
          generative AI, and autonomous agent
          architectures.
        </p>

        <div className="flex flex-wrap gap-5 mt-12">

          <a
            href="#Projects"
            className="px-7 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
          >
            View Research
          </a>

          <a
            href="/resume.pdf"
            className="px-7 py-3 rounded-xl border border-cyan-500/30 hover:border-cyan-400"
          >
            Download Resume
          </a>

          <a
            href="#Contact"
            className="px-7 py-3 rounded-xl border border-violet-500/30 hover:border-violet-400"
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;