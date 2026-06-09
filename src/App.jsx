import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { translations } from './data'

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = translations[lang]

  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t.nav} />
      <main className="relative">
        <div className="blob top-[-10%] left-[-10%]" />
        <div className="blob bottom-[20%] right-[-10%]" />
        <Hero t={t.hero} />
        <About t={t.about} />
        <Stack t={t.stack} />
        <Projects t={t.projects} />
        <Experience t={t.experience} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  )
}

export default App
