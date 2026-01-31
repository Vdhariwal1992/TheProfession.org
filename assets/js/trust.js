document.addEventListener("DOMContentLoaded", () => {

  const section = document.getElementById("trustSection");
  if (!section) return;

  /* =========================
     SECTION BASE (tight spacing)
  ========================= */
  Object.assign(section.style, {
    width: "100%",
    padding: "30px 0 40px"
  });

  const container = document.createElement("div");
  Object.assign(container.style, {
    width: "95%",
    maxWidth: "1300px",
    margin: "auto"
  });

  /* =========================
     HEADING (one line)
  ========================= */
  const heading = document.createElement("h2");
  heading.innerHTML = "Why professionals <span>trust us</span>";

  Object.assign(heading.style, {
    fontFamily: "Nunito, sans-serif",
    fontSize: "42px",
    fontWeight: "900",
    marginBottom: "30px",
    textAlign: "center",
    whiteSpace: "nowrap",
    background: "linear-gradient(90deg,#0b3c8a,#1fd1b5,#7ddf64)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  });

  /* =========================
     TRUST DATA
  ========================= */
  const trustData = [
    {
      title: "AI-Powered Platform",
      text: "Smart tools for resumes, assessments, interviews, and hiring—powered by practical AI.",
      img: "assets/images/trust-ai.png",
      imgSize: "64px"
    },
    {
      title: "Industry-Led Design",
      text: "Built by professionals with real experience in hiring, HR, and career development.",
      img: "assets/images/trust-industry.png",
      imgSize: "56px"
    },
    {
      title: "Privacy-First Architecture",
      text: "Your data stays yours. Designed with privacy-by-design and modern security principles.",
      img: "assets/images/trust-privacy.png",
      imgSize: "48px"
    },
    {
      title: "Built for India, Ready for Global",
      text: "Rooted in Indian hiring realities while being designed to scale globally.",
      img: "assets/images/trust-global.png",
      imgSize: "60px"
    }
  ];

  /* =========================
     GRID (4 in one line)
  ========================= */
  const grid = document.createElement("div");
  Object.assign(grid.style, {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px"
  });

  /* =========================
     BLOCKS
  ========================= */
  trustData.forEach(item => {

    const block = document.createElement("div");
    Object.assign(block.style, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "6px"
    });

    /* IMAGE */
    const img = document.createElement("img");
    img.src = item.img;
    Object.assign(img.style, {
      width: item.imgSize,
      height: "auto"
    });

    /* TITLE */
    const title = document.createElement("h3");
    title.innerText = item.title;
 Object.assign(title.style, {
  fontSize: "18px",
  fontWeight: "700",
  margin: "6px 0 6px",
  color: "#0f172a",
  minHeight: "48px",      // 🔥 forces all titles to align
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
});

    /* PARAGRAPH (no drop-cap, justified) */
const para = document.createElement("p");
para.textContent = item.text;

Object.assign(para.style, {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#475569",
  margin: "0",
  textAlign: "justify",
  textJustify: "inter-word",
  wordBreak: "break-word",
  hyphens: "auto",
  minHeight: "90px"   // ✅ SAFE here
});


    block.append(img, title, para);
    grid.appendChild(block);
  });

  /* =========================
     RESPONSIVE
  ========================= */
  const resize = () => {
    if (window.innerWidth < 900) {
      grid.style.gridTemplateColumns = "repeat(2, 1fr)";
    }
    if (window.innerWidth < 560) {
      grid.style.gridTemplateColumns = "1fr";
    }
  };

  resize();
  window.addEventListener("resize", resize);

  /* =========================
     ASSEMBLE
  ========================= */
  container.append(heading, grid);
  section.appendChild(container);

});

