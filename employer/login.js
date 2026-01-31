
document.addEventListener("DOMContentLoaded", () => {

  const roleBtns = document.querySelectorAll(".role-btn");
  const roleInput = document.getElementById("userRole");
  const form = document.getElementById("loginForm");
  const toggleWrap = document.querySelector(".role-toggle");
  const heading = document.getElementById("loginTitle");

  roleBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      roleBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const role = btn.dataset.role;
      roleInput.value = role;

     const emailLabel = document.getElementById("emailLabel");
const emailInput = document.getElementById("emailInput");

if (role === "recruiter") {
  toggleWrap.classList.add("recruiter");
  heading.textContent = "Create Your Recruiter Account";

  emailLabel.textContent = "Email Address";
  emailInput.placeholder = "Enter your work email";

} else {
  toggleWrap.classList.remove("recruiter");
  heading.textContent = "Create Your Job Seeker Account";

  emailLabel.textContent = "Email Address";
  emailInput.placeholder = "Enter your email";
}


    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const role = roleInput.value;

    if (role === "recruiter") {
      window.location.href = "dashboard.html";       // recruiter dashboard
    } else {
      window.location.href = "../candidate/dashboard.html"; // candidate dashboard
    }
  });

});
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    // temporary login success
    sessionStorage.setItem("loggedIn", "true");

    // redirect
    window.location.href = "dashboard.html";
});
document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
});
