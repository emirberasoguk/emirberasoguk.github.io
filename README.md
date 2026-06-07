# Emir Bera Soğuk - Portfolyö Web Sitesi

Bu depo, kişisel portfolyö web sitemin kaynak kodlarını içermektedir. Site tamamen statik HTML, CSS ve JavaScript kullanılarak, **OpenSUSE Tumbleweed** ve **Kitty Terminal** estetiğinden ilham alınarak tasarlanmıştır.

## Özellikler

*   **Vivid Dark Tema**: OpenSUSE yeşili ve modern neon renk paletine sahip premium tasarım.
*   **Etkileşimli Kitty Konsolu**: Gerçek bir terminal simülatörü. Ziyaretçiler `neofetch`, `projects`, `skills`, `contact` ve `help` komutlarını çalıştırabilir.
*   **Seçili Projeler**: Projelerin tag'lere göre anlık ve animasyonlu olarak filtrelenebildiği modern bir ızgara yapısı.
*   **Yazım Animasyonu**: Ana sayfada dinamik olarak değişen unvan yazım efekti.
*   **Tam Duyarlı Tasarım**: Mobil, tablet ve masaüstü cihazlarla mükemmel uyum.

## Yerel Önizleme

Web sitesini yerel makinenizde test etmek için aşağıdaki komutlardan birini kullanabilirsiniz:

```bash
# Python ile:
python3 -m http.server 8000

# Node.js (npx) ile:
npx serve .
```

Ardından tarayıcınızdan `http://localhost:8000` (veya serve çıktısındaki portu) ziyaret edebilirsiniz.

## GitHub Pages Üzerinde Yayına Alma (Hosting)

Web sitenizi `https://emirberasoguk.github.io` adresinde yayınlamak için şu adımları izleyin:

1.  GitHub hesabınızda **[emirberasoguk.github.io](https://github.com/new)** adında yeni bir **Public (Kamuya Açık)** depo (repository) oluşturun.
2.  Yerel depomuzda remote adresi ve commit'ler hazır durumdadır. Depoyu GitHub'a göndermek için terminalden şu komutu çalıştırın:
    ```bash
    git push -u origin main
    ```
3.  Dosyalar yüklendikten birkaç dakika sonra web siteniz `https://emirberasoguk.github.io` adresinde otomatik olarak yayına girecektir.

---
Built with 💚 on OpenSUSE Tumbleweed
