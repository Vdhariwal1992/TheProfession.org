const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

});
const employerBtn = document.querySelector(".employer-btn");
const employerDrop = document.querySelector(".employer-dropdown");

if(employerBtn){
  employerBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    employerDrop.classList.toggle("show");
  });
}

document.addEventListener("click", ()=>{
  employerDrop?.classList.remove("show");
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyP3gJvlmtWYvYbVqKrIEJzHrUHTcXE30",
  authDomain: "theprofession-6689b.firebaseapp.com",
  projectId: "theprofession-6689b",
  storageBucket: "theprofession-6689b.firebasestorage.app",
  messagingSenderId: "757861986100",
  appId: "1:757861986100:web:06438be52eeea5ccab3f61",
  measurementId: "G-RKYWYXQK2D"
};

/* =====================================
   SCROLL REVEAL OBSERVER
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(el => revealObserver.observe(el));

});
document.addEventListener("DOMContentLoaded", () => {

  const signupBtn = document.querySelector(".hero-signup");
  const loginBtn = document.querySelector(".hero-login");

  if (signupBtn) {
    signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "employer/signup.html";
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "employer/login.html";
    });
  }

});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

