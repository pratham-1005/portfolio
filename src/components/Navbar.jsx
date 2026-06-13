import { useEffect, useState } from "react";

const navItems = [
  "home",
  "education",
  "experience",
  "projects",
  "roles",
  "skills",
  "certifications",
  "contact",
];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item);
        if (!section) return;

        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActive(item);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className="
      fixed
      top-4
      left-1/2
      -translate-x-1/2
      z-50
      w-[95%]
      max-w-7xl
    "
    >
      <div
        className="
        bg-black/80
        backdrop-blur-xl
        border
        border-cyan-500/30
        rounded-2xl
        px-8
        py-4
        flex
        justify-between
        items-center
        shadow-[0_0_40px_rgba(0,255,255,0.15)]
      "
      >
        <a
          href="#home"
          className="
          text-xl
          font-mono
          font-bold
        "
        >
          <span className="text-cyan-400">{">"}</span>
          <span className="text-cyan-300">
            {" "}
            pratham
          </span>
          <span className="text-violet-400">
            {" "}
            @ ai-lab
          </span>
        </a>

        <div
          className="
          hidden
          lg:flex
          gap-8
          font-mono
        "
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`
              transition-all
              duration-300
              ${
                active === item
                  ? "text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-lg"
                  : "text-gray-400 hover:text-white"
              }
            `}
            >
              ~/{item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;