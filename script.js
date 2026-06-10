// Multilingual Translation Dictionary
const translations = {
  tr: {
    "nav-about": "Hakkımda",
    "nav-skills": "Yetenekler",
    "nav-projects": "Projeler",
    "nav-console": "Konsol",
    "nav-contact": "İletişim",
    
    "hero-badge": "<i class=\"fa-brands fa-linux\"></i> Linux Geliştiricisi",
    "hero-title": "Merhaba, ben <span class=\"gradient-text\">Emir Bera</span>",
    "hero-desc": "Sistem programlama, siber güvenlik ve algoritmalar üzerine odaklanmış bir yazılım mühendisiyim. Karmaşık problemleri basit, optimize ve güvenli kodlarla çözmeyi seviyorum.",
    "hero-btn-projects": "<i class=\"fa-solid fa-folder-open\"></i> Projelerimi Gör",
    "hero-btn-terminal": "<i class=\"fa-solid fa-terminal\"></i> Terminali Başlat",
    
    "neofetch-name-key": "<i class=\"fa-solid fa-user text-cyan\"></i> İsim:",
    "neofetch-field-key": "<i class=\"fa-solid fa-laptop-code text-purple\"></i> Alan:",
    "neofetch-field-val": "Yazılım Mühendisliği & Siber Güvenlik",
    "neofetch-os-key": "<i class=\"fa-brands fa-linux text-green\"></i> OS:",
    "neofetch-shell-key": "<i class=\"fa-solid fa-microchip text-pink\"></i> Shell:",
    "neofetch-focus-key": "<i class=\"fa-solid fa-bullseye text-yellow\"></i> Odak:",
    "neofetch-focus-val": "Algoritmalar, Sistem Programlama, OOP",
    "neofetch-target-key": "<i class=\"fa-solid fa-rocket text-cyan\"></i> Hedef:",
    "neofetch-target-val": "Güvenli ve yüksek performanslı sistemler tasarlamak",

    "about-sec-title": "<i class=\"fa-solid fa-circle-info text-cyan\"></i> Hakkımda",
    "about-phil-title": "<i class=\"fa-solid fa-brain text-cyan\"></i> Felsefem",
    "about-phil-text": "Yazılım geliştirmeyi sadece kod yazmak olarak değil, sistemlerin çalışma mantığını kavrayarak en düşük seviyede optimize ve güvenli çözümler üretmek olarak görüyorum. C ve C++ ile sistem geliştirirken gösterdiğim özeni, yüksek seviyeli dillerde mimari tasarlarken de koruyorum.",
    "about-int-title": "<i class=\"fa-solid fa-shield-halved text-purple\"></i> İlgi Alanlarım",
    "about-int-text": "İşletim sistemleri, ağ protokolleri, tersine mühendislik ve siber güvenlik ana ilgi alanlarımdır. Geliştirdiğim projelerde güvenlik ve performansı her zaman birinci öncelik olarak ele alıyorum.",
    
    "skills-sec-title": "<i class=\"fa-solid fa-sliders text-purple\"></i> Yetenekler & Teknolojiler",
    "skills-cat1": "<span class=\"skill-dot bg-red\"></span> Diller & Sistem",
    "skills-cat2": "<span class=\"skill-dot bg-green\"></span> Araçlar & Ortam",
    "skills-cat3": "<span class=\"skill-dot bg-cyan\"></span> Mimari & Güvenlik",
    "skills-item-sec": "Siber Güvenlik & OSINT",
    "skills-item-oop": "OOP (Nesne Yönelimli)",
    "skills-item-algo": "Algoritmalar & Veri Yapıları",
    "skills-item-net": "Ağ Protokolleri & Sniffing",
    "skills-item-db": "Veritabanı Yönetimi",
    
    "projects-sec-title": "<i class=\"fa-solid fa-box-open text-pink\"></i> Projelerim",
    "filter-all": "Tümü",
    "filter-c": "C / C++",
    "filter-java": "Java",
    "filter-security": "Siber Güvenlik",
    "filter-other": "Diğer",
    
    "proj-inspect": "İncele",
    "proj-local": "<i class=\"fa-solid fa-code-branch\"></i> Yerel Proje",

    "proj-pi-desc": "Pi sayısının basamaklarını kullanarak şifre analizi ve kırma denemesi yapan, OSINT hibrit saldırılarını destekleyen gelişmiş bir sızma testi aracı.",
    "proj-crypt-desc": "Huffman kodlaması algoritmasını kullanarak dosyaları güvenli bir şekilde şifrelemek ve aynı anda sıkıştırmak için tasarlanmış terminal uygulaması.",
    "proj-lidar-desc": "LIDAR nokta bulutu verilerinden 2D doğru tespiti gerçekleştirmek üzere C diliyle sıfırdan yazılmış kararlı ve performanslı RANSAC algoritması.",
    "proj-garage-desc": "Post-apokaliptik bir dünyada geçen, nesne yönelimli tasarım (OOP) ve veri yapılarıyla desteklenmiş stratejik bir Kule Savunma (Tower Defense) oyunu.",
    "proj-citation-desc": "Akademik makalelerin ve yazarların atıf ağlarını graf teorisi yaklaşımları ile analiz eden ve JavaFX arayüzü ile görselleştiren masaüstü uygulaması.",
    "proj-metor-desc": "C# dilinde Win32 API'leri kullanarak terminal üzerinde çalışan; arama, geri alma (undo) ve akıllı kaydırma özelliklerine sahip interaktif metin editörü.",
    "proj-ghelper-desc": "Linux işletim sistemi için geliştirilmiş, sistem durumunu ve donanım bilgilerini hem CLI hem de GUI (GTK/X11) üzerinden sunan C tabanlı sistem yardımcısı.",
    "proj-cyber-desc": "Ağ paketlerini yakalayıp analiz eden, verileri SQLite veritabanına kaydeden ve Eve-NG ağ laboratuvar entegrasyonu sunan siber güvenlik log analiz sistemi.",
    "proj-vtys-desc": "Veritabanı Yönetim Sistemleri (VTYS) dersi final sınavı için geliştirilmiş; interaktif SQL sorgu denemeleri, BCNF ayrıştırması ve dış bellek sıralama maliyeti hesaplama gibi modülleri barındıran Python tabanlı CLI simülatörü.",
    
    "term-sec-title": "<i class=\"fa-solid fa-terminal text-green\"></i> Etkileşimli Kitty Konsolu",
    "term-sec-subtitle": "Aşağıdaki terminali kullanarak projelerimi ve yeteneklerimi sorgulayabilirsin. Kitty tarzında dizayn edilmiştir.",
    "term-welcome": "Kitty Terminal Emulator v1.0.0'a hoş geldiniz.",
    
    "contact-sec-title": "<i class=\"fa-solid fa-envelope text-yellow\"></i> İletişim",
    "contact-info-title": "Bağlantıda Kalalım",
    "contact-info-desc": "Projelerim hakkında konuşmak, iş birliği yapmak veya sadece yazılım dünyasından sohbet etmek isterseniz benimle iletişime geçebilirsiniz.",
    "contact-action-title": "Hızlı İletişim",
    "contact-action-desc": "Form doldurmak yerine e-posta adresimi doğrudan kopyalayabilir veya e-posta istemcinizi açarak bana yazabilirsiniz.",
    "contact-copy-btn": "<i class=\"fa-regular fa-copy\"></i> Kopyala",
    "contact-send-btn": "<i class=\"fa-solid fa-envelope-open-text\"></i> E-Posta Gönder",
    "footer-copyright": "&copy; 2026 Emir Bera Soğuk. Tüm Hakları Saklıdır.",
    "footer-meta": "Built with <i class=\"fa-solid fa-heart text-red\"></i> on Linux"
  },
  en: {
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-console": "Console",
    "nav-contact": "Contact",
    
    "hero-badge": "<i class=\"fa-brands fa-linux\"></i> Linux Developer",
    "hero-title": "Hi, I am <span class=\"gradient-text\">Emir Bera</span>",
    "hero-desc": "I am a software engineer focused on system programming, cybersecurity, and algorithms. I love solving complex problems with simple, optimized, and secure code.",
    "hero-btn-projects": "<i class=\"fa-solid fa-folder-open\"></i> See My Projects",
    "hero-btn-terminal": "<i class=\"fa-solid fa-terminal\"></i> Launch Terminal",
    
    "neofetch-name-key": "<i class=\"fa-solid fa-user text-cyan\"></i> Name:",
    "neofetch-field-key": "<i class=\"fa-solid fa-laptop-code text-purple\"></i> Field:",
    "neofetch-field-val": "Software Engineering & Cybersecurity",
    "neofetch-os-key": "<i class=\"fa-brands fa-linux text-green\"></i> OS:",
    "neofetch-shell-key": "<i class=\"fa-solid fa-microchip text-pink\"></i> Shell:",
    "neofetch-focus-key": "<i class=\"fa-solid fa-bullseye text-yellow\"></i> Focus:",
    "neofetch-focus-val": "Algorithms, System Programming, OOP",
    "neofetch-target-key": "<i class=\"fa-solid fa-rocket text-cyan\"></i> Target:",
    "neofetch-target-val": "Designing secure and high-performance systems",

    "about-sec-title": "<i class=\"fa-solid fa-circle-info text-cyan\"></i> About Me",
    "about-phil-title": "<i class=\"fa-solid fa-brain text-cyan\"></i> My Philosophy",
    "about-phil-text": "I see software development not just as writing code, but as understanding how systems work and producing optimized, secure solutions at the lowest level. I maintain the same diligence designing high-level architectures as I do developing system software in C/C++.",
    "about-int-title": "<i class=\"fa-solid fa-shield-halved text-purple\"></i> My Interests",
    "about-int-text": "Operating systems, network protocols, reverse engineering, and cybersecurity are my main areas of interest. I prioritize security and performance as core requirements in every project I develop.",
    
    "skills-sec-title": "<i class=\"fa-solid fa-sliders text-purple\"></i> Skills & Technologies",
    "skills-cat1": "<span class=\"skill-dot bg-red\"></span> Languages & Systems",
    "skills-cat2": "<span class=\"skill-dot bg-green\"></span> Tools & Environment",
    "skills-cat3": "<span class=\"skill-dot bg-cyan\"></span> Architecture & Security",
    "skills-item-sec": "Cybersecurity & OSINT",
    "skills-item-oop": "OOP (Object Oriented)",
    "skills-item-algo": "Algorithms & Data Structures",
    "skills-item-net": "Network Protocols & Sniffing",
    "skills-item-db": "SQL & Database Management",
    
    "projects-sec-title": "<i class=\"fa-solid fa-box-open text-pink\"></i> My Projects",
    "filter-all": "All",
    "filter-c": "C / C++",
    "filter-java": "Java",
    "filter-security": "Cybersecurity",
    "filter-other": "Other",
    
    "proj-inspect": "Inspect",
    "proj-local": "<i class=\"fa-solid fa-code-branch\"></i> Local Project",

    "proj-pi-desc": "An advanced penetration testing tool that utilizes the digits of Pi for password analysis and cracking, supporting OSINT hybrid attacks.",
    "proj-crypt-desc": "A C-based terminal application designed to securely encrypt and simultaneously compress files using customized Huffman coding principles.",
    "proj-lidar-desc": "A robust and performant 2D line detection implementation written in pure C from scratch using the RANSAC algorithm on LIDAR point cloud data.",
    "proj-garage-desc": "A strategic Tower Defense game set in a post-apocalyptic world, powered by object-oriented design (OOP) and customized data structures.",
    "proj-citation-desc": "A desktop application that analyzes academic citation networks using graph theory approaches and visualizes them with a JavaFX interface.",
    "proj-metor-desc": "An interactive terminal text editor written in C# utilizing Win32 APIs, featuring search, multi-level undo, and smart scrolling.",
    "proj-ghelper-desc": "A system utility for Linux written in C that reports system status and hardware information via both CLI and GUI (GTK/X11).",
    "proj-cyber-desc": "A cybersecurity log analysis system that sniffs and analyzes network packets, logs them to SQLite, and integrates with Eve-NG network labs.",
    "proj-vtys-desc": "A Python-based CLI final exam preparation simulator featuring interactive SQL query evaluation, BCNF decomposition, and disk sort cost calculation.",
    
    "term-sec-title": "<i class=\"fa-solid fa-terminal text-green\"></i> Interactive Kitty Console",
    "term-sec-subtitle": "You can query my projects and skills using the terminal below. Designed in the style of Kitty.",
    "term-welcome": "Welcome to Kitty Terminal Emulator v1.0.0.",
    
    "contact-sec-title": "<i class=\"fa-solid fa-envelope text-yellow\"></i> Contact",
    "contact-info-title": "Let's Stay in Touch",
    "contact-info-desc": "If you want to talk about my projects, collaborate, or just chat about software development, feel free to contact me.",
    "contact-action-title": "Quick Contact",
    "contact-action-desc": "Instead of filling out a form, you can copy my email address directly or open your email client to write to me.",
    "contact-copy-btn": "<i class=\"fa-regular fa-copy\"></i> Copy",
    "contact-send-btn": "<i class=\"fa-solid fa-envelope-open-text\"></i> Send Email",
    "footer-copyright": "&copy; 2026 Emir Bera Soğuk. All Rights Reserved.",
    "footer-meta": "Built with <i class=\"fa-solid fa-heart text-red\"></i> on Linux"
  }
};

