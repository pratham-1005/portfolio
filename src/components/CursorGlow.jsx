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
    <>
      <div
        className="
        pointer-events-none
        fixed
        z-50
        w-96
        h-96
        rounded-full
        blur-3xl
      "
        style={{
          left: position.x - 190,
          top: position.y - 190,
          background:
            "radial-gradient(circle, rgba(255,23,68,0.15), transparent 70%)",
        }}
      />

      <div
        className="
        pointer-events-none
        fixed
        z-50
        w-48
        h-48
        rounded-full
        blur-2xl
      "
        style={{
          left: position.x - 95,
          top: position.y - 95,
          background:
            "radial-gradient(circle, rgba(0,229,255,0.10), transparent 70%)",
        }}
      />
    </>
  );
}

export default CursorGlow;