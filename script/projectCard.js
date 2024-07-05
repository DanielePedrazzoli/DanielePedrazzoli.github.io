class ProjectCard {

    constructor(parent, projectData, projectKey) {
        this.parent = parent
        this.projectData = projectData
        this.projectKey = projectKey
        this.card = this.generateCard(this.projectData, this.projectKey)
    }


    generateCard() {
        const card = this.parent.appendChild(document.createElement("div"))
        card.classList.add("project-card");

        const bannerImg = card.appendChild(document.createElement("img"))

        if (this.projectData.banner != "") {
            bannerImg.src = "../assets/Project-images/" + this.projectData.banner
        } else {
            bannerImg.src = "https://picsum.photos/200"
        }
        bannerImg.classList.add("hidden");

        const placeholder = new AnimatedPlaceHolder(card)

        bannerImg.onload = () => {
            bannerImg.classList.remove("hidden");
            placeholder.hide()
        }


        const title = card.appendChild(document.createElement("p"));
        title.innerText = this.projectData.name;


        const description = card.appendChild(document.createElement("span"));
        description.innerText = this.projectData.briefDescription



        const action = card.appendChild(document.createElement("a"))
        action.classList.add("button");
        action.classList.add("outlined");
        action.innerText = "Read more";
        action.href = "/pages/Project-display.html?project=" + this.projectKey;

    }

    limitText(text, limit) {
        if (text.length > limit) {
            return text.substring(0, limit) + "..."
        } else {
            return text
        }
    }

}
