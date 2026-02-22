const entries = [
  {
    title: 'Software Engineering Intern',
    company: 'Ateş Wind Power',
    location: 'İzmir, Türkiye',
    period: 'Oct 2025 – Nov 2025',
    color: 'primary',
    points: [
      'AI-powered receipt scanning app (Flutter) with TensorFlow docTR for on-device OCR.',
      'Full-stack license tracking module: React frontend, Node.js backend, RESTful APIs.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'ESBAŞ',
    location: 'İzmir, Türkiye',
    period: 'Jul 2024 – Sep 2024',
    color: 'accent-blue',
    points: [
      'Online event participation module with React and .NET.',
      'Refined UI for registration flow; experience in Microsoft ecosystem and backend integration.',
    ],
  },
  {
    title: 'B.Sc. Computer Engineering',
    company: 'Trakya University',
    location: '',
    period: 'Oct 2021 – June 2025',
    color: 'slate',
    points: [],
    subtitle: 'Focus on Mobile Application Development, on-device AI, and software architecture.',
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Professional Path</h2>
          <p className="text-slate-400">A timeline of engineering growth and hands-on experience.</p>
        </div>
        <div className="relative space-y-12">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent-blue to-transparent" />
          {entries.map(({ title, company, location, period, color, points, subtitle }) => (
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
