import { useEffect, useState } from "react";

const links = [
  "About",
  "Experience",
  "Education",
  "Projects",
  "Skills",
  "Certifications",
  "Contact",
];

function Navbar() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-cyan-500/10"
          : ""
      }`}
    >
      <div className="container-width px-6 py-5 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <span className="text-cyan-400">Pratham</span>
          <span className="text-violet-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition-all duration-300 ${
                active === item
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;