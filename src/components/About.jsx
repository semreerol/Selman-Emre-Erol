import { profileImage } from '../data'

export default function About({ t }) {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="glass p-8 md:p-16 rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <span className="material-symbols-outlined text-[12rem]">person</span>
          </div>
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20 scale-125" />
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary p-1 overflow-hidden">
                  <img
                    alt="Selman Emre Erol"
                    className="w-full h-full object-cover rounded-full"
                    src={profileImage}
                    onError={(e) => { e.target.src = 'https://placehold.co/400x400/1e293b/833cf6?text=SEE' }}
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">{t.title}</h3>
                <p className="text-primary text-sm font-medium">{t.subtitle}</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">{t.header}</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t.desc1}
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t.desc2}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {t.stats.map((stat, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                    <span className="block text-2xl font-bold text-primary">{stat.value}</span>
                    <span className="text-xs uppercase text-slate-500 font-bold">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
