const translations = {
  en: {
    skip: "Skip to content", navLabel: "Main navigation", menu: "Menu", navHome: "Home", navAbout: "About", navNow: "Now", navInterests: "Interests", navProjects: "Projects", navInternational: "International", navEngineering: "Engineering", navCollaborate: "Collaborate",
    heroEyebrow: "Istanbul · Türkiye", heroRole: "Engineer. Athlete. Builder.", heroIntro: "Exploring technology, business, performance and content.", heroAbout: "About Me", heroProjects: "Current Projects", heroCollaborate: "Collaborate", heroAlt: "Portrait of Onuralp Turgut overlooking Istanbul at night", portraitCaption: "Onuralp, in Istanbul",
    aboutTitle: "About", aboutTextOne: "I’m Onuralp Turgut, studying Electronics and Communication Engineering at Istanbul Technical University. I’m ambitious, curious and driven by the idea of building something of my own.", aboutTextTwo: "My interests span technology, entrepreneurship, content creation and personal performance. Outside engineering, I run, train in kickboxing, create content and experiment with new projects.", aboutNote: "Curious by nature.<br>Consistent by choice.",
    nowTitle: "Now", nowKicker: "What I’m focused on right now.",
    now: ["Building independent digital projects", "Learning how to turn ideas into products and businesses", "Developing my personal brand", "Training to become a faster and stronger runner", "Practicing kickboxing consistently", "Exploring AI-assisted workflows and automation", "Improving my skills in analog and RF integrated circuit design", "Preparing for research and industry experience", "Connecting with people and exploring meaningful collaborations"],
    interestsTitle: "Interests", interestsKicker: "The subjects and disciplines that shape my perspective.", interests: ["Running", "Kickboxing", "Style & Aesthetics", "Ideas & Learning", "Content Creation", "Entrepreneurship", "AI & Automation", "Technology & Engineering"],
    projectsTitle: "Current Projects", projectsKicker: "Learning in public, building through practice.", projects: [
      ["Short-Form Content", "Creating and publishing consistent content while improving storytelling, filming and editing."], ["AI-Assisted Systems & Automation", "Exploring web development, AI tools and repeatable digital workflows."], ["Independent Business Experiments", "Learning how to turn ideas into products, services and sustainable businesses."], ["Physical Performance", "Improving strength, endurance and athletic performance through running and kickboxing."], ["Analog & RF Integrated Circuit Design", "Developing my technical skills through engineering projects, research and industry experience."]],
    internationalTitle: "International Experience", internationalKicker: "Experiences that shaped my independence, communication and adaptability.", international: [
      ["Work & Travel — United States", "Three summers, 2023–2025 · New York & Montana", "Spent three summers living and working in the United States across hospitality and service roles. The experience strengthened my English, independence, communication skills, adaptability and ability to perform in fast-paced environments."]],
    engineeringTitle: "Engineering", engineeringKicker: "A focused part of a broader path.", engineering: [
      ["Education", ["Istanbul Technical University", "Electronics and Communication Engineering"]], ["Areas of Interest", ["Analog IC Design", "Mixed-Signal Systems", "RF Integrated Circuits", "Antennas and RF Systems"]], ["Selected Projects", ["Two-Stage CMOS Operational Amplifier", "100 MHz CMOS Ring Oscillator", "2.45 GHz PIFA Antenna Array and Beam Steering"]], ["Current Experience", ["Undergraduate Researcher", "ITU VLSI Measurement Laboratory"]], ["Upcoming Experience — Summer 2026", ["Incoming Intern", "TÜBİTAK BİLGEM TÜTEL"], "upcoming"]],
    linkedinButton: "View on LinkedIn ↗", collaborateTitle: "Let’s build something meaningful.", collaborateText: "I’m open to meaningful collaborations, creative projects, business ideas and opportunities across technology, content and performance.", connectButton: "Let’s Connect", location: "Istanbul, Türkiye"
  },
  tr: {
    skip: "İçeriğe geç", navLabel: "Ana navigasyon", menu: "Menü", navHome: "Ana Sayfa", navAbout: "Hakkımda", navNow: "Şimdi", navInterests: "İlgi Alanları", navProjects: "Projeler", navInternational: "Uluslararası", navEngineering: "Mühendislik", navCollaborate: "İş Birliği",
    heroEyebrow: "İstanbul · Türkiye", heroRole: "Mühendis. Sporcu. Üretici.", heroIntro: "Teknoloji, girişimcilik, performans ve içerik üretimi üzerine çalışıyorum.", heroAbout: "Hakkımda", heroProjects: "Güncel Projeler", heroCollaborate: "İş Birliği", heroAlt: "Onuralp Turgut'un gece İstanbul manzarası önündeki portresi", portraitCaption: "Onuralp, İstanbul’da",
    aboutTitle: "Hakkımda", aboutTextOne: "Ben Onuralp Turgut. İstanbul Teknik Üniversitesi’nde Elektronik ve Haberleşme Mühendisliği okuyorum. Hırslı, meraklı ve kendi projelerimi inşa etme isteğiyle hareket eden biriyim.", aboutTextTwo: "Teknoloji, girişimcilik, içerik üretimi ve kişisel performans alanlarıyla ilgileniyorum. Mühendisliğin dışında koşuyor, kickboks yapıyor, içerik üretiyor ve yeni projeler deniyorum.", aboutNote: "Doğam gereği meraklı.<br>Tercihimle istikrarlı.",
    nowTitle: "Şimdi", nowKicker: "Şu anda odaklandığım konular.",
    now: ["Bağımsız dijital projeler geliştiriyorum", "Fikirleri ürünlere ve işlere dönüştürmeyi öğreniyorum", "Kişisel markamı geliştiriyorum", "Daha hızlı ve güçlü bir koşucu olmak için çalışıyorum", "Düzenli olarak kickboks yapıyorum", "Yapay zekâ destekli iş akışları ve otomasyonları keşfediyorum", "Analog ve RF entegre devre tasarımındaki becerilerimi geliştiriyorum", "Araştırma ve sektör deneyimine hazırlanıyorum", "Yeni insanlarla bağlantı kuruyor ve anlamlı iş birlikleri arıyorum"],
    interestsTitle: "İlgi Alanları", interestsKicker: "Bakış açımı şekillendiren konular ve disiplinler.", interests: ["Koşu", "Kickboks", "Stil ve Estetik", "Fikirler ve Öğrenme", "İçerik Üretimi", "Girişimcilik", "Yapay Zekâ ve Otomasyon", "Teknoloji ve Mühendislik"],
    projectsTitle: "Güncel Projeler", projectsKicker: "Uygulayarak öğreniyor, üreterek ilerliyorum.", projects: [
      ["Kısa Format İçerik", "Düzenli içerik üretip yayınlarken hikâye anlatımı, çekim ve kurgu becerilerimi geliştiriyorum."], ["Yapay Zekâ Destekli Sistemler ve Otomasyon", "Web geliştirme, yapay zekâ araçları ve tekrar kullanılabilir dijital iş akışlarını keşfediyorum."], ["Bağımsız İş Deneyleri", "Fikirleri ürünlere, hizmetlere ve sürdürülebilir işlere dönüştürmeyi öğreniyorum."], ["Fiziksel Performans", "Koşu ve kickboks aracılığıyla güç, dayanıklılık ve atletik performansımı geliştiriyorum."], ["Analog ve RF Entegre Devre Tasarımı", "Mühendislik projeleri, araştırma ve sektör deneyimi aracılığıyla teknik becerilerimi geliştiriyorum."]],
    internationalTitle: "Uluslararası Deneyim", internationalKicker: "Bağımsızlığımı, iletişimimi ve uyum becerilerimi geliştiren deneyimler.", international: [
      ["Work & Travel — Amerika Birleşik Devletleri", "Üç yaz, 2023–2025 · New York ve Montana", "Amerika Birleşik Devletleri’nde üç yaz boyunca konaklama ve hizmet sektörlerinde çalıştım. Bu deneyim İngilizcemi, bağımsızlığımı, iletişim becerilerimi, uyum yeteneğimi ve yoğun ortamlarda çalışma kapasitemi geliştirdi."]],
    engineeringTitle: "Mühendislik", engineeringKicker: "Daha geniş bir yolculuğun odaklı bir parçası.", engineering: [
      ["Eğitim", ["İstanbul Teknik Üniversitesi", "Elektronik ve Haberleşme Mühendisliği"]], ["İlgi Alanları", ["Analog Entegre Devre Tasarımı", "Karma İşaretli Sistemler", "RF Entegre Devreler", "Antenler ve RF Sistemleri"]], ["Seçili Projeler", ["İki Kademeli CMOS İşlemsel Yükselteç", "100 MHz CMOS Halka Osilatör", "2,45 GHz PIFA Anten Dizisi ve Hüzme Yönlendirme"]], ["Güncel Deneyim", ["Lisans Araştırmacısı", "İTÜ VLSI Ölçüm Laboratuvarı"]], ["Yaklaşan Deneyim — 2026 Yazı", ["Stajyer", "TÜBİTAK BİLGEM TÜTEL"], "upcoming"]],
    linkedinButton: "LinkedIn’de Görüntüle ↗", collaborateTitle: "Birlikte anlamlı bir şey üretelim.", collaborateText: "Teknoloji, içerik, iş geliştirme ve performans alanlarında anlamlı iş birliklerine, yaratıcı projelere ve yeni fırsatlara açığım.", connectButton: "İletişime Geç", location: "İstanbul, Türkiye"
  }
};

