// Typing Animation for Hero Subtitle
const typingText = document.getElementById('typing-text');
const roles = [
    "Yazılım Mühendisi",
    "C / Python / Java Geliştiricisi",
    "Siber Güvenlik Meraklısı",
    "Linux Kullanıcısı"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

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
        typeSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500; // Pause before starting next word
    }
    
    setTimeout(type, typeSpeed);
}

// Project Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
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

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when nav link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Interactive Kitty Terminal Simulator
const terminalInput = document.getElementById('terminalInput');
const terminalScreen = document.getElementById('terminalScreen');

const termHelpText = `Kullanılabilir komutlar:
  <div class="term-line"><span class="text-cyan term-line-cmd">help</span><span class="term-line-desc">: Komut listesini gösterir</span></div>
  <div class="term-line"><span class="text-purple term-line-cmd">neofetch</span><span class="term-line-desc">: Sistem ve kullanıcı bilgilerini görüntüler</span></div>
  <div class="term-line"><span class="text-green term-line-cmd">projects</span><span class="term-line-desc">: Projelerin terminal çıktısını listeler</span></div>
  <div class="term-line"><span class="text-pink term-line-cmd">skills</span><span class="term-line-desc">: Yetenek ve teknoloji listesini yazdırır</span></div>
  <div class="term-line"><span class="text-yellow term-line-cmd">contact</span><span class="term-line-desc">: İletişim ve sosyal medya bağlantılarını gösterir</span></div>
  <div class="term-line"><span class="text-red term-line-cmd">clear</span><span class="term-line-desc">: Terminal ekranını temizler</span></div>`;

