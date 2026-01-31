document.addEventListener("DOMContentLoaded", () => {
            alert("DASHBOARD JS LOADED");

            const container = document.getElementById("myJobsContainer");
            const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

            console.log("Jobs from storage:", jobs);

            if (!container) {
                alert("Container not found");
                return;
            }

            if (!jobs.length) {
                container.innerHTML = "<p>No jobs found.</p>";
                return;
            }

            jobs.forEach(job => {
                        const div = document.createElement("div");
                        div.innerHTML = `
container.innerHTML += `
  <div class="job-item">
    <h4>${job.title}</h4>

    <div class="job-actions">
      <a href="../job-details.html?id=${job.id}">View</a>
      <a href="post-job.html?edit=${job.id}">Edit</a>
      <button data-id="${job.id}" class="delete-btn">Delete</button>
    </div>
  </div>
`;
document.querySelectorAll(".delete-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = Number(btn.dataset.id);
    const updated = jobs.filter(j => j.id !== id);
    localStorage.setItem("jobs", JSON.stringify(updated));
    location.reload();
  });
});


    container.appendChild(div);
  });
});