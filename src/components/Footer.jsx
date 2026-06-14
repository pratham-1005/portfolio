function Footer() {
  return (
    <footer
      className="
      py-14
      mt-24
      border-t
      border-red-500/10
    "
    >
      <div className="container-width">

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        "
        >
          <div>

            <h3
              className="
              text-3xl
              font-black
              bg-gradient-to-r
              from-red-500
              via-pink-500
              to-cyan-400
              text-transparent
              bg-clip-text
            "
            >
              Pratham Mittal
            </h3>

            <p className="text-gray-500 mt-3">
              AI Researcher • Machine Learning Engineer • Generative AI Developer
            </p>

          </div>

          <div
            className="
            font-mono
            text-gray-500
          "
          >
            © 2026 • Built with React • Tailwind • Framer Motion
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;