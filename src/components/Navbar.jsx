import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#integrations', label: 'Integrations' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 text-white font-bold shadow-md">A</span>
            <div>
              <p className="text-white font-semibold leading-none">Axiomate AI</p>
              <p className="text-xs text-white/60 leading-none mt-1">Workflow Automations</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-white transition-colors text-sm">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
              Get a demo
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="mt-2 md:hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-4 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="block text-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90">
              Get a demo
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
