const btn = {
    1:document.getElementById('btn-1'),
    2:document.getElementById('btn-2'),
    3:document.getElementById('btn-3'),
}


const slidesImages = {
    1:document.querySelector('[data-image-slide="1"]'),
    2:document.querySelector('[data-image-slide="2"]'),
    3:document.querySelector('[data-image-slide="3"]'),
}

slidesImages[1].classList.add('active');

btn[1].addEventListener("click", () => {
    btn[1].classList.toggle('active');
    slidesImages[1].classList.toggle('active');
});

btn[2].addEventListener("click", () => {
    btn[2].classList.toggle('active');
    slidesImages[2].classList.toggle('active');
});

btn[3].addEventListener("click", () => {
    btn[3].classList.toggle('active');
    slidesImages[3].classList.toggle('active');
});