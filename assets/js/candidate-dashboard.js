let isPremiumUser = false;

/* ================= DROPDOWN PROFILE ================= */

document.addEventListener("DOMContentLoaded", () => {

  const avatar = document.getElementById("topProfilePic");
  const dropdown = document.querySelector(".top-dropdown");

  let dropTimeout;

  avatar.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.add("show");

    clearTimeout(dropTimeout);
    dropTimeout = setTimeout(() => {
      dropdown.classList.remove("show");
    }, 4000);
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("show");
  });

  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(dropTimeout);
  });

  dropdown.addEventListener("mouseleave", () => {
    dropTimeout = setTimeout(() => {
      dropdown.classList.remove("show");
    }, 2000);
  });

});


/* ================= NOTIFICATION BELL ================= */

document.addEventListener("DOMContentLoaded", () => {

  const bell = document.getElementById("notifWrap");
  const dropdown = document.getElementById("notifDropdown");
  const countBadge = document.getElementById("notifCount");

  const notifications = [
    { title:"New Job Posted", text:"Indigo posted Cabin Crew job" },
    { title:"Profile Viewed", text:"HR from Infosys viewed your profile" },
    { title:"Connection Request", text:"Anita Verma sent you a request" }
  ];

  if(notifications.length > 0){
    countBadge.style.display = "flex";
    countBadge.textContent = notifications.length;

    let html = "<h4>Notifications</h4>";

    notifications.forEach(n=>{
      html += `
        <div class="notif-item">
          <b>${n.title}</b>
          <span>${n.text}</span>
        </div>
      `;
    });

    dropdown.innerHTML = html;
  }else{
    countBadge.style.display = "none";
  }

  bell.addEventListener("click",(e)=>{
    e.stopPropagation();
    if(notifications.length === 0) return;
    dropdown.classList.toggle("show");
    countBadge.style.display = "none";
  });

  document.addEventListener("click",()=>{
    dropdown.classList.remove("show");
  });

});


/* ================= PREMIUM MESSAGE ================= */

const msgBtn = document.querySelector(".side-btn.msg");

if(msgBtn){
  if(!isPremiumUser){
    msgBtn.classList.add("locked");
    msgBtn.textContent = "Message (Premium)";
  }

  msgBtn.addEventListener("click", () => {
    if(!isPremiumUser){
      openPremiumModal();
      return;
    }
    console.log("Open chat...");
  });
}


/* ================= MODALS ================= */

function openPremiumModal(){
  document.getElementById("premiumModal").classList.add("show");
}

function closePremiumModal(){
  document.getElementById("premiumModal").classList.remove("show");
}

function openModal(){
  document.getElementById("editModal").classList.add("show");
}

function closeModal(){
  document.getElementById("editModal").classList.remove("show");
}


/* ================= CARD ANIMATION ================= */

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
});

document.querySelectorAll(".card").forEach(card=>{
  card.classList.add("animate");
  observer.observe(card);
});

function openPremiumModal(){
  document.getElementById("premiumModal").classList.add("show");
}

function closePremiumModal(){
  document.getElementById("premiumModal").classList.remove("show");
}

const aiBtn = document.querySelector(".resume-score .side-btn");

if(aiBtn){
  aiBtn.addEventListener("click", ()=>{
    openPremiumModal();
  });
}
