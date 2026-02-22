export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for Projects
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter">
            Selman Emre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Erol</span>
          </h1>
          <div className="space-y-4 max-w-lg">
            <p className="text-xl sm:text-2xl font-semibold text-slate-300">Mobile Developer (Flutter & Swift)</p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              Engineering scalable, high-performance mobile applications with clean architecture and measurable impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 group transition-all"
            >
              View Projects
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Selman%20Emre%20Erol-Cv%20Eng.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-700">
            <div className="absolute top-0 w-full h-7 bg-slate-700 flex justify-center items-end pb-1">
              <div className="w-16 h-4 bg-slate-900 rounded-full" />
            </div>
            <div className="w-full h-full bg-gradient-to-br from-primary/40 to-accent-blue/40 p-4 pt-10">
              <div className="w-full h-full rounded-2xl bg-slate-900/80 backdrop-blur-sm p-4 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse" />
                <div className="h-4 w-3/4 bg-white/10 rounded" />
                <div className="h-32 w-full bg-white/5 rounded-xl border border-white/10" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-20 bg-white/5 rounded-lg" />
                  <div className="h-20 bg-white/5 rounded-lg" />
                </div>
                <div className="h-4 w-1/2 bg-white/10 rounded" />
                <div className="h-10 w-full bg-primary rounded-lg mt-auto" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-10 md:left-20 w-[220px] h-[440px] sm:w-[240px] sm:h-[480px] bg-slate-800 rounded-[2.5rem] border-[6px] border-slate-700 shadow-2xl overflow-hidden -rotate-12 hover:rotate-0 transition-transform duration-700 z-10 hidden sm:flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-6xl opacity-20">flutter_dash</span>
          </div>
        </div>
      </div>
    </section>
  )
}
