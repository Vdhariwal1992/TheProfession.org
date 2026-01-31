console.log("Profile JS Loaded");
const form = document.getElementById("profileForm");
const resumeInput = document.getElementById("resumeFile");
const resumeName = document.getElementById("resumeName");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

/* FIELDS TO TRACK */
const trackedFields = [
  "full_name",
  "city",
  "phone",
  "gender",
  "current_role",
  "experience",
  "skills",
  "qualification",
  "passing_year",
  "institute"
];

/* FILE NAME DISPLAY */
resumeInput.addEventListener("change", () => {
  resumeName.textContent = resumeInput.files[0]?.name || "No file selected";
  updateProgress();
});

/* INPUT CHANGE */
form.addEventListener("input", updateProgress);

function updateProgress(){
  let filled = 0;

  trackedFields.forEach(name=>{
    const field = form.querySelector(`[name="${name}"]`);
    if(field && field.value.trim() !== "") filled++;
  });

  if(resumeInput.files.length > 0) filled++;

  const total = trackedFields.length + 1; // + resume
  const percent = Math.round((filled / total) * 100);

  progressFill.style.width = percent + "%";
  progressText.textContent = percent + "%";
}

/* SUBMIT */
form.addEventListener("submit", async (e)=>{
  e.preventDefault();

  const data = new FormData(form);

  try{
    const res = await fetch("http://localhost:5001/api/profile/save",{
      method:"POST",
      body:data,
      headers:{
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });

    const result = await res.json();

    if(res.ok){
      alert("Profile saved successfully");
      window.location.href = "../jobs.html";
    }else{
      alert(result.message || "Error saving profile");
    }

  }catch(err){
    alert("Server not reachable");
    console.error(err);
  }
});


/* AI RESUME BUTTON */
document.getElementById("aiResumeBtn").addEventListener("click",()=>{
  window.location.href = "ai-resume-payment.html"; // next step
});
const photoInput = document.getElementById("profilePhoto");
const photoPreview = document.getElementById("photoPreview");

photoInput?.addEventListener("change", ()=>{
  const file = photoInput.files[0];
  if(file){
    photoPreview.src = URL.createObjectURL(file);
  }
});
/*****************************************
 EXPERIENCE SECTION — FINAL WORKING CODE
******************************************/
/****************************************
 EXPERIENCE — FINAL CLEAN WORKING SYSTEM
*****************************************/

const today = new Date();

/* INIT PICKERS + CHECKBOX */
function initExpBlock(block){

  const from = block.querySelector(".exp-from");
  const to = block.querySelector(".exp-to");
  const check = block.querySelector(".current-work");
  const toWrap = block.querySelector(".to-wrap");

  flatpickr(from,{
    maxDate: today,
    plugins:[new monthSelectPlugin({ dateFormat:"F Y" })]
  });

  const toPicker = flatpickr(to,{
    maxDate: today,
    plugins:[new monthSelectPlugin({ dateFormat:"F Y" })]
  });

  check.addEventListener("change",()=>{
    if(check.checked){
      toPicker.clear();
      to.value = "Present";
      toWrap.style.display = "none";
    }else{
      to.value = "";
      toWrap.style.display = "block";
    }
  });
}

/* INIT FIRST BLOCK */
document.querySelectorAll(".exp-block").forEach(b=>initExpBlock(b));

/* ADD NEW JOB */
document.getElementById("addExpBtn").addEventListener("click",()=>{

  console.log("Add Experience Clicked");

  const section = document.getElementById("experienceSection");
  const first = document.querySelector(".exp-block");

  const clone = first.cloneNode(true);

  clone.querySelectorAll("input, textarea").forEach(el=>{
    if(el.type === "checkbox"){
      el.checked = false;
    }else{
      el.value = "";
    }
  });

  clone.querySelector(".to-wrap").style.display = "block";

  section.appendChild(clone);

  initExpBlock(clone);
});

