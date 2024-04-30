let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 0.3,
};

let observer = new IntersectionObserver(callback, options);
pages.forEach(page => {
    observer.observe(page);
})

function callback(entry) {
    console.log(entry)
    var object = entry[0];
    var element = object.target;

    if (entry[0].isIntersecting) {
        selectedPage = Array.from(pages).indexOf(element);
        updateLinksState();
    }

}