const nowList = document.querySelector("#now-list");
const interestsList = document.querySelector("#interests-list");
const projectsList = document.querySelector("#projects-list");
const internationalList = document.querySelector("#international-list");
const engineeringGrid = document.querySelector("#engineering-grid");

function renderLists(content) {
  nowList.innerHTML = content.now.map(item => `<li>${item}</li>`).join("");
  interestsList.innerHTML = content.interests.map(item => `<li>${item}</li>`).join("");
  projectsList.innerHTML = content.projects.map(([title, description], index) => `<article class="project"><span class="project-num">0${index + 1}</span><h3>${title}</h3><p>${description}</p></article>`).join("");
  internationalList.innerHTML = content.international.map(([title, period, description], index) => `<article class="international-entry"><span class="project-num">0${index + 1}</span><div><h3>${title}</h3><p class="period">${period}</p></div><p class="description">${description}</p></article>`).join("");
  engineeringGrid.innerHTML = content.engineering.map(([title, items, status]) => `<article class="engineering-group${status ? ` ${status}` : ""}"><h3>${title}</h3><ul>${items.map(item => `<li>${item}</li>`).join("")}</ul></article>`).join("");
}

function setLanguage(language) {
  const lang = translations[language] ? language : "en";
  const content = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = content[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(element => element.alt = content[element.dataset.i18nAlt]);
  document.querySelectorAll("[data-i18n-aria]").forEach(element => element.setAttribute("aria-label", content[element.dataset.i18nAria]));
  document.querySelectorAll("[data-lang]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));
  document.title = lang === "tr" ? "Onuralp Turgut — Mühendis. Sporcu. Üretici." : "Onuralp Turgut — Engineer. Athlete. Builder.";
  renderLists(content);
  localStorage.setItem("language", lang);
}

document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
document.querySelector("#year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), { passive: true });

const menuButton = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
menuButton.addEventListener("click", () => {
  const open = navPanel.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navPanel.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navPanel.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
}));

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
} else document.querySelectorAll(".reveal").forEach(element => element.classList.add("visible"));

setLanguage(localStorage.getItem("language") || "en");
