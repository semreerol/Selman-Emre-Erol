export default function Nav({ lang, setLang, t }) {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white">developer_mode_tv</span>
          </div>
          <span className="text-xl font-bold tracking-tight">SEE.</span>
        </a>
        
        <div className="flex items-center gap-4 md:gap-10">
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">{t.about}</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#stack">{t.stack}</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#projects">{t.projects}</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#experience">{t.experience}</a>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-full">
            <button
              onClick={() => setLang('tr')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                lang === 'tr' ? 'bg-primary text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                lang === 'en' ? 'bg-primary text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <a
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
            href={t.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.downloadCv}
          </a>
        </div>
      </div>
    </nav>
  )
}
