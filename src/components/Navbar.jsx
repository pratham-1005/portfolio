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

    window.addEventListener(
      "scroll",
      handleScroll
    );

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
      top-5
      left-1/2
      -translate-x-1/2
      z-50
      w-[95%]
      max-w-7xl
    "
    >
      <div
        className="
        bg-black/85
        backdrop-blur-2xl
        border
        border-red-500/20
        rounded-2xl
        px-8
        py-4
        flex
        justify-between
        items-center
        shadow-[0_0_40px_rgba(255,0,60,0.15)]
      "
      >
        <a
          href="#home"
          className="
          font-black
          text-xl
          font-mono
        "
        >
          <span className="text-red-500">
            root@
          </span>

          <span className="text-white">
            pratham
          </span>

          <span className="text-cyan-400">
            :~/portfolio
          </span>
        </a>

        <div
          className="
          hidden
          lg:flex
          gap-4
          font-mono
        "
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`
                px-4
                py-2
                rounded-xl
                transition-all
                duration-300

                ${
                  active === item
                    ? "bg-red-500/15 text-red-400 border border-red-500/20"
                    : "text-gray-400 hover:text-white"
                }
              `}
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