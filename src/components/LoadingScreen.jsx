import { useEffect, useState } from "react";

const messages = [
  "Initializing Neural Core...",
  "Loading AI Modules...",
  "Connecting Knowledge Graph...",
  "Launching Portfolio...",
];

function LoadingScreen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev < messages.length - 1
          ? prev + 1
          : prev
      );
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
      h-screen
      bg-black
      flex
      flex-col
      justify-center
      items-center
      "
    >
      <div className="font-mono text-cyan-400 text-xl">

        {messages[index]}

      </div>

      <div
        className="
        mt-10
        w-[300px]
        h-[5px]
        bg-white/10
        rounded-full
        overflow-hidden
        "
      >
        <div
          className="
          h-full
          bg-cyan-400
          animate-pulse
          "
          style={{
            width: `${(index + 1) * 25}%`,
          }}
        />
      </div>
    </div>
  );
}

export default LoadingScreen;