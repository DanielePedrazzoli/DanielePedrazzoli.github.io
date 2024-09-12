class Navbar {

    constructor(parent,) {

        this.pages = [
            { name: "Home", link: "/" },
            { name: "About Me", link: "/pages/About.html" },
            { name: "Projects", link: "/pages/Projects.html" },
            { name: "Contact Me", link: "/#contactMe" },
        ]

        let imagePath = "../assets/icon/"
        if (window.location.pathname === '/') {
            imagePath = "/assets/icon/"
        }

        // desktop
        this.desktopNav = parent.appendChild(document.createElement("nav"))
        // var warning = this.desktopNav.appendChild(document.createElement("p"))
        // warning.id = "warning";
        // warning.innerText = "Site still under construction";

        var ul = this.desktopNav.appendChild(document.createElement("ul"));

        this.pages.forEach(element => {
            var li = ul.appendChild(document.createElement("li"));
            var link = li.appendChild(document.createElement("a"));
            link.href = element.link;
            link.innerText = element.name;

            if (element.name == document.querySelector(".navbar-container").getAttribute("selected")) {
                link.classList.add("selected");
            }
        })


        // mobile
        this.mobileNav = parent.appendChild(document.createElement("nav"))
        this.mobileNav.classList.add("mobile-nav");

        var img = this.mobileNav.appendChild(document.createElement("img"));
        img.src = imagePath + "drawer.svg";
        img.onclick = this.openDrawer

        var drawerContainer = document.querySelector("body").appendChild(document.createElement("div"))
        drawerContainer.classList.add("drawer-container");


        var drawer = drawerContainer.appendChild(document.createElement("div"))
        drawer.classList.add("drawer");

        var warning = drawer.appendChild(document.createElement("p"))
        warning.id = "warning";
        warning.innerText = "Site still under construction";

        var drawerMenu = drawer.appendChild(document.createElement("div"))
        drawerMenu.classList.add("drawer-menu");

        this.pages.forEach(element => {
            var link = drawerMenu.appendChild(document.createElement("a"));
            link.href = element.link;
            link.innerText = element.name;
        })


        var closeImg = drawer.appendChild(document.createElement("img"));
        closeImg.classList.add("close-img");
        closeImg.src = imagePath + "close.svg";
        closeImg.onclick = this.closeDrawer;


        // this.openDrawer();

    }


    closeDrawer() {
        document.querySelector('.drawer-container').classList.remove('open');
        document.querySelector('body').classList.remove('mobile-nav-open');
    }

    openDrawer() {
        document.querySelector('.drawer-container').classList.add('open');
        document.querySelector('body').classList.add('mobile-nav-open');
    }


}


var nav = new Navbar(document.querySelector(".navbar-container"))