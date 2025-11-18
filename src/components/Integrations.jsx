export default function Integrations() {
  const logos = ['Slack', 'Notion', 'GitHub', 'Jira', 'Salesforce', 'Zendesk']
  return (
    <section id="integrations" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 text-center">
          <p className="text-white/70">Works with your stack</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {logos.map((l) => (
              <div key={l} className="rounded-xl border border-white/10 bg-white/5 py-6 text-white/80">
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
