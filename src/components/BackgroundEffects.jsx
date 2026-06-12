function BackgroundEffects() {
  return (
    <>
      {/* Main Background */}
      <div className="fixed inset-0 bg-[#050505] -z-50" />

      {/* Grid Overlay */}
      <div
        className="
        fixed
        inset-0
        opacity-[0.06]
        -z-40
        bg-[linear-gradient(rgba(0,229,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,.6)_1px,transparent_1px)]
        bg-[size:50px_50px]
        "
      />

      {/* Cyan Orb */}
      <div
        className="
        fixed
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-cyan-500/10
        rounded-full
        blur-[180px]
        -z-30
        "
      />

      {/* Violet Orb */}
      <div
        className="
        fixed
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-violet-500/10
        rounded-full
        blur-[180px]
        -z-30
        "
      />

      {/* Center Glow */}
      <div
        className="
        fixed
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        bg-cyan-500/[0.03]
        rounded-full
        blur-[250px]
        -z-30
        "
      />
    </>
  );
}

export default BackgroundEffects;