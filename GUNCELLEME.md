# Site İçeriğini Güncelleme Rehberi

Tüm değiştirilebilir içerik **`src/data.js`** dosyasında. Bu dosyayı düzenleyerek fotoğraf, projeler, iletişim ve deneyim bilgilerini güncelleyebilirsin.

---

## 1. Profil fotoğrafı

1. Kendi fotoğrafını (tercihen kare, örn. 400x400 px) **`public/`** klasörüne koy.
2. Dosya adı: **`profile.jpg`** (veya `profile.png`).
3. **`src/data.js`** dosyasında şu satırı kontrol et; dosya adı `profile.jpg` ise değiştirmene gerek yok:

```js
export const profileImage = BASE + 'profile.jpg'
```

Farklı bir isim kullandıysan (örn. `ben.jpg`):

```js
export const profileImage = BASE + 'ben.jpg'
```

İstersen dışarıdan bir link de kullanabilirsin:

```js
export const profileImage = 'https:// ... fotoğraf linkin'
```

---

## 2. Projeler

Projeler **`src/data.js`** içindeki **`projects`** dizisinde. Her proje için:

- **title** – Proje adı
- **description** – Kısa açıklama
- **tags** – Teknolojiler (örn. `['Flutter', 'Firebase']`)
- **metric** – Sağ üstte görünen kısa bilgi (örn. "10K Users", "AES-256")
- **image** – Kapak görseli
- **link** – İsteğe bağlı; "Read Case Study" tıklanınca açılacak adres (boş bırakırsan buton sadece görünür, link vermez)

### Proje görselleri

- Görselleri **`public/projects/`** klasörüne koy (örn. `parollas.jpg`, `qbid.jpg`).
- **`src/data.js`** içinde ilgili projenin **image** alanı şöyle olmalı:

```js
image: BASE + 'projects/parollas.jpg',
```

Dosya adın farklıysa onu yaz (örn. `projects/benim-proje.png`).

Yeni proje eklemek için `projects` dizisine yeni bir `{ title, description, tags, metric, image, link }` objesi ekle.

---

## 3. İletişim (e-posta, LinkedIn, GitHub)

**`src/data.js`** içindeki **`contact`** objesini düzenle:

```js
export const contact = {
  email: 'semreeroll@gmail.com',
  linkedin: 'https://www.linkedin.com/in/selman-emre-erol-45b981233',
  linkedinLabel: 'linkedin.com/in/selman-emre-erol',
  github: 'https://github.com/semreerol',
  githubLabel: 'github.com/semreerol',
}
```

E-posta, link ve görünen metinleri buradan değiştirebilirsin.

---

## 4. Deneyim (Professional Path)

**`src/data.js`** içindeki **`experience`** dizisini düzenle. Her eleman:

- **title** – Pozisyon
- **company** – Şirket / kurum
- **location** – Şehir / ülke (boş bırakılabilir)
- **period** – Tarih aralığı
- **color** – `'primary'` veya `'accent-blue'` veya `'slate'`
- **points** – Madde madde açıklamalar (dizi)
- **subtitle** – Sadece eğitim satırında kullanılır (isteğe bağlı)

Yeni deneyim eklemek için diziyi kopyalayıp yeni bir obje ekle.

---

## 5. About alt başlık

"Based in Turkey | Remote" metnini değiştirmek için **`src/data.js`** içinde:

```js
export const aboutSubtitle = 'Based in Turkey | Remote'
```

satırını düzenle.

---

## Değişiklikleri görmek ve yayına almak

1. **Yerelde test:** Terminalde `npm run dev` çalıştır, tarayıcıda sayfayı kontrol et.
2. **GitHub Pages’e göndermek:**  
   - Değişiklikleri commit edip `main`’e push et.  
   - Sonra terminalde **`npm run deploy`** çalıştır (site `gh-pages` branch’inden güncellenir).

Bu rehber, içeriği nerede ve nasıl güncelleyeceğini özetler; tüm metin ve linkler **`src/data.js`** üzerinden yönetiliyor.
