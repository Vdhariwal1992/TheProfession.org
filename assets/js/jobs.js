document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("jobsContainer");
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  if (!jobs.length) {
    container.innerHTML = "<p>No jobs available.</p>";
    return;
  }

  container.innerHTML = "";

  jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <div class="job-main">
        <h3>${job.title}</h3>
        <p class="company">${job.company} • ${job.location}</p>
        <p class="meta">${job.salary} • ${job.type}</p>
      </div>
      <div class="job-actions">
        <a href="job-details.html?id=${job.id}" class="btn-outline">
          View Details
        </a>
      </div>
    `;

    container.appendChild(card);
  });
});
