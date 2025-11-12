export default function GradientBG() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(251,146,60,0.25),transparent)] blur-2xl" />
      <div className="absolute -bottom-40 right-1/3 h-[500px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.1),transparent)] blur-2xl" />
    </div>
  )
}
