const navLinks = document.querySelectorAll("nav a");
const pages = document.querySelectorAll("section")
console.log(pages)
var selectedPage = 0;

function init() {
    navLinks.forEach((element, index) => {
        element.addEventListener("click", () => {
            changePage(index);
        })
    });
}


function changePage(index) {
    selectedPage = index;
    pages[index].scrollIntoView()
    // updateLinksState();
}


function updateLinksState() {
    navLinks.forEach((element, index) => {
        if (index == selectedPage) {
            element.classList.add("selected");
        }
        else {
            element.classList.remove("selected");
        }
    })

}

init();
changePage(0)

