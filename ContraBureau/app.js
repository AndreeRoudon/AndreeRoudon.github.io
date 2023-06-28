let items = document.querySelectorAll('.item');
let options = {
    root: null,
    rootMargin: "0px 0px -200px 0px",
};
let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);
items.forEach(function (item) {
    observer.observe(item);
});
