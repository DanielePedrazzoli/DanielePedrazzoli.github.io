class FooterElement extends HTMLElement {
    constructor() {
        super();
    }





    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });

        // Create footer
        const wrapper = document.createElement("footer");

        const colum = document.createElement("div");
        colum.setAttribute("class", "footer-colum");

        var col1 = colum.cloneNode();
        var col2 = colum.cloneNode();
        var col3 = colum.cloneNode();

        /// Colum 1
        var name = col1.appendChild(document.createElement("p"));
        name.textContent = "Daniele Pedrazzoli";
        var titleList = col1.appendChild(document.createElement("ul"));
        var title = titleList.appendChild(document.createElement("li"));
        title.textContent = "Electrical engineer";
        var title = titleList.appendChild(document.createElement("li"));
        title.textContent = "Systems designer";
        var title = titleList.appendChild(document.createElement("li"));
        title.textContent = "App developer";

        /// Colum 2
        var pages = col2.appendChild(document.createElement("p"));
        pages.textContent = "Pages";

        var pageLinks = [
            { "dest": "/", "lable": "Home" },
            { "dest": "/pages/About.html", "lable": "About Me" },
            { "dest": "/pages/Projects.html", "lable": "Projects" },
            { "dest": "/#contactMe", "lable": "Contact Me" },
        ]

        var pagesList = col2.appendChild(document.createElement("ul"));
        for (var i = 0; i < pageLinks.length; i++) {
            var pageItem = pagesList.appendChild(document.createElement("li"));
            var pageLink = pageItem.appendChild(document.createElement("a"));
            pageLink.href = pageLinks[i].dest;
            pageLink.textContent = pageLinks[i].lable;
        }


        /// Colum 3
        var projects = col3.appendChild(document.createElement("p"));
        projects.textContent = "External links";


        var externalLinks = [
            { "dest": "https://github.com/DanielePedrazzoli", "src": "../assets/icon/github-icon.svg" },
            { "dest": "https://www.linkedin.com/in/daniele-pedrazzoli-69799b291", "src": "../assets/icon/linkedin-svgrepo-com.svg" },
        ]
        var extenralLinkContainer = col3.appendChild(document.createElement("div"));
        extenralLinkContainer.setAttribute("class", "external-link-container");
        for (var i = 0; i < externalLinks.length; i++) {
            var externalLink = extenralLinkContainer.appendChild(document.createElement("a"));
            externalLink.href = externalLinks[i].dest;
            externalLink.target = "_blank";
            var externalLinkImg = externalLink.appendChild(document.createElement("img"));
            externalLinkImg.src = externalLinks[i].src;
        }


        const style = document.createElement("style");

        style.textContent = `footer {
            padding: 32px 64px;
            background-color: var(--primary-color);
            color: rgb(245, 245, 245);
            display: flex;
            justify-content: space-between;
            align-items: start;
        }

        .footer-colum {
            display: flex;
            align-items: stretch;
            flex-direction: column;
        }

        .footer-colum ul {
            margin: 0%;
            padding: 0%;
            font-size: var(--font-size-body-small);
        }


        .footer-colum li {
            list-style: none;
            margin: 0%;
            padding: 0%;
        }

        .footer-colum p {
            margin: 0%;
            font-size: var(--font-size-body-large);
            margin-bottom: 8px;
            color: white;

        }

        .footer-colum span {
            color: rgb(245, 245, 245);
            font-size: var(--font-size-body-small);
        }

        footer a {
            text-decoration: none;
            color: rgb(245, 245, 245);
        }

        footer div.external-link-container {
            display: flex;
            align-items: center;
            justify-content: left;
            gap: 8px;
        }


        footer div.external-link-container img {
            max-width: 24px;
            max-height: 24px;
            filter: grayscale(70%);
            transition: all 0.2s ease-in-out;
        }

        footer div.external-link-container img:hover {
            filter: grayscale(0%);
        }


        @media (max-width: 768px) {
            footer {
                flex-direction: column;
                gap: 48px;
                text-align: center;
                align-items: center;
            }

        }


        @media (max-width: 425px) {}`;


        wrapper.appendChild(col1);
        wrapper.appendChild(col2);
        wrapper.appendChild(col3);
        shadow.appendChild(wrapper);
        shadow.appendChild(style);

    }

}



customElements.define("custom-footer", FooterElement);