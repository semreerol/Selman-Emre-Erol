const base = import.meta.env.BASE_URL
const cvUrl = `${base}Selman%20Emre%20Erol-Cv%20Eng.pdf`

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white">developer_mode_tv</span>
          </div>
          <span className="text-xl font-bold tracking-tight">SEE.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#stack">Stack</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#experience">Experience</a>
          <a
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  )
}
