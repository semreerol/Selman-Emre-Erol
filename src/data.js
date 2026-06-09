/**
 * Site içeriğini bu dosyadan güncelleyebilirsin.
 * Fotoğraf ve proje görselleri için: public/ klasörüne koy, aşağıda dosya adını yaz.
 */

const BASE = import.meta.env.BASE_URL

// Ortak / Değişmeyen veriler
export const profileImage = BASE + 'profile.jpeg'

export const contact = {
  email: 'semreeroll@gmail.com',
  linkedin: 'https://www.linkedin.com/in/selman-emre-erol-45b981233',
  linkedinLabel: 'linkedin.com/in/selman-emre-erol',
  github: 'https://github.com/semreerol',
  githubLabel: 'github.com/semreerol',
}

// Dillere göre yerelleştirilmiş içerikler
export const translations = {
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      projects: 'Projects',
      experience: 'Experience',
      downloadCv: 'Download CV',
      cvUrl: BASE + 'Selman_Emre_Erol_CV_EN.pdf'
    },
    hero: {
      status: 'Available for Projects',
      title: 'Selman Emre',
      lastName: 'Erol',
      role: 'Mobile Developer (Flutter & Swift)',
      description: 'Engineering scalable, high-performance mobile applications with clean architecture and measurable impact.',
      viewProjects: 'View Projects',
      downloadCv: 'Download CV',
      cvUrl: BASE + 'Selman_Emre_Erol_CV_EN.pdf'
    },
    about: {
      title: 'Engineering Excellence',
      subtitle: 'Based in Turkey | Remote',
      header: 'Beyond the Interface',
      desc1: 'Computer Engineering graduate from Trakya University with a strong focus on Mobile Application Development. I build modern, cross-platform and native apps using Flutter, Swift, and Kotlin, with experience in on-device AI (TensorFlow/OCR) and clean architecture.',
      desc2: 'I focus on clean code, scalability, and delivering measurable impact through intuitive user interfaces—whether optimizing state management in Flutter or leveraging native Swift for peak performance.',
      stats: [
        { value: '5+', label: 'Projects' },
        { value: 'Flutter & Swift', label: 'Stack' },
        { value: 'REST & AI', label: 'Integration' },
        { value: 'GDG', label: 'Community' }
      ]
    },
    stack: {
      title: 'The Arsenal',
      description: 'Languages: Dart, Swift, Kotlin, Python, JavaScript. Frameworks: Flutter, React, Node, Flask, .NET. Tools I use to build robust mobile and web applications.'
    },
    projects: {
      title: 'Case Studies',
      description: 'Selected works: security, APIs, OCR, and mobile architecture.',
      readBtn: 'Read Case Study',
      items: [
        {
          title: 'Parollas',
          description: 'High-security web app for storing notes and passwords with AES-256 encryption. RESTful API with Flask and PostgreSQL.',
          tags: ['React', 'PostgreSQL', 'Flask'],
          metric: 'AES-256',
          image: BASE + 'projects/parollas-logo.png',
          link: '',
        },
        {
          title: 'Qbid',
          description: 'Silent auction mobile app (in development). High-performance RESTful API with FastAPI and Flutter frontend.',
          tags: ['Flutter', 'FastAPI'],
          metric: 'In Development',
          image: BASE + 'projects/qbid-logo.png',
          link: '',
        },
        {
          title: 'Handwriting Recognition App',
          description: 'Android app for handwritten text recognition with Python OCR backend. Kotlin UI and secure backend communication.',
          tags: ['Kotlin', 'Flask', 'PostgreSQL'],
          metric: 'OCR',
          image: BASE + 'projects/handwriting.jpg',
          link: '',
        },
        {
          title: 'Smart Chalk',
          description: 'Flutter-based edtech app for digitizing board notes. Firebase auth and real-time database.',
          tags: ['Flutter', 'Firebase'],
          metric: 'EdTech',
          image: BASE + 'projects/at-logo.png',
          link: '',
        },
      ]
    },
    experience: {
      title: 'Professional Path',
      description: 'A timeline of engineering growth and hands-on experience.',
      items: [
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
    },
    contact: {
      title: "Let's build",
      titleHighlight: 'impactful',
      titleEnd: 'experiences.',
      description: "Have an idea for a mobile or web app? Or looking to add a technical powerhouse to your team? Let's talk.",
      form: {
        name: 'Full Name',
        namePlaceholder: 'John Doe',
        email: 'Email Address',
        emailPlaceholder: 'john@example.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send Message'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Built with a clean architecture mindset.'
    }
  },
  tr: {
    nav: {
      about: 'Hakkımda',
      stack: 'Yetenekler',
      projects: 'Projeler',
      experience: 'Deneyim',
      downloadCv: 'CV\'yi İndir',
      cvUrl: BASE + 'Selman_Emre_Erol_CV_TR.pdf'
    },
    hero: {
      status: 'Projelere Açık',
      title: 'Selman Emre',
      lastName: 'Erol',
      role: 'Mobil Geliştirici (Flutter & Swift)',
      description: 'Temiz mimari ve ölçülebilir etki ile ölçeklenebilir, yüksek performanslı mobil uygulamalar geliştiriyorum.',
      viewProjects: 'Projeleri Gör',
      downloadCv: 'CV\'yi İndir',
      cvUrl: BASE + 'Selman_Emre_Erol_CV_TR.pdf'
    },
    about: {
      title: 'Mühendislikte Mükemmeliyet',
      subtitle: 'Türkiye | Uzaktan (Remote)',
      header: 'Arayüzün Ötesinde',
      desc1: 'Trakya Üniversitesi Bilgisayar Mühendisliği mezunuyum. Mobil uygulama geliştirmeye odaklanarak Flutter, Swift ve Kotlin ile modern, çoklu platform ve yerel uygulamalar geliştiriyorum. Cihaz içi yapay zeka (TensorFlow/OCR) ve temiz mimari konularında deneyimliyim.',
      desc2: 'Temiz kod yazmaya, ölçeklenebilirliğe ve sezgisel kullanıcı arayüzleri aracılığıyla ölçülebilir değerler sunmaya odaklanıyorum — ister Flutter\'da durum yönetimini optimize etmek olsun, ister en yüksek performans için yerel Swift kullanmak.',
      stats: [
        { value: '5+', label: 'Projeler' },
        { value: 'Flutter & Swift', label: 'Teknoloji' },
        { value: 'REST & AI', label: 'Entegrasyon' },
        { value: 'GDG', label: 'Topluluk' }
      ]
    },
    stack: {
      title: 'Yetenek Havuzu',
      description: 'Dart, Swift, Kotlin, Python, JavaScript dilleri ile Flutter, React, Node, Flask, .NET framework\'leri. Güçlü mobil ve web uygulamaları geliştirmek için kullandığım araçlar.'
    },
    projects: {
      title: 'Proje İncelemeleri',
      description: 'Seçilmiş projeler: güvenlik, API entegrasyonu, OCR ve mobil mimari.',
      readBtn: 'Detayları Oku',
      items: [
        {
          title: 'Parollas',
          description: 'AES-256 şifreleme ile notları ve şifreleri saklamak için yüksek güvenlikli web uygulaması. Flask ve PostgreSQL ile RESTful API.',
          tags: ['React', 'PostgreSQL', 'Flask'],
          metric: 'AES-256',
          image: BASE + 'projects/parollas-logo.png',
          link: '',
        },
        {
          title: 'Qbid',
          description: 'Sessiz açık artırma mobil uygulaması (geliştirme aşamasında). FastAPI ile yüksek performanslı RESTful API ve Flutter arayüzü.',
          tags: ['Flutter', 'FastAPI'],
          metric: 'Geliştiriliyor',
          image: BASE + 'projects/qbid-logo.png',
          link: '',
        },
        {
          title: 'Handwriting Recognition App',
          description: 'Python OCR sunuculu, el yazısı tanıma özelliğine sahip Android uygulaması. Kotlin arayüzü ve güvenli sunucu iletişimi.',
          tags: ['Kotlin', 'Flask', 'PostgreSQL'],
          metric: 'OCR',
          image: BASE + 'projects/handwriting.jpg',
          link: '',
        },
        {
          title: 'Akıllı Tebeşir (Smart Chalk)',
          description: 'Tahta notlarını dijitalleştirmek için Flutter tabanlı eğitim teknolojisi (EdTech) uygulaması. Firebase kimlik doğrulama ve gerçek zamanlı veritabanı.',
          tags: ['Flutter', 'Firebase'],
          metric: 'EdTech',
          image: BASE + 'projects/at-logo.png',
          link: '',
        },
      ]
    },
    experience: {
      title: 'Kariyer Yolu',
      description: 'Mühendislik gelişimimin ve pratik deneyimlerimin zaman çizelgesi.',
      items: [
        {
          title: 'Yazılım Mühendisliği Stajyeri',
          company: 'Ateş Rüzgar Enerjisi',
          location: 'İzmir, Türkiye',
          period: 'Ekim 2025 – Kasım 2025',
          color: 'primary',
          points: [
            'Cihaz üzerinde OCR için TensorFlow docTR ile yapay zeka destekli fatura tarama uygulaması (Flutter).',
            'Full-stack lisans takip modülü: React arayüzü, Node.js sunucusu, RESTful API\'ler.',
          ],
        },
        {
          title: 'Yazılım Mühendisliği Stajyeri',
          company: 'ESBAŞ',
          location: 'İzmir, Türkiye',
          period: 'Temmuz 2024 – Eylül 2024',
          color: 'accent-blue',
          points: [
            'React ve .NET ile çevrimiçi etkinlik katılım modülü.',
            'Kayıt akışı için arayüz iyileştirmesi; Microsoft ekosistemi ve sunucu entegrasyonu deneyimi.',
          ],
        },
        {
          title: 'Lisans Bilgisayar Mühendisliği',
          company: 'Trakya Üniversitesi',
          location: '',
          period: 'Ekim 2021 – Haziran 2025',
          color: 'slate',
          points: [],
          subtitle: 'Mobil Uygulama Geliştirme, cihaz içi yapay zeka ve yazılım mimarisi odaklı.',
        },
      ]
    },
    contact: {
      title: 'Birlikte etkileyici',
      titleHighlight: 'deneyimler',
      titleEnd: 'inşa edelim.',
      description: 'Mobil veya web uygulaması fikriniz mi var? Veya ekibinize teknik güç katacak birini mi arıyorsunuz? Konuşalım.',
      form: {
        name: 'Ad Soyad',
        namePlaceholder: 'John Doe',
        email: 'E-posta Adresi',
        emailPlaceholder: 'john@example.com',
        message: 'Mesajınız',
        messagePlaceholder: 'Bana projenizden bahsedin...',
        submit: 'Mesaj Gönder'
      }
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      tagline: 'Temiz mimari felsefesiyle inşa edilmiştir.'
    }
  }
}
