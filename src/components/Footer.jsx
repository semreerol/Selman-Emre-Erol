export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-background-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[14px]">developer_mode_tv</span>
            </div>
            <span className="font-bold tracking-tight">SEE. Portfolio</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Selman Emre Erol. All rights reserved.</p>
        </div>
        <div className="flex gap-8 text-slate-400 text-sm">
          <a className="hover:text-primary transition-colors" href="https://github.com/semreerol" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/selman-emre-erol-45b981233" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="text-slate-500 text-xs font-medium">Built with a clean architecture mindset.</p>
      </div>
    </footer>
  )
}
