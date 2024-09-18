class NavBarElement extends HTMLElement {
    constructor() {
        super();
    }


    toggleNavMobile() {
        document.querySelector("html").classList.toggle("no-scroll")
        this.container.classList.toggle("open")

        return this.container.classList.contains("open");
    }

    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });

        // Create navigation container
        this.container = document.createElement("nav");

        var destinations = [
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
        var ul = this.container.appendChild(document.createElement("ul"));

        destinations.forEach(element => {
            var li = ul.appendChild(document.createElement("li"));
            var link = li.appendChild(document.createElement("a"));
            link.href = element.link;
            link.innerText = element.name;
        })


        const openBtn = document.createElement("button");

        openBtn.classList.add("open-btn");
        openBtn.ariaLabel = "toggle menu";

        var img = openBtn.appendChild(document.createElement("img"));
        img.src = imagePath + "drawer.svg";
        img.onclick = () => {
            var isOpen = this.toggleNavMobile()

            if (isOpen) {
                img.src = imagePath + "close.svg"
            }
            else {
                img.src = imagePath + "drawer.svg";
            }
        }
        img.alt = "toggle menu";

        shadow.appendChild(openBtn);

        // // mobile
        // this.mobileNav = parent.appendChild(document.createElement("nav"))
        // this.mobileNav.classList.add("mobile-nav");

        // var img = this.mobileNav.appendChild(document.createElement("img"));
        // img.src = imagePath + "drawer.svg";
        // img.onclick = this.openDrawer

        // var drawerContainer = document.querySelector("body").appendChild(document.createElement("div"))
        // drawerContainer.classList.add("drawer-container");


        // var drawer = drawerContainer.appendChild(document.createElement("div"))
        // drawer.classList.add("drawer");

        // var warning = drawer.appendChild(document.createElement("p"))
        // warning.id = "warning";
        // warning.innerText = "Site still under construction";

        // var drawerMenu = drawer.appendChild(document.createElement("div"))
        // drawerMenu.classList.add("drawer-menu");

        // this.pages.forEach(element => {
        //     var link = drawerMenu.appendChild(document.createElement("a"));
        //     link.href = element.link;
        //     link.innerText = element.name;
        // })


        // var closeImg = drawer.appendChild(document.createElement("img"));
        // closeImg.classList.add("close-img");
        // closeImg.src = imagePath + "close.svg";
        // closeImg.onclick = this.closeDrawer;




        const style = document.createElement("style");

        style.textContent = `        
            nav {         
                padding: 8px 16px;
                background-color: transparent;
                color: rgb(245, 245, 245);
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: calc(var(--body-font-size) * 1.25);
                color: var(--primary-color);
            }

            nav ul {
                display: flex;
                flex-direction: row;
                list-style: none;
                justify-content: center;
                gap: 64px;
            
            }
                
            nav ul li a {
                text-decoration: none;
                color: var(--title-color);
                
            }

            .open-btn{
                z-index: 1;
                display:none;
                width:35pt;
                height:35pt;
                background-color: transparent;
                border: none;
                position:absolute;
                left: 100%;
                top:10pt;
                transform: translateX(calc(-100% - 10pt) );
                cursor: pointer;
            }

            .open-btn img{
                width: 100%;
                height: 100%;
                filter: invert(100%);
            }

            @media (max-width: 425px) {
                .open-btn{
                    display:block;
                }

                nav{
                    position: absolute;
                    left:150%;
                    transition:all 0.3s ease-in-out;
                    background-color:var(--surface);
                    width: 100vw;
                    height: 100vh;
                    padding:0%;
                    display:none;
                }

                nav.open{
                    left:0%;
                    display:flex;
                }


                nav ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 0%;
                    padding: 0%;
                    align-items: center;
                }

            
            }
        
        `;


        shadow.appendChild(style);
        shadow.appendChild(this.container);

    }

}



customElements.define("navbar-element", NavBarElement);