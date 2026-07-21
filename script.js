// Theme Toggle
const html = document.documentElement;

const btn = document.createElement("button");
btn.className = "theme-toggle";
btn.innerHTML = "🌓";
document.body.appendChild(btn);

btn.onclick = () => {
    if (html.getAttribute("data-theme") === "dark") {
        html.setAttribute("data-theme", "light");
    } else {
        html.setAttribute("data-theme", "dark");
    }
};

// Reveal Animation
const revealElements = document.querySelectorAll(
".sec,.proj-card,.sk-card,.exp-card,.edu-card,.cert-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector(
            link.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact Form
const form = document.getElementById("contact-form");

if(form){
form.addEventListener("submit",function(e){
    e.preventDefault();
    alert("Thank you! Your message has been received.");
});
}
