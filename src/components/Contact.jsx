import { contact } from '../data'

export default function Contact({ t }) {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] p-8 md:p-20 grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {t.title} <br />
              <span className="text-primary">{t.titleHighlight}</span> {t.titleEnd}
            </h2>
            <p className="text-slate-400 text-lg">
              {t.description}
            </p>
            <div className="space-y-6">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Email</p>
                  <p className="text-lg font-bold">{contact.email}</p>
                </div>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">LinkedIn</p>
                  <p className="text-lg font-bold">{contact.linkedinLabel}</p>
                </div>
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">GitHub</p>
                  <p className="text-lg font-bold">{contact.githubLabel}</p>
                </div>
              </a>
            </div>
          </div>
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase px-1">{t.form.name}</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-0 transition-colors text-white placeholder-slate-500"
                  placeholder={t.form.namePlaceholder}
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase px-1">{t.form.email}</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-0 transition-colors text-white placeholder-slate-500"
                  placeholder={t.form.emailPlaceholder}
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase px-1">{t.form.message}</label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-0 transition-colors text-white placeholder-slate-500 resize-none"
                placeholder={t.form.messagePlaceholder}
                rows={4}
              />
            </div>
            <button
              className="w-full py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-black text-lg shadow-xl shadow-primary/20 transition-all"
              type="submit"
            >
              {t.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
