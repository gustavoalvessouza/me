(() => {
  const translations = {
    en: {
      "nav.projects": "Work",
      "nav.experience": "Experience",
      "nav.stack": "Stack",
      "nav.contact": "Contact",
      "hero.role": "Software Engineer — Frontend & Full Stack",
      "hero.lead":
        "Full Stack Software Engineer with 8+ years shipping production web products and deep frontend expertise. Strong in React, TypeScript, and modern frontend architecture — including microfrontends with Nx and single-spa — backed by solid full-stack delivery in Node.js and Python. I've worked across HealthTech, FinTech, GovTech, EdTech, and LogTech with Brazilian and international teams.",
      "hero.ctaPrimary": "View experience →",
      "hero.ctaCv": "Download CV",
      "hero.location": "Criciúma, Brazil · Remote",
      "hero.social": "~40k followers on Instagram + TikTok · programming content",
      "stat.years": "Years",
      "stat.sectors": "Sectors",
      "stat.followers": "Followers",
      "stat.market": "US market",
      "projects.title": "Featured work",
      "projects.subtitle": "A selection of products and platforms I've helped ship.",
      "projects.seeAll": "See experience →",
      "project.multazero":
        "LogTech platform for intelligent fleet fine management. Integrated Banco do Brasil’s API for vehicle debt payments.",
      "project.iqviaTitle": "IQVIA microfrontends",
      "project.iqvia":
        "Extracted a HealthTech frontend domain into an Nx + single-spa microfrontend for clearer ownership and independent deploys.",
      "project.flora":
        "Led React Native / Expo delivery for a breast-cancer prevention awareness app — core features, UI, and release process.",
      "work.title": "Experience",
      "work.subtitle": "Selected roles across startups and enterprise products.",
      "work.present": "Present",
      "job.iqvia.role": "Software Engineer",
      "job.iqvia.desc":
        "Building HealthTech UI for an IQVIA customer in the US. Extracted a domain into a microfrontend with Nx and single-spa to improve ownership and independent deploys — React, Redux Toolkit, Python, Jest, RTL, and GitHub Actions.",
      "job.multazero.role": "Full Stack Engineer · Part-time Contractor",
      "job.multazero.desc":
        "Part-time contractor on a LogTech platform for intelligent fleet fine management — capture, workflows, payments, and AI-assisted operations. Integrated Banco do Brasil’s API to enable vehicle debt payments directly in the product.",
      "job.vizzion.role": "Tech Lead",
      "job.vizzion.desc":
        "Led technical direction for Fybot, Beepchat, and XLink — architecture, delivery, and a path from monolith toward scalable services for communities, messaging, and AI-assisted growth.",
      "job.stone.role": "Full Stack Software Engineer",
      "job.stone.desc":
        "Four years in FinTech building customer-facing and internal platforms with React/TypeScript, NestJS/Express/Python services, WebSockets, Jest, Salesforce, and AWS.",
      "job.hitss.role": "Software Developer · Contract",
      "job.hitss.desc":
        "Frontend across PNLD (gov.br education platform), Feedback (HR tooling), and Flora — leading React Native / Expo delivery for the prevention app.",
      "job.ada.role": "Full Stack Software Developer",
      "job.ada.desc":
        "Delivered UpAir, a platform for charter, tour, and cargo aircraft hiring, with React, Node/Express, PostgreSQL, MongoDB, Docker, and AWS.",
      "stack.title": "Stack",
      "stack.subtitle": "Technologies I use to ship production software.",
      "contact.title": "Contact",
      "contact.subtitle": "The fastest ways to reach me.",
      "contact.email": "Email",
      "footer.note": "Software Engineer · Brazil",
    },
    pt: {
      "nav.projects": "Projetos",
      "nav.experience": "Experiência",
      "nav.stack": "Stack",
      "nav.contact": "Contato",
      "hero.role": "Engenheiro de Software — Frontend & Full Stack",
      "hero.lead":
        "Engenheiro de Software Full Stack com 8+ anos entregando produtos web em produção e profunda experiência em frontend. Forte em React, TypeScript e arquitetura frontend moderna — incluindo microfrontends com Nx e single-spa — com base sólida full stack em Node.js e Python. Atuei em HealthTech, FinTech, GovTech, EdTech e LogTech com times brasileiros e internacionais.",
      "hero.ctaPrimary": "Ver experiência →",
      "hero.ctaCv": "Baixar CV",
      "hero.location": "Criciúma, Brasil · Remoto",
      "hero.social": "~40k seguidores no Instagram + TikTok · conteúdo de programação",
      "stat.years": "Anos",
      "stat.sectors": "Setores",
      "stat.followers": "Seguidores",
      "stat.market": "Mercado EUA",
      "projects.title": "Trabalhos em destaque",
      "projects.subtitle": "Uma seleção de produtos e plataformas que ajudei a entregar.",
      "projects.seeAll": "Ver experiência →",
      "project.multazero":
        "Plataforma LogTech de gestão inteligente de multas para frotas. Integração com a API do Banco do Brasil para pagamento de débitos veiculares.",
      "project.iqviaTitle": "Microfrontends IQVIA",
      "project.iqvia":
        "Extração de um domínio frontend HealthTech para microfrontend com Nx + single-spa, melhorando ownership e deploys independentes.",
      "project.flora":
        "Liderança da entrega React Native / Expo de um app de prevenção ao câncer de mama — features, UI e processo de release.",
      "work.title": "Experiência",
      "work.subtitle": "Papéis selecionados em startups e produtos enterprise.",
      "work.present": "Atual",
      "job.iqvia.role": "Software Engineer",
      "job.iqvia.desc":
        "UI HealthTech para um cliente IQVIA nos EUA. Extraí um domínio para microfrontend com Nx e single-spa, melhorando ownership e deploys independentes — React, Redux Toolkit, Python, Jest, RTL e GitHub Actions.",
      "job.multazero.role": "Full Stack Engineer · Contractor part-time",
      "job.multazero.desc":
        "Contractor part-time em uma plataforma LogTech de gestão inteligente de multas para frotas — captura, fluxos, pagamentos e operações com IA. Integrei a API do Banco do Brasil para pagamento de débitos veiculares direto no produto.",
      "job.vizzion.role": "Tech Lead",
      "job.vizzion.desc":
        "Liderei a direção técnica de Fybot, Beepchat e XLink — arquitetura, entrega e transição de monólito para serviços mais escaláveis em comunidade, messaging e crescimento com IA.",
      "job.stone.role": "Full Stack Software Engineer",
      "job.stone.desc":
        "Quatro anos em FinTech construindo plataformas internas e para clientes com React/TypeScript, serviços NestJS/Express/Python, WebSockets, Jest, Salesforce e AWS.",
      "job.hitss.role": "Software Developer · Contrato",
      "job.hitss.desc":
        "Frontend no PNLD (plataforma educacional gov.br), Feedback (ferramenta de RH) e Flora — liderando a entrega React Native / Expo do app de prevenção.",
      "job.ada.role": "Full Stack Software Developer",
      "job.ada.desc":
        "Entreguei o UpAir, plataforma para contratação de aeronaves (charter, tours e carga), com React, Node/Express, PostgreSQL, MongoDB, Docker e AWS.",
      "stack.title": "Stack",
      "stack.subtitle": "Tecnologias que uso para entregar software em produção.",
      "contact.title": "Contato",
      "contact.subtitle": "Os caminhos mais rápidos para falar comigo.",
      "contact.email": "E-mail",
      "footer.note": "Engenheiro de Software · Brasil",
    },
  };

  const html = document.documentElement;
  const langToggle = document.getElementById("lang-toggle");
  const langLabel = document.getElementById("lang-label");
  const themeToggle = document.getElementById("theme-toggle");
  const yearEl = document.getElementById("year");

  const detectLang = () => {
    const saved = localStorage.getItem("ga-lang");
    if (saved === "en" || saved === "pt") return saved;
    return (navigator.language || "en").toLowerCase().startsWith("pt")
      ? "pt"
      : "en";
  };

  const detectTheme = () => {
    const saved = localStorage.getItem("ga-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  };

  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    html.lang = lang;
    langLabel.textContent = lang.toUpperCase();
    document.title =
      lang === "pt"
        ? "Gustavo Alves — Engenheiro de Software"
        : "Gustavo Alves — Software Engineer";
  };

  const setLang = (lang) => {
    localStorage.setItem("ga-lang", lang);
    applyTranslations(lang);
  };

  const setTheme = (theme) => {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("ga-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f7f7f5" : "#0a0a0a");
  };

  langToggle.addEventListener("click", () => {
    setLang(html.lang === "pt" ? "en" : "pt");
  });

  themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  setTheme(detectTheme());
  setLang(detectLang());

  const revealTargets = document.querySelectorAll(
    ".project-card, .job-card, .tech-cloud, .contact-list a, .stat"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }
})();