// Terminal outputs translations
const terminalOutputs = {
  tr: {
    help: `Kullanılabilir komutlar:
  <div class="term-line"><span class="text-cyan term-line-cmd">help</span><span class="term-line-desc">: Komut listesini gösterir</span></div>
  <div class="term-line"><span class="text-purple term-line-cmd">neofetch</span><span class="term-line-desc">: Sistem ve kullanıcı bilgilerini görüntüler</span></div>
  <div class="term-line"><span class="text-green term-line-cmd">projects</span><span class="term-line-desc">: Projelerin terminal çıktısını listeler</span></div>
  <div class="term-line"><span class="text-pink term-line-cmd">skills</span><span class="term-line-desc">: Yetenek ve teknoloji listesini yazdırır</span></div>
  <div class="term-line"><span class="text-yellow term-line-cmd">contact</span><span class="term-line-desc">: İletişim ve sosyal medya bağlantılarını gösterir</span></div>
  <div class="term-line"><span class="text-red term-line-cmd">clear</span><span class="term-line-desc">: Terminal ekranını temizler</span></div>`,
    neofetch: `
    <span class="text-cyan">  .---.</span>       <span class="text-green">emir</span>@<span class="text-cyan">linux-kitty</span>
    <span class="text-cyan"> |o_o  |</span>      -----------------
    <span class="text-cyan"> |:_/  |</span>      <span class="text-purple">İsim</span>: Emir Bera Soğuk
    <span class="text-cyan">//   \\\\ \\</span>     <span class="text-purple">Alan</span>: Yazılım Mühendisliği & Siber Güvenlik
    <span class="text-cyan">(|     | )</span>    <span class="text-purple">OS</span>: GNU/Linux (OpenSUSE Tumbleweed)
    <span class="text-cyan">/'\\\\_   _/\\\`\\\\</span>   <span class="text-purple">Shell</span>: zsh / kitty
    <span class="text-cyan">\\\\___)=(___/</span>  <span class="text-purple">Odak</span>: Algoritmalar, Sistem Programlama, OOP
    <span class="text-purple">Hedef</span>: Karmaşık problemleri basit kodlarla çözmek.
  `,
    projects: `Bulunan Projeler:
  <div class="term-line"><span class="text-cyan term-line-cmd">Pi-Cracker</span><span class="term-line-desc">: Pi sayısıyla şifre analizi ve kırma (C/Bash/Security)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">C-ryptFile</span><span class="term-line-desc">: Huffman kodlamalı şifreleme & sıkıştırma (C/Security)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">LidarRansac-C</span><span class="term-line-desc">: Lidar bulutu üzerinde RANSAC (C/Robotics)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">TheLastGarage</span><span class="term-line-desc">: Post-apokaliptik kule savunma oyunu (Java/Game)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">Citation-Graph</span><span class="term-line-desc">: Akademik atıf ağları analizcisi (Java/Graph)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">me-tor</span><span class="term-line-desc">: Terminal tabanlı metin editörü (C#/System)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">ghelper-linux</span><span class="term-line-desc">: Asus laptoplar için fan & donanım ayar aracı (C/Linux)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">Cyberlogy</span><span class="term-line-desc">: Ağ paketi analiz ve ML veri toplama (Python/Security)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">VTYS-Final</span><span class="term-line-desc">: Veritabanı sınav hazırlık simülatörü (Python/SQL)</span></div>`,
    skills: `Beceriler & Teknolojiler:
  <div class="term-line"><span class="text-red term-line-cmd">Diller</span><span class="term-line-desc">: C, C++, Python, Java, C#, Verilog, GDScript, Bash</span></div>
  <div class="term-line"><span class="text-green term-line-cmd">Sistemler</span><span class="term-line-desc">: Linux, Windows, Git/GitHub, Docker</span></div>
  <div class="term-line"><span class="text-purple term-line-cmd">Güvenlik</span><span class="term-line-desc">: Ağ Analizi, Sniffing, OSINT, Kriptografi Temelleri</span></div>
  <div class="term-line"><span class="text-yellow term-line-cmd">Geliştirme</span><span class="term-line-desc">: OOP Tasarım, Veri Yapıları & Algoritmalar, JavaFX, Godot Engine</span></div>`,
    contact: `İletişim Bilgileri:
  <div class="term-line"><span class="text-cyan term-line-cmd">E-posta</span><span class="term-line-desc">: emirberasoguk@proton.me</span></div>
  <div class="term-line"><span class="text-purple term-line-cmd">LinkedIn</span><span class="term-line-desc">: linkedin.com/in/emirberasoguk/</span></div>
  <div class="term-line"><span class="text-green term-line-cmd">GitHub</span><span class="term-line-desc">: github.com/emirberasoguk</span></div>`,
    notFound: `bash: komut bulunamadı: {cmd}. Yardım almak için 'help' yazın.`
  },
  en: {
    help: `Available commands:
  <div class="term-line"><span class="text-cyan term-line-cmd">help</span><span class="term-line-desc">: Shows list of commands</span></div>
  <div class="term-line"><span class="text-purple term-line-cmd">neofetch</span><span class="term-line-desc">: Displays system and user info</span></div>
  <div class="term-line"><span class="text-green term-line-cmd">projects</span><span class="term-line-desc">: Lists projects in terminal format</span></div>
  <div class="term-line"><span class="text-pink term-line-cmd">skills</span><span class="term-line-desc">: Prints skills and technologies</span></div>
  <div class="term-line"><span class="text-yellow term-line-cmd">contact</span><span class="term-line-desc">: Shows contact and social links</span></div>
  <div class="term-line"><span class="text-red term-line-cmd">clear</span><span class="term-line-desc">: Clears the terminal screen</span></div>`,
    neofetch: `
    <span class="text-cyan">  .---.</span>       <span class="text-green">emir</span>@<span class="text-cyan">linux-kitty</span>
    <span class="text-cyan"> |o_o  |</span>      -----------------
    <span class="text-cyan"> |:_/  |</span>      <span class="text-purple">Name</span>: Emir Bera Soğuk
    <span class="text-cyan">//   \\\\ \\</span>     <span class="text-purple">Field</span>: Software Engineering & Cybersecurity
    <span class="text-cyan">(|     | )</span>    <span class="text-purple">OS</span>: GNU/Linux (OpenSUSE Tumbleweed)
    <span class="text-cyan">/'\\\\_   _/\\\`\\\\</span>   <span class="text-purple">Shell</span>: zsh / kitty
    <span class="text-cyan">\\\\___)=(___/</span>  <span class="text-purple">Focus</span>: Algorithms, System Programming, OOP
    <span class="text-purple">Target</span>: Designing secure and high-performance systems.
  `,
    projects: `Found Projects:
  <div class="term-line"><span class="text-cyan term-line-cmd">Pi-Cracker</span><span class="term-line-desc">: Wifi penetration and cracking (C/Bash/Security)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">C-ryptFile</span><span class="term-line-desc">: Huffman-based file encryption & compression (C/Security)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">LidarRansac-C</span><span class="term-line-desc">: RANSAC algorithm on LIDAR data (C/Robotics)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">TheLastGarage</span><span class="term-line-desc">: Post-apocalyptic tower defense game (Java/Game)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">Citation-Graph</span><span class="term-line-desc">: Citation networks graph analyzer (Java/Graph)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">me-tor</span><span class="term-line-desc">: Terminal-based text editor (C#/System)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">ghelper-linux</span><span class="term-line-desc">: Fan & hardware configuration for Asus laptops (C/Linux)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">Cyberlogy</span><span class="term-line-desc">: Packet sniffer and ML dataset generator (Python/Security)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">VTYS-Final</span><span class="term-line-desc">: Database course preparation simulator (Python/SQL)</span></div>`,
    skills: `Skills & Technologies:
  <div class="term-line"><span class="text-red term-line-cmd">Languages</span><span class="term-line-desc">: C, C++, Python, Java, C#, Verilog, GDScript, Bash</span></div>
  <div class="term-line"><span class="text-green term-line-cmd">Systems</span><span class="term-line-desc">: Linux, Windows, Git/GitHub, Docker</span></div>
  <div class="term-line"><span class="text-purple term-line-cmd">Security</span><span class="term-line-desc">: Network Analysis, Sniffing, OSINT, Cryptography Basics</span></div>
  <div class="term-line"><span class="text-yellow term-line-cmd">Development</span><span class="term-line-desc">: OOP Design, Data Structures & Algorithms, JavaFX, Godot Engine</span></div>`,
    contact: `Contact Details:
  <div class="term-line"><span class="text-cyan term-line-cmd">Email</span><span class="term-line-desc">: emirberasoguk@proton.me</span></div>
  <div class="term-line"><span class="text-purple term-line-cmd">LinkedIn</span><span class="term-line-desc">: linkedin.com/in/emirberasoguk/</span></div>
  <div class="term-line"><span class="text-green term-line-cmd">GitHub</span><span class="term-line-desc">: github.com/emirberasoguk</span></div>`,
    notFound: `bash: command not found: {cmd}. Type 'help' for assistance.`
  }
};

