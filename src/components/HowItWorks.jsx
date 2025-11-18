export default function HowItWorks() {
  const steps = [
    {
      k: '01',
      t: 'Map your process',
      d: 'Connect your tools and outline the steps. Choose triggers like new tickets, form fills, or inbound emails.'
    },
    {
      k: '02',
      t: 'Compose with blocks',
      d: 'Use AI actions, conditionals, and approvals to build flows in minutes—no engineering sprint needed.'
    },
    {
      k: '03',
      t: 'Run and observe',
      d: 'Ship confidently with guardrails, observability, and a full audit trail for every run.'
    },
  ]

  return (
    <section id="how-it-works" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
              <div className="text-white/50 text-sm">{s.k}</div>
              <h3 className="mt-2 text-white font-semibold text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
