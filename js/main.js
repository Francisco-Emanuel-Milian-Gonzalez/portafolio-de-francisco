(() => {
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const year = document.getElementById("year");
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];
  const skillFills = [...document.querySelectorAll(".skill-fill")];

  if (year) year.textContent = String(new Date().getFullYear());

  const closeNav = () => {
    nav?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeNav());
  });

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);

    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 120) current = section;
    }

    if (!current) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        skillFills.forEach((fill) => {
          const level = fill.getAttribute("data-level") || "0";
          fill.style.width = `${level}%`;
        });
        skillsObserver.disconnect();
      });
    },
    { threshold: 0.35 }
  );

  const skillsSection = document.getElementById("habilidades");
  if (skillsSection) skillsObserver.observe(skillsSection);

  // Subtle parallax on hero image
  const heroImg = document.querySelector(".hero-media img");
  if (heroImg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener(
      "scroll",
      () => {
        const y = Math.min(window.scrollY, window.innerHeight);
        heroImg.style.transform = `scale(1.04) translateY(${y * 0.12}px)`;
      },
      { passive: true }
    );
  }
})();
