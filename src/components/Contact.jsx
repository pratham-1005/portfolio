import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="Contact"
      className="py-32 px-6"
    >
      <div className="container-width">

        <h2 className="text-4xl font-bold mb-12">
          Contact
        </h2>

        <div className="glass glow rounded-3xl p-10">

          <p className="text-cyan-400 text-lg">
            Neural Communication Channels
          </p>

          <h3 className="text-3xl font-bold mt-4">
            Let's Build Something Intelligent
          </h3>

          <p className="text-gray-400 mt-6 max-w-2xl">
            Open to AI Research,
            Machine Learning,
            Generative AI,
            and Data Science opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="
              glass
              rounded-2xl
              p-6
              hover:-translate-y-2
              transition-all
              "
            >
              <FaLinkedin
                size={30}
                className="text-cyan-400"
              />

              <h4 className="font-bold mt-4">
                LinkedIn
              </h4>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="
              glass
              rounded-2xl
              p-6
              hover:-translate-y-2
              transition-all
              "
            >
              <FaGithub
                size={30}
                className="text-cyan-400"
              />

              <h4 className="font-bold mt-4">
                GitHub
              </h4>
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="
              glass
              rounded-2xl
              p-6
              hover:-translate-y-2
              transition-all
              "
            >
              <FaEnvelope
                size={30}
                className="text-cyan-400"
              />

              <h4 className="font-bold mt-4">
                Email
              </h4>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;