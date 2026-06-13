function Footer() {
  return (
    <footer
      className="
      py-10
      border-t
      border-white/10
      mt-20
    "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
        "
        >
          <div>
            <h3
              className="
              text-2xl
              font-black
              bg-gradient-to-r
              from-red-500
              to-cyan-400
              text-transparent
              bg-clip-text
            "
            >
              Pratham Mittal
            </h3>

            <p className="text-gray-500 mt-2">
              AI Researcher • Machine Learning Engineer
            </p>
          </div>

          <div
            className="
            font-mono
            text-gray-500
          "
          >
            © 2026 • Built with React & Tailwind
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;