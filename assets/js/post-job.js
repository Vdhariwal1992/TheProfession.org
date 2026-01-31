document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  const previewBtn = document.getElementById("previewBtn");
  const confirmPostBtn = document.getElementById("confirmPostBtn");
  const overlay = document.getElementById("previewOverlay");
  const closePreview = document.getElementById("closePreview");

  const jobTitle = document.getElementById("jobTitle");
  const jobType = document.getElementById("jobType");
  const jobExp = document.getElementById("jobExp");
  const jobLocation = document.getElementById("jobLocation");
  const jobSalary = document.getElementById("jobSalary");
  const jobDesc = document.getElementById("jobDesc");

  const jobResponsibilities = document.getElementById("jobResponsibilities");
  const jobEligibility = document.getElementById("jobEligibility");
  const jobBenefits = document.getElementById("jobBenefits");

  const params = new URLSearchParams(window.location.search);
  const editId = params.get("edit");

  let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  let editingJob = null;

  /* ======================
     EDIT MODE
  ====================== */
  if (editId) {
    editingJob = jobs.find(j => j.id == editId);

    if (editingJob) {
      jobTitle.value = editingJob.title;
      jobType.value = editingJob.type;
      jobExp.value = editingJob.experience;
      jobLocation.value = editingJob.location;
      jobSalary.value = editingJob.salary;
      jobDesc.value = editingJob.description;

      jobResponsibilities.value = editingJob.responsibilities || "";
      jobEligibility.value = editingJob.eligibility || "";
      jobBenefits.value = editingJob.benefits || "";

      document.querySelector(".employer-header h1").innerText = "Edit Job";
    }
  }

  /* ======================
     PREVIEW
  ====================== */
  previewBtn.addEventListener("click", () => {
    document.getElementById("previewTitle").innerText = jobTitle.value || "Job Title";
    document.getElementById("previewType").innerText = jobType.value || "Job Type";
    document.getElementById("previewExp").innerText = jobExp.value || "Experience";
    document.getElementById("previewLocation").innerText = jobLocation.value || "Location";
    document.getElementById("previewSalary").innerText = jobSalary.value || "—";
    document.getElementById("previewDesc").innerText = jobDesc.value || "No description provided.";

    overlay.style.display = "flex";
  });

  closePreview.addEventListener("click", () => overlay.style.display = "none");
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.style.display = "none";
  });

  /* ======================
     CONFIRM & POST
  ====================== */
  confirmPostBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    form.requestSubmit(); // 🔥 THIS IS THE KEY
  });

  /* ======================
     FINAL SUBMIT (SAVE)
  ====================== */
  form.addEventListener("submit", (e) => {
  e.preventDefault();

  const jobData = {
    id: editingJob ? editingJob.id : Date.now(),
    title: jobTitle.value,
    company: "Employer Company",
    location: jobLocation.value,
    salary: jobSalary.value,
    type: jobType.value,
    experience: jobExp.value,
    description: jobDesc.value,
    responsibilities: jobResponsibilities.value,
    eligibility: jobEligibility.value,
    benefits: jobBenefits.value,
    createdAt: new Date().toISOString().split("T")[0]
  };

  if (editingJob) {
    jobs = jobs.map(j => j.id === editingJob.id ? jobData : j);
  } else {
    jobs.push(jobData);
  }

  localStorage.setItem("jobs", JSON.stringify(jobs));
  window.location.href = "dashboard.html";
});


});
