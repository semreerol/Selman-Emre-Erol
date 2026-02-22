export default function Contact() {
  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] p-8 md:p-20 grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Let's build <br />
              <span className="text-primary">impactful</span> experiences.
            </h2>
            <p className="text-slate-400 text-lg">
              Have an idea for a mobile or web app? Or looking to add a technical powerhouse to your team? Let's talk.
            </p>
            <div className="space-y-6">
              <a
                href="mailto:semreeroll@gmail.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Email</p>
                  <p className="text-lg font-bold">semreeroll@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/selman-emre-erol-45b981233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">LinkedIn</p>
                  <p className="text-lg font-bold">linkedin.com/in/selman-emre-erol</p>
                </div>
              </a>
              <a
                href="https://github.com/semreerol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">GitHub</p>
                  <p className="text-lg font-bold">github.com/semreerol</p>
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
                <label className="text-xs font-bold text-slate-500 uppercase px-1">Full Name</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-0 transition-colors text-white placeholder-slate-500"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase px-1">Email Address</label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-0 transition-colors text-white placeholder-slate-500"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase px-1">Message</label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-0 transition-colors text-white placeholder-slate-500 resize-none"
                placeholder="Tell me about your project..."
                rows={4}
              />
            </div>
            <button
              className="w-full py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-black text-lg shadow-xl shadow-primary/20 transition-all"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
