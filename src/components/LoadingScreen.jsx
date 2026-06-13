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

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "280px" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="
          h-1
          bg-gradient-to-r
          from-red-500
          via-pink-500
          to-cyan-400
          rounded-full
          mx-auto
        "
        />

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
          text-4xl
          md:text-6xl
          font-black
          mt-10
          bg-gradient-to-r
          from-red-500
          via-pink-500
          to-cyan-400
          text-transparent
          bg-clip-text
        "
        >
          PRATHAM MITTAL
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="
          mt-5
          font-mono
          text-cyan-400
        "
        >
          booting neural_core.exe...
        </motion.p>

      </div>
    </div>
  );
}

export default LoadingScreen;