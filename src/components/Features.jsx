export default function Features() {
  const features = [
    {
      title: 'Workflow builder',
      desc: 'Drag-and-drop steps with triggers, AI actions, and human approvals. Versioning and rollback built in.',
    },
    {
      title: 'Agent orchestration',
      desc: 'Coordinate multiple AI agents that talk to your tools using secure connectors and guardrails.',
    },
    {
      title: 'Data-aware automations',
      desc: 'Ground actions in your CRM, ticketing, and docs. Built-in retrieval, parsing, and validation.',
    },
    {
      title: 'Human-in-the-loop',
      desc: 'Route edge cases for review with clear diffs, context, and one-click approvals.',
    },
    {
      title: 'Observability',
      desc: 'Live runs, step timings, retries, and audit log so you can trust what’s shipping.',
    },
    {
      title: 'Security by default',
      desc: 'SSO, RBAC, SOC2, and zero data retention options for sensitive workflows.',
    },
  ]

  return (
    <section id="features" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-white/90">
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
