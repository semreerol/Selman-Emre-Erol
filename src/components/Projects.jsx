const projects = [
  {
    title: 'Parollas',
    description: 'High-security web app for storing notes and passwords with AES-256 encryption. RESTful API with Flask and PostgreSQL.',
    tags: ['React', 'PostgreSQL', 'Flask'],
    metric: 'AES-256',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcuYnSSEfxrOEhvfYlArxOaemBPhgtsU10t50xFZ2RsVjUaI-4z-Kl2D4WzYOIKkCuCcMkGhodu_2HQ7HOakSV0szAfugurW446SpcNAuyHTUDlE0clY0h8cfTSfCmLQ5bqNIs0yCbZQkGZYZlka9HlTDe-oRQw2Eb-lVsMfeGfv_uCpLeuTn8beR-qMcNm6ztOomo4K7yYz2cnQE4HYzda1KhHe2ltQXA24VjbKeBjqWG02BwzH7MMkVHgg-XnOkk876jm767ftSj',
  },
  {
    title: 'Qbid',
    description: 'Silent auction mobile app (in development). High-performance RESTful API with FastAPI and Flutter frontend.',
    tags: ['Flutter', 'FastAPI'],
    metric: 'In Development',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM4p1iiOp-87ECLEYV9CzWxOC7QLBTZTiJqCh7pb3n97XqN_B6ntQnPICdBUCw3GNpTARiTJlALemThN59av_ikZt4mHDGljketDAiecvuW8XIeK5iWoLL9XjGrBO_qrTq60rFWZ1vbOGu3GXromY-dL59OHv1IYQeySU65wdvQtaq4EbPkCds1qvu4igLARL4V-xKRyE34OI4rLTxCqSWA83KRlln0A07INkeGDksnXOWD2Tz_7V7nh4VcxiDzeBOEezM7l-pKXHj',
  },
  {
    title: 'Handwriting Recognition App',
    description: 'Android app for handwritten text recognition with Python OCR backend. Kotlin UI and secure backend communication.',
    tags: ['Kotlin', 'Flask', 'PostgreSQL'],
    metric: 'OCR',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZXE5W5vl9H94ho5OHeLfir-ZUYDNPoABhfKLQmZhfvId59gl_Grs_fR3v6h83yoZ08hu1wMs1gAgH3RYrJm7JqNJrNIg2UJyel8ReynwcS9cHPQMfHm5meN8z6F4rwTssOM2ucDTGJ5sKNsAeFAPNIBMvHTV8dF3pc0-CvVzlJ3y33DcqVdzc_Ms6egWxO4S2k63re2vzyLNFsTDGmhrE4GDrj1OZaTWsaT2HN1q9yxXAJTihMHP3Z6JB24hT162bEaGpjbRIA9Hm',
  },
  {
    title: 'Akıllı Tebeşir (Smart Chalk)',
    description: 'Flutter-based edtech app for digitizing board notes. Firebase auth and real-time database.',
    tags: ['Flutter', 'Firebase'],
    metric: 'EdTech',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZXE5W5vl9H94ho5OHeLfir-ZUYDNPoABhfKLQmZhfvId59gl_Grs_fR3v6h83yoZ08hu1wMs1gAgH3RYrJm7JqNJrNIg2UJyel8ReynwcS9cHPQMfHm5meN8z6F4rwTssOM2ucDTGJ5sKNsAeFAPNIBMvHTV8dF3pc0-CvVzlJ3y33DcqVdzc_Ms6egWxO4S2k63re2vzyLNFsTDGmhrE4GDrj1OZaTWsaT2HN1q9yxXAJTihMHP3Z6JB24hT162bEaGpjbRIA9Hm',
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Case Studies</h2>
            <p className="text-slate-400 max-w-lg">
              Selected works: security, APIs, OCR, and mobile architecture.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(({ title, description, tags, metric, image }) => (
            <div key={title} className="glass group rounded-3xl overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden relative bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                <img
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={image}
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
                <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm font-bold">
                  Read Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
