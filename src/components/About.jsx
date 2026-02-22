const profileImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuARrsFy8sl0BiZPg8oSTjUQgUQwVtDFN2m5I2MHbxzF6ndZblxee56F7q7guhloQruNcwgBWdY9WJSyW4i_rpwqTf41Tr5ErY6yMdXZZbtCC8u6LtkbZTXtOliFocvOR54PxXJCGYuYoMsldgEXyOaqDtxfCoNbrcUHT4TXSCr2zCVv41wvQvQ-R84vgS5n3gg-bcpdMtZsY_n0oYV_mq5KzrMgXbpA1firDzq3JfSfjm63kXqfTaTVdznfra8cmdDjatfUpX5X5W0G'

export default function About() {
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
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Engineering Excellence</h3>
                <p className="text-primary text-sm font-medium">Based in Turkey | Remote</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Beyond the Interface</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Computer Engineering graduate from Trakya University with a strong focus on Mobile Application Development. 
                I build modern, cross-platform and native apps using Flutter, Swift, and Kotlin, with experience in on-device AI (TensorFlow/OCR) and clean architecture.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I focus on clean code, scalability, and delivering measurable impact through intuitive user interfaces—whether optimizing state management in Flutter or leveraging native Swift for peak performance.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-2xl font-bold text-primary">5+</span>
                  <span className="text-xs uppercase text-slate-500 font-bold">Projects</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-2xl font-bold text-primary">Flutter & Swift</span>
                  <span className="text-xs uppercase text-slate-500 font-bold">Stack</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-2xl font-bold text-primary">REST & AI</span>
                  <span className="text-xs uppercase text-slate-500 font-bold">Integration</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-2xl font-bold text-primary">GDG</span>
                  <span className="text-xs uppercase text-slate-500 font-bold">Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
