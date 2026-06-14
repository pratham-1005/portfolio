import { motion } from "framer-motion";

const experiences = [
{
title: "Research Intern",
organization: "National Institute of Technology Silchar",
duration: "May 2026 - August 2026",
description:
"Developed machine learning surrogate models using XGBoost, SVR and GPR for predicting thermal behavior in continuous casting processes. Worked with 15,952+ simulation samples generated using COMSOL Multiphysics.",
tech: [
"Python",
"XGBoost",
"SVR",
"GPR",
"COMSOL",
"Machine Learning",
],
},

{
title: "Agentic AI Intern",
organization: "Qoherenz",
duration: "October 2025 - February",
description:
"Built agentic AI workflows, prompt engineering pipelines, multi-agent systems and AI-powered automation solutions for real-world business applications.",
tech: [
"Generative AI",
"LLMs",
"Agentic AI",
"Prompt Engineering",
"Automation",
],
},

{
title: "Coordinator",
organization: "Coding Club, IIT Guwahati",
duration: "March 2025 - May 2025",
description:
"Coordinated technical activities, coding events, workshops and student engagement initiatives within the Science and Technology ecosystem of IIT Guwahati.",
tech: [
"Leadership",
"Community Building",
"Event Management",
"Communication",
],
},

{
title: "Campus Ambassador",
organization: "Guesss India",
duration: "May 2025 - October 2025",
description:
"Represented the organization across campus initiatives, outreach programs and promotional activities while strengthening professional communication and networking skills.",
tech: [
"Brand Ambassadorship",
"Leadership",
"Marketing",
"Networking",
],
},
];

function Experience() {
return ( <section
   id="experience"
   className="py-24"
 > <div className="container-width">

```
    <div className="text-center mb-20">

      <p className="font-mono text-cyan-400 mb-4">
        $ cat experience.log
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
        Experience
      </h2>

      <p
        className="
        text-gray-400
        max-w-3xl
        mx-auto
        text-lg
      "
      >
        Research, leadership, AI engineering and
        community-building experiences across
        academia and industry.
      </p>

    </div>

    <div className="space-y-10">

      {experiences.map((exp, index) => (
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
            delay: index * 0.1,
          }}
          className="
          relative
          bg-black/70
          backdrop-blur-xl
          border
          border-red-500/20
          rounded-3xl
          p-8
          md:p-10
          hover:border-red-500/50
          hover:translate-y-[-4px]
          transition-all
          duration-300
        "
        >

          <div
            className="
            absolute
            left-0
            top-0
            bottom-0
            w-1
            rounded-l-3xl
            bg-gradient-to-b
            from-red-500
            to-cyan-400
          "
          />

          <div
            className="
            flex
            flex-col
            lg:flex-row
            lg:justify-between
            gap-6
          "
          >

            <div>

              <h3
                className="
                text-3xl
                font-bold
                text-white
              "
              >
                {exp.title}
              </h3>

              <p
                className="
                text-red-400
                font-mono
                mt-3
                text-lg
              "
              >
                {exp.organization}
              </p>

            </div>

            <div
              className="
              text-cyan-400
              font-mono
              text-lg
            "
            >
              {exp.duration}
            </div>

          </div>

          <p
            className="
            text-gray-400
            mt-8
            leading-relaxed
            text-lg
          "
          >
            {exp.description}
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-3
            mt-8
          "
          >
            {exp.tech.map((tech) => (
              <span
                key={tech}
                className="
                px-4
                py-2
                rounded-xl
                border
                border-red-500/30
                bg-red-500/5
                text-red-400
                text-sm
                font-mono
              "
              >
                {tech}
              </span>
            ))}
          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

);
}

export default Experience;