const translations = {
  en: {
    skip: "Skip to content", navLabel: "Main navigation", menu: "Menu", navHome: "Home", navAbout: "About", navNow: "Now", navInterests: "Interests", navProjects: "Projects", navInternational: "International", navEngineering: "Engineering", navCollaborate: "Collaborate",
    heroEyebrow: "Istanbul · Türkiye", heroRole: "Engineer. Athlete. Builder.", heroIntro: "Exploring technology, business, performance, and content.", heroAbout: "About Me", heroProjects: "Current Projects", heroCollaborate: "Collaborate", heroAlt: "Portrait of Onuralp Turgut overlooking Istanbul at night", portraitCaption: "Onuralp, in Istanbul",
    aboutTitle: "About", aboutTextOne: "I study Electronics and Communication Engineering at Istanbul Technical University, with interests in technology, entrepreneurship, content creation, and physical performance.", aboutTextTwo: "Driven by curiosity and the ambition to build something of my own, I work on independent projects, train consistently in running and kickboxing, and explore new ideas across engineering, business, and digital systems.", aboutNote: "Curious by nature.<br>Consistent by choice.",
    nowTitle: "Now", nowKicker: "What I’m focused on right now.",
    now: [["Digital Projects", "Building independent projects with AI-assisted workflows and automation."], ["Business", "Learning how to turn ideas into products and businesses."], ["Content", "Creating short-form content consistently."], ["Training", "Training consistently in running and kickboxing."]],
    interestsTitle: "Interests", interestsKicker: "The subjects and disciplines that shape my perspective.", professionalInterestsTitle: "Professional Interests", personalInterestsTitle: "Personal Interests", professionalInterests: ["Technology & Engineering", "AI & Automation", "Entrepreneurship", "Content Creation"], personalInterests: ["Running", "Kickboxing", "Style & Aesthetics", "Ideas & Learning"],
    projectsTitle: "Current Projects", projectsKicker: "Learning in public, building through practice.", projects: [
      ["Short-Form Content", "Creating and publishing short-form content consistently while improving my storytelling, filming, and editing skills."], ["AI-Assisted Systems & Automation", "Exploring web development, AI tools, and repeatable digital workflows."], ["Independent Business Experiments", "Researching products, markets, and customer needs while learning the fundamentals of advertising, sales, and launching small digital businesses."]],
    internationalTitle: "International Experience", internationalKicker: "Experiences that shaped my independence, communication skills, and adaptability.", international: [
      ["Work & Travel — United States", "Three summers, 2023–2025 · New York & Montana", "I spent three summers living and working in the United States in hospitality and service roles. These experiences strengthened my English, independence, communication skills, adaptability, and ability to perform in fast-paced environments."]],
    engineeringTitle: "Engineering", engineeringKicker: "A focused part of a broader path.", engineering: [
      ["Education", ["B.Sc. in Electronics and Communication Engineering", "Istanbul Technical University"]], ["Areas of Interest", ["Analog IC Design", "Mixed-Signal Systems", "RF Integrated Circuits", "Antennas and RF Systems"]], ["Selected Engineering Projects", ["Two-Stage CMOS Operational Amplifier", "100 MHz CMOS Ring Oscillator", "2.45 GHz PIFA Antenna Array and Beam Steering"]], ["Current Experience", ["Undergraduate Researcher", "ITU VLSI Measurement Laboratory"]], ["Upcoming Experience — Summer 2026", ["Incoming Intern", "TÜBİTAK BİLGEM TÜTEL"], "upcoming"]],
    linkedinButton: "View on LinkedIn ↗", collaborateTitle: "Let’s build something meaningful.", collaborateText: "I’m open to meaningful collaborations, creative projects, business ideas, and opportunities across technology, content, and performance.", connectButton: "Let’s Connect", location: "Istanbul, Türkiye"
  },
  tr: {
    skip: "İçeriğe geç", navLabel: "Ana navigasyon", menu: "Menü", navHome: "Ana Sayfa", navAbout: "Hakkımda", navNow: "Şimdi", navInterests: "İlgi Alanları", navProjects: "Projeler", navInternational: "Uluslararası", navEngineering: "Mühendislik", navCollaborate: "İş Birliği",
    heroEyebrow: "İstanbul · Türkiye", heroRole: "Mühendis. Sporcu. Üretici.", heroIntro: "Teknoloji, girişimcilik, performans ve içerik üretimi üzerine çalışıyorum.", heroAbout: "Hakkımda", heroProjects: "Güncel Projeler", heroCollaborate: "İş Birliği", heroAlt: "Onuralp Turgut'un gece İstanbul manzarası önündeki portresi", portraitCaption: "Onuralp, İstanbul’da",
    aboutTitle: "Hakkımda", aboutTextOne: "İstanbul Teknik Üniversitesi’nde Elektronik ve Haberleşme Mühendisliği okuyorum. Teknoloji, girişimcilik, içerik üretimi ve fiziksel performans alanlarıyla ilgileniyorum.", aboutTextTwo: "Merak ve kendime ait bir şey inşa etme isteğiyle bağımsız projeler üzerinde çalışıyor, düzenli olarak koşu ve kickboks antrenmanları yapıyor ve mühendislik, iş dünyası ve dijital sistemler alanındaki yeni fikirleri keşfediyorum.", aboutNote: "Doğam gereği meraklı.<br>Tercihimle istikrarlı.",
    nowTitle: "Şimdi", nowKicker: "Şu anda odaklandığım konular.",
    now: [["Dijital Projeler", "Yapay zekâ destekli iş akışları ve otomasyonlarla bağımsız projeler geliştiriyorum."], ["İş Geliştirme", "Fikirleri ürünlere ve işlere dönüştürmeyi öğreniyorum."], ["İçerik", "Düzenli olarak kısa format içerik üretiyorum."], ["Antrenman", "Düzenli olarak koşu ve kickboks antrenmanları yapıyorum."]],
    interestsTitle: "İlgi Alanları", interestsKicker: "Bakış açımı şekillendiren konular ve disiplinler.", professionalInterestsTitle: "Profesyonel İlgi Alanları", personalInterestsTitle: "Kişisel İlgi Alanları", professionalInterests: ["Teknoloji ve Mühendislik", "Yapay Zekâ ve Otomasyon", "Girişimcilik", "İçerik Üretimi"], personalInterests: ["Koşu", "Kickboks", "Stil ve Estetik", "Fikirler ve Öğrenme"],
    projectsTitle: "Güncel Projeler", projectsKicker: "Uygulayarak öğreniyor, üreterek ilerliyorum.", projects: [
      ["Kısa Format İçerik", "Kısa format içerikleri düzenli olarak üretip yayınlarken hikâye anlatımı, çekim ve kurgu becerilerimi geliştiriyorum."], ["Yapay Zekâ Destekli Sistemler ve Otomasyon", "Web geliştirme, yapay zekâ araçları ve tekrar kullanılabilir dijital iş akışlarını keşfediyorum."], ["Bağımsız İş Deneyleri", "Ürünleri, pazarları ve müşteri ihtiyaçlarını araştırırken reklam, satış ve küçük dijital işler başlatmanın temellerini öğreniyorum."]],
    internationalTitle: "Uluslararası Deneyim", internationalKicker: "Bağımsızlığımı, iletişim becerilerimi ve uyum yeteneğimi şekillendiren deneyimler.", international: [
      ["Work & Travel — Amerika Birleşik Devletleri", "Üç yaz, 2023–2025 · New York ve Montana", "Amerika Birleşik Devletleri’nde üç yaz boyunca konaklama ve hizmet sektörlerinde yaşadım ve çalıştım. Bu deneyimler İngilizcemi, bağımsızlığımı, iletişim becerilerimi, uyum yeteneğimi ve yoğun ortamlarda çalışma kapasitemi geliştirdi."]],
    engineeringTitle: "Mühendislik", engineeringKicker: "Daha geniş bir yolculuğun odaklı bir parçası.", engineering: [
      ["Eğitim", ["Elektronik ve Haberleşme Mühendisliği Lisans Programı", "İstanbul Teknik Üniversitesi"]], ["İlgi Alanları", ["Analog Entegre Devre Tasarımı", "Karma İşaretli Sistemler", "RF Entegre Devreler", "Antenler ve RF Sistemleri"]], ["Seçili Mühendislik Projeleri", ["İki Kademeli CMOS İşlemsel Yükselteç", "100 MHz CMOS Halka Osilatör", "2,45 GHz PIFA Anten Dizisi ve Hüzme Yönlendirme"]], ["Güncel Deneyim", ["Lisans Araştırmacısı", "İTÜ VLSI Ölçüm Laboratuvarı"]], ["Yaklaşan Deneyim — 2026 Yazı", ["Stajyer", "TÜBİTAK BİLGEM TÜTEL"], "upcoming"]],
    linkedinButton: "LinkedIn’de Görüntüle ↗", collaborateTitle: "Birlikte anlamlı bir şey üretelim.", collaborateText: "Teknoloji, içerik, iş geliştirme ve performans alanlarında anlamlı iş birliklerine, yaratıcı projelere ve yeni fırsatlara açığım.", connectButton: "İletişime Geç", location: "İstanbul, Türkiye"
  }
};

