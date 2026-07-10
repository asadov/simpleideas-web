# Almost in Orbit — marketing site

Statik site, framework yok. Düz HTML/CSS/vanilla JS, her sayfa tek dosya,
stiller sayfa içinde `<style>` bloğunda. Herhangi bir statik dosya sunucusuna
(Vercel, Netlify, GitHub Pages, ...) olduğu gibi kopyalanıp deploy edilebilir —
build adımı, rewrite kuralı ya da server kodu gerekmiyor.

## Dosyalar

- `index.html` — ana sayfa
- `press.html` — basın kiti
- `privacy.html` — gizlilik politikası
- `support.html` — destek sayfası
- `sitemap.xml`, `robots.txt` — SEO
- `assets/` — görsel/video varlıkları (aşağıya bak)

## Beklenen `assets/` dosyaları

`assets/` klasörü şu an boş (`.gitkeep` hariç). Aşağıdaki dosyalar tam bu
isimlerle eklenince sayfalardaki placeholder'lar otomatik gerçek içerikle
değişir — kod tarafında yapılacak bir şey yok.

| Dosya | Boyut / format notu | Kullanıldığı sayfa |
|---|---|---|
| `gameplay.mp4` | 9:16 dikey, H.264, ideal olarak < 10 MB | index |
| `poster.jpg` | opsiyonel — videonun ilk karesi | index |
| `screenshot-1.png` … `screenshot-6.png` | dikey, cihazdan direkt alınmış | index, press |
| `og.png` | 1200×630, sosyal paylaşım kartı | index (og:image, twitter:image, ld+json) |
| `favicon.png` | 64×64 | index, press, privacy, support |
| `apple-touch-icon.png` | 180×180 | index |

`assets/` dolunca site deploy'a hazırdır — başka bir hazırlık adımı yok.

## Bilinen placeholder

`press.html` içindeki trailer paneli şu an bir metin notu; launch'ta gerçek
YouTube embed'i ile değiştirilecek.