// Typed text arrays
const rolesTr = [
  "Yazılım Mühendisi",
  "C/C++ / Python / Java Geliştiricisi",
  "Siber Güvenlik Meraklısı"
];
const rolesEn = [
  "Software Engineer",
  "C/C++ / Python / Java Developer",
  "Cybersecurity Enthusiast"
];

// State variables
let currentLanguage = localStorage.getItem('language') || 'tr';
let currentTheme = localStorage.getItem('theme') || 'dark';
let roles = currentLanguage === 'tr' ? rolesTr : rolesEn;
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;
let typingTimeout = null;

// Typing Animation for Hero Subtitle
const typingText = document.getElementById('typing-text');

function type() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500; // Pause before starting next
  }

  typingTimeout = setTimeout(type, typeSpeed);
}

// Reset typing animation on language change
function resetTyping() {
  clearTimeout(typingTimeout);
  roles = currentLanguage === 'tr' ? rolesTr : rolesEn;
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  if (typingText) {
    typingText.textContent = '';
  }
  type();
}

// Project Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      const cardTags = card.getAttribute('data-tags').split(' ');

      if (filterValue === 'all' || cardTags.includes(filterValue)) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu) {
      navMenu.classList.remove('active');
    }
  });
});

// Interactive Kitty Terminal Simulator
const terminalInput = document.getElementById('terminalInput');
const terminalScreen = document.getElementById('terminalScreen');
const initialHelpOutput = document.getElementById('initialHelpOutput');

