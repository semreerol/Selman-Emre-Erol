const PLACEHOLDER_IMG = 'https://placehold.co/600x400/1e293b/64748b?text=Proje'

export default function Projects({ t }) {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">{t.title}</h2>
            <p className="text-slate-400 max-w-lg">
              {t.description}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map(({ title, description, tags, metric, image, link }) => (
            <div key={title} className="glass group rounded-3xl overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden relative bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                <img
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={image}
                  onError={(e) => { e.target.src = PLACEHOLDER_IMG }}
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2 flex-wrap">
                  {tags.map((tag) => (
                    <span key={tag} className="bg-primary/90 text-white text-[10px] font-bold px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <span className="text-green-400 text-xs font-bold whitespace-nowrap">{metric}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm font-bold text-center block">
                    {t.readBtn}
                  </a>
                ) : (
                  <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm font-bold">
                    {t.readBtn}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
