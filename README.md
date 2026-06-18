# Onuralp Turgut — Kişisel Web Sitesi

Bu proje, Onuralp Turgut için hazırlanmış iki dilli (İngilizce/Türkçe), hızlı ve mobil uyumlu bir kişisel tanıtım sitesidir. Herhangi bir framework, backend veya harici JavaScript paketi kullanmaz.

## Dosya yapısı

- `index.html`: Sayfanın semantik yapısı, bölümleri, bağlantıları ve SEO bilgileri.
- `styles.css`: Renkler, tipografi, masaüstü/mobil düzenler ve animasyonlar.
- `script.js`: EN/TR çevirileri, dil tercihi, mobil menü, görünürlük animasyonları ve otomatik yıl.
- `assets/hero-photo.jpg`: Ana bölümde kullanılan portre fotoğrafı.
- `README.md`: Bu kullanım ve düzenleme rehberi.

## Mac'te yerel önizleme

En basit yöntem `index.html` dosyasına Finder'da çift tıklamaktır. Daha güvenilir bir yerel sunucu için Terminal'i açıp proje klasöründe şu komutu çalıştırın:

```bash
python3 -m http.server 8000
```

Ardından tarayıcıda `http://localhost:8000` adresini açın. Sunucuyu durdurmak için Terminal'de `Control + C` tuşlarına basın.

## İçerik, renk ve bağlantıları değiştirme

- Metinler: `script.js` içindeki `translations.en` ve `translations.tr` nesnelerini birlikte güncelleyin.
- Renkler: `styles.css` dosyasının başındaki `:root` bölümünde bulunan `--bg`, `--ink`, `--accent` gibi değişkenleri değiştirin.
- Sosyal medya ve e-posta bağlantıları: `index.html` içindeki LinkedIn, Instagram ve `mailto:` adreslerini değiştirin.
- Bölüm sıralaması: `index.html` içindeki `<section>` bloklarının yerini değiştirin. Navigasyon bağlantılarındaki `href` değerlerinin bölüm `id` değerleriyle aynı kalmasına dikkat edin.

## EN/TR sistemi

Tüm çevrilebilir metinler `script.js` dosyasındaki `translations` nesnesinde tutulur. HTML'deki `data-i18n` değerleri bu nesnedeki anahtarlara karşılık gelir. Dil düğmesine basıldığında sayfa yenilenmeden metinler güncellenir. Seçim tarayıcının `localStorage` alanına kaydedilir ve sonraki ziyarette korunur.

Yeni bir metin eklemek için her iki dil nesnesine aynı anahtarı ekleyin ve HTML öğesine örneğin `data-i18n="newKey"` yazın.

## Portre fotoğrafını değiştirme

Yeni dikey fotoğrafı `assets/hero-photo.jpg` adıyla mevcut dosyanın üzerine kaydedin. En iyi sonuç için 4:5 veya 3:4 oranında, en az 1200 piksel genişliğinde bir JPEG kullanın. Kadrajı değiştirmek için `styles.css` içindeki `.hero-visual img` kuralının `object-position` değerini ayarlayın.

## Daha sonra yayınlama

- GitHub Pages: Projeyi bir GitHub deposuna gönderin. Depo ayarlarında **Pages** bölümünden ana dalı ve kök klasörü seçin.
- Cloudflare Pages: Bir GitHub deposunu Cloudflare Pages'e bağlayın. Framework seçmeden, çıktı klasörü olarak proje kökünü kullanın.

Site statik olduğu için derleme komutu gerekmez. Yayınlama öncesinde Open Graph görseli için mutlak site adresi, favicon ve özel alan adı eklenmesi önerilir.
