// loading screen
const loader = document.getElementById('loader');
let isLoaded = false;

const removeLoader = () => {
    if (isLoaded) return;
    isLoaded = true;

    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 500);
};

window.addEventListener('load', removeLoader); // page ready
setTimeout(removeLoader, 4000); // fail-safe

// reveal elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
});

const hiddenElements = document.querySelectorAll('.apply-animation');
hiddenElements.forEach((el) => observer.observe(el));

// load current year
document.getElementById('year').textContent = new Date().getFullYear();