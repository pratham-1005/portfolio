import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const init = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      className="fixed inset-0 -z-10"
      init={init}
      options={{
        background: { color: "#000" },
        fpsLimit: 60,
        particles: {
          color: { value: "#ff6a00" },
          links: {
            enable: true,
            color: "#ff6a00",
            opacity: 0.15,
          },
          move: {
            enable: true,
            speed: 0.6,
          },
          number: {
            value: 40,
          },
          size: {
            value: 1,
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;