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
    window.location.href = "https://andreeroudon.github.io/news-homepage/";
});
viewProject[2].addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/blogr-landing/";
});
viewProject[3].addEventListener('click', () => {
    window.location.href = "https://andreeroudon.github.io/dine-restaurant/";
});

viewCode[1].addEventListener('click', () => {
    window.location.href = "https://github.com/AndreeRoudon/AndreeRoudon.github.io/tree/main/news-homepage";
});
viewCode[2].addEventListener('click', () => {
    window.location.href = "https://github.com/AndreeRoudon/AndreeRoudon.github.io/tree/main/blogr-landing";
});
viewCode[3].addEventListener('click', () => {
    window.location.href = "https://github.com/AndreeRoudon/AndreeRoudon.github.io/tree/main/dine-restaurant";
});