// Set initial help text
if (initialHelpOutput) {
  initialHelpOutput.innerHTML = terminalOutputs[currentLanguage].help;
}

const commandsList = ['help', 'neofetch', 'projects', 'skills', 'contact', 'clear'];
let cmdHistory = [];
let historyIndex = -1;

if (terminalInput) {
  terminalInput.addEventListener('keydown', (e) => {
    // Arrow UP / DOWN for Command History
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = cmdHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex < cmdHistory.length - 1) {
        historyIndex++;
        terminalInput.value = cmdHistory[historyIndex];
      } else if (historyIndex === cmdHistory.length - 1) {
        historyIndex = cmdHistory.length;
        terminalInput.value = '';
      }
    } 
    // Tab Completion
    else if (e.key === 'Tab') {
      e.preventDefault();
      const currentVal = terminalInput.value.trim().toLowerCase();
      if (currentVal !== '') {
        const matches = commandsList.filter(cmd => cmd.startsWith(currentVal));
        if (matches.length === 1) {
          terminalInput.value = matches[0];
        } else if (matches.length > 1) {
          // Print potential matches raw
          printRawLine(matches.join('&nbsp;&nbsp;&nbsp;&nbsp;'));
        }
      }
    }
    // Enter to execute command
    else if (e.key === 'Enter') {
      const command = terminalInput.value.trim().toLowerCase();
      if (command !== '') {
        cmdHistory.push(command);
        if (cmdHistory.length > 50) cmdHistory.shift();
      }
      historyIndex = cmdHistory.length;
      executeCommand(command);
      terminalInput.value = '';
    }
  });

  // Make clicking the terminal screen focus the input (responsively)
  if (terminalScreen) {
    terminalScreen.addEventListener('click', (e) => {
      // Prevent automatic popup keypads on mobile unless explicitly clicking on the input line
      if (window.innerWidth > 768 || e.target === terminalInput || e.target.closest('.terminal-input-line')) {
        terminalInput.focus();
      }
    });
  }
}

