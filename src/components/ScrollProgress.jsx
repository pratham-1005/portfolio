import { useEffect, useState } from "react";

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (scrollTop / height) * 100;

      setWidth(progress);
    };

    window.addEventListener(
      "scroll",
      updateScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );
  }, []);

  return (
    <div
      className="
      fixed
      top-0
      left-0
      w-full
      h-[3px]
      z-[999]
      "
    >
      <div
        className="
        h-full
        bg-cyan-400
        "
        style={{
          width: `${width}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgress;