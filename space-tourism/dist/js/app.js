// bouton Explore vers la page destination 

const btnExplore = document.querySelector(".btn-explore");

btnExplore.addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/space-tourism/pages/destination-moon.html";
});

// burger animation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a')

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();