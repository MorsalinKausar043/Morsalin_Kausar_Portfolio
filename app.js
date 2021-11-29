const loading = document.getElementById("loading");
const navigation = document.getElementById("navigation");
const toggle_btn = document.getElementById("toggle_btn");
const mobile_nav = document.getElementById("mobile_nav");

// adding loading system ------------------>
window.addEventListener("load", _ => loading.style.display = "none");

// scroll system add ----------------------->
window.addEventListener("scroll", _ => navigation.classList.toggle("active", window.scrollY > 0));

// toggle_btn system add ----------------------->
toggle_btn.addEventListener("click", _ => {
    toggle_btn.classList.toggle("active");
    mobile_nav.classList.toggle("active");
});

// type animation add ----------------------->

new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop : true
})
new Typed(".typing2", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop : true
})