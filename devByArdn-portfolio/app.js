const cv = document.querySelector(".cv");
cv.addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/CV-AndreeRoudon/";
});
const cv1 = document.querySelector(".cv1");
cv1.addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/CV-AndreeRoudon/";
});


const viewProject = {
    1: document.getElementById("view-project1"),
    2: document.getElementById("view-project2"),
    3: document.getElementById("view-project3"),
    4: document.getElementById("view-project4"),
    5: document.getElementById("view-project5"),
    6: document.getElementById("view-project6")
}

const viewCode = {
    1: document.getElementById("view-code1"),
    2: document.getElementById("view-code2"),
    3: document.getElementById("view-code3"),
    4: document.getElementById("view-code4"),
    5: document.getElementById("view-code5"),
    6: document.getElementById("view-code6")
}

viewProject[1].addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/ohmyfood/";
});
viewProject[2].addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/ContraBureau/";
});
viewProject[3].addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/dine-restaurant/";
});
viewProject[4].addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/metropolis-series/";
});
viewProject[5].addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/space-tourism/";
});

viewCode[1].addEventListener('click', () => {
    window.location.href = "https://github.com/AndreeRoudon/ohmyfood";
});
viewCode[2].addEventListener('click', () => {
    window.location.href = "https://github.com/AndreeRoudon/AndreeRoudon.github.io/tree/main/ContraBureau";
});
viewCode[3].addEventListener('click', () => {
    window.location.href = "https://github.com/AndreeRoudon/AndreeRoudon.github.io/tree/main/dine-restaurant";
});
viewCode[4].addEventListener('click', () => {
    window.location.href = "https://github.com/AndreeRoudon/AndreeRoudon.github.io/tree/main/metropolis-series";
});
viewCode[5].addEventListener('click', () => {
    window.location.href = "https://github.com/AndreeRoudon/AndreeRoudon.github.io/tree/main/space-tourism";
});