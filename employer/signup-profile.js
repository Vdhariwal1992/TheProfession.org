document.addEventListener("DOMContentLoaded", () => {

  console.log("Auth JS loaded");

  /* ===== PAGE DETECT ===== */

  const isSignup = document.body.classList.contains("signup-page");
  const isLogin  = document.body.classList.contains("login-page");

  /* ===== ROLE TOGGLE ===== */

  const roleBtns = document.querySelectorAll(".role-btn");
  const roleInput = document.getElementById("userRole"); // may be null on login
  const toggleWrap = document.querySelector(".role-toggle");
  const heading = document.querySelector(".signup-form-box h2");

  roleBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      roleBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const role = btn.dataset.role;

      if(roleInput){
        roleInput.value = role;
      }

      if (role === "recruiter") {
        toggleWrap.classList.add("recruiter");

        if(isSignup && heading){
          heading.textContent = "Create Your Recruiter Account";
        }
        if(isLogin && heading){
          heading.textContent = "Login as Recruiter";
        }

      } else {
        toggleWrap.classList.remove("recruiter");

        if(isSignup && heading){
          heading.textContent = "Create Your Job Seeker Account";
        }
        if(isLogin && heading){
          heading.textContent = "Login as Job Seeker";
        }
      }

    });
  });


  /* ===== PASSWORD UX (SIGNUP ONLY) ===== */

  const pass = document.getElementById("password");
  const confirmPass = document.getElementById("confirmPassword");
  const strengthBar = document.querySelector(".strength-bar span");
  const strengthText = document.getElementById("strengthText");
  const matchText = document.getElementById("matchText");

  console.log("Password fields:", pass, confirmPass);

  if(pass && confirmPass){

    pass.addEventListener("input", () => {

      const val = pass.value;
      let strength = 0;

      if(val.length >= 8) strength++;
      if(/[A-Z]/.test(val)) strength++;
      if(/[0-9]/.test(val)) strength++;
      if(/[^A-Za-z0-9]/.test(val)) strength++;

      pass.classList.remove("weak","strong");

      if(val.length === 0){
        strengthBar.style.width = "0%";
        strengthText.textContent = "";
      }
      else if(strength <= 2){
        strengthBar.style.width = "40%";
        strengthBar.style.background = "#ef4444";
        strengthText.textContent = "Weak";
        pass.classList.add("weak");
      }
      else if(strength === 3){
        strengthBar.style.width = "70%";
        strengthBar.style.background = "#f59e0b";
        strengthText.textContent = "Good";
      }
      else{
        strengthBar.style.width = "100%";
        strengthBar.style.background = "#22c55e";
        strengthText.textContent = "Strong";
        pass.classList.add("strong");
      }
    });


    confirmPass.addEventListener("input", () => {

      if(confirmPass.value.length === 0){
        matchText.textContent = "";
        matchText.className = "";
        return;
      }

      if(pass.value === confirmPass.value){
        matchText.textContent = "✔ Passwords match";
        matchText.className = "match-ok";
      } else {
        matchText.textContent = "✖ Passwords do not match";
        matchText.className = "match-bad";
      }
    });

  }

});
document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    // simulate account creation
    sessionStorage.setItem("loggedIn", "true");

    window.location.href = "dashboard.html";
});
document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
});
