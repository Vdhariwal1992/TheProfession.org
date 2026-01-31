function openRecruiterPremium(){
  document.getElementById("recruiterPremiumModal").classList.add("show");
}

function closeRecruiterPremium(){
  document.getElementById("recruiterPremiumModal").classList.remove("show");
}
const profileToggle = document.getElementById("profileToggle");
const profileMenu = document.getElementById("profileMenu");

profileToggle.addEventListener("click", () => {
  profileMenu.style.display =
    profileMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e)=>{
  if(!e.target.closest(".top-profile")){
    profileMenu.style.display="none";
  }
});
