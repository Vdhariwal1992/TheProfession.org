document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     BRAND GRADIENT SYSTEM (LOGO-SYNCED)
  ================================ */
  const brandGradients = [
    "linear-gradient(120deg,#2563eb,#22d3ee,#a3e635)",
    "linear-gradient(120deg,#7c3aed,#ec4899,#503723)",
    "linear-gradient(120deg,#10b981,#14b8a6,#38bdf8)",
    "linear-gradient(120deg,#f59e0b,#fb7185,#d946ef)",
    "linear-gradient(120deg,#4f46e5,#2563eb,#22d3ee)",
    "linear-gradient(120deg,#84cc16,#c5c022,#da5e7f)",
    "linear-gradient(120deg,#0b3c8a,#1fd1b5,#1a9529)",
    "linear-gradient(120deg,#fb7185,#f97316,#fde047)"
  ];

  const features = [
    { title: "Internships", image: "assets/images/internships.png" },
    { title: "Jobs", image: "assets/images/jobs.png" },
    { title: "Competitions", image: "assets/images/competitions.png" },
    { title: "Mock Tests", image: "assets/images/mock-tests.png" },
    { title: "Mock Interviews", image: "assets/images/mock-interviews.png" },
    { title: "Mentorship", image: "assets/images/mentorship.png" },
    { title: "Courses", image: "assets/images/courses.png" },
    { title: "AI Coach", image: "assets/images/ai-coach.png" }
  ];

  const wrapper = document.getElementById("featureCards");
  if (!wrapper) return;

  /* ================================
     HORIZONTAL SCROLL WRAPPER
  ================================ */
  Object.assign(wrapper.style, {
    display: "flex",
    flexWrap: "nowrap",
    gap: "18px",
    overflowX: "auto",
    padding: "12px 0",
    scrollBehavior: "smooth",
    WebkitOverflowScrolling: "touch"
  });

  wrapper.style.scrollbarWidth = "none";
  wrapper.style.msOverflowStyle = "none";

  wrapper.addEventListener("wheel", e => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      wrapper.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  /* ================================
     CREATE CARDS
  ================================ */
  features.forEach((item, index) => {

  const gradient = brandGradients[index % brandGradients.length];

  const card = document.createElement("div");
  Object.assign(card.style, {
    flex: "0 0 140px",
    height: "150px",
    borderRadius: "26px",
    background: gradient,
    backgroundSize: "300% 300%",
    animation: "cardGradient 12s ease infinite",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    cursor: "pointer",
    transition: "transform .3s ease"
  });

  card.onmouseenter = () => {
    card.style.transform = "translateY(-4px) scale(1.04)";
    card.style.backgroundPosition = "100% 50%";
  };

  card.onmouseleave = () => {
    card.style.transform = "none";
    card.style.backgroundPosition = "0% 50%";
  };

  /* IMAGE — DIRECTLY ON CARD (NO BACKGROUND) */
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;

  Object.assign(img.style, {
    width: "92px",
    height: "92px",
    objectFit: "fill",
    marginTop: "6px"
  });

  /* LABEL */
  const label = document.createElement("p");
  label.textContent = item.title;

  Object.assign(label.style, {
    margin: "0",
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: "0.3px"
  });

  /* ✅ APPEND ORDER (CRITICAL) */
  card.appendChild(img);
  card.appendChild(label);
  wrapper.appendChild(card);
});

  /* ================================
     GRADIENT ANIMATION (INJECTED ONCE)
  ================================ */
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes cardGradient{
      0%{background-position:0% 50%;}
      50%{background-position:100% 50%;}
      100%{background-position:0% 50%;}
    }
  `;
  document.head.appendChild(style);

});
document.addEventListener("DOMContentLoaded", () => {

  const footerBrand = document.querySelector(".footer-brand");
  const logoImg = footerBrand?.querySelector("img");

  if (!logoImg) return;

  /* FORCE VISIBILITY — PNG WITH TRANSPARENT PADDING */
  Object.assign(logoImg.style, {
    width: "280px",        // 🔥 force readable size
    maxWidth: "100%",
    height: "auto",
    display: "block",
    marginBottom: "10px"
  });

  /* FOOTER BRAND WRAPPER */
  Object.assign(footerBrand.style, {
    maxWidth: "320px"
  });

  /* MOBILE ADJUSTMENT */
  const resizeLogo = () => {
    if (window.innerWidth < 768) {
      logoImg.style.width = "240px";
      logoImg.style.marginLeft = "auto";
      logoImg.style.marginRight = "auto";
      footerBrand.style.textAlign = "center";
    } else {
      logoImg.style.width = "280px";
      footerBrand.style.textAlign = "left";
    }
  };

  resizeLogo();
  window.addEventListener("resize", resizeLogo);

});
document.addEventListener("DOMContentLoaded", () => {

  const features = [
    {
      title: "Resume Builder",
      image: "assets/images/resume.jpg"
    },
    {
      title: "Virtual Interviews",
      image: "assets/images/interview.jpg"
    },
    {
      title: "Hiring Solutions",
      image: "assets/images/hiring.jpg"
    },
    {
      title: "Industry Insights",
      image: "assets/images/industry.jpg"
    },
    {
      title: "Workforce Performance",
      image: "assets/images/performance.jpg"
    },
    {
      title: "Skill Assessments",
      image: "assets/images/skills.jpg"
    }
  ];

  const container = document.getElementById("featuredCards");

  features.forEach(item => {
    const card = document.createElement("div");
    card.className = "featured-card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="featured-overlay">${item.title}</div>
    `;

    container.appendChild(card);
  });

});
