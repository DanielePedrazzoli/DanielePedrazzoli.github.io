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
            { "dest": "https://github.com/DanielePedrazzoli", "src": "../assets/icon/github-icon.svg", "alt": "github" },
            { "dest": "https://www.linkedin.com/in/daniele-pedrazzoli-69799b291", "src": "../assets/icon/linkedin-svgrepo-com.svg", "alt": "linkedin" },
        ]
        var extenralLinkContainer = col3.appendChild(document.createElement("div"));
        extenralLinkContainer.setAttribute("class", "external-link-container");
        for (var i = 0; i < externalLinks.length; i++) {
            var externalLink = extenralLinkContainer.appendChild(document.createElement("a"));
            externalLink.href = externalLinks[i].dest;
            externalLink.target = "_blank";
            var externalLinkImg = externalLink.appendChild(document.createElement("img"));
            externalLinkImg.src = externalLinks[i].src;
            externalLinkImg.alt = externalLinks[i].alt;
        }


        const style = document.createElement("style");

        style.textContent = `
        footer {
            padding: 16pt 64pt;
            background-color: var(--surface);
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
            font-size: var(--small-font-size);  
            list-style: none;
            display: flex;
            flex-direction: column;
            justyfy-content: stretch;
            // gap: 4pt;
        }


        .footer-colum li {
            font-size: var(--small-font-size);
            color:var(--body-text-color);
            width: 100%;
        }

          .footer-colum li * {
            width: 100%;
            padding: 4pt 0pt;
            display:block;
        }

        .footer-colum p {
            margin: 0%;
            font-size: var(--body-font-size);
            margin-bottom: 8pt;
            color: white;
        }

        .footer-colum span {
            color:var(--body-text-color);
            font-size: var(--small-font-size);
        }

        footer a {
            text-decoration: none;
            color:var(--body-text-color);
            font-size: var(--small-font-size);
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
            transition: all 0.2s ease-in-out;
        }


        @media (max-width: 425px) {
            footer {
                flex-direction: column;
                gap: 32pt;
                text-align: center;
                align-items: center;
            }

            footer div.external-link-container{
                justify-content: center;}
        }
            
        `;


        wrapper.appendChild(col1);
        wrapper.appendChild(col2);
        wrapper.appendChild(col3);
        shadow.appendChild(wrapper);
        shadow.appendChild(style);

    }

}



customElements.define("footer-element", FooterElement);