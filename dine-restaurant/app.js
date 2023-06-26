// Sélectionnez les éléments des boutons
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

const images = document.querySelector(".images");
const titles = document.querySelectorAll("[data-title-slide]");
const paragraph = document.querySelectorAll("[data-text-slide]");
const btn = document.querySelectorAll("[data-btn-slide]");

// Définir l'état initial
images.dataset.imageSlide = "1";
titles[0].classList.add("active");
paragraph[0].classList.add("active");
btn[0].classList.add("active");
// Fonction pour gérer le clic sur les boutons
function handleButtonClick(imageSlideIndex) {
    // Selection de l'image
    images.dataset.imageSlide = imageSlideIndex;
    // Selection du tittre
    titles.forEach((title, index) => {
        if (index === imageSlideIndex - 1) {
            title.classList.add("active");
        } else {
            title.classList.remove("active");
        }
    });
    // Selection du paragraphe
    paragraph.forEach((elem, index) => {
        if (index === imageSlideIndex - 1) {
            elem.classList.add("active");
        } else {
            elem.classList.remove("active");
        }
    });
    // Selection du bouton
    btn.forEach((bouton, index) => {
        if (index === imageSlideIndex - 1) {
            bouton.classList.add("active");
        } else {
            bouton.classList.remove("active");
        }
    });
}

// Ajouter des gestionnaires d'événements aux boutons
btn1.addEventListener("click", function () {
    handleButtonClick(1);
});

btn2.addEventListener("click", function () {
    handleButtonClick(2);
});

btn3.addEventListener("click", function () {
    handleButtonClick(3);
});