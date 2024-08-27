const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById("mobile-nav");

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle("-translate-x-full");
})