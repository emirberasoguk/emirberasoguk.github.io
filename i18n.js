/**
 * Multilingual i18n Engine for Emir Bera Soguk Portfolio
 * Supports: Turkish (tr), English (en), Spanish (es)
 */

const I18N_DICT = {
    tr: {
        page_title: "Emir Bera Soğuk | Sistem Programlama ve Siber Güvenlik",
        meta_desc: "Emir Bera Soğuk kişisel portfolyosu. C, C++, Linux sistem araçları, siber güvenlik ve açık kaynak projelerim.",
        brand_title: "EMİR BERA SOĞUK",
        nav_projects: "Projeler",
        nav_cv: "Özgeçmiş",
        nav_skills: "Yetkinlikler",
        nav_about: "Hakkımda",
        nav_contact: "İletişim",
        theme_geo: "Geometrik",
        theme_glass: "Cam",
        hero_tagline: "Bilgisayar Mühendisliği & Siber Güvenlik",
        hero_greeting: "Merhaba, Ben",
        hero_role_typing: "Sistem Programlama • Sızma Testi & Red Team • C & Linux",
        hero_manifesto: "Kocaeli Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. C, C++ ve Linux ortamında düşük seviyeli sistem araçları, parola deneme yazılımları ve sızma testi araçları geliştiriyorum. İşin donanıma ve işletim sistemine temas eden kısmıyla ilgileniyorum.",
        btn_download_cv: "CV'yi İndir",
        btn_preview_cv: "Önizle / Aç",
        btn_inspect_github: "GitHub'da İncele",
        btn_copy_email: "emirberasoguk@proton.me",
        copy_badge_ready: "KOPYALA",
        copy_badge_done: "KOPYALANDI!",
        aside_metrics_title: "Mühendislik Metrikleri",
        aside_metrics_desc: "Kocaeli Üniversitesi Bilgisayar Mühendisliği & Red Team Güvenlik Araştırmaları.",
        metric_projects: "Açık Kaynak Proje",
        metric_lang: "Sistem & Araçlar",
        metric_kernel: "sysfs & Çekirdek API",
        metric_role: "Başkan Yardımcısı",
        aside_quote_title: "Pratik & Staj Deneyimi",
        aside_quote_text: "Nesil Teknoloji ve SiberTim'de sızma testi stajları yaptım; Kocaeli Üniversitesi Bilgisayar Kulübü'nde (KOUBK) başkan yardımcılığı yürütüyorum.",
        cv_verified_tag: "Doğrulanmış Belge • PDF (386 KB)",
        cv_main_title: "Emir Bera Soğuk — Curriculum Vitae",
        cv_subtitle: "Teknik deneyimlerimi, projelerimi, üniversite sürecimi ve siber güvenlik sertifikasyonlarımı içeren güncel özgeçmiş dosyam.",
        projects_section_title: "Öne Çıkan Projelerim",
        projects_section_desc: "Linux, C/C++, sistem araçları ve güvenlik üzerine geliştirdiğim açık kaynaklı çalışmalar.",
        projects_badge: "10 Proje Listelendi",
        filter_all: "Tümü (10)",
        filter_c: "C / C++ & Sistem",
        filter_sec: "Siber Güvenlik",
        filter_java: "Java / OOP",
        filter_tools: "CLI & Araçlar",
        
        /* 10 Projects */
        p1_title: "Pi-Cracker",
        p1_badge: "C / Bash • Güvenlik",
        p1_desc: "Pi sayısının basamak örüntülerini ve OSINT verilerini birleştirerek hedef odaklı parola denemeleri yapan C ve Bash tabanlı pentest aracı.",
        
        p2_title: "ghelper-linux",
        p2_badge: "C / Linux sysfs",
        p2_desc: "Linux kurulu ASUS TUF ve ROG dizüstü bilgisayarlarda fan hızlarını, GPU modlarını ve batarya şarj limitini sysfs üzerinden kontrol eden C tabanlı araç.",
        
        p3_title: "me-tor (MiniNotepad)",
        p3_badge: "C# / .NET 10",
        p3_desc: ".NET 10 ile yazdığım, LIFO yığıtı mantığıyla çalışan çok adımlı geri alma/yineleme desteği bulunan VIM esintili terminal metin editörü.",
        
        p4_title: "InstaVault",
        p4_badge: "Python / Gizlilik",
        p4_desc: "Instagram veri dökümlerini tamamen çevrimdışı ortamda ayrıştırıp etkileşim istatistikleri ve takipçi hareketleri sunan Python tabanlı yerel analiz aracı.",
        
        p5_title: "VTYS Simülatörü",
        p5_badge: "Python / SQL",
        p5_desc: "İnteraktif SQL denemeleri, 3NF/BCNF normalizasyon hesapları ve disk I/O sıralama maliyeti analizleri sunan terminal tabanlı veritabanı simülatörü.",
        
        p6_title: "C-ryptFile",
        p6_badge: "C • Kripto & Sıkıştırma",
        p6_desc: "Huffman ağacı ve bit seviyesinde manipülasyonla dosyaları aynı anda hem sıkıştıran hem de şifreleyen C tabanlı konsol uygulaması.",
        
        p7_title: "LidarRansac-C",
        p7_badge: "C • Geometri Algoritmaları",
        p7_desc: "2D LIDAR nokta bulutu verilerinden gürültüyü temizleyip doğruları tespit etmek için C ile sıfırdan yazdığım RANSAC algoritması uygulaması.",
        
        p8_title: "TheLastGarage",
        p8_badge: "Java / LibGDX",
        p8_desc: "LibGDX ve Java ile nesne yönelimli mimaride geliştirdiğim, masaüstü ve Android uyumlu zombi temalı kule savunma oyunu.",
        
        p9_title: "Citation Graph Visualizer",
        p9_badge: "Java / JavaFX",
        p9_desc: "Makale ve yazar ilişkilerini graf algoritmalarıyla (BFS, Dijkstra) işleyip JavaFX arayüzünde görselleştiren masaüstü uygulaması.",
        
        p10_title: "dotfiles",
        p10_badge: "Linux • Hyprland",
        p10_desc: "Kendi Linux iş akışım için kullandığım Hyprland, Neovim (Lua), Kitty terminal ve kabuk betikleri yapılandırmalarım.",
        
        /* Skills */
        skills_section_title: "Teknoloji & Yetkinlikler",
        skills_section_desc: "Aktif olarak kod geliştirdiğim programlama dilleri, kütüphaneler ve sistem araçları.",
        skills_badge: "Mühendislik Altyapısı",
        skill_col1_title: "Sistem & Programlama",
        skill_col2_title: "Güvenlik & Algoritmalar",
        skill_col3_title: "Ortam & Araçlar",
        
        /* About */
        about_section_title: "Hakkımda & Odaklandığım Alanlar",
        about_section_desc: "Sistem programlama ve siber güvenlik tarafındaki pratik çalışmalarım.",
        about_badge: "Deneyim",
        about_card1_tag: "Sistem Programlama",
        about_card1_title: "Düşük Seviye Sistem Araçları",
        about_card1_desc: "C ve C++ ile çalışırken bellek yönetimi ve sistem çağrıları (sysfs, POSIX) üzerinde kod yazıyorum. Fan kontrolünden dosya sıkıştırma ve şifrelemeye kadar doğrudan işletim sistemi arayüzleriyle çalışan araçlar geliştiriyorum.",
        about_card2_tag: "Güvenlik & Ağ",
        about_card2_title: "Sızma Testi ve Zafiyet Analizi",
        about_card2_desc: "SiberTim ve Nesil Teknoloji stajlarımda sızma testleri, kurumsal ağ keşfi, web zafiyet analizleri ve Wi-Fi güvenliği üzerine çalıştım. Yazdığım araçlarda girdi doğrulaması ve yetki sınırlarını baştan hesaba katıyorum.",
        
        /* Contact */
        contact_title: "Birlikte Yeni Projeler İnşa Edelim.",
        contact_desc: "Sistem programlama, siber güvenlik, açık kaynak katkıları veya staj/iş olanakları için doğrudan iletişime geçebilirsiniz.",
        contact_badge: "04 // BAĞLANTI & İLETİŞİM",
        
        /* Footer & Toast */
        footer_copy: "© 2026 TÜM HAKLARI SAKLIDIR.",
        footer_tag: "EMİR BERA SOĞUK • SİSTEM PROGRAMLAMA & SİBER GÜVENLİK",
        footer_back_top: "BAŞA DÖN ↑",
        toast_copy_success: "E-posta adresi panoya kopyalandı: ",
        destroy_title: "Bu siteyi parçala!"
    },
    en: {
        page_title: "Emir Bera Soguk | Systems Programming & Cybersecurity",
        meta_desc: "Emir Bera Soguk portfolio. C, C++, Linux systems utilities, cybersecurity research, and open-source projects.",
        brand_title: "EMIR BERA SOGUK",
        nav_projects: "Projects",
        nav_cv: "Resume",
        nav_skills: "Skills",
        nav_about: "About",
        nav_contact: "Contact",
        theme_geo: "Geometric",
        theme_glass: "Glass",
        hero_tagline: "Computer Engineering & Cybersecurity",
        hero_greeting: "Hello, I am",
        hero_role_typing: "Systems Programming • Pentesting & Red Team • C & Linux",
        hero_manifesto: "Computer Engineering student at Kocaeli University. I develop low-level systems utilities, password assessment tools, and penetration testing software in C, C++, and Linux. Focused on hardware interfaces and operating system internals.",
        btn_download_cv: "Download CV",
        btn_preview_cv: "Preview / Open",
        btn_inspect_github: "View on GitHub",
        btn_copy_email: "emirberasoguk@proton.me",
        copy_badge_ready: "COPY",
        copy_badge_done: "COPIED!",
        aside_metrics_title: "Engineering Metrics",
        aside_metrics_desc: "Kocaeli University Computer Engineering & Red Team Security Research.",
        metric_projects: "Open Source Projects",
        metric_lang: "Systems & Tools",
        metric_kernel: "sysfs & Kernel API",
        metric_role: "Vice President",
        aside_quote_title: "Practical & Internship Experience",
        aside_quote_text: "Completed cybersecurity penetration testing internships at Nesil Teknoloji and SiberTim; serving as Vice President of the Kocaeli University Computer Club (KOUBK).",
        cv_verified_tag: "Verified Document • PDF (386 KB)",
        cv_main_title: "Emir Bera Soguk — Curriculum Vitae",
        cv_subtitle: "Current verified resume covering technical experience, open-source projects, academic background, and certifications.",
        projects_section_title: "Featured Projects",
        projects_section_desc: "Open-source work spanning Linux utilities, C/C++ tools, security research, and algorithms.",
        projects_badge: "10 Projects Listed",
        filter_all: "All (10)",
        filter_c: "C / C++ & Systems",
        filter_sec: "Cybersecurity",
        filter_java: "Java / OOP",
        filter_tools: "CLI & Tools",
        
        /* 10 Projects */
        p1_title: "Pi-Cracker",
        p1_badge: "C / Bash • Security",
        p1_desc: "Targeted password cracking tool in C and Bash combining Pi digit patterns with OSINT data for dictionary permutation attacks.",
        
        p2_title: "ghelper-linux",
        p2_badge: "C / Linux sysfs",
        p2_desc: "C hardware utility controlling fan speeds, GPU power modes, and battery charge thresholds on ASUS TUF/ROG laptops via Linux sysfs.",
        
        p3_title: "me-tor (MiniNotepad)",
        p3_badge: "C# / .NET 10",
        p3_desc: "VIM-inspired terminal text editor written in .NET 10 featuring multi-level undo/redo driven by a memory-efficient LIFO stack.",
        
        p4_title: "InstaVault",
        p4_badge: "Python / Privacy",
        p4_desc: "Offline Python analytics utility parsing exported Instagram archives for local engagement metrics, follower tracking, and privacy auditing.",
        
        p5_title: "VTYS Simulator",
        p5_badge: "Python / SQL",
        p5_desc: "Terminal database simulator featuring interactive SQL drills, 3NF/BCNF normalization algorithms, and disk I/O sorting cost models.",
        
        p6_title: "C-ryptFile",
        p6_badge: "C • Crypto & Compression",
        p6_desc: "High-performance C console tool that simultaneously compresses and encrypts files using bitwise Huffman tree manipulation.",
        
        p7_title: "LidarRansac-C",
        p7_badge: "C • Geometry & Point Cloud",
        p7_desc: "Pure C implementation of the RANSAC algorithm for noise filtration and geometrical line detection in 2D LIDAR point clouds.",
        
        p8_title: "TheLastGarage",
        p8_badge: "Java / LibGDX",
        p8_desc: "Cross-platform 2D zombie tower defense game developed in Java with LibGDX adhering to clean object-oriented architecture.",
        
        p9_title: "Citation Graph Visualizer",
        p9_badge: "Java / JavaFX",
        p9_desc: "JavaFX desktop application visualizing academic papers and citation networks using graph algorithms (BFS, Dijkstra).",
        
        p10_title: "dotfiles",
        p10_badge: "Linux • Hyprland",
        p10_desc: "Personal Linux workflow configurations for Hyprland Wayland compositor, Neovim (Lua), Kitty terminal, and custom shell scripts.",
        
        /* Skills */
        skills_section_title: "Technologies & Skills",
        skills_section_desc: "Active programming languages, system libraries, and developer tools in my daily workflow.",
        skills_badge: "Technical Stack",
        skill_col1_title: "Systems & Languages",
        skill_col2_title: "Security & Algorithms",
        skill_col3_title: "Environment & Tools",
        
        /* About */
        about_section_title: "About Me & Focus Areas",
        about_section_desc: "Practical focus areas in low-level systems programming and offensive cybersecurity.",
        about_badge: "Background",
        about_card1_tag: "Systems Programming",
        about_card1_title: "Low-Level Systems Utilities",
        about_card1_desc: "Writing code close to the operating system using C and C++ with direct memory management and kernel interfaces (sysfs, POSIX). Building tools that directly manipulate system resources from fan control to bitwise compression.",
        about_card2_tag: "Security & Networking",
        about_card2_title: "Penetration Testing & Red Teaming",
        about_card2_desc: "Gained hands-on penetration testing, network reconnaissance, web vulnerability analysis, and Wi-Fi auditing experience during internships at SiberTim and Nesil Teknoloji. Prioritizing input validation and privilege boundaries by design.",
        
        /* Contact */
        contact_title: "Let's Build New Systems Together.",
        contact_desc: "Available for systems programming projects, open-source collaborations, and internship or engineering opportunities.",
        contact_badge: "04 // GET IN TOUCH",
        
        /* Footer & Toast */
        footer_copy: "© 2026 ALL RIGHTS RESERVED.",
        footer_tag: "EMIR BERA SOGUK • SYSTEMS PROGRAMMING & CYBERSECURITY",
        footer_back_top: "BACK TO TOP ↑",
        toast_copy_success: "Email address copied to clipboard: ",
        destroy_title: "Destroy this website!"
    },
    es: {
        page_title: "Emir Bera Soguk | Programación de Sistemas y Ciberseguridad",
        meta_desc: "Portafolio de Emir Bera Soguk. C, C++, herramientas de sistemas Linux, ciberseguridad y proyectos de código abierto.",
        brand_title: "EMIR BERA SOGUK",
        nav_projects: "Proyectos",
        nav_cv: "Currículum",
        nav_skills: "Habilidades",
        nav_about: "Sobre mí",
        nav_contact: "Contacto",
        theme_geo: "Geométrico",
        theme_glass: "Cristal",
        hero_tagline: "Ingeniería Informática y Ciberseguridad",
        hero_greeting: "Hola, soy",
        hero_role_typing: "Programación de Sistemas • Pentesting & Red Team • C y Linux",
        hero_manifesto: "Estudiante de Ingeniería Informática en la Universidad de Kocaeli. Desarrollo herramientas de sistemas de bajo nivel, software de evaluación de contraseñas y utilidades de pentesting en C, C++ y Linux, enfocado en interfaces de hardware y el núcleo del sistema.",
        btn_download_cv: "Descargar CV",
        btn_preview_cv: "Vista Previa / Abrir",
        btn_inspect_github: "Ver en GitHub",
        btn_copy_email: "emirberasoguk@proton.me",
        copy_badge_ready: "COPIAR",
        copy_badge_done: "¡COPIADO!",
        aside_metrics_title: "Métricas de Ingeniería",
        aside_metrics_desc: "Ingeniería Informática en la Universidad de Kocaeli e Investigación de Seguridad Red Team.",
        metric_projects: "Proyectos Abiertos",
        metric_lang: "Sistemas y Herramientas",
        metric_kernel: "sysfs y API del Kernel",
        metric_role: "Vicepresidente",
        aside_quote_title: "Experiencia Práctica",
        aside_quote_text: "Completé prácticas de pruebas de penetración en Nesil Teknoloji y SiberTim; ejerzo como Vicepresidente del Club de Informática de la Universidad de Kocaeli (KOUBK).",
        cv_verified_tag: "Documento Verificado • PDF (386 KB)",
        cv_main_title: "Emir Bera Soguk — Curriculum Vitae",
        cv_subtitle: "CV actualizado con experiencia técnica, proyectos de código abierto, trayectoria académica y certificaciones.",
        projects_section_title: "Proyectos Destacados",
        projects_section_desc: "Trabajos de código abierto en utilidades de Linux, herramientas en C/C++, ciberseguridad y algoritmos.",
        projects_badge: "10 Proyectos Listados",
        filter_all: "Todos (10)",
        filter_c: "C / C++ y Sistemas",
        filter_sec: "Ciberseguridad",
        filter_java: "Java / OOP",
        filter_tools: "CLI y Herramientas",
        
        /* 10 Projects */
        p1_title: "Pi-Cracker",
        p1_badge: "C / Bash • Seguridad",
        p1_desc: "Herramienta de pentesting en C y Bash que combina patrones de dígitos de Pi con datos OSINT para ataques de contraseñas dirigidos.",
        
        p2_title: "ghelper-linux",
        p2_badge: "C / Linux sysfs",
        p2_desc: "Utilidad en C para controlar ventiladores, modos de GPU y límite de carga de batería en portátiles ASUS TUF/ROG mediante Linux sysfs.",
        
        p3_title: "me-tor (MiniNotepad)",
        p3_badge: "C# / .NET 10",
        p3_desc: "Editor de texto para terminal inspirado en VIM en .NET 10 con deshacer/rehacer multinivel basado en pila LIFO eficiente.",
        
        p4_title: "InstaVault",
        p4_badge: "Python / Privacidad",
        p4_desc: "Herramienta offline en Python para analizar volcados de datos de Instagram con métricas de interacción locales y auditoría de privacidad.",
        
        p5_title: "Simulador VTYS",
        p5_badge: "Python / SQL",
        p5_desc: "Simulador de base de datos en terminal con ejercicios interactivos de SQL, normalización 3NF/BCNF y análisis de costes de disco I/O.",
        
        p6_title: "C-ryptFile",
        p6_badge: "C • Criptografía y Compresión",
        p6_desc: "Aplicación de consola en C que comprime y cifra archivos simultáneamente mediante árbol de Huffman y manipulación a nivel de bits.",
        
        p7_title: "LidarRansac-C",
        p7_badge: "C • Geometría y Nube de Puntos",
        p7_desc: "Implementación en C puro del algoritmo RANSAC para filtrado de ruido y detección de líneas en nubes de puntos LIDAR 2D.",
        
        p8_title: "TheLastGarage",
        p8_badge: "Java / LibGDX",
        p8_desc: "Juego multiplataforma de defensa de torres contra zombis desarrollado en Java con LibGDX siguiendo diseño orientado a objetos.",
        
        p9_title: "Citation Graph Visualizer",
        p9_badge: "Java / JavaFX",
        p9_desc: "Aplicación de escritorio en JavaFX que visualiza artículos científicos y redes de citas mediante algoritmos de grafos (BFS, Dijkstra).",
        
        p10_title: "dotfiles",
        p10_badge: "Linux • Hyprland",
        p10_desc: "Configuraciones personales para el compositor Hyprland (Wayland), Neovim (Lua), terminal Kitty y scripts de shell.",
        
        /* Skills */
        skills_section_title: "Tecnología y Habilidades",
        skills_section_desc: "Lenguajes de programación, librerías del sistema y herramientas con las que desarrollo activamente.",
        skills_badge: "Stack Técnico",
        skill_col1_title: "Sistemas y Lenguajes",
        skill_col2_title: "Seguridad y Algoritmos",
        skill_col3_title: "Entorno y Herramientas",
        
        /* About */
        about_section_title: "Sobre mí y Áreas de Enfoque",
        about_section_desc: "Enfoque práctico en programación de sistemas de bajo nivel y ciberseguridad ofensiva.",
        about_badge: "Trayectoria",
        about_card1_tag: "Programación de Sistemas",
        about_card1_title: "Herramientas de Sistemas de Bajo Nivel",
        about_card1_desc: "Desarrollo software cercano al sistema operativo utilizando C y C++ con gestión manual de memoria y llamadas al núcleo (sysfs, POSIX). Construyo herramientas que interactúan directamente con los recursos del hardware.",
        about_card2_tag: "Seguridad y Redes",
        about_card2_title: "Pruebas de Penetración y Red Teaming",
        about_card2_desc: "Experiencia en pentesting, reconocimiento de redes, análisis de vulnerabilidades web y auditoría Wi-Fi durante prácticas en SiberTim y Nesil Teknoloji. Priorizo la validación estricta de entradas y los límites de privilegios.",
        
        /* Contact */
        contact_title: "Construyamos Nuevos Sistemas Juntos.",
        contact_desc: "Disponible para proyectos de programación de sistemas, colaboraciones de código abierto y oportunidades laborales.",
        contact_badge: "04 // CONTACTO DIRECTO",
        
        /* Footer & Toast */
        footer_copy: "© 2026 TODOS LOS DERECHOS RESERVADOS.",
        footer_tag: "EMIR BERA SOGUK • PROGRAMACIÓN DE SISTEMAS Y CIBERSEGURIDAD",
        footer_back_top: "VOLVER ARRIBA ↑",
        toast_copy_success: "Correo electrónico copiado al portapapeles: ",
        destroy_title: "¡Destruye este sitio web!"
    }
};

let currentLang = 'tr';

function initI18n() {
    // 1. Detect saved or browser language
    const saved = localStorage.getItem('ebs_lang');
    if (saved && ['tr', 'en', 'es'].includes(saved)) {
        currentLang = saved;
    } else {
        const navLang = navigator.language || navigator.userLanguage || 'tr';
        if (navLang.startsWith('es')) currentLang = 'es';
        else if (navLang.startsWith('en')) currentLang = 'en';
        else currentLang = 'tr';
    }

    applyLanguage(currentLang);
}

function setLanguage(lang) {
    if (!['tr', 'en', 'es'].includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('ebs_lang', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    const dict = I18N_DICT[lang] || I18N_DICT.tr;
    document.documentElement.lang = lang;

    // Update document title and description
    if (dict.page_title) document.title = dict.page_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta_desc) metaDesc.setAttribute('content', dict.meta_desc);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            // If element has icon children (like buttons), only update text or inner span
            const textSpan = el.querySelector('.i18n-text');
            if (textSpan) {
                textSpan.textContent = dict[key];
            } else if (el.children.length === 0) {
                el.textContent = dict[key];
            } else {
                // If element has mixed icon + text, find the first text node
                let updated = false;
                for (let node of el.childNodes) {
                    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
                        node.nodeValue = ' ' + dict[key] + ' ';
                        updated = true;
                        break;
                    }
                }
                if (!updated) {
                    el.textContent = dict[key];
                }
            }
        }
    });

    // Update active state in language selector pills
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Expose globally
window.I18N_DICT = I18N_DICT;
window.setLanguage = setLanguage;
window.initI18n = initI18n;

document.addEventListener('DOMContentLoaded', initI18n);
