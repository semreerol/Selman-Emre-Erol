# Selman Emre Erol – Portfolio

Kişisel portfolyo sitesi. React (Vite) + Tailwind CSS. GitHub Pages ile yayınlanabilir.

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:5173](http://localhost:5173) açılır.

## GitHub Pages’e deploy

1. **Deploy** (aşağıdaki komut)  
   CV’yi `public` klasörüne kopyala ve adını şu şekilde yap:  
   `Selman Emre Erol-Cv Eng.pdf`  
   (Bu isimle “Download CV” linki doğru çalışır.)

2. **Deploy komutu**

```bash
npm run deploy
```

3. **GitHub ayarı**  
   Repo **Settings → Pages**: Source = **Deploy from a branch**, Branch = **gh-pages** / (root). Kaydet.

4. **Site adresi**  
   Repo adın ne ise URL ona göredir. Örn. repo `Selman-Emre-Erol` ise:  
   **https://semreerol.github.io/Selman-Emre-Erol/**  
   Repo adında boşluk varsa URL’de `%20` kullan:  
   **https://semreerol.github.io/Selman%20Emre%20Erol/**  
   Adresi tam yaz (büyük/küçük harf, tire veya boşluk repo ile aynı olsun).

5. **Hâlâ 404 alıyorsan**  
   Build’de `404.html` de oluşturuluyor; yine 404 alıyorsan Settings → Pages’te branch’in **gh-pages**, klasörün **/ (root)** olduğunu kontrol et.

6. **CV**  
   "Download CV" için CV’yi `public` klasörüne `Selman Emre Erol-Cv Eng.pdf` adıyla kopyala.

## Manuel build

```bash
npm run build
npm run preview   # dist ile yerel önizleme
```

## Proje yapısı

- `src/components/` – Nav, Hero, About, Stack, Projects, Experience, Contact, Footer
- `src/App.jsx` – Ana sayfa bileşenleri
- `public/` – Statik dosyalar (favicon, CV PDF buraya konur)

İçerik CV’den (Selman Emre Erol – Mobile Developer) uyarlanmıştır; tasarım verdiğin HTML ve PNG’ye uyumludur.
