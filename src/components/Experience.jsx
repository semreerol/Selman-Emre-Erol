export default function Experience({ t }) {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">{t.title}</h2>
          <p className="text-slate-400">{t.description}</p>
        </div>
        <div className="relative space-y-12">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent-blue to-transparent" />
          {t.items.map(({ title, company, location, period, color, points, subtitle }) => (
            <div key={company + period} className="relative pl-20 group">
              <div
                className={`absolute left-6 top-1 w-4 h-4 rounded-full ring-4 transition-transform group-hover:scale-125 ${
                  color === 'primary'
                    ? 'bg-primary ring-primary/20'
                    : color === 'accent-blue'
                    ? 'bg-slate-700 ring-slate-800 group-hover:bg-accent-blue'
                    : 'bg-slate-700 ring-slate-800'
                }`}
              />
              <div className="glass p-8 rounded-2xl space-y-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <span className="text-sm font-bold text-slate-500">{period}</span>
                </div>
                <p className={`font-medium ${color === 'primary' ? 'text-primary' : color === 'accent-blue' ? 'text-accent-blue' : 'text-slate-400'}`}>
                  {company}
                  {location && ` · ${location}`}
                </p>
                {subtitle && <p className="text-slate-500 text-sm italic">{subtitle}</p>}
                <ul className="space-y-3 text-slate-400 text-sm">
                  {points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className={`material-symbols-outlined text-base flex-shrink-0 ${color === 'primary' ? 'text-primary' : 'text-accent-blue'}`}>
                        check_circle
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
