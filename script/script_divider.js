class Divider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });

        const divider = document.createElement("div");
        divider.classList.add("divider");

        const style = document.createElement("style");

        style.textContent = `        
        .divider {
            width:100%;
            background-color:white;
            background: linear-gradient(to right, #FFFFFF00,var(--border-color), #FFFFFF00);
            height: 1px;
            margin: 32pt 0pt;
            border-radius:100%;
        }
    
    `;


        shadow.appendChild(style);
        shadow.appendChild(divider);

    }

}



customElements.define("custom-divider", Divider);