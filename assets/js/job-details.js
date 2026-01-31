document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const jobId = Number(params.get("id"));

  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const job = jobs.find(j => j.id === jobId);

  const container = document.querySelector(".job-detail-container");

  if (!job) {
    container.innerHTML = "<p style='padding:40px'>Job not found.</p>";
    return;
  }

  document.querySelector(".job-detail-header h1").innerText = job.title;
  document.querySelector(".company").innerText =
    `${job.company} • ${job.location}`;
  document.querySelector(".meta").innerText =
    `${job.salary} • ${job.type} • ${job.experience}`;

  document.querySelector("#jobDescription").innerText = job.description;

  // OPTIONAL SECTIONS (only if present)
  toggleSection("jobResponsibilities", job.responsibilities);
  toggleSection("jobEligibility", job.eligibility);
  toggleSection("jobBenefits", job.benefits);
});

function toggleSection(id, value) {
  const section = document.getElementById(id);
  if (!value || value.trim() === "") {
    section.style.display = "none";
  } else {
    section.querySelector("p, ul").innerText = value;
  }
}
