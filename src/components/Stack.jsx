const tools = [
  { name: 'Flutter', icon: 'flutter_dash', iconClass: 'text-primary', bgClass: 'bg-primary/10', borderClass: 'hover:border-primary/50' },
  { name: 'Swift', icon: 'sprint', iconClass: 'text-accent-blue', bgClass: 'bg-accent-blue/10', borderClass: 'hover:border-accent-blue/50' },
  { name: 'Dart', icon: 'code', iconClass: 'text-yellow-500', bgClass: 'bg-yellow-500/10', borderClass: 'hover:border-yellow-500/50' },
  { name: 'Firebase', icon: 'local_fire_department', iconClass: 'text-orange-500', bgClass: 'bg-orange-500/10', borderClass: 'hover:border-orange-500/50' },
  { name: 'REST APIs', icon: 'api', iconClass: 'text-primary', bgClass: 'bg-primary/10', borderClass: 'hover:border-primary/50' },
  { name: 'TensorFlow / OCR', icon: 'psychology', iconClass: 'text-green-500', bgClass: 'bg-green-500/10', borderClass: 'hover:border-green-500/50' },
  { name: 'Git', icon: 'rebase', iconClass: 'text-slate-400', bgClass: 'bg-slate-400/10', borderClass: 'hover:border-slate-400/50' },
  { name: 'PostgreSQL', icon: 'database', iconClass: 'text-primary', bgClass: 'bg-primary/10', borderClass: 'hover:border-primary/50' },
  { name: 'React', icon: 'code', iconClass: 'text-accent-blue', bgClass: 'bg-accent-blue/10', borderClass: 'hover:border-accent-blue/50' },
]

export default function Stack() {
  return (
    <section className="py-20 px-6 bg-slate-900/30" id="stack">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">The Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Languages: Dart, Swift, Kotlin, Python, JavaScript. Frameworks: Flutter, React, Node, Flask, .NET. Tools I use to build robust mobile and web applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map(({ name, icon, iconClass, bgClass, borderClass }) => (
            <div
              key={name}
              className={`glass p-6 rounded-2xl transition-all group cursor-default ${borderClass}`}
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${bgClass}`}>
                <span className={`material-symbols-outlined ${iconClass}`}>{icon}</span>
              </div>
              <p className="text-sm font-bold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
