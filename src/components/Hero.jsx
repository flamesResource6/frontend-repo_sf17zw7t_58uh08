import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Now onboarding pilot teams
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight text-white">
              Automate the busywork. Scale what matters.
            </h1>
            <p className="mt-4 text-lg text-white/80">
              We orchestrate AI agents across your tools to remove manual steps, reduce errors, and ship faster. From intake to delivery, your workflows run themselves.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition-colors">
                Get a live demo
              </a>
              <a href="#features" className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition-colors">
                Explore features
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">
              SOC2-ready • Private deployments • No-code builder
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950"></div>
    </section>
  )
}
