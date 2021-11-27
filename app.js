const loading = document.getElementById("loading");
const navigation = document.getElementById("navigation");

// adding loading system ------------------>
window.addEventListener("load", _ => loading.style.display = "none");

// scroll system add ----------------------->
window.addEventListener("scroll", _ => navigation.classList.toggle("active", window.scrollY > 0));

// type animation add ----------------------->

new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop : true
})