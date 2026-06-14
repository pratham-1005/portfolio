function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 bg-[#020202] -z-50" />

      <div
        className="
        fixed
        inset-0
        opacity-[0.04]
        -z-40
        bg-[linear-gradient(rgba(255,0,60,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,60,.6)_1px,transparent_1px)]
        bg-[size:60px_60px]
      "
      />

      <div
        className="
        fixed
        top-0
        left-0
        w-[600px]
        h-[600px]
        bg-red-500/10
        rounded-full
        blur-[220px]
        -z-30
      "
      />

      <div
        className="
        fixed
        bottom-0
        right-0
        w-[600px]
        h-[600px]
        bg-cyan-500/10
        rounded-full
        blur-[220px]
        -z-30
      "
      />

      <div
        className="
        fixed
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[900px]
        h-[900px]
        bg-red-500/[0.03]
        rounded-full
        blur-[280px]
        -z-30
      "
      />
    </>
  );
}

export default BackgroundEffects;