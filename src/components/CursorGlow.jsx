import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
  }, []);

  return (
    <div
      className="
      hidden
      md:block
      fixed
      pointer-events-none
      z-50
      "
      style={{
        left: position.x - 120,
        top: position.y - 120,
      }}
    >
      <div
        className="
        w-[240px]
        h-[240px]
        rounded-full
        bg-cyan-500/10
        blur-[90px]
        "
      />
    </div>
  );
}

export default CursorGlow;