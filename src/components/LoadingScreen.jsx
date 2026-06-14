import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div
      className="
      fixed
      inset-0
      bg-black
      flex
      items-center
      justify-center
      z-[9999]
    "
    >
      <div className="text-center">

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
          text-5xl
          md:text-7xl
          font-black
          font-mono
          bg-gradient-to-r
          from-red-500
          via-pink-500
          to-cyan-400
          text-transparent
          bg-clip-text
        "
        >
          PRATHAM_AI.exe
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
          mt-6
          text-red-400
          font-mono
        "
        >
          Initializing Neural Systems...
        </motion.p>

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "320px",
          }}
          transition={{
            duration: 2,
          }}
          className="
          h-1
          mt-8
          mx-auto
          rounded-full
          bg-gradient-to-r
          from-red-500
          to-cyan-400
        "
        />

      </div>
    </div>
  );
}

export default LoadingScreen;