const nowList = document.querySelector("#now-list");
const interestsList = document.querySelector("#interests-list");
const projectsList = document.querySelector("#projects-list");
const internationalList = document.querySelector("#international-list");
const engineeringGrid = document.querySelector("#engineering-grid");

function renderLists(content) {
  nowList.innerHTML = content.now.map(([title, description]) => `<li><div><h3>${title}</h3><p>${description}</p></div></li>`).join("");
  interestsList.innerHTML = `<section class="interest-group"><h3>${content.professionalInterestsTitle}</h3><ul>${content.professionalInterests.map(item => `<li>${item}</li>`).join("")}</ul></section><section class="interest-group"><h3>${content.personalInterestsTitle}</h3><ul>${content.personalInterests.map(item => `<li>${item}</li>`).join("")}</ul></section>`;
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

const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");
if (hero && main && !reducedMotion.matches && finePointer.matches) {
  let targetX = 50;
  let targetY = 48;
  let currentX = 50;
  let currentY = 48;
  let rafId = null;

  const renderHeroAtmosphere = () => {
    currentX += (targetX - currentX) * .14;
    currentY += (targetY - currentY) * .14;
    main.style.setProperty("--hero-x", `${currentX}%`);
    main.style.setProperty("--hero-y", `${currentY}%`);

    if (Math.abs(targetX - currentX) > .08 || Math.abs(targetY - currentY) > .08) {
      rafId = requestAnimationFrame(renderHeroAtmosphere);
    } else {
      rafId = null;
    }
  };

  window.addEventListener("pointermove", event => {
    const rect = hero.getBoundingClientRect();
    if (event.clientY < rect.top || event.clientY > rect.bottom) return;
    targetX = (event.clientX / window.innerWidth) * 100;
    targetY = ((event.clientY - rect.top) / rect.height) * 100;
    if (!rafId) rafId = requestAnimationFrame(renderHeroAtmosphere);
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    targetX = 78;
    targetY = 48;
    if (!rafId) rafId = requestAnimationFrame(renderHeroAtmosphere);
  }, { passive: true });
}

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
