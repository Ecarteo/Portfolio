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