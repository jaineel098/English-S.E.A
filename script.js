// ==========================
// Scroll Reveal Animation
// ==========================

const sections = document.querySelectorAll("section");

const reveal = () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};

// ==========================
// Dark / Light Mode
// ==========================

const toggle = document.createElement("button");

toggle.innerHTML = "🌙";

toggle.id = "themeBtn";

document.body.appendChild(toggle);

toggle.onclick = ()=>{

    document.body.classList.toggle("light");

    toggle.innerHTML =
        document.body.classList.contains("light")
        ? "☀️"
        : "🌙";

};

/* ===========================
Volunteer Form
=========================== */

const form = document.getElementById("volunteerForm");

if(form){

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");

form.addEventListener("submit",function(e){

e.preventDefault();

const submitBtn = form.querySelector("button");

submitBtn.innerHTML="Submitting...";

submitBtn.disabled=true;

setTimeout(()=>{

submitBtn.innerHTML="Submitted ✓";

popup.style.display="flex";

},1000);

});

closePopup.onclick=function(){

popup.style.display="none";

form.reset();

const submitBtn=form.querySelector("button");

submitBtn.innerHTML="Submit";

submitBtn.disabled=false;

};

}