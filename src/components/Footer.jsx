export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold">Axiomate AI</p>
            <p className="text-white/60 text-sm mt-1">Automation platform for modern teams</p>
          </div>
          <a href="mailto:hello@axiomate.ai" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90">
            hello@axiomate.ai
          </a>
        </div>
        <p className="text-white/40 text-xs mt-8">© {new Date().getFullYear()} Axiomate AI. All rights reserved.</p>
      </div>
    </footer>
  )
}