const neofetchOutput = `      <span class="text-cyan">  .---.</span>       <span class="text-green">emir</span>@<span class="text-cyan">linux-kitty</span>
      <span class="text-cyan"> |o_o  |</span>      -----------------
      <span class="text-cyan"> |:_/  |</span>      <span class="text-purple">İsim</span>: Emir Bera Soğuk
     <span class="text-cyan">//   \\ \\</span>     <span class="text-purple">Alan</span>: Yazılım Mühendisliği & Siber Güvenlik
    <span class="text-cyan">(|     | )</span>    <span class="text-purple">OS</span>: GNU/Linux
    <span class="text-cyan">/'\_   _/`\\</span>   <span class="text-purple">Shell</span>: zsh / kitty
    <span class="text-cyan">\\___)=(___/</span>  <span class="text-purple">Odak</span>: Algoritmalar, Sistem Programlama, OOP
                  <span class="text-purple">Hedef</span>: Karmaşık problemleri basit kodlarla çözmek.`;

const projectsOutput = `Bulunan Projeler:
  <div class="term-line"><span class="text-cyan term-line-cmd">Pi-Cracker</span><span class="term-line-desc">: Pi sayısıyla şifre analizi ve kırma (C/Bash/Security)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">C-ryptFile</span><span class="term-line-desc">: Huffman kodlamalı şifreleme & sıkıştırma (C/Security)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">LidarRansac-C</span><span class="term-line-desc">: Lidar bulutu üzerinde RANSAC algoritması (C/Robotics)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">TheLastGarage</span><span class="term-line-desc">: Post-apokaliptik kule savunma oyunu (Java/Game)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">Citation-Graph</span><span class="term-line-desc">: Akademik atıf ağları grafik analizcisi (Java/Graph)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">me-tor</span><span class="term-line-desc">: Terminal tabanlı metin editörü (C#/System)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">Vampire-Clone</span><span class="term-line-desc">: Godot rogue-like hayatta kalma oyunu (Godot/Game)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">ghelper-linux</span><span class="term-line-desc">: Sistem durum & donanım izleme aracı (C/Linux)</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">Cyberlogy</span><span class="term-line-desc">: Ağ paketi koklayıcı ve Eve-NG entegratörü (Python/Security)</span></div>

Daha fazla detay için yukarıdaki Projeler sekmesini ziyaret edebilirsiniz.`;

const skillsOutput = `Beceriler & Teknolojiler:
  <div class="term-line"><span class="text-red term-line-cmd">Diller</span><span class="term-line-desc">: C, C++, Python, Java, C#, Verilog, GDScript, Bash</span></div>
  <div class="term-line"><span class="text-green term-line-cmd">Sistemler</span><span class="term-line-desc">: Linux, Windows, Git/GitHub, Docker</span></div>
  <div class="term-line"><span class="text-purple term-line-cmd">Güvenlik</span><span class="term-line-desc">: Ağ Analizi, Sniffing, OSINT, Kriptografi Temelleri</span></div>
  <div class="term-line"><span class="text-yellow term-line-cmd">Geliştirme</span><span class="term-line-desc">: OOP Tasarım, Veri Yapıları & Algoritmalar, JavaFX, Godot Engine</span></div>
  <div class="term-line"><span class="text-cyan term-line-cmd">Ortam</span><span class="term-line-desc">: Neovim, Kitty Terminal, Bash Scripting</span></div>`;

const contactOutput = `İletişim Bilgileri:
  <div class="term-line"><span class="text-cyan term-line-cmd">E-posta</span><span class="term-line-desc">: emirberasoguk@proton.me</span></div>
  <div class="term-line"><span class="text-purple term-line-cmd">LinkedIn</span><span class="term-line-desc">: linkedin.com/in/emirberasoguk/</span></div>
  <div class="term-line"><span class="text-green term-line-cmd">GitHub</span><span class="term-line-desc">: github.com/emirberasoguk</span></div>`;

if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            executeCommand(command);
            terminalInput.value = '';
        }
    });

    // Make clicking the terminal screen focus the input
    terminalScreen.addEventListener('click', () => {
        terminalInput.focus();
    });
}

function executeCommand(cmd) {
    // Create element for output
    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output-block';
    
    // Command echo
    let echo = `<div class="terminal-input-echo"><span class="terminal-prompt">emir@linux-kitty <span class="logo-tilde">~</span> ></span> <span class="text-main">${cmd}</span></div>`;
    let response = '';
    
    if (cmd !== '') {
        switch (cmd) {
            case 'help':
                response = `<div class="term-response">${termHelpText}</div>`;
                break;
            case 'neofetch':
                response = `<div class="term-response neofetch-terminal-view">${neofetchOutput}</div>`;
                break;
            case 'projects':
                response = `<div class="term-response">${projectsOutput}</div>`;
                break;
            case 'skills':
                response = `<div class="term-response">${skillsOutput}</div>`;
                break;
            case 'contact':
            case 'social':
                response = `<div class="term-response">${contactOutput}</div>`;
                break;
            case 'clear':
                // Clear all previous lines
                const outputElements = terminalScreen.querySelectorAll('.terminal-output-block');
                outputElements.forEach(el => el.remove());
                const welcomeElement = terminalScreen.querySelector('.terminal-output');
                if (welcomeElement) welcomeElement.remove();
                return; // Nothing to print
            default:
                response = `<div class="term-response text-red">bash: command not found: ${cmd}. Yardım almak için 'help' yazın.</div>`;
                break;
        }
    }
    
    outputDiv.innerHTML = echo + response;
    
    // Insert output before input line
    const inputLine = terminalScreen.querySelector('.terminal-input-line');
    terminalScreen.insertBefore(outputDiv, inputLine);
    
    // Auto scroll to bottom
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
}

// Copy Email to Clipboard Logic
const copyEmailBtn = document.getElementById('copyEmailBtn');
const emailAddressText = document.getElementById('emailAddress');

if (copyEmailBtn && emailAddressText) {
    copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(emailAddressText.textContent.trim()).then(() => {
            const originalHTML = copyEmailBtn.innerHTML;
            copyEmailBtn.innerHTML = '<i class="fa-solid fa-check"></i> Kopyalandı!';
            copyEmailBtn.classList.add('copied');
            setTimeout(() => {
                copyEmailBtn.innerHTML = originalHTML;
                copyEmailBtn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Kopyalama hatası:', err);
        });
    });
}

// Start Typing Animation on page load
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});
