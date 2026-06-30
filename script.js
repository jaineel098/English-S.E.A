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