function printRawLine(text) {
  const outputDiv = document.createElement('div');
  outputDiv.className = 'terminal-output-block';
  outputDiv.innerHTML = `<div class="term-response">${text}</div>`;
  const inputLine = terminalScreen.querySelector('.terminal-input-line');
  terminalScreen.insertBefore(outputDiv, inputLine);
  terminalScreen.scrollTop = terminalScreen.scrollHeight;
}

function executeCommand(cmd) {
  const outputDiv = document.createElement('div');
  outputDiv.className = 'terminal-output-block';

  let echo = `<div class="terminal-input-echo"><span class="terminal-prompt">emir@linux-kitty <span class="logo-tilde">~</span> ></span> <span class="text-main">${cmd}</span></div>`;
  let response = '';

  if (cmd !== '') {
    const outputs = terminalOutputs[currentLanguage];
    switch (cmd) {
      case 'help':
        response = `<div class="term-response">${outputs.help}</div>`;
        break;
      case 'neofetch':
        response = `<div class="term-response neofetch-terminal-view">${outputs.neofetch}</div>`;
        break;
      case 'projects':
        response = `<div class="term-response">${outputs.projects}</div>`;
        break;
      case 'skills':
        response = `<div class="term-response">${outputs.skills}</div>`;
        break;
      case 'contact':
      case 'social':
        response = `<div class="term-response">${outputs.contact}</div>`;
        break;
      case 'clear':
        const outputElements = terminalScreen.querySelectorAll('.terminal-output-block');
        outputElements.forEach(el => el.remove());
        const welcomeElement = terminalScreen.querySelector('.terminal-output');
        if (welcomeElement) welcomeElement.remove();
        return;
      default:
        response = `<div class="term-response text-red">${outputs.notFound.replace('{cmd}', cmd)}</div>`;
        break;
    }
  }

  outputDiv.innerHTML = echo + response;

  const inputLine = terminalScreen.querySelector('.terminal-input-line');
  terminalScreen.insertBefore(outputDiv, inputLine);
  terminalScreen.scrollTop = terminalScreen.scrollHeight;
}

// Copy Email to Clipboard
const copyEmailBtn = document.getElementById('copyEmailBtn');
const emailAddressText = document.getElementById('emailAddress');

if (copyEmailBtn && emailAddressText) {
  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailAddressText.textContent.trim()).then(() => {
      const originalHTML = copyEmailBtn.innerHTML;
      const copiedText = currentLanguage === 'tr' ? '<i class="fa-solid fa-check"></i> Kopyalandı!' : '<i class="fa-solid fa-check"></i> Copied!';
      copyEmailBtn.innerHTML = copiedText;
      copyEmailBtn.classList.add('copied');
      setTimeout(() => {
        copyEmailBtn.innerHTML = originalHTML;
        copyEmailBtn.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      console.error('Clipboard copy error:', err);
    });
  });
}

// Multilingual switcher function
function applyLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update translation elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update lang button text
  const langToggleBtn = document.getElementById('langToggle');
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'tr' ? 'EN' : 'TR';
  }

  // Update page title/meta description
  if (lang === 'en') {
    document.title = "Emir Bera Soguk | Software Engineer & Cybersecurity";
  } else {
    document.title = "Emir Bera Soğuk | Yazılım Mühendisi & Siber Güvenlik";
  }

  // Update terminal help placeholder if empty terminal screen
  if (initialHelpOutput) {
    initialHelpOutput.innerHTML = terminalOutputs[lang].help;
  }

  resetTyping();
}

// Theme switcher function
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  const themeToggleBtn = document.getElementById('themeToggle');
  
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  } else {
    document.body.classList.remove('light-theme');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }
}

// Hook toggles
const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const nextLang = currentLanguage === 'tr' ? 'en' : 'tr';
    applyLanguage(nextLang);
  });
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

// Start animations and apply preferences
window.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLanguage);
  applyTheme(currentTheme